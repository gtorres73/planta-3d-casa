import { FIRST_COURSE_BLOCKS, FIRST_COURSE_GROUT_POINTS } from '../data/firstCourseV1.js';

export function renderFloorPlanSvg() {
  // House horizontal layout: Z (0..18.5 m) mapped left-to-right; X (0..5.0 m) mapped top-to-bottom
  const scale = 48; // 1 m = 48 px
  const ox = 72;
  const oy = 46;
  const px = (z) => ox + z * scale;
  const py = (x) => oy + x * scale;

  const blockJointTicks = FIRST_COURSE_BLOCKS.map((b) => {
    if (b.axis === 'z') {
      const yBase = b.wallId === 'P1' ? py(0) - 2.5 : b.wallId === 'P2' ? py(3.8) + 2.5 : py(0.94);
      const zEdge = b.z + b.sizeZ / 2;
      return `<line x1="${px(zEdge).toFixed(1)}" y1="${(yBase - 3).toFixed(1)}" x2="${px(zEdge).toFixed(1)}" y2="${(yBase + 3).toFixed(1)}" />`;
    }
    const zCoord = b.z;
    const xEdge = b.x + b.sizeX / 2;
    return `<line x1="${(px(zCoord) - 3).toFixed(1)}" y1="${py(xEdge).toFixed(1)}" x2="${(px(zCoord) + 3).toFixed(1)}" y2="${py(xEdge).toFixed(1)}" />`;
  }).join('');

  const groutDots = FIRST_COURSE_GROUT_POINTS.map((gp) => {
    const svgX = px(gp.z).toFixed(1);
    const svgY = (gp.x < 0 ? py(0) - 2.5 : py(gp.x)).toFixed(1);
    return `<circle cx="${svgX}" cy="${svgY}" r="2.7" />`;
  }).join('');

  return `
    <svg viewBox="0 0 1040 335" role="img" aria-labelledby="svg-floorplan-title">
      <title id="svg-floorplan-title">Planta baixa estrutural cotada da Versão 1 em escala horizontal</title>
      <defs>
        <pattern id="slab-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#5a82a6" stroke-width="1.6" stroke-opacity="0.45" />
        </pattern>
      </defs>

      <!-- Garagem (referencia sem contagem de blocos) -->
      <rect x="${px(0)}" y="${py(0)}" width="${5 * scale}" height="${5 * scale}" fill="#f1efe9" stroke="#9ea4ab" stroke-width="1.5" stroke-dasharray="6 4" />
      <text x="${px(2.5)}" y="${py(2.35)}" text-anchor="middle" font-size="13" font-weight="700" fill="#5e666e">GARAGEM (Ref.)</text>
      <text x="${px(2.5)}" y="${py(2.75)}" text-anchor="middle" font-size="10.5" fill="#6b727a">5,00 × 5,00 m (fora da conta)</text>

      <!-- Corredor Lateral Externo (descoberto, muro do vizinho) -->
      <rect x="${px(5)}" y="${py(3.8)}" width="${13.5 * scale}" height="${1.2 * scale}" fill="#eef2ed" stroke="#9ea4ab" stroke-width="1.5" stroke-dasharray="6 4" />
      <text x="${px(11.75)}" y="${py(4.74)}" text-anchor="middle" font-size="10.5" font-weight="600" fill="#4f5b55">
        CORREDOR LATERAL DESCOBERTO (1,20 m) | Muro do vizinho existente / Queda de água das telhas sanduíche
      </text>

      <!-- Piso Radier Polido da Casa Principal (51,30 m²) -->
      <rect x="${px(5)}" y="${py(0)}" width="${13.5 * scale}" height="${3.8 * scale}" fill="#f6f3ec" />

      <!-- Laje Impermeabilizada Exposta (Banheiro + Corredor em frente: 3,80 x 2,00 m) -->
      <rect x="${px(12.5)}" y="${py(0)}" width="${2.0 * scale}" height="${3.8 * scale}" fill="url(#slab-hatch)" stroke="#4d769b" stroke-width="1.4" />
      <circle cx="${px(13.5)}" cy="${py(1.75)}" r="26" fill="#dceaf7" fill-opacity="0.92" stroke="#1565b8" stroke-width="2" />
      <text x="${px(13.5)}" y="${py(1.71)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f4f94">Cx. d'Água</text>
      <text x="${px(13.5)}" y="${py(1.94)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f4f94">1.000 L</text>

      <!-- Paredes Estruturais 14 cm (P1 a P8) -->
      <g fill="#1d2228">
        <!-- P1: Parede Oeste -->
        <rect x="${px(5) - 3}" y="${py(0) - 6}" width="${13.5 * scale + 6}" height="7" />
        <!-- P2: Parede Leste / Corredor -->
        <rect x="${px(5) - 3}" y="${py(3.8) - 1}" width="${13.5 * scale + 6}" height="7" />
        <!-- P3: Fachada Frente -->
        <rect x="${px(5) - 3}" y="${py(0)}" width="7" height="${3.8 * scale}" />
        <!-- P4: Fundos Quarto -->
        <rect x="${px(18.5) - 4}" y="${py(0)}" width="7" height="${3.8 * scale}" />
        <!-- P5: Divisoria Cozinha / Area de Servico -->
        <rect x="${px(11) - 3}" y="${py(0.87)}" width="6" height="${2.93 * scale}" />
        <!-- P6: Divisoria Area de Servico / Banheiro -->
        <rect x="${px(12.5) - 3}" y="${py(0.87)}" width="6" height="${2.93 * scale}" />
        <!-- P7: Divisoria Banheiro / Quarto -->
        <rect x="${px(14.5) - 3}" y="${py(0.87)}" width="6" height="${2.93 * scale}" />
        <!-- P8: Divisoria Corredor Interno -->
        <rect x="${px(11.88)}" y="${py(0.94) - 3}" width="${2.56 * scale}" height="6" />
      </g>

      <!-- Modulação 1ª fiada (juntas) e pontos de graute -->
      <g stroke="#ffffff" stroke-width="0.9" stroke-opacity="0.72">
        ${blockJointTicks}
      </g>
      <g fill="#d97706" stroke="#ffffff" stroke-width="0.7">
        ${groutDots}
      </g>
      <circle cx="${px(0.32)}" cy="${py(4.7)}" r="3.2" fill="#d97706" stroke="#ffffff" stroke-width="0.7" />
      <text x="${px(0.48)}" y="${py(4.76)}" font-size="9.2" font-weight="600" fill="#4b535b">Pontos de graute / juntas 1ª fiada (${FIRST_COURSE_GROUT_POINTS.length} arranques)</text>

      <!-- Aberturas em azul/branco com medidas -->
      <g stroke="#1b6cb3" stroke-width="3.2" fill="#e9f4fc">
        <!-- Porta-balcao Frente 3,15 x 2,70 -->
        <rect x="${px(5) - 3.5}" y="${py(0.28)}" width="8" height="${3.15 * scale}" />
        <!-- Janela Sala 2,00 x 1,70 -->
        <rect x="${px(5.35)}" y="${py(3.8) - 1.5}" width="${2.0 * scale}" height="8" />
        <!-- Janela Cozinha 2,00 x 1,70 -->
        <rect x="${px(8.35)}" y="${py(3.8) - 1.5}" width="${2.0 * scale}" height="8" />
        <!-- Porta Area de Servico 0,90 x 2,10 -->
        <rect x="${px(11.28)}" y="${py(3.8) - 1.5}" width="${0.9 * scale}" height="8" fill="#ffffff" stroke="#8c5a32" />
        <!-- Janela Banheiro 0,80 x 0,60 -->
        <rect x="${px(13.1)}" y="${py(3.8) - 1.5}" width="${0.8 * scale}" height="8" />
        <!-- Janela Fundos Quarto 2,00 x 2,00 (P=0,80) -->
        <rect x="${px(18.5) - 4.5}" y="${py(0.86)}" width="8" height="${2.0 * scale}" />
        <!-- Porta Banheiro 0,80 x 2,10 -->
        <rect x="${px(13.55)}" y="${py(0.94) - 3.5}" width="${0.8 * scale}" height="7" fill="#ffffff" stroke="#8c5a32" />
        <!-- Porta Quarto 0,80 x 2,10 (vao em P7) -->
        <rect x="${px(14.5) - 3.5}" y="${py(0.05)}" width="7" height="${0.8 * scale}" fill="#ffffff" stroke="#8c5a32" />
      </g>

      <!-- Closet linhas tracejadas -->
      <rect x="${px(14.56)}" y="${py(1.0)}" width="${0.52 * scale}" height="${2.72 * scale}" fill="none" stroke="#8a7a68" stroke-dasharray="4 3" />
      <rect x="${px(15.72)}" y="${py(1.0)}" width="${0.52 * scale}" height="${2.72 * scale}" fill="none" stroke="#8a7a68" stroke-dasharray="4 3" />

      <!-- Setas de caida das telhas sanduiche para o corredor -->
      <g stroke="#1f513f" stroke-width="2" fill="none">
        <line x1="${px(8.0)}" y1="${py(0.55)}" x2="${px(8.0)}" y2="${py(3.25)}" />
        <polyline points="${px(8.0) - 6},${py(3.25) - 8} ${px(8.0)},${py(3.25)} ${px(8.0) + 6},${py(3.25) - 8}" />
        <line x1="${px(16.45)}" y1="${py(0.55)}" x2="${px(16.45)}" y2="${py(3.25)}" />
        <polyline points="${px(16.45) - 6},${py(3.25) - 8} ${px(16.45)},${py(3.25)} ${px(16.45) + 6},${py(3.25) - 8}" />
      </g>

      <!-- Rotulos dos comodos e radier -->
      <g text-anchor="middle" fill="#181c20">
        <text x="${px(6.5)}" y="${py(1.85)}" font-size="13" font-weight="700">SALA</text>
        <text x="${px(6.5)}" y="${py(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 3,00 m</text>

        <text x="${px(9.5)}" y="${py(1.85)}" font-size="13" font-weight="700">COZINHA</text>
        <text x="${px(9.5)}" y="${py(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 3,00 m</text>

        <text x="${px(11.75)}" y="${py(2.35)}" font-size="11.5" font-weight="700">Á. SERVIÇO</text>
        <text x="${px(11.75)}" y="${py(2.68)}" font-size="10" fill="#4b535b">2,90 × 1,50 m</text>

        <text x="${px(13.5)}" y="${py(3.15)}" font-size="11.5" font-weight="700">BANHEIRO</text>
        <text x="${px(13.5)}" y="${py(3.45)}" font-size="9.5" fill="#1f513f" font-weight="700">Laje 3,80×2,00</text>

        <text x="${px(15.4)}" y="${py(2.35)}" font-size="11" font-weight="700">CLOSET</text>

        <text x="${px(17.35)}" y="${py(1.85)}" font-size="13" font-weight="700">QUARTO</text>
        <text x="${px(17.35)}" y="${py(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 4,00 m</text>

        <text x="${px(8.0)}" y="${py(0.38)}" font-size="9.5" font-weight="600" fill="#1f513f">Telha sanduíche (3,40 → 3,00 m)</text>
        <text x="${px(16.6)}" y="${py(0.38)}" font-size="9.5" font-weight="600" fill="#1f513f">Telha sanduíche</text>
      </g>

      <!-- Textos das aberturas -->
      <g font-size="9" font-weight="600" fill="#144b7d">
        <text x="${px(4.85)}" y="${py(1.9)}" text-anchor="middle" transform="rotate(-90 ${px(4.85)} ${py(1.9)})">Porta-balcão 3,15×2,70</text>
        <text x="${px(6.35)}" y="${py(4.14)}" text-anchor="middle">Jan. 2,00×1,70 (P=1,00)</text>
        <text x="${px(9.35)}" y="${py(4.14)}" text-anchor="middle">Jan. 2,00×1,70 (P=1,00)</text>
        <text x="${px(11.73)}" y="${py(4.14)}" text-anchor="middle">Porta 0,90</text>
        <text x="${px(13.5)}" y="${py(4.14)}" text-anchor="middle">0,80×0,60</text>
        <text x="${px(18.74)}" y="${py(1.86)}" text-anchor="middle" transform="rotate(-90 ${px(18.74)} ${py(1.86)})">Jan. 2,00×2,00 (P=0,80)</text>
      </g>

      <!-- Badges P1..P8 -->
      <g font-size="10" font-weight="700" text-anchor="middle">
        <circle cx="${px(11.0)}" cy="${py(0) - 15}" r="11" fill="#1f513f" /><text x="${px(11.0)}" y="${py(0) - 11.5}" fill="#fff">P1</text>
        <circle cx="${px(16.2)}" cy="${py(3.8) + 16}" r="11" fill="#1f513f" /><text x="${px(16.2)}" y="${py(3.8) + 19.5}" fill="#fff">P2</text>
        <circle cx="${px(5) - 16}" cy="${py(0.35)}" r="11" fill="#1f513f" /><text x="${px(5) - 16}" y="${py(0.35) + 3.5}" fill="#fff">P3</text>
        <circle cx="${px(18.5) + 20}" cy="${py(0.35)}" r="11" fill="#1f513f" /><text x="${px(18.5) + 20}" y="${py(0.35) + 3.5}" fill="#fff">P4</text>
        <circle cx="${px(11.0)}" cy="${py(1.3)}" r="11" fill="#1f513f" /><text x="${px(11.0)}" y="${py(1.3) + 3.5}" fill="#fff">P5</text>
        <circle cx="${px(12.5)}" cy="${py(1.3)}" r="11" fill="#1f513f" /><text x="${px(12.5)}" y="${py(1.3) + 3.5}" fill="#fff">P6</text>
        <circle cx="${px(14.5)}" cy="${py(1.3)}" r="11" fill="#1f513f" /><text x="${px(14.5)}" y="${py(1.3) + 3.5}" fill="#fff">P7</text>
        <circle cx="${px(13.0)}" cy="${py(0.75)}" r="11" fill="#1f513f" /><text x="${px(13.0)}" y="${py(0.75) + 3.5}" fill="#fff">P8</text>
      </g>

      <!-- Cotas gerais -->
      <g stroke="#4b535b" stroke-width="1" fill="none">
        <line x1="${px(5)}" y1="16" x2="${px(18.5)}" y2="16" />
        <line x1="${px(5)}" y1="308" x2="${px(8)}" y2="308" />
        <line x1="${px(8)}" y1="308" x2="${px(11)}" y2="308" />
        <line x1="${px(11)}" y1="308" x2="${px(12.5)}" y2="308" />
        <line x1="${px(12.5)}" y1="308" x2="${px(14.5)}" y2="308" />
        <line x1="${px(14.5)}" y1="308" x2="${px(18.5)}" y2="308" />
        <line x1="${px(18.5) + 42}" y1="${py(0)}" x2="${px(18.5) + 42}" y2="${py(3.8)}" />
        <line x1="${px(18.5) + 42}" y1="${py(3.8)}" x2="${px(18.5) + 42}" y2="${py(5.0)}" />
      </g>
      <g stroke="none" fill="#181c20" font-size="10.5" font-weight="600" text-anchor="middle">
        <text x="${px(11.75)}" y="12">Casa Principal: 13,50 m (Piso Radier Polido 51,30 m²)</text>
        <text x="${px(6.5)}" y="322">3,00 m</text>
        <text x="${px(9.5)}" y="322">3,00 m</text>
        <text x="${px(11.75)}" y="322">1,50 m</text>
        <text x="${px(13.5)}" y="322">2,00 m</text>
        <text x="${px(16.5)}" y="322">4,00 m</text>
        <text x="${px(18.5) + 56}" y="${py(1.9)}" transform="rotate(-90 ${px(18.5) + 56} ${py(1.9)})">3,80 m</text>
        <text x="${px(18.5) + 56}" y="${py(4.4)}" transform="rotate(-90 ${px(18.5) + 56} ${py(4.4)})">1,20 m</text>
      </g>
    </svg>
  `;
}

export function renderSectionSvg() {
  return `
    <svg viewBox="0 0 1040 165" role="img" aria-labelledby="svg-section-title">
      <title id="svg-section-title">Corte esquemático mostrando radier, telha sanduíche aparente e laje da caixa d'água</title>

      <!-- Corte Longitudinal (Esquerda: z = 5,00 a 18,50 m) -->
      <text x="20" y="18" font-size="11.5" font-weight="700" fill="#1f513f">CORTE LONGITUDINAL ESQUEMÁTICO (Casa 13,50 m)</text>

      <!-- Radier base -->
      <rect x="30" y="132" width="600" height="12" fill="#8d8880" stroke="#1d2228" stroke-width="1.2" />
      <text x="330" y="157" text-anchor="middle" font-size="10.5" font-weight="700" fill="#181c20">
        Radier em Concreto Polido (51,30 m²) | Piso Final
      </text>

      <!-- Paredes verticais do corte -->
      <g fill="#1d2228">
        <rect x="30" y="42" width="7" height="90" />
        <rect x="296" y="44" width="6" height="88" />
        <rect x="362" y="42" width="7" height="90" />
        <rect x="452" y="42" width="7" height="90" />
        <rect x="623" y="42" width="7" height="90" />
      </g>

      <!-- Telha Sanduiche Frente (Sala + Cozinha + A.S.) -->
      <polygon points="24,42 365,42 365,35 24,35" fill="#c7ced6" stroke="#262b30" stroke-width="1.2" />
      <text x="195" y="29" text-anchor="middle" font-size="10" font-weight="700" fill="#1f513f">Telha Sanduíche Aparente (7,50 m)</text>

      <!-- Laje Exposta Banheiro/Corredor em 2,80 m + Caixa 1000L -->
      <rect x="362" y="54" width="97" height="10" fill="#868d94" stroke="#1d2228" stroke-width="1.2" />
      <rect x="387" y="24" width="46" height="30" rx="3" fill="#1565b8" stroke="#0f4f94" stroke-width="1.2" />
      <text x="410" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">1.000 L</text>
      <text x="410" y="18" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f4f94">Laje Exposta (2,80 m)</text>

      <!-- Telha Sanduiche Fundos (Quarto + Closet) -->
      <polygon points="455,42 636,42 636,35 455,35" fill="#c7ced6" stroke="#262b30" stroke-width="1.2" />
      <text x="545" y="29" text-anchor="middle" font-size="10" font-weight="700" fill="#1f513f">Telha Sanduíche Aparente (4,00 m)</text>

      <!-- Janela 2x2m fundos com peitoril -->
      <rect x="622" y="56" width="9" height="52" fill="#dceaf7" stroke="#1b6cb3" stroke-width="1.5" />

      <g font-size="9.5" fill="#4b535b" text-anchor="middle">
        <text x="165" y="96">Sala / Cozinha</text>
        <text x="330" y="96">Á. Serv.</text>
        <text x="410" y="96">Banheiro</text>
        <text x="540" y="96">Closet / Quarto</text>
      </g>

      <!-- Corte Transversal Caida da Telha (Direita: 5,00 m) -->
      <text x="688" y="18" font-size="11.5" font-weight="700" fill="#1f513f">CORTE TRANSVERSAL (CAÍDA P/ CORREDOR)</text>
      <rect x="695" y="132" width="245" height="12" fill="#8d8880" stroke="#1d2228" stroke-width="1.2" />
      <rect x="940" y="132" width="76" height="8" fill="#dfe4df" stroke="#9ea4ab" stroke-width="1" />

      <!-- P1 (3,40 m) e P2 (3,00 m) + Telha inclinada + Calha -->
      <rect x="695" y="34" width="8" height="98" fill="#1d2228" />
      <rect x="932" y="46" width="8" height="86" fill="#1d2228" />
      <polygon points="687,34 950,46 950,39 687,27" fill="#c7ced6" stroke="#262b30" stroke-width="1.2" />
      <rect x="950" y="45" width="9" height="8" fill="#2b3036" />
      <line x1="954" y1="53" x2="954" y2="132" stroke="#2b3036" stroke-width="3" />

      <text x="688" y="88" text-anchor="end" font-size="10" font-weight="700" fill="#181c20">3,40 m</text>
      <text x="927" y="88" text-anchor="end" font-size="10" font-weight="700" fill="#181c20">3,00 m</text>
      <text x="818" y="64" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1f513f">Caída 10,5% para a calha →</text>
      <text x="978" y="96" text-anchor="middle" font-size="9.5" font-weight="600" fill="#4b535b">Corredor</text>
      <text x="978" y="108" text-anchor="middle" font-size="9.5" fill="#4b535b">1,20 m</text>
      <text x="818" y="157" text-anchor="middle" font-size="10" font-weight="600" fill="#181c20">Casa 3,80 m + Corredor 1,20 m</text>
    </svg>
  `;
}

export function renderBlockThumbSvg(blockId) {
  if (blockId === 'inteiro') {
    return `<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="2" y="3" width="32" height="16" rx="1.5" fill="#cfd3d7" stroke="#2d3339" stroke-width="1.6"/>
      <rect x="6" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
      <rect x="20" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`;
  }
  if (blockId === 'meio') {
    return `<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="10" y="3" width="16" height="16" rx="1.5" fill="#cfd3d7" stroke="#2d3339" stroke-width="1.6"/>
      <rect x="13" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`;
  }
  if (blockId === 'amarracao') {
    return `<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="4" y="3" width="28" height="16" rx="1.5" fill="#c3ccd4" stroke="#1f513f" stroke-width="1.6"/>
      <rect x="8" y="6" width="7" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
      <rect x="19" y="6" width="9" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`;
  }
  return `<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
    <path d="M2,3 H9 V13 H27 V3 H34 V19 H2 Z" fill="#d9c6b0" stroke="#2d3339" stroke-width="1.6"/>
  </svg>`;
}
