// =============================================
// FALLEN SOULS - DESARROLLO JS v2
// =============================================

document.addEventListener('DOMContentLoaded', async () => {
  await loadHeader();
  initHeaderUi();
  initDesarrolloUi();
});

async function loadHeader() {
  const mount = document.getElementById('headerMount');
  if (!mount) return;

  try {
    const response = await fetch('header.html', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('No se pudo cargar header.html');
    }
    mount.innerHTML = await response.text();
  } catch (error) {
    console.error('Error cargando el header:', error);
  }
}

function initHeaderUi() {
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
  }

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    const currentPage = (window.location.pathname.split('/').pop() || 'home.html').toLowerCase();
    navLinks.querySelectorAll('a').forEach((link) => {
      const href = (link.getAttribute('href') || '').split('?')[0].toLowerCase();
      link.classList.toggle('active', href === currentPage);
    });
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
}

function initDesarrolloUi() {
  // Progress bar
  const completedWeeks = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const totalWeeks = 13;
  const pct = Math.round((completedWeeks.length / totalWeeks) * 100);

  const fill = document.getElementById('progressFill');
  const pctEl = document.getElementById('progressPct');

  if (fill) {
    setTimeout(() => {
      fill.style.width = pct + '%';
    }, 400);
  }

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

  // Tabs
  const tabButtons = document.querySelectorAll('.week-tab');
  const panels = document.querySelectorAll('.week-panel');

  function activateTab(weekNum) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.week === String(weekNum));
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === String(weekNum));
    });

    const activeBtn = document.querySelector(`.week-tab[data-week="${weekNum}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => activateTab(btn.dataset.week));
  });

  // Footer jump links
  document.querySelectorAll('[data-jump]').forEach((a) => {
    a.addEventListener('click', (e) => {
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

  // URL hash direct week
  const hash = window.location.hash;
  if (hash && hash.startsWith('#week')) {
    activateTab(hash.replace('#week', ''));
  }

  // Re-trigger animation when switching tabs
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      if (m.target.classList.contains('active')) {
        m.target.style.animation = 'none';
        m.target.offsetHeight;
        m.target.style.animation = '';
      }
    });
  });

  panels.forEach((p) => observer.observe(p, { attributes: true, attributeFilter: ['class'] }));
}
