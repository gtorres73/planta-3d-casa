export const LOT = {
  width: 5.0,
  houseLength: 18.5,
  backyardLength: 11.5,
  totalLength: 30.0
};

export const WALL_HEIGHT = 3.0;
export const WALL_HEIGHT_LOW = 3.0;
export const WALL_HEIGHT_HIGH = 3.4;
export const SLAB_HEIGHT = 2.8;
export const PERIMETER_WALL_HEIGHT = 2.4;
export const WALL_EXT = 0.14;
export const WALL_INT = 0.14;
export const PLAYER_RADIUS = 0.24;
export const EYE_HEIGHT = 1.65;

export const SHARED_ROOMS = [
  {
    id: 'garagem',
    name: 'Garagem',
    shortName: 'Garagem',
    dimensionsLabel: '5,00 m × 5,00 m',
    bounds: { minX: 0, maxX: 5.0, minZ: 0, maxZ: 5.0 },
    floorType: 'pisoExterno',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [3.45, EYE_HEIGHT, 1.05], lookAt: [1.85, 1.3, 5.4] }
  },
  {
    id: 'sala',
    name: 'Sala',
    shortName: 'Sala',
    dimensionsLabel: '3,80 m × 3,00 m',
    bounds: { minX: 0, maxX: 3.8, minZ: 5.0, maxZ: 8.0 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [1.75, EYE_HEIGHT, 5.65], lookAt: [2.1, 1.45, 8.8] }
  },
  {
    id: 'cozinha',
    name: 'Cozinha',
    shortName: 'Cozinha',
    dimensionsLabel: '3,80 m × 3,00 m',
    bounds: { minX: 0, maxX: 3.8, minZ: 8.0, maxZ: 11.0 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [1.3, EYE_HEIGHT, 8.65], lookAt: [3.2, 1.35, 9.8] }
  },
  {
    id: 'corredor-interno',
    name: 'Corredor Interno',
    shortName: 'Corredor int.',
    dimensionsLabel: '0,90 m × 3,50 m',
    bounds: { minX: 0, maxX: 0.87, minZ: 11.0, maxZ: 14.5 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: false,
    showLabel: false,
    cameraPreset: { pos: [0.44, EYE_HEIGHT, 11.4], lookAt: [0.44, 1.45, 14.5] }
  },
  {
    id: 'area-servico',
    name: 'Área de Serviço',
    shortName: 'Á. Serviço',
    dimensionsLabel: '2,90 m × 1,50 m',
    bounds: { minX: 0.87, maxX: 3.8, minZ: 11.0, maxZ: 12.5 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [0.65, EYE_HEIGHT, 11.38], lookAt: [2.3, 1.0, 12.15] }
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    shortName: 'Banheiro',
    dimensionsLabel: '2,90 m × 2,00 m',
    bounds: { minX: 0.87, maxX: 3.8, minZ: 12.5, maxZ: 14.5 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [1.35, EYE_HEIGHT, 13.72], lookAt: [3.15, 1.25, 13.35] }
  },
  {
    id: 'closet',
    name: 'Closet',
    shortName: 'Closet',
    dimensionsLabel: '2,90 m × 1,80 m',
    bounds: { minX: 0.87, maxX: 3.8, minZ: 14.5, maxZ: 16.3 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [0.55, EYE_HEIGHT, 15.4], lookAt: [3.4, 1.45, 15.4] }
  },
  {
    id: 'quarto',
    name: 'Quarto',
    shortName: 'Quarto',
    dimensionsLabel: '3,80 m × 4,00 m',
    bounds: { minX: 0, maxX: 3.8, minZ: 14.5, maxZ: 18.5 },
    floorType: 'radierPolido',
    ceiling: true,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [0.55, EYE_HEIGHT, 16.58], lookAt: [2.35, 1.35, 17.9] }
  },
  {
    id: 'corredor',
    name: 'Corredor Lateral',
    shortName: 'Corredor',
    dimensionsLabel: '1,20 m × 13,50 m',
    bounds: { minX: 3.8, maxX: 5.0, minZ: 5.0, maxZ: 18.5 },
    floorType: 'pisoExterno',
    ceiling: false,
    showInNav: true,
    showLabel: true,
    cameraPreset: { pos: [4.42, EYE_HEIGHT, 6.2], lookAt: [4.05, 1.75, 13.8] }
  }
];

export const SHARED_HOUSE_WALLS = [
  // Parede Oeste (P1 + lateral garagem): 3.00m garagem, 3.40m telhas, 3.00m trecho laje
  {
    id: 'muro-oeste-garagem',
    x1: -0.07,
    z1: 0.0,
    x2: -0.07,
    z2: 5.0,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-oeste-casa-frente',
    x1: -0.07,
    z1: 5.0,
    x2: -0.07,
    z2: 12.5,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_HIGH,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-oeste-casa-laje',
    x1: -0.07,
    z1: 12.5,
    x2: -0.07,
    z2: 14.5,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'muro-oeste-casa-fundos',
    x1: -0.07,
    z1: 14.5,
    x2: -0.07,
    z2: 18.57,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_HIGH,
    material: 'reboco',
    collidable: true
  },

  // Divisa Leste da garagem
  {
    id: 'muro-leste-garagem',
    x1: 5.07,
    z1: 0.0,
    x2: 5.07,
    z2: 5.0,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },

  // Pilares e viga frontal da garagem (z = 0.00)
  {
    id: 'pilar-frente-esq',
    x1: 0.0,
    z1: -0.07,
    x2: 0.08,
    z2: -0.07,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'pilar-frente-meio',
    x1: 3.65,
    z1: -0.07,
    x2: 3.85,
    z2: -0.07,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'pilar-frente-dir',
    x1: 4.92,
    z1: -0.07,
    x2: 5.0,
    z2: -0.07,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'viga-frente-garagem',
    x1: 0.0,
    z1: -0.07,
    x2: 5.0,
    z2: -0.07,
    thickness: WALL_EXT,
    yBottom: 2.4,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },

  // Fachada Frente da Sala (P3, z = 5.00, porta-balcao 3.15 x 2.70 m em x: 0.28..3.43)
  {
    id: 'sala-frente-esq',
    x1: 0.0,
    z1: 5.0,
    x2: 0.28,
    z2: 5.0,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'sala-frente-bandeira',
    x1: 0.28,
    z1: 5.0,
    x2: 3.43,
    z2: 5.0,
    thickness: WALL_EXT,
    yBottom: 2.7,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'sala-frente-dir',
    x1: 3.43,
    z1: 5.0,
    x2: 3.87,
    z2: 5.0,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },

  // Parede Leste da Casa (P2, x = 3.80, altura uniforme 3.00 m)
  {
    id: 'leste-sala-inicio',
    x1: 3.8,
    z1: 5.07,
    x2: 3.8,
    z2: 5.35,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-sala-peitoril',
    x1: 3.8,
    z1: 5.35,
    x2: 3.8,
    z2: 7.35,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: 1.0,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-sala-verga',
    x1: 3.8,
    z1: 5.35,
    x2: 3.8,
    z2: 7.35,
    thickness: WALL_EXT,
    yBottom: 2.7,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'leste-sala-cozinha',
    x1: 3.8,
    z1: 7.35,
    x2: 3.8,
    z2: 8.35,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-cozinha-peitoril',
    x1: 3.8,
    z1: 8.35,
    x2: 3.8,
    z2: 10.35,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: 1.0,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-cozinha-verga',
    x1: 3.8,
    z1: 8.35,
    x2: 3.8,
    z2: 10.35,
    thickness: WALL_EXT,
    yBottom: 2.7,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'leste-cozinha-area',
    x1: 3.8,
    z1: 10.35,
    x2: 3.8,
    z2: 11.28,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-area-verga',
    x1: 3.8,
    z1: 11.28,
    x2: 3.8,
    z2: 12.18,
    thickness: WALL_EXT,
    yBottom: 2.1,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'leste-area-banheiro',
    x1: 3.8,
    z1: 12.18,
    x2: 3.8,
    z2: 13.1,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-banheiro-peitoril',
    x1: 3.8,
    z1: 13.1,
    x2: 3.8,
    z2: 13.9,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: 1.8,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'leste-banheiro-verga',
    x1: 3.8,
    z1: 13.1,
    x2: 3.8,
    z2: 13.9,
    thickness: WALL_EXT,
    yBottom: 2.4,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'leste-quarto-fundo',
    x1: 3.8,
    z1: 13.9,
    x2: 3.8,
    z2: 18.57,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },

  // Divisorias internas (P5, P6, P7, P8)
  {
    id: 'div-cozinha-area',
    x1: 0.87,
    z1: 11.0,
    x2: 3.73,
    z2: 11.0,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'div-area-banheiro-corredor-verga',
    x1: 0.0,
    z1: 12.5,
    x2: 0.87,
    z2: 12.5,
    thickness: WALL_INT,
    yBottom: 2.1,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'div-area-banheiro',
    x1: 0.87,
    z1: 12.5,
    x2: 3.73,
    z2: 12.5,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'porta-quarto-verga',
    x1: 0.0,
    z1: 14.5,
    x2: 0.87,
    z2: 14.5,
    thickness: WALL_INT,
    yBottom: 2.1,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'div-banheiro-quarto',
    x1: 0.87,
    z1: 14.5,
    x2: 3.73,
    z2: 14.5,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'corredor-int-as',
    x1: 0.94,
    z1: 11.88,
    x2: 0.94,
    z2: 12.43,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: 3.3,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'corredor-int-banheiro',
    x1: 0.94,
    z1: 12.57,
    x2: 0.94,
    z2: 13.55,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: SLAB_HEIGHT,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'corredor-int-porta-banheiro-verga',
    x1: 0.94,
    z1: 13.55,
    x2: 0.94,
    z2: 14.35,
    thickness: WALL_INT,
    yBottom: 2.1,
    yTop: SLAB_HEIGHT,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'corredor-int-ombreira-banheiro',
    x1: 0.94,
    z1: 14.35,
    x2: 0.94,
    z2: 14.43,
    thickness: WALL_INT,
    yBottom: 0,
    yTop: SLAB_HEIGHT,
    material: 'reboco',
    collidable: true
  },

  // Parede Fundos do Quarto (P4, z = 18.50, janela 2.00 x 2.00 m com peitoril 0.80 m)
  {
    id: 'quarto-fundo-esq',
    x1: 0.0,
    z1: 18.5,
    x2: 0.86,
    z2: 18.5,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'quarto-fundo-peitoril',
    x1: 0.86,
    z1: 18.5,
    x2: 2.86,
    z2: 18.5,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: 0.8,
    material: 'reboco',
    collidable: true
  },
  {
    id: 'quarto-fundo-verga',
    x1: 0.86,
    z1: 18.5,
    x2: 2.86,
    z2: 18.5,
    thickness: WALL_EXT,
    yBottom: 2.8,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: false
  },
  {
    id: 'quarto-fundo-dir',
    x1: 2.86,
    z1: 18.5,
    x2: 3.73,
    z2: 18.5,
    thickness: WALL_EXT,
    yBottom: 0,
    yTop: WALL_HEIGHT_LOW,
    material: 'reboco',
    collidable: true
  }
];

export const SHARED_GABLES = [
  { id: 'oitao-frente', x1: 0.0, x2: 3.73, z: 5.0, thickness: WALL_EXT },
  { id: 'oitao-p5', x1: 0.87, x2: 3.73, z: 11.0, thickness: WALL_INT },
  { id: 'oitao-p6', x1: 0.0, x2: 3.73, z: 12.5, thickness: WALL_INT },
  { id: 'oitao-p7', x1: 0.0, x2: 3.73, z: 14.5, thickness: WALL_INT },
  { id: 'oitao-fundos', x1: 0.0, x2: 3.73, z: 18.5, thickness: WALL_EXT }
];

export const SHARED_SANDWICH_ROOFS = [
  { id: 'telha-frente', zStart: 4.9, zEnd: 12.58, yWest: 3.4, yEast: 3.0 },
  { id: 'telha-fundos', zStart: 14.42, zEnd: 18.62, yWest: 3.4, yEast: 3.0 }
];

export const SHARED_WATER_TANK_SLAB = {
  x1: 0.0,
  x2: 3.73,
  z1: 12.5,
  z2: 14.5,
  yTop: SLAB_HEIGHT,
  tank: { x: 1.75, z: 13.5, liters: 1000 }
};

export const SHARED_OPENINGS = [
  {
    id: 'portao-carro',
    type: 'gate',
    orientation: 'horizontal',
    x1: 0.08,
    x2: 3.65,
    z: -0.04,
    yBottom: 0,
    yTop: 2.38,
    closedSpans: [{ minX: 0.08, maxX: 3.65, minZ: -0.1, maxZ: 0.02 }]
  },
  {
    id: 'portao-social',
    type: 'gate',
    orientation: 'horizontal',
    x1: 3.85,
    x2: 4.92,
    z: -0.04,
    yBottom: 0,
    yTop: 2.38,
    closedSpans: [{ minX: 3.85, maxX: 4.92, minZ: -0.1, maxZ: 0.02 }]
  },
  {
    id: 'porta-balcao-sala',
    type: 'sliding-door',
    orientation: 'horizontal',
    x1: 0.28,
    x2: 3.43,
    z: 5.0,
    yBottom: 0,
    yTop: 2.7,
    panels: 4,
    openGap: { x1: 1.07, x2: 2.64 },
    closedSpans: [
      { minX: 0.28, maxX: 1.07, minZ: 4.94, maxZ: 5.06 },
      { minX: 2.64, maxX: 3.43, minZ: 4.94, maxZ: 5.06 }
    ]
  },
  {
    id: 'janela-sala',
    type: 'window',
    orientation: 'vertical',
    x: 3.8,
    z1: 5.35,
    z2: 7.35,
    yBottom: 1.0,
    yTop: 2.7,
    frosted: false
  },
  {
    id: 'janela-cozinha',
    type: 'window',
    orientation: 'vertical',
    x: 3.8,
    z1: 8.35,
    z2: 10.35,
    yBottom: 1.0,
    yTop: 2.7,
    frosted: false
  },
  {
    id: 'porta-area-servico',
    type: 'wood-door',
    orientation: 'vertical',
    x: 3.8,
    z1: 11.28,
    z2: 12.18,
    yBottom: 0,
    yTop: 2.1,
    swingAngle: -1.38
  },
  {
    id: 'janela-banheiro',
    type: 'window',
    orientation: 'vertical',
    x: 3.8,
    z1: 13.1,
    z2: 13.9,
    yBottom: 1.8,
    yTop: 2.4,
    frosted: true
  },
  {
    id: 'porta-banheiro',
    type: 'wood-door',
    orientation: 'vertical',
    x: 0.94,
    z1: 13.55,
    z2: 14.35,
    yBottom: 0,
    yTop: 2.1,
    hingeAt: 'end',
    swingAngle: -1.5
  },
  {
    id: 'porta-quarto',
    type: 'wood-door',
    orientation: 'horizontal',
    x1: 0.0,
    x2: 0.87,
    z: 14.5,
    yBottom: 0,
    yTop: 2.1,
    swingAngle: 1.48
  },
  {
    id: 'janela-quarto-fundos',
    type: 'window-horizontal',
    orientation: 'horizontal',
    x1: 0.86,
    x2: 2.86,
    z: 18.5,
    yBottom: 0.8,
    yTop: 2.8,
    frosted: false
  }
];

export const SHARED_HOUSE_FURNITURE = [
  { id: 'carro-garagem', kind: 'car', x: 1.65, z: 2.65, rotY: 0 },
  { id: 'tapete-sala', kind: 'rug', x: 2.05, z: 6.2, width: 1.8, depth: 2.0, color: '#dfd6c8' },
  { id: 'sofa-sala', kind: 'sofa', x: 3.24, z: 6.2, width: 1.95, depth: 0.88, rotY: -Math.PI / 2 },
  { id: 'mesa-centro', kind: 'coffee-table', x: 2.05, z: 6.2 },
  { id: 'rack-tv-sala', kind: 'tv-unit', x: 0.24, z: 6.2, rotY: Math.PI / 2 },
  { id: 'quadro-sala', kind: 'wall-art', x: 0.03, z: 9.25, rotY: Math.PI / 2, variant: 0 },
  { id: 'peninsula-cozinha', kind: 'peninsula', x: 2.68, z: 8.15, width: 1.8, depth: 0.68 },
  { id: 'bancada-pia-cozinha', kind: 'kitchen-counter', x: 3.4, z: 9.25, width: 1.85, depth: 0.62 },
  { id: 'fogao-cozinha', kind: 'stove', x: 3.38, z: 10.56 },
  { id: 'coifa-cozinha', kind: 'range-hood', x: 3.38, z: 10.56 },
  { id: 'geladeira-cozinha', kind: 'fridge', x: 2.1, z: 10.56 },
  { id: 'maquina-lavar', kind: 'washer', x: 1.42, z: 12.1 },
  { id: 'tanque-servico', kind: 'laundry-tub', x: 2.18, z: 12.12, rotY: Math.PI },
  { id: 'prateleira-servico', kind: 'laundry-shelf', x: 1.8, z: 12.28 },
  { id: 'pia-banheiro', kind: 'bathroom-vanity', x: 1.48, z: 12.82, width: 0.95, depth: 0.5 },
  { id: 'vaso-banheiro', kind: 'toilet', x: 3.4, z: 12.95, rotY: -Math.PI / 2 },
  { id: 'box-banheiro', kind: 'shower-box', x1: 2.35, x2: 3.72, z1: 13.45, z2: 14.42 },
  { id: 'armario-closet-1', kind: 'wardrobe', x: 2.36, z: 14.84, width: 2.7, depth: 0.52, rotY: 0 },
  { id: 'armario-closet-2', kind: 'wardrobe', x: 2.36, z: 15.96, width: 2.7, depth: 0.52, rotY: Math.PI },
  { id: 'tapete-quarto', kind: 'rug', x: 2.65, z: 17.28, width: 2.1, depth: 2.0, color: '#e6dfd3' },
  { id: 'cama-quarto', kind: 'bed', x: 2.71, z: 17.28, width: 1.48, length: 1.98, rotY: -Math.PI / 2 },
  { id: 'tv-quarto', kind: 'wall-tv', x: 0.06, z: 17.28, rotY: Math.PI / 2 },
  { id: 'jardim-corredor', kind: 'corridor-planters' }
];

export const SHARED_CEILING_SLABS = [
  { id: 'laje-garagem', x: 2.5, z: 2.465, w: 5.28, d: 5.21, y: WALL_HEIGHT_LOW }
];

export const SHARED_LIGHT_SPOTS = [
  { name: 'garagem', pos: [2.5, 2.86, 2.5], distance: 8.5, fixture: true, fixtureY: 2.99 },
  { name: 'sala', pos: [1.9, 3.04, 6.5], distance: 8.0, fixture: false },
  { name: 'cozinha', pos: [1.9, 3.04, 9.5], distance: 8.0, fixture: false },
  { name: 'area-servico', pos: [2.2, 2.98, 11.75], distance: 6.5, fixture: false },
  { name: 'banheiro', pos: [2.2, 2.66, 13.5], distance: 6.5, fixture: true, fixtureY: 2.79 },
  { name: 'closet', pos: [2.2, 3.0, 15.4], distance: 6.5, fixture: false },
  { name: 'quarto', pos: [1.9, 3.04, 17.3], distance: 8.0, fixture: false },
  { name: 'corredor-int', pos: [0.44, 2.66, 13.4], distance: 5.5, fixture: true, fixtureY: 2.79 }
];

export const SHARED_DIMENSIONS = [
  { id: 'cota-largura-total', x1: 0, z1: -0.65, x2: 5.0, z2: -0.65, label: '5,00 m (total)' },
  { id: 'cota-largura-casa', x1: 0, z1: 30.65, x2: 3.8, z2: 30.65, label: '3,80 m' },
  { id: 'cota-largura-corredor', x1: 3.8, z1: 30.65, x2: 5.0, z2: 30.65, label: '1,20 m' },
  { id: 'cota-garagem', x1: -0.65, z1: 0, x2: -0.65, z2: 5.0, label: '5,00 m' },
  { id: 'cota-sala', x1: -0.65, z1: 5.0, x2: -0.65, z2: 8.0, label: '3,00 m' },
  { id: 'cota-cozinha', x1: -0.65, z1: 8.0, x2: -0.65, z2: 11.0, label: '3,00 m' },
  { id: 'cota-area', x1: -0.65, z1: 11.0, x2: -0.65, z2: 12.5, label: '1,50 m' },
  { id: 'cota-banheiro', x1: -0.65, z1: 12.5, x2: -0.65, z2: 14.5, label: '2,00 m' },
  { id: 'cota-quarto', x1: -0.65, z1: 14.5, x2: -0.65, z2: 18.5, label: '4,00 m' },
  { id: 'cota-profundidade-total', x1: 5.75, z1: 0, x2: 5.75, z2: 30.0, label: '30,00 m (total)' }
];

export function wallToBox(wall) {
  const half = wall.thickness / 2;
  if (Math.abs(wall.x1 - wall.x2) < 1e-6) {
    return {
      minX: wall.x1 - half,
      maxX: wall.x1 + half,
      minZ: Math.min(wall.z1, wall.z2),
      maxZ: Math.max(wall.z1, wall.z2),
      label: wall.id
    };
  }
  return {
    minX: Math.min(wall.x1, wall.x2),
    maxX: Math.max(wall.x1, wall.x2),
    minZ: wall.z1 - half,
    maxZ: wall.z1 + half,
    label: wall.id
  };
}

export function buildColliders(walls, openings) {
  const colliders = [];

  for (const wall of walls) {
    if (wall.collidable) {
      colliders.push(wallToBox(wall));
    }
  }

  for (const opening of openings) {
    if (Array.isArray(opening.closedSpans)) {
      for (const span of opening.closedSpans) {
        colliders.push({ ...span, label: opening.id });
      }
    }
  }

  return colliders;
}
