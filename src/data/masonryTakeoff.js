export const BLOCK_FAMILY = {
  label: 'Bloco Estrutural de Concreto 14 × 19 × 39 cm',
  widthCm: 14,
  heightCm: 19,
  lengthCm: 39,
  jointCm: 1,
  moduleLengthM: 0.4,
  moduleHeightM: 0.2,
  blocksPerM2: 12.5
};

export const BLOCK_TYPES = [
  {
    id: 'inteiro',
    name: 'Bloco Estrutural Inteiro',
    dimensions: '14 × 19 × 39 cm',
    usage: 'Fiadas corridas de vedação e carga',
    unitPriceBrl: 3.6,
    priceRangeLabel: 'R$ 3,20 a R$ 4,00'
  },
  {
    id: 'meio',
    name: 'Meio-Bloco Estrutural',
    dimensions: '14 × 19 × 19 cm',
    usage: 'Amarração alternada em encontros e ombreiras de portas/janelas',
    unitPriceBrl: 2.6,
    priceRangeLabel: 'R$ 2,30 a R$ 3,10'
  },
  {
    id: 'amarracao',
    name: 'Bloco de Amarração (34 cm)',
    dimensions: '14 × 19 × 34 cm',
    usage: 'Cantos em L e encontros em T sem cortes improvisados',
    unitPriceBrl: 3.9,
    priceRangeLabel: 'R$ 3,50 a R$ 4,40'
  },
  {
    id: 'canaleta',
    name: 'Bloco Canaleta U',
    dimensions: '14 × 19 × 39 cm',
    usage: 'Contravergas, vergas, respaldo da laje e cintas de amarração',
    unitPriceBrl: 5.2,
    priceRangeLabel: 'R$ 4,50 a R$ 6,00'
  }
];

export const ITAPEVI_COST_REFERENCE = {
  region: 'Itapevi / Zona Oeste da Grande SP',
  referenceBase: 'SINAPI-SP / CUB-SP (SindusCon-SP) e fornecedores locais',
  marketRangeMinBrl: 108000,
  marketRangeMaxBrl: 132000,
  masonrySuppliesBrl: 5450
};

export const MASONRY_WALLS = [
  {
    id: 'P1',
    name: 'Parede Oeste (divisa esquerda da casa)',
    lengthM: 13.5,
    heightLabel: '3,40 m (telha) / 3,00 m (laje)',
    grossAreaM2: 45.1,
    openingsDesc: 'Sem aberturas',
    openingsAreaM2: 0,
    canaletaCount: 39, // 13.5m respaldo superior + 2.0m apoio laje
    halfBlockCount: 20,
    bondingCount: 32 // 2 cantos L + 3 encontros T (P5, P6, P7)
  },
  {
    id: 'P2',
    name: 'Parede Leste (lado do corredor externo)',
    lengthM: 13.5,
    heightLabel: '3,00 m uniforme',
    grossAreaM2: 40.5,
    openingsDesc: '2× Jan. (2,00×1,70), Porta A.S. (0,90×2,10), Jan. Banh. (0,80×0,60)',
    openingsAreaM2: 9.17,
    canaletaCount: 66, // Contravergas (7+7+4) + vergas (5+4) + cinta 34 + apoio laje 5
    halfBlockCount: 32,
    bondingCount: 24 // 2 cantos L + encontro P5/P6/P7
  },
  {
    id: 'P3',
    name: 'Fachada Frente (Sala / Garagem)',
    lengthM: 3.52,
    heightLabel: '3,00 → 3,40 m (oitão)',
    grossAreaM2: 11.26,
    openingsDesc: 'Porta-balcão (3,15×2,70)',
    openingsAreaM2: 8.51,
    canaletaCount: 9, // Respaldo/oitão (vão 3,15 m pede viga armada)
    halfBlockCount: 14,
    bondingCount: 8
  },
  {
    id: 'P4',
    name: 'Parede Fundos (Quarto)',
    lengthM: 3.52,
    heightLabel: '3,00 → 3,40 m (oitão)',
    grossAreaM2: 11.26,
    openingsDesc: 'Janela com peitoril 0,80 m (2,00×2,00)',
    openingsAreaM2: 4.0,
    canaletaCount: 16, // Contraverga 7 + respaldo/verga/oitão 9
    halfBlockCount: 16,
    bondingCount: 8
  },
  {
    id: 'P5',
    name: 'Divisória Cozinha / Área de Serviço',
    lengthM: 2.64,
    heightLabel: '3,00 → 3,29 m (até telha)',
    grossAreaM2: 8.33,
    openingsDesc: 'Sem aberturas (vão corredor livre)',
    openingsAreaM2: 0,
    canaletaCount: 7,
    halfBlockCount: 16,
    bondingCount: 8
  },
  {
    id: 'P6',
    name: 'Divisória Área de Serviço / Banheiro',
    lengthM: 3.52,
    heightLabel: '2,80 m laje + mureta 3,00→3,40 m',
    grossAreaM2: 11.13,
    openingsDesc: 'Passagem corredor (0,88×2,10)',
    openingsAreaM2: 1.85,
    canaletaCount: 21, // Verga corredor 3 + apoio laje 9 + borda/oitão 9
    halfBlockCount: 12,
    bondingCount: 14
  },
  {
    id: 'P7',
    name: 'Divisória Banheiro / Quarto',
    lengthM: 3.52,
    heightLabel: '2,80 m laje + oitão 3,00→3,40 m',
    grossAreaM2: 11.26,
    openingsDesc: 'Porta Quarto (0,80×2,10)',
    openingsAreaM2: 1.68,
    canaletaCount: 22, // Verga porta 4 + apoio laje 9 + topo/oitão 9
    halfBlockCount: 14,
    bondingCount: 14
  },
  {
    id: 'P8',
    name: 'Divisória Corredor Interno',
    lengthM: 2.55,
    heightLabel: '3,30 m (A.S.) / 2,80 m (Banh.)',
    grossAreaM2: 7.02,
    openingsDesc: 'Porta Banheiro (0,80×2,10)',
    openingsAreaM2: 1.68,
    canaletaCount: 9, // Verga porta 4 + respaldo laje 5
    halfBlockCount: 20,
    bondingCount: 12
  }
];

const ROOF_SLOPE_FACTOR = Math.hypot(3.8, 0.4) / 3.8; // ~1.0055

export const AUXILIARY_AREAS = {
  radierM2: Number((13.5 * 3.8).toFixed(2)), // 51.30 m²
  exposedSlabM2: Number((3.8 * 2.0).toFixed(2)), // 7.60 m²
  sandwichRoofPlanM2: Number(((7.5 + 4.0) * 3.8).toFixed(2)), // 43.70 m²
  sandwichRoofSlopedM2: Number(((7.5 + 4.0) * 4.1 * ROOF_SLOPE_FACTOR).toFixed(2)), // ~47.41 m² c/ beirais
  waterTankLiters: 1000
};

const roundBrl = (value) => Number(value.toFixed(2));

const FIXED_COST_STAGES = [
  {
    id: 'radier',
    stage: '1. Fundação e Piso Final em Radier Polido',
    scope: '51,30 m² (concreto usinado, malha pop, lona e polimento acabado)',
    materialBrl: 10773.0,
    laborBrl: 6156.0
  },
  {
    id: 'cobertura',
    stage: '3. Cobertura Telha Sanduíche + Laje 7,60 m² + Caixa 1.000 L',
    scope: '47,41 m² telha c/ beiral + estrutura/calha + laje impermeabilizada',
    materialBrl: 16413.65,
    laborBrl: 6410.0
  },
  {
    id: 'esquadrias',
    stage: '4. Esquadrias e Vidros',
    scope: 'Porta-balcão 3,15×2,70, 2× jan. 2,00×1,70, jan. 2,00×2,00, banh. 0,80×0,60 e 3 portas',
    materialBrl: 14900.0,
    laborBrl: 3200.0
  },
  {
    id: 'instalacoes',
    stage: '5. Instalações Elétricas, Hidráulicas, Banheiro e Pintura',
    scope: 'Rede água/esgoto, elétrica, revestimento banheiro, louças e pintura',
    materialBrl: 19800.0,
    laborBrl: 14500.0
  }
];

function buildItapeviCostEstimate(summaryByType, netAreaM2) {
  const netBlocksCostBrl = roundBrl(
    summaryByType.reduce((acc, item) => acc + item.netCostBrl, 0)
  );
  const purchaseBlocksCostBrl = roundBrl(
    summaryByType.reduce((acc, item) => acc + item.purchaseCostBrl, 0)
  );

  const masonryMaterialBrl = roundBrl(purchaseBlocksCostBrl + ITAPEVI_COST_REFERENCE.masonrySuppliesBrl);
  const masonryStage = {
    id: 'alvenaria',
    stage: '2. Alvenaria Estrutural (Blocos + Graute/Argamassa/Aço)',
    scope: `${netAreaM2.toFixed(2).replace('.', ',')} m² líq. (blocos c/ quebra + argamassa, graute, aço e viga 3,15 m)`,
    materialBrl: masonryMaterialBrl,
    laborBrl: 11800.0
  };

  const stages = [
    FIXED_COST_STAGES[0],
    masonryStage,
    FIXED_COST_STAGES[1],
    FIXED_COST_STAGES[2],
    FIXED_COST_STAGES[3]
  ].map((s) => ({
    ...s,
    totalBrl: roundBrl(s.materialBrl + s.laborBrl)
  }));

  const totalMaterialsBrl = roundBrl(stages.reduce((acc, s) => acc + s.materialBrl, 0));
  const totalLaborBrl = roundBrl(stages.reduce((acc, s) => acc + s.laborBrl, 0));
  const totalProjectBrl = roundBrl(totalMaterialsBrl + totalLaborBrl);
  const costPerM2Brl = roundBrl(totalProjectBrl / AUXILIARY_AREAS.radierM2);

  return {
    region: 'Itapevi / Grande SP',
    referenceBase: ITAPEVI_COST_REFERENCE.referenceBase,
    netBlocksCostBrl,
    purchaseBlocksCostBrl,
    stages,
    totalMaterialsBrl,
    totalLaborBrl,
    totalProjectBrl,
    costPerM2Brl,
    marketRangeMinBrl: ITAPEVI_COST_REFERENCE.marketRangeMinBrl,
    marketRangeMaxBrl: ITAPEVI_COST_REFERENCE.marketRangeMaxBrl
  };
}

export function calculateMasonryTakeoff({ breakagePercent = 10 } = {}) {
  const factor = 1 + breakagePercent / 100;

  const walls = MASONRY_WALLS.map((w) => {
    const netAreaM2 = roundBrl(w.grossAreaM2 - w.openingsAreaM2);
    const canaletaArea = w.canaletaCount * 0.08;
    const halfArea = w.halfBlockCount * 0.04;
    const bondingArea = w.bondingCount * 0.068;
    const fullCount = Math.max(0, Math.round((netAreaM2 - canaletaArea - halfArea - bondingArea) / 0.08));
    const totalBlocks = fullCount + w.halfBlockCount + w.bondingCount + w.canaletaCount;

    return {
      ...w,
      netAreaM2,
      counts: {
        inteiro: fullCount,
        meio: w.halfBlockCount,
        amarracao: w.bondingCount,
        canaleta: w.canaletaCount
      },
      totalBlocks
    };
  });

  const netTotals = {
    inteiro: walls.reduce((acc, w) => acc + w.counts.inteiro, 0),
    meio: walls.reduce((acc, w) => acc + w.counts.meio, 0),
    amarracao: walls.reduce((acc, w) => acc + w.counts.amarracao, 0),
    canaleta: walls.reduce((acc, w) => acc + w.counts.canaleta, 0),
    grossAreaM2: roundBrl(walls.reduce((acc, w) => acc + w.grossAreaM2, 0)),
    openingsAreaM2: roundBrl(walls.reduce((acc, w) => acc + w.openingsAreaM2, 0)),
    netAreaM2: roundBrl(walls.reduce((acc, w) => acc + w.netAreaM2, 0)),
    totalBlocks: walls.reduce((acc, w) => acc + w.totalBlocks, 0)
  };

  const summaryByType = BLOCK_TYPES.map((type) => {
    const netQty = netTotals[type.id];
    const purchaseQty = Math.ceil(netQty * factor);
    return {
      ...type,
      netQty,
      purchaseQty,
      extraQty: purchaseQty - netQty,
      netCostBrl: roundBrl(netQty * type.unitPriceBrl),
      purchaseCostBrl: roundBrl(purchaseQty * type.unitPriceBrl)
    };
  });

  const purchaseTotalBlocks = summaryByType.reduce((acc, item) => acc + item.purchaseQty, 0);
  const costEstimate = buildItapeviCostEstimate(summaryByType, netTotals.netAreaM2);

  return {
    family: BLOCK_FAMILY,
    breakagePercent,
    walls,
    netTotals,
    summaryByType,
    purchaseTotalBlocks,
    auxiliary: AUXILIARY_AREAS,
    costEstimate
  };
}
