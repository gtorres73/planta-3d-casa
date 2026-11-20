import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function createSkyTexture(topHex, middleHex, horizonHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0.0, topHex);
  grad.addColorStop(0.45, middleHex);
  grad.addColorStop(0.55, horizonHex);
  grad.addColorStop(1.0, horizonHex);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createLightingRig(scene, renderer, initialSpots = []) {
  const group = new THREE.Group();
  group.name = 'lighting-rig';

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.48;
  pmrem.dispose();

  const daySkyTex = createSkyTexture('#6da7db', '#bdddf4', '#ebe9e1');
  const sunsetSkyTex = createSkyTexture('#364d7d', '#c47b6e', '#f4bd86');

  const skyGeo = new THREE.SphereGeometry(110, 24, 16);
  const skyMat = new THREE.MeshBasicMaterial({
    map: daySkyTex,
    side: THREE.BackSide,
    depthWrite: false
  });
  const skyDome = new THREE.Mesh(skyGeo, skyMat);
  group.add(skyDome);

  const ambientLight = new THREE.AmbientLight('#fffcf5', 0.22);
  group.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight('#f2f7ff', '#d6c6b3', 1.0);
  hemiLight.position.set(2.5, 18, 15.0);
  group.add(hemiLight);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shadowSize = isMobile ? 1024 : 2048;

  const sunLight = new THREE.DirectionalLight('#fff5e4', 1.85);
  sunLight.position.set(16, 25, 13);
  sunLight.target.position.set(2.5, 0, 15.0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(shadowSize, shadowSize);
  sunLight.shadow.camera.near = 1;
  sunLight.shadow.camera.far = 70;
  sunLight.shadow.camera.left = -20;
  sunLight.shadow.camera.right = 20;
  sunLight.shadow.camera.top = 20;
  sunLight.shadow.camera.bottom = -20;
  sunLight.shadow.bias = -0.00045;
  sunLight.shadow.normalBias = 0.025;
  sunLight.shadow.radius = 2.5;
  group.add(sunLight);
  group.add(sunLight.target);

  const interiorGroup = new THREE.Group();
  group.add(interiorGroup);

  let interiorLights = [];
  let currentPreset = 'dia';

  function applyInteriorIntensity() {
    const isSunset = currentPreset === 'entardecer';
    for (const entry of interiorLights) {
      if (entry.customColor) {
        entry.light.color.set(entry.customColor);
        entry.light.intensity = isSunset ? entry.baseIntensity * 1.45 : entry.baseIntensity;
      } else {
        entry.light.color.set(isSunset ? '#ffd093' : '#fff1da');
        entry.light.intensity = isSunset ? 3.2 : entry.baseIntensity;
      }
    }
  }

  function updateSpots(spots) {
    while (interiorGroup.children.length > 0) {
      interiorGroup.remove(interiorGroup.children[0]);
    }
    interiorLights = spots.map((cfg) => {
      const baseIntensity = cfg.intensity ?? 1.35;
      const pt = new THREE.PointLight(cfg.color || '#fff1da', baseIntensity, cfg.distance, 1.5);
      pt.position.set(...cfg.pos);
      pt.castShadow = false;
      interiorGroup.add(pt);
      return {
        light: pt,
        customColor: cfg.color || null,
        baseIntensity
      };
    });
    applyInteriorIntensity();
  }

  scene.add(group);
  scene.fog = new THREE.Fog('#e6e6de', 55, 130);

  function setPreset(preset) {
    currentPreset = preset;
    const isSunset = preset === 'entardecer';

    if (isSunset) {
      skyMat.map = sunsetSkyTex;
      skyMat.needsUpdate = true;
      scene.fog.color.set('#d9b69e');
      scene.environmentIntensity = 0.28;

      ambientLight.color.set('#ffdfba');
      ambientLight.intensity = 0.18;

      hemiLight.color.set('#ffc899');
      hemiLight.groundColor.set('#685560');
      hemiLight.intensity = 0.68;

      sunLight.color.set('#ffb46b');
      sunLight.intensity = 1.3;
      sunLight.position.set(-15, 13, 20);
    } else {
      skyMat.map = daySkyTex;
      skyMat.needsUpdate = true;
      scene.fog.color.set('#e6e6de');
      scene.environmentIntensity = 0.48;

      ambientLight.color.set('#fffcf5');
      ambientLight.intensity = 0.22;

      hemiLight.color.set('#f2f7ff');
      hemiLight.groundColor.set('#d6c6b3');
      hemiLight.intensity = 1.0;

      sunLight.color.set('#fff5e4');
      sunLight.intensity = 1.85;
      sunLight.position.set(16, 25, 13);
    }

    applyInteriorIntensity();
  }

  updateSpots(initialSpots);
  setPreset('dia');

  return { setPreset, updateSpots };
}
