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

  const diningCourses = [
    {
      order: '01',
      name: 'AMUSE',
      items: [
        {
          id: 'dining-sweet-shrimp',
          name: 'SWEET SHRIMP',
          image: '/assets/dining/01-amuse.webp',
          description: ['단새우와 캐비어, 우니를 샤도네이 크림 폼과 함께 구성했구요. 시트러스 드레싱과 허브로 마무리했습니다. 드실 때 폼과 단새우, 캐비어 또는 우니를 같이 드셔보시는 걸 추천드리겠습니다.']
        },
        {
          id: 'dining-tart-selection',
          name: 'TART SELECTION',
          image: '/assets/dining/02-tart-selection.webp',
          description: ['두 가지 타르트 준비해드렸구요. 한쪽은 한우 투뿔 홍두깨살로 만든 타르트 위에 배로 만든 젤과 마늘고추장 아이올리를 구성했고, 다른 한쪽은 버섯 뒤셀에 송고버섯, 트러플을 더했습니다. 먼저 비프 타르트부터 드셔보시고 머쉬룸 타르트 드셔보시는 걸 추천드리겠습니다.']
        }
      ]
    },
    {
      order: '02',
      name: 'ENTRÉE',
      items: [
        {
          id: 'dining-seasonal-fish-crudo',
          name: 'SEASONAL FISH CRUDO',
          image: '/assets/dining/03-seasonal-fish-crudo.webp',
          description: ['오늘의 제철 흰살생선(계속 변동)을 얇게 슬라이스해서 준비했구요. 아래에는 펜넬 크림을 깔고 시트러스 드레싱으로 가볍게 간했습니다. 배와 토마토 젤, 펜넬, 허브를 함께 구성했구요. 생선과 모든 구성요소를 같이 드시는 걸 추천드리겠습니다.']
        },
        {
          id: 'dining-pate-en-croute',
          name: 'PÂTÉ EN CROÛTE, TRUFFLE',
          image: '/assets/dining/04-pate-en-croute.webp',
          description: [
            '오리와 돼지고기, 닭간을 베이스로 피스타치오와 무화과를 넣어 만든 파테를 퍼프 페이스트리로 감싸 구웠구요. 트러플 비네그렛을 함께 구성했습니다.',
            '(트러플 갈아주며)',
            '유럽산 최상급 윈터 트러플 갈아드릴게요. 파테와 트러플 비네그렛, 트러플을 같이 드셔보시는 걸 추천드리겠습니다.'
          ]
        }
      ]
    },
    {
      order: '03',
      name: 'PASTA',
      items: [
        {
          id: 'dining-uni-fresh-pasta',
          name: 'UNI FRESH PASTA',
          image: '/assets/dining/05-uni-fresh-pasta.webp',
          description: ['알라치타라 생면에 우니 소스를 입혀 준비했구요. 위에는 생우니와 시오콘부, 블랙올리브, 브레드크럼, 차이브를 올려 마무리했습니다. 오늘 들어온 최상급 보스톤우니(계속 변동) 올려드렸으니 생으로 먼저 드시고 파스타는 한번 섞어 드시는 걸 추천드릴게요.']
        }
      ]
    },
    {
      order: '04',
      name: 'MAIN',
      items: [
        {
          id: 'dining-signature-beef-steak',
          name: 'SIGNATURE BEEF STEAK',
          image: '/assets/dining/06-signature-beef-steak.webp',
          description: ['한우 1++ 채끝 준비해드리겠습니다. 버터넛 퓨레와 주를 함께 구성했구요. 안에는 뒤셀을 채운 모렐과 샬롯 피클을 곁들였습니다. 고기와 버터넛 퓨레, 주를 같이 드셔보시고 모렐도 함께 곁들여 드셔보시면 좋습니다.']
        }
      ]
    },
    {
      order: '05',
      name: 'DESSERT',
      items: [
        {
          id: 'dining-chocolate-terrine',
          name: 'CHOCOLATE TERRINE',
          image: '/assets/dining/07-chocolate-terrine.webp',
          description: ['다크초콜릿으로 만든 테린에 럼 아이스크림과 라즈베리 잼을 함께 구성했구요. 카카오닙과 말돈으로 마무리했습니다. 초콜릿 테린과 럼 아이스크림을 같이 드셔보시는 걸 추천드리겠습니다.']
        },
        {
          id: 'dining-ile-flottante',
          name: 'ÎLE FLOTTANTE',
          image: '',
          description: ['바닐라 앙글레즈 위에 폭신하게 구운 머랭을 올리고, 얇은 캐러멜과 견과류 프랄린, 허브로 함께 마무리했습니다. 앙글레즈와 머랭, 캐러멜을 같이 드셔보시면 좋습니다.']
        },
        {
          id: 'dining-euphoria-caviar-service',
          name: 'EUPHORIA CAVIAR SERVICE',
          image: '/assets/dining/08-euphoria-caviar-service.webp',
          description: [
            '캐비어 서비스 준비해드리겠습니다. (뚜껑 오픈)',
            '오늘 준비해드린 캐비어는 프랑스산 오세트라 프레스티지 캐비어입니다. 은은한 바다의 향과 섬세한 헤이즐넛 풍미의 긴 여운을 느끼실 수 있고, 아름다운 호박색 골드 색을 띄고 있는 게 특징입니다.',
            '따뜻하게 데운 메밀 블리니와 샤워크림(or 카이막 내일결정), 샬롯, 차이브, 달걀을 함께 준비했구요. 블리니에 샤워크림(or 카이막), 캐비어를 올려서 드셔도 좋고, 취향에 맞게 각각 곁들여 드셔도 좋습니다. 맛있게 드세요.'
          ]
        }
      ]
    }
  ];

  const diningIcon = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v8m-3-8v5a3 3 0 0 0 6 0V3M7 11v10m9-18v18m0-18c3 2 4 5 4 9h-4"/></svg>';
  const isDiningRoute = () => location.hash.startsWith('#guide/rules/dining-menu');
  const storedRecipePhotos = () => {
    try {
      return JSON.parse(localStorage.getItem('euphoria-recipe-photos') || '{}') || {};
    } catch {
      return {};
    }
  };

  const diningItem = (item, photos) => {
    const custom = photos[item.id];
    const src = custom || item.image;
    const resetLabel = item.image ? '기본 사진 복원' : '사진 삭제';
    const thumb = src
      ? `<img class="dining-thumb" src="${src}" alt="${item.name} 메뉴 사진" width="220" height="220" decoding="async" loading="lazy">`
      : '<span class="dining-no-photo">사진<br>추가 가능</span>';
    const photo = src
      ? `<figure class="dining-figure"><img src="${src}" alt="${item.name} 메뉴 사진" decoding="async" loading="lazy"><figcaption>${custom ? '직접 변경한 사진' : '다이닝 코스 메뉴 사진'}</figcaption></figure>`
      : '<div class="recipe-empty-photo dining-empty-photo">등록된 사진이 없습니다. 편집 모드에서 ‘사진 변경’으로 추가하세요.</div>';
    return `<details id="${item.id}" class="dining-item"><summary>${thumb}<span class="dining-title"><strong>${item.name}</strong><small>눌러서 설명 보기</small></span><span class="dining-chevron">+</span></summary><div class="dining-detail"><div class="recipe-actions dining-photo-actions"><label class="recipe-photo-button">사진 변경<input type="file" accept="image/*" data-photo-section="${item.id}"></label>${custom ? `<button class="recipe-photo-reset" data-reset-photo="${item.id}">${resetLabel}</button>` : ''}</div>${photo}<div class="dining-description">${item.description.map(text => `<p>${text}</p>`).join('')}</div></div></details>`;
  };

  const addDiningNavigation = () => {
    const desktop = document.getElementById('desktop-nav');
    if (desktop && !desktop.querySelector('.dining-nav-link')) {
      const link = document.createElement('a');
      link.className = 'nav-link dining-nav-link';
      link.href = '#guide/rules/dining-menu';
      link.innerHTML = `${diningIcon}<span>다이닝</span>`;
      const guide = [...desktop.querySelectorAll('.nav-link')].find(item => item.getAttribute('href') === '#guide');
      desktop.insertBefore(link, guide || null);
    }

    const bottom = document.getElementById('bottom-nav');
    if (bottom && !bottom.querySelector('.dining-bottom-link')) {
      const link = document.createElement('a');
      link.className = 'bottom-link dining-bottom-link';
      link.href = '#guide/rules/dining-menu';
      link.innerHTML = `${diningIcon}<span>다이닝</span>`;
      bottom.insertBefore(link, bottom.lastElementChild);
    }

    if (isDiningRoute()) {
      document.querySelectorAll('#desktop-nav .nav-link, #bottom-nav .bottom-link').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
      [desktop?.querySelector('.dining-nav-link'), bottom?.querySelector('.dining-bottom-link')].forEach(link => {
        if (!link) return;
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      });
    }
  };

  const addDiningHomeCard = () => {
    if (location.hash && !location.hash.startsWith('#home')) return;
    const grid = document.querySelector('#main .category-grid');
    if (!grid || grid.querySelector('.dining-category-card')) return;
    const link = document.createElement('a');
    link.className = 'category-card dining-category-card';
    link.href = '#guide/rules/dining-menu';
    link.innerHTML = `${diningIcon}<span class="arrow">→</span><h3>다이닝</h3><p>코스 순서 · 메뉴 설명 · 사진</p>`;
    grid.append(link);
  };

  const renderDiningPage = () => {
    const main = document.getElementById('main');
    if (!main) return false;
    if (!isDiningRoute()) {
      delete main.dataset.euphoriaDining;
      return false;
    }
    if (main.dataset.euphoriaDining === '1' && main.querySelector('.dining-course-list')) return true;
    main.dataset.euphoriaDining = '1';
    const photos = storedRecipePhotos();
    document.title = '다이닝 코스 · SPACE EUPHORIA';
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) breadcrumb.textContent = '다이닝';
    main.innerHTML = `<div class="eyebrow">DINING COURSE</div><h1 class="page-heading">다이닝 코스</h1><p class="page-intro">코스 순서대로 확인하세요. 각 메뉴를 누르면 직원용 설명이 펼쳐집니다.</p><div class="dining-course-list">${diningCourses.map(course => `<section class="dining-course"><header><span>${course.order}</span><div><small>COURSE</small><h2>${course.name}</h2></div></header><div class="dining-items">${course.items.map(item => diningItem(item, photos)).join('')}</div></section>`).join('')}</div>`;
    return true;
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
    addDiningNavigation();
    addDiningHomeCard();
    if (renderDiningPage()) return;
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
