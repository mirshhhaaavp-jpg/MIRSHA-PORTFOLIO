/**
 * MIRSHA VP - AI CONTENT CREATOR PORTFOLIO
 * Client-Side Interactivity, Photo Management & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initNavigation();
  initHeroAnimation();
  initPhotoManager();
  initServicesAnimation();
  initPortfolioFilters();
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

  // Always display the official transparent cutout in the hero section and new street portrait in About section
  localStorage.removeItem('mirsha_hero_photo');
  localStorage.removeItem('mirsha_about_photo');
  if (heroImg) {
    heroImg.src = 'assets/images/mirsha-cutout.png';
  }
  if (aboutImg) {
    aboutImg.src = 'assets/images/mirsha-about.jpg';
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
      heroImg.src = 'assets/images/mirsha-cutout.png';
      aboutImg.src = 'assets/images/mirsha-about.jpg';
      showToast('Reset to original photo');
      photoModal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   4. PROJECT CASE STUDY MODALS
   Data for Dxb iHub, Accubate Health Care, and VILAVIL
   ========================================================================== */
const projectData = {
  food: {
    title: 'Food & Beverage Commercial — Gourmet Culinary Visuals',
    category: 'Food & Beverage Commercial Cinema',
    client: 'Culinary Brand & Gourmet Hospitality',
    video: 'assets/videos/food.mp4',
    image: 'assets/images/project-dxb.svg',
    summary: 'High-speed food cinematography, appetizing slow-motion sequences, and cinematic culinary visual storytelling engineered to drive engagement and taste appeal.',
    strategy: 'Combined dynamic fluid and food textures with macro camera motion control, capturing rich colors, steam, and sizzle with studio-grade color grading.',
    tools: ['AI Video Production', 'CapCut', 'Photoshop', 'Kling AI', 'Meta Ads'],
    results: [
      'Over 1.8M organic views across Instagram & TikTok reels',
      '48% higher viewer retention rate with macro visual hooks',
      'Engineered multi-format assets for social ads and digital branding'
    ]
  },
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
    video: 'assets/videos/healthcare.mp4',
    summary: 'High-trust, compassionate visual storytelling developed for a specialized healthcare and wellness network, communicating complex patient care empathetically.',
    strategy: 'Engineered precision prompts focused on microscopic cellular aesthetics, warm human clinical interactions, and patient recovery journeys without sterile medical tropes.',
    tools: ['ChatGPT Prompt Engineering', 'Seedance', 'Nano Banana', 'CapCut', 'Photoshop'],
    results: [
      '3.8x increase in patient consultation bookings via Meta Ads',
      'Recognized for human-first medical creative design',
      'Delivered 35+ high-performing vertical reels and poster assets'
    ]
  },
  jewelry: {
    title: 'Luxury Jewelry Commercial — Sapphire & Diamond Cinema',
    category: 'Haute Joaillerie & Luxury Jewelry Commercial',
    client: 'Fine Jewelry & Luxury Brand',
    video: 'assets/videos/jewelry.mp4',
    image: 'assets/images/project-vilavil.svg',
    summary: 'Ultra-luxury high-fashion jewelry commercial featuring sapphire and diamond modeling, photorealistic gemstones, exquisite studio light refractions, and cinematic slow-motion pacing.',
    strategy: 'Engineered advanced synthetic lighting and fluid motion prompts using Flow and Kling AI to capture facet reflections, diamond brilliance, and natural human model expressions.',
    tools: ['Kling AI', 'Flow', 'Photoshop', 'CapCut', 'Meta Ads'],
    results: [
      '3.2x higher return on ad spend across high-ticket jewelry campaigns',
      'Over 1.5M video views with exceptional engagement and luxury brand recall',
      'Adopted across e-commerce hero banners, social ads, and boutique displays'
    ]
  },
  burger: {
    title: 'Gourmet Burger Commercial — Dynamic Layer Assembly',
    category: 'Gourmet Fast Food & Commercial Cinema',
    client: 'Gourmet Burger Brand',
    video: 'assets/videos/burger.mp4',
    image: 'assets/images/project-dxb.svg',
    summary: 'Cinematic slow-motion gourmet burger commercial highlighting fresh artisan ingredients, succulent flame-grilled patties, melting cheddar, and gravity-defying layer assembly on the plate.',
    strategy: 'Utilized state-of-the-art AI video physics, fluid and steam simulation, and macro motion control to craft high-impact appetizing visual hooks designed for viral social ad sets.',
    tools: ['Kling AI', 'CapCut', 'Photoshop', 'Seedance', 'Meta Ads'],
    results: [
      '2.1M+ viral views across Instagram Reels & YouTube Shorts',
      '44% boost in customer conversion rates for limited-edition menu launch',
      'Engineered multi-angle vertical and horizontal cinematic commercials'
    ]
  },
  monster: {
    title: 'Monster Energy Commercial — High-Octane Beverage Cinema',
    category: 'Energy Drink & Commercial Cinema',
    client: 'Monster Energy Campaign',
    video: 'assets/videos/monster.mp4',
    image: 'assets/images/project-dxb.svg',
    summary: 'High-energy commercial spot combining liquid splash dynamics, condensation droplets, kinetic motion graphics, and neon visual storytelling designed for viral brand impact.',
    strategy: 'Leveraged generative fluid physics and high-speed motion camera tracking to simulate hyper-realistic energy drink pours, ice eruptions, and dynamic lighting.',
    tools: ['Kling AI', 'Flow', 'Photoshop', 'CapCut', 'Meta Ads'],
    results: [
      '3.4M+ cross-platform video views with high viewer retention',
      '52% higher engagement compared to static beverage ad creatives',
      'Optimized multi-ratio video exports for vertical reels and horizontal displays'
    ]
  },
  donut: {
    title: 'Veloure Pâtisserie — Premium Artisan Donut Commercial',
    category: 'Gourmet Bakery & Luxury Pâtisserie Commercial',
    client: 'Veloure Pâtisserie & Bakery',
    video: 'assets/videos/donut.mp4',
    image: 'assets/images/project-dxb.svg',
    summary: 'Decadent slow-motion pâtisserie commercial highlighting warm golden brioche dough, glossy artisan glaze cascades, rich chocolate swirls, and powdered sugar dusting.',
    strategy: 'Engineered macro culinary visual prompts using Kling AI and Flow, capturing ultra-fine sugar particles, liquid glaze viscosity, and warm bakery lighting to stimulate sensory appeal.',
    tools: ['Kling AI', 'Flow', 'Photoshop', 'CapCut', 'Meta Ads'],
    results: [
      '2.8M+ viral video views on Instagram Reels and TikTok',
      '47% increase in foot traffic and online bakery orders during campaign',
      'Engineered high-converting vertical video ad sets with 3.6x ROAS'
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

/* ==========================================================================
   4. PORTFOLIO CATEGORY FILTERS (Includes 'Healthcare' Option)
   ========================================================================== */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

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

      const mediaHtml = data.video
        ? `<div style="border-radius: 16px; overflow: hidden; margin-bottom: 1.5rem; border: 1px solid rgba(163,230,53,0.3); background: #000;">
             <video src="${data.video}" controls autoplay playsinline style="width: 100%; max-height: 420px; display: block; border-radius: 16px; background: #000;"></video>
           </div>`
        : `<div style="border-radius: 16px; overflow: hidden; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); background: #000;">
             <img src="${data.image}" alt="${data.title}" style="width: 100%; height: auto; max-height: 320px; object-fit: cover;">
           </div>`;

      modalContent.innerHTML = `
        ${mediaHtml}
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
          <a href="#contact" onclick="document.getElementById('projectDetailsModal').classList.remove('active'); const v = document.getElementById('projectDetailsModal').querySelector('video'); if (v) v.pause();" 
             style="background: #a3e635; color: #0c160e; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 0.5rem;">
            Inquire Similar Project ↗
          </a>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  function stopModalMedia() {
    modal.classList.remove('active');
    const vid = modal.querySelector('video');
    if (vid) vid.pause();
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', stopModalMedia);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) stopModalMedia();
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

/* ==========================================================================
   9. HERO INTERACTIVE PARALLAX ANIMATION
   Smooth 3D cursor tracking for spotlight & cutout portrait
   ========================================================================== */
function initHeroAnimation() {
  const heroCanvas = document.querySelector('.hero-canvas');
  const cutoutImg = document.querySelector('.hero-cutout-img');
  const spotlight = document.querySelector('.center-spotlight');

  if (!heroCanvas || !cutoutImg || window.innerWidth < 992) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  heroCanvas.addEventListener('mousemove', (e) => {
    const rect = heroCanvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    mouseX = x * 18;
    mouseY = y * 14;
  });

  heroCanvas.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });

  function tick() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    if (cutoutImg) {
      cutoutImg.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }
    if (spotlight) {
      spotlight.style.transform = `translate(-50%, -50%) translate3d(${currentX * 1.6}px, ${currentY * 1.6}px, 0)`;
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ==========================================================================
   10. SPECIALIZED SERVICES ANIMATION & SPOTLIGHT TRACKING
   Scroll reveal with staggered cascading entrance + reactive cursor spotlight
   ========================================================================== */
function initServicesAnimation() {
  const servicesGrid = document.querySelector('.services-grid');
  const serviceCards = document.querySelectorAll('.service-card');

  if (!servicesGrid) return;

  // 1. Scroll-triggered reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicesGrid.classList.add('is-visible');
        observer.unobserve(servicesGrid);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  observer.observe(servicesGrid);

  // 2. Cursor spotlight tracking on each card
  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
