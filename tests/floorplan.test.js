import { describe, it, expect } from 'vitest';
import {
  LOT,
  WALL_HEIGHT,
  WALL_HEIGHT_LOW,
  WALL_HEIGHT_HIGH,
  SLAB_HEIGHT,
  WALL_EXT,
  WALL_INT,
  PLAYER_RADIUS,
  VERSION_V1,
  VERSION_V2,
  VERSION_V3,
  getVersion
} from '../src/data/floorplan.js';
import { isPositionBlocked } from '../src/engine/collision.js';

describe('floorplan versions specification', () => {
  it('defines exact lot and architectural scale constants in meters', () => {
    expect(LOT.width).toBe(5.0);
    expect(LOT.houseLength).toBe(18.5);
    expect(LOT.backyardLength).toBe(11.5);
    expect(LOT.totalLength).toBe(30.0);
    expect(WALL_HEIGHT).toBe(3.0);
    expect(WALL_HEIGHT_LOW).toBe(3.0);
    expect(WALL_HEIGHT_HIGH).toBe(3.4);
    expect(SLAB_HEIGHT).toBe(2.8);
    expect(WALL_EXT).toBe(0.14);
    expect(WALL_INT).toBe(0.14);
    expect(PLAYER_RADIUS).toBe(0.24);
  });

  it('places tanque-servico and maquina-lavar on the same bathroom wall in both V1 and V2', () => {
    for (const plan of [VERSION_V1, VERSION_V2]) {
      const tanque = plan.FURNITURE_ITEMS.find((i) => i.id === 'tanque-servico');
      const washer = plan.FURNITURE_ITEMS.find((i) => i.id === 'maquina-lavar');
      expect(tanque).toBeDefined();
      expect(washer).toBeDefined();
      expect(tanque.z).toBeGreaterThan(11.95);
      expect(washer.z).toBeGreaterThan(11.95);
      expect(Math.abs(tanque.z - washer.z)).toBeLessThan(0.1);
    }
  });

  it('preserves V1 rooms and adds leisure + edicula rooms in V2', () => {
    const v1Rooms = Object.fromEntries(VERSION_V1.ROOMS.map((r) => [r.id, r]));
    expect(v1Rooms.quintal.bounds).toEqual({ minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 30.0 });

    const v2Rooms = Object.fromEntries(VERSION_V2.ROOMS.map((r) => [r.id, r]));
    expect(v2Rooms['area-lazer'].bounds).toEqual({ minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 25.6 });
    expect(v2Rooms['quarto-gamer'].bounds).toEqual({ minX: 0, maxX: 3.4, minZ: 25.6, maxZ: 30.0 });
    expect(v2Rooms['banheiro-fundos'].bounds).toEqual({ minX: 3.4, maxX: 5.0, minZ: 25.6, maxZ: 30.0 });
  });

  it('has collision-free camera presets for every room in V1, V2, and V3', () => {
    for (const plan of [VERSION_V1, VERSION_V2, VERSION_V3]) {
      const colliders = plan.getColliders();
      if (!plan.isFirstCourseOnly) {
        expect(colliders.length).toBeGreaterThan(10);
      }

      for (const room of plan.ROOMS) {
        const [x, , z] = room.cameraPreset.pos;
        const blocked = isPositionBlocked({ x, z }, colliders, PLAYER_RADIUS);
        expect(blocked, `${plan.id} preset for ${room.id} (${x}, ${z}) should not be blocked`).toBe(false);
      }
    }
  });

  it('registers V3 with only the 1st course structural block modulation based on V1', () => {
    expect(getVersion('v3')).toBe(VERSION_V3);
    expect(VERSION_V3.isFirstCourseOnly).toBe(true);
    expect(VERSION_V3.WALLS).toEqual([]);
    expect(VERSION_V3.CEILING_SLABS).toEqual([]);
    expect(VERSION_V3.SANDWICH_ROOFS).toEqual([]);
    expect(VERSION_V3.WATER_TANK_SLAB).toBeNull();
    expect(VERSION_V3.FURNITURE_ITEMS).toEqual([]);
    expect(VERSION_V3.FIRST_COURSE_BLOCKS.length).toBeGreaterThan(70);
    expect(VERSION_V3.FIRST_COURSE_GROUT_POINTS.length).toBeGreaterThanOrEqual(18);
  });
});
