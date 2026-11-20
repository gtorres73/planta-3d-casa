import {
  LOT,
  EYE_HEIGHT,
  WALL_HEIGHT,
  PERIMETER_WALL_HEIGHT,
  WALL_EXT,
  WALL_INT,
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
    id: 'area-lazer',
    name: 'Área de Lazer / Gourmet',
    shortName: 'Lazer',
    dimensionsLabel: '5,00 m × 7,10 m',
    bounds: { minX: 0, maxX: 5.0, minZ: 18.5, maxZ: 25.6 },
    floorType: 'grama',
    ceiling: false,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [3.2, EYE_HEIGHT, 19.65], lookAt: [1.4, 1.25, 22.8] }
  },
  {
    id: 'quarto-gamer',
    name: 'Quarto Gamer',
    shortName: 'Q. Gamer',
    dimensionsLabel: '3,40 m × 4,40 m',
    bounds: { minX: 0, maxX: 3.4, minZ: 25.6, maxZ: 30.0 },
    floorType: 'madeiraPiso',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [1.9, EYE_HEIGHT, 26.45], lookAt: [0.35, 1.05, 27.35] }
  },
  {
    id: 'banheiro-fundos',
    name: 'Banheiro Edícula',
    shortName: 'Banh. Fundos',
    mapLabel: 'WC',
    dimensionsLabel: '1,60 m × 4,40 m',
    bounds: { minX: 3.4, maxX: 5.0, minZ: 25.6, maxZ: 30.0 },
    floorType: 'ceramicaBanheiro',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [3.95, EYE_HEIGHT, 26.45], lookAt: [4.6, 1.15, 28.0] }
  }
];

const WALLS = [
  ...SHARED_HOUSE_WALLS,
  {
    id: 'muro-oeste-lazer',
    x1: -0.07,
    z1: 18.57,
    x2: -0.07,
    z2: 25.53,
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
    z2: 25.53,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: PERIMETER_WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-oeste-edicula',
    x1: -0.07,
    z1: 25.53,
    x2: -0.07,
    z2: 30.15,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-leste-edicula',
    x1: 5.07,
    z1: 25.53,
    x2: 5.07,
    z2: 30.15,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
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
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'edicula-frente-esq',
    x1: 0.0,
    z1: 25.6,
    x2: 0.55,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'edicula-frente-bandeira',
    x1: 0.55,
    z1: 25.6,
    x2: 2.55,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 2.25,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'edicula-frente-meio',
    x1: 2.55,
    z1: 25.6,
    x2: 3.65,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'edicula-banheiro-peitoril',
    x1: 3.65,
    z1: 25.6,
    x2: 4.75,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: 1.65,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'edicula-banheiro-verga',
    x1: 3.65,
    z1: 25.6,
    x2: 4.75,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 2.25,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'edicula-frente-dir',
    x1: 4.75,
    z1: 25.6,
    x2: 5.0,
    z2: 25.6,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'div-edicula-ombreira-frente',
    x1: 3.4,
    z1: 25.67,
    x2: 3.4,
    z2: 26.05,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'div-edicula-porta-verga',
    x1: 3.4,
    z1: 26.05,
    x2: 3.4,
    z2: 26.92,
    thickness: WALL_INT,
    yBottom: 2.15,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'div-edicula-fundo',
    x1: 3.4,
    z1: 26.92,
    x2: 3.4,
    z2: 30.0,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: WALL_HEIGHT,
    material: 'reboco',
    collidable: true
  }
];

const OPENINGS = [
  ...SHARED_OPENINGS,
  {
    id: 'porta-balcao-gamer',
    type: 'sliding-door',
    orientation: 'horizontal',
    x1: 0.55,
    x2: 2.55,
    z: 25.6,
    yBottom: 0,
    yTop: 2.25,
    panels: 2,
    openGap: { x1: 0.6, x2: 1.55 },
    closedSpans: [{ minX: 1.55, maxX: 2.55, minZ: 25.54, maxZ: 25.66 }]
  },
  {
    id: 'janela-banheiro-fundos',
    type: 'window-horizontal',
    orientation: 'horizontal',
    x1: 3.65,
    x2: 4.75,
    z: 25.6,
    yBottom: 1.65,
    yTop: 2.25,
    frosted: true
  },
  {
    id: 'porta-banheiro-fundos',
    type: 'wood-door',
    orientation: 'vertical',
    x: 3.4,
    z1: 26.05,
    z2: 26.92,
    yBottom: 0,
    yTop: 2.15,
    swingAngle: 1.5
  }
];

const FURNITURE_ITEMS = [
  ...SHARED_HOUSE_FURNITURE,
  { id: 'churrasqueira-gourmet', kind: 'churrasqueira-gourmet', x: 0.42, z: 22.15 },
  { id: 'pergolado-gourmet', kind: 'gourmet-pergola', x: 2.65, z: 22.15 },
  { id: 'jardim-lazer', kind: 'leisure-plants' },
  { id: 'setup-gamer', kind: 'gamer-desk', x: 0.44, z: 27.15 },
  { id: 'tapete-gamer', kind: 'rug', x: 2.25, z: 29.05, width: 2.0, depth: 1.6, color: '#2b323b' },
  { id: 'cama-gamer', kind: 'gamer-bed', x: 2.34, z: 29.1, width: 1.38, length: 1.94, rotY: -Math.PI / 2 },
  { id: 'estante-frigobar', kind: 'mini-fridge-shelf', x: 0.36, z: 29.35 },
  {
    id: 'pia-banheiro-fundos',
    kind: 'bathroom-vanity',
    x: 4.74,
    z: 26.75,
    width: 0.85,
    depth: 0.48,
    rotY: -Math.PI / 2,
    ledMirror: true
  },
  { id: 'vaso-banheiro-fundos', kind: 'toilet', x: 4.68, z: 27.85, rotY: -Math.PI / 2 },
  { id: 'box-banheiro-fundos', kind: 'shower-box', x1: 3.48, x2: 5.0, z1: 28.78, z2: 29.96, openSide: 'left' }
];

const DIMENSION_LINES = [
  ...SHARED_DIMENSIONS,
  { id: 'cota-lazer', x1: -0.65, z1: 18.5, x2: -0.65, z2: 25.6, label: '7,10 m (Lazer)' },
  { id: 'cota-edicula', x1: -0.65, z1: 25.6, x2: -0.65, z2: 30.0, label: '4,40 m (Edícula)' }
];

const CEILING_SLABS = [
  ...SHARED_CEILING_SLABS,
  { id: 'laje-edicula', x: 2.5, z: 27.84, w: 5.28, d: 4.62, y: WALL_HEIGHT }
];

const LIGHT_SPOTS = [
  ...SHARED_LIGHT_SPOTS,
  { name: 'area-gourmet', pos: [2.5, 2.55, 22.15], distance: 9.0, color: '#ffe5bf', intensity: 1.5, fixture: false },
  { name: 'quarto-gamer', pos: [1.75, 2.86, 27.8], distance: 7.5, fixture: true, fixtureY: 2.99 },
  { name: 'quarto-gamer-rgb', pos: [0.65, 1.55, 27.15], distance: 4.8, color: '#6b7cff', intensity: 1.65, fixture: false },
  { name: 'banheiro-fundos', pos: [4.2, 2.86, 27.8], distance: 6.5, fixture: true, fixtureY: 2.99 }
];

const FLOOR_DECKS = [
  { id: 'terrace-v2', x: 1.975, z: 19.35, w: 3.65, d: 1.55 },
  { id: 'gourmet-paving-v2', x: 2.5, z: 22.15, w: 4.88, d: 3.95 }
];

const STEPPING_STONES = { x: 1.1, startZ: 24.45, count: 2, step: 0.65 };

export const VERSION_V2 = {
  id: 'v2',
  label: 'V2: Edícula Gamer',
  title: 'Versão 2 (Lazer + Edícula Gamer 5×30 m)',
  LOT,
  ROOMS,
  WALLS,
  GABLES: SHARED_GABLES,
  SANDWICH_ROOFS: SHARED_SANDWICH_ROOFS,
  WATER_TANK_SLAB: SHARED_WATER_TANK_SLAB,
  OPENINGS,
  FURNITURE_ITEMS,
  DIMENSION_LINES,
  CEILING_SLABS,
  LIGHT_SPOTS,
  FLOOR_DECKS,
  STEPPING_STONES,
  hasBackEdicula: true,
  getColliders: () => buildColliders(WALLS, OPENINGS)
};
