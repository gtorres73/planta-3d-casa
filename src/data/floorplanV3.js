import {
  LOT,
  EYE_HEIGHT,
  SHARED_ROOMS,
  SHARED_LIGHT_SPOTS
} from './floorplanShared.js';
import {
  FIRST_COURSE_BLOCKS,
  FIRST_COURSE_GROUT_POINTS,
  FIRST_COURSE_STATS,
  FIRST_COURSE_THRESHOLDS
} from './firstCourseV1.js';

const V3_ROOM_LOOKAT = {
  garagem: { pos: [2.5, 1.9, 1.2], lookAt: [1.9, 0.25, 5.8] },
  sala: { pos: [1.85, EYE_HEIGHT, 5.8], lookAt: [2.1, 0.15, 7.6] },
  cozinha: { pos: [1.8, EYE_HEIGHT, 8.7], lookAt: [2.3, 0.15, 10.6] },
  'area-servico': { pos: [0.6, EYE_HEIGHT, 11.4], lookAt: [2.2, 0.15, 12.1] },
  banheiro: { pos: [1.9, EYE_HEIGHT, 13.4], lookAt: [2.2, 0.15, 13.6] },
  closet: { pos: [1.8, EYE_HEIGHT, 15.2], lookAt: [2.0, 0.15, 15.4] },
  quarto: { pos: [1.85, EYE_HEIGHT, 16.4], lookAt: [1.9, 0.2, 18.2] },
  corredor: { pos: [4.45, 1.9, 7.2], lookAt: [3.6, 0.2, 12.2] }
};

const ROOMS = [
  ...SHARED_ROOMS.map((r) => ({
    ...r,
    ceiling: false,
    cameraPreset: V3_ROOM_LOOKAT[r.id] || r.cameraPreset
  })),
  {
    id: 'quintal',
    name: 'Quintal',
    shortName: 'Quintal',
    dimensionsLabel: '5,00 m × 11,50 m',
    bounds: { minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 30.0 },
    floorType: 'grama',
    ceiling: false,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [1.85, 1.85, 22.8], lookAt: [1.9, 0.25, 18.3] }
  }
];

const { byWall } = FIRST_COURSE_STATS;

const DIMENSION_LINES = [
  { id: 'cota-largura-casa', x1: 0, z1: 4.5, x2: 3.8, z2: 4.5, label: 'Largura Casa: 3,80 m' },
  {
    id: 'fiada-p1',
    x1: -0.38,
    z1: 5.0,
    x2: -0.38,
    z2: 18.5,
    label: `P1: ${byWall.P1.total} blocos (13,64 m)`
  },
  {
    id: 'fiada-p2',
    x1: 4.18,
    z1: 5.0,
    x2: 4.18,
    z2: 18.5,
    label: `P2: ${byWall.P2.total} blocos`
  },
  {
    id: 'fiada-p3',
    x1: 0.28,
    z1: 4.78,
    x2: 3.43,
    z2: 4.78,
    label: 'P3: Vão 3,15 m (2 meio)'
  },
  {
    id: 'fiada-p4',
    x1: 0.0,
    z1: 18.88,
    x2: 3.73,
    z2: 18.88,
    label: `P4: ${byWall.P4.total} bl. (Jan. 2×2)`
  },
  {
    id: 'fiada-p5',
    x1: 1.4,
    z1: 10.75,
    x2: 3.65,
    z2: 10.75,
    label: `P5: ${byWall.P5.total} bl.`
  },
  {
    id: 'fiada-p6',
    x1: 1.4,
    z1: 12.25,
    x2: 3.65,
    z2: 12.25,
    label: `P6: ${byWall.P6.total} bl.`
  },
  {
    id: 'fiada-p7',
    x1: 1.4,
    z1: 14.25,
    x2: 3.65,
    z2: 14.25,
    label: `P7: ${byWall.P7.total} bl.`
  },
  {
    id: 'fiada-p8',
    x1: 1.24,
    z1: 11.88,
    x2: 1.24,
    z2: 13.55,
    label: `P8: ${byWall.P8.total} bl.`
  }
];

export const VERSION_V3 = {
  id: 'v3',
  label: 'V3: 1ª Fiada',
  title: `Versão 3 (Modulação 1ª Fiada V1: ${FIRST_COURSE_STATS.totalBlocks} blocos + ${FIRST_COURSE_STATS.groutPointsCount} arranques)`,
  LOT,
  ROOMS,
  WALLS: [],
  GABLES: [],
  SANDWICH_ROOFS: [],
  WATER_TANK_SLAB: null,
  OPENINGS: [],
  FURNITURE_ITEMS: [],
  DIMENSION_LINES,
  CEILING_SLABS: [],
  LIGHT_SPOTS: SHARED_LIGHT_SPOTS.map((s) => ({ ...s, fixture: false })),
  FLOOR_DECKS: [],
  STEPPING_STONES: null,
  hasBackEdicula: false,
  isFirstCourseOnly: true,
  defaultLabelsVisible: true,
  FIRST_COURSE_BLOCKS,
  FIRST_COURSE_GROUT_POINTS,
  FIRST_COURSE_STATS,
  FIRST_COURSE_THRESHOLDS,
  getColliders: () => []
};
