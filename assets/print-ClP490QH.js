import{c as k,b as g}from"./firstCourseV1-DrvdFeUO.js";const w={label:"Bloco Estrutural de Concreto 14 × 19 × 39 cm",widthCm:14,heightCm:19,lengthCm:39,jointCm:1,moduleLengthM:.4,moduleHeightM:.2,blocksPerM2:12.5},C=[{id:"inteiro",name:"Bloco Estrutural Inteiro",dimensions:"14 × 19 × 39 cm",usage:"Fiadas corridas de vedação e carga",unitPriceBrl:3.6,priceRangeLabel:"R$ 3,20 a R$ 4,00"},{id:"meio",name:"Meio-Bloco Estrutural",dimensions:"14 × 19 × 19 cm",usage:"Amarração alternada em encontros e ombreiras de portas/janelas",unitPriceBrl:2.6,priceRangeLabel:"R$ 2,30 a R$ 3,10"},{id:"amarracao",name:"Bloco de Amarração (34 cm)",dimensions:"14 × 19 × 34 cm",usage:"Cantos em L e encontros em T sem cortes improvisados",unitPriceBrl:3.9,priceRangeLabel:"R$ 3,50 a R$ 4,40"},{id:"canaleta",name:"Bloco Canaleta U",dimensions:"14 × 19 × 39 cm",usage:"Contravergas, vergas, respaldo da laje e cintas de amarração",unitPriceBrl:5.2,priceRangeLabel:"R$ 4,50 a R$ 6,00"}],m={referenceBase:"SINAPI-SP / CUB-SP (SindusCon-SP) e fornecedores locais",marketRangeMinBrl:108e3,marketRangeMaxBrl:132e3,masonrySuppliesBrl:5450},P=[{id:"P1",name:"Parede Oeste (divisa esquerda da casa)",lengthM:13.5,heightLabel:"3,40 m (telha) / 3,00 m (laje)",grossAreaM2:45.1,openingsDesc:"Sem aberturas",openingsAreaM2:0,canaletaCount:39,halfBlockCount:20,bondingCount:32},{id:"P2",name:"Parede Leste (lado do corredor externo)",lengthM:13.5,heightLabel:"3,00 m uniforme",grossAreaM2:40.5,openingsDesc:"2× Jan. (2,00×1,70), Porta A.S. (0,90×2,10), Jan. Banh. (0,80×0,60)",openingsAreaM2:9.17,canaletaCount:66,halfBlockCount:32,bondingCount:24},{id:"P3",name:"Fachada Frente (Sala / Garagem)",lengthM:3.52,heightLabel:"3,00 → 3,40 m (oitão)",grossAreaM2:11.26,openingsDesc:"Porta-balcão (3,15×2,70)",openingsAreaM2:8.51,canaletaCount:9,halfBlockCount:14,bondingCount:8},{id:"P4",name:"Parede Fundos (Quarto)",lengthM:3.52,heightLabel:"3,00 → 3,40 m (oitão)",grossAreaM2:11.26,openingsDesc:"Janela com peitoril 0,80 m (2,00×2,00)",openingsAreaM2:4,canaletaCount:16,halfBlockCount:16,bondingCount:8},{id:"P5",name:"Divisória Cozinha / Área de Serviço",lengthM:2.64,heightLabel:"3,00 → 3,29 m (até telha)",grossAreaM2:8.33,openingsDesc:"Sem aberturas (vão corredor livre)",openingsAreaM2:0,canaletaCount:7,halfBlockCount:16,bondingCount:8},{id:"P6",name:"Divisória Área de Serviço / Banheiro",lengthM:3.52,heightLabel:"2,80 m laje + mureta 3,00→3,40 m",grossAreaM2:11.13,openingsDesc:"Passagem corredor (0,88×2,10)",openingsAreaM2:1.85,canaletaCount:21,halfBlockCount:12,bondingCount:14},{id:"P7",name:"Divisória Banheiro / Quarto",lengthM:3.52,heightLabel:"2,80 m laje + oitão 3,00→3,40 m",grossAreaM2:11.26,openingsDesc:"Porta Quarto (0,80×2,10)",openingsAreaM2:1.68,canaletaCount:22,halfBlockCount:14,bondingCount:14},{id:"P8",name:"Divisória Corredor Interno",lengthM:2.55,heightLabel:"3,30 m (A.S.) / 2,80 m (Banh.)",grossAreaM2:7.02,openingsDesc:"Porta Banheiro (0,80×2,10)",openingsAreaM2:1.68,canaletaCount:9,halfBlockCount:20,bondingCount:12}],M=Math.hypot(3.8,.4)/3.8,b={radierM2:Number((13.5*3.8).toFixed(2)),exposedSlabM2:Number((3.8*2).toFixed(2)),sandwichRoofPlanM2:Number(((7.5+4)*3.8).toFixed(2)),sandwichRoofSlopedM2:Number(((7.5+4)*4.1*M).toFixed(2)),waterTankLiters:1e3},d=n=>Number(n.toFixed(2)),$=[{id:"radier",stage:"1. Fundação e Piso Final em Radier Polido",scope:"51,30 m² (concreto usinado, malha pop, lona e polimento acabado)",materialBrl:10773,laborBrl:6156},{id:"cobertura",stage:"3. Cobertura Telha Sanduíche + Laje 7,60 m² + Caixa 1.000 L",scope:"47,41 m² telha c/ beiral + estrutura/calha + laje impermeabilizada",materialBrl:16413.65,laborBrl:6410},{id:"esquadrias",stage:"4. Esquadrias e Vidros",scope:"Porta-balcão 3,15×2,70, 2× jan. 2,00×1,70, jan. 2,00×2,00, banh. 0,80×0,60 e 3 portas",materialBrl:14900,laborBrl:3200},{id:"instalacoes",stage:"5. Instalações Elétricas, Hidráulicas, Banheiro e Pintura",scope:"Rede água/esgoto, elétrica, revestimento banheiro, louças e pintura",materialBrl:19800,laborBrl:14500}];function v(n,l){const i=d(n.reduce((s,x)=>s+x.netCostBrl,0)),t=d(n.reduce((s,x)=>s+x.purchaseCostBrl,0)),e=d(t+m.masonrySuppliesBrl),r={id:"alvenaria",stage:"2. Alvenaria Estrutural (Blocos + Graute/Argamassa/Aço)",scope:`${l.toFixed(2).replace(".",",")} m² líq. (blocos c/ quebra + argamassa, graute, aço e viga 3,15 m)`,materialBrl:e,laborBrl:11800},f=[$[0],r,$[1],$[2],$[3]].map(s=>({...s,totalBrl:d(s.materialBrl+s.laborBrl)})),a=d(f.reduce((s,x)=>s+x.materialBrl,0)),o=d(f.reduce((s,x)=>s+x.laborBrl,0)),h=d(a+o),u=d(h/b.radierM2);return{region:"Itapevi / Grande SP",referenceBase:m.referenceBase,netBlocksCostBrl:i,purchaseBlocksCostBrl:t,stages:f,totalMaterialsBrl:a,totalLaborBrl:o,totalProjectBrl:h,costPerM2Brl:u,marketRangeMinBrl:m.marketRangeMinBrl,marketRangeMaxBrl:m.marketRangeMaxBrl}}function A({breakagePercent:n=10}={}){const l=1+n/100,i=P.map(a=>{const o=d(a.grossAreaM2-a.openingsAreaM2),h=a.canaletaCount*.08,u=a.halfBlockCount*.04,s=a.bondingCount*.068,x=Math.max(0,Math.round((o-h-u-s)/.08)),B=x+a.halfBlockCount+a.bondingCount+a.canaletaCount;return{...a,netAreaM2:o,counts:{inteiro:x,meio:a.halfBlockCount,amarracao:a.bondingCount,canaleta:a.canaletaCount},totalBlocks:B}}),t={inteiro:i.reduce((a,o)=>a+o.counts.inteiro,0),meio:i.reduce((a,o)=>a+o.counts.meio,0),amarracao:i.reduce((a,o)=>a+o.counts.amarracao,0),canaleta:i.reduce((a,o)=>a+o.counts.canaleta,0),grossAreaM2:d(i.reduce((a,o)=>a+o.grossAreaM2,0)),openingsAreaM2:d(i.reduce((a,o)=>a+o.openingsAreaM2,0)),netAreaM2:d(i.reduce((a,o)=>a+o.netAreaM2,0)),totalBlocks:i.reduce((a,o)=>a+o.totalBlocks,0)},e=C.map(a=>{const o=t[a.id],h=Math.ceil(o*l);return{...a,netQty:o,purchaseQty:h,extraQty:h-o,netCostBrl:d(o*a.unitPriceBrl),purchaseCostBrl:d(h*a.unitPriceBrl)}}),r=e.reduce((a,o)=>a+o.purchaseQty,0),f=v(e,t.netAreaM2);return{family:w,breakagePercent:n,walls:i,netTotals:t,summaryByType:e,purchaseTotalBlocks:r,auxiliary:b,costEstimate:f}}function S(){const t=a=>72+a*48,e=a=>46+a*48,r=k.map(a=>{if(a.axis==="z"){const u=a.wallId==="P1"?e(0)-2.5:a.wallId==="P2"?e(3.8)+2.5:e(.94),s=a.z+a.sizeZ/2;return`<line x1="${t(s).toFixed(1)}" y1="${(u-3).toFixed(1)}" x2="${t(s).toFixed(1)}" y2="${(u+3).toFixed(1)}" />`}const o=a.z,h=a.x+a.sizeX/2;return`<line x1="${(t(o)-3).toFixed(1)}" y1="${e(h).toFixed(1)}" x2="${(t(o)+3).toFixed(1)}" y2="${e(h).toFixed(1)}" />`}).join(""),f=g.map(a=>{const o=t(a.z).toFixed(1),h=(a.x<0?e(0)-2.5:e(a.x)).toFixed(1);return`<circle cx="${o}" cy="${h}" r="2.7" />`}).join("");return`
    <svg viewBox="0 0 1040 335" role="img" aria-labelledby="svg-floorplan-title">
      <title id="svg-floorplan-title">Planta baixa estrutural cotada da Versão 1 em escala horizontal</title>
      <defs>
        <pattern id="slab-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#5a82a6" stroke-width="1.6" stroke-opacity="0.45" />
        </pattern>
      </defs>

      <!-- Garagem (referencia sem contagem de blocos) -->
      <rect x="${t(0)}" y="${e(0)}" width="240" height="240" fill="#f1efe9" stroke="#9ea4ab" stroke-width="1.5" stroke-dasharray="6 4" />
      <text x="${t(2.5)}" y="${e(2.35)}" text-anchor="middle" font-size="13" font-weight="700" fill="#5e666e">GARAGEM (Ref.)</text>
      <text x="${t(2.5)}" y="${e(2.75)}" text-anchor="middle" font-size="10.5" fill="#6b727a">5,00 × 5,00 m (fora da conta)</text>

      <!-- Corredor Lateral Externo (descoberto, muro do vizinho) -->
      <rect x="${t(5)}" y="${e(3.8)}" width="${13.5*48}" height="${1.2*48}" fill="#eef2ed" stroke="#9ea4ab" stroke-width="1.5" stroke-dasharray="6 4" />
      <text x="${t(11.75)}" y="${e(4.74)}" text-anchor="middle" font-size="10.5" font-weight="600" fill="#4f5b55">
        CORREDOR LATERAL DESCOBERTO (1,20 m) | Muro do vizinho existente / Queda de água das telhas sanduíche
      </text>

      <!-- Piso Radier Polido da Casa Principal (51,30 m²) -->
      <rect x="${t(5)}" y="${e(0)}" width="${13.5*48}" height="${3.8*48}" fill="#f6f3ec" />

      <!-- Laje Impermeabilizada Exposta (Banheiro + Corredor em frente: 3,80 x 2,00 m) -->
      <rect x="${t(12.5)}" y="${e(0)}" width="96" height="${3.8*48}" fill="url(#slab-hatch)" stroke="#4d769b" stroke-width="1.4" />
      <circle cx="${t(13.5)}" cy="${e(1.75)}" r="26" fill="#dceaf7" fill-opacity="0.92" stroke="#1565b8" stroke-width="2" />
      <text x="${t(13.5)}" y="${e(1.71)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f4f94">Cx. d'Água</text>
      <text x="${t(13.5)}" y="${e(1.94)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f4f94">1.000 L</text>

      <!-- Paredes Estruturais 14 cm (P1 a P8) -->
      <g fill="#1d2228">
        <!-- P1: Parede Oeste -->
        <rect x="${t(5)-3}" y="${e(0)-6}" width="${13.5*48+6}" height="7" />
        <!-- P2: Parede Leste / Corredor -->
        <rect x="${t(5)-3}" y="${e(3.8)-1}" width="${13.5*48+6}" height="7" />
        <!-- P3: Fachada Frente -->
        <rect x="${t(5)-3}" y="${e(0)}" width="7" height="${3.8*48}" />
        <!-- P4: Fundos Quarto -->
        <rect x="${t(18.5)-4}" y="${e(0)}" width="7" height="${3.8*48}" />
        <!-- P5: Divisoria Cozinha / Area de Servico -->
        <rect x="${t(11)-3}" y="${e(.87)}" width="6" height="${2.93*48}" />
        <!-- P6: Divisoria Area de Servico / Banheiro -->
        <rect x="${t(12.5)-3}" y="${e(.87)}" width="6" height="${2.93*48}" />
        <!-- P7: Divisoria Banheiro / Quarto -->
        <rect x="${t(14.5)-3}" y="${e(.87)}" width="6" height="${2.93*48}" />
        <!-- P8: Divisoria Corredor Interno -->
        <rect x="${t(11.88)}" y="${e(.94)-3}" width="${2.56*48}" height="6" />
      </g>

      <!-- Modulação 1ª fiada (juntas) e pontos de graute -->
      <g stroke="#ffffff" stroke-width="0.9" stroke-opacity="0.72">
        ${r}
      </g>
      <g fill="#d97706" stroke="#ffffff" stroke-width="0.7">
        ${f}
      </g>
      <circle cx="${t(.32)}" cy="${e(4.7)}" r="3.2" fill="#d97706" stroke="#ffffff" stroke-width="0.7" />
      <text x="${t(.48)}" y="${e(4.76)}" font-size="9.2" font-weight="600" fill="#4b535b">Pontos de graute / juntas 1ª fiada (${g.length} arranques)</text>

      <!-- Aberturas em azul/branco com medidas -->
      <g stroke="#1b6cb3" stroke-width="3.2" fill="#e9f4fc">
        <!-- Porta-balcao Frente 3,15 x 2,70 -->
        <rect x="${t(5)-3.5}" y="${e(.28)}" width="8" height="${3.15*48}" />
        <!-- Janela Sala 2,00 x 1,70 -->
        <rect x="${t(5.35)}" y="${e(3.8)-1.5}" width="96" height="8" />
        <!-- Janela Cozinha 2,00 x 1,70 -->
        <rect x="${t(8.35)}" y="${e(3.8)-1.5}" width="96" height="8" />
        <!-- Porta Area de Servico 0,90 x 2,10 -->
        <rect x="${t(11.28)}" y="${e(3.8)-1.5}" width="${.9*48}" height="8" fill="#ffffff" stroke="#8c5a32" />
        <!-- Janela Banheiro 0,80 x 0,60 -->
        <rect x="${t(13.1)}" y="${e(3.8)-1.5}" width="${.8*48}" height="8" />
        <!-- Janela Fundos Quarto 2,00 x 2,00 (P=0,80) -->
        <rect x="${t(18.5)-4.5}" y="${e(.86)}" width="8" height="96" />
        <!-- Porta Banheiro 0,80 x 2,10 -->
        <rect x="${t(13.55)}" y="${e(.94)-3.5}" width="${.8*48}" height="7" fill="#ffffff" stroke="#8c5a32" />
        <!-- Porta Quarto 0,80 x 2,10 (vao em P7) -->
        <rect x="${t(14.5)-3.5}" y="${e(.05)}" width="7" height="${.8*48}" fill="#ffffff" stroke="#8c5a32" />
      </g>

      <!-- Closet linhas tracejadas -->
      <rect x="${t(14.56)}" y="${e(1)}" width="${.52*48}" height="${2.72*48}" fill="none" stroke="#8a7a68" stroke-dasharray="4 3" />
      <rect x="${t(15.72)}" y="${e(1)}" width="${.52*48}" height="${2.72*48}" fill="none" stroke="#8a7a68" stroke-dasharray="4 3" />

      <!-- Setas de caida das telhas sanduiche para o corredor -->
      <g stroke="#1f513f" stroke-width="2" fill="none">
        <line x1="${t(8)}" y1="${e(.55)}" x2="${t(8)}" y2="${e(3.25)}" />
        <polyline points="${t(8)-6},${e(3.25)-8} ${t(8)},${e(3.25)} ${t(8)+6},${e(3.25)-8}" />
        <line x1="${t(16.45)}" y1="${e(.55)}" x2="${t(16.45)}" y2="${e(3.25)}" />
        <polyline points="${t(16.45)-6},${e(3.25)-8} ${t(16.45)},${e(3.25)} ${t(16.45)+6},${e(3.25)-8}" />
      </g>

      <!-- Rotulos dos comodos e radier -->
      <g text-anchor="middle" fill="#181c20">
        <text x="${t(6.5)}" y="${e(1.85)}" font-size="13" font-weight="700">SALA</text>
        <text x="${t(6.5)}" y="${e(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 3,00 m</text>

        <text x="${t(9.5)}" y="${e(1.85)}" font-size="13" font-weight="700">COZINHA</text>
        <text x="${t(9.5)}" y="${e(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 3,00 m</text>

        <text x="${t(11.75)}" y="${e(2.35)}" font-size="11.5" font-weight="700">Á. SERVIÇO</text>
        <text x="${t(11.75)}" y="${e(2.68)}" font-size="10" fill="#4b535b">2,90 × 1,50 m</text>

        <text x="${t(13.5)}" y="${e(3.15)}" font-size="11.5" font-weight="700">BANHEIRO</text>
        <text x="${t(13.5)}" y="${e(3.45)}" font-size="9.5" fill="#1f513f" font-weight="700">Laje 3,80×2,00</text>

        <text x="${t(15.4)}" y="${e(2.35)}" font-size="11" font-weight="700">CLOSET</text>

        <text x="${t(17.35)}" y="${e(1.85)}" font-size="13" font-weight="700">QUARTO</text>
        <text x="${t(17.35)}" y="${e(2.22)}" font-size="10.5" fill="#4b535b">3,80 × 4,00 m</text>

        <text x="${t(8)}" y="${e(.38)}" font-size="9.5" font-weight="600" fill="#1f513f">Telha sanduíche (3,40 → 3,00 m)</text>
        <text x="${t(16.6)}" y="${e(.38)}" font-size="9.5" font-weight="600" fill="#1f513f">Telha sanduíche</text>
      </g>

      <!-- Textos das aberturas -->
      <g font-size="9" font-weight="600" fill="#144b7d">
        <text x="${t(4.85)}" y="${e(1.9)}" text-anchor="middle" transform="rotate(-90 ${t(4.85)} ${e(1.9)})">Porta-balcão 3,15×2,70</text>
        <text x="${t(6.35)}" y="${e(4.14)}" text-anchor="middle">Jan. 2,00×1,70 (P=1,00)</text>
        <text x="${t(9.35)}" y="${e(4.14)}" text-anchor="middle">Jan. 2,00×1,70 (P=1,00)</text>
        <text x="${t(11.73)}" y="${e(4.14)}" text-anchor="middle">Porta 0,90</text>
        <text x="${t(13.5)}" y="${e(4.14)}" text-anchor="middle">0,80×0,60</text>
        <text x="${t(18.74)}" y="${e(1.86)}" text-anchor="middle" transform="rotate(-90 ${t(18.74)} ${e(1.86)})">Jan. 2,00×2,00 (P=0,80)</text>
      </g>

      <!-- Badges P1..P8 -->
      <g font-size="10" font-weight="700" text-anchor="middle">
        <circle cx="${t(11)}" cy="${e(0)-15}" r="11" fill="#1f513f" /><text x="${t(11)}" y="${e(0)-11.5}" fill="#fff">P1</text>
        <circle cx="${t(16.2)}" cy="${e(3.8)+16}" r="11" fill="#1f513f" /><text x="${t(16.2)}" y="${e(3.8)+19.5}" fill="#fff">P2</text>
        <circle cx="${t(5)-16}" cy="${e(.35)}" r="11" fill="#1f513f" /><text x="${t(5)-16}" y="${e(.35)+3.5}" fill="#fff">P3</text>
        <circle cx="${t(18.5)+20}" cy="${e(.35)}" r="11" fill="#1f513f" /><text x="${t(18.5)+20}" y="${e(.35)+3.5}" fill="#fff">P4</text>
        <circle cx="${t(11)}" cy="${e(1.3)}" r="11" fill="#1f513f" /><text x="${t(11)}" y="${e(1.3)+3.5}" fill="#fff">P5</text>
        <circle cx="${t(12.5)}" cy="${e(1.3)}" r="11" fill="#1f513f" /><text x="${t(12.5)}" y="${e(1.3)+3.5}" fill="#fff">P6</text>
        <circle cx="${t(14.5)}" cy="${e(1.3)}" r="11" fill="#1f513f" /><text x="${t(14.5)}" y="${e(1.3)+3.5}" fill="#fff">P7</text>
        <circle cx="${t(13)}" cy="${e(.75)}" r="11" fill="#1f513f" /><text x="${t(13)}" y="${e(.75)+3.5}" fill="#fff">P8</text>
      </g>

      <!-- Cotas gerais -->
      <g stroke="#4b535b" stroke-width="1" fill="none">
        <line x1="${t(5)}" y1="16" x2="${t(18.5)}" y2="16" />
        <line x1="${t(5)}" y1="308" x2="${t(8)}" y2="308" />
        <line x1="${t(8)}" y1="308" x2="${t(11)}" y2="308" />
        <line x1="${t(11)}" y1="308" x2="${t(12.5)}" y2="308" />
        <line x1="${t(12.5)}" y1="308" x2="${t(14.5)}" y2="308" />
        <line x1="${t(14.5)}" y1="308" x2="${t(18.5)}" y2="308" />
        <line x1="${t(18.5)+42}" y1="${e(0)}" x2="${t(18.5)+42}" y2="${e(3.8)}" />
        <line x1="${t(18.5)+42}" y1="${e(3.8)}" x2="${t(18.5)+42}" y2="${e(5)}" />
      </g>
      <g stroke="none" fill="#181c20" font-size="10.5" font-weight="600" text-anchor="middle">
        <text x="${t(11.75)}" y="12">Casa Principal: 13,50 m (Piso Radier Polido 51,30 m²)</text>
        <text x="${t(6.5)}" y="322">3,00 m</text>
        <text x="${t(9.5)}" y="322">3,00 m</text>
        <text x="${t(11.75)}" y="322">1,50 m</text>
        <text x="${t(13.5)}" y="322">2,00 m</text>
        <text x="${t(16.5)}" y="322">4,00 m</text>
        <text x="${t(18.5)+56}" y="${e(1.9)}" transform="rotate(-90 ${t(18.5)+56} ${e(1.9)})">3,80 m</text>
        <text x="${t(18.5)+56}" y="${e(4.4)}" transform="rotate(-90 ${t(18.5)+56} ${e(4.4)})">1,20 m</text>
      </g>
    </svg>
  `}function R(){return`
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
  `}function T(n){return n==="inteiro"?`<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="2" y="3" width="32" height="16" rx="1.5" fill="#cfd3d7" stroke="#2d3339" stroke-width="1.6"/>
      <rect x="6" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
      <rect x="20" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`:n==="meio"?`<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="10" y="3" width="16" height="16" rx="1.5" fill="#cfd3d7" stroke="#2d3339" stroke-width="1.6"/>
      <rect x="13" y="6" width="10" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`:n==="amarracao"?`<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
      <rect x="4" y="3" width="28" height="16" rx="1.5" fill="#c3ccd4" stroke="#1f513f" stroke-width="1.6"/>
      <rect x="8" y="6" width="7" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
      <rect x="19" y="6" width="9" height="10" fill="#ffffff" stroke="#5a626a" stroke-width="1"/>
    </svg>`:`<svg class="block-thumb" viewBox="0 0 36 22" aria-hidden="true">
    <path d="M2,3 H9 V13 H27 V3 H34 V19 H2 Z" fill="#d9c6b0" stroke="#2d3339" stroke-width="1.6"/>
  </svg>`}const E=document.getElementById("floorplan-svg-host"),L=document.getElementById("section-svg-host"),z=document.getElementById("summary-table-body"),F=document.getElementById("summary-total-net"),I=document.getElementById("summary-total-purchase"),O=document.getElementById("summary-total-cost"),j=document.getElementById("summary-breakage-head"),D=document.getElementById("walls-table-body"),Q=document.getElementById("walls-totals-row"),H=document.getElementById("budget-table-body"),N=document.getElementById("budget-totals-row"),q=document.getElementById("aux-areas-grid"),y=Array.from(document.querySelectorAll("[data-breakage]")),_=document.getElementById("print-btn"),J=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),c=n=>J.format(n);E.innerHTML=S();L.innerHTML=R();function p(n){const l=A({breakagePercent:n}),{costEstimate:i}=l;j.textContent=`+${n}% quebra`,z.innerHTML=l.summaryByType.map(r=>`
      <tr>
        <th scope="row">
          <div class="block-cell">
            ${T(r.id)}
            <span>${r.name}</span>
          </div>
        </th>
        <td>${r.dimensions}</td>
        <td>${r.usage}</td>
        <td class="num">${r.netQty} un</td>
        <td class="num">+${r.extraQty} un</td>
        <td class="num"><strong>${r.purchaseQty} un</strong></td>
        <td class="num">${c(r.unitPriceBrl)}</td>
        <td class="num"><strong>${c(r.purchaseCostBrl)}</strong></td>
      </tr>
    `).join(""),F.textContent=`${l.netTotals.totalBlocks} un`,I.textContent=`${l.purchaseTotalBlocks} un`,O.textContent=c(i.purchaseBlocksCostBrl),D.innerHTML=l.walls.map(r=>`
      <tr>
        <th scope="row">${r.id}</th>
        <td>${r.name}</td>
        <td class="num">${r.lengthM.toFixed(2).replace(".",",")}</td>
        <td>${r.heightLabel}</td>
        <td>${r.openingsDesc}</td>
        <td class="num">${r.netAreaM2.toFixed(2).replace(".",",")} m²</td>
        <td class="num">${r.counts.inteiro}</td>
        <td class="num">${r.counts.meio}</td>
        <td class="num">${r.counts.amarracao}</td>
        <td class="num">${r.counts.canaleta}</td>
      </tr>
    `).join(""),Q.innerHTML=`
    <th scope="row" colspan="5">Totais líquidos (sem margem de quebra)</th>
    <td class="num">${l.netTotals.netAreaM2.toFixed(2).replace(".",",")} m²</td>
    <td class="num">${l.netTotals.inteiro}</td>
    <td class="num">${l.netTotals.meio}</td>
    <td class="num">${l.netTotals.amarracao}</td>
    <td class="num">${l.netTotals.canaleta}</td>
  `,H.innerHTML=i.stages.map(r=>`
      <tr>
        <th scope="row">${r.stage}</th>
        <td>${r.scope}</td>
        <td class="num">${c(r.materialBrl)}</td>
        <td class="num">${c(r.laborBrl)}</td>
        <td class="num"><strong>${c(r.totalBrl)}</strong></td>
      </tr>
    `).join(""),N.innerHTML=`
    <th scope="row" colspan="2">Total estimado da obra em ${i.region} (${c(i.costPerM2Brl)} / m²)</th>
    <td class="num">${c(i.totalMaterialsBrl)}</td>
    <td class="num">${c(i.totalLaborBrl)}</td>
    <td class="num">${c(i.totalProjectBrl)}</td>
  `;const t=i.totalLaborBrl/l.auxiliary.radierM2,e=l.purchaseTotalBlocks.toLocaleString("pt-BR");q.innerHTML=`
    <div class="aux-card">
      <h3>Somente Blocos Estruturais (${e} un c/ quebra)</h3>
      <p class="aux-value">${c(i.purchaseBlocksCostBrl)}</p>
      <p class="aux-sub">Líquido s/ quebra: ${c(i.netBlocksCostBrl)} | Fábricas Itapevi/Cotia/Barueri</p>
    </div>
    <div class="aux-card">
      <h3>Total Estimado de Materiais</h3>
      <p class="aux-value">${c(i.totalMaterialsBrl)}</p>
      <p class="aux-sub">Radier ${l.auxiliary.radierM2.toFixed(2).replace(".",",")} m², blocos, telha ${l.auxiliary.sandwichRoofSlopedM2.toFixed(2).replace(".",",")} m², laje ${l.auxiliary.exposedSlabM2.toFixed(2).replace(".",",")} m² e acabamentos</p>
    </div>
    <div class="aux-card">
      <h3>Mão de Obra Estimada (Itapevi/SP)</h3>
      <p class="aux-value">${c(i.totalLaborBrl)}</p>
      <p class="aux-sub">Empreita local ~R$ ${Math.round(t)}/m² da fundação ao acabamento</p>
    </div>
    <div class="aux-card highlight-card">
      <h3>Custo Total da Obra (${l.auxiliary.radierM2.toFixed(2).replace(".",",")} m²)</h3>
      <p class="aux-value">${c(i.totalProjectBrl)}</p>
      <p class="aux-sub">~${c(i.costPerM2Brl)}/m² | Faixa Itapevi SINAPI/CUB-SP: R$ 108 mil a R$ 132 mil</p>
    </div>
  `}for(const n of y)n.addEventListener("click",()=>{const l=Number(n.dataset.breakage);for(const i of y)i.setAttribute("aria-pressed",String(i===n));p(l)});_.addEventListener("click",()=>{window.print()});p(10);
