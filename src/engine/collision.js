const EPS = 1e-4;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function pushOutCircleFromAabb(pos, box, radius) {
  const closestX = clamp(pos.x, box.minX, box.maxX);
  const closestZ = clamp(pos.z, box.minZ, box.maxZ);
  const dx = pos.x - closestX;
  const dz = pos.z - closestZ;
  const distSq = dx * dx + dz * dz;

  if (distSq >= radius * radius) {
    return;
  }

  if (distSq > 1e-10) {
    const dist = Math.sqrt(distSq);
    const push = radius - dist + EPS;
    pos.x += (dx / dist) * push;
    pos.z += (dz / dist) * push;
    return;
  }

  // Center lies strictly inside the box: push out toward the closest face.
  const leftPen = pos.x - box.minX;
  const rightPen = box.maxX - pos.x;
  const topPen = pos.z - box.minZ;
  const bottomPen = box.maxZ - pos.z;
  const minPen = Math.min(leftPen, rightPen, topPen, bottomPen);

  if (minPen === leftPen) pos.x = box.minX - radius - EPS;
  else if (minPen === rightPen) pos.x = box.maxX + radius + EPS;
  else if (minPen === topPen) pos.z = box.minZ - radius - EPS;
  else pos.z = box.maxZ + radius + EPS;
}

export function isPositionBlocked(pos, colliders, radius) {
  for (const box of colliders) {
    const closestX = clamp(pos.x, box.minX, box.maxX);
    const closestZ = clamp(pos.z, box.minZ, box.maxZ);
    const dx = pos.x - closestX;
    const dz = pos.z - closestZ;
    if (dx * dx + dz * dz < radius * radius - 1e-6) {
      return true;
    }
  }
  return false;
}

export function resolvePlayerMovement(currentPos, desiredPos, colliders, radius) {
  const totalDx = desiredPos.x - currentPos.x;
  const totalDz = desiredPos.z - currentPos.z;
  const distance = Math.hypot(totalDx, totalDz);
  const maxStep = Math.max(0.05, radius * 0.4);
  const substeps = Math.max(1, Math.ceil(distance / maxStep));

  const pos = { x: currentPos.x, z: currentPos.z };

  for (let s = 1; s <= substeps; s += 1) {
    const stepX = totalDx / substeps;
    const stepZ = totalDz / substeps;

    pos.x += stepX;
    pos.z += stepZ;

    for (let iter = 0; iter < 4; iter += 1) {
      for (const box of colliders) {
        pushOutCircleFromAabb(pos, box, radius);
      }
    }
  }

  return pos;
}

export function findRoomAt(x, z, rooms) {
  // Check more specific/smaller sub-zones first (closet before quarto, corredor-interno before quarto/cozinha)
  const ordered = [...rooms].sort((a, b) => {
    const areaA = (a.bounds.maxX - a.bounds.minX) * (a.bounds.maxZ - a.bounds.minZ);
    const areaB = (b.bounds.maxX - b.bounds.minX) * (b.bounds.maxZ - b.bounds.minZ);
    return areaA - areaB;
  });

  for (const room of ordered) {
    const { minX, maxX, minZ, maxZ } = room.bounds;
    if (x >= minX && x <= maxX && z >= minZ && z <= maxZ) {
      return room;
    }
  }
  return null;
}
