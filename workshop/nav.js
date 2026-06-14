(() => {
  const jump = document.querySelector('.block-jump');
  if (!jump) return;

  const links = Array.from(jump.querySelectorAll('a[data-section]'));
  if (!links.length) return;

  const activate = (section) => {
    links.forEach((link) => {
      const active = link.dataset.section === section;
      link.classList.toggle('current', active);
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const fallback = jump.querySelector('a.current')?.dataset.section || 'overview';
  activate(fallback);

  if (!document.body.classList.contains('page-type-block-index')) return;

  const sections = [
    ['working-order', 'overview'],
    ['listening-programme', 'listening'],
    ['labs', 'labs'],
    ['replication-lessons', 'rep'],
    ['capstone', 'capstone'],
  ]
    .map(([id, section]) => [document.getElementById(id), section])
    .filter(([el]) => el);

  if (!sections.length) return;

  const update = () => {
    const offset = jump.getBoundingClientRect().height + 26;
    let active = sections[0][1];

    for (const [el, section] of sections) {
      if (el.getBoundingClientRect().top - offset <= 0) {
        active = section;
      }
    }

    activate(active);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('hashchange', () => requestAnimationFrame(update));
})();
