/* ═══════════════════════════════════════════════════════════════
   MPAC Healthcare — Editable Content
   ═══════════════════════════════════════════════════════════════

   HOW TO EDIT:
   1. Find the section you want to change below
   2. Edit the text between the quotes (single quotes ' or backticks `)
   3. Save this file
   4. Refresh the website to see your changes

   TIPS:
   - Don't delete the property names (the words before the colon)
   - Keep the quotes and commas in place
   - For multi-line text, use backtick quotes (`) instead of single quotes (')
   - HTML tags like <br>, <strong>, <span> are OK inside text

   ═══════════════════════════════════════════════════════════════ */

const CONTENT = {

  // ─── SITE-WIDE ─────────────────────────────────────────────
  siteTitle: 'MPAC Healthcare — Raising the Standard in Post-Acute Care',
  companyName: 'MPAC Healthcare',
  phone: '(888) 660-4425',
  phoneLink: '8886604425',
  email: 'info@mpachealthcare.com',
  address: '2045 W Grand Ave Ste B #28354<br>Chicago, IL 60612',
  copyrightYear: '2026',
  careersUrl: 'https://sites.hireology.com/mpachealthcare/index.html',


  // ─── HERO SECTION ──────────────────────────────────────────
  hero: {
    headline: 'Raising the standard in <span>post-acute care.</span>',
    description: 'MPAC Healthcare is a proven industry leader delivering proactive, patient-centered care to post-acute facilities across the country. We keep patients healthier, reduce readmissions, and lower costs.',
    primaryButton: 'Partner With Us →',
    secondaryButton: 'Explore Services',
  },


  // ─── VALUE PROPS (Mission) ─────────────────────────────────
  mission: {
    headline: 'Our single objective is proactive,<br>patient-centered care.',
    subheadline: 'In every case, our focus is on preventing complications, eliminating patient attrition, and reducing cost across the entire health care system.',
    cards: [
      {
        title: 'Preventing',
        description: 'Preventing patients from returning to a higher level of care through early intervention and proactive monitoring by on-site practitioners.',
      },
      {
        title: 'Eliminating',
        description: 'Eliminating patient attrition from your health system by ensuring seamless care coordination and consistent follow-through.',
      },
      {
        title: 'Reducing',
        description: 'Reducing cost for the entire health care system by treating in place, managing conditions early, and avoiding unnecessary hospital transfers.',
      },
    ],
  },


  // ─── SERVICES ──────────────────────────────────────────────
  services: {
    label: 'Our Services',
    headline: 'How we support your facility.',
    cards: [
      {
        number: '01',
        title: 'Primary Care Program',
        description: 'High presence on-site Nurse Practitioners assessing and treating changes in condition, conducting lab reviews, and collaborating with community partners to improve patient satisfaction and reduce readmissions.',
      },
      {
        number: '02',
        title: 'Mental Health Program',
        description: 'Licensed Mental Health Clinicians embedded in your community to provide behavioral health assessments, therapy, and emotional support for residents—addressing the full spectrum of wellness.',
      },
      {
        number: '03',
        title: 'Physician Services',
        description: 'Experienced physicians supporting your facility\'s clinical needs, complementing the work of attending physicians and ensuring comprehensive medical oversight for all residents.',
      },
    ],
  },


  // ─── COMMUNITIES ───────────────────────────────────────────
  communities: {
    label: 'For Communities',
    headline: 'Post-acute solutions tailored to your facility.',
    description: 'MPAC works exclusively in post-acute settings—SNFs, LTCs, and assisted living communities. Our established framework uniquely positions us to custom tailor the most productive strategy for each client.',
  },


  // ─── THE DIFFERENCE ────────────────────────────────────────
  difference: {
    label: 'The Difference',
    headline: 'What changes when MPAC is your post-acute partner.',
    without: {
      title: 'Without MPAC',
      items: [
        'Minor conditions escalate into serious, costly events',
        'Physicians interrupted by non-billable patient management',
        'High rates of hospital readmissions',
        'Nursing staff stretched thin with clinical responsibilities',
        'Limited availability for evening and weekend issues',
      ],
    },
    with: {
      title: 'With MPAC',
      items: [
        'Early intervention catches issues before they escalate',
        'Physicians maintain uninterrupted rounding and billing',
        'Hospital readmissions reduced 25–50% in 60–90 days',
        'Nursing staff more confident with on-site provider support',
        '12-hour daily on-site coverage including weekends',
      ],
    },
  },


  // ─── HOW WE WORK (Approach) ────────────────────────────────
  approach: {
    label: 'How We Work',
    headline: 'Built for the realities of post-acute care.',
    description: 'MPAC providers deliver a high level of coordination that complements the work of the attending physician—reducing burden, improving outcomes, and enhancing your facility\'s reputation.',
    forPhysicians: 'A continued rounding schedule without interruption, reduction in non-billable activities, and fewer calls during evenings and weekends.',
    forFacilities: 'Enhanced marketability, improved resident satisfaction, reduced risk of falls and infections, and additional support for survey readiness.',
    steps: [
      {
        title: 'Assess & Embed',
        description: 'We embed dedicated medical and mental health clinicians in your community to serve the patient population and integrate with your care team.',
      },
      {
        title: 'Identify & Intervene',
        description: 'Proactively identify triggers and manage conditions before they escalate, treating in place whenever possible.',
      },
      {
        title: 'Coordinate & Communicate',
        description: 'Collaborate with community physicians, other third-party clinical vendors, and, ultimately, the patient and their families.',
      },
      {
        title: 'Measure & Improve',
        description: 'Track readmission rates, patient outcomes, and satisfaction to continuously optimize the care model.',
      },
    ],
  },


  // ─── CTA SECTION ───────────────────────────────────────────
  cta: {
    label: 'Get Started',
    headline: 'Ready to raise the standard at your facility?',
    description: 'Contact us to learn how MPAC Healthcare can reduce readmissions, improve outcomes, and support your clinical team.',
    primaryButton: 'Contact Us →',
  },


  // ─── PATIENTS & FAMILIES ───────────────────────────────────
  patients: {
    label: 'Patients & Families',
    headline: 'Your care team, right where you live.',
    description: 'MPAC Healthcare providers are embedded in your community, delivering personalized, proactive care so you can focus on recovery and well-being without the hassle of traveling to outside appointments.',
    cards: [
      {
        title: 'Care That Comes to You',
        description: 'Our providers are on-site at your community—no transportation needed. You receive consistent, familiar care from practitioners who know you.',
      },
      {
        title: 'Whole-Person Support',
        description: 'From medical needs to mental health, our team addresses your complete well-being with compassion and attention to what matters most to you.',
      },
      {
        title: 'Peace of Mind for Families',
        description: 'Families can rest easier knowing a dedicated care team is available on-site, communicating regularly and keeping your loved one\'s health on track.',
      },
    ],
  },


  // ─── JOIN OUR TEAM ─────────────────────────────────────────
  careers: {
    label: 'Join Our Team',
    headline: 'Make a difference in post-acute care.',
    description: 'We\'re looking for Nurse Practitioners, Licensed Mental Health Clinicians, and Physicians who are passionate about improving outcomes for patients in skilled nursing and assisted living communities.',
    buttonText: 'View Open Positions →',
  },


  // ─── FOOTER ────────────────────────────────────────────────
  footer: {
    tagline: 'Raising the standard in post-acute care. Proactive, patient-centered healthcare for skilled nursing and post-acute facilities nationwide.',
  },


  // ─── ABOUT US OVERLAY ──────────────────────────────────────
  about: {
    mission: {
      label: 'Our Mission',
      headline: 'Raising the standard in post-acute care.',
      text: 'MPAC Healthcare is dedicated to transforming post-acute care by embedding proactive, patient-centered clinical teams directly into skilled nursing and assisted living communities. We believe every patient deserves access to high-quality medical and behavioral health services — right where they live.',
      subtext: 'Our mission is to prevent complications before they escalate, reduce unnecessary hospital readmissions, and deliver measurable improvements in patient outcomes — all while lowering costs across the healthcare system.',
    },
    geography: {
      label: 'Where We Serve',
      headline: 'Our geographic footprint.',
      description: 'MPAC Healthcare partners with post-acute facilities across the country, bringing our proven care model to communities that need it most.',
      mapAlt: 'MPAC Healthcare geographic footprint — opening markets highlighted across the United States',
    },
    leadership: {
      label: 'Leadership',
      headline: 'Meet our team.',
      description: 'The people behind MPAC Healthcare bring decades of experience in post-acute care, clinical operations, and healthcare leadership.',
    },
  },


  // ─── TEAM MEMBERS ──────────────────────────────────────────
  // To add a person: copy one block, paste below, and fill in their info.
  // To remove a person: delete their entire { ... } block.
  team: [
    {
      name: 'Jane Doe',
      initials: 'JD',
      title: 'Chief Executive Officer',
      bio: '20+ years in post-acute healthcare leadership, driving operational excellence and strategic growth.',
      linkedin: 'https://www.linkedin.com/in/',
    },
    {
      name: 'John Smith',
      initials: 'JS',
      title: 'Chief Clinical Officer',
      bio: 'Board-certified physician with deep expertise in skilled nursing facility care and clinical program development.',
      linkedin: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Mary Johnson',
      initials: 'MJ',
      title: 'VP of Operations',
      bio: 'Specializes in scaling clinical teams across multi-state post-acute networks with a focus on quality outcomes.',
      linkedin: 'https://www.linkedin.com/in/',
    },
  ],


  // ─── CONTACT FORM ──────────────────────────────────────────
  contactForm: {
    label: 'Get In Touch',
    headline: 'We\'d love to hear from you.',
    description: 'Fill out the form below and our team will get back to you shortly.',
    submitButton: 'Send Message →',
    emailSubject: 'New Contact from MPAC Website',
  },

};
