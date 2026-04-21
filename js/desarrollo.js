// =============================================
// FALLEN SOULS — DESARROLLO JS v2
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
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Progress Bar ─────────────────────────
  const completedWeeks = [5, 6, 7, 8, 9, 10, 11];
  const totalWeeks = 13;
  const pct = Math.round((completedWeeks.length / totalWeeks) * 100);

  const fill   = document.getElementById('progressFill');
  const pctEl  = document.getElementById('progressPct');

  if (fill) {
    setTimeout(() => {
      fill.style.width = pct + '%';
    }, 400);
  }

  // Animated counter for percentage
  if (pctEl) {
    let current = 0;
    const target = pct;
    const step = target / 40;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      pctEl.textContent = Math.round(current) + '%';
      if (current >= target) clearInterval(timer);
    }, 30);
    setTimeout(() => {
      clearInterval(timer);
      pctEl.textContent = pct + '%';
    }, 1800);
  }

  // ── Tabs ──────────────────────────────────
  const tabButtons = document.querySelectorAll('.week-tab');
  const panels     = document.querySelectorAll('.week-panel');

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

  // ── Footer jump links ─────────────────────
  document.querySelectorAll('[data-jump]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activateTab(a.dataset.jump);
      const tabsEl = document.getElementById('tabsWrapper');
      if (tabsEl) {
        const offset = 68 + 10;
        const top = tabsEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── URL hash direct week ──────────────────
  const hash = window.location.hash;
  if (hash && hash.startsWith('#week')) {
    activateTab(hash.replace('#week', ''));
  }

  // ── Intersection-based panel animation ───
  // Re-trigger animation when switching tabs
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      if (m.target.classList.contains('active')) {
        m.target.style.animation = 'none';
        m.target.offsetHeight; // reflow
        m.target.style.animation = '';
      }
    });
  });
  panels.forEach(p => observer.observe(p, { attributes: true, attributeFilter: ['class'] }));

});