// ============================================================
// NITT FIRE — Shared HTML Components (Nav + Footer + Search)
// Inject into every page via: Components.init()
// ============================================================

const Components = {
  // Determine relative path prefix based on page depth
  pathPrefix(depth = 0) {
    return depth === 0 ? '' : '../'.repeat(depth);
  },

  navHTML(depth = 0) {
    const p = this.pathPrefix(depth);
    return `
<nav class="topnav" id="topnav">
  <div class="topnav-inner">
    <a href="${p}index.html" class="nav-logo">
      <div class="nav-logo-mark">F</div>
      <div class="nav-logo-text">
        <span class="nav-logo-title">FIRE</span>
        <span class="nav-logo-sub">NIT Trichy</span>
      </div>
    </a>

    <div class="nav-links">
      <div class="nav-dropdown">
        <a href="${p}pages/explore/index.html" class="nav-link">Explore ▾</a>
        <div class="nav-dropdown-menu">
          <a class="nav-dropdown-item" href="${p}pages/explore/faculty-projects.html"><div class="nav-dropdown-item-icon">👩‍🏫</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Faculty Projects</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Research opportunities</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/explore/club-projects.html"><div class="nav-dropdown-item-icon">🏆</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Club Projects</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Student-led initiatives</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/explore/challenges.html"><div class="nav-dropdown-item-icon">💼</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Industry Challenges</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Real-world problems</div></div></a>
          <div class="nav-dropdown-sep"></div>
          <a class="nav-dropdown-item" href="${p}pages/explore/mentors.html"><div class="nav-dropdown-item-icon">🤝</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Alumni & Mentors</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Expert network</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/explore/startups.html"><div class="nav-dropdown-item-icon">🚀</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Startups</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">NITT venture directory</div></div></a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="${p}pages/start-here/index.html" class="nav-link">Start Here ▾</a>
        <div class="nav-dropdown-menu">
          <a class="nav-dropdown-item" href="${p}pages/start-here/idea.html"><div class="nav-dropdown-item-icon">💡</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">I Have an Idea</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Submit your idea</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/start-here/founder-journey.html"><div class="nav-dropdown-item-icon">🗺️</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Founder Journey</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">From idea to venture</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/start-here/which-path.html"><div class="nav-dropdown-item-icon">🔀</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Which Path?</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Find your route</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/start-here/post-sih.html"><div class="nav-dropdown-item-icon">🔁</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Post-SIH Pathway</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Continue your SIH project</div></div></a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="${p}pages/resources/index.html" class="nav-link">Resources ▾</a>
        <div class="nav-dropdown-menu">
          <a class="nav-dropdown-item" href="${p}pages/resources/processes.html"><div class="nav-dropdown-item-icon">📋</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Process Repository</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Step-by-step guides</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/resources/facilities.html"><div class="nav-dropdown-item-icon">🔧</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Facility Directory</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Labs & equipment</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/resources/funding.html"><div class="nav-dropdown-item-icon">💰</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Funding Finder</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Grants & schemes</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/resources/ip-legal.html"><div class="nav-dropdown-item-icon">⚖️</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">IP & Legal</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">IP guidance</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/resources/templates.html"><div class="nav-dropdown-item-icon">📄</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Templates</div><div style="font-size:var(--fs-xs);color:var(--c-text-muted)">Forms & documents</div></div></a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="${p}pages/connect/index.html" class="nav-link">Connect ▾</a>
        <div class="nav-dropdown-menu">
          <a class="nav-dropdown-item" href="${p}pages/connect/mentors.html"><div class="nav-dropdown-item-icon">🧑‍🏫</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Find a Mentor</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/connect/collaborators.html"><div class="nav-dropdown-item-icon">👥</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Find Collaborators</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/connect/industry-challenge.html"><div class="nav-dropdown-item-icon">💼</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Submit a Challenge</div></div></a>
          <a class="nav-dropdown-item" href="${p}pages/connect/partnerships.html"><div class="nav-dropdown-item-icon">🌐</div><div><div style="font-weight:600;color:var(--c-text-primary);font-size:var(--fs-sm)">Partnerships</div></div></a>
        </div>
      </div>
      <a href="${p}pages/programmes/index.html" class="nav-link">Programmes</a>
      <a href="${p}pages/about/index.html" class="nav-link">About</a>
    </div>

    <div class="nav-actions">
      <button class="nav-search-btn" data-open-search>
        <span class="nav-search-icon">🔍</span>
        <span>Search FIRE…</span>
        <kbd class="nav-search-kbd">⌘K</kbd>
      </button>
      <div class="nav-cta">
        <a href="${p}pages/my-fire/index.html" class="btn btn-secondary btn-sm">My FIRE</a>
        <a href="${p}pages/admin/index.html" class="btn btn-outline btn-sm">Admin</a>
      </div>
    </div>

    <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-nav" id="mobileNav">
  <div class="mobile-nav-links">
    <a class="mobile-nav-link" href="${p}pages/explore/index.html">🔍 Explore</a>
    <a class="mobile-nav-link" href="${p}pages/start-here/index.html">💡 Start Here</a>
    <a class="mobile-nav-link" href="${p}pages/resources/index.html">📚 Resources</a>
    <a class="mobile-nav-link" href="${p}pages/connect/index.html">🤝 Connect</a>
    <a class="mobile-nav-link" href="${p}pages/programmes/index.html">🎤 Programmes</a>
    <a class="mobile-nav-link" href="${p}pages/my-fire/index.html">👤 My FIRE</a>
    <a class="mobile-nav-link" href="${p}pages/admin/index.html">⚙️ Admin</a>
    <a class="mobile-nav-link" href="${p}pages/about/index.html">ℹ️ About</a>
  </div>
</div>

<!-- Global Search Overlay -->
<div class="search-overlay" id="searchOverlay">
  <div class="search-box">
    <div class="search-input-wrap">
      <span class="search-input-icon">🔍</span>
      <input class="search-main-input" id="searchMainInput" placeholder="Search projects, faculty, funding, facilities…" autocomplete="off">
      <button id="closeSearch" class="btn btn-ghost btn-sm">✕</button>
    </div>
    <div class="search-results" id="searchResults">
      <div class="search-result-group-label">Quick Access</div>
      <a class="search-result-item" href="${p}pages/start-here/idea.html"><div class="search-result-icon">💡</div><div><div class="search-result-title">Submit an Idea</div><div class="search-result-meta">Start Here</div></div></a>
      <a class="search-result-item" href="${p}pages/explore/faculty-projects.html"><div class="search-result-icon">👩‍🏫</div><div><div class="search-result-title">Faculty Projects</div><div class="search-result-meta">Explore</div></div></a>
      <a class="search-result-item" href="${p}pages/explore/challenges.html"><div class="search-result-icon">💼</div><div><div class="search-result-title">Industry Challenges</div><div class="search-result-meta">Explore</div></div></a>
      <a class="search-result-item" href="${p}pages/resources/funding.html"><div class="search-result-icon">💰</div><div><div class="search-result-title">Funding Finder</div><div class="search-result-meta">Resources</div></div></a>
      <a class="search-result-item" href="${p}pages/connect/mentors.html"><div class="search-result-icon">🤝</div><div><div class="search-result-title">Find a Mentor</div><div class="search-result-meta">Connect</div></div></a>
      <a class="search-result-item" href="${p}pages/resources/facilities.html"><div class="search-result-icon">🔧</div><div><div class="search-result-title">Facility Directory</div><div class="search-result-meta">Resources</div></div></a>
    </div>
    <div class="search-footer">
      <span><kbd>↑↓</kbd> Navigate</span>
      <span><kbd>Enter</kbd> Open</span>
      <span><kbd>Esc</kbd> Close</span>
    </div>
  </div>
</div>
    `;
  },

  footerHTML(depth = 0) {
    const p = this.pathPrefix(depth);
    return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="${p}index.html" class="nav-logo" style="margin-bottom:var(--sp-4);display:inline-flex">
          <div class="nav-logo-mark">F</div>
          <div class="nav-logo-text">
            <span class="nav-logo-title">FIRE</span>
            <span class="nav-logo-sub">NIT Trichy</span>
          </div>
        </a>
        <p class="footer-brand-desc">FIRE is NITT's entrepreneurship coordination platform — connecting students, faculty, alumni, and industry through a single access point for innovation, collaboration, and venture development.</p>
        <div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-5);">
          <div class="footer-badge"><div class="footer-badge-dot"></div> Platform active</div>
        </div>
      </div>
      <div>
        <div class="footer-heading">Platform</div>
        <div class="footer-links">
          <a class="footer-link" href="${p}pages/explore/faculty-projects.html">Faculty Projects</a>
          <a class="footer-link" href="${p}pages/explore/club-projects.html">Club Projects</a>
          <a class="footer-link" href="${p}pages/explore/challenges.html">Industry Challenges</a>
          <a class="footer-link" href="${p}pages/explore/mentors.html">Mentor Directory</a>
          <a class="footer-link" href="${p}pages/explore/startups.html">Startup Directory</a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Resources</div>
        <div class="footer-links">
          <a class="footer-link" href="${p}pages/resources/processes.html">Process Repository</a>
          <a class="footer-link" href="${p}pages/resources/facilities.html">Facility Directory</a>
          <a class="footer-link" href="${p}pages/resources/funding.html">Funding Finder</a>
          <a class="footer-link" href="${p}pages/resources/ip-legal.html">IP & Legal</a>
          <a class="footer-link" href="${p}pages/resources/templates.html">Templates</a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Institution</div>
        <div class="footer-links">
          <a class="footer-link" href="${p}pages/about/index.html">About FIRE</a>
          <a class="footer-link" href="${p}pages/programmes/index.html">Programmes</a>
          <a class="footer-link" href="${p}pages/my-fire/index.html">My FIRE</a>
          <a class="footer-link" href="${p}pages/admin/index.html">Admin Panel</a>
          <a class="footer-link" href="${p}pages/about/index.html#contact">Contact</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copyright">© 2026 FIRE — NIT Trichy. All information is subject to institutional approval and verification.</div>
      <div class="footer-social">
        <a class="footer-social-link" href="#" title="LinkedIn">in</a>
        <a class="footer-social-link" href="#" title="Twitter">𝕏</a>
        <a class="footer-social-link" href="#" title="Instagram">ig</a>
      </div>
    </div>
  </div>
</footer>
    `;
  },

  // CSS links for all pages
  cssLinks(depth = 0) {
    const p = this.pathPrefix(depth);
    return `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${p}src/css/globals.css">
    <link rel="stylesheet" href="${p}src/css/nav.css">
    <link rel="stylesheet" href="${p}src/css/pages.css">
    `;
  },

  // Scripts for all pages
  scripts(depth = 0) {
    const p = this.pathPrefix(depth);
    return `
    <script src="${p}src/data/mock-data.js"><\/script>
    <script src="${p}src/js/main.js"><\/script>
    `;
  },

  // Full page wrapper — call at document start
  init(depth = 0) {
    // Inject nav + footer
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = this.navHTML(depth);
    if (footerPlaceholder) footerPlaceholder.outerHTML = this.footerHTML(depth);
  }
};
