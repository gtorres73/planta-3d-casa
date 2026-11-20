import {
  LOT,
  EYE_HEIGHT,
  PERIMETER_WALL_HEIGHT,
  WALL_EXT,
  SHARED_ROOMS,
  SHARED_HOUSE_WALLS,
  SHARED_GABLES,
  SHARED_SANDWICH_ROOFS,
  SHARED_WATER_TANK_SLAB,
  SHARED_OPENINGS,
  SHARED_HOUSE_FURNITURE,
  SHARED_CEILING_SLABS,
  SHARED_LIGHT_SPOTS,
  SHARED_DIMENSIONS,
  buildColliders
} from './floorplanShared.js';

const ROOMS = [
  ...SHARED_ROOMS,
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
    cameraPreset: { pos: [1.55, EYE_HEIGHT, 23.4], lookAt: [2.4, 1.3, 17.5] }
  }
];

const WALLS = [
  ...SHARED_HOUSE_WALLS,
  {
    id: 'muro-oeste-quintal',
    x1: -0.07,
    z1: 18.57,
    x2: -0.07,
    z2: 30.15,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: PERIMETER_WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-leste-corredor',
    x1: 5.07,
    z1: 5.0,
    x2: 5.07,
    z2: 30.15,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: PERIMETER_WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-fundos',
    x1: 0.0,
    z1: 30.07,
    x2: 5.0,
    z2: 30.07,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: PERIMETER_WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  }
];

const OPENINGS = [...SHARED_OPENINGS];

const FURNITURE_ITEMS = [
  ...SHARED_HOUSE_FURNITURE,
  { id: 'banco-quintal', kind: 'garden-bench', x: 4.58, z: 22.0, rotY: Math.PI / 2 },
  { id: 'pergolado-quintal', kind: 'outdoor-pergola', x: 2.5, z: 27.6 },
  { id: 'arvores-quintal', kind: 'garden-trees' }
];

const DIMENSION_LINES = [
  ...SHARED_DIMENSIONS,
  { id: 'cota-quintal', x1: -0.65, z1: 18.5, x2: -0.65, z2: 30.0, label: '11,50 m' }
];

const FLOOR_DECKS = [
  { id: 'terrace-v1', x: 1.975, z: 19.62, w: 3.65, d: 2.08 },
  { id: 'back-deck-v1', x: 2.5, z: 27.75, w: 4.3, d: 3.5 }
];

const STEPPING_STONES = { x: 1.45, startZ: 21.3, count: 7, step: 0.7 };

export const VERSION_V1 = {
  id: 'v1',
  label: 'V1: Quintal',
  title: 'Versão 1 (Quintal Livre 5×30 m)',
  LOT,
  ROOMS,
  WALLS,
  GABLES: SHARED_GABLES,
  SANDWICH_ROOFS: SHARED_SANDWICH_ROOFS,
  WATER_TANK_SLAB: SHARED_WATER_TANK_SLAB,
  OPENINGS,
  FURNITURE_ITEMS,
  DIMENSION_LINES,
  CEILING_SLABS: SHARED_CEILING_SLABS,
  LIGHT_SPOTS: SHARED_LIGHT_SPOTS,
  FLOOR_DECKS,
  STEPPING_STONES,
  hasBackEdicula: false,
  getColliders: () => buildColliders(WALLS, OPENINGS)
};
