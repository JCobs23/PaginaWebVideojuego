// =============================================
// FALLEN SOULS — HOME JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Progress ──────────────────────
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
  }

  // ── Nav Toggle ────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Hero Particles ─────────────────────────
  const container = document.getElementById('heroParticles');
  if (container) {
    function createParticle() {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const duration = Math.random() * 8 + 5;
      const delay = Math.random() * 6;
      const hue = Math.random() > 0.5 ? '#6b4ad6' : '#4a6bd6';
      p.style.cssText = `
        left: ${x}%;
        bottom: ${Math.random() * 20}%;
        width: ${size}px;
        height: ${size}px;
        background: ${hue};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        box-shadow: 0 0 ${size * 3}px ${hue};
      `;
      container.appendChild(p);
    }
    for (let i = 0; i < 35; i++) createParticle();
    // Recycle particles every 15s
    setInterval(() => {
      const old = container.querySelectorAll('.particle');
      old.forEach(p => p.remove());
      for (let i = 0; i < 35; i++) createParticle();
    }, 15000);
  }

  // ── Fade-in on Scroll ──────────────────────
  const fadeEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.children].filter(c => c.classList.contains('fade-in') || c.classList.contains('fade-in-left') || c.classList.contains('fade-in-right'))
          : [];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.08) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ── Hero Content Entrance ─────────────────
  const heroContent = document.getElementById('heroContent');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  // ── Parallax on Scroll ────────────────────
  function handleParallax() {
    const scrollY = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    const heroGrid = document.querySelector('.hero-grid');
    if (heroGrid) {
      heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  }

  // ── Scroll handler ────────────────────────
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleParallax();
  }, { passive: true });

  updateScrollProgress();

  // ── Character cards glow on hover ─────────
  document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('mouseenter', e => {
      const { left, top, width, height } = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - left) / width * 100) + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - top) / height * 100) + '%');
    });
  });

  // ── Smooth scroll for anchor links ────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')) || 68;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
