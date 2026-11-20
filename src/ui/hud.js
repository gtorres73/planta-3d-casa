export function initHud({
  controller,
  initialPlan,
  getGroups,
  lighting,
  minimap,
  onVersionSwitch
}) {
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    import('invokers-polyfill');
  }
  if (!Object.hasOwn(HTMLElement.prototype, 'popover')) {
    import('@oddbird/popover-polyfill');
  }

  const helpDialog = document.getElementById('help-dialog');
  if (helpDialog && !('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    helpDialog.addEventListener('pointerdown', (e) => {
      pressedOutside = outside(e, helpDialog);
    });
    helpDialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e, helpDialog)) {
        helpDialog.close();
      }
    });
  }

  const roomStatusEl = document.getElementById('current-room-label');
  const liveStatusEl = document.getElementById('live-status');
  const versionButtons = Array.from(document.querySelectorAll('[data-version]'));
  const modeButtons = Array.from(document.querySelectorAll('[data-camera-mode]'));
  const ceilingButtons = Array.from(document.querySelectorAll('[data-action="ceiling"]'));
  const furnitureButtons = Array.from(document.querySelectorAll('[data-action="furniture"]'));
  const labelsButtons = Array.from(document.querySelectorAll('[data-action="labels"]'));
  const lightButtons = Array.from(document.querySelectorAll('[data-action="lighting"]'));
  const minimapToggleBtn = document.getElementById('toggle-minimap');
  const minimapPanel = document.getElementById('minimap-panel');
  const roomNav = document.getElementById('room-nav');

  let activePlan = initialPlan;
  let ceilingWalkPref = true;
  let ceilingAerialPref = false;
  let furnitureVisible = true;
  let labelsVisible = Boolean(initialPlan?.defaultLabelsVisible);
  let lastMode = 'walk';
  let sunsetOn = false;
  let liveTimer = null;
  let roomBtnMap = new Map();

  // Hide relative print sheet links inside standalone portable WhatsApp HTML files
  if (typeof window !== 'undefined' && window.__IS_PORTABLE__) {
    for (const el of document.querySelectorAll('.print-plan-link')) {
      el.hidden = true;
    }
  }

  // Start minimap collapsed on compact mobile viewports so the 3D view stays clear
  if (window.innerWidth < 768 && minimapPanel && minimapToggleBtn) {
    minimapPanel.classList.add('is-collapsed');
    minimapToggleBtn.setAttribute('aria-expanded', 'false');
    minimapToggleBtn.textContent = 'Mapa';
  }

  function announce(text) {
    if (!liveStatusEl) return;
    window.clearTimeout(liveTimer);
    liveTimer = window.setTimeout(() => {
      liveStatusEl.textContent = text;
    }, 120);
  }

  function syncGroupPressed(buttons, pressed) {
    for (const btn of buttons) {
      btn.setAttribute('aria-pressed', String(pressed));
    }
  }

  function syncCeilingState(currentMode, isVisible) {
    const { ceilingGroup } = getGroups();
    if (ceilingGroup) ceilingGroup.visible = isVisible;
    syncGroupPressed(ceilingButtons, isVisible);
    if (currentMode === 'aerial') ceilingAerialPref = isVisible;
    else ceilingWalkPref = isVisible;
  }

  function applyVisibilityPrefs() {
    const { ceilingGroup, furnitureGroup, labelsGroup } = getGroups();
    const { mode } = controller.getPose();
    const ceilingWanted = mode === 'aerial' ? ceilingAerialPref : ceilingWalkPref;
    if (ceilingGroup) ceilingGroup.visible = ceilingWanted;
    if (furnitureGroup) furnitureGroup.visible = furnitureVisible;
    if (labelsGroup) labelsGroup.visible = labelsVisible;

    syncGroupPressed(ceilingButtons, ceilingWanted);
    syncGroupPressed(furnitureButtons, furnitureVisible);
    syncGroupPressed(labelsButtons, labelsVisible);
  }

  function buildRoomNav(plan) {
    roomNav.innerHTML = '';
    roomBtnMap = new Map();
    const navRooms = plan.ROOMS.filter((r) => r.showInNav);

    for (const room of navRooms) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'room-btn';
      btn.dataset.roomId = room.id;
      btn.textContent = room.shortName;
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', () => {
        syncCeilingState('walk', ceilingWalkPref);
        controller.goToRoom(room.id);
      });
      roomNav.appendChild(btn);
      roomBtnMap.set(room.id, btn);
    }
  }

  function syncVersionButtons(versionId) {
    for (const btn of versionButtons) {
      btn.setAttribute('aria-pressed', String(btn.dataset.version === versionId));
    }
  }

  for (const btn of versionButtons) {
    btn.addEventListener('click', () => {
      const nextId = btn.dataset.version;
      if (nextId === activePlan.id) return;
      activePlan = onVersionSwitch(nextId);
      labelsVisible = Boolean(activePlan.defaultLabelsVisible);
      syncVersionButtons(activePlan.id);
      buildRoomNav(activePlan);
      applyVisibilityPrefs();
      onCameraStateChange({ mode: controller.getPose().mode, room: controller.getPose().room });
      announce(`Carregada ${activePlan.title}`);
    });
  }

  for (const btn of modeButtons) {
    btn.addEventListener('click', () => {
      const nextMode = btn.dataset.cameraMode;
      const targetCeiling = nextMode === 'aerial' ? ceilingAerialPref : ceilingWalkPref;
      syncCeilingState(nextMode, targetCeiling);
      controller.setMode(nextMode);
      announce(nextMode === 'aerial' ? 'Modo vista aérea ativado' : 'Modo caminhar ativado');
    });
  }

  for (const btn of ceilingButtons) {
    btn.addEventListener('click', () => {
      const { mode } = controller.getPose();
      const { ceilingGroup } = getGroups();
      const next = !(ceilingGroup?.visible ?? true);
      syncCeilingState(mode, next);
      announce(next ? 'Teto visível' : 'Teto oculto');
    });
  }

  for (const btn of furnitureButtons) {
    btn.addEventListener('click', () => {
      furnitureVisible = !furnitureVisible;
      const { furnitureGroup } = getGroups();
      if (furnitureGroup) furnitureGroup.visible = furnitureVisible;
      syncGroupPressed(furnitureButtons, furnitureVisible);
      announce(furnitureVisible ? 'Móveis visíveis' : 'Móveis ocultos');
    });
  }

  for (const btn of labelsButtons) {
    btn.addEventListener('click', () => {
      labelsVisible = !labelsVisible;
      const { labelsGroup } = getGroups();
      if (labelsGroup) labelsGroup.visible = labelsVisible;
      syncGroupPressed(labelsButtons, labelsVisible);
      announce(labelsVisible ? 'Medidas e nomes visíveis' : 'Medidas e nomes ocultos');
    });
  }

  for (const btn of lightButtons) {
    btn.addEventListener('click', () => {
      sunsetOn = !sunsetOn;
      lighting.setPreset(sunsetOn ? 'entardecer' : 'dia');
      syncGroupPressed(lightButtons, sunsetOn);
      for (const b of lightButtons) {
        b.textContent = sunsetOn ? 'Luz: Entardecer' : 'Luz: Dia';
      }
      announce(sunsetOn ? 'Iluminação de entardecer' : 'Iluminação de dia');
    });
  }

  minimapToggleBtn?.addEventListener('click', () => {
    const collapsed = minimapPanel.classList.toggle('is-collapsed');
    minimapToggleBtn.setAttribute('aria-expanded', String(!collapsed));
    minimapToggleBtn.textContent = collapsed ? 'Mapa' : 'Ocultar';
  });

  const padButtons = document.querySelectorAll('[data-pad-action]');
  for (const btn of padButtons) {
    const action = btn.dataset.padAction;
    const apply = (active) => {
      const v = active ? 1 : 0;
      if (action === 'forward') controller.setPadInput({ forward: v });
      else if (action === 'backward') controller.setPadInput({ forward: -v });
      else if (action === 'turn-left') controller.setPadInput({ turn: v });
      else if (action === 'turn-right') controller.setPadInput({ turn: -v });
    };

    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      btn.setPointerCapture?.(e.pointerId);
      apply(true);
    });
    const stop = () => apply(false);
    btn.addEventListener('pointerup', stop);
    btn.addEventListener('pointercancel', stop);
    btn.addEventListener('lostpointercapture', stop);
  }

  function onCameraStateChange({ mode, room }) {
    if (mode !== lastMode) {
      syncCeilingState(mode, mode === 'aerial' ? ceilingAerialPref : ceilingWalkPref);
      lastMode = mode;
    }

    for (const btn of modeButtons) {
      btn.setAttribute('aria-pressed', String(btn.dataset.cameraMode === mode));
    }

    for (const [id, btn] of roomBtnMap.entries()) {
      const active = room && (room.id === id || (room.id === 'corredor-interno' && id === 'cozinha'));
      btn.setAttribute('aria-pressed', String(Boolean(active)));
    }

    if (mode === 'aerial') {
      roomStatusEl.textContent = `${activePlan.label} (5,00 m × 30,00 m)`;
    } else if (room) {
      roomStatusEl.textContent = `${room.name} (${room.dimensionsLabel})`;
      announce(`Em ${room.name}`);
    } else {
      roomStatusEl.textContent = 'Área externa';
    }
  }

  syncVersionButtons(activePlan.id);
  buildRoomNav(activePlan);
  applyVisibilityPrefs();
  onCameraStateChange({ mode: 'walk', room: controller.getPose().room });

  function update() {
    minimap.render(controller.getPose());
  }

  return { onCameraStateChange, update };
}
