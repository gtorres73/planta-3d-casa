import { describe, it, expect } from 'vitest';
import {
  PLAYER_RADIUS,
  VERSION_V1,
  VERSION_V2
} from '../src/data/floorplan.js';
import {
  resolvePlayerMovement,
  isPositionBlocked,
  findRoomAt
} from '../src/engine/collision.js';

function walkSegment(start, end, colliders, radius = PLAYER_RADIUS, stepSize = 0.1) {
  let current = { x: start.x, z: start.z };
  const dx = end.x - start.x;
  const dz = end.z - start.z;
  const distance = Math.hypot(dx, dz);
  const steps = Math.max(1, Math.ceil(distance / stepSize));

  for (let i = 1; i <= steps; i += 1) {
    const t = i / steps;
    const desired = {
      x: start.x + dx * t,
      z: start.z + dz * t
    };
    current = resolvePlayerMovement(current, desired, colliders, radius);
  }
  return current;
}

function walkPath(waypoints, colliders, radius = PLAYER_RADIUS) {
  let pos = { x: waypoints[0].x, z: waypoints[0].z };
  for (let i = 1; i < waypoints.length; i += 1) {
    pos = walkSegment(pos, waypoints[i], colliders, radius);
    expect(
      Math.hypot(pos.x - waypoints[i].x, pos.z - waypoints[i].z),
      `Failed to reach waypoint ${i} (${waypoints[i].x}, ${waypoints[i].z}); stopped at (${pos.x.toFixed(2)}, ${pos.z.toFixed(2)})`
    ).toBeLessThan(0.18);
  }
  return pos;
}

describe('collision and walkthrough paths (V1 and V2)', () => {
  const collidersV1 = VERSION_V1.getColliders();
  const collidersV2 = VERSION_V2.getColliders();

  it('walks smoothly through all rooms and openings in V1', () => {
    walkPath(
      [
        { x: 2.0, z: 3.5 },
        { x: 1.85, z: 6.5 },
        { x: 1.2, z: 9.5 },
        { x: 0.44, z: 11.4 },
        { x: 2.2, z: 11.45 },
        { x: 4.4, z: 11.75 },
        { x: 4.4, z: 3.5 }
      ],
      collidersV1
    );

    walkPath(
      [
        { x: 0.44, z: 13.95 },
        { x: 1.6, z: 13.95 }
      ],
      collidersV1
    );

    walkPath(
      [
        { x: 0.44, z: 14.0 },
        { x: 0.44, z: 16.8 }
      ],
      collidersV1
    );

    walkPath(
      [
        { x: 0.44, z: 15.4 },
        { x: 2.2, z: 15.4 }
      ],
      collidersV1
    );

    // 6. Access Quintal via Corredor Externo (Quarto now has a 0.80m window sill at z = 18.50)
    walkPath(
      [
        { x: 4.4, z: 11.75 },
        { x: 4.4, z: 19.6 },
        { x: 1.4, z: 19.6 },
        { x: 1.4, z: 29.0 }
      ],
      collidersV1
    );
  });

  it('walks smoothly through corridor into leisure area, Quarto Gamer and Banheiro Fundos in V2', () => {
    walkPath(
      [
        { x: 4.4, z: 11.75 },
        { x: 4.4, z: 19.6 },
        { x: 1.4, z: 22.0 },
        { x: 1.1, z: 25.0 },
        { x: 1.1, z: 27.2 },
        { x: 4.0, z: 26.5 },
        { x: 4.0, z: 28.2 }
      ],
      collidersV2
    );
  });

  it('blocks walking directly through solid walls and elevated window sills in V1 and V2', () => {
    const afterBath = walkSegment({ x: 2.5, z: 14.0 }, { x: 2.5, z: 15.0 }, collidersV1);
    expect(afterBath.z).toBeLessThan(14.3);

    const westAttempt = walkSegment({ x: 0.4, z: 6.5 }, { x: -0.5, z: 6.5 }, collidersV1);
    expect(westAttempt.x).toBeGreaterThanOrEqual(PLAYER_RADIUS - 0.01);

    // Quarto rear 2x2m window has 0.80m sill so walking straight through z = 18.50 is blocked
    const quartoWindowAttempt = walkSegment({ x: 1.8, z: 17.8 }, { x: 1.8, z: 19.2 }, collidersV1);
    expect(quartoWindowAttempt.z).toBeLessThan(18.3);

    // V2 edicula front closed glass/wall outside sliding gap
    const ediculaFrontBlocked = walkSegment({ x: 2.1, z: 25.0 }, { x: 2.1, z: 26.5 }, collidersV2);
    expect(ediculaFrontBlocked.z).toBeLessThan(25.55);

    // V2 edicula partition wall outside doorway (z = 28.0)
    const ediculaPartBlocked = walkSegment({ x: 2.8, z: 28.0 }, { x: 4.0, z: 28.0 }, collidersV2);
    expect(ediculaPartBlocked.x).toBeLessThan(3.3);
  });

  it('slides smoothly along walls and detects rooms accurately in V1 and V2', () => {
    const slide = resolvePlayerMovement({ x: 0.4, z: 6.5 }, { x: 0.1, z: 6.9 }, collidersV2, PLAYER_RADIUS);
    expect(slide.x).toBeGreaterThanOrEqual(PLAYER_RADIUS - 0.01);
    expect(slide.z).toBeCloseTo(6.9, 4);

    expect(findRoomAt(2.5, 24.5, VERSION_V1.ROOMS)?.id).toBe('quintal');
    expect(findRoomAt(2.5, 22.0, VERSION_V2.ROOMS)?.id).toBe('area-lazer');
    expect(findRoomAt(1.5, 27.5, VERSION_V2.ROOMS)?.id).toBe('quarto-gamer');
    expect(findRoomAt(4.2, 27.5, VERSION_V2.ROOMS)?.id).toBe('banheiro-fundos');
    expect(isPositionBlocked({ x: 0.0, z: 13.0 }, collidersV2, PLAYER_RADIUS)).toBe(true);
  });
});
