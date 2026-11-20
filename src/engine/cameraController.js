import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EYE_HEIGHT, PLAYER_RADIUS } from '../data/floorplan.js';
import { findRoomAt, isPositionBlocked, resolvePlayerMovement } from './collision.js';

const AERIAL_CAMERA_POS = new THREE.Vector3(19.5, 23.0, 15.0);
const AERIAL_TARGET = new THREE.Vector3(2.5, 0.5, 15.0);
const WALK_SPEED = 2.65;
const TURN_SPEED = 1.65;
const DRAG_SENSITIVITY = 0.0042;

function computeYawPitch(fromVec, toVec) {
  const dx = toVec[0] - fromVec[0];
  const dy = toVec[1] - fromVec[1];
  const dz = toVec[2] - fromVec[2];
  const horiz = Math.hypot(dx, dz) || 1e-5;
  const yaw = Math.atan2(-dx, -dz);
  const pitch = THREE.MathUtils.clamp(Math.atan2(dy, horiz), -1.15, 1.15);
  return { yaw, pitch };
}

function normalizeAngleDiff(target, current) {
  let diff = target - current;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return current + diff;
}

export function createCameraController({ camera, domElement, plan, onStateChange }) {
  camera.rotation.order = 'YXZ';

  let rooms = plan.ROOMS;
  let colliders = plan.getColliders();

  const orbit = new OrbitControls(camera, domElement);
  orbit.enabled = false;
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.minDistance = 4.5;
  orbit.maxDistance = 48;
  orbit.maxPolarAngle = Math.PI * 0.46;
  orbit.target.copy(AERIAL_TARGET);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let mode = 'walk';
  const walkPos = { x: 1.75, z: 5.65 };
  let yaw = 0;
  let pitch = 0;
  let currentRoomId = null;
  let transition = null;

  const keys = new Set();
  const padInput = { forward: 0, strafe: 0, turn: 0 };

  let isDragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;

  function applyWalkPose() {
    camera.position.set(walkPos.x, EYE_HEIGHT, walkPos.z);
    camera.rotation.set(pitch, yaw, 0, 'YXZ');
  }

  function emitRoomIfChanged(force = false) {
    const room = findRoomAt(walkPos.x, walkPos.z, rooms);
    const nextId = room ? room.id : null;
    if (force || nextId !== currentRoomId) {
      currentRoomId = nextId;
      onStateChange?.({ mode, room });
    }
  }

  function snapToRoomPreset(roomId) {
    const room = rooms.find((r) => r.id === roomId) || rooms[0];
    walkPos.x = room.cameraPreset.pos[0];
    walkPos.z = room.cameraPreset.pos[2];
    const angles = computeYawPitch(room.cameraPreset.pos, room.cameraPreset.lookAt);
    yaw = angles.yaw;
    pitch = angles.pitch;
    applyWalkPose();
    emitRoomIfChanged(true);
  }

  snapToRoomPreset('sala');

  function setPlan(nextPlan) {
    rooms = nextPlan.ROOMS;
    colliders = nextPlan.getColliders();
    transition = null;

    if (isPositionBlocked(walkPos, colliders, PLAYER_RADIUS) || !findRoomAt(walkPos.x, walkPos.z, rooms)) {
      const fallback = rooms.find((r) => r.id === 'sala') || rooms[0];
      walkPos.x = fallback.cameraPreset.pos[0];
      walkPos.z = fallback.cameraPreset.pos[2];
      const angles = computeYawPitch(fallback.cameraPreset.pos, fallback.cameraPreset.lookAt);
      yaw = angles.yaw;
      pitch = angles.pitch;
    }

    if (mode === 'walk') {
      applyWalkPose();
    }
    emitRoomIfChanged(true);
  }

  function setMode(nextMode) {
    if (nextMode === mode) return;
    mode = nextMode;
    transition = null;

    if (mode === 'aerial') {
      orbit.enabled = true;
      orbit.target.copy(AERIAL_TARGET);
      camera.position.copy(AERIAL_CAMERA_POS);
      orbit.update();
    } else {
      orbit.enabled = false;
      applyWalkPose();
    }

    onStateChange?.({ mode, room: findRoomAt(walkPos.x, walkPos.z, rooms) });
  }

  function startWalkTransition(targetX, targetZ, targetYaw, targetPitch) {
    const wasAerial = mode !== 'walk';
    if (wasAerial) {
      mode = 'walk';
      orbit.enabled = false;
    }

    const safe = resolvePlayerMovement({ x: targetX, z: targetZ }, { x: targetX, z: targetZ }, colliders, PLAYER_RADIUS);

    if (wasAerial || reducedMotion.matches) {
      transition = null;
      walkPos.x = safe.x;
      walkPos.z = safe.z;
      yaw = targetYaw;
      pitch = targetPitch;
      applyWalkPose();
      emitRoomIfChanged(true);
      return;
    }

    transition = {
      elapsed: 0,
      duration: 0.36,
      startPos: camera.position.clone(),
      endPos: new THREE.Vector3(safe.x, EYE_HEIGHT, safe.z),
      startYaw: yaw,
      endYaw: normalizeAngleDiff(targetYaw, yaw),
      startPitch: pitch,
      endPitch: targetPitch
    };
  }

  function goToRoom(roomId) {
    const room = rooms.find((r) => r.id === roomId);
    if (!room) return;
    const { pos, lookAt } = room.cameraPreset;
    const angles = computeYawPitch(pos, lookAt);
    startWalkTransition(pos[0], pos[2], angles.yaw, angles.pitch);
    onStateChange?.({ mode: 'walk', room });
  }

  function teleportTo(x, z) {
    startWalkTransition(x, z, yaw, 0);
    onStateChange?.({ mode: 'walk', room: findRoomAt(x, z, rooms) });
  }

  function setPadInput(next) {
    padInput.forward = next.forward ?? padInput.forward;
    padInput.strafe = next.strafe ?? padInput.strafe;
    padInput.turn = next.turn ?? padInput.turn;
  }

  function onPointerDown(e) {
    if (mode !== 'walk' || e.button !== 0) return;
    isDragging = true;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    domElement.setPointerCapture?.(e.pointerId);
    domElement.classList.add('is-dragging');
  }

  function onPointerMove(e) {
    if (!isDragging || mode !== 'walk') return;
    const dx = e.clientX - lastPointerX;
    const dy = e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    yaw += dx * DRAG_SENSITIVITY;
    pitch = THREE.MathUtils.clamp(pitch + dy * DRAG_SENSITIVITY, -1.15, 1.15);
    transition = null;
    applyWalkPose();
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    domElement.releasePointerCapture?.(e.pointerId);
    domElement.classList.remove('is-dragging');
  }

  function onKeyDown(e) {
    const activeDialog = document.querySelector('dialog[open]');
    if (activeDialog || e.ctrlKey || e.metaKey || e.altKey) return;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
      if (mode === 'walk') {
        keys.add(e.code);
      }
    }
  }

  function onKeyUp(e) {
    keys.delete(e.code);
  }

  function onBlur() {
    keys.clear();
    padInput.forward = 0;
    padInput.strafe = 0;
    padInput.turn = 0;
    isDragging = false;
    domElement.classList.remove('is-dragging');
  }

  domElement.addEventListener('pointerdown', onPointerDown);
  domElement.addEventListener('pointermove', onPointerMove);
  domElement.addEventListener('pointerup', onPointerUp);
  domElement.addEventListener('pointercancel', onPointerUp);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);

  function update(dt) {
    if (mode === 'aerial') {
      orbit.update();
      return;
    }

    if (transition) {
      transition.elapsed += dt;
      const rawT = Math.min(1, transition.elapsed / transition.duration);
      const t = 1 - Math.pow(1 - rawT, 3);
      camera.position.lerpVectors(transition.startPos, transition.endPos, t);
      yaw = THREE.MathUtils.lerp(transition.startYaw, transition.endYaw, t);
      pitch = THREE.MathUtils.lerp(transition.startPitch, transition.endPitch, t);
      walkPos.x = camera.position.x;
      walkPos.z = camera.position.z;
      camera.rotation.set(pitch, yaw, 0, 'YXZ');

      if (rawT >= 1) {
        transition = null;
        emitRoomIfChanged(true);
      }
      return;
    }

    const fwdKey = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
    const strafeKey = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0);
    const turnKey = (keys.has('ArrowLeft') ? 1 : 0) - (keys.has('ArrowRight') ? 1 : 0);

    const fwd = THREE.MathUtils.clamp(fwdKey + padInput.forward, -1, 1);
    const strafe = THREE.MathUtils.clamp(strafeKey + padInput.strafe, -1, 1);
    const turn = THREE.MathUtils.clamp(turnKey + padInput.turn, -1, 1);

    if (turn !== 0) {
      yaw += turn * TURN_SPEED * dt;
    }

    if (fwd !== 0 || strafe !== 0) {
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);

      let mx = fx * fwd + rx * strafe;
      let mz = fz * fwd + rz * strafe;
      const len = Math.hypot(mx, mz);
      if (len > 1) {
        mx /= len;
        mz /= len;
      }

      const desired = {
        x: walkPos.x + mx * WALK_SPEED * dt,
        z: walkPos.z + mz * WALK_SPEED * dt
      };
      const resolved = resolvePlayerMovement(walkPos, desired, colliders, PLAYER_RADIUS);
      walkPos.x = resolved.x;
      walkPos.z = resolved.z;
      emitRoomIfChanged(false);
    }

    applyWalkPose();
  }

  function getPose() {
    return {
      mode,
      x: walkPos.x,
      z: walkPos.z,
      yaw,
      room: findRoomAt(walkPos.x, walkPos.z, rooms)
    };
  }

  function dispose() {
    domElement.removeEventListener('pointerdown', onPointerDown);
    domElement.removeEventListener('pointermove', onPointerMove);
    domElement.removeEventListener('pointerup', onPointerUp);
    domElement.removeEventListener('pointercancel', onPointerUp);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('blur', onBlur);
    orbit.dispose();
  }

  return {
    setPlan,
    setMode,
    goToRoom,
    teleportTo,
    setPadInput,
    update,
    getPose,
    dispose
  };
}
