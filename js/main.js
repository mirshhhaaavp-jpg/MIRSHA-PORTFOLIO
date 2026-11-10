/**
 * MIRSHA VP - AI CONTENT CREATOR PORTFOLIO
 * Client-Side Interactivity, Photo Management & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initNavigation();
  initPhotoManager();
  initProjectModals();
  initServiceBooking();
  initCopyActions();
  initContactForm();
  initSkillBarAnimation();
});

/* ==========================================================================
   1. AMBIENT CURSOR GLOW
   ========================================================================== */
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  }
  requestAnimationFrame(animateGlow);
}

/* ==========================================================================
   2. NAVIGATION & ACTIVE SECTION HIGHLIGHT
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // ScrollSpy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. PHOTO MANAGEMENT SYSTEM
   Enables Mirsha to upload and preview their own photo immediately!
   Persists to localStorage and handles graceful fallbacks.
   ========================================================================== */
function initPhotoManager() {
  const heroImg = document.getElementById('heroCreatorImg');
  const aboutImg = document.getElementById('aboutCreatorImg');
  const photoModal = document.getElementById('photoCustomizerModal');
  const openModalBtns = document.querySelectorAll('.trigger-photo-modal');
  const closeModalBtn = document.getElementById('closePhotoModal');
  const dropzone = document.getElementById('photoDropzone');
  const fileInput = document.getElementById('photoFileInput');
  const photoPresetBtns = document.querySelectorAll('.photo-preset-btn');
  const resetBtn = document.getElementById('resetPhotoBtn');

  // Load saved custom photo from localStorage if present
  const savedHeroPhoto = localStorage.getItem('mirsha_hero_photo');
  const savedAboutPhoto = localStorage.getItem('mirsha_about_photo');

  if (savedHeroPhoto && savedHeroPhoto.startsWith('data:image') && heroImg) {
    heroImg.src = savedHeroPhoto;
  }
  if (savedAboutPhoto && savedAboutPhoto.startsWith('data:image') && aboutImg) {
    aboutImg.src = savedAboutPhoto;
  }

  // Modal open/close
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      photoModal.classList.add('active');
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      photoModal.classList.remove('active');
    });
  }

  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      photoModal.classList.remove('active');
    }
  });

  // Drag and drop handler
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    ['dragleave', 'dragend'].forEach(type => {
      dropzone.addEventListener(type, () => dropzone.classList.remove('dragover'));
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handlePhotoFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handlePhotoFile(e.target.files[0]);
      }
    });
  }

  function handlePhotoFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      if (heroImg) heroImg.src = dataUrl;
      if (aboutImg) aboutImg.src = dataUrl;

      try {
        localStorage.setItem('mirsha_hero_photo', dataUrl);
        localStorage.setItem('mirsha_about_photo', dataUrl);
      } catch (err) {
        console.warn('Image size exceeds localStorage quota, displayed in memory.');
      }

      showToast('✓ Photo updated successfully!');
      photoModal.classList.remove('active');
    };
    reader.readAsDataURL(file);
  }

  // Preset switchers
  photoPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetType = btn.getAttribute('data-preset');
      if (presetType === 'silhouette') {
        heroImg.src = 'assets/images/hero-silhouette.svg';
        aboutImg.src = 'assets/images/about-portrait.svg';
        localStorage.removeItem('mirsha_hero_photo');
        localStorage.removeItem('mirsha_about_photo');
        showToast('Switched to Vector Studio Visuals');
      } else if (presetType === 'reference') {
        heroImg.src = 'assets/images/reference-hero.jpg';
        aboutImg.src = 'assets/images/reference-about.jpg';
        localStorage.removeItem('mirsha_hero_photo');
        localStorage.removeItem('mirsha_about_photo');
        showToast('Switched to Reference Cutout');
      }
      photoModal.classList.remove('active');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('mirsha_hero_photo');
      localStorage.removeItem('mirsha_about_photo');
      heroImg.src = 'assets/images/mirsha-photo.png';
      aboutImg.src = 'assets/images/mirsha-photo.png';
      showToast('Reset to Mirsha Portrait');
      photoModal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   4. PROJECT CASE STUDY MODALS
   Data for Dxb iHub, Accubate Health Care, and VILAVIL
   ========================================================================== */
const projectData = {
  dxb: {
    title: 'Dxb iHub — AI Visual Direction & Brand Identity',
    category: 'AI Visual Direction & Brand Architecture',
    client: 'Dxb Innovation Hub (Dubai, UAE)',
    image: 'assets/images/project-dxb.svg',
    summary: 'A futuristic brand narrative and generative AI visual campaign crafted for Dubai’s leading tech incubator, establishing high-tech thought leadership.',
    strategy: 'Utilized seed-conditioned prompt choreography with Kling AI, Midjourney, and Seedance to generate architectural cyber-structures, holographic interfaces, and cinematic brand reels.',
    tools: ['Kling AI', 'OmniFlash', 'Photoshop', 'Canva', 'Meta Ads'],
    results: [
      'Over 2.4M organic impressions across Dubai tech founders',
      'Unified brand guideline across 14 digital touchpoints',
      '55% decrease in asset production turnaround time with generative workflows'
    ]
  },
  accubate: {
    title: 'Accubate Health Care — AI Medical Storytelling',
    category: 'Healthcare Visuals & Social Advertising',
    client: 'Accubate Health Care',
    image: 'assets/images/project-accubate.svg',
    summary: 'High-trust, compassionate visual storytelling developed for a specialized healthcare and wellness network, communicating complex patient care empathetically.',
    strategy: 'Engineered precision prompts focused on microscopic cellular aesthetics, warm human clinical interactions, and patient recovery journeys without sterile medical tropes.',
    tools: ['ChatGPT Prompt Engineering', 'Seedance', 'Nano Banana', 'CapCut', 'Photoshop'],
    results: [
      '3.8x increase in patient consultation bookings via Meta Ads',
      'Recognized for human-first medical creative design',
      'Delivered 35+ high-performing vertical reels and poster assets'
    ]
  },
  vilavil: {
    title: 'VILAVIL — Luxury AI Product Commercials',
    category: 'AI Product Content & Commercial Cinema',
    client: 'VILAVIL Brand',
    image: 'assets/images/project-vilavil.svg',
    summary: 'Hyper-realistic synthetic cinematography and luxury product visualization for VILAVIL, generating prestige lighting, fluid dynamics, and commercial video reels.',
    strategy: 'Combined Flow and Kling AI motion models with custom 3D glass refraction prompts to simulate studio-lit fragrance and luxury product sequences without physical studio rentals.',
    tools: ['Flow', 'Kling AI', 'OmniFlash', 'Photoshop', 'CapCut'],
    results: [
      'Produced 8 broadcast-quality commercial spots in 10 days',
      '42% lower cost per acquisition on Instagram & TikTok ad sets',
      'Featured in creative design showcases for synthetic cinematography'
    ]
  }
};

function initProjectModals() {
  const modal = document.getElementById('projectDetailsModal');
  const modalContent = document.getElementById('projectModalBody');
  const closeBtn = document.getElementById('closeProjectModal');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data) return;

      modalContent.innerHTML = `
        <div style="border-radius: 16px; overflow: hidden; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); background: #000;">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: auto; max-height: 320px; object-fit: cover;">
        </div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
          <span style="background: rgba(163,230,53,0.15); border: 1px solid rgba(163,230,53,0.4); color: #a3e635; font-size: 0.75rem; padding: 0.25rem 0.65rem; border-radius: 9999px; font-weight: 600;">
            ${data.category}
          </span>
          <span style="background: rgba(255,255,255,0.06); color: #cbd5e1; font-size: 0.75rem; padding: 0.25rem 0.65rem; border-radius: 9999px;">
            Client: ${data.client}
          </span>
        </div>
        <h2 style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.2;">
          ${data.title}
        </h2>
        <p style="color: #cbd5e1; font-size: 0.98rem; line-height: 1.6; margin-bottom: 1.25rem;">
          ${data.summary}
        </p>
        <div style="background: rgba(18, 33, 22, 0.5); border: 1px solid rgba(163,230,53,0.25); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
          <h4 style="color: #a3e635; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: var(--font-mono); margin-bottom: 0.4rem;">
            AI Prompt Strategy & Visual Direction
          </h4>
          <p style="color: #f8fafc; font-size: 0.92rem; line-height: 1.6;">
            ${data.strategy}
          </p>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: #a3e635; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: var(--font-mono); margin-bottom: 0.6rem;">
            Tools & Workflows Utilized
          </h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${data.tools.map(tool => `
              <span style="background: rgba(255,255,255,0.07); color: #ffffff; font-size: 0.82rem; padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12);">
                ${tool}
              </span>
            `).join('')}
          </div>
        </div>
        <div>
          <h4 style="color: #a3e635; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: var(--font-mono); margin-bottom: 0.6rem;">
            Key Project Deliverables & Results
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; padding-left: 0;">
            ${data.results.map(r => `
              <li style="color: #94a3b8; font-size: 0.9rem; display: flex; align-items: flex-start; gap: 0.6rem;">
                <span style="color: #a3e635; font-weight: bold;">✓</span> ${r}
              </li>
            `).join('')}
          </ul>
        </div>
        <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <a href="#contact" onclick="document.getElementById('projectDetailsModal').classList.remove('active')" 
             style="background: #a3e635; color: #0c160e; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 0.5rem;">
            Inquire Similar Project ↗
          </a>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

/* ==========================================================================
   5. SERVICE BOOKING INTERACTION
   ========================================================================== */
function initServiceBooking() {
  const serviceLinks = document.querySelectorAll('.service-action-link');
  const serviceSelect = document.getElementById('contactServiceSelect');

  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceName = link.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
    });
  });
}

/* ==========================================================================
   6. COPY ACTIONS (EMAIL & PHONE)
   ========================================================================== */
function initCopyActions() {
  const copyEmailBtns = document.querySelectorAll('.action-copy-email');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'wwwmirsha7123@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email address copied to clipboard!');
      }).catch(() => {
        showToast('Email: wwwmirsha7123@gmail.com');
      });
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   7. CONTACT FORM SUBMISSION
   Allows direct WhatsApp or Email launch with pre-filled content!
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const service = document.getElementById('contactServiceSelect').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email) {
      alert('Please provide your name and email address.');
      return;
    }

    const encodedText = encodeURIComponent(
      `Hello Mirsha! I visited your portfolio.\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Service Required:* ${service}\n` +
      `*Message:* ${message}`
    );

    // Open WhatsApp directly with prefilled message to Mirsha's number 8137001487
    const whatsappUrl = `https://wa.me/918137001487?text=${encodedText}`;
    
    // Also build mailto fallback option
    const mailtoUrl = `mailto:wwwmirsha7123@gmail.com?subject=Project Inquiry from ${name}&body=${encodedText}`;

    showToast('🚀 Launching WhatsApp to send your message directly to Mirsha...');
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);

    form.reset();
  });
}

/* ==========================================================================
   8. SKILL BAR ANIMATION
   ========================================================================== */
function initSkillBarAnimation() {
  const skillFills = document.querySelectorAll('.skill-fill');
  if (!skillFills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillFills.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          if (targetWidth) {
            bar.style.width = targetWidth;
          }
        });
      }
    });
  }, { threshold: 0.2 });

  const skillsPanel = document.querySelector('.technical-skills-panel');
  if (skillsPanel) {
    observer.observe(skillsPanel);
  }
}
