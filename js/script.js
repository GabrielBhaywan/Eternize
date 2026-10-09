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

  // Inicia o vídeo quando houver dados disponíveis e mantém a imagem se a reprodução falhar.
  const showFallback = () => {
    video?.classList.remove('is-ready');
    if (fallback) fallback.hidden = false;
  };
  const showVideo = () => {
    if (fallback) fallback.hidden = true;
    video?.classList.add('is-ready');
  };
  const playHeroVideo = () => {
    if (!video) return;
    video.play().then(showVideo).catch(showFallback);
  };
  if (video) {
    video.addEventListener('canplay', playHeroVideo, { once: true });
    video.addEventListener('error', showFallback);
    video.addEventListener('stalled', showFallback, { once: true });
    video.load();
    if (video.readyState >= 3) playHeroVideo();
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

  // Carrossel horizontal de categorias DU: swipe nativo, botoes e teclado.
  document.querySelectorAll('[data-benefits-carousel]').forEach((carousel) => {
    const viewport = carousel.querySelector('[data-benefits-viewport]');
    const cards = [...carousel.querySelectorAll('[data-benefit-item]')];
    const previous = carousel.querySelector('[data-benefits-prev]');
    const next = carousel.querySelector('[data-benefits-next]');
    const counter = carousel.querySelector('[data-benefits-counter]');
    const progress = carousel.querySelector('[data-benefits-progress]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let scrollFrame = 0;

    cards.forEach((card) => {
      const image = card.querySelector('.benefit-card-image img');
      const placeholder = card.querySelector('.benefit-image-placeholder');
      if (!image) return;
      image.addEventListener('load', () => {
        if (image.naturalWidth > 0) {
          image.hidden = false;
          if (placeholder) placeholder.hidden = true;
        }
      });
      image.addEventListener('error', () => {
        image.hidden = true;
        if (placeholder) placeholder.hidden = false;
      });
      if (image.complete) {
        if (image.naturalWidth > 0) {
          image.hidden = false;
          if (placeholder) placeholder.hidden = true;
        } else {
          image.hidden = true;
          if (placeholder) placeholder.hidden = false;
        }
      }
    });

    const metrics = () => {
      const cardWidth = cards[0]?.getBoundingClientRect().width || 1;
      const track = carousel.querySelector('[data-benefits-track]');
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = cardWidth + gap;
      const maxIndex = Math.max(0, cards.length - Math.max(1, Math.floor((viewport.clientWidth + gap) / step)));
      const currentIndex = Math.max(0, Math.min(maxIndex, Math.round(viewport.scrollLeft / step)));
      return { step, maxIndex, currentIndex };
    };
    const update = () => {
      const { step, maxIndex, currentIndex } = metrics();
      const visibleCount = Math.max(1, Math.floor((viewport.clientWidth + (step - cards[0].getBoundingClientRect().width)) / step));
      const lastVisible = Math.min(cards.length, currentIndex + visibleCount);
      if (previous) previous.disabled = currentIndex <= 0;
      if (next) next.disabled = currentIndex >= maxIndex;
      if (counter) counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} - ${String(lastVisible).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
      if (progress) progress.style.width = `${maxIndex === 0 ? 100 : (currentIndex / maxIndex) * 100}%`;
    };
    const move = (direction) => {
      const { step, maxIndex, currentIndex } = metrics();
      const targetIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
      viewport.scrollTo({ left: targetIndex * step, behavior: reducedMotion ? 'auto' : 'smooth' });
    };
    previous?.addEventListener('click', () => move(-1));
    next?.addEventListener('click', () => move(1));
    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(update);
    }, { passive: true });
    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    });
    window.addEventListener('resize', update);
    update();
  });

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
