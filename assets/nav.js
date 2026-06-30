/* HowardAI — Shared Navigation JS */

/* Password gate */
(function () {
  if (sessionStorage.getItem('hw_auth') !== '1') {
    window.location.replace('/password.html');
  }
})();

(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.querySelector('i').className = isOpen ? 'ti ti-x' : 'ti ti-menu-2';
    });

    // Close on link tap
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.querySelector('i').className = 'ti ti-menu-2';
      });
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
