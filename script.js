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
  clouding: ['Clouding Services', 'Rayadah Cloud', 'Public Clouds'],
  hosting: ['Hosting Services', 'Web Hosting', 'Email Hosting', 'DNS Hosting', 'Saudi Domain Registration'],
  colocation: ['Co-Location Services', 'Secured Cage', 'Dedicated Rack', 'Shared Rack', 'Bare Metal Servers'],
  cybersecurity: ['Cybersecurity Services', 'Managed Security', 'Security Consulting'],
  security: ['Security Services', 'Network Security', 'Endpoint Security', 'Identity Security', 'Data Security'],
  professional: ['Professional Services', 'Collaboration', 'Low Current', 'IT Consulting', 'Infrastructure Projects'],
  managed: ['Managed Services', 'Infrastructure', 'Cybersecurity', 'Service Desk'],
};

const serviceRoutes = {
  'Internet Connectivity': 'Internet%20Connectivity.html',
  'Data Connectivity': 'Data%20Connectivity.html',
  'SD-WAN Connectivity': 'services.html#connectivity-services',
  'VPN Connectivity': 'services.html#connectivity-services',
  'Rayadah Cloud': 'Rayadah%20Cloud.html',
  'Public Clouds': 'Public%20Clouds.html',
  'Web Hosting': 'Web%20Hosting.html',
  'Email Hosting': 'services.html#hosting-services',
  'DNS Hosting': 'services.html#hosting-services',
  'Saudi Domain Registration': 'Saudi%20Domain%20Registration.html',
  'Secured Cage': 'Secured%20Cage.html',
  'Dedicated Rack': 'services.html#colocation-services',
  'Shared Rack': 'services.html#colocation-services',
  'Bare Metal Servers': 'services.html#colocation-services',
};

const serviceCategoryRoutes = {
  connectivity: 'services.html#connectivity-services',
  clouding: 'services.html#clouding-services',
  hosting: 'services.html#hosting-services',
  colocation: 'services.html#colocation-services',
  cybersecurity: 'services.html#cybersecurity-services',
  security: 'services.html#security-services',
  professional: 'services.html#professional-services',
  managed: 'services.html#managed-services',
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
      const capability = content[index + 1];
      link.style.display = capability ? '' : 'none';
      if (capability) {
        link.childNodes[0].textContent = `${capability} `;
        link.href = serviceRoutes[capability] || 'services.html#service-catalog';
      }
    });
    const categoryOverview = detail.querySelector('.category-overview');
    if (categoryOverview) categoryOverview.href = serviceCategoryRoutes[category.dataset.service] || 'services.html#service-catalog';
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

const rayadahCalculator = document.querySelector('.rayadah-calculator');

if (rayadahCalculator) {
  const billingButtons = rayadahCalculator.querySelectorAll('[data-billing]');
  const priceFields = rayadahCalculator.querySelectorAll('[data-price-field]');
  const priceOutput = rayadahCalculator.querySelector('[data-price-output]');
  const equivalentOutput = rayadahCalculator.querySelector('[data-equivalent-output]');
  const billingOutput = rayadahCalculator.querySelector('[data-billing-output]');
  const basePrice = Number(rayadahCalculator.dataset.basePrice || 0);
  let billingPeriod = 'monthly';

  const formatPrice = (value) => Math.round(value).toLocaleString('en-US');

  const updateRayadahEstimate = () => {
    const configuredPrice = basePrice + Array.from(priceFields).reduce((total, field) => total + Number(field.value || 0), 0);
    const equivalentMonthly = billingPeriod === 'annual' ? configuredPrice * 0.9 : configuredPrice;
    priceOutput.textContent = formatPrice(equivalentMonthly);
    equivalentOutput.textContent = formatPrice(equivalentMonthly);
    billingOutput.textContent = billingPeriod === 'annual' ? 'Annual' : 'Monthly';
  };

  billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      billingPeriod = button.dataset.billing;
      billingButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
      updateRayadahEstimate();
    });
  });

  priceFields.forEach((field) => field.addEventListener('change', updateRayadahEstimate));
  updateRayadahEstimate();
}

document.querySelectorAll('.rayadah-faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.rayadah-faq');
    const isOpen = item.classList.toggle('is-open');
    question.setAttribute('aria-expanded', String(isOpen));
    const marker = question.querySelector('span');
    if (marker) marker.textContent = isOpen ? '−' : '+';
  });
});

document.querySelectorAll('.internet-faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.internet-faq-item');
    const isOpen = item.classList.toggle('is-open');
    question.setAttribute('aria-expanded', String(isOpen));
    const marker = question.querySelector('span');
    if (marker) marker.textContent = isOpen ? '−' : '+';
  });
});

const securedRelatedGrid = document.querySelector('.secured-cage-related-grid');

if (securedRelatedGrid) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollAmount = () => Math.max(280, Math.round(securedRelatedGrid.clientWidth * 0.72));

  securedRelatedGrid.closest('.internet-related')?.querySelectorAll('[data-related-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.relatedScroll === 'previous' ? -1 : 1;
      securedRelatedGrid.scrollBy({
        left: direction * scrollAmount(),
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    });
  });
}

const rayadahJourney = document.querySelector('[data-journey]');

if (rayadahJourney) {
  const journeyTabs = Array.from(rayadahJourney.querySelectorAll('[data-journey-step]'));
  const journeyPanels = Array.from(rayadahJourney.querySelectorAll('[data-journey-panel]'));
  const journeyImages = Array.from(rayadahJourney.querySelectorAll('[data-journey-image]'));

  const activateJourneyStep = (step, shouldFocus = false) => {
    journeyTabs.forEach((tab) => {
      const isActive = tab.dataset.journeyStep === step;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('aria-pressed', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && shouldFocus) tab.focus();
    });

    journeyPanels.forEach((panel) => {
      const isActive = panel.dataset.journeyPanel === step;
      panel.hidden = !isActive;
      panel.classList.toggle('is-active', isActive);
    });

    journeyImages.forEach((image) => {
      const isActive = image.dataset.journeyImage === step;
      image.hidden = !isActive;
      image.classList.toggle('is-active', isActive);
    });
  };

  journeyTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateJourneyStep(tab.dataset.journeyStep));
    tab.addEventListener('mouseenter', () => activateJourneyStep(tab.dataset.journeyStep));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? journeyTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + journeyTabs.length) % journeyTabs.length;
      activateJourneyStep(journeyTabs[nextIndex].dataset.journeyStep, true);
    });
  });

  activateJourneyStep(journeyTabs.find((tab) => tab.classList.contains('is-active'))?.dataset.journeyStep || journeyTabs[0]?.dataset.journeyStep);
}

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

const aboutDirectionSection = document.querySelector('.about-direction-section');
if (aboutDirectionSection) {
  let directionFrame = null;
  const updateDirectionSequence = () => {
    directionFrame = null;
    const rect = aboutDirectionSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const travel = Math.max(1, aboutDirectionSection.offsetHeight - viewportHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / travel));
    const crossfade = Math.max(0, Math.min(1, (progress - 0.34) / 0.32));
    const eased = crossfade * crossfade * (3 - (2 * crossfade));
    aboutDirectionSection.style.setProperty('--direction-crossfade', eased.toFixed(3));
    aboutDirectionSection.classList.toggle('is-mission', eased >= 0.5);
  };
  const scheduleDirectionUpdate = () => {
    if (directionFrame !== null) return;
    directionFrame = requestAnimationFrame(updateDirectionSequence);
  };

  if (reducedMotion || !('IntersectionObserver' in window)) {
    aboutDirectionSection.classList.add('is-visible');
  } else {
    const directionObserver = new IntersectionObserver(([entry], observer) => {
      if (!entry.isIntersecting) return;
      aboutDirectionSection.classList.add('is-visible');
      observer.unobserve(aboutDirectionSection);
    }, { threshold: 0.2 });
    directionObserver.observe(aboutDirectionSection);
  }

  scheduleDirectionUpdate();
  window.addEventListener('scroll', scheduleDirectionUpdate, { passive: true });
  window.addEventListener('resize', scheduleDirectionUpdate);
}

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

const aboutValuesSection = document.querySelector('.about-values-section');
const aboutValueCards = Array.from(aboutValuesSection?.querySelectorAll('.about-value-card') || []);
const aboutValuesRailMark = aboutValuesSection?.querySelector('.about-values-rail-mark');

const syncAboutValuesRailIcon = (activeCard) => {
  const sourceIcon = activeCard?.querySelector('.about-value-icon');
  if (!aboutValuesRailMark || !sourceIcon) return;

  const railIcon = sourceIcon.cloneNode(true);
  railIcon.classList.add('about-values-active-icon');
  aboutValuesRailMark.replaceChildren(railIcon);
};

syncAboutValuesRailIcon(aboutValueCards.find((card) => card.classList.contains('is-active')) || aboutValueCards[0]);

if (aboutValuesSection && aboutValueCards.length && !reducedMotion) {
  aboutValuesSection.classList.add('has-scroll-values');

  const activateValue = (activeCard) => {
    aboutValueCards.forEach((card) => card.classList.toggle('is-active', card === activeCard));
    syncAboutValuesRailIcon(activeCard);
  };

  let valuesFrame = null;
  const updateActiveValue = () => {
    valuesFrame = null;
    const sectionBounds = aboutValuesSection.getBoundingClientRect();
    if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) return;
    // Enter the section on the first value before the centered-card tracking
    // takes over as the visitor continues scrolling.
    if (sectionBounds.top > 8) {
      activateValue(aboutValueCards[0]);
      return;
    }
    // Activate the value whose content is centered in the viewport so the
    // sticky statement and the scrolling card remain synchronized.
    const activeLine = window.innerHeight * 0.5;
    const currentCard = aboutValueCards.reduce((nearest, card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const nearestRect = nearest.getBoundingClientRect();
      const nearestCenter = nearestRect.top + nearestRect.height / 2;
      return Math.abs(cardCenter - activeLine) < Math.abs(nearestCenter - activeLine) ? card : nearest;
    }, aboutValueCards[0]);

    activateValue(currentCard);
  };

  const scheduleValuesUpdate = () => {
    if (valuesFrame !== null) return;
    valuesFrame = requestAnimationFrame(updateActiveValue);
  };

  scheduleValuesUpdate();
  window.addEventListener('scroll', scheduleValuesUpdate, { passive: true });
  window.addEventListener('resize', scheduleValuesUpdate);
}

const aboutHistoryItems = Array.from(document.querySelectorAll('.about-history-item'));
const aboutHistorySection = document.querySelector('.about-history-section');
if (aboutHistoryItems.length && aboutHistorySection && !reducedMotion) {
  aboutHistorySection.classList.add('has-scroll-history');
  let historyIndex = 0;
  let snapTarget = null;
  let lastWheelTime = 0;
  let gestureDirection = 0;
  let gestureGap = 180;
  let wheelHistoryActive = false;

  const activateHistoryItem = (index) => {
    historyIndex = index;
    aboutHistoryItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.classList.toggle('is-before-active', itemIndex < index);
      item.classList.toggle('is-after-active', itemIndex > index);
    });
  };

  const syncHistoryFromScroll = () => {
    if (snapTarget !== null) {
      if (Math.abs(window.scrollY - snapTarget) > 2) return;
      snapTarget = null;
    }
    const sectionBounds = aboutHistorySection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (wheelHistoryActive && sectionBounds.bottom > 0 && sectionBounds.top < viewportHeight) return;
    const pinnedDistance = Math.max(1, sectionBounds.height - viewportHeight);
    const progress = Math.min(1, Math.max(0, -sectionBounds.top / pinnedDistance));
    const nearestIndex = Math.round(progress * aboutHistoryItems.length - 0.5);
    activateHistoryItem(Math.max(0, Math.min(aboutHistoryItems.length - 1, nearestIndex)));
  };

  const handleHistoryWheel = (event) => {
    if (!event.cancelable || event.ctrlKey || event.metaKey || !event.deltaY ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    const sectionBounds = aboutHistorySection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const direction = Math.sign(event.deltaY);
    const inPin = sectionBounds.top <= 0 && sectionBounds.bottom > viewportHeight;
    const enteringDown = direction > 0 && sectionBounds.top > 0 && sectionBounds.top <= viewportHeight;
    const enteringUp = direction < 0 && sectionBounds.bottom <= viewportHeight && sectionBounds.bottom > 0;
    if (!inPin && !enteringDown && !enteringUp) return;

    for (let element = event.target; element instanceof Element; element = element.parentElement) {
      if (element.scrollHeight <= element.clientHeight) continue;
      if (!['auto', 'scroll', 'overlay'].includes(getComputedStyle(element).overflowY)) continue;
      const remaining = direction > 0
        ? element.scrollHeight - element.clientHeight - element.scrollTop
        : element.scrollTop;
      if (remaining > 0) return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    window.dispatchEvent(new Event('history-scroll-step'));
    wheelHistoryActive = true;

    const now = performance.now();
    const newGesture = direction !== gestureDirection || now - lastWheelTime > gestureGap;
    lastWheelTime = now;
    if (!newGesture) return;

    gestureDirection = direction;
    gestureGap = event.deltaMode === 0 && Math.abs(event.deltaY) < 60 ? 220 : 80;
    const sectionStart = window.scrollY + sectionBounds.top;
    const pinnedDistance = Math.max(1, sectionBounds.height - viewportHeight);
    const lastIndex = aboutHistoryItems.length - 1;

    if (enteringDown) {
      activateHistoryItem(0);
      snapTarget = sectionStart;
    } else if (enteringUp) {
      activateHistoryItem(lastIndex);
      snapTarget = sectionStart + pinnedDistance * lastIndex / aboutHistoryItems.length;
    } else {
      const nextIndex = historyIndex + direction;
      if (nextIndex < 0) {
        snapTarget = sectionStart - Math.max(120, Math.abs(event.deltaY));
      } else if (nextIndex > lastIndex) {
        const pageMax = Math.max(0, document.scrollingElement.scrollHeight - viewportHeight);
        snapTarget = Math.min(
          pageMax,
          sectionStart + sectionBounds.height + Math.max(120, Math.abs(event.deltaY))
        );
        const exitTarget = snapTarget;
        snapTarget = null;
        window.scrollTo({ top: exitTarget, behavior: 'instant' });
        return;
      } else {
        activateHistoryItem(nextIndex);
        snapTarget = sectionStart + pinnedDistance * nextIndex / aboutHistoryItems.length;
      }
    }

    window.scrollTo({ top: snapTarget, behavior: 'smooth' });
  };

  activateHistoryItem(0);
  window.addEventListener('wheel', handleHistoryWheel, { capture: true, passive: false });
  window.addEventListener('scroll', syncHistoryFromScroll, { passive: true });
  window.addEventListener('resize', syncHistoryFromScroll);
  const releaseHistorySnap = () => {
    snapTarget = null;
    wheelHistoryActive = false;
  };
  document.addEventListener('keydown', releaseHistorySnap);
  document.addEventListener('touchstart', releaseHistorySnap, { passive: true });
  document.addEventListener('pointerdown', releaseHistorySnap, { passive: true });
  window.addEventListener('hashchange', () => { releaseHistorySnap(); syncHistoryFromScroll(); });
  syncHistoryFromScroll();
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

const resourceGrid = document.querySelector('#resource-grid');

if (resourceGrid) {
  const resourceCards = Array.from(resourceGrid.querySelectorAll('.resource-card'));
  const resourceSearch = document.querySelector('#resource-search');
  const resourceType = document.querySelector('#resource-type');
  const resourceSort = document.querySelector('#resource-sort');
  const resourceCount = document.querySelector('#resource-count');
  const resourceFilters = {
    search: '',
    type: 'all',
    topic: 'all',
    industry: 'all',
    service: 'all',
  };

  const normalizeResourceValue = (value) => String(value || '').trim().toLowerCase();

  const closeResourceBrowsePanels = () => {
    document.querySelectorAll('.resources-browse-panel').forEach((panel) => {
      panel.hidden = true;
      panel.classList.remove('is-open');
    });
    document.querySelectorAll('.resources-browse-trigger').forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
    });
  };

  const updateResourceResults = () => {
    const searchValue = normalizeResourceValue(resourceFilters.search);
    const sortedCards = [...resourceCards].sort((first, second) => {
      if (resourceSort?.value === 'az') {
        return first.querySelector('h3').textContent.localeCompare(second.querySelector('h3').textContent);
      }
      return Number(first.dataset.order) - Number(second.dataset.order);
    });

    sortedCards.forEach((card) => resourceGrid.append(card));

    let visibleCount = 0;
    sortedCards.forEach((card) => {
      const searchableText = normalizeResourceValue(card.textContent);
      const matchesSearch = !searchValue || searchableText.includes(searchValue);
      const matchesType = resourceFilters.type === 'all' || card.dataset.type === resourceFilters.type;
      const matchesTopic = resourceFilters.topic === 'all' || card.dataset.topic === resourceFilters.topic;
      const matchesIndustry = resourceFilters.industry === 'all' || card.dataset.industry === resourceFilters.industry;
      const matchesService = resourceFilters.service === 'all' || card.dataset.service === resourceFilters.service;
      const isVisible = matchesSearch && matchesType && matchesTopic && matchesIndustry && matchesService;
      card.classList.toggle('is-filtered', !isVisible);
      if (isVisible) visibleCount += 1;
    });

    if (resourceCount) resourceCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'result' : 'results'}`;
  };

  resourceSearch?.addEventListener('input', () => {
    resourceFilters.search = resourceSearch.value;
    updateResourceResults();
  });

  resourceType?.addEventListener('change', () => {
    resourceFilters.type = resourceType.value;
    document.querySelectorAll('[data-filter-field="type"]').forEach((option) => {
      option.classList.toggle('is-active', option.dataset.filterValue === resourceFilters.type);
    });
    updateResourceResults();
  });

  resourceSort?.addEventListener('change', updateResourceResults);

  document.querySelectorAll('.resources-browse-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const panel = document.querySelector(`[data-browse-panel="${trigger.dataset.browseTrigger}"]`);
      if (!panel) return;
      const willOpen = !panel.classList.contains('is-open');
      closeResourceBrowsePanels();
      panel.hidden = !willOpen;
      panel.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.querySelectorAll('[data-filter-field]').forEach((option) => {
    option.addEventListener('click', () => {
      const field = option.dataset.filterField;
      const value = option.dataset.filterValue || 'all';
      if (!Object.prototype.hasOwnProperty.call(resourceFilters, field)) return;
      resourceFilters[field] = value;
      document.querySelectorAll(`[data-filter-field="${field}"]`).forEach((item) => {
        item.classList.toggle('is-active', item === option);
      });
      if (field === 'type' && resourceType) resourceType.value = value;
      closeResourceBrowsePanels();
      updateResourceResults();
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.resources-browse-group')) closeResourceBrowsePanels();
  });

  closeResourceBrowsePanels();
  updateResourceResults();
}

const careerTeamFilter = document.querySelector('#career-team-filter');
const careerLocationFilter = document.querySelector('#career-location-filter');
const careerPositionCards = Array.from(document.querySelectorAll('.careers-position-card'));
const careerEmptyState = document.querySelector('.careers-empty-state');

if (careerTeamFilter && careerLocationFilter && careerPositionCards.length) {
  const updateCareerPositions = () => {
    const selectedTeam = careerTeamFilter.value;
    const selectedLocation = careerLocationFilter.value;
    let visibleCount = 0;

    careerPositionCards.forEach((card) => {
      const matchesTeam = selectedTeam === 'all' || card.dataset.team === selectedTeam;
      const matchesLocation = selectedLocation === 'all' || card.dataset.location === selectedLocation;
      const visible = matchesTeam && matchesLocation;
      card.hidden = !visible;
      card.setAttribute('aria-hidden', String(!visible));
      if (visible) visibleCount += 1;
    });

    if (careerEmptyState) careerEmptyState.hidden = visibleCount > 0;
  };

  careerTeamFilter.addEventListener('change', updateCareerPositions);
  careerLocationFilter.addEventListener('change', updateCareerPositions);
  updateCareerPositions();
}

document.querySelectorAll('[data-career-select]').forEach((field) => {
  const nativeSelect = field.querySelector('.careers-native-select');
  const trigger = field.querySelector('.careers-select-trigger');
  const menu = field.querySelector('.careers-select-menu');
  const valueLabel = field.querySelector('.careers-select-value');
  const options = Array.from(field.querySelectorAll('[role="option"]'));

  if (!nativeSelect || !trigger || !menu || !valueLabel || !options.length) return;

  const setOpen = (open) => {
    document.querySelectorAll('[data-career-select].is-open').forEach((otherField) => {
      if (otherField !== field) {
        otherField.classList.remove('is-open');
        otherField.querySelector('.careers-select-trigger')?.setAttribute('aria-expanded', 'false');
        otherField.querySelector('.careers-select-menu')?.setAttribute('aria-hidden', 'true');
      }
    });

    field.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  };

  const setValue = (option) => {
    const value = option.dataset.value || 'all';
    nativeSelect.value = value;
    valueLabel.textContent = option.textContent.trim();
    options.forEach((item) => item.setAttribute('aria-selected', String(item === option)));
    nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    setOpen(false);
    trigger.focus();
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!field.classList.contains('is-open'));
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
      options[0]?.focus();
    }
    if (event.key === 'Escape') setOpen(false);
  });

  options.forEach((option, index) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      setValue(option);
    });

    option.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        options[(index + 1) % options.length].focus();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        options[(index - 1 + options.length) % options.length].focus();
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!field.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
});

// Ease mouse-wheel movement without changing the page's native anchor scrolling.
(() => {
  const scrollingElement = document.scrollingElement;
  if (!scrollingElement) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let targetY = scrollingElement.scrollTop;
  let frame = null;
  let lastFrameTime = 0;

  const stopScroll = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    lastFrameTime = 0;
    targetY = scrollingElement.scrollTop;
  };

  const getMaxScroll = () => Math.max(0, scrollingElement.scrollHeight - window.innerHeight);

  const animateScroll = (time) => {
    const elapsed = lastFrameTime ? Math.min(time - lastFrameTime, 32) : 16;
    lastFrameTime = time;
    const currentY = scrollingElement.scrollTop;
    const distance = targetY - currentY;

    if (Math.abs(distance) < 0.5) {
      scrollingElement.scrollTo({ top: targetY, behavior: 'instant' });
      frame = null;
      lastFrameTime = 0;
      return;
    }

    const easing = 1 - Math.exp(-elapsed / 140);
    scrollingElement.scrollTo({ top: currentY + distance * easing, behavior: 'instant' });
    frame = requestAnimationFrame(animateScroll);
  };

  const handleWheel = (event) => {
    if (reducedMotion.matches || !event.cancelable || event.ctrlKey || event.metaKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;

    const deltaY = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);

    for (let element = event.target; element && element !== scrollingElement; element = element.parentElement) {
      if (!(element instanceof Element) || element.scrollHeight <= element.clientHeight) continue;
      const overflow = getComputedStyle(element).overflowY;
      if (!['auto', 'scroll', 'overlay'].includes(overflow)) continue;
      const remaining = deltaY > 0
        ? element.scrollHeight - element.clientHeight - element.scrollTop
        : element.scrollTop;
      if (remaining > 0) {
        stopScroll();
        return;
      }
    }

    if (frame === null) targetY = scrollingElement.scrollTop;
    targetY = Math.min(getMaxScroll(), Math.max(0, targetY + deltaY));
    if (targetY === scrollingElement.scrollTop && frame === null) return;
    event.preventDefault();
    if (frame === null) frame = requestAnimationFrame(animateScroll);
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('history-scroll-step', stopScroll);
  window.addEventListener('scroll', () => {
    if (frame === null) targetY = scrollingElement.scrollTop;
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) stopScroll();
  });
  document.addEventListener('touchstart', stopScroll, { passive: true });
  document.addEventListener('pointerdown', stopScroll, { passive: true });
  window.addEventListener('hashchange', stopScroll);
  window.addEventListener('popstate', stopScroll);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stopScroll(); });
})();
