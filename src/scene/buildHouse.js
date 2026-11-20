import * as THREE from 'three';
import { WALL_HEIGHT_LOW } from '../data/floorplan.js';

function addFloorSlab(parent, { minX, maxX, minZ, maxZ, y = 0, thickness = 0.04, material }) {
  const w = maxX - minX;
  const d = maxZ - minZ;
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, thickness, d), material);
  mesh.position.set(minX + w / 2, y - thickness / 2, minZ + d / 2);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function buildWindowVertical(opening, frameMat, glassMat, sillMat) {
  const group = new THREE.Group();
  const h = opening.yTop - opening.yBottom;
  const w = opening.z2 - opening.z1;
  const zCenter = (opening.z1 + opening.z2) / 2;
  const yCenter = opening.yBottom + h / 2;
  const frameT = 0.04;
  const frameD = 0.07;

  const sill = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.03, w + 0.06), sillMat);
  sill.position.set(opening.x, opening.yBottom + 0.015, zCenter);
  sill.castShadow = true;
  sill.receiveShadow = true;
  group.add(sill);

  const topBar = new THREE.Mesh(new THREE.BoxGeometry(frameD, frameT, w), frameMat);
  topBar.position.set(opening.x, opening.yTop - frameT / 2, zCenter);
  const botBar = new THREE.Mesh(new THREE.BoxGeometry(frameD, frameT, w), frameMat);
  botBar.position.set(opening.x, opening.yBottom + frameT / 2 + 0.02, zCenter);
  const leftBar = new THREE.Mesh(new THREE.BoxGeometry(frameD, h, frameT), frameMat);
  leftBar.position.set(opening.x, yCenter, opening.z1 + frameT / 2);
  const rightBar = new THREE.Mesh(new THREE.BoxGeometry(frameD, h, frameT), frameMat);
  rightBar.position.set(opening.x, yCenter, opening.z2 - frameT / 2);
  const midMullion = new THREE.Mesh(new THREE.BoxGeometry(frameD * 0.75, h - frameT * 2, 0.03), frameMat);
  midMullion.position.set(opening.x, yCenter, zCenter);
  group.add(topBar, botBar, leftBar, rightBar, midMullion);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.012, h - frameT * 2, w - frameT * 2), glassMat);
  glass.position.set(opening.x, yCenter, zCenter);
  group.add(glass);

  return group;
}

function buildWindowHorizontal(opening, frameMat, glassMat, sillMat) {
  const group = new THREE.Group();
  const h = opening.yTop - opening.yBottom;
  const w = opening.x2 - opening.x1;
  const xCenter = (opening.x1 + opening.x2) / 2;
  const yCenter = opening.yBottom + h / 2;
  const frameT = 0.04;
  const frameD = 0.07;

  const sill = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.03, 0.18), sillMat);
  sill.position.set(xCenter, opening.yBottom + 0.015, opening.z);
  sill.castShadow = true;
  sill.receiveShadow = true;
  group.add(sill);

  const topBar = new THREE.Mesh(new THREE.BoxGeometry(w, frameT, frameD), frameMat);
  topBar.position.set(xCenter, opening.yTop - frameT / 2, opening.z);
  const botBar = new THREE.Mesh(new THREE.BoxGeometry(w, frameT, frameD), frameMat);
  botBar.position.set(xCenter, opening.yBottom + frameT / 2 + 0.02, opening.z);
  const leftBar = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, frameD), frameMat);
  leftBar.position.set(opening.x1 + frameT / 2, yCenter, opening.z);
  const rightBar = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, frameD), frameMat);
  rightBar.position.set(opening.x2 - frameT / 2, yCenter, opening.z);
  const midMullion = new THREE.Mesh(new THREE.BoxGeometry(0.03, h - frameT * 2, frameD * 0.75), frameMat);
  midMullion.position.set(xCenter, yCenter, opening.z);
  group.add(topBar, botBar, leftBar, rightBar, midMullion);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(w - frameT * 2, h - frameT * 2, 0.012), glassMat);
  glass.position.set(xCenter, yCenter, opening.z);
  group.add(glass);

  return group;
}

function buildSlidingGlassDoor(opening, frameMat, glassMat) {
  const group = new THREE.Group();
  const totalW = opening.x2 - opening.x1;
  const h = opening.yTop - opening.yBottom;
  const xCenter = (opening.x1 + opening.x2) / 2;
  const frameT = 0.045;

  const topTrack = new THREE.Mesh(new THREE.BoxGeometry(totalW, frameT, 0.11), frameMat);
  topTrack.position.set(xCenter, opening.yTop - frameT / 2, opening.z);
  const botTrack = new THREE.Mesh(new THREE.BoxGeometry(totalW, 0.018, 0.11), frameMat);
  botTrack.position.set(xCenter, 0.009, opening.z);
  const jambL = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, 0.11), frameMat);
  jambL.position.set(opening.x1 + frameT / 2, h / 2, opening.z);
  const jambR = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, 0.11), frameMat);
  jambR.position.set(opening.x2 - frameT / 2, h / 2, opening.z);
  group.add(topTrack, botTrack, jambL, jambR);

  function addLeaf(xStart, xEnd, zOffset) {
    const w = xEnd - xStart;
    const cx = (xStart + xEnd) / 2;
    const cy = h / 2;
    const zPos = opening.z + zOffset;
    const stile = 0.035;

    const glass = new THREE.Mesh(new THREE.BoxGeometry(w - stile * 2, h - 0.08, 0.012), glassMat);
    glass.position.set(cx, cy, zPos);

    const topS = new THREE.Mesh(new THREE.BoxGeometry(w, stile, 0.03), frameMat);
    topS.position.set(cx, opening.yTop - 0.05, zPos);
    const botS = new THREE.Mesh(new THREE.BoxGeometry(w, stile, 0.03), frameMat);
    botS.position.set(cx, 0.035, zPos);
    const leftS = new THREE.Mesh(new THREE.BoxGeometry(stile, h - 0.04, 0.03), frameMat);
    leftS.position.set(xStart + stile / 2, cy, zPos);
    const rightS = new THREE.Mesh(new THREE.BoxGeometry(stile, h - 0.04, 0.03), frameMat);
    rightS.position.set(xEnd - stile / 2, cy, zPos);

    group.add(glass, topS, botS, leftS, rightS);
  }

  if (opening.panels === 4) {
    addLeaf(opening.x1 + 0.03, opening.openGap.x1, 0.025);
    addLeaf(opening.x1 + 0.05, opening.openGap.x1, -0.025);
    addLeaf(opening.openGap.x2, opening.x2 - 0.05, -0.025);
    addLeaf(opening.openGap.x2, opening.x2 - 0.03, 0.025);
  } else {
    const mid = (opening.x1 + opening.x2) / 2;
    addLeaf(mid - 0.02, opening.x2 - 0.03, -0.025);
    addLeaf(mid, opening.x2 - 0.02, 0.025);
  }

  return group;
}

function buildWoodDoor(opening, woodMat, handleMat) {
  const group = new THREE.Group();
  const h = opening.yTop - opening.yBottom;
  const frameT = 0.035;

  if (opening.orientation === 'vertical') {
    const span = opening.z2 - opening.z1;
    const zCenter = (opening.z1 + opening.z2) / 2;

    const top = new THREE.Mesh(new THREE.BoxGeometry(0.14, frameT, span), woodMat);
    top.position.set(opening.x, opening.yTop - frameT / 2, zCenter);
    const j1 = new THREE.Mesh(new THREE.BoxGeometry(0.14, h, frameT), woodMat);
    j1.position.set(opening.x, h / 2, opening.z1 + frameT / 2);
    const j2 = new THREE.Mesh(new THREE.BoxGeometry(0.14, h, frameT), woodMat);
    j2.position.set(opening.x, h / 2, opening.z2 - frameT / 2);
    group.add(top, j1, j2);

    const leafW = span - frameT * 2;
    const pivot = new THREE.Group();
    if (opening.hingeAt === 'end') {
      pivot.position.set(opening.x, 0, opening.z2 - frameT);
      pivot.rotation.y = opening.swingAngle;

      const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.04, h - frameT, leafW), woodMat);
      leaf.position.set(0, (h - frameT) / 2, -leafW / 2);
      leaf.castShadow = true;
      leaf.receiveShadow = true;

      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.025, 0.11), handleMat);
      handle.position.set(0, 1.0, -(leafW - 0.08));
      pivot.add(leaf, handle);
    } else {
      pivot.position.set(opening.x, 0, opening.z1 + frameT);
      pivot.rotation.y = opening.swingAngle;

      const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.04, h - frameT, leafW), woodMat);
      leaf.position.set(0, (h - frameT) / 2, leafW / 2);
      leaf.castShadow = true;
      leaf.receiveShadow = true;

      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.025, 0.11), handleMat);
      handle.position.set(0, 1.0, leafW - 0.08);
      pivot.add(leaf, handle);
    }
    group.add(pivot);
  } else {
    const span = opening.x2 - opening.x1;
    const xCenter = (opening.x1 + opening.x2) / 2;

    const top = new THREE.Mesh(new THREE.BoxGeometry(span, frameT, 0.14), woodMat);
    top.position.set(xCenter, opening.yTop - frameT / 2, opening.z);
    const j1 = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, 0.14), woodMat);
    j1.position.set(opening.x1 + frameT / 2, h / 2, opening.z);
    const j2 = new THREE.Mesh(new THREE.BoxGeometry(frameT, h, 0.14), woodMat);
    j2.position.set(opening.x2 - frameT / 2, h / 2, opening.z);
    group.add(top, j1, j2);

    const leafW = span - frameT * 2;
    const pivot = new THREE.Group();
    pivot.position.set(opening.x1 + frameT, 0, opening.z);
    pivot.rotation.y = -opening.swingAngle;

    const leaf = new THREE.Mesh(new THREE.BoxGeometry(leafW, h - frameT, 0.04), woodMat);
    leaf.position.set(leafW / 2, (h - frameT) / 2, 0);
    leaf.castShadow = true;
    leaf.receiveShadow = true;

    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.025, 0.09), handleMat);
    handle.position.set(leafW - 0.08, 1.0, 0);
    pivot.add(leaf, handle);
    group.add(pivot);
  }

  return group;
}

function buildFrontGate(opening, metalMat, slatMat) {
  const group = new THREE.Group();
  const w = opening.x2 - opening.x1;
  const h = opening.yTop - opening.yBottom;
  const cx = (opening.x1 + opening.x2) / 2;

  const topFrame = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, 0.05), metalMat);
  topFrame.position.set(cx, opening.yTop - 0.025, opening.z);
  const botFrame = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, 0.05), metalMat);
  botFrame.position.set(cx, 0.04, opening.z);
  const postL = new THREE.Mesh(new THREE.BoxGeometry(0.05, h, 0.05), metalMat);
  postL.position.set(opening.x1 + 0.025, h / 2, opening.z);
  const postR = new THREE.Mesh(new THREE.BoxGeometry(0.05, h, 0.05), metalMat);
  postR.position.set(opening.x2 - 0.025, h / 2, opening.z);
  group.add(topFrame, botFrame, postL, postR);

  const slatCount = 12;
  for (let i = 0; i < slatCount; i += 1) {
    const y = 0.16 + i * ((h - 0.28) / (slatCount - 1));
    const slat = new THREE.Mesh(new THREE.BoxGeometry(w - 0.08, 0.09, 0.025), slatMat);
    slat.position.set(cx, y, opening.z);
    slat.castShadow = true;
    group.add(slat);
  }

  return group;
}

function buildGableMesh(gable, textures) {
  const roofH = (x) => 3.4 - 0.4 * (x / 3.8);
  const h1 = roofH(gable.x1);
  const h2 = roofH(gable.x2);

  const shape = new THREE.Shape();
  shape.moveTo(gable.x1, 3.0);
  shape.lineTo(gable.x2, 3.0);
  shape.lineTo(gable.x2, h2);
  shape.lineTo(gable.x1, h1);
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: gable.thickness,
    bevelEnabled: false
  });
  geo.translate(0, 0, -gable.thickness / 2);

  const mat = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    map: textures.getTexture('reboco', 2, 1),
    roughness: 0.86
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, 0, gable.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function buildSandwichRoofUnit(cfg, textures) {
  const group = new THREE.Group();
  const spanZ = cfg.zEnd - cfg.zStart;
  const centerZ = (cfg.zStart + cfg.zEnd) / 2;

  const xStart = -0.24;
  const xEnd = 4.04;
  const spanX = xEnd - xStart;
  const alpha = Math.atan2(cfg.yEast - cfg.yWest, 3.8);
  const slopeLen = spanX / Math.cos(alpha);
  const centerX = (xStart + xEnd) / 2;
  const centerY = cfg.yWest - (cfg.yWest - cfg.yEast) * (centerX / 3.8);

  const sloped = new THREE.Group();
  sloped.position.set(centerX, centerY, centerZ);
  sloped.rotation.z = alpha;

  const whiteBottomMat = new THREE.MeshStandardMaterial({ color: '#f7f6f2', roughness: 0.5 });
  const foamEdgeMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.78 });
  const topMetalMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('telhaSanduiche', 1.5, Math.max(1, spanZ / 2)),
    color: '#c7ced6',
    roughness: 0.36,
    metalness: 0.45
  });
  const ribMat = new THREE.MeshStandardMaterial({ color: '#8f99a3', roughness: 0.32, metalness: 0.55 });
  const purlinMat = new THREE.MeshStandardMaterial({ color: '#2b3036', roughness: 0.42, metalness: 0.6 });

  const bottomSheet = new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.018, spanZ), whiteBottomMat);
  bottomSheet.position.set(0, 0.009, 0);
  bottomSheet.castShadow = true;
  bottomSheet.receiveShadow = true;

  const foamCore = new THREE.Mesh(new THREE.BoxGeometry(slopeLen - 0.02, 0.045, spanZ - 0.02), foamEdgeMat);
  foamCore.position.set(0, 0.04, 0);

  const topSheet = new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.016, spanZ), topMetalMat);
  topSheet.position.set(0, 0.068, 0);
  topSheet.castShadow = true;
  topSheet.receiveShadow = true;

  sloped.add(bottomSheet, foamCore, topSheet);

  // Trapezoidal standing ribs running down the slope
  const ribSpacing = 0.32;
  const ribCount = Math.floor(spanZ / ribSpacing);
  for (let i = 0; i <= ribCount; i += 1) {
    const rz = -spanZ / 2 + 0.12 + i * ((spanZ - 0.24) / Math.max(1, ribCount));
    const rib = new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.03, 0.045), ribMat);
    rib.position.set(0, 0.088, rz);
    rib.castShadow = true;
    sloped.add(rib);
  }

  // Exposed dark steel purlins (tercas) visible from inside
  for (const px of [-1.45, 0, 1.45]) {
    const purlin = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.075, spanZ - 0.24), purlinMat);
    purlin.position.set(px, -0.036, 0);
    purlin.castShadow = true;
    sloped.add(purlin);
  }

  group.add(sloped);

  // Corridor rain gutter (calha) + vertical downspout (condutor)
  const gutterMat = new THREE.MeshStandardMaterial({ color: '#2b3036', roughness: 0.38, metalness: 0.55 });
  const gutter = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.09, spanZ + 0.04), gutterMat);
  gutter.position.set(4.02, 2.94, centerZ);
  gutter.castShadow = true;

  const downspout = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.86, 12), gutterMat);
  downspout.position.set(3.92, 1.5, cfg.zEnd - 0.16);
  downspout.castShadow = true;

  const elbow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.08), gutterMat);
  elbow.position.set(3.97, 0.08, cfg.zEnd - 0.16);

  group.add(gutter, downspout, elbow);
  return group;
}

function buildWaterTankSlab(cfg) {
  const group = new THREE.Group();
  const w = cfg.x2 - cfg.x1;
  const d = cfg.z2 - cfg.z1;
  const cx = (cfg.x1 + cfg.x2) / 2;
  const cz = (cfg.z1 + cfg.z2) / 2;

  const slabMat = new THREE.MeshStandardMaterial({ color: '#868d94', roughness: 0.84 });
  const slab = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d), slabMat);
  slab.position.set(cx, cfg.yTop - 0.03, cz);
  slab.castShadow = true;
  slab.receiveShadow = true;
  group.add(slab);

  // Roof floor drain on slab
  const metalMat = new THREE.MeshStandardMaterial({ color: '#2b3036', roughness: 0.4, metalness: 0.6 });
  const drain = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.015, 0.16), metalMat);
  drain.position.set(3.35, cfg.yTop + 0.045, cz);
  group.add(drain);

  // Concrete cradle base raising the water tank slightly
  const baseMat = new THREE.MeshStandardMaterial({ color: '#a5aab0', roughness: 0.8 });
  const cradle = new THREE.Mesh(new THREE.BoxGeometry(1.26, 0.08, 1.26), baseMat);
  cradle.position.set(cfg.tank.x, cfg.yTop + 0.08, cfg.tank.z);
  cradle.castShadow = true;
  cradle.receiveShadow = true;
  group.add(cradle);

  // 1,000 L blue polyethylene water tank
  const tankGroup = new THREE.Group();
  const tankMat = new THREE.MeshStandardMaterial({ color: '#1565b8', roughness: 0.34, metalness: 0.06 });
  const lidMat = new THREE.MeshStandardMaterial({ color: '#0f4f94', roughness: 0.36 });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.71, 0.57, 0.94, 28), tankMat);
  body.position.y = 0.47;
  body.castShadow = true;
  body.receiveShadow = true;
  tankGroup.add(body);

  // Stiffening horizontal molded ribs
  for (const [ry, rr] of [
    [0.24, 0.615],
    [0.52, 0.655],
    [0.78, 0.695]
  ]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.016, 8, 28), tankMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = ry;
    tankGroup.add(ring);
  }

  const lidRim = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.73, 0.06, 28), lidMat);
  lidRim.position.y = 0.96;
  lidRim.castShadow = true;
  const lidCap = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.35, 0.05, 22), lidMat);
  lidCap.position.y = 1.01;
  tankGroup.add(lidRim, lidCap);

  // Supply/overflow PVC pipe run
  const pvcMat = new THREE.MeshStandardMaterial({ color: '#9c7864', roughness: 0.55 });
  const pipeOut = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.9, 10), pvcMat);
  pipeOut.rotation.z = Math.PI / 2;
  pipeOut.position.set(0.72, 0.14, 0);
  const pipeDown = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.18, 10), pvcMat);
  pipeDown.position.set(1.16, 0.06, 0);
  tankGroup.add(pipeOut, pipeDown);

  tankGroup.position.set(cfg.tank.x, cfg.yTop + 0.12, cfg.tank.z);
  group.add(tankGroup);

  return group;
}

function buildFirstCourseModulation(plan) {
  const group = new THREE.Group();
  group.name = 'first-course-modulation';

  const blockMaterials = {
    inteiro: new THREE.MeshStandardMaterial({ color: '#c8cdd2', roughness: 0.88 }),
    amarracao: new THREE.MeshStandardMaterial({ color: '#9ab8a8', roughness: 0.85 }),
    meio: new THREE.MeshStandardMaterial({ color: '#dcc29e', roughness: 0.86 })
  };
  const edgeMat = new THREE.LineBasicMaterial({ color: '#2b3036' });
  const mortarMat = new THREE.MeshStandardMaterial({ color: '#7a7f85', roughness: 0.94 });
  const coreMat = new THREE.MeshStandardMaterial({ color: '#202429', roughness: 0.95 });
  const sillMarkMat = new THREE.MeshStandardMaterial({ color: '#2b6cb0', roughness: 0.45 });
  const groutMat = new THREE.MeshStandardMaterial({ color: '#5c636b', roughness: 0.78 });
  const rebarMat = new THREE.MeshStandardMaterial({ color: '#b8522a', roughness: 0.5, metalness: 0.65 });
  const capMat = new THREE.MeshStandardMaterial({ color: '#eab308', roughness: 0.35 });
  const thresholdMat = new THREE.MeshStandardMaterial({ color: '#1f513f', roughness: 0.55 });

  const blockGeoCache = new Map();
  const edgeGeoCache = new Map();
  const getGeos = (sizeX, h, sizeZ) => {
    const key = `${sizeX}_${h}_${sizeZ}`;
    if (!blockGeoCache.has(key)) {
      const box = new THREE.BoxGeometry(sizeX, h, sizeZ);
      blockGeoCache.set(key, box);
      edgeGeoCache.set(key, new THREE.EdgesGeometry(box));
    }
    return { box: blockGeoCache.get(key), edge: edgeGeoCache.get(key) };
  };

  for (const b of plan.FIRST_COURSE_BLOCKS) {
    const mortar = new THREE.Mesh(
      new THREE.BoxGeometry(b.sizeX + 0.008, b.yBottom, b.sizeZ + 0.008),
      mortarMat
    );
    mortar.position.set(b.x, b.yBottom / 2, b.z);
    mortar.receiveShadow = true;
    group.add(mortar);

    const { box, edge } = getGeos(b.sizeX, b.height, b.sizeZ);
    const mesh = new THREE.Mesh(box, blockMaterials[b.type] || blockMaterials.inteiro);
    const centerY = b.yBottom + b.height / 2;
    mesh.position.set(b.x, centerY, b.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    const wire = new THREE.LineSegments(edge, edgeMat);
    wire.position.copy(mesh.position);
    group.add(wire);

    const topY = b.yBottom + b.height;
    const isVert = b.axis === 'z';
    const coreThick = 0.086;

    if (b.type === 'meio') {
      const coreLen = 0.11;
      const core = new THREE.Mesh(
        new THREE.BoxGeometry(isVert ? coreThick : coreLen, 0.004, isVert ? coreLen : coreThick),
        coreMat
      );
      core.position.set(b.x, topY + 0.001, b.z);
      group.add(core);
    } else {
      const len = Math.max(b.sizeX, b.sizeZ);
      const offset = len * 0.24;
      const coreLen = b.type === 'amarracao' ? 0.095 : 0.12;
      for (const sign of [-1, 1]) {
        const core = new THREE.Mesh(
          new THREE.BoxGeometry(isVert ? coreThick : coreLen, 0.004, isVert ? coreLen : coreThick),
          coreMat
        );
        core.position.set(
          isVert ? b.x : b.x + sign * offset,
          topY + 0.001,
          isVert ? b.z + sign * offset : b.z
        );
        group.add(core);
      }
    }

    if (b.underWindow) {
      const rim = new THREE.Mesh(
        new THREE.BoxGeometry(isVert ? 0.022 : b.sizeX - 0.01, 0.006, isVert ? b.sizeZ - 0.01 : 0.022),
        sillMarkMat
      );
      rim.position.set(b.x, topY + 0.003, b.z);
      group.add(rim);
    }
  }

  // Grouted cavities + vertical steel starter dowels (arranques de graute)
  const groutPlugGeo = new THREE.BoxGeometry(0.092, 0.012, 0.092);
  const rebarGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.48, 8);
  const capGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.032, 10);

  for (const gp of plan.FIRST_COURSE_GROUT_POINTS || []) {
    const plug = new THREE.Mesh(groutPlugGeo, groutMat);
    plug.position.set(gp.x, 0.203, gp.z);
    const bar = new THREE.Mesh(rebarGeo, rebarMat);
    bar.position.set(gp.x, 0.25, gp.z);
    bar.castShadow = true;
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(gp.x, 0.5, gp.z);
    cap.castShadow = true;
    group.add(plug, bar, cap);
  }

  // Door / passage threshold markers on the radier floor
  for (const th of plan.FIRST_COURSE_THRESHOLDS || []) {
    const isHoriz = th.axis === 'x';
    const w = isHoriz ? th.x2 - th.x1 : 0.14;
    const d = isHoriz ? 0.14 : th.z2 - th.z1;
    const cx = isHoriz ? (th.x1 + th.x2) / 2 : th.x;
    const cz = isHoriz ? th.z : (th.z1 + th.z2) / 2;

    const strip = new THREE.Mesh(new THREE.BoxGeometry(w, 0.006, d), thresholdMat);
    strip.position.set(cx, 0.003, cz);
    group.add(strip);
  }

  return group;
}

export function buildHouse(plan, textures) {
  const houseGroup = new THREE.Group();
  houseGroup.name = 'house-architecture';

  const ceilingGroup = new THREE.Group();
  ceilingGroup.name = 'house-ceiling';

  const groundMat = new THREE.MeshStandardMaterial({ color: '#d8d3c9', roughness: 0.95 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(180, 180), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(2.5, -0.045, 15.0);
  ground.receiveShadow = true;
  houseGroup.add(ground);

  const sidewalkMat = new THREE.MeshStandardMaterial({ color: '#ccc6bc', roughness: 0.88 });
  const sidewalk = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.04, 1.8), sidewalkMat);
  sidewalk.position.set(2.5, -0.022, -0.95);
  sidewalk.receiveShadow = true;
  houseGroup.add(sidewalk);

  const streetMat = new THREE.MeshStandardMaterial({ color: '#55585c', roughness: 0.9 });
  const street = new THREE.Mesh(new THREE.BoxGeometry(26, 0.02, 5.5), streetMat);
  street.position.set(2.5, -0.036, -4.6);
  street.receiveShadow = true;
  houseGroup.add(street);

  const radierMat = (rx, ry) =>
    new THREE.MeshStandardMaterial({
      map: textures.getTexture('radierPolido', rx, ry),
      bumpMap: textures.getBumpTexture('radierPolido', rx, ry),
      bumpScale: 0.004,
      roughness: 0.26,
      metalness: 0.06
    });
  const extMat = (rx, ry) =>
    new THREE.MeshStandardMaterial({
      map: textures.getTexture('pisoExterno', rx, ry),
      roughness: 0.8
    });
  const woodFloorMat = (rx, ry) =>
    new THREE.MeshStandardMaterial({
      map: textures.getTexture('madeiraPiso', rx, ry),
      bumpMap: textures.getBumpTexture('madeiraPiso', rx, ry),
      bumpScale: 0.005,
      roughness: 0.44
    });
  const bathMat = (rx, ry) =>
    new THREE.MeshStandardMaterial({
      map: textures.getTexture('ceramicaBanheiro', rx, ry),
      roughness: 0.36
    });

  // Main house floors: polished Radier throughout entire interior (51.30 m²)
  addFloorSlab(houseGroup, { minX: 0, maxX: 5.0, minZ: 0, maxZ: 5.0, material: extMat(5, 5) });
  if (plan.isFirstCourseOnly) {
    addFloorSlab(houseGroup, {
      minX: -0.16,
      maxX: 3.9,
      minZ: 4.9,
      maxZ: 18.6,
      material: radierMat(2.2, 7.5)
    });
    addFloorSlab(houseGroup, { minX: 3.9, maxX: 5.0, minZ: 5.0, maxZ: 18.5, material: extMat(1.1, 13.5) });
  } else {
    addFloorSlab(houseGroup, { minX: 0, maxX: 3.8, minZ: 5.0, maxZ: 18.5, material: radierMat(2.2, 7.5) });
    addFloorSlab(houseGroup, { minX: 3.8, maxX: 5.0, minZ: 5.0, maxZ: 18.5, material: extMat(1.2, 13.5) });
  }

  // Backyard / Edicula floors (z: 18.5..30.0)
  if (plan.hasBackEdicula) {
    const grassMat = new THREE.MeshStandardMaterial({
      map: textures.getTexture('grama', 3, 4.5),
      roughness: 0.92
    });
    addFloorSlab(houseGroup, { minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 25.6, material: grassMat });
    addFloorSlab(houseGroup, { minX: 0, maxX: 3.4, minZ: 25.6, maxZ: 30.0, material: woodFloorMat(2.8, 3.4) });
    addFloorSlab(houseGroup, { minX: 3.4, maxX: 5.0, minZ: 25.6, maxZ: 30.0, material: bathMat(1.5, 3.8) });
  } else {
    const grassMat = new THREE.MeshStandardMaterial({
      map: textures.getTexture('grama', 3, 7),
      roughness: 0.92
    });
    addFloorSlab(houseGroup, { minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 30.0, material: grassMat });
  }

  if (Array.isArray(plan.FLOOR_DECKS)) {
    for (const deck of plan.FLOOR_DECKS) {
      const deckMat = new THREE.MeshStandardMaterial({
        map: textures.getTexture('pisoExterno', Math.max(1, deck.w), Math.max(1, deck.d)),
        roughness: 0.78
      });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(deck.w, 0.028, deck.d), deckMat);
      mesh.position.set(deck.x, 0.014, deck.z);
      mesh.receiveShadow = true;
      houseGroup.add(mesh);
    }
  }

  if (plan.STEPPING_STONES) {
    const { x, startZ, count, step } = plan.STEPPING_STONES;
    const paverMat = new THREE.MeshStandardMaterial({ color: '#c4beb3', roughness: 0.78 });
    for (let i = 0; i < count; i += 1) {
      const paver = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.025, 0.44), paverMat);
      paver.position.set(x, 0.012, startZ + i * step);
      paver.receiveShadow = true;
      houseGroup.add(paver);
    }
  }

  if (!plan.isFirstCourseOnly) {
    const baseboardMat = new THREE.MeshStandardMaterial({ color: '#edeae3', roughness: 0.45 });
    const westBaseboard = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.09, 13.4), baseboardMat);
    westBaseboard.position.set(0.007, 0.045, 11.75);
    houseGroup.add(westBaseboard);

    if (plan.hasBackEdicula) {
      const gamerBase = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.09, 4.3), baseboardMat);
      gamerBase.position.set(0.007, 0.045, 27.8);
      houseGroup.add(gamerBase);
    }
  }

  if (plan.isFirstCourseOnly && Array.isArray(plan.FIRST_COURSE_BLOCKS)) {
    houseGroup.add(buildFirstCourseModulation(plan));
  }

  // Walls
  const boundaryIds = new Set(['muro-oeste-quintal', 'muro-oeste-lazer', 'muro-leste-corredor', 'muro-fundos']);
  for (const w of plan.WALLS) {
    const isVert = Math.abs(w.x1 - w.x2) < 1e-6;
    const len = isVert ? Math.abs(w.z2 - w.z1) : Math.abs(w.x2 - w.x1);
    const height = w.yTop - w.yBottom;
    const sizeX = isVert ? w.thickness : len;
    const sizeZ = isVert ? len : w.thickness;
    const cx = (w.x1 + w.x2) / 2;
    const cz = (w.z1 + w.z2) / 2;
    const cy = w.yBottom + height / 2;

    const isBoundaryFence = boundaryIds.has(w.id) && w.yTop < 2.6;
    const wallMat = new THREE.MeshStandardMaterial({
      color: isBoundaryFence ? '#e4ddd2' : '#ffffff',
      map: textures.getTexture('reboco', Math.max(1, len / 2), Math.max(1, height / 2)),
      roughness: 0.86
    });

    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sizeX, height, sizeZ), wallMat);
    mesh.position.set(cx, cy, cz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    houseGroup.add(mesh);
  }

  // Sloped gable fills (oitoes)
  if (Array.isArray(plan.GABLES)) {
    for (const gable of plan.GABLES) {
      houseGroup.add(buildGableMesh(gable, textures));
    }
  }

  // Openings
  const frameMat = new THREE.MeshStandardMaterial({ color: '#24272c', roughness: 0.3, metalness: 0.6 });
  const clearGlassMat = new THREE.MeshPhysicalMaterial({
    color: '#d9eef5',
    transparent: true,
    opacity: 0.3,
    roughness: 0.06,
    metalness: 0.08,
    reflectivity: 0.92
  });
  const frostedGlassMat = new THREE.MeshPhysicalMaterial({
    color: '#e8eff2',
    transparent: true,
    opacity: 0.72,
    roughness: 0.65
  });
  const sillMat = new THREE.MeshStandardMaterial({ color: '#dfd9ce', roughness: 0.38 });
  const doorWoodMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraMovel', 1, 2),
    roughness: 0.5
  });
  const handleMat = new THREE.MeshStandardMaterial({ color: '#b7bcc2', roughness: 0.22, metalness: 0.88 });
  const gateMetalMat = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.4, metalness: 0.65 });
  const gateSlatMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraMovel', 2, 1),
    color: '#8c613e',
    roughness: 0.55
  });

  for (const op of plan.OPENINGS) {
    if (op.type === 'window') {
      houseGroup.add(buildWindowVertical(op, frameMat, op.frosted ? frostedGlassMat : clearGlassMat, sillMat));
    } else if (op.type === 'window-horizontal') {
      houseGroup.add(buildWindowHorizontal(op, frameMat, op.frosted ? frostedGlassMat : clearGlassMat, sillMat));
    } else if (op.type === 'sliding-door') {
      houseGroup.add(buildSlidingGlassDoor(op, frameMat, clearGlassMat));
    } else if (op.type === 'wood-door') {
      houseGroup.add(buildWoodDoor(op, doorWoodMat, handleMat));
    } else if (op.type === 'gate') {
      houseGroup.add(buildFrontGate(op, gateMetalMat, gateSlatMat));
    }
  }

  // Roofs & slabs inside ceilingGroup
  const ceilingMat = new THREE.MeshStandardMaterial({ color: '#faf8f4', roughness: 0.9 });
  const roofTopMat = new THREE.MeshStandardMaterial({ color: '#c8c3b9', roughness: 0.85 });

  for (const slab of plan.CEILING_SLABS) {
    const slabY = slab.y ?? WALL_HEIGHT_LOW;
    const slabMesh = new THREE.Mesh(new THREE.BoxGeometry(slab.w, 0.14, slab.d), ceilingMat);
    slabMesh.position.set(slab.x, slabY + 0.07, slab.z);
    slabMesh.castShadow = true;
    slabMesh.receiveShadow = true;
    ceilingGroup.add(slabMesh);

    const parapet = new THREE.Mesh(new THREE.BoxGeometry(slab.w + 0.06, 0.24, slab.d + 0.06), roofTopMat);
    parapet.position.set(slab.x, slabY + 0.26, slab.z);
    parapet.castShadow = true;
    ceilingGroup.add(parapet);
  }

  if (Array.isArray(plan.SANDWICH_ROOFS)) {
    for (const roof of plan.SANDWICH_ROOFS) {
      ceilingGroup.add(buildSandwichRoofUnit(roof, textures));
    }
  }

  if (plan.WATER_TANK_SLAB) {
    ceilingGroup.add(buildWaterTankSlab(plan.WATER_TANK_SLAB));
  }

  const ledMat = new THREE.MeshBasicMaterial({ color: '#fff8ea' });
  const ledTrimMat = new THREE.MeshStandardMaterial({ color: '#e2e0db', roughness: 0.35 });
  for (const spot of plan.LIGHT_SPOTS) {
    if (!spot.fixture) continue;
    const [lx, , lz] = spot.pos;
    const fy = spot.fixtureY ?? WALL_HEIGHT_LOW - 0.01;
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.42), ledTrimMat);
    trim.position.set(lx, fy, lz);
    const lens = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.022, 0.36), ledMat);
    lens.position.set(lx, fy - 0.002, lz);
    ceilingGroup.add(trim, lens);
  }

  return { houseGroup, ceilingGroup };
}
