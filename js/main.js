/* ═══════════════════════════════════════════════
   MPAC Healthcare — Main JavaScript
   ═══════════════════════════════════════════════ */

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// About Us overlay
const aboutOverlay = document.getElementById('aboutOverlay');
const aboutClose = document.getElementById('aboutClose');
const aboutTriggers = document.querySelectorAll('#aboutTrigger, .about-trigger');

function openAbout(e) {
  e.preventDefault();
  aboutOverlay.classList.add('open');
  aboutOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('about-open');
  aboutOverlay.scrollTop = 0;
  links.classList.remove('open');
  aboutClose.focus();
}

function closeAbout() {
  aboutOverlay.classList.remove('open');
  aboutOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('about-open');
}

aboutTriggers.forEach(trigger => trigger.addEventListener('click', openAbout));
aboutClose.addEventListener('click', closeAbout);

// Close when clicking the dark backdrop (outside the panel)
aboutOverlay.addEventListener('click', (e) => {
  if (e.target === aboutOverlay) closeAbout();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && aboutOverlay.classList.contains('open')) {
    closeAbout();
  }
});
