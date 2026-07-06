/* ============================================================
   KURUMBUKA — SHARED NAV + FOOTER (injected on every inner page)
   ============================================================ */

const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <img src="assets/logo.jpg" alt="Kurumbuka mark" style="height:42px;width:auto;display:block;object-fit:contain;mix-blend-mode:screen;border-radius:2px;" />
      <div class="nav__logo-wordmark">
        <span class="nav__logo-text">Kurumbuka</span>
        <span class="nav__logo-sub">Leadership Solutions</span>
      </div>
    </a>
    <ul class="nav__links">
      <li><a href="about.html"        class="nav__link" data-page="about">About</a></li>
      <li class="nav__dropdown">
        <span class="nav__dropdown-toggle">
          Programs
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M2 3.5l3.5 3.5 3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
        <div class="nav__dropdown-menu">
          <a href="ali.html"  class="nav__dropdown-item">Abundant Leadership Institute</a>
          <a href="trek.html" class="nav__dropdown-item">Trek</a>
        </div>
      </li>
      <li><a href="get-involved.html" class="nav__link" data-page="get-involved">Get Involved</a></li>
      <li><a href="rafiki.html"       class="nav__link" data-page="rafiki">Give Monthly</a></li>
    </ul>
    <a href="https://kurumbuka.kindful.com" target="_blank" rel="noopener" class="btn btn--primary nav__cta">Donate</a>
    <button class="nav__hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="nav__mobile" role="dialog" aria-label="Navigation">
  <button class="nav__mobile-close btn btn--ghost" style="color:white;margin-bottom:28px;font-size:11px;">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    Close
  </button>
  <a href="about.html"        class="nav__mobile-link">About</a>
  <span class="nav__mobile-sub">Programs</span>
  <a href="ali.html"          class="nav__mobile-link" style="font-size:1.2rem;padding-left:20px">ALI</a>
  <a href="trek.html"         class="nav__mobile-link" style="font-size:1.2rem;padding-left:20px">Trek</a>
  <a href="get-involved.html" class="nav__mobile-link">Get Involved</a>
  <a href="rafiki.html"       class="nav__mobile-link">Give Monthly</a>
  <a href="https://kurumbuka.kindful.com" target="_blank" rel="noopener" class="btn btn--primary" style="margin-top:32px;">Donate</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo-wordmark">
          <div class="footer__logo-text-f">Kurumbuka</div>
          <span class="footer__logo-sub-f">Leadership Solutions</span>
        </div>
        <p>Developing and empowering 10,000 African leaders by 2030 through a Christ-centered approach.</p>
        <p style="margin-top:14px;font-size:0.82rem;color:rgba(255,255,255,0.35)">
          Registered Canadian Charity (72111 6713 RR 0001)<br>
          21350 88A Ave Langley, BC &nbsp;|&nbsp;
          <a href="mailto:info@kurumbuka.org" style="color:var(--orange)">info@kurumbuka.org</a>
        </p>
        <div class="footer__social">
          <a href="http://facebook.com/kurumbuka" target="_blank" rel="noopener" class="footer__social-link" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 2.667H8.667C8 2.667 7.333 3.333 7.333 4v1.333H6v2h1.333V14h2V7.333H10.667L11.333 5.333H9.333V4c0-.368.299-.667.667-.667H10V2.667z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="http://instagram.com/kurumbuka" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="2.8" stroke="currentColor" stroke-width="1.3"/><circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/66729840/" target="_blank" rel="noopener" class="footer__social-link" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M5 6.5V11M5 4.5v.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11V8.5c0-1.1.9-2 2-2s2 .9 2 2V11M8 6.5V11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          </a>
          <a href="https://www.youtube.com/@kurumbukaleadershipsolutions" target="_blank" rel="noopener" class="footer__social-link" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1.5" y="3.5" width="13" height="9" rx="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M6.5 5.5l4 2.5-4 2.5V5.5z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>
          </a>
          <a href="https://open.spotify.com/show/187tJdqu6zBaV6S35xBT5b" target="_blank" rel="noopener" class="footer__social-link" aria-label="Spotify">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3"/><path d="M5 6.5c1.8-.6 3.8-.5 5.5.3M5 8.5c1.4-.45 2.9-.4 4.2.2M5.5 10.3c1-.3 2-.25 2.9.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
      <div class="footer__col">
        <h5>What We Do</h5>
        <a href="about.html">About</a>
        <a href="ali.html">ALI</a>
        <a href="trek.html">Trek</a>
        <a href="https://www.kurumbuka.org/impact-stories"           target="_blank" rel="noopener">Impact Stories</a>
        <a href="https://www.kurumbuka.org/podcast"                  target="_blank" rel="noopener">Podcast</a>
        <a href="https://www.kurumbuka.org/african-leadership-voices" target="_blank" rel="noopener">African Leadership Voices</a>
      </div>
      <div class="footer__col">
        <h5>Who We Are</h5>
        <a href="https://www.kurumbuka.org/staff"   target="_blank" rel="noopener">Our Team</a>
        <a href="https://www.kurumbuka.org/contact" target="_blank" rel="noopener">Contact Us</a>
        <a href="https://www.kurumbuka.org/beliefs" target="_blank" rel="noopener">Our Beliefs</a>
      </div>
      <div class="footer__col">
        <h5>Get Involved</h5>
        <a href="rafiki.html">Rafiki Coalition</a>
        <a href="https://www.kurumbuka.org/church-partnerships"  target="_blank" rel="noopener">Church Partners</a>
        <a href="get-involved.html">Organizations</a>
        <a href="https://www.kurumbuka.org/vision-trip"          target="_blank" rel="noopener">Vision Trips</a>
        <a href="https://www.kurumbuka.org/events"               target="_blank" rel="noopener">Events</a>
        <a href="https://www.kurumbuka.org/pray"                 target="_blank" rel="noopener">Pray</a>
        <a href="https://www.kurumbuka.org/careers"              target="_blank" rel="noopener">Careers</a>
        <a href="https://www.kurumbuka.org/trek-for-transformation" target="_blank" rel="noopener">Trek for Transformation</a>
        <a href="https://www.kurumbuka.org/summit"               target="_blank" rel="noopener">Youth Summit</a>
      </div>
      <div class="footer__col">
        <h5>Donate</h5>
        <a href="https://www.kurumbuka.org/donate"            target="_blank" rel="noopener">Invest</a>
        <a href="https://www.kurumbuka.org/us-donate"         target="_blank" rel="noopener">US Giving</a>
        <a href="https://kurumbuka.kindful.com/users/sign_in" target="_blank" rel="noopener">Donor Sign-In</a>
        <a href="https://www.kurumbuka.org/finances"          target="_blank" rel="noopener">Finances</a>
        <a href="https://www.kurumbuka.org/scholarship-surge" target="_blank" rel="noopener">Scholarships</a>
        <h5 style="margin-top:24px">Students</h5>
        <a href="https://kurumbuka.pathwright.com/auth/sign-in/?next=%2Fdashboard%2F" target="_blank" rel="noopener">Student Portal</a>
        <a href="https://www.kurumbuka.org/connectivity"              target="_blank" rel="noopener">Connectivity Hubs</a>
        <a href="https://www.kurumbuka.org/frequently-asked-questions" target="_blank" rel="noopener">ALI FAQ</a>
        <a href="https://www.kurumbuka.org/trek-faq"                  target="_blank" rel="noopener">Trek FAQ</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2025 Kurumbuka Leadership Solutions. All rights reserved.</span>
      <span>Accredited through Trinity Western University</span>
      <div style="display:flex;gap:20px">
        <a href="https://www.kurumbuka.org/terms-of-service" target="_blank" rel="noopener">Terms</a>
        <a href="https://www.kurumbuka.org/privacy-policy"   target="_blank" rel="noopener">Privacy</a>
      </div>
    </div>
  </div>
</footer>`;

(function inject() {
  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl)    navEl.outerHTML    = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  const page = document.body.dataset.page;
  if (page) document.querySelectorAll(`.nav__link[data-page="${page}"]`).forEach(l => l.classList.add('active'));
})();
