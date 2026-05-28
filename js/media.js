// =============================================
// FALLEN SOULS - MEDIA JS
// =============================================

document.addEventListener('DOMContentLoaded', async () => {
  await loadHeader();
  initHeaderUi();
  initMediaUi();
});

async function loadHeader() {
  const mount = document.getElementById('headerMount');
  if (!mount) return;

  try {
    const response = await fetch('header.html', { cache: 'no-store' });
    if (!response.ok) throw new Error('No se pudo cargar header.html');
    mount.innerHTML = await response.text();
  } catch (error) {
    console.error('Error cargando el header:', error);
  }
}

function initHeaderUi() {
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
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

function initMediaUi() {
  initFadeIn();
  initFilters();
  initModal();
}

function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), idx * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.gallery-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter || 'all';

      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cat = card.dataset.cat || '';
        const kind = card.dataset.kind || '';
        const show = filter === 'all' || cat === filter || (filter === 'video' && kind === 'video');
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function initModal() {
  const modal = document.getElementById('mediaModal');
  const closeBtn = document.getElementById('mediaModalClose');
  const viewer = document.getElementById('mediaModalViewer');
  const titleEl = document.getElementById('mediaModalTitle');
  const descEl = document.getElementById('mediaModalDesc');
  const tagEl = document.getElementById('mediaModalTag');
  const externalEl = document.getElementById('mediaModalExternal');
  const cards = document.querySelectorAll('.gallery-card');

  if (!modal || !viewer || !titleEl || !descEl || !tagEl || !externalEl) return;

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    viewer.innerHTML = '';
  }

  function openModal(card) {
    const kind = card.dataset.kind || 'image';
    const title = card.dataset.title || 'Contenido';
    const desc = card.dataset.desc || '';
    const cat = (card.dataset.cat || 'media').toUpperCase();

    titleEl.textContent = title;
    descEl.textContent = desc;
    tagEl.textContent = cat;
    viewer.innerHTML = '';

    if (kind === 'video') {
      const videoId = card.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = title;
      viewer.appendChild(iframe);

      externalEl.href = `https://youtu.be/${videoId}`;
      externalEl.classList.remove('is-hidden');
    } else {
      const src = card.dataset.src;
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      viewer.appendChild(img);

      externalEl.href = '#';
      externalEl.classList.add('is-hidden');
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => openModal(card));
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.close === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
