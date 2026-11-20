import * as THREE from 'three';
import { getVersion } from './data/floorplan.js';
import { createCameraController } from './engine/cameraController.js';
import { createTextureLibrary } from './scene/textures.js';
import { createLightingRig } from './scene/lighting.js';
import { buildHouse } from './scene/buildHouse.js';
import { buildFurniture } from './scene/buildFurniture.js';
import { buildLabels } from './scene/buildLabels.js';
import { createMinimap } from './ui/minimap.js';
import { initHud } from './ui/hud.js';

function resolveInitialVersion() {
  if (typeof window !== 'undefined' && window.__INITIAL_VERSION__) {
    return window.__INITIAL_VERSION__;
  }
  const params = new URLSearchParams(window.location.search);
  return params.get('v') || 'v2';
}

function disposeGroup(group) {
  if (!group) return;
  group.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        m.map?.dispose?.();
        m.bumpMap?.dispose?.();
        m.dispose?.();
      }
    }
  });
}

const canvas = document.getElementById('scene-canvas');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.08, 160);

let activePlan = getVersion(resolveInitialVersion());

const textures = createTextureLibrary(renderer.capabilities.getMaxAnisotropy());
const lighting = createLightingRig(scene, renderer, activePlan.LIGHT_SPOTS);

let houseGroup = null;
let ceilingGroup = null;
let furnitureGroup = null;
let labelsGroup = null;

function mountPlanScene(plan) {
  if (houseGroup) {
    scene.remove(houseGroup, ceilingGroup, furnitureGroup, labelsGroup);
    disposeGroup(houseGroup);
    disposeGroup(ceilingGroup);
    disposeGroup(furnitureGroup);
    disposeGroup(labelsGroup);
  }

  const built = buildHouse(plan, textures);
  houseGroup = built.houseGroup;
  ceilingGroup = built.ceilingGroup;
  furnitureGroup = buildFurniture(plan, textures);
  labelsGroup = buildLabels(plan);
  scene.add(houseGroup, ceilingGroup, furnitureGroup, labelsGroup);
}

mountPlanScene(activePlan);

let hud = null;

const controller = createCameraController({
  camera,
  domElement: canvas,
  plan: activePlan,
  onStateChange: (state) => {
    hud?.onCameraStateChange(state);
  }
});

const minimap = createMinimap({
  canvas: document.getElementById('minimap-canvas'),
  plan: activePlan,
  onTeleport: (x, z) => {
    controller.teleportTo(x, z);
  }
});

function switchVersion(versionId) {
  activePlan = getVersion(versionId);
  mountPlanScene(activePlan);
  lighting.updateSpots(activePlan.LIGHT_SPOTS);
  controller.setPlan(activePlan);
  minimap.setPlan(activePlan);
  return activePlan;
}

hud = initHud({
  controller,
  initialPlan: activePlan,
  getGroups: () => ({ houseGroup, ceilingGroup, furnitureGroup, labelsGroup }),
  lighting,
  minimap,
  onVersionSwitch: switchVersion
});

function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

window.addEventListener('resize', handleResize);

const clock = new THREE.Clock();

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  controller.update(dt);
  hud.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
