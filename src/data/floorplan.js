import { VERSION_V1 } from './floorplanV1.js';
import { VERSION_V2 } from './floorplanV2.js';
import { VERSION_V3 } from './floorplanV3.js';

export {
  LOT,
  WALL_HEIGHT,
  WALL_HEIGHT_LOW,
  WALL_HEIGHT_HIGH,
  SLAB_HEIGHT,
  PERIMETER_WALL_HEIGHT,
  WALL_EXT,
  WALL_INT,
  PLAYER_RADIUS,
  EYE_HEIGHT,
  wallToBox
} from './floorplanShared.js';

export { VERSION_V1, VERSION_V2, VERSION_V3 };

export const VERSIONS = {
  v1: VERSION_V1,
  v2: VERSION_V2,
  v3: VERSION_V3
};

export function getVersion(id) {
  return VERSIONS[id] || VERSION_V2;
}

export const ROOMS = VERSION_V1.ROOMS;
export const WALLS = VERSION_V1.WALLS;
export const OPENINGS = VERSION_V1.OPENINGS;
export const FURNITURE_ITEMS = VERSION_V1.FURNITURE_ITEMS;
export const DIMENSION_LINES = VERSION_V1.DIMENSION_LINES;
export const getColliders = VERSION_V1.getColliders;
