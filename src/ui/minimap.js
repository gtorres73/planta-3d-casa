const PADDING = 8;

export function createMinimap({ canvas, plan, onTeleport }) {
  const ctx = canvas.getContext('2d');
  const cssWidth = 114;
  const cssHeight = 356;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  const staticCanvas = document.createElement('canvas');
  staticCanvas.width = canvas.width;
  staticCanvas.height = canvas.height;
  const sctx = staticCanvas.getContext('2d');

  let activePlan = plan;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;

  const toCanvasX = (x) => offsetX + x * scale;
  const toCanvasY = (z) => offsetY + z * scale;

  function drawStaticPlan() {
    const { LOT, ROOMS, WALLS, OPENINGS } = activePlan;
    const scaleX = (cssWidth - PADDING * 2) / LOT.width;
    const scaleZ = (cssHeight - PADDING * 2) / LOT.totalLength;
    scale = Math.min(scaleX, scaleZ);
    offsetX = (cssWidth - LOT.width * scale) / 2;
    offsetY = (cssHeight - LOT.totalLength * scale) / 2;

    sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sctx.clearRect(0, 0, cssWidth, cssHeight);

    const floorColors = {
      pisoExterno: '#ddd9d0',
      porcelanato: '#f5f2eb',
      radierPolido: '#e6e1d8',
      ceramicaBanheiro: '#dde6e3',
      madeiraPiso: '#e8d5bd',
      grama: '#cce0bf'
    };

    for (const room of ROOMS) {
      if (room.id === 'corredor-interno') continue;
      const { minX, maxX, minZ, maxZ } = room.bounds;
      sctx.fillStyle = floorColors[room.floorType] || '#f2efe8';
      sctx.fillRect(
        toCanvasX(minX),
        toCanvasY(minZ),
        (maxX - minX) * scale,
        (maxZ - minZ) * scale
      );
    }

    if (activePlan.hasBackEdicula) {
      sctx.fillStyle = '#ddd9d0';
      sctx.fillRect(toCanvasX(0.06), toCanvasY(20.18), 4.88 * scale, 3.95 * scale);
    }

    if (activePlan.isFirstCourseOnly && Array.isArray(activePlan.FIRST_COURSE_BLOCKS)) {
      const blockColors = {
        inteiro: '#6b727a',
        amarracao: '#1f513f',
        meio: '#b7791f'
      };
      for (const b of activePlan.FIRST_COURSE_BLOCKS) {
        sctx.fillStyle = blockColors[b.type] || '#6b727a';
        sctx.fillRect(
          toCanvasX(b.x - b.sizeX / 2),
          toCanvasY(b.z - b.sizeZ / 2),
          Math.max(1.5, b.sizeX * scale),
          Math.max(1.5, b.sizeZ * scale)
        );
      }
      sctx.fillStyle = '#d97706';
      for (const gp of activePlan.FIRST_COURSE_GROUT_POINTS || []) {
        sctx.beginPath();
        sctx.arc(toCanvasX(gp.x), toCanvasY(gp.z), 1.8, 0, Math.PI * 2);
        sctx.fill();
      }
    } else {
      sctx.fillStyle = '#252a30';
      for (const w of WALLS) {
        if (w.yBottom >= 1.8) continue;
        const half = w.thickness / 2;
        const minX = Math.min(w.x1, w.x2) - (Math.abs(w.x1 - w.x2) < 1e-6 ? half : 0);
        const maxX = Math.max(w.x1, w.x2) + (Math.abs(w.x1 - w.x2) < 1e-6 ? half : 0);
        const minZ = Math.min(w.z1, w.z2) - (Math.abs(w.z1 - w.z2) < 1e-6 ? half : 0);
        const maxZ = Math.max(w.z1, w.z2) + (Math.abs(w.z1 - w.z2) < 1e-6 ? half : 0);
        sctx.fillRect(
          toCanvasX(minX),
          toCanvasY(minZ),
          Math.max(1.5, (maxX - minX) * scale),
          Math.max(1.5, (maxZ - minZ) * scale)
        );
      }

      sctx.strokeStyle = '#3b82b8';
      sctx.lineWidth = 2;
      for (const op of OPENINGS) {
        if (!['sliding-door', 'window', 'window-horizontal'].includes(op.type)) continue;
        sctx.beginPath();
        if (op.orientation === 'horizontal') {
          sctx.moveTo(toCanvasX(op.x1), toCanvasY(op.z));
          sctx.lineTo(toCanvasX(op.x2), toCanvasY(op.z));
        } else {
          sctx.moveTo(toCanvasX(op.x), toCanvasY(op.z1));
          sctx.lineTo(toCanvasX(op.x), toCanvasY(op.z2));
        }
        sctx.stroke();
      }
    }

    sctx.fillStyle = '#263038';
    sctx.font = '600 8px "Segoe UI", system-ui, sans-serif';
    sctx.textAlign = 'center';
    sctx.textBaseline = 'middle';
    for (const room of ROOMS) {
      if (!room.showLabel || room.id === 'corredor') continue;
      const cx = (room.bounds.minX + room.bounds.maxX) / 2;
      const cz = (room.bounds.minZ + room.bounds.maxZ) / 2;
      sctx.fillText(room.mapLabel || room.shortName, toCanvasX(cx), toCanvasY(cz));
    }
  }

  function setPlan(nextPlan) {
    activePlan = nextPlan;
    drawStaticPlan();
  }

  drawStaticPlan();

  function render(pose) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(staticCanvas, 0, 0, cssWidth, cssHeight);

    const px = toCanvasX(pose.x);
    const py = toCanvasY(pose.z);
    const dirX = -Math.sin(pose.yaw);
    const dirZ = -Math.cos(pose.yaw);
    const angle = Math.atan2(dirZ, dirX);

    ctx.save();
    ctx.fillStyle = 'rgba(31, 81, 63, 0.28)';
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.arc(px, py, 22, angle - 0.5, angle + 0.5);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#1f513f';
    ctx.beginPath();
    ctx.arc(px, py, 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  canvas.addEventListener('click', (e) => {
    const { LOT } = activePlan;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const worldX = Math.max(0.25, Math.min(LOT.width - 0.25, (clickX - offsetX) / scale));
    const worldZ = Math.max(0.3, Math.min(LOT.totalLength - 0.3, (clickY - offsetY) / scale));
    onTeleport?.(worldX, worldZ);
  });

  return { setPlan, render };
}
