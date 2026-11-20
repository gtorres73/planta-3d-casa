import * as THREE from 'three';

function createCanvas(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  return { canvas, ctx, size };
}

function drawPorcelainCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  ctx.fillStyle = '#ebe6dd';
  ctx.fillRect(0, 0, size, size);

  const tile = size / 2;
  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 2; col += 1) {
      const ox = col * tile;
      const oy = row * tile;
      ctx.fillStyle = (row + col) % 2 === 0 ? '#ede9e1' : '#e8e3da';
      ctx.fillRect(ox, oy, tile, tile);

      ctx.strokeStyle = 'rgba(182, 174, 162, 0.22)';
      ctx.lineWidth = 2;
      for (let v = 0; v < 5; v += 1) {
        ctx.beginPath();
        const sy = oy + ((v * 53 + col * 41) % tile);
        ctx.moveTo(ox, sy);
        ctx.bezierCurveTo(
          ox + tile * 0.35,
          sy + (v % 2 === 0 ? 1 : -1) * 26,
          ox + tile * 0.7,
          sy - (v % 2 === 0 ? 1 : -1) * 18,
          ox + tile,
          sy + 10
        );
        ctx.stroke();
      }
    }
  }

  ctx.strokeStyle = '#cbc3b7';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tile, 0);
  ctx.lineTo(tile, size);
  ctx.moveTo(0, tile);
  ctx.lineTo(size, tile);
  ctx.stroke();
  ctx.strokeRect(1.5, 1.5, size - 3, size - 3);
  return canvas;
}

function drawPorcelainBumpCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#e8e8e8';
  ctx.fillRect(0, 0, size, size);
  const tile = size / 2;
  ctx.strokeStyle = '#606060';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tile, 0);
  ctx.lineTo(tile, size);
  ctx.moveTo(0, tile);
  ctx.lineTo(size, tile);
  ctx.stroke();
  ctx.strokeRect(1.5, 1.5, size - 3, size - 3);
  return canvas;
}

function drawWoodFloorCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  ctx.fillStyle = '#bc8d5c';
  ctx.fillRect(0, 0, size, size);

  const plankH = size / 6;
  const tones = ['#c59666', '#b88757', '#ca9b6c', '#b38252', '#bf9060', '#c89a6b'];
  for (let i = 0; i < 6; i += 1) {
    const y = i * plankH;
    ctx.fillStyle = tones[i];
    ctx.fillRect(0, y, size, plankH);

    ctx.strokeStyle = 'rgba(104, 65, 32, 0.16)';
    ctx.lineWidth = 1.5;
    for (let g = 0; g < 8; g += 1) {
      const gy = y + 6 + g * ((plankH - 12) / 8);
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.bezierCurveTo(size * 0.33, gy + (g % 2 === 0 ? 3 : -3), size * 0.66, gy - 2, size, gy);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(80, 48, 22, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();

    const jointX = ((i * 197 + 90) % (size - 80)) + 40;
    ctx.beginPath();
    ctx.moveTo(jointX, y);
    ctx.lineTo(jointX, y + plankH);
    ctx.stroke();
  }
  return canvas;
}

function drawWoodBumpCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#d4d4d4';
  ctx.fillRect(0, 0, size, size);
  const plankH = size / 6;
  ctx.strokeStyle = '#555555';
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i += 1) {
    const y = i * plankH;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }
  return canvas;
}

function drawBathroomTileCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  ctx.fillStyle = '#dde2e0';
  ctx.fillRect(0, 0, size, size);

  const cell = size / 4;
  for (let r = 0; r < 4; r += 1) {
    for (let c = 0; c < 4; c += 1) {
      ctx.fillStyle = (r + c) % 2 === 0 ? '#e3e7e5' : '#dadfda';
      ctx.fillRect(c * cell, r * cell, cell, cell);
    }
  }

  for (let i = 0; i < 180; i += 1) {
    const x = (i * 73) % size;
    const y = (i * 139) % size;
    ctx.fillStyle = i % 3 === 0 ? 'rgba(120, 128, 126, 0.25)' : 'rgba(255, 255, 255, 0.4)';
    ctx.fillRect(x, y, 3, 3);
  }

  ctx.strokeStyle = '#bec6c2';
  ctx.lineWidth = 2.5;
  for (let i = 0; i <= 4; i += 1) {
    const pos = i * cell;
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, size);
    ctx.moveTo(0, pos);
    ctx.lineTo(size, pos);
    ctx.stroke();
  }
  return canvas;
}

function drawExteriorPaverCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  ctx.fillStyle = '#bcb7ad';
  ctx.fillRect(0, 0, size, size);

  const cell = size / 2;
  for (let r = 0; r < 2; r += 1) {
    for (let c = 0; c < 2; c += 1) {
      ctx.fillStyle = (r + c) % 2 === 0 ? '#c3beb4' : '#b7b2a8';
      ctx.fillRect(c * cell, r * cell, cell, cell);
    }
  }

  for (let i = 0; i < 420; i += 1) {
    const x = (i * 67) % size;
    const y = (i * 113) % size;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(85, 80, 74, 0.14)' : 'rgba(255, 252, 245, 0.16)';
    ctx.fillRect(x, y, 2, 2);
  }

  ctx.strokeStyle = '#979187';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cell, 0);
  ctx.lineTo(cell, size);
  ctx.moveTo(0, cell);
  ctx.lineTo(size, cell);
  ctx.stroke();
  ctx.strokeRect(2, 2, size - 4, size - 4);
  return canvas;
}

function drawPlasterCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#f4f0e8';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 650; i += 1) {
    const x = (i * 53) % size;
    const y = (i * 97) % size;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(180, 170, 155, 0.08)' : 'rgba(255, 255, 255, 0.14)';
    ctx.fillRect(x, y, 2, 2);
  }
  return canvas;
}

function drawFurnitureWoodCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#9c6b43';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(65, 38, 18, 0.18)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 28; i += 1) {
    const y = (i / 28) * size;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(size * 0.3, y + 4, size * 0.7, y - 4, size, y);
    ctx.stroke();
  }
  return canvas;
}

function drawDarkWoodCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#332c28';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(20, 16, 14, 0.35)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 24; i += 1) {
    const y = (i / 24) * size;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(size * 0.35, y + 3, size * 0.65, y - 3, size, y);
    ctx.stroke();
  }
  return canvas;
}

function drawDarkBrickCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#2d3136';
  ctx.fillRect(0, 0, size, size);
  const rows = 8;
  const rowH = size / rows;
  const colW = size / 4;
  const shades = ['#3a3f46', '#444a52', '#353940', '#4a5058'];
  for (let r = 0; r < rows; r += 1) {
    const offset = (r % 2) * (colW / 2);
    for (let c = -1; c < 5; c += 1) {
      ctx.fillStyle = shades[(r + c + 4) % shades.length];
      ctx.fillRect(c * colW + offset + 2, r * rowH + 2, colW - 4, rowH - 4);
    }
  }
  return canvas;
}

function drawBrickBumpCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#404040';
  ctx.fillRect(0, 0, size, size);
  const rows = 8;
  const rowH = size / rows;
  const colW = size / 4;
  ctx.fillStyle = '#e0e0e0';
  for (let r = 0; r < rows; r += 1) {
    const offset = (r % 2) * (colW / 2);
    for (let c = -1; c < 5; c += 1) {
      ctx.fillRect(c * colW + offset + 3, r * rowH + 3, colW - 6, rowH - 6);
    }
  }
  return canvas;
}

function drawFabricCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#d2c9bc';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(130, 120, 108, 0.16)';
  ctx.lineWidth = 1;
  for (let i = 0; i < size; i += 6) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, size);
    ctx.moveTo(0, i);
    ctx.lineTo(size, i);
    ctx.stroke();
  }
  return canvas;
}

function drawGrassCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#6f9b57';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 900; i += 1) {
    const x = (i * 47) % size;
    const y = (i * 89) % size;
    ctx.fillStyle = i % 3 === 0 ? '#7fab64' : i % 3 === 1 ? '#5e8847' : '#89b36f';
    ctx.fillRect(x, y, 2, 4);
  }
  return canvas;
}

function drawShowerBoxTileCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#b4bebc';
  ctx.fillRect(0, 0, size, size);
  const cell = size / 4;
  ctx.strokeStyle = '#8b9694';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i += 1) {
    const p = i * cell;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  return canvas;
}

function drawArtCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#f3eee4';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#2d5a47';
  ctx.beginPath();
  ctx.arc(105, 130, 62, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#c88b63';
  ctx.fillRect(122, 62, 80, 128);
  ctx.strokeStyle = '#1f252a';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(140, 120, 44, 0.2, Math.PI * 1.4);
  ctx.stroke();
  return canvas;
}

function drawGamerScreenCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#101638');
  grad.addColorStop(0.5, '#2b1b59');
  grad.addColorStop(1, '#0b3c4d');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Subtle synthwave sun & horizon grid
  const sun = ctx.createRadialGradient(256, 210, 10, 256, 210, 120);
  sun.addColorStop(0, '#ff6ec7');
  sun.addColorStop(0.6, '#7a5cff');
  sun.addColorStop(1, 'rgba(16, 22, 56, 0)');
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(256, 210, 120, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 8; i += 1) {
    const y = 290 + i * 28;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }
  for (let i = -4; i <= 12; i += 1) {
    ctx.beginPath();
    ctx.moveTo(256 + (i - 4) * 30, 290);
    ctx.lineTo(256 + (i - 4) * 110, size);
    ctx.stroke();
  }
  return canvas;
}

function drawRadierCanvas() {
  const { canvas, ctx, size } = createCanvas(512);
  ctx.fillStyle = '#cfcac2';
  ctx.fillRect(0, 0, size, size);

  // Burnished / troweled polished concrete clouding
  for (let i = 0; i < 160; i += 1) {
    const cx = (i * 89 + 40) % size;
    const cy = (i * 151 + 25) % size;
    const rad = 28 + (i % 5) * 16;
    const grad = ctx.createRadialGradient(cx, cy, 4, cx, cy, rad);
    grad.addColorStop(0, i % 2 === 0 ? 'rgba(176, 170, 162, 0.22)' : 'rgba(226, 222, 214, 0.22)');
    grad.addColorStop(1, 'rgba(207, 202, 194, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 700; i += 1) {
    const x = (i * 61) % size;
    const y = (i * 103) % size;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(120, 116, 110, 0.1)' : 'rgba(255, 252, 246, 0.14)';
    ctx.fillRect(x, y, 2, 2);
  }

  // Subtle expansion saw-cut control joint
  ctx.strokeStyle = 'rgba(135, 130, 122, 0.38)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(size / 2, 0);
  ctx.lineTo(size / 2, size);
  ctx.moveTo(0, size / 2);
  ctx.lineTo(size, size / 2);
  ctx.stroke();

  return canvas;
}

function drawRadierBumpCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#dadada';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = '#757575';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(size / 2, 0);
  ctx.lineTo(size / 2, size);
  ctx.moveTo(0, size / 2);
  ctx.lineTo(size, size / 2);
  ctx.stroke();
  return canvas;
}

function drawSandwichSheetCanvas() {
  const { canvas, ctx, size } = createCanvas(256);
  ctx.fillStyle = '#cfd5db';
  ctx.fillRect(0, 0, size, size);
  const step = size / 6;
  for (let i = 0; i < 6; i += 1) {
    const y = i * step;
    ctx.fillStyle = '#b4bcc4';
    ctx.fillRect(0, y, size, 6);
    ctx.fillStyle = '#e3e7eb';
    ctx.fillRect(0, y + 6, size, 3);
  }
  return canvas;
}

export function createTextureLibrary(maxAnisotropy = 4) {
  const sources = {
    porcelanato: drawPorcelainCanvas(),
    radierPolido: drawRadierCanvas(),
    telhaSanduiche: drawSandwichSheetCanvas(),
    madeiraPiso: drawWoodFloorCanvas(),
    ceramicaBanheiro: drawBathroomTileCanvas(),
    pisoExterno: drawExteriorPaverCanvas(),
    reboco: drawPlasterCanvas(),
    madeiraMovel: drawFurnitureWoodCanvas(),
    madeiraEscura: drawDarkWoodCanvas(),
    tijoloEscuro: drawDarkBrickCanvas(),
    tecidoSofa: drawFabricCanvas(),
    grama: drawGrassCanvas(),
    boxPiso: drawShowerBoxTileCanvas(),
    arteQuadro: drawArtCanvas(),
    telaGamer: drawGamerScreenCanvas()
  };

  const bumpSources = {
    porcelanato: drawPorcelainBumpCanvas(),
    radierPolido: drawRadierBumpCanvas(),
    madeiraPiso: drawWoodBumpCanvas(),
    tijoloEscuro: drawBrickBumpCanvas()
  };

  function getTexture(key, repeatX = 1, repeatY = 1) {
    const sourceCanvas = sources[key] || sources.reboco;
    const tex = new THREE.CanvasTexture(sourceCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
    tex.anisotropy = maxAnisotropy;
    tex.needsUpdate = true;
    return tex;
  }

  function getBumpTexture(key, repeatX = 1, repeatY = 1) {
    const sourceCanvas = bumpSources[key];
    if (!sourceCanvas) return null;
    const tex = new THREE.CanvasTexture(sourceCanvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
    tex.anisotropy = maxAnisotropy;
    tex.needsUpdate = true;
    return tex;
  }

  return { getTexture, getBumpTexture };
}
