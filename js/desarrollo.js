// =============================================
// FALLEN SOULS — DESARROLLO JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Progress ──────────────────────
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
  }, { passive: true });

  // ── Nav Toggle ────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // ── Tabs ──────────────────────────────────
  const tabButtons = document.querySelectorAll('.week-tab');
  const panels     = document.querySelectorAll('.week-panel');

  // Progress bar based on completed weeks
  const completedWeeks = [5, 6, 7]; // Mark these as done
  const totalWeeks = 13; // weeks 5-17
  const pct = Math.round((completedWeeks.length / totalWeeks) * 100);
  const fill = document.getElementById('progressFill');
  const pctLabel = document.getElementById('progressPct');
  if (fill) {
    setTimeout(() => {
      fill.style.width = pct + '%';
      if (pctLabel) pctLabel.textContent = pct + '%';
    }, 500);
  }

  function activateTab(weekNum) {
    // Update buttons
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.week === String(weekNum));
    });
    // Update panels
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === String(weekNum));
    });
    // Scroll tab into view
    const activeBtn = document.querySelector(`.week-tab[data-week="${weekNum}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.week));
  });

  // Footer jump links
  document.querySelectorAll('[data-jump]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activateTab(a.dataset.jump);
      const tabsEl = document.getElementById('tabsHeader');
      if (tabsEl) {
        const offset = 68 + 56;
        window.scrollTo({ top: tabsEl.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  // Check URL hash for direct week access
  const hash = window.location.hash;
  if (hash && hash.startsWith('#week')) {
    const w = hash.replace('#week', '');
    activateTab(w);
  }
});
