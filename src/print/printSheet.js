import { calculateMasonryTakeoff } from '../data/masonryTakeoff.js';
import {
  renderBlockThumbSvg,
  renderFloorPlanSvg,
  renderSectionSvg
} from './renderSvgPlan.js';

const floorPlanHost = document.getElementById('floorplan-svg-host');
const sectionHost = document.getElementById('section-svg-host');
const summaryBody = document.getElementById('summary-table-body');
const summaryTotalNet = document.getElementById('summary-total-net');
const summaryTotalPurchase = document.getElementById('summary-total-purchase');
const summaryTotalCost = document.getElementById('summary-total-cost');
const summaryBreakageHead = document.getElementById('summary-breakage-head');
const wallsBody = document.getElementById('walls-table-body');
const wallsTotalsRow = document.getElementById('walls-totals-row');
const budgetBody = document.getElementById('budget-table-body');
const budgetTotalsRow = document.getElementById('budget-totals-row');
const auxGrid = document.getElementById('aux-areas-grid');
const breakageButtons = Array.from(document.querySelectorAll('[data-breakage]'));
const printBtn = document.getElementById('print-btn');

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const formatBrl = (value) => brlFormatter.format(value);

floorPlanHost.innerHTML = renderFloorPlanSvg();
sectionHost.innerHTML = renderSectionSvg();

function renderTables(breakagePercent) {
  const data = calculateMasonryTakeoff({ breakagePercent });
  const { costEstimate } = data;

  summaryBreakageHead.textContent = `+${breakagePercent}% quebra`;
  summaryBody.innerHTML = data.summaryByType
    .map(
      (item) => `
      <tr>
        <th scope="row">
          <div class="block-cell">
            ${renderBlockThumbSvg(item.id)}
            <span>${item.name}</span>
          </div>
        </th>
        <td>${item.dimensions}</td>
        <td>${item.usage}</td>
        <td class="num">${item.netQty} un</td>
        <td class="num">+${item.extraQty} un</td>
        <td class="num"><strong>${item.purchaseQty} un</strong></td>
        <td class="num">${formatBrl(item.unitPriceBrl)}</td>
        <td class="num"><strong>${formatBrl(item.purchaseCostBrl)}</strong></td>
      </tr>
    `
    )
    .join('');

  summaryTotalNet.textContent = `${data.netTotals.totalBlocks} un`;
  summaryTotalPurchase.textContent = `${data.purchaseTotalBlocks} un`;
  summaryTotalCost.textContent = formatBrl(costEstimate.purchaseBlocksCostBrl);

  wallsBody.innerHTML = data.walls
    .map(
      (w) => `
      <tr>
        <th scope="row">${w.id}</th>
        <td>${w.name}</td>
        <td class="num">${w.lengthM.toFixed(2).replace('.', ',')}</td>
        <td>${w.heightLabel}</td>
        <td>${w.openingsDesc}</td>
        <td class="num">${w.netAreaM2.toFixed(2).replace('.', ',')} m²</td>
        <td class="num">${w.counts.inteiro}</td>
        <td class="num">${w.counts.meio}</td>
        <td class="num">${w.counts.amarracao}</td>
        <td class="num">${w.counts.canaleta}</td>
      </tr>
    `
    )
    .join('');

  wallsTotalsRow.innerHTML = `
    <th scope="row" colspan="5">Totais líquidos (sem margem de quebra)</th>
    <td class="num">${data.netTotals.netAreaM2.toFixed(2).replace('.', ',')} m²</td>
    <td class="num">${data.netTotals.inteiro}</td>
    <td class="num">${data.netTotals.meio}</td>
    <td class="num">${data.netTotals.amarracao}</td>
    <td class="num">${data.netTotals.canaleta}</td>
  `;

  budgetBody.innerHTML = costEstimate.stages
    .map(
      (s) => `
      <tr>
        <th scope="row">${s.stage}</th>
        <td>${s.scope}</td>
        <td class="num">${formatBrl(s.materialBrl)}</td>
        <td class="num">${formatBrl(s.laborBrl)}</td>
        <td class="num"><strong>${formatBrl(s.totalBrl)}</strong></td>
      </tr>
    `
    )
    .join('');

  budgetTotalsRow.innerHTML = `
    <th scope="row" colspan="2">Total estimado da obra em ${costEstimate.region} (${formatBrl(costEstimate.costPerM2Brl)} / m²)</th>
    <td class="num">${formatBrl(costEstimate.totalMaterialsBrl)}</td>
    <td class="num">${formatBrl(costEstimate.totalLaborBrl)}</td>
    <td class="num">${formatBrl(costEstimate.totalProjectBrl)}</td>
  `;

  const laborPerM2 = costEstimate.totalLaborBrl / data.auxiliary.radierM2;
  const formattedPurchaseQty = data.purchaseTotalBlocks.toLocaleString('pt-BR');

  auxGrid.innerHTML = `
    <div class="aux-card">
      <h3>Somente Blocos Estruturais (${formattedPurchaseQty} un c/ quebra)</h3>
      <p class="aux-value">${formatBrl(costEstimate.purchaseBlocksCostBrl)}</p>
      <p class="aux-sub">Líquido s/ quebra: ${formatBrl(costEstimate.netBlocksCostBrl)} | Fábricas Itapevi/Cotia/Barueri</p>
    </div>
    <div class="aux-card">
      <h3>Total Estimado de Materiais</h3>
      <p class="aux-value">${formatBrl(costEstimate.totalMaterialsBrl)}</p>
      <p class="aux-sub">Radier ${data.auxiliary.radierM2.toFixed(2).replace('.', ',')} m², blocos, telha ${data.auxiliary.sandwichRoofSlopedM2.toFixed(2).replace('.', ',')} m², laje ${data.auxiliary.exposedSlabM2.toFixed(2).replace('.', ',')} m² e acabamentos</p>
    </div>
    <div class="aux-card">
      <h3>Mão de Obra Estimada (Itapevi/SP)</h3>
      <p class="aux-value">${formatBrl(costEstimate.totalLaborBrl)}</p>
      <p class="aux-sub">Empreita local ~R$ ${Math.round(laborPerM2)}/m² da fundação ao acabamento</p>
    </div>
    <div class="aux-card highlight-card">
      <h3>Custo Total da Obra (${data.auxiliary.radierM2.toFixed(2).replace('.', ',')} m²)</h3>
      <p class="aux-value">${formatBrl(costEstimate.totalProjectBrl)}</p>
      <p class="aux-sub">~${formatBrl(costEstimate.costPerM2Brl)}/m² | Faixa Itapevi SINAPI/CUB-SP: R$ 108 mil a R$ 132 mil</p>
    </div>
  `;
}

for (const btn of breakageButtons) {
  btn.addEventListener('click', () => {
    const pct = Number(btn.dataset.breakage);
    for (const b of breakageButtons) {
      b.setAttribute('aria-pressed', String(b === btn));
    }
    renderTables(pct);
  });
}

printBtn.addEventListener('click', () => {
  window.print();
});

renderTables(10);
