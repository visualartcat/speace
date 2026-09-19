(() => {
  'use strict';

  const cupAssets = {
    americanoHot: ['/assets/cup-americano-hot.webp', '아메리카노 HOT 잔'],
    espresso: ['/assets/cup-espresso.webp', '에스프레소 잔'],
    latteHot: ['/assets/cup-latte-hot.webp', '카페라떼 HOT 잔'],
    ice: ['/assets/glass-ice-drinks.webp', '아이스 음료 크리스탈 잔']
  };

  const cupMap = {
    'recipe-americano|HOT': cupAssets.americanoHot,
    'recipe-americano|ICE': cupAssets.ice,
    'recipe-latte|HOT': cupAssets.latteHot,
    'recipe-latte|ICE': cupAssets.ice,
    'recipe-vanilla|ICE': cupAssets.ice,
    'recipe-grapefruit|ICE': cupAssets.ice
  };

  const cupReference = cup => {
    const el = document.createElement('div');
    el.className = 'drink-cup-reference';
    el.dataset.euphoriaCup = '1';
    el.innerHTML = `<img src="${cup[0]}" alt="${cup[1]}" width="124" height="124" loading="lazy"><span><strong>사용 잔</strong><small>${cup[1]}</small></span>`;
    return el;
  };

  const addHomeGuide = () => {
    const grid = document.querySelector('#main .quick-grid');
    if (!grid || grid.querySelector('.reservation-guide-link')) return;
    grid.classList.add('euphoria-four-links');
    const link = document.createElement('a');
    link.className = 'quick-link reservation-guide-link';
    link.href = '#guide/rules/reservation-alcohol';
    link.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8l-1 7a3 3 0 0 1-6 0L8 3Zm4 10v8m-4 0h8"/></svg>예약 시 주류 안내';
    grid.append(link);
  };

  const addReservationGuide = () => {
    if (!location.hash.startsWith('#guide/rules')) return;
    const grid = document.querySelector('#main .content-grid');
    if (!grid || document.getElementById('reservation-alcohol')) return;
    const card = document.createElement('section');
    card.id = 'reservation-alcohol';
    card.className = 'card full';
    card.tabIndex = -1;
    card.dataset.sectionId = 'reservation-alcohol';
    card.innerHTML = `<span class="card-label">RESERVATION GUIDE</span><h2>예약 시 주류 안내</h2><div class="card-content"><div class="liquor-guide"><section><h3>와인 안내</h3><ul class="bullets"><li>와인은 <strong>300종 이상</strong> 보유</li><li>가격대는 <strong>10만 원 중반 ~ 3천만 원대</strong></li><li>별도의 와인 리스트 없이 셀러에서 소믈리에가 취향에 맞춰 추천</li><li>와인 관련 상세 문의는 소믈리에에게 연결</li></ul></section><section><h3>위스키 안내</h3><ul class="bullets"><li>위스키는 <strong>글라스로만 판매</strong>하며 바틀 판매는 하지 않음</li><li>가격대는 <strong>3만 원대 ~ 9만 원대</strong></li></ul></section></div></div>`;
    grid.append(card);
    if (location.hash.endsWith('/reservation-alcohol')) requestAnimationFrame(() => card.scrollIntoView({ block: 'start' }));
  };

  const addRecipeCups = () => {
    document.querySelectorAll('#main .recipe-part').forEach(part => {
      if (part.querySelector('[data-euphoria-cup]')) return;
      const detail = part.closest('details[id]');
      const label = part.querySelector(':scope > h3')?.textContent.trim();
      const cup = cupMap[`${detail?.id}|${label}`];
      if (cup) part.querySelector(':scope > h3')?.after(cupReference(cup));
    });

    const espresso = document.querySelector('#recipe-espresso .card-content');
    if (espresso && !espresso.querySelector('[data-euphoria-cup]')) espresso.prepend(cupReference(cupAssets.espresso));
  };

  const glassCell = cup => `<span class="glass-cell"><img src="${cup[0]}" alt="${cup[1]}" width="108" height="108" loading="lazy"><strong>${cup[1]}</strong></span>`;

  const updateGlassGuide = () => {
    const card = document.getElementById('glasses');
    const body = card?.querySelector('tbody');
    if (!body || body.dataset.euphoriaUpdated) return;
    body.dataset.euphoriaUpdated = '1';
    card.querySelector('h2').textContent = '음료별 잔 준비';
    body.innerHTML = [
      ['아메리카노 HOT', cupAssets.americanoHot],
      ['에스프레소', cupAssets.espresso],
      ['카페라떼 HOT', cupAssets.latteHot],
      ['아메리카노 ICE', cupAssets.ice],
      ['카페라떼 ICE', cupAssets.ice],
      ['바닐라라떼 ICE', cupAssets.ice],
      ['허니자몽블랙티 ICE', cupAssets.ice]
    ].map(([name, cup]) => `<tr><td>${name}</td><td>${glassCell(cup)}</td></tr>`).join('');
    const note = card.querySelector('.note');
    if (note) note.textContent = '콜드브루와 HOT 바닐라라떼·HOT 허니자몽블랙티의 잔은 현장 확인 후 추가합니다.';
  };

  const installNumberedEditor = () => {
    const editor = document.getElementById('edit-card-body');
    if (!editor || editor.dataset.euphoriaNumbering) return;
    editor.dataset.euphoriaNumbering = '1';
    const help = editor.closest('.editor-label')?.querySelector('.editor-help');
    if (help) help.textContent = '화면에서 보이는 문장을 직접 수정하세요. 번호 목록에서 Enter를 누르면 다음 번호가 추가됩니다.';
    editor.addEventListener('keydown', event => {
      if (event.key !== 'Enter' || event.shiftKey) return;
      const selection = window.getSelection();
      const anchor = selection?.anchorNode;
      const anchorElement = anchor?.nodeType === 1 ? anchor : anchor?.parentElement;
      const item = anchorElement?.closest('#edit-card-body ol.steps > li');
      if (!item) return;
      event.preventDefault();
      const next = document.createElement('li');
      next.innerHTML = '<span><br></span>';
      item.after(next);
      const target = next.querySelector('span');
      const range = document.createRange();
      range.selectNodeContents(target);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    });
  };

  const enhance = () => {
    addHomeGuide();
    addReservationGuide();
    addRecipeCups();
    updateGlassGuide();
    installNumberedEditor();
  };

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      enhance();
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('hashchange', enhance);
  enhance();
})();
