export const BLOCK_SPEC = {
  width: 0.14,
  height: 0.19,
  bedJoint: 0.01,
  lengths: {
    inteiro: 0.39,
    amarracao: 0.34,
    meio: 0.19
  }
};

const MOD_LENGTHS = {
  inteiro: 0.4,
  amarracao: 0.35,
  meio: 0.2
};

function solveMiddleSequence(remMod, baseBodies, baseCount, span) {
  let best = null;
  for (let nAmarr = 0; nAmarr <= 3; nAmarr += 1) {
    for (let nMeio = 0; nMeio <= 3; nMeio += 1) {
      const fixedMod = nAmarr * MOD_LENGTHS.amarracao + nMeio * MOD_LENGTHS.meio;
      const leftover = remMod - fixedMod;
      if (leftover < -0.02) continue;

      const candidates = new Set([
        Math.max(0, Math.floor((leftover + 1e-6) / MOD_LENGTHS.inteiro)),
        Math.max(0, Math.round(leftover / MOD_LENGTHS.inteiro))
      ]);
      for (const nInt of candidates) {
        const middleBodies =
          nInt * BLOCK_SPEC.lengths.inteiro +
          nAmarr * BLOCK_SPEC.lengths.amarracao +
          nMeio * BLOCK_SPEC.lengths.meio;
        const totalCount = baseCount + nInt + nAmarr + nMeio;
        const minLength = baseBodies + middleBodies + Math.max(0, totalCount - 1) * 0.005;
        if (minLength > span + 1e-6) continue;

        const modTotal =
          nInt * MOD_LENGTHS.inteiro +
          nAmarr * MOD_LENGTHS.amarracao +
          nMeio * MOD_LENGTHS.meio;
        const err = Math.abs(remMod - modTotal);
        const penalty = err * 100 + (nAmarr + nMeio) * 0.05;

        if (!best || penalty < best.penalty) {
          best = { nInt, nAmarr, nMeio, penalty };
        }
      }
    }
  }
  return best || { nInt: Math.max(0, Math.floor(remMod / 0.4)), nAmarr: 0, nMeio: 0 };
}

function modulateSegment({
  wallId,
  axis,
  fixedCoord,
  start,
  end,
  startCap = null,
  endCap = null,
  alignEnd = false,
  underWindowRanges = []
}) {
  const span = Number((end - start).toFixed(4));
  const items = [];

  if (span < 0.35) {
    const type = 'meio';
    const len = BLOCK_SPEC.lengths[type];
    const s = alignEnd ? end - len : start;
    const centerPos = Number((s + len / 2).toFixed(4));
    const isVert = axis === 'z';
    items.push({
      id: `${wallId}-1`,
      wallId,
      type,
      axis,
      x: isVert ? fixedCoord : centerPos,
      z: isVert ? centerPos : fixedCoord,
      sizeX: isVert ? BLOCK_SPEC.width : len,
      sizeZ: isVert ? len : BLOCK_SPEC.width,
      height: BLOCK_SPEC.height,
      yBottom: BLOCK_SPEC.bedJoint,
      underWindow: underWindowRanges.some(([a, b]) => centerPos >= a && centerPos <= b)
    });
    return items;
  }

  const targetMod = span + BLOCK_SPEC.bedJoint;
  const startMod = startCap ? MOD_LENGTHS[startCap] : 0;
  const endMod = endCap ? MOD_LENGTHS[endCap] : 0;
  const baseBodies =
    (startCap ? BLOCK_SPEC.lengths[startCap] : 0) + (endCap ? BLOCK_SPEC.lengths[endCap] : 0);
  let seq = solveMiddleSequence(
    targetMod - startMod - endMod,
    baseBodies,
    (startCap ? 1 : 0) + (endCap ? 1 : 0),
    span
  );

  const buildOrder = () => {
    const arr = [];
    if (startCap) arr.push(startCap);
    for (let i = 0; i < seq.nInt; i += 1) arr.push('inteiro');
    for (let i = 0; i < seq.nAmarr; i += 1) arr.push('amarracao');
    for (let i = 0; i < seq.nMeio; i += 1) arr.push('meio');
    if (endCap) arr.push(endCap);
    return arr;
  };

  let order = buildOrder();
  let sumBodies = order.reduce((acc, t) => acc + BLOCK_SPEC.lengths[t], 0);
  // Guarantee sumBodies + min 5mm joints <= span
  while (sumBodies + Math.max(0, order.length - 1) * 0.005 > span + 1e-6 && seq.nInt > 0) {
    seq.nInt -= 1;
    order = buildOrder();
    sumBodies = order.reduce((acc, t) => acc + BLOCK_SPEC.lengths[t], 0);
  }

  const gaps = Math.max(1, order.length - 1);
  const rawJoint = order.length > 1 ? (span - sumBodies) / gaps : 0;
  const joint = Math.min(0.022, Math.max(0.005, rawJoint));
  const usedLength = sumBodies + gaps * joint;
  let cursor = start + (alignEnd ? Math.max(0, span - usedLength) : 0);

  const isVert = axis === 'z';
  order.forEach((type, idx) => {
    const len = BLOCK_SPEC.lengths[type];
    const centerPos = Number((cursor + len / 2).toFixed(4));
    const underWindow = underWindowRanges.some(([a, b]) => centerPos >= a && centerPos <= b);

    items.push({
      id: `${wallId}-${idx + 1}`,
      wallId,
      type,
      axis,
      x: isVert ? fixedCoord : centerPos,
      z: isVert ? centerPos : fixedCoord,
      sizeX: isVert ? BLOCK_SPEC.width : len,
      sizeZ: isVert ? len : BLOCK_SPEC.width,
      height: BLOCK_SPEC.height,
      yBottom: BLOCK_SPEC.bedJoint,
      underWindow
    });

    cursor += len + joint;
  });

  return items;
}

const SEGMENTS = [
  // P1: Parede Oeste (divisa esquerda da casa principal, continua na 1a fiada)
  {
    wallId: 'P1',
    axis: 'z',
    fixedCoord: -0.07,
    start: 4.93,
    end: 18.57,
    startCap: 'amarracao',
    endCap: 'amarracao'
  },
  // P2 trecho 1: Sala + Cozinha (passa sob as duas janelas 2,00x1,70, para antes da porta A.S.)
  {
    wallId: 'P2',
    axis: 'z',
    fixedCoord: 3.8,
    start: 4.93,
    end: 11.28,
    startCap: 'amarracao',
    endCap: 'meio',
    underWindowRanges: [
      [5.35, 7.35],
      [8.35, 10.35]
    ]
  },
  // P2 trecho 2: Banheiro + Closet + Quarto (apos porta 0,90 m, passa sob janela 0,80x0,60)
  {
    wallId: 'P2',
    axis: 'z',
    fixedCoord: 3.8,
    start: 12.18,
    end: 18.57,
    startCap: 'meio',
    endCap: 'amarracao',
    underWindowRanges: [[13.1, 13.9]]
  },
  // P3 boneca esquerda (frente sala) - porta-balcao 3,15 m aberta em x: 0.28..3.43
  {
    wallId: 'P3',
    axis: 'x',
    fixedCoord: 5.0,
    start: 0.0,
    end: 0.28,
    alignEnd: true
  },
  // P3 boneca direita (frente sala)
  {
    wallId: 'P3',
    axis: 'x',
    fixedCoord: 5.0,
    start: 3.43,
    end: 3.73,
    alignEnd: false
  },
  // P4: Parede Fundos Quarto (continua na 1a fiada sob a janela 2,00x2,00 com peitoril 0,80 m)
  {
    wallId: 'P4',
    axis: 'x',
    fixedCoord: 18.5,
    start: 0.0,
    end: 3.73,
    startCap: 'amarracao',
    endCap: 'amarracao',
    underWindowRanges: [[0.86, 2.86]]
  },
  // P5: Divisoria Cozinha / Area de Servico (corredor 0,87 m aberto)
  {
    wallId: 'P5',
    axis: 'x',
    fixedCoord: 11.0,
    start: 0.87,
    end: 3.73,
    startCap: 'meio',
    endCap: 'amarracao'
  },
  // P6: Divisoria Area de Servico / Banheiro (corredor 0,87 m aberto)
  {
    wallId: 'P6',
    axis: 'x',
    fixedCoord: 12.5,
    start: 0.87,
    end: 3.73,
    startCap: 'meio',
    endCap: 'amarracao'
  },
  // P7: Divisoria Banheiro / Quarto (porta quarto 0,80 m aberta em x: 0.00..0.87)
  {
    wallId: 'P7',
    axis: 'x',
    fixedCoord: 14.5,
    start: 0.87,
    end: 3.73,
    startCap: 'meio',
    endCap: 'amarracao'
  },
  // P8 trecho 1: Divisoria corredor interno na Area de Servico (apos passagem 0,81 m)
  {
    wallId: 'P8',
    axis: 'z',
    fixedCoord: 0.94,
    start: 11.88,
    end: 12.43,
    startCap: 'amarracao',
    endCap: 'meio'
  },
  // P8 trecho 2: Divisoria corredor interno no Banheiro (antes da porta 0,80 m em z: 13.55..14.35)
  {
    wallId: 'P8',
    axis: 'z',
    fixedCoord: 0.94,
    start: 12.57,
    end: 13.55,
    startCap: null,
    endCap: 'meio'
  }
];

export const FIRST_COURSE_BLOCKS = (() => {
  const all = [];
  const wallCounters = {};
  for (const seg of SEGMENTS) {
    const generated = modulateSegment(seg);
    for (const blk of generated) {
      wallCounters[blk.wallId] = (wallCounters[blk.wallId] || 0) + 1;
      all.push({
        ...blk,
        id: `${blk.wallId}-F1-${wallCounters[blk.wallId]}`
      });
    }
  }
  return all;
})();

export const FIRST_COURSE_GROUT_POINTS = [
  // 4 cantos estruturais
  { id: 'G-NW', x: -0.07, z: 5.1, label: 'Canto Frente Oeste' },
  { id: 'G-NE', x: 3.8, z: 5.1, label: 'Canto Frente Leste' },
  { id: 'G-SW', x: -0.07, z: 18.4, label: 'Canto Fundos Oeste' },
  { id: 'G-SE', x: 3.8, z: 18.4, label: 'Canto Fundos Leste' },

  // Ombreiras porta-balcao P3 (3,15 m)
  { id: 'G-P3-L', x: 0.19, z: 5.0, label: 'Ombreira Esq. P3' },
  { id: 'G-P3-R', x: 3.53, z: 5.0, label: 'Ombreira Dir. P3' },

  // Ombreiras porta Area de Servico P2 (0,90 m) + janelas
  { id: 'G-P2-AS1', x: 3.8, z: 11.18, label: 'Ombreira Sul A.S.' },
  { id: 'G-P2-AS2', x: 3.8, z: 12.28, label: 'Ombreira Norte A.S.' },

  // Encontros em T na parede Leste (P5, P6, P7)
  { id: 'G-T-P5', x: 3.56, z: 11.0, label: 'Encontro T P5' },
  { id: 'G-T-P6', x: 3.56, z: 12.5, label: 'Encontro T P6' },
  { id: 'G-T-P7', x: 3.56, z: 14.5, label: 'Encontro T P7' },

  // Pontas e ombreiras do corredor interno (P5, P6, P7, P8)
  { id: 'G-P5-C', x: 0.96, z: 11.0, label: 'Ombreira Corredor P5' },
  { id: 'G-P6-C', x: 0.96, z: 12.5, label: 'Encontro T P6/P8' },
  { id: 'G-P7-C', x: 0.96, z: 14.5, label: 'Ombreira Porta Quarto P7' },
  { id: 'G-P8-AS', x: 0.94, z: 11.98, label: 'Ombreira Acesso A.S. P8' },
  { id: 'G-P8-BN', x: 0.94, z: 13.45, label: 'Ombreira Porta Banheiro P8' },

  // Ombreiras janela Quarto P4 (2,00x2,00 m)
  { id: 'G-P4-L', x: 0.72, z: 18.5, label: 'Ombreira Esq. Janela P4' },
  { id: 'G-P4-R', x: 3.0, z: 18.5, label: 'Ombreira Dir. Janela P4' }
];

export const FIRST_COURSE_THRESHOLDS = [
  { id: 'T-P3', wallId: 'P3', label: 'Vão Frente 3,15 m', axis: 'x', x1: 0.28, x2: 3.43, z: 5.0 },
  { id: 'T-P2-AS', wallId: 'P2', label: 'Porta A.S. 0,90 m', axis: 'z', x: 3.8, z1: 11.28, z2: 12.18 },
  { id: 'T-P5-COR', wallId: 'P5', label: 'Corredor 0,87 m', axis: 'x', x1: 0.0, x2: 0.87, z: 11.0 },
  { id: 'T-P6-COR', wallId: 'P6', label: 'Corredor 0,87 m', axis: 'x', x1: 0.0, x2: 0.87, z: 12.5 },
  { id: 'T-P7-QTO', wallId: 'P7', label: 'Porta Quarto 0,80 m', axis: 'x', x1: 0.0, x2: 0.87, z: 14.5 },
  { id: 'T-P8-AS', wallId: 'P8', label: 'Vão A.S. 0,81 m', axis: 'z', x: 0.94, z1: 11.07, z2: 11.88 },
  { id: 'T-P8-BN', wallId: 'P8', label: 'Porta Banh. 0,80 m', axis: 'z', x: 0.94, z1: 13.55, z2: 14.35 }
];

export const FIRST_COURSE_STATS = (() => {
  const byType = { inteiro: 0, meio: 0, amarracao: 0 };
  const byWall = {};

  for (const b of FIRST_COURSE_BLOCKS) {
    byType[b.type] = (byType[b.type] || 0) + 1;
    if (!byWall[b.wallId]) {
      byWall[b.wallId] = { inteiro: 0, meio: 0, amarracao: 0, total: 0 };
    }
    byWall[b.wallId][b.type] += 1;
    byWall[b.wallId].total += 1;
  }

  return {
    byType,
    byWall,
    totalBlocks: FIRST_COURSE_BLOCKS.length,
    groutPointsCount: FIRST_COURSE_GROUT_POINTS.length
  };
})();
