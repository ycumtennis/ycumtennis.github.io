(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.menu-toggle');

  const syncHeader = () => {
    if (!header) return;
    if (window.scrollY > 12 || !document.querySelector('.hero')) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach(el => observer.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('show'));
  }
})();
