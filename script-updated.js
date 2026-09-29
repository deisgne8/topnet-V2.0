const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const servicesButton = document.querySelector('.services-link');
const servicesMenu = document.querySelector('.services-menu');
const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('.language-menu');
const languageOptions = document.querySelectorAll('.language-option');
const siteCursor = document.querySelector('.site-cursor');

if (siteCursor && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let renderedX = cursorX;
  let renderedY = cursorY;
  let cursorFrame = null;

  const renderCursor = () => {
    renderedX += (cursorX - renderedX) * 0.22;
    renderedY += (cursorY - renderedY) * 0.22;
    siteCursor.style.left = `${renderedX.toFixed(2)}px`;
    siteCursor.style.top = `${renderedY.toFixed(2)}px`;
    cursorFrame = requestAnimationFrame(renderCursor);
  };

  const startCursor = () => {
    siteCursor.classList.add('is-visible');
    if (cursorFrame === null) cursorFrame = requestAnimationFrame(renderCursor);
  };

  document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    startCursor();
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    siteCursor.classList.remove('is-visible');
  });

  document.addEventListener('mouseover', (event) => {
    siteCursor.classList.toggle('is-hovering', Boolean(event.target.closest('a, button, input, textarea, .service-icon, .cloud-node, .feature-card, .insight-card')));
  });
}

const serviceContent = {
  connectivity: ['Connectivity Services', 'Internet Connectivity', 'Data Connectivity', 'SD-WAN Connectivity', 'VPN Connectivity'],
  clouding: ['Clouding Services', 'Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Cloud Migration'],
  hosting: ['Hosting Services', 'Managed Hosting', 'Dedicated Servers', 'Business Continuity', 'Backup Services'],
  colocation: ['Co-Location Services', 'Rack Colocation', 'Private Cages', 'Cross Connects', 'Remote Hands'],
  cybersecurity: ['Cybersecurity Services', 'Security Operations', 'Threat Monitoring', 'Vulnerability Management', 'Incident Response'],
  security: ['Security Services', 'Network Security', 'Endpoint Security', 'Identity Management', 'Security Assessment'],
  professional: ['Professional Services', 'Infrastructure Consulting', 'Solution Architecture', 'Implementation Services', 'Technical Advisory'],
  managed: ['Managed Services', 'Managed Network', 'Managed Cloud', 'Managed Security', 'Service Management'],
};

const setServicesMenu = (open) => {
  servicesButton?.setAttribute('aria-expanded', String(open));
  servicesMenu?.setAttribute('aria-hidden', String(!open));
  servicesMenu?.classList.toggle('open', open);
};

const setLanguageMenu = (open) => {
  languageButton?.setAttribute('aria-expanded', String(open));
  languageMenu?.setAttribute('aria-hidden', String(!open));
  languageMenu?.classList.toggle('open', open);
};

servicesButton?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setServicesMenu(servicesButton.getAttribute('aria-expanded') !== 'true');
});

servicesButton?.addEventListener('mouseenter', () => {
  if (window.innerWidth > 1000) setServicesMenu(true);
});

document.querySelector('.site-header')?.addEventListener('mouseleave', () => {
  if (window.innerWidth > 1000) setServicesMenu(false);
});

languageButton?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setLanguageMenu(languageButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.services-menu') && !event.target.closest('.services-link')) setServicesMenu(false);
  if (!event.target.closest('.language-dropdown')) setLanguageMenu(false);
});

languageOptions.forEach((option) => {
  option.addEventListener('click', () => {
    languageOptions.forEach((item) => item.classList.toggle('active', item === option));
    languageButton.childNodes[0].textContent = `${option.dataset.lang.toUpperCase()} `;
    document.documentElement.lang = option.dataset.lang;
    setLanguageMenu(false);
  });
});

document.querySelectorAll('.service-category').forEach((category) => {
  const activateCategory = () => {
    const content = serviceContent[category.dataset.service];
    if (!content) return;
    document.querySelectorAll('.service-category').forEach((item) => {
      const selected = item === category;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    const detail = servicesMenu.querySelector('.service-detail');
    detail.querySelector('h2').textContent = content[0];
    detail.querySelectorAll('.service-capabilities a').forEach((link, index) => {
      link.childNodes[0].textContent = `${content[index + 1]} `;
    });
  };
  category.addEventListener('click', activateCategory);
  category.addEventListener('mouseenter', activateCategory);
});

document.querySelectorAll('.contact-select-field').forEach((field) => {
  const trigger = field.querySelector('.contact-select-trigger');
  const menu = field.querySelector('.contact-select-menu');
  const input = field.querySelector('input[type="hidden"]');
  const valueLabel = field.querySelector('.contact-select-value');
  const options = field.querySelectorAll('.contact-select-menu button');

  const setOpen = (open) => {
    field.classList.toggle('is-open', open);
    trigger?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-hidden', String(!open));
  };

  trigger?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!field.classList.contains('is-open'));
  });

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      const value = option.dataset.value;
      input.value = value;
      valueLabel.textContent = value;
      options.forEach((item) => item.classList.toggle('active', item === option));
      setOpen(false);
    });
  });

  document.addEventListener('click', (event) => {
    if (!field.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
});

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('open');
};

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    setServicesMenu(false);
    setLanguageMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) closeMenu();
  setServicesMenu(false);
  setLanguageMenu(false);
});

const enquiryForm = document.querySelector('.contact-form');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});

const partnersSection = document.querySelector('.partners');

if (partnersSection && 'IntersectionObserver' in window) {
  partnersSection.classList.add('orbit-ready');
  const partnerObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    partnersSection.classList.add('is-visible');
    observer.unobserve(partnersSection);
  }, { threshold: 0.2 });

  partnerObserver.observe(partnersSection);
}

const statisticNumbers = document.querySelectorAll('.stat-card strong');
const performanceSection = document.querySelector('.performance');
const performanceCards = document.querySelectorAll('.performance .stat-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

performanceCards.forEach((card, index) => {
  card.style.setProperty('--stat-delay', `${index * 110}ms`);
});

const animateStatistic = (element) => {
  const numberNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (!numberNode) return;

  const original = numberNode.textContent.trim();
  const target = Number(original.replace(/,/g, ''));
  if (!Number.isFinite(target)) return;

  const decimals = original.includes('.') ? original.split('.')[1].length : 0;
  const integerWidth = original.split('.')[0].replace(/,/g, '').length;
  const duration = 1800;
  const startedAt = performance.now();
  element.setAttribute('aria-label', element.textContent.trim());

  const render = (value) => {
    const fixed = value.toFixed(decimals);
    const [integerPart, decimalPart] = fixed.split('.');
    const paddedInteger = integerPart.padStart(integerWidth, '0');
    const groupedInteger = paddedInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    numberNode.textContent = decimalPart === undefined
      ? groupedInteger
      : `${groupedInteger}.${decimalPart}`;
  };

  if (reducedMotion) {
    render(target);
    return;
  }

  render(0);
  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    render(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

if ('IntersectionObserver' in window) {
  const statisticsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateStatistic(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.45 });

  statisticNumbers.forEach((number) => statisticsObserver.observe(number));
} else {
  statisticNumbers.forEach(animateStatistic);
}

if (!reducedMotion && performanceSection && 'IntersectionObserver' in window) {
  const performanceObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    performanceSection.classList.add('is-visible');
    observer.unobserve(performanceSection);
  }, { threshold: 0.22 });

  performanceObserver.observe(performanceSection);
} else {
  performanceSection?.classList.add('is-visible');
}

const heroGraph = document.querySelector('.infrastructure');
const heroCloud = document.querySelector('.cloud-art');

if (!reducedMotion && heroGraph && heroCloud) {
  let depthFrame = null;

  const updateHeroDepth = () => {
    depthFrame = null;
    const rect = heroGraph.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const depthY = (clamped - 0.5) * 34;
    heroCloud.style.setProperty('--hero-depth-y', `${depthY.toFixed(2)}px`);
  };

  const requestHeroDepth = () => {
    if (depthFrame !== null) return;
    depthFrame = requestAnimationFrame(updateHeroDepth);
  };

  updateHeroDepth();
  window.addEventListener('scroll', requestHeroDepth, { passive: true });
  window.addEventListener('resize', requestHeroDepth);
}

// Keep every ambient loop tied to the section currently on screen. This mirrors
// the prototype playback and prevents later scenes from completing off canvas.
if (!reducedMotion && 'IntersectionObserver' in window) {
  const motionScenes = document.querySelectorAll('.hero, .about, .cloud-platform, .clients, .partners, .contact');
  const sceneMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
    });
  }, { rootMargin: '12% 0px 12% 0px', threshold: 0.01 });

  motionScenes.forEach((scene) => sceneMotionObserver.observe(scene));
}

const revealMotionDisabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!revealMotionDisabled && 'IntersectionObserver' in window) {
  const revealSelectors = [
    '.performance', '.about', '.why', '.cloud-platform', '.clients', '.partners', '.insights', '.contact',
    '.site-header', '.hero-copy',
    '.section-heading .pill', '.section-heading h2', '.section-heading p', '.section-heading .section-cta',
    '.stat-card',
    '.about-copy .pill', '.about-copy h2', '.about-copy p', '.about-copy .mini-cta',
    '.feature-card',
    '.cloud-heading .pill', '.cloud-heading h2', '.cloud-heading p', '.cloud-button',
    '.footer-brand', '.footer-column', '.footer-connect', '.footer-bottom',
    '.client-marquee',
    '.insight-card',
    '.partner-copy .pill', '.partner-copy h2', '.partner-copy p',
    '.contact-wrap .pill', '.contact-wrap h2', '.contact-wrap > p', '.contact-form', '.site-footer',
  ];
  const fadeSelectors = ['.infrastructure', '.about-molecule-single', '.cloud-network', '.partner-orbits'];
  const revealItems = document.querySelectorAll(revealSelectors.join(','));
  const fadeItems = document.querySelectorAll(fadeSelectors.join(','));

  revealItems.forEach((item, index) => {
    item.classList.add('reveal-item');
    if (item.matches('.performance, .about, .why, .cloud-platform, .clients, .partners, .insights, .contact')) {
      item.classList.add('section-enter');
    }
    if (item.matches('.pill')) item.classList.add('reveal-step-1');
    else if (item.matches('h2')) item.classList.add('reveal-step-2');
    else if (item.matches('p')) item.classList.add('reveal-step-3');
    else if (item.matches('.mini-cta, .section-cta, .button')) item.classList.add('reveal-step-4');
    else if (item.matches('.stat-card, .feature-card, .insight-card')) item.classList.add('reveal-step-card');
    else if (item.matches('.infrastructure, .cloud-network, .client-marquee, .partner-orbits, .partner-copy, .contact-form')) item.classList.add('reveal-step-visual');
  });
  fadeItems.forEach((item) => item.classList.add('reveal-item', 'reveal-fade', 'reveal-step-visual'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  [...revealItems, ...fadeItems].forEach((item) => revealObserver.observe(item));
}
