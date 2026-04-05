// =============================================
// FALLEN SOULS — MEDIA JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // Scroll + Nav
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    if (scrollProgress) {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = pct + '%';
    }
  }, { passive: true });

  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // ── Filter ──────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) {
          item.style.animation = 'none';
          item.offsetHeight; // reflow
          item.style.animation = '';
        }
      });
    });
  });

  // ── Fade-in ─────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  // ── Lightbox ─────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxBody = document.getElementById('lightboxBody');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return [...document.querySelectorAll('.gallery-item:not([style*="display: none"])')]
      .filter(el => el.style.display !== 'none');
  }

  function openLightbox(item) {
    visibleItems = getVisibleItems();
    currentIndex = visibleItems.indexOf(item);
    showItem(currentIndex);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function showItem(idx) {
    const item = visibleItems[idx];
    if (!item) return;
    const cap = item.dataset.caption || '';
    lightboxCaption.textContent = cap;
    // Clone the placeholder content for display
    const placeholder = item.querySelector('.item-placeholder');
    if (placeholder) {
      lightboxBody.innerHTML = '';
      const clone = placeholder.cloneNode(true);
      clone.style.cssText = 'width:100%;height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;font-size:4rem;border-radius:4px;border:1px solid rgba(106,74,214,0.3);';
      lightboxBody.appendChild(clone);
    }
    // Update nav visibility
    lightboxPrev.style.visibility = idx > 0 ? 'visible' : 'hidden';
    lightboxNext.style.visibility = idx < visibleItems.length - 1 ? 'visible' : 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); currentIndex--; showItem(currentIndex); });
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); currentIndex++; showItem(currentIndex); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; showItem(currentIndex); }
    if (e.key === 'ArrowRight' && currentIndex < visibleItems.length - 1) { currentIndex++; showItem(currentIndex); }
  });

});
