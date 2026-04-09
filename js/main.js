/* ═══════════════════════════════════════════════
   MPAC Healthcare — Main JavaScript
   ═══════════════════════════════════════════════ */

// ─── POPULATE PAGE FROM content.js ───
(function populateContent() {
  // Helper: resolve a dot-path like "hero.headline" from the CONTENT object
  function resolve(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CONTENT);
  }

  // 1. Simple text elements: [data-content="path.to.value"]
  document.querySelectorAll('[data-content]').forEach(el => {
    const val = resolve(el.getAttribute('data-content'));
    if (val !== undefined) el.innerHTML = val;
  });

  // 2. Page title
  const titleEl = document.querySelector('[data-content="siteTitle"]');
  if (titleEl) document.title = CONTENT.siteTitle;

  // 3. Difference lists: build <li> items from arrays
  document.querySelectorAll('[data-list]').forEach(ul => {
    const path = ul.getAttribute('data-list');
    const items = resolve(path);
    if (!Array.isArray(items)) return;
    // Determine icon based on parent class
    const isWithout = ul.closest('.without');
    const icon = isWithout ? '✕' : '✓';
    ul.innerHTML = items
      .map(text => `<li><span class="diff-icon">${icon}</span> ${text}</li>`)
      .join('');
  });

  // 4. Phone links
  document.querySelectorAll('[data-content-phone]').forEach(el => {
    el.textContent = CONTENT.phone;
    el.href = 'tel:' + CONTENT.phoneLink;
  });

  // 5. Email links
  document.querySelectorAll('[data-content-email]').forEach(el => {
    el.textContent = CONTENT.email;
    el.href = 'mailto:' + CONTENT.email;
  });

  // 6. Copyright
  document.querySelectorAll('[data-content-copyright]').forEach(el => {
    el.innerHTML = `&copy; ${CONTENT.copyrightYear} ${CONTENT.companyName}. All rights reserved.`;
  });

  // 7. CTA phone button
  const ctaPhoneBtn = document.querySelector('.cta-buttons [data-content-phone]');
  if (ctaPhoneBtn) {
    ctaPhoneBtn.textContent = 'Call ' + CONTENT.phone;
    ctaPhoneBtn.href = 'tel:' + CONTENT.phoneLink;
  }

  // 8. Careers URL
  const careersLink = document.querySelector('[data-href="careersUrl"]');
  if (careersLink) careersLink.href = CONTENT.careersUrl;

  // 9. Contact form email subject
  const subjectInput = document.querySelector('input[name="_subject"]');
  if (subjectInput) subjectInput.value = CONTENT.contactForm.emailSubject;

  // 10. Form action email
  const form = document.getElementById('contactForm');
  if (form) form.action = 'https://formsubmit.co/' + CONTENT.email;
})();

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

// ─── TEAM DATA (from content.js) ───
const teamMembers = CONTENT.team;

// Render team cards
const leadershipGrid = document.getElementById('leadershipGrid');
teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.className = 'leader-card';
  card.innerHTML = `
    <div class="leader-photo">${member.initials}</div>
    <h4>${member.name}</h4>
    <div class="leader-title">${member.title}</div>
    <p>${member.bio}</p>
    <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="leader-linkedin">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      LinkedIn
    </a>
  `;
  leadershipGrid.appendChild(card);
});

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

// Contact form overlay
const contactOverlay = document.getElementById('contactOverlay');
const contactClose = document.getElementById('contactClose');
const contactTriggers = document.querySelectorAll('#contactTrigger, .contact-trigger');

function openContact(e) {
  e.preventDefault();
  contactOverlay.classList.add('open');
  contactOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('about-open');
  contactOverlay.scrollTop = 0;
  links.classList.remove('open');
  contactClose.focus();
}

function closeContact() {
  contactOverlay.classList.remove('open');
  contactOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('about-open');
}

contactTriggers.forEach(trigger => trigger.addEventListener('click', openContact));
contactClose.addEventListener('click', closeContact);
contactOverlay.addEventListener('click', (e) => {
  if (e.target === contactOverlay) closeContact();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (aboutOverlay.classList.contains('open')) closeAbout();
    if (contactOverlay.classList.contains('open')) closeContact();
  }
});
