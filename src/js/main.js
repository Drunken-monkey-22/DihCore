// ============================================================
// NITT FIRE — Shared JavaScript Utilities
// ============================================================

// === Nav scroll effect ===
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.topnav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// === Mobile nav toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
  }

  // === Global Search Overlay ===
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchMainInput');
  const openSearchBtns = document.querySelectorAll('[data-open-search]');
  const closeSearchBtn = document.getElementById('closeSearch');

  if (searchOverlay) {
    openSearchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        searchOverlay.classList.add('open');
        setTimeout(() => searchInput && searchInput.focus(), 100);
      });
    });
    closeSearchBtn && closeSearchBtn.addEventListener('click', () => searchOverlay.classList.remove('open'));
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) searchOverlay.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') searchOverlay.classList.remove('open');
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchOverlay.classList.toggle('open');
        if (searchOverlay.classList.contains('open')) setTimeout(() => searchInput && searchInput.focus(), 100);
      }
    });

    // Search logic
    if (searchInput) {
      searchInput.addEventListener('input', debounce(handleSearch, 200));
    }
  }

  // === Tabs ===
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const parent = btn.closest('[data-tabs-container]') || document;
        parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const content = parent.querySelector(`[data-tab-content="${target}"]`);
        if (content) content.classList.add('active');
      });
    });
  });

  // === Filter Pills ===
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.closest('.filter-pills');
      if (group) group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      filterCards(filter);
    });
  });

  // === Modals ===
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modalOpen);
      if (modal) modal.classList.add('open');
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) overlay.classList.remove('open');
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // === Animate on scroll ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.anim-on-scroll').forEach(el => observer.observe(el));

  // === Counter animation ===
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    animateCount(el, 0, target, 1500, suffix);
  });

  // === Journey steps ===
  document.querySelectorAll('.journey-step').forEach((step, i, steps) => {
    step.addEventListener('click', () => {
      const wasActive = step.classList.contains('active');
      steps.forEach(s => s.classList.remove('active'));
      if (!wasActive) step.classList.add('active');
    });
    // Make first active by default
    if (i === 0) step.classList.add('active');
  });

  // === Form stepper ===
  initFormStepper();

  // === Form validation ===
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form)) {
        showSuccess(form);
      }
    });
  });
});

// === Search Handler ===
const SEARCH_DATA = [];
function handleSearch() {
  const q = document.getElementById('searchMainInput')?.value?.toLowerCase() || '';
  const results = document.getElementById('searchResults');
  if (!results) return;
  if (!q) { results.innerHTML = getSearchPlaceholder(); return; }
  const matches = SEARCH_DATA.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.desc?.toLowerCase().includes(q) ||
    item.tags?.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8);
  results.innerHTML = matches.length ? renderSearchResults(matches) : `<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-title">No results found</div><div class="empty-state-desc">Try different keywords</div></div>`;
}

function getSearchPlaceholder() {
  return `
    <div class="search-result-group-label">Quick Access</div>
    ${[{icon:'💡',title:'Submit an Idea',url:'pages/start-here/idea.html'},{icon:'🔬',title:'Faculty Projects',url:'pages/explore/faculty-projects.html'},{icon:'🏆',title:'Industry Challenges',url:'pages/explore/challenges.html'},{icon:'💰',title:'Funding Finder',url:'pages/resources/funding.html'},{icon:'🤝',title:'Find a Mentor',url:'pages/connect/mentors.html'}]
    .map(i=>`<a class="search-result-item" href="${i.url}"><div class="search-result-icon">${i.icon}</div><div><div class="search-result-title">${i.title}</div></div></a>`).join('')}
  `;
}

function renderSearchResults(items) {
  return items.map(item => `
    <a class="search-result-item" href="${item.url || '#'}">
      <div class="search-result-icon">${item.icon || '📄'}</div>
      <div>
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-meta">${item.category || ''} ${item.status ? '· '+item.status : ''}</div>
      </div>
    </a>
  `).join('');
}

// === Filter cards by data-filter attribute ===
function filterCards(filter) {
  const cards = document.querySelectorAll('[data-category]');
  cards.forEach(card => {
    if (!filter || filter === 'all') {
      card.style.display = '';
    } else {
      card.style.display = card.dataset.category === filter ? '' : 'none';
    }
  });
}

// === Inline search for directories ===
function initDirectorySearch(inputId, containerSelector) {
  const input = document.getElementById(inputId);
  const cards = document.querySelectorAll(containerSelector + ' [data-searchable]');
  if (!input || !cards.length) return;
  input.addEventListener('input', debounce(() => {
    const q = input.value.toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = q && !text.includes(q) ? 'none' : '';
    });
  }, 200));
}

// === Counter animation ===
function animateCount(el, from, to, duration, suffix) {
  const start = performance.now();
  function update(now) {
    const t = Math.min((now - start) / duration, 1);
    const val = Math.round(from + (to - from) * easeOut(t));
    el.textContent = val.toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

// === Debounce ===
function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

// === Multi-step form ===
function initFormStepper() {
  const forms = document.querySelectorAll('[data-multistep]');
  forms.forEach(form => {
    const steps = form.querySelectorAll('[data-step]');
    const indicators = form.querySelectorAll('.form-step-item');
    let current = 0;

    function showStep(n) {
      steps.forEach((s, i) => s.style.display = i === n ? 'block' : 'none');
      indicators.forEach((ind, i) => {
        ind.classList.remove('active', 'done');
        if (i < n) ind.classList.add('done');
        if (i === n) ind.classList.add('active');
      });
      current = n;
    }

    form.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => { if (current < steps.length - 1) showStep(current + 1); });
    });
    form.querySelectorAll('[data-prev]').forEach(btn => {
      btn.addEventListener('click', () => { if (current > 0) showStep(current - 1); });
    });

    showStep(0);
  });
}

// === Form validation ===
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--c-error)';
      field.style.boxShadow = '0 0 0 3px var(--c-error-dim)';
      valid = false;
    } else {
      field.style.borderColor = '';
      field.style.boxShadow = '';
    }
  });
  return valid;
}

function showSuccess(form) {
  const success = form.querySelector('[data-success]');
  if (success) { form.style.display = 'none'; success.style.display = 'block'; }
}

// === Toast notifications ===
function showToast(msg, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `alert alert-${type}`;
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;max-width:360px;box-shadow:var(--shadow-xl);animation:slideIn 0.3s ease;';
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️'}</span><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// === Active nav link ===
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, .sidebar-link, .mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace(/index\.html$/, ''))) {
      link.classList.add('active');
    }
  });
});
