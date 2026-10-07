(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.querySelector('#year');
  const video = document.querySelector('#hero-video');
  const fallback = document.querySelector('#hero-fallback');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('is-open');
  }));

  // Vídeo local: mantenha a imagem placeholder visível se o arquivo não carregar,
  // o autoplay for bloqueado ou o dispositivo preferir movimento reduzido.
  const showFallback = () => {
    video?.classList.remove('is-ready');
    if (fallback) fallback.hidden = false;
  };
  const showVideo = () => {
    if (fallback) fallback.hidden = true;
    video?.classList.add('is-ready');
  };
  if (video && !reducedMotion) {
    video.addEventListener('canplay', async () => {
      try {
        await video.play();
        showVideo();
      } catch {
        showFallback();
      }
    });
    video.addEventListener('error', showFallback);
    video.load();
  }

  // Cards: revela uma explicação curta sem inserir condições comerciais novas.
  document.querySelectorAll('.plan-more').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.querySelector('span').textContent = expanded ? '+' : '−';
      panel.hidden = expanded;
      button.firstChild.textContent = expanded ? 'Ver detalhes ' : 'Ocultar detalhes ';
    });
  });

  // FAQ accordion: somente uma resposta fica aberta; altura é animada sem pop-up.
  const faqButtons = [...document.querySelectorAll('.faq-question')];
  const closeFaq = (button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel || button.getAttribute('aria-expanded') !== 'true') return;
    button.setAttribute('aria-expanded', 'false');
    button.querySelector('span').textContent = '+';
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => { panel.style.maxHeight = '0px'; });
    window.setTimeout(() => { if (button.getAttribute('aria-expanded') === 'false') panel.hidden = true; }, 340);
  };
  faqButtons.forEach((button) => button.addEventListener('click', () => {
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    faqButtons.forEach(closeFaq);
    if (wasOpen) return;
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', 'true');
    button.querySelector('span').textContent = '−';
    panel.hidden = false;
    panel.style.maxHeight = '0px';
    requestAnimationFrame(() => { panel.style.maxHeight = `${panel.scrollHeight}px`; });
  }));

  // Entrada sutil na viewport; conteúdo continua visível se IntersectionObserver não existir.
  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
