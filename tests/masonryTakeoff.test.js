import { describe, it, expect } from 'vitest';
import {
  AUXILIARY_AREAS,
  BLOCK_TYPES,
  ITAPEVI_COST_REFERENCE,
  MASONRY_WALLS,
  calculateMasonryTakeoff
} from '../src/data/masonryTakeoff.js';
import {
  FIRST_COURSE_BLOCKS,
  FIRST_COURSE_GROUT_POINTS,
  FIRST_COURSE_STATS
} from '../src/data/firstCourseV1.js';

describe('structural masonry takeoff (V1 main house)', () => {
  it('calculates exact radier, exposed water-tank slab, and sandwich roof areas', () => {
    expect(AUXILIARY_AREAS.radierM2).toBe(51.3);
    expect(AUXILIARY_AREAS.exposedSlabM2).toBe(7.6);
    expect(AUXILIARY_AREAS.sandwichRoofPlanM2).toBe(43.7);
    expect(AUXILIARY_AREAS.sandwichRoofSlopedM2).toBeGreaterThan(45);
    expect(AUXILIARY_AREAS.waterTankLiters).toBe(1000);
  });

  it('deducts exact user-specified openings across P1-P8', () => {
    expect(MASONRY_WALLS.map((w) => w.id)).toEqual(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8']);

    const takeoff = calculateMasonryTakeoff({ breakagePercent: 10 });
    const byId = Object.fromEntries(takeoff.walls.map((w) => [w.id, w]));

    expect(byId.P1.netAreaM2).toBe(45.1);
    expect(byId.P2.openingsAreaM2).toBeCloseTo(2 * (2.0 * 1.7) + 0.9 * 2.1 + 0.8 * 0.6, 2);
    expect(byId.P3.openingsAreaM2).toBeCloseTo(3.15 * 2.7, 2);
    expect(byId.P4.openingsAreaM2).toBe(4.0);
    expect(byId.P4.netAreaM2).toBeCloseTo(7.26, 2);
  });

  it('produces positive counts for all 4 structural block types and applies breakage cleanly', () => {
    const t5 = calculateMasonryTakeoff({ breakagePercent: 5 });
    const t10 = calculateMasonryTakeoff({ breakagePercent: 10 });
    const t15 = calculateMasonryTakeoff({ breakagePercent: 15 });

    expect(t10.summaryByType.map((b) => b.id)).toEqual(BLOCK_TYPES.map((b) => b.id));
    for (const item of t10.summaryByType) {
      expect(item.netQty).toBeGreaterThan(0);
      expect(item.purchaseQty).toBeGreaterThanOrEqual(item.netQty);
    }

    expect(t5.purchaseTotalBlocks).toBeGreaterThan(t5.netTotals.totalBlocks);
    expect(t10.purchaseTotalBlocks).toBeGreaterThan(t5.purchaseTotalBlocks);
    expect(t15.purchaseTotalBlocks).toBeGreaterThan(t10.purchaseTotalBlocks);
  });

  it('estimates Itapevi/SP block costs and total project cost scaled by breakage', () => {
    const t5 = calculateMasonryTakeoff({ breakagePercent: 5 });
    const t10 = calculateMasonryTakeoff({ breakagePercent: 10 });
    const t15 = calculateMasonryTakeoff({ breakagePercent: 15 });

    expect(ITAPEVI_COST_REFERENCE.region).toContain('Itapevi');
    expect(t10.costEstimate.netBlocksCostBrl).toBeCloseTo(5875.2, 2);
    expect(t10.costEstimate.purchaseBlocksCostBrl).toBeCloseTo(6466.6, 2);
    expect(t10.costEstimate.totalMaterialsBrl).toBeCloseTo(73803.25, 2);
    expect(t10.costEstimate.totalLaborBrl).toBeCloseTo(42066, 2);
    expect(t10.costEstimate.totalProjectBrl).toBeCloseTo(115869.25, 2);
    expect(t10.costEstimate.costPerM2Brl).toBeCloseTo(2258.66, 2);
    expect(t10.costEstimate.stages).toHaveLength(5);

    expect(t10.costEstimate.totalProjectBrl).toBeGreaterThan(t5.costEstimate.totalProjectBrl);
    expect(t15.costEstimate.totalProjectBrl).toBeGreaterThan(t10.costEstimate.totalProjectBrl);
  });

  it('modulates V1 1st course across P1-P8 without overlap, leaving doors open and window sills closed', () => {
    const blocks = FIRST_COURSE_BLOCKS;
    const wallIds = [...new Set(blocks.map((b) => b.wallId))];
    expect(wallIds).toEqual(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8']);
    expect(FIRST_COURSE_STATS.totalBlocks).toBe(blocks.length);
    expect(FIRST_COURSE_GROUT_POINTS.length).toBeGreaterThanOrEqual(18);

    // Zero XZ overlap between any two 1st course blocks and stay strictly inside house perimeter
    for (let i = 0; i < blocks.length; i += 1) {
      const a = blocks[i];
      const aMinX = a.x - a.sizeX / 2;
      const aMaxX = a.x + a.sizeX / 2;
      const aMinZ = a.z - a.sizeZ / 2;
      const aMaxZ = a.z + a.sizeZ / 2;

      expect(aMinX).toBeGreaterThanOrEqual(-0.141);
      expect(aMaxX).toBeLessThanOrEqual(3.871);
      expect(aMinZ).toBeGreaterThanOrEqual(4.929);
      expect(aMaxZ).toBeLessThanOrEqual(18.571);

      for (let j = i + 1; j < blocks.length; j += 1) {
        const b = blocks[j];
        const bMinX = b.x - b.sizeX / 2;
        const bMaxX = b.x + b.sizeX / 2;
        const bMinZ = b.z - b.sizeZ / 2;
        const bMaxZ = b.z + b.sizeZ / 2;

        const overlapX = Math.min(aMaxX, bMaxX) - Math.max(aMinX, bMinX);
        const overlapZ = Math.min(aMaxZ, bMaxZ) - Math.max(aMinZ, bMinZ);
        expect(overlapX > 0.002 && overlapZ > 0.002, `Blocks ${a.id} and ${b.id} overlap`).toBe(false);
      }
    }

    // Floor-level door openings must have zero blocking 1st-course blocks
    const p3Gap = blocks.filter((b) => b.wallId === 'P3' && b.x > 0.28 && b.x < 3.43);
    const p2ServiceDoor = blocks.filter((b) => b.wallId === 'P2' && b.z > 11.28 && b.z < 12.18);
    const p7BedroomDoor = blocks.filter((b) => b.wallId === 'P7' && b.x < 0.87);
    const p8BathDoor = blocks.filter((b) => b.wallId === 'P8' && b.z > 13.55 && b.z < 14.35);

    expect(p3Gap).toHaveLength(0);
    expect(p2ServiceDoor).toHaveLength(0);
    expect(p7BedroomDoor).toHaveLength(0);
    expect(p8BathDoor).toHaveLength(0);

    // Window sill stretches must remain continuous with underWindow=true
    const p2WindowBlocks = blocks.filter((b) => b.wallId === 'P2' && b.underWindow);
    const p4WindowBlocks = blocks.filter((b) => b.wallId === 'P4' && b.underWindow);
    expect(p2WindowBlocks.length).toBeGreaterThanOrEqual(10);
    expect(p4WindowBlocks.length).toBeGreaterThanOrEqual(4);
  });
});
