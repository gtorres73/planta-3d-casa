import * as THREE from 'three';

function createCar(x, z) {
  const car = new THREE.Group();
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: '#4e5f6e',
    roughness: 0.22,
    metalness: 0.6,
    clearcoat: 0.75,
    clearcoatRoughness: 0.15
  });
  const cabinGlassMat = new THREE.MeshStandardMaterial({ color: '#1b242f', roughness: 0.1, metalness: 0.55 });
  const tireMat = new THREE.MeshStandardMaterial({ color: '#1b1d21', roughness: 0.85 });
  const rimMat = new THREE.MeshStandardMaterial({ color: '#d5dae0', roughness: 0.25, metalness: 0.85 });
  const headlightMat = new THREE.MeshBasicMaterial({ color: '#fff5d9' });
  const taillightMat = new THREE.MeshBasicMaterial({ color: '#cc352b' });

  const lower = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.54, 4.05), bodyMat);
  lower.position.set(0, 0.46, 0);
  lower.castShadow = true;
  lower.receiveShadow = true;
  car.add(lower);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.5, 1.95), bodyMat);
  cabin.position.set(0, 0.96, 0.2);
  cabin.castShadow = true;
  car.add(cabin);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(1.51, 0.38, 1.82), cabinGlassMat);
  glass.position.set(0, 0.96, 0.2);
  car.add(glass);

  for (const mx of [-0.88, 0.88]) {
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.11), bodyMat);
    mirror.position.set(mx, 0.82, -0.58);
    car.add(mirror);
  }

  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.22, 22);
  wheelGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.23, 16);
  rimGeo.rotateZ(Math.PI / 2);

  for (const wx of [-0.82, 0.82]) {
    for (const wz of [-1.25, 1.25]) {
      const tire = new THREE.Mesh(wheelGeo, tireMat);
      tire.position.set(wx, 0.3, wz);
      tire.castShadow = true;
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.position.set(wx, 0.3, wz);
      car.add(tire, rim);
    }
  }

  for (const lx of [-0.62, 0.62]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.11, 0.04), headlightMat);
    hl.position.set(lx, 0.54, -2.02);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.1, 0.04), taillightMat);
    tl.position.set(lx, 0.56, 2.02);
    car.add(hl, tl);
  }

  car.position.set(x, 0, z);
  return car;
}

function createSofa(item, fabricMat, woodMat) {
  const g = new THREE.Group();
  const w = item.width;
  const d = item.depth;

  const base = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d), woodMat);
  base.position.set(0, 0.13, 0);
  base.castShadow = true;
  g.add(base);

  for (const lx of [-w / 2 + 0.08, w / 2 - 0.08]) {
    for (const lz of [-d / 2 + 0.08, d / 2 - 0.08]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.08, 10), woodMat);
      leg.position.set(lx, 0.04, lz);
      g.add(leg);
    }
  }

  const seatW = (w - 0.24) / 3;
  for (let i = 0; i < 3; i += 1) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(seatW - 0.02, 0.22, d - 0.14), fabricMat);
    seat.position.set(-w / 2 + 0.12 + seatW / 2 + i * seatW, 0.31, 0.05);
    seat.castShadow = true;
    seat.receiveShadow = true;
    g.add(seat);

    const back = new THREE.Mesh(new THREE.BoxGeometry(seatW - 0.02, 0.42, 0.2), fabricMat);
    back.position.set(-w / 2 + 0.12 + seatW / 2 + i * seatW, 0.6, -d / 2 + 0.12);
    back.castShadow = true;
    g.add(back);
  }

  for (const ax of [-w / 2 + 0.06, w / 2 - 0.06]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.46, d), fabricMat);
    arm.position.set(ax, 0.43, 0);
    arm.castShadow = true;
    g.add(arm);
  }

  const pillowColors = ['#587a68', '#c6845d', '#587a68'];
  [-0.65, 0, 0.65].forEach((px, idx) => {
    const pMat = new THREE.MeshStandardMaterial({ color: pillowColors[idx], roughness: 0.85 });
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.12), pMat);
    p.position.set(px, 0.56, -0.14);
    p.rotation.set(-0.2, idx === 0 ? 0.18 : idx === 2 ? -0.18 : 0, 0);
    p.castShadow = true;
    g.add(p);
  });

  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createCoffeeTable(x, z, woodMat, metalMat) {
  const g = new THREE.Group();
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.035, 28), woodMat);
  top.position.set(0, 0.38, 0);
  top.castShadow = true;
  top.receiveShadow = true;

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.36, 20), metalMat);
  base.position.set(0, 0.18, 0);
  base.castShadow = true;

  const tray = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.02, 20),
    new THREE.MeshStandardMaterial({ color: '#ece7dd', roughness: 0.4 })
  );
  tray.position.set(0, 0.41, 0);
  g.add(top, base, tray);
  g.position.set(x, 0, z);
  return g;
}

function createTvUnit(item, woodMat, whiteMat, screenMat) {
  const g = new THREE.Group();
  const panel = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.55, 0.04), woodMat);
  panel.position.set(0, 1.25, -0.15);
  panel.castShadow = true;
  panel.receiveShadow = true;

  const rack = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.34, 0.34), whiteMat);
  rack.position.set(0, 0.44, 0);
  rack.castShadow = true;
  rack.receiveShadow = true;

  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(1.26, 0.72, 0.035),
    new THREE.MeshStandardMaterial({ color: '#1b1d20', roughness: 0.35 })
  );
  frame.position.set(0, 1.24, -0.1);
  frame.castShadow = true;

  const screen = new THREE.Mesh(new THREE.BoxGeometry(1.21, 0.67, 0.038), screenMat);
  screen.position.set(0, 1.24, -0.098);

  g.add(panel, rack, frame, screen);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createWallArt(item, textures, metalMat) {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.66, 0.035), metalMat);
  const canvas = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.6, 0.038),
    new THREE.MeshStandardMaterial({
      map: textures.getTexture('arteQuadro', 1, 1),
      roughness: 0.75
    })
  );
  g.add(frame, canvas);
  g.position.set(item.x, 1.55, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createPeninsula(item, stoneMat, woodMat, metalMat) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(item.width - 0.08, 0.86, item.depth - 0.14), woodMat);
  base.position.set(0.02, 0.43, 0.05);
  base.castShadow = true;
  base.receiveShadow = true;

  const top = new THREE.Mesh(new THREE.BoxGeometry(item.width, 0.05, item.depth), stoneMat);
  top.position.set(0, 0.885, 0);
  top.castShadow = true;
  top.receiveShadow = true;
  g.add(base, top);

  for (const sx of [-0.52, 0, 0.52]) {
    const stool = new THREE.Group();
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.62, 12), metalMat);
    stem.position.y = 0.31;
    const footRing = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 16), metalMat);
    footRing.position.y = 0.01;
    const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.055, 20), woodMat);
    seat.position.y = 0.64;
    seat.castShadow = true;
    stool.add(stem, footRing, seat);
    stool.position.set(sx, 0, -0.4);
    g.add(stool);
  }

  // Two warm pendant lamps anchored up to sloped sandwich roof underside (y ~ 3.12m)
  const bulbMat = new THREE.MeshBasicMaterial({ color: '#fff3d4' });
  for (const px of [-0.45, 0.45]) {
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1.06, 6), metalMat);
    cord.position.set(px, 2.59, 0);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.16, 18, 1, true), metalMat);
    shade.position.set(px, 2.06, 0);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), bulbMat);
    bulb.position.set(px, 2.02, 0);
    g.add(cord, shade, bulb);
  }

  g.position.set(item.x, 0, item.z);
  return g;
}

function createKitchenCounter(item, stoneMat, woodMat, chromeMat) {
  const g = new THREE.Group();
  const cab = new THREE.Mesh(new THREE.BoxGeometry(item.depth, 0.86, item.width), woodMat);
  cab.position.set(0, 0.43, 0);
  cab.castShadow = true;
  cab.receiveShadow = true;

  const top = new THREE.Mesh(new THREE.BoxGeometry(item.depth + 0.02, 0.04, item.width + 0.02), stoneMat);
  top.position.set(0, 0.88, 0);
  top.castShadow = true;
  top.receiveShadow = true;

  const sink = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.54), chromeMat);
  sink.position.set(0, 0.905, 0);

  const faucetPost = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.018, 0.24, 12), chromeMat);
  faucetPost.position.set(0.22, 1.02, 0);
  const faucetArm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.024, 0.024), chromeMat);
  faucetArm.position.set(0.16, 1.13, 0);

  g.add(cab, top, sink, faucetPost, faucetArm);
  g.position.set(item.x, 0, item.z);
  return g;
}

function createStove(x, z, chromeMat) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.86, 0.6), chromeMat);
  body.position.set(0, 0.43, 0);
  body.castShadow = true;

  const glassTop = new THREE.Mesh(
    new THREE.BoxGeometry(0.61, 0.03, 0.61),
    new THREE.MeshStandardMaterial({ color: '#1b1d20', roughness: 0.18 })
  );
  glassTop.position.set(0, 0.875, 0);

  const ovenDoor = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.46, 0.48),
    new THREE.MeshStandardMaterial({ color: '#1a1d21', roughness: 0.2 })
  );
  ovenDoor.position.set(-0.305, 0.42, 0);

  const burnerMat = new THREE.MeshStandardMaterial({ color: '#2b2e33', roughness: 0.5 });
  for (const bx of [-0.15, 0.15]) {
    for (const bz of [-0.15, 0.15]) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.015, 16), burnerMat);
      b.position.set(bx, 0.895, bz);
      g.add(b);
    }
  }

  g.add(body, glassTop, ovenDoor);
  g.position.set(x, 0, z);
  return g;
}

function createRangeHood(x, z, steelMat) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.1, 0.62), steelMat);
  base.position.set(0, 1.72, 0);
  base.castShadow = true;

  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.32, 0.24), steelMat);
  chimney.position.set(0.08, 2.41, 0);
  g.add(base, chimney);
  g.position.set(x, 0, z);
  return g;
}

function createFridge(x, z, steelMat, chromeMat) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.78, 0.68), steelMat);
  body.position.set(0, 0.89, 0);
  body.castShadow = true;
  body.receiveShadow = true;

  const split = new THREE.Mesh(
    new THREE.BoxGeometry(0.68, 0.015, 0.02),
    new THREE.MeshStandardMaterial({ color: '#4c525a' })
  );
  split.position.set(0, 1.28, -0.34);

  const hTop = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.34, 10), chromeMat);
  hTop.position.set(0.24, 1.52, -0.36);
  const hBot = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.62, 10), chromeMat);
  hBot.position.set(0.24, 0.86, -0.36);

  g.add(body, split, hTop, hBot);
  g.position.set(x, 0, z);
  return g;
}

function createLaundryTub(item, whiteMat, chromeMat) {
  const g = new THREE.Group();
  const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.58, 0.32), whiteMat);
  pedestal.position.set(0, 0.29, 0);
  pedestal.castShadow = true;

  const basin = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.52), whiteMat);
  basin.position.set(0, 0.72, 0);
  basin.castShadow = true;

  const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.18, 10), chromeMat);
  faucet.position.set(0, 0.96, -0.2);

  g.add(pedestal, basin, faucet);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createLaundryShelf(x, z, woodMat, whiteMat) {
  const g = new THREE.Group();
  const plank = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.035, 0.28), woodMat);
  plank.position.set(0, 1.68, 0);
  plank.castShadow = true;

  const bottle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.05, 0.22, 12),
    new THREE.MeshStandardMaterial({ color: '#4b86b4', roughness: 0.35 })
  );
  bottle.position.set(-0.35, 1.81, 0);

  const towel = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.22), whiteMat);
  towel.position.set(0.26, 1.76, 0);

  g.add(plank, bottle, towel);
  g.position.set(x, 0, z);
  return g;
}

function createWasher(x, z, whiteMat) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.85, 0.62), whiteMat);
  body.position.set(0, 0.425, 0);
  body.castShadow = true;
  body.receiveShadow = true;

  const drumRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.19, 0.19, 0.04, 24),
    new THREE.MeshStandardMaterial({ color: '#394048', roughness: 0.3, metalness: 0.6 })
  );
  drumRing.rotation.x = Math.PI / 2;
  drumRing.position.set(0, 0.46, -0.31);

  const glass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.045, 20),
    new THREE.MeshStandardMaterial({ color: '#2b3440', roughness: 0.15 })
  );
  glass.rotation.x = Math.PI / 2;
  glass.position.set(0, 0.46, -0.312);

  g.add(body, drumRing, glass);
  g.position.set(x, 0, z);
  return g;
}

function createBathroomVanity(item, woodMat, stoneMat, whiteMat, chromeMat) {
  const g = new THREE.Group();
  const cab = new THREE.Mesh(new THREE.BoxGeometry(item.width, 0.56, item.depth), woodMat);
  cab.position.set(0, 0.54, 0);
  cab.castShadow = true;

  const top = new THREE.Mesh(new THREE.BoxGeometry(item.width + 0.02, 0.04, item.depth + 0.02), stoneMat);
  top.position.set(0, 0.84, 0);
  top.castShadow = true;

  const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.12, 24), whiteMat);
  basin.position.set(0, 0.92, 0.02);
  basin.castShadow = true;

  const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.015, 0.18, 10), chromeMat);
  faucet.position.set(0, 0.95, -0.17);

  const mirrorFrame = new THREE.Mesh(
    new THREE.BoxGeometry(item.width * 0.86, 0.82, 0.03),
    new THREE.MeshStandardMaterial({ color: '#272a2e', roughness: 0.4 })
  );
  mirrorFrame.position.set(0, 1.5, -item.depth / 2 + 0.02);

  const mirror = new THREE.Mesh(
    new THREE.BoxGeometry(item.width * 0.82, 0.78, 0.035),
    new THREE.MeshStandardMaterial({ color: '#cad7dc', roughness: 0.06, metalness: 0.92 })
  );
  mirror.position.set(0, 1.5, -item.depth / 2 + 0.022);

  if (item.ledMirror) {
    const halo = new THREE.Mesh(
      new THREE.BoxGeometry(item.width * 0.84, 0.8, 0.01),
      new THREE.MeshBasicMaterial({ color: '#ffeccf' })
    );
    halo.position.set(0, 1.5, -item.depth / 2 + 0.012);
    g.add(halo);
  }

  g.add(cab, top, basin, faucet, mirrorFrame, mirror);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createToilet(item, whiteMat, chromeMat) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.38, 18), whiteMat);
  base.position.set(0, 0.19, 0.06);
  base.castShadow = true;

  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.14, 20), whiteMat);
  bowl.position.set(0, 0.36, 0.08);
  bowl.castShadow = true;

  const tank = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.42, 0.18), whiteMat);
  tank.position.set(0, 0.56, -0.18);
  tank.castShadow = true;

  const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.015, 12), chromeMat);
  btn.position.set(0, 0.78, -0.18);

  g.add(base, bowl, tank, btn);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createShowerBox(item, textures, chromeMat) {
  const g = new THREE.Group();
  const w = item.x2 - item.x1;
  const d = item.z2 - item.z1;
  const cx = (item.x1 + item.x2) / 2;
  const cz = (item.z1 + item.z2) / 2;

  const floorMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('boxPiso', 1.4, 1.0),
    roughness: 0.55
  });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(w, 0.02, d), floorMat);
  floor.position.set(cx, 0.01, cz);
  floor.receiveShadow = true;
  g.add(floor);

  const drain = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.022, 0.12), chromeMat);
  drain.position.set(item.x2 - 0.25, 0.012, cz);
  g.add(drain);

  const blindexMat = new THREE.MeshPhysicalMaterial({
    color: '#d4ecea',
    transparent: true,
    opacity: 0.34,
    roughness: 0.06
  });

  if (item.openSide === 'left') {
    const glassW = w * 0.6;
    const gx = item.x2 - glassW / 2;
    const glass = new THREE.Mesh(new THREE.BoxGeometry(glassW, 1.95, 0.016), blindexMat);
    glass.position.set(gx, 0.98, item.z1);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(w, 0.035, 0.035), chromeMat);
    rail.position.set(cx, 1.97, item.z1);
    g.add(glass, rail);
  } else {
    const glass = new THREE.Mesh(new THREE.BoxGeometry(w, 1.95, 0.016), blindexMat);
    glass.position.set(cx, 0.98, item.z1);
    const topRail = new THREE.Mesh(new THREE.BoxGeometry(w, 0.035, 0.035), chromeMat);
    topRail.position.set(cx, 1.97, item.z1);
    g.add(glass, topRail);
  }

  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.024, 0.024), chromeMat);
  arm.position.set(item.x2 - 0.16, 2.1, cz);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16), chromeMat);
  head.position.set(item.x2 - 0.3, 2.08, cz);
  g.add(arm, head);

  return g;
}

function createWardrobe(item, woodMat, whiteMat, chromeMat) {
  const g = new THREE.Group();
  const h = 2.45;
  const w = item.width;
  const d = item.depth;

  const back = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.03), whiteMat);
  back.position.set(0, h / 2, -d / 2 + 0.015);
  back.castShadow = true;
  back.receiveShadow = true;

  const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.03, d), woodMat);
  top.position.set(0, h - 0.015, 0);
  top.castShadow = true;

  const bot = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, d), woodMat);
  bot.position.set(0, 0.03, 0);

  g.add(back, top, bot);

  const panels = 4;
  for (let i = 0; i <= panels; i += 1) {
    const px = -w / 2 + 0.015 + i * ((w - 0.03) / panels);
    const div = new THREE.Mesh(new THREE.BoxGeometry(0.03, h, d), woodMat);
    div.position.set(px, h / 2, 0);
    div.castShadow = true;
    g.add(div);
  }

  const shelf = new THREE.Mesh(new THREE.BoxGeometry(w - 0.06, 0.025, d - 0.06), woodMat);
  shelf.position.set(0, 1.98, 0.01);
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, w - 0.08, 10), chromeMat);
  rail.rotation.z = Math.PI / 2;
  rail.position.set(0, 1.82, 0.02);
  g.add(shelf, rail);

  const drawers = new THREE.Mesh(new THREE.BoxGeometry(w * 0.48, 0.65, d - 0.05), whiteMat);
  drawers.position.set(-w * 0.24, 0.36, 0.01);
  g.add(drawers);

  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createBed(item, woodMat, fabricMat, blanketHex = '#6b8676', headboardHex = null) {
  const g = new THREE.Group();
  const w = item.width;
  const l = item.length;

  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.26, l + 0.04), woodMat);
  frame.position.set(0, 0.16, 0);
  frame.castShadow = true;
  frame.receiveShadow = true;

  const hbMat = headboardHex
    ? new THREE.MeshStandardMaterial({ color: headboardHex, roughness: 0.85 })
    : fabricMat;
  const headboard = new THREE.Mesh(new THREE.BoxGeometry(w + 0.12, 1.08, 0.09), hbMat);
  headboard.position.set(0, 0.54, -l / 2 + 0.02);
  headboard.castShadow = true;

  const mattressMat = new THREE.MeshStandardMaterial({ color: '#f7f5f0', roughness: 0.85 });
  const mattress = new THREE.Mesh(new THREE.BoxGeometry(w - 0.04, 0.26, l - 0.08), mattressMat);
  mattress.position.set(0, 0.4, 0.03);
  mattress.castShadow = true;
  mattress.receiveShadow = true;

  const blanketMat = new THREE.MeshStandardMaterial({ color: blanketHex, roughness: 0.9 });
  const blanket = new THREE.Mesh(new THREE.BoxGeometry(w - 0.01, 0.06, l * 0.48), blanketMat);
  blanket.position.set(0, 0.52, l * 0.24);
  blanket.castShadow = true;

  for (const px of [-w * 0.24, w * 0.24]) {
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.12, 0.36), mattressMat);
    pillow.position.set(px, 0.58, -l / 2 + 0.3);
    pillow.castShadow = true;
    g.add(pillow);
  }

  g.add(frame, headboard, mattress, blanket);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createWallTv(item, screenMat) {
  const g = new THREE.Group();
  const bezel = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.62, 0.035),
    new THREE.MeshStandardMaterial({ color: '#1b1d20', roughness: 0.35 })
  );
  bezel.position.set(0, 1.35, 0);
  bezel.castShadow = true;

  const screen = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.57, 0.038), screenMat);
  screen.position.set(0, 1.35, 0.002);

  g.add(bezel, screen);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createPlanter(x, z, potMat, leafMat) {
  const g = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.45, 0.72), potMat);
  pot.position.set(0, 0.225, 0);
  pot.castShadow = true;
  g.add(pot);

  for (const lz of [-0.2, 0, 0.2]) {
    const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22, 1), leafMat);
    bush.position.set(0, 0.68 + (lz === 0 ? 0.14 : 0), lz);
    bush.castShadow = true;
    g.add(bush);
  }

  g.position.set(x, 0, z);
  return g;
}

function createGardenBench(item, woodMat, metalMat) {
  const g = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.05, 0.44), woodMat);
  seat.position.set(0, 0.44, 0);
  seat.castShadow = true;

  for (const lx of [-0.56, 0.56]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.4), metalMat);
    leg.position.set(lx, 0.22, 0);
    leg.castShadow = true;
    g.add(leg);
  }
  g.add(seat);
  g.position.set(item.x, 0, item.z);
  g.rotation.y = item.rotY || 0;
  return g;
}

function createOutdoorPergola(x, z, woodMat, metalMat) {
  const g = new THREE.Group();
  const w = 3.9;
  const d = 3.1;
  const h = 2.5;

  for (const px of [-w / 2, w / 2]) {
    for (const pz of [-d / 2, d / 2]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.11, h, 0.11), metalMat);
      post.position.set(px, h / 2, pz);
      post.castShadow = true;
      post.receiveShadow = true;
      g.add(post);
    }
  }

  for (const px of [-w / 2, w / 2]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, d + 0.24), woodMat);
    beam.position.set(px, h + 0.05, 0);
    beam.castShadow = true;
    g.add(beam);
  }

  const rafterCount = 7;
  for (let i = 0; i < rafterCount; i += 1) {
    const rz = -d / 2 + i * (d / (rafterCount - 1));
    const rafter = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.12, 0.06), woodMat);
    rafter.position.set(0, h + 0.15, rz);
    rafter.castShadow = true;
    g.add(rafter);
  }

  const tx = 0.55;
  const tableTop = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.05, 0.85), woodMat);
  tableTop.position.set(tx, 0.75, 0.05);
  tableTop.castShadow = true;
  tableTop.receiveShadow = true;
  g.add(tableTop);

  for (const lx of [-0.56, 0.56]) {
    for (const lz of [-0.32, 0.32]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.73, 0.05), metalMat);
      leg.position.set(tx + lx, 0.365, 0.05 + lz);
      leg.castShadow = true;
      g.add(leg);
    }
  }

  const chairOffsets = [
    [tx - 0.32, -0.58, 0],
    [tx + 0.32, -0.58, 0],
    [tx - 0.32, 0.68, Math.PI],
    [tx + 0.32, 0.68, Math.PI]
  ];
  for (const [cx, cz, ry] of chairOffsets) {
    const chair = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.04, 0.42), woodMat);
    seat.position.set(0, 0.45, 0);
    seat.castShadow = true;
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.38, 0.04), woodMat);
    back.position.set(0, 0.66, -0.19);
    back.castShadow = true;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.43, 0.06), metalMat);
    frame.position.set(0, 0.215, 0);
    chair.add(seat, back, frame);
    chair.position.set(cx, 0, cz);
    chair.rotation.y = ry;
    g.add(chair);
  }

  g.position.set(x, 0, z);
  return g;
}

function createChurrasqueiraGourmet(x, z, textures, woodMat, chromeMat, metalMat) {
  const g = new THREE.Group();
  const brickMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('tijoloEscuro', 1.4, 2.2),
    bumpMap: textures.getBumpTexture('tijoloEscuro', 1.4, 2.2),
    bumpScale: 0.008,
    roughness: 0.85
  });
  const graniteMat = new THREE.MeshStandardMaterial({ color: '#24272b', roughness: 0.2, metalness: 0.15 });

  // Churrasqueira body against west wall (centered at local z = -0.8)
  const bbqBase = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.95, 0.92), brickMat);
  bbqBase.position.set(0, 0.475, -0.8);
  bbqBase.castShadow = true;
  bbqBase.receiveShadow = true;

  // Firebox back & side pillars
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.62, 0.92), brickMat);
  backWall.position.set(-0.29, 1.26, -0.8);
  const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.62, 0.14), brickMat);
  sideL.position.set(0, 1.26, -1.19);
  const sideR = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.62, 0.14), brickMat);
  sideR.position.set(0, 1.26, -0.41);

  // Glowing ember bed + steel grill grate
  const ember = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.04, 0.56),
    new THREE.MeshStandardMaterial({ color: '#2b1812', emissive: '#ff4e1a', emissiveIntensity: 0.85 })
  );
  ember.position.set(0.05, 0.98, -0.8);
  const grill = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.6), chromeMat);
  grill.position.set(0.06, 1.14, -0.8);

  // Hood & chimney
  const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.48, 0.55, 4), brickMat);
  hood.rotation.y = Math.PI / 4;
  hood.position.set(-0.02, 1.84, -0.8);
  hood.castShadow = true;

  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.95, 0.42), brickMat);
  chimney.position.set(-0.1, 2.55, -0.8);
  chimney.castShadow = true;

  // Gourmet counter beside churrasqueira (local z: -0.34 .. +1.55)
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.86, 1.88), woodMat);
  cab.position.set(-0.04, 0.43, 0.62);
  cab.castShadow = true;
  cab.receiveShadow = true;

  const counterTop = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.045, 1.92), graniteMat);
  counterTop.position.set(-0.02, 0.885, 0.62);
  counterTop.castShadow = true;

  const sink = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.02, 0.48), chromeMat);
  sink.position.set(-0.02, 0.912, 0.52);

  const faucetPost = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 0.24, 10), chromeMat);
  faucetPost.position.set(-0.26, 1.03, 0.52);
  const faucetSpout = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.022, 0.022), metalMat);
  faucetSpout.position.set(-0.2, 1.14, 0.52);

  g.add(bbqBase, backWall, sideL, sideR, ember, grill, hood, chimney, cab, counterTop, sink, faucetPost, faucetSpout);
  g.position.set(x, 0, z);
  return g;
}

function createGourmetPergola(x, z, woodMat, metalMat) {
  const g = new THREE.Group();
  const w = 4.2;
  const d = 3.7;
  const h = 2.65;

  for (const px of [-w / 2, w / 2]) {
    for (const pz of [-d / 2, d / 2]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.11, h, 0.11), metalMat);
      post.position.set(px, h / 2, pz);
      post.castShadow = true;
      post.receiveShadow = true;
      g.add(post);
    }
  }

  for (const px of [-w / 2, w / 2]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.14, d + 0.28), woodMat);
    beam.position.set(px, h + 0.05, 0);
    beam.castShadow = true;
    g.add(beam);
  }

  const rafterCount = 8;
  for (let i = 0; i < rafterCount; i += 1) {
    const rz = -d / 2 + i * (d / (rafterCount - 1));
    const rafter = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.12, 0.06), woodMat);
    rafter.position.set(0, h + 0.15, rz);
    rafter.castShadow = true;
    g.add(rafter);
  }

  // Light pergola canopy glass + string festoon warm bulbs
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(w + 0.25, 0.02, d + 0.2),
    new THREE.MeshPhysicalMaterial({ color: '#e6f0f2', transparent: true, opacity: 0.22, roughness: 0.2 })
  );
  roof.position.set(0, h + 0.22, 0);
  g.add(roof);

  const bulbMat = new THREE.MeshBasicMaterial({ color: '#ffd991' });
  for (const bz of [-1.25, 0, 1.25]) {
    for (const bx of [-1.35, -0.45, 0.45, 1.35]) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.038, 10, 8), bulbMat);
      bulb.position.set(bx, h - 0.03, bz);
      g.add(bulb);
    }
  }

  // 6-seat dining table (oriented along Z so generous walking room stays around it)
  const tx = 0.25;
  const tableTop = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.055, 2.05), woodMat);
  tableTop.position.set(tx, 0.76, 0);
  tableTop.castShadow = true;
  tableTop.receiveShadow = true;
  g.add(tableTop);

  for (const lx of [-0.36, 0.36]) {
    for (const lz of [-0.82, 0.82]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.74, 0.055), metalMat);
      leg.position.set(tx + lx, 0.37, lz);
      leg.castShadow = true;
      g.add(leg);
    }
  }

  const chairCoords = [
    [tx - 0.62, -0.58, Math.PI / 2],
    [tx - 0.62, 0, Math.PI / 2],
    [tx - 0.62, 0.58, Math.PI / 2],
    [tx + 0.62, -0.58, -Math.PI / 2],
    [tx + 0.62, 0, -Math.PI / 2],
    [tx + 0.62, 0.58, -Math.PI / 2]
  ];
  const cushionMat = new THREE.MeshStandardMaterial({ color: '#dfd8cc', roughness: 0.8 });
  for (const [cx, cz, ry] of chairCoords) {
    const chair = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.42), cushionMat);
    seat.position.set(0, 0.45, 0);
    seat.castShadow = true;
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.38, 0.04), woodMat);
    back.position.set(0, 0.66, -0.19);
    back.castShadow = true;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.43, 0.36), metalMat);
    frame.position.set(0, 0.215, 0);
    frame.scale.set(0.14, 1, 0.14);
    chair.add(seat, back, frame);
    chair.position.set(cx, 0, cz);
    chair.rotation.y = ry;
    g.add(chair);
  }

  g.position.set(x, 0, z);
  return g;
}

function createTreeGroup(spots, potMat, leafMat, woodMat) {
  const g = new THREE.Group();
  for (const [tx, tz, scale] of spots) {
    const tree = new THREE.Group();
    const planter = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.36, 16), potMat);
    planter.position.y = 0.18;
    planter.castShadow = true;

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.95 * scale, 10), woodMat);
    trunk.position.y = 0.36 + 0.45 * scale;
    trunk.castShadow = true;

    const crownMain = new THREE.Mesh(new THREE.DodecahedronGeometry(0.42 * scale, 1), leafMat);
    crownMain.position.set(0, 1.25 * scale, 0);
    crownMain.castShadow = true;

    const crownTop = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 * scale, 1), leafMat);
    crownTop.position.set(0.1, 1.56 * scale, -0.06);
    crownTop.castShadow = true;

    tree.add(planter, trunk, crownMain, crownTop);
    tree.position.set(tx, 0, tz);
    g.add(tree);
  }
  return g;
}

function createGamerDesk(x, z, textures, chromeMat) {
  const g = new THREE.Group();
  const darkDeskMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraEscura', 1.4, 1),
    roughness: 0.42
  });
  const blackMat = new THREE.MeshStandardMaterial({ color: '#1b1e24', roughness: 0.38, metalness: 0.4 });
  const rgbCyan = new THREE.MeshBasicMaterial({ color: '#39e6ff' });
  const rgbViolet = new THREE.MeshBasicMaterial({ color: '#a26bff' });
  const screenMat = new THREE.MeshBasicMaterial({ map: textures.getTexture('telaGamer', 1, 1) });

  // Desk placed along west wall (x=0.06), facing +X into the room
  const deskTop = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.045, 1.82), darkDeskMat);
  deskTop.position.set(0, 0.75, 0);
  deskTop.castShadow = true;
  deskTop.receiveShadow = true;
  g.add(deskTop);

  // Subtle LED strip along rear edge of desk
  const deskLed = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.02, 1.76), rgbViolet);
  deskLed.position.set(-0.35, 0.755, 0);
  g.add(deskLed);

  for (const lz of [-0.84, 0.84]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.73, 0.05), blackMat);
    leg.position.set(0, 0.365, lz);
    leg.castShadow = true;
    g.add(leg);
  }

  // XXL Desk Mat + RGB Mechanical Keyboard + Mouse
  const mat = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.008, 0.9),
    new THREE.MeshStandardMaterial({ color: '#14171c', roughness: 0.9 })
  );
  mat.position.set(0.11, 0.777, -0.05);
  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.022, 0.38), blackMat);
  keyboard.position.set(0.12, 0.79, -0.14);
  const kbGlow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.024, 0.36), rgbCyan);
  kbGlow.position.set(0.12, 0.792, -0.14);
  const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.03, 0.06), blackMat);
  mouse.position.set(0.12, 0.795, 0.2);
  g.add(mat, keyboard, kbGlow, mouse);

  // Headset on stand
  const hsStand = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.06, 0.26, 12), chromeMat);
  hsStand.position.set(-0.14, 0.9, -0.68);
  const hsArc = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.015, 8, 16, Math.PI), blackMat);
  hsArc.position.set(-0.14, 1.0, -0.68);
  g.add(hsStand, hsArc);

  // Dual curved monitors
  for (const [mz, rotY] of [[-0.36, 0.16], [0.26, -0.16]]) {
    const monGroup = new THREE.Group();
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.18, 10), blackMat);
    stand.position.set(-0.1, 0.86, 0);
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.36, 0.62), blackMat);
    bezel.position.set(-0.08, 1.06, 0);
    bezel.castShadow = true;
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.33, 0.59), screenMat);
    screen.position.set(-0.078, 1.06, 0);
    monGroup.add(stand, bezel, screen);
    monGroup.position.set(-0.1, 0, mz);
    monGroup.rotation.y = rotY;
    g.add(monGroup);
  }

  // Glass-side PC Tower on right end of desk
  const pcCase = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.44, 0.21), blackMat);
  pcCase.position.set(-0.04, 0.995, 0.72);
  pcCase.castShadow = true;
  const pcGlass = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.38, 0.015),
    new THREE.MeshPhysicalMaterial({ color: '#1b2638', transparent: true, opacity: 0.45, roughness: 0.1 })
  );
  pcGlass.position.set(-0.04, 0.995, 0.612);
  const fan1 = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.02, 16), rgbCyan);
  fan1.rotation.x = Math.PI / 2;
  fan1.position.set(-0.1, 1.07, 0.625);
  const fan2 = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.02, 16), rgbViolet);
  fan2.rotation.x = Math.PI / 2;
  fan2.position.set(0.05, 0.93, 0.625);
  g.add(pcCase, pcGlass, fan1, fan2);

  // Hexagonal acoustic wall panels + floating LED shelf above
  const panelMat = new THREE.MeshStandardMaterial({ color: '#2b323b', roughness: 0.92 });
  const hexPositions = [
    [1.46, -0.45],
    [1.64, -0.22],
    [1.46, 0.02],
    [1.64, 0.26],
    [1.46, 0.48]
  ];
  for (const [py, pz] of hexPositions) {
    const hex = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.03, 6), panelMat);
    hex.rotation.z = Math.PI / 2;
    hex.position.set(-0.36, py, pz);
    g.add(hex);
  }

  const topShelf = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 1.3), darkDeskMat);
  topShelf.position.set(-0.26, 1.92, -0.05);
  const shelfLed = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, 1.24), rgbCyan);
  shelfLed.position.set(-0.35, 1.9, -0.05);
  g.add(topShelf, shelfLed);

  // Ergonomic gaming chair pulled neatly in front of desk (+X)
  const chair = new THREE.Group();
  const accentGreen = new THREE.MeshStandardMaterial({ color: '#1f6f54', roughness: 0.7 });
  const baseStar = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.04, 5), blackMat);
  baseStar.position.y = 0.05;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.38, 10), chromeMat);
  stem.position.y = 0.24;
  const cSeat = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.09, 0.48), blackMat);
  cSeat.position.set(0, 0.45, 0);
  cSeat.castShadow = true;
  const cBack = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.72, 0.46), blackMat);
  cBack.position.set(0.2, 0.84, 0);
  cBack.rotation.z = -0.08;
  cBack.castShadow = true;
  const cAccent = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.56, 0.18), accentGreen);
  cAccent.position.set(0.19, 0.84, 0);
  cAccent.rotation.z = -0.08;
  chair.add(baseStar, stem, cSeat, cBack, cAccent);
  chair.position.set(0.62, 0, -0.06);
  g.add(chair);

  g.position.set(x, 0, z);
  return g;
}

function createMiniFridgeShelf(x, z, textures, chromeMat) {
  const g = new THREE.Group();
  const darkMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraEscura', 1, 1),
    roughness: 0.48
  });
  const fridgeBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.82, 0.52),
    new THREE.MeshStandardMaterial({ color: '#20242a', roughness: 0.3, metalness: 0.5 })
  );
  fridgeBody.position.set(0, 0.41, 0);
  fridgeBody.castShadow = true;

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.28, 8), chromeMat);
  handle.position.set(0.26, 0.56, -0.18);

  // Open floating shelves above mini-fridge instead of solid block
  const backPanel = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.32, 0.6), darkMat);
  backPanel.position.set(-0.26, 1.56, 0);
  g.add(backPanel);

  for (const sy of [1.05, 1.48, 1.92]) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.58), darkMat);
    shelf.position.set(-0.11, sy, 0);
    shelf.castShadow = true;
    g.add(shelf);
  }

  // Decorative console / books on shelves
  const decor1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.2, 0.14),
    new THREE.MeshStandardMaterial({ color: '#39e6ff', emissive: '#114455', roughness: 0.4 })
  );
  decor1.position.set(-0.1, 1.6, -0.12);
  const decor2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.22, 0.18),
    new THREE.MeshStandardMaterial({ color: '#a26bff', roughness: 0.5 })
  );
  decor2.position.set(-0.1, 1.18, 0.14);

  g.add(fridgeBody, handle, decor1, decor2);
  g.position.set(x, 0, z);
  return g;
}

export function buildFurniture(plan, textures) {
  const furnitureGroup = new THREE.Group();
  furnitureGroup.name = 'house-furniture';

  const woodMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraMovel', 1, 1),
    roughness: 0.52
  });
  const darkWoodMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('madeiraEscura', 1, 1),
    roughness: 0.45
  });
  const fabricMat = new THREE.MeshStandardMaterial({
    map: textures.getTexture('tecidoSofa', 2, 2),
    roughness: 0.88
  });
  const stoneMat = new THREE.MeshStandardMaterial({ color: '#e5e0d7', roughness: 0.26 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: '#f6f5f2', roughness: 0.4 });
  const metalMat = new THREE.MeshStandardMaterial({ color: '#2b2f35', roughness: 0.38, metalness: 0.65 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: '#c4cad0', roughness: 0.2, metalness: 0.88 });
  const steelMat = new THREE.MeshStandardMaterial({ color: '#b4bac0', roughness: 0.3, metalness: 0.74 });
  const screenMat = new THREE.MeshStandardMaterial({
    color: '#22313f',
    emissive: '#10202e',
    roughness: 0.14
  });
  const potMat = new THREE.MeshStandardMaterial({ color: '#7a746c', roughness: 0.85 });
  const leafMat = new THREE.MeshStandardMaterial({ color: '#4f7a44', roughness: 0.8 });

  for (const item of plan.FURNITURE_ITEMS) {
    switch (item.kind) {
      case 'car':
        furnitureGroup.add(createCar(item.x, item.z));
        break;
      case 'rug': {
        const rug = new THREE.Mesh(
          new THREE.BoxGeometry(item.width, 0.012, item.depth),
          new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.95 })
        );
        rug.position.set(item.x, 0.006, item.z);
        rug.receiveShadow = true;
        furnitureGroup.add(rug);
        break;
      }
      case 'sofa':
        furnitureGroup.add(createSofa(item, fabricMat, woodMat));
        break;
      case 'coffee-table':
        furnitureGroup.add(createCoffeeTable(item.x, item.z, woodMat, metalMat));
        break;
      case 'tv-unit':
        furnitureGroup.add(createTvUnit(item, woodMat, whiteMat, screenMat));
        break;
      case 'wall-art':
        furnitureGroup.add(createWallArt(item, textures, metalMat));
        break;
      case 'peninsula':
        furnitureGroup.add(createPeninsula(item, stoneMat, woodMat, metalMat));
        break;
      case 'kitchen-counter':
        furnitureGroup.add(createKitchenCounter(item, stoneMat, woodMat, chromeMat));
        break;
      case 'stove':
        furnitureGroup.add(createStove(item.x, item.z, chromeMat));
        break;
      case 'range-hood':
        furnitureGroup.add(createRangeHood(item.x, item.z, steelMat));
        break;
      case 'fridge':
        furnitureGroup.add(createFridge(item.x, item.z, steelMat, chromeMat));
        break;
      case 'laundry-tub':
        furnitureGroup.add(createLaundryTub(item, whiteMat, chromeMat));
        break;
      case 'laundry-shelf':
        furnitureGroup.add(createLaundryShelf(item.x, item.z, woodMat, whiteMat));
        break;
      case 'washer':
        furnitureGroup.add(createWasher(item.x, item.z, whiteMat));
        break;
      case 'bathroom-vanity':
        furnitureGroup.add(createBathroomVanity(item, woodMat, stoneMat, whiteMat, chromeMat));
        break;
      case 'toilet':
        furnitureGroup.add(createToilet(item, whiteMat, chromeMat));
        break;
      case 'shower-box':
        furnitureGroup.add(createShowerBox(item, textures, chromeMat));
        break;
      case 'wardrobe':
        furnitureGroup.add(createWardrobe(item, woodMat, whiteMat, chromeMat));
        break;
      case 'bed':
        furnitureGroup.add(createBed(item, woodMat, fabricMat));
        break;
      case 'gamer-bed':
        furnitureGroup.add(createBed(item, darkWoodMat, fabricMat, '#2f5d62', '#262b33'));
        break;
      case 'wall-tv':
        furnitureGroup.add(createWallTv(item, screenMat));
        break;
      case 'corridor-planters':
        for (const pz of [6.4, 9.6, 13.4, 16.5]) {
          furnitureGroup.add(createPlanter(4.82, pz, potMat, leafMat));
        }
        break;
      case 'garden-bench':
        furnitureGroup.add(createGardenBench(item, woodMat, metalMat));
        break;
      case 'outdoor-pergola':
        furnitureGroup.add(createOutdoorPergola(item.x, item.z, woodMat, metalMat));
        break;
      case 'garden-trees':
        furnitureGroup.add(
          createTreeGroup(
            [
              [0.45, 23.6, 1.0],
              [4.55, 24.4, 0.9],
              [0.45, 29.4, 1.15],
              [4.55, 29.4, 1.05]
            ],
            potMat,
            leafMat,
            woodMat
          )
        );
        break;
      case 'churrasqueira-gourmet':
        furnitureGroup.add(createChurrasqueiraGourmet(item.x, item.z, textures, woodMat, chromeMat, metalMat));
        break;
      case 'gourmet-pergola':
        furnitureGroup.add(createGourmetPergola(item.x, item.z, woodMat, metalMat));
        break;
      case 'leisure-plants':
        furnitureGroup.add(
          createTreeGroup(
            [
              [4.55, 19.3, 0.85],
              [0.35, 24.9, 0.95],
              [3.15, 25.0, 0.9],
              [4.6, 25.0, 0.8]
            ],
            potMat,
            leafMat,
            woodMat
          )
        );
        break;
      case 'gamer-desk':
        furnitureGroup.add(createGamerDesk(item.x, item.z, textures, chromeMat));
        break;
      case 'mini-fridge-shelf':
        furnitureGroup.add(createMiniFridgeShelf(item.x, item.z, textures, chromeMat));
        break;
      default:
        break;
    }
  }

  return furnitureGroup;
}
