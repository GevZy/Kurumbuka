/* ============================================================
   KURUMBUKA — MAIN JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav Scroll ─────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  function updateNav() {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Mobile Menu ────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  const mobileClose = document.querySelector('.nav__mobile-close');

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  mobileClose?.addEventListener('click', closeMobile);
  mobileNav?.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeMobile();
  });
  function closeMobile() {
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── Hero Slideshow ─────────────────────────────────────── */
  const slides    = document.querySelectorAll('.slide');
  const dots      = document.querySelectorAll('.slide-dot');
  const prevBtn   = document.querySelector('.slide-prev');
  const nextBtn   = document.querySelector('.slide-next');
  let current     = 0;
  let autoTimer   = null;

  function goToSlide(n) {
    slides[current]?.classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current]?.classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToSlide(current + 1), 6000);
  }

  prevBtn?.addEventListener('click', () => { goToSlide(current - 1); startAuto(); });
  nextBtn?.addEventListener('click', () => { goToSlide(current + 1); startAuto(); });
  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => { goToSlide(i); startAuto(); })
  );

  if (slides.length > 1) startAuto();

  /* ── Intersection Observer (Reveal) ─────────────────────── */
  const revealObs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── Counter Animation ───────────────────────────────────── */
  function animateCounter(el, target, duration = 1800) {
    const startTime = performance.now();
    const isLarge = target > 999;
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOut(progress) * target);
      el.textContent = isLarge ? value.toLocaleString() : value;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const span = e.target.querySelector('[data-count]');
      if (span) {
        animateCounter(span, parseInt(span.dataset.count, 10));
        counterObs.unobserve(e.target);
      }
    }),
    { threshold: 0.5 }
  );
  document.querySelectorAll('.stat-item').forEach(el => counterObs.observe(el));

});
