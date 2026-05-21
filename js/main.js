/* ─── Sticky nav shadow ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ─── Active nav link on scroll ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '60')}px 0px -60% 0px` });

sections.forEach(s => sectionObserver.observe(s));

/* ─── Fade-in on scroll ─── */
const fadeEls = document.querySelectorAll('.bio-content, .books-grid, .press-card, .contact-inner');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});

/* ─── Book description toggle ─── */
function toggleDesc(id) {
  const desc = document.getElementById(id);
  const btn = document.querySelector(`[aria-controls="${id}"]`);
  if (!desc || !btn) return;
  const isHidden = desc.hidden;
  desc.hidden = !isHidden;
  btn.setAttribute('aria-expanded', String(isHidden));
  btn.textContent = isHidden ? 'Скрыть' : 'Подробнее';
}
window.toggleDesc = toggleDesc;

/* ─── Press Carousel ─── */
(function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track) return;

  const slides = track.querySelectorAll('.press-card');
  if (slides.length < 2) {
    document.getElementById('prevBtn')?.remove();
    document.getElementById('nextBtn')?.remove();
    return;
  }

  let current = 0;

  /* Build dots */
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Цитата ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.carousel__dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  document.getElementById('prevBtn')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('nextBtn')?.addEventListener('click', () => goTo(current + 1));

  /* Auto-advance */
  let timer = setInterval(() => goTo(current + 1), 5000);
  track.addEventListener('mouseenter', () => clearInterval(timer));
  track.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 5000); });

  /* Touch swipe */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });
})();

/* ─── Smooth scroll for nav links (polyfill for older Safari) ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
