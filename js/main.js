document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const handleScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  const closeBtn  = document.querySelector('.nav__mobile-close');

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.add('open');
    document.body.style.overflow = 'hidden';
    const bars = hamburger.querySelectorAll('span');
    bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  });

  const closeMobile = () => {
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
    const bars = hamburger?.querySelectorAll('span');
    if (bars) { bars[0].style.transform = ''; bars[1].style.opacity = '1'; bars[2].style.transform = ''; }
  };

  closeBtn?.addEventListener('click', closeMobile);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10), suffix = el.dataset.suffix || '', duration = 1800, start = performance.now();
    const update = (now) => {
      const p = Math.min((now - start) / duration, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const currentPage = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPage.endsWith(href) && href !== 'index.html') link.classList.add('active');
  });

  initSlideshows();
});

function initSlideshows() {
  document.querySelectorAll('.slideshow').forEach(ss => {
    const slides = ss.querySelectorAll('.slide');
    const dots   = ss.querySelectorAll('.slide-dot');
    const prevBtn = ss.querySelector('.slide-prev');
    const nextBtn = ss.querySelector('.slide-next');
    if (!slides.length) return;
    let current = 0;
    const show = (idx) => {
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      current = idx;
    };
    prevBtn?.addEventListener('click', () => show((current - 1 + slides.length) % slides.length));
    nextBtn?.addEventListener('click', () => show((current + 1) % slides.length));
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    let timer = setInterval(() => show((current + 1) % slides.length), 5500);
    ss.addEventListener('mouseenter', () => clearInterval(timer));
    show(0);
  });
}
