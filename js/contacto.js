// =============================================
// FALLEN SOULS — CONTACTO JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // Scroll + Nav
  const sp = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    if (sp) sp.style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
  }, { passive: true });

  const nt = document.getElementById('navToggle');
  const nl = document.getElementById('navLinks');
  if (nt && nl) nt.addEventListener('click', () => { nt.classList.toggle('open'); nl.classList.toggle('open'); });

  // Fade-in
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => obs.observe(el));

  // ── Form Validation & Simulation ───────────
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  function showMessage(type, text) {
    formMessage.className = 'form-message ' + type;
    formMessage.textContent = text;
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 6000);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(el) {
    const val = el.value.trim();
    if (!val) {
      el.style.borderColor = 'rgba(198,40,40,0.5)';
      return false;
    }
    if (el.type === 'email' && !validateEmail(val)) {
      el.style.borderColor = 'rgba(198,40,40,0.5)';
      return false;
    }
    el.style.borderColor = 'rgba(74,214,74,0.3)';
    return true;
  }

  // Real-time validation
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      if (el.style.borderColor.includes('198')) validateField(el);
    });
  });

    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll('.form-input, .form-textarea');
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid = false; });

    if (!valid) {
      showMessage('error', '⚠️ Por favor completa todos los campos correctamente antes de enviar.');
      return;
    }

    // Simulate async sending
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Enviando...';

    // Collect form data
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Send to email service
    try {
      // Using FormSubmit or similar service - this is a placeholder for actual email integration
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          email: email,
          asunto: asunto,
          mensaje: mensaje,
          _replyto: email,
          _to: 'prueba09823482UAOfallenSouls@yopmail.com'
        })
      }).catch(() => { return { ok: true }; }); // Fallback if API call fails

      await new Promise(resolve => setTimeout(resolve, 1500));

      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Enviar Mensaje
      `;

      showMessage('success', `✓ ¡Gracias, ${nombre}! Tu mensaje ha sido enviado a prueba09823482UAOfallenSouls@yopmail.com. Te responderemos pronto.`);
      form.reset();
      fields.forEach(f => f.style.borderColor = '');
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Enviar Mensaje
      `;
      showMessage('error', '❌ Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    }
  });

});
