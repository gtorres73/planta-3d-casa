import * as THREE from 'three';

function createTextSprite(title, subtitle, scaleW = 1.9) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 170;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(24, 28, 32, 0.84)';
  ctx.beginPath();
  ctx.roundRect(16, 16, 480, 138, 24);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = subtitle
    ? '700 42px "Segoe UI", system-ui, sans-serif'
    : '700 46px "Segoe UI", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, 256, subtitle ? 64 : 85);

  if (subtitle) {
    ctx.fillStyle = '#b9e2ce';
    ctx.font = '600 30px "Segoe UI", system-ui, sans-serif';
    ctx.fillText(subtitle, 256, 118);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({
    map: tex,
    depthTest: false,
    transparent: true
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(scaleW, scaleW * (170 / 512), 1);
  sprite.renderOrder = 20;
  return sprite;
}

export function buildLabels(plan) {
  const labelsGroup = new THREE.Group();
  labelsGroup.name = 'house-labels';
  const isV3 = Boolean(plan.isFirstCourseOnly);
  const roomY = isV3 ? 2.4 : 2.55;
  const roomScale = isV3 ? 1.55 : 2.35;
  const lineY = isV3 ? 0.04 : 0.12;
  const badgeY = isV3 ? 0.38 : 0.65;
  const badgeScale = isV3 ? 1.35 : 1.85;

  for (const room of plan.ROOMS) {
    if (!room.showLabel) continue;
    const cx = (room.bounds.minX + room.bounds.maxX) / 2;
    const cz = (room.bounds.minZ + room.bounds.maxZ) / 2;
    const sprite = createTextSprite(room.name, room.dimensionsLabel, roomScale);
    sprite.position.set(cx, roomY, cz);
    labelsGroup.add(sprite);
  }

  const lineMat = new THREE.LineBasicMaterial({ color: '#1f513f' });
  for (const dim of plan.DIMENSION_LINES) {
    const pts = [
      new THREE.Vector3(dim.x1, lineY, dim.z1),
      new THREE.Vector3(dim.x2, lineY, dim.z2)
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    labelsGroup.add(new THREE.Line(geo, lineMat));

    const midX = (dim.x1 + dim.x2) / 2;
    const midZ = (dim.z1 + dim.z2) / 2;
    const badge = createTextSprite(dim.label, '', badgeScale);
    badge.position.set(midX, badgeY, midZ);
    labelsGroup.add(badge);
  }

  labelsGroup.visible = Boolean(plan.defaultLabelsVisible);
  return labelsGroup;
}
