import os

os.makedirs('assets/images', exist_ok=True)
os.makedirs('assets/icons', exist_ok=True)

# 1. Project DXB iHub Visual (Futuristic AI Innovation)
svg_dxb = '''<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_dxb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040905"/>
      <stop offset="50%" stop-color="#0c1d12"/>
      <stop offset="100%" stop-color="#05120a"/>
    </linearGradient>
    <radialGradient id="glow_dxb" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#a3e635" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#22c55e" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#040905" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="neon_line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a3e635"/>
      <stop offset="50%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg_dxb)"/>
  <rect width="800" height="500" fill="url(#glow_dxb)"/>
  
  <!-- Architectural futuristic grid & lines -->
  <g stroke="rgba(163, 230, 53, 0.15)" stroke-width="1">
    <line x1="0" y1="350" x2="800" y2="350"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="440" x2="800" y2="440"/>
    <line x1="0" y1="470" x2="800" y2="470"/>
    <!-- Perspective converging lines -->
    <line x1="400" y1="200" x2="0" y2="500"/>
    <line x1="400" y1="200" x2="200" y2="500"/>
    <line x1="400" y1="200" x2="400" y2="500"/>
    <line x1="400" y1="200" x2="600" y2="500"/>
    <line x1="400" y1="200" x2="800" y2="500"/>
  </g>

  <!-- Futuristic Dubai Skyline / Geometric Innovation Pavilion -->
  <polygon points="120,350 180,240 240,350" fill="rgba(163, 230, 53, 0.08)" stroke="rgba(163, 230, 53, 0.4)" stroke-width="1.5"/>
  <polygon points="260,350 340,160 420,350" fill="rgba(34, 197, 94, 0.12)" stroke="#a3e635" stroke-width="2"/>
  <polygon points="440,350 510,210 580,350" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
  <polygon points="560,350 630,260 700,350" fill="rgba(163, 230, 53, 0.06)" stroke="rgba(163, 230, 53, 0.3)" stroke-width="1.5"/>

  <!-- Neural Sphere / AI Core -->
  <circle cx="340" cy="160" r="45" fill="none" stroke="url(#neon_line)" stroke-width="2" stroke-dasharray="4 2"/>
  <circle cx="340" cy="160" r="25" fill="rgba(163, 230, 53, 0.2)"/>
  <circle cx="340" cy="160" r="8" fill="#ffffff"/>

  <!-- Glowing Badges / HUD Elements -->
  <rect x="50" y="45" width="130" height="32" rx="16" fill="rgba(0, 0, 0, 0.6)" stroke="#a3e635" stroke-width="1"/>
  <circle cx="68" cy="61" r="5" fill="#a3e635"/>
  <text x="82" y="66" fill="#a3e635" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="1">DXB iHUB</text>

  <rect x="620" y="45" width="130" height="32" rx="16" fill="rgba(0, 0, 0, 0.6)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  <text x="640" y="66" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="11" font-weight="500">AI VISUALS • 2026</text>

  <!-- Title overlay inside artwork -->
  <text x="60" y="420" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">Dxb iHub</text>
  <text x="60" y="445" fill="#a3e635" font-family="-apple-system, sans-serif" font-size="14" font-weight="500">AI Visual Direction &amp; Innovation Branding Campaign</text>
</svg>'''

with open('assets/images/project-dxb.svg', 'w') as f:
    f.write(svg_dxb)

# 2. Project Accubate Health Care (Medical / Biotech AI Storytelling)
svg_accubate = '''<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_acc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020d09"/>
      <stop offset="50%" stop-color="#071e16"/>
      <stop offset="100%" stop-color="#03120d"/>
    </linearGradient>
    <radialGradient id="glow_acc" cx="60%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#059669" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#020d09" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="dna_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="50%" stop-color="#a3e635"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg_acc)"/>
  <rect width="800" height="500" fill="url(#glow_acc)"/>

  <!-- Pulse / ECG waveform wave -->
  <path d="M 0,250 L 180,250 L 210,220 L 235,285 L 260,170 L 285,320 L 310,240 L 330,255 L 350,250 L 800,250" 
        fill="none" stroke="rgba(52, 211, 153, 0.4)" stroke-width="2.5"/>
  <path d="M 0,250 L 180,250 L 210,220 L 235,285 L 260,170 L 285,320 L 310,240 L 330,255 L 350,250 L 800,250" 
        fill="none" stroke="#a3e635" stroke-width="1.5" stroke-dasharray="120 400" stroke-linecap="round"/>

  <!-- Molecular / AI network nodes -->
  <g fill="none" stroke="rgba(163, 230, 53, 0.25)" stroke-width="1.5">
    <circle cx="560" cy="180" r="50"/>
    <circle cx="680" cy="220" r="35"/>
    <circle cx="600" cy="310" r="45"/>
    <circle cx="500" cy="270" r="28"/>
    <line x1="560" y1="180" x2="680" y2="220"/>
    <line x1="680" y1="220" x2="600" y2="310"/>
    <line x1="600" y1="310" x2="500" y2="270"/>
    <line x1="500" y1="270" x2="560" y2="180"/>
  </g>
  <!-- Node glowing spheres -->
  <circle cx="560" cy="180" r="10" fill="#a3e635"/>
  <circle cx="680" cy="220" r="8" fill="#34d399"/>
  <circle cx="600" cy="310" r="9" fill="#06b6d4"/>
  <circle cx="500" cy="270" r="7" fill="#86efac"/>

  <!-- Badges -->
  <rect x="50" y="45" width="190" height="32" rx="16" fill="rgba(0, 0, 0, 0.6)" stroke="#34d399" stroke-width="1"/>
  <circle cx="68" cy="61" r="5" fill="#34d399"/>
  <text x="82" y="66" fill="#34d399" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="1">ACCUBATE HEALTH</text>

  <!-- Title overlay inside artwork -->
  <text x="60" y="420" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">Accubate Health Care</text>
  <text x="60" y="445" fill="#34d399" font-family="-apple-system, sans-serif" font-size="14" font-weight="500">AI Medical Storytelling &amp; Social Video Campaigns</text>
</svg>'''

with open('assets/images/project-accubate.svg', 'w') as f:
    f.write(svg_accubate)

# 3. Project VILAVIL (Luxury / Fashion & Product AI Cinema)
svg_vilavil = '''<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_vila" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1009"/>
      <stop offset="50%" stop-color="#182312"/>
      <stop offset="100%" stop-color="#090e07"/>
    </linearGradient>
    <radialGradient id="gold_spot" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#a3e635" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0b1009" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bottle_glass" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)"/>
      <stop offset="30%" stop-color="rgba(251, 191, 36, 0.2)"/>
      <stop offset="70%" stop-color="rgba(163, 230, 53, 0.3)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.5)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg_vila)"/>
  <rect width="800" height="500" fill="url(#gold_spot)"/>

  <!-- Luxury Podium / Pedestal -->
  <ellipse cx="400" cy="370" rx="190" ry="24" fill="#070c06" stroke="rgba(251, 191, 36, 0.4)" stroke-width="1.5"/>
  <ellipse cx="400" cy="365" rx="180" ry="20" fill="rgba(163, 230, 53, 0.1)"/>

  <!-- High-end luxury bottle / product silhouette -->
  <rect x="350" y="160" width="100" height="180" rx="16" fill="url(#bottle_glass)" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <rect x="375" y="125" width="50" height="35" rx="4" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5"/>
  <rect x="388" y="105" width="24" height="20" rx="2" fill="#e2e8f0"/>

  <!-- Light refraction beams -->
  <line x1="330" y1="120" x2="260" y2="400" stroke="rgba(251, 191, 36, 0.15)" stroke-width="40" stroke-linecap="round"/>
  <line x1="470" y1="120" x2="540" y2="400" stroke="rgba(163, 230, 53, 0.15)" stroke-width="40" stroke-linecap="round"/>

  <!-- Product Label -->
  <rect x="365" y="210" width="70" height="80" rx="6" fill="rgba(10, 16, 11, 0.85)" stroke="#fbbf24" stroke-width="1"/>
  <text x="400" y="245" fill="#ffffff" font-family="Georgia, serif" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="2">VILA</text>
  <text x="400" y="265" fill="#fbbf24" font-family="Georgia, serif" font-size="10" font-weight="400" text-anchor="middle" letter-spacing="3">VIL</text>

  <!-- Badges -->
  <rect x="50" y="45" width="150" height="32" rx="16" fill="rgba(0, 0, 0, 0.6)" stroke="#fbbf24" stroke-width="1"/>
  <circle cx="68" cy="61" r="5" fill="#fbbf24"/>
  <text x="82" y="66" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="1">VILAVIL LUXURY</text>

  <!-- Title overlay inside artwork -->
  <text x="60" y="420" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">VILAVIL</text>
  <text x="60" y="445" fill="#fbbf24" font-family="-apple-system, sans-serif" font-size="14" font-weight="500">Cinematic AI Product Content &amp; Luxury Commercials</text>
</svg>'''

with open('assets/images/project-vilavil.svg', 'w') as f:
    f.write(svg_vilavil)

# 4. Hero Portrait Cutout Silhouette (Matching Shameem sitting pose on stool)
svg_hero = '''<svg width="600" height="800" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hero_spot" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#2a4732" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#142419" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0a120b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="body_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#222b24"/>
      <stop offset="50%" stop-color="#111612"/>
      <stop offset="100%" stop-color="#090c0a"/>
    </linearGradient>
    <linearGradient id="stool_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3a2f26"/>
      <stop offset="100%" stop-color="#1b1510"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.9"/>
    </filter>
  </defs>

  <!-- Ambient floor shadow -->
  <ellipse cx="300" cy="740" rx="190" ry="24" fill="#000000" opacity="0.7"/>

  <!-- High-fashion Creator Silhouette / Studio Model (Seated on Stool) -->
  <g filter="url(#shadow)">
    <!-- Wooden Stool Legs -->
    <polygon points="260,540 245,730 255,730 270,540" fill="url(#stool_grad)"/>
    <polygon points="340,540 355,730 345,730 330,540" fill="url(#stool_grad)"/>
    <polygon points="295,540 297,720 305,720 305,540" fill="#140f0c"/>
    <!-- Stool rungs -->
    <rect x="252" y="630" width="96" height="8" rx="3" fill="#2b211a"/>
    <!-- Stool seat -->
    <ellipse cx="300" cy="540" rx="55" ry="14" fill="#4a3b30" stroke="#1f1813" stroke-width="2"/>

    <!-- Shoes (Polished black leather) -->
    <path d="M 280,685 Q 260,705 275,725 L 305,720 Q 310,695 295,685 Z" fill="#080808" stroke="#333" stroke-width="1"/>
    <path d="M 315,725 Q 330,735 345,745 L 375,735 Q 360,715 335,715 Z" fill="#0d0d0d" stroke="#333" stroke-width="1"/>

    <!-- Trousers / Legs (Black tailored trousers draped over stool) -->
    <path d="M 245,480 Q 215,530 230,590 L 265,680 L 295,670 L 280,560 Q 300,530 305,480 Z" fill="url(#body_grad)"/>
    <path d="M 305,480 Q 345,510 350,560 L 340,650 L 365,720 L 390,710 L 360,580 Q 355,510 325,475 Z" fill="#121814"/>

    <!-- Torso (Black stylish overshirt / button-down with folded sleeves) -->
    <path d="M 235,330 C 220,380 230,460 250,500 L 350,490 C 370,450 375,370 360,330 Z" fill="url(#body_grad)"/>
    <!-- Shirt collar & placket -->
    <path d="M 285,290 L 300,340 L 315,290 L 305,275 Z" fill="#1a221c" stroke="#2c3a2f" stroke-width="1"/>
    <line x1="300" y1="340" x2="300" y2="480" stroke="#253228" stroke-width="2"/>
    <!-- Buttons -->
    <circle cx="300" cy="370" r="2.5" fill="#a3e635"/>
    <circle cx="300" cy="405" r="2.5" fill="#a3e635"/>
    <circle cx="300" cy="440" r="2.5" fill="#a3e635"/>

    <!-- Left Arm resting on knee -->
    <path d="M 240,335 Q 210,390 220,440 L 260,490 L 275,470 L 245,420 Q 245,370 255,335 Z" fill="#151d17"/>
    <!-- Left Hand / Watch -->
    <ellipse cx="270" cy="485" rx="10" ry="14" fill="#a37e5e"/>
    <rect x="258" y="468" width="12" height="6" rx="2" fill="#d4af37"/> <!-- Gold watch -->

    <!-- Right Arm leaning back casually -->
    <path d="M 355,335 Q 380,390 380,450 L 360,530 L 345,525 L 360,450 Q 360,390 345,335 Z" fill="#18201a"/>
    <ellipse cx="350" cy="535" rx="10" ry="12" fill="#a37e5e"/>

    <!-- Neck -->
    <path d="M 288,255 L 288,285 L 312,285 L 312,255 Z" fill="#b08a69"/>

    <!-- Head & Hair (Modern styled volume hair & beard) -->
    <path d="M 275,210 Q 270,250 285,268 Q 300,278 315,268 Q 330,250 325,210 Q 320,175 300,175 Q 280,175 275,210 Z" fill="#bd9573"/>
    <!-- Well-groomed Beard & Mustache -->
    <path d="M 280,238 Q 285,270 300,274 Q 315,270 320,238 Q 310,250 300,250 Q 290,250 280,238 Z" fill="#1c1917"/>

    <!-- Sunglasses (Modern black geometric frames like reference) -->
    <rect x="280" y="215" width="18" height="13" rx="4" fill="#000000" stroke="#333" stroke-width="1"/>
    <rect x="302" y="215" width="18" height="13" rx="4" fill="#000000" stroke="#333" stroke-width="1"/>
    <line x1="298" y1="220" x2="302" y2="220" stroke="#333" stroke-width="2"/>
    <!-- Tint reflection -->
    <line x1="283" y1="218" x2="293" y2="224" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
    <line x1="305" y1="218" x2="315" y2="224" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>

    <!-- Hair (Voluminous textured top) -->
    <path d="M 268,210 C 265,170 280,150 300,148 C 325,146 335,168 332,205 C 335,185 320,165 300,165 C 282,165 270,185 268,210 Z" fill="#181513"/>
    <path d="M 270,185 C 285,150 320,150 330,175 C 322,160 295,158 275,180 Z" fill="#29231f"/>
  </g>
</svg>'''

with open('assets/images/hero-silhouette.svg', 'w') as f:
    f.write(svg_hero)

# 5. About Me Portrait (Warm/Foliage Background with Creator)
svg_about = '''<svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="about_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142618"/>
      <stop offset="40%" stop-color="#243d2b"/>
      <stop offset="70%" stop-color="#1b2e20"/>
      <stop offset="100%" stop-color="#0a140d"/>
    </linearGradient>
    <radialGradient id="sun_glow" cx="20%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#84cc16" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#142618" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="warm_shirt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c26a38"/>
      <stop offset="60%" stop-color="#a05228"/>
      <stop offset="100%" stop-color="#7c3a1d"/>
    </linearGradient>
  </defs>

  <rect width="600" height="700" rx="28" fill="url(#about_bg)"/>
  <rect width="600" height="700" rx="28" fill="url(#sun_glow)"/>

  <!-- Artistic foliage silhouettes in background -->
  <g fill="rgba(8, 20, 12, 0.45)">
    <circle cx="80" cy="120" r="90"/>
    <circle cx="180" cy="80" r="70"/>
    <circle cx="480" cy="140" r="110"/>
    <circle cx="560" cy="90" r="80"/>
  </g>

  <!-- Creator in warm rust/caramel overshirt with sunglasses -->
  <g id="creator_about">
    <!-- Torso / Warm Caramel Shirt -->
    <path d="M 160,420 C 140,490 120,620 110,700 L 490,700 C 480,620 460,490 440,420 C 390,380 340,370 300,375 C 260,370 210,380 160,420 Z" fill="url(#warm_shirt)"/>
    <!-- Folded sleeves & arms crossed / leaning -->
    <path d="M 160,430 Q 180,560 250,600 L 290,560 Q 230,510 200,430 Z" fill="#8c441e"/>
    <path d="M 440,430 Q 420,560 350,600 L 310,560 Q 370,510 400,430 Z" fill="#753817"/>
    <!-- Watch / Wrist accessory -->
    <rect x="240" y="550" width="18" height="26" rx="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>

    <!-- Shirt collar -->
    <path d="M 265,370 L 300,430 L 335,370 L 300,360 Z" fill="#e28a55"/>
    <line x1="300" y1="430" x2="300" y2="650" stroke="#5c2b12" stroke-width="2.5"/>

    <!-- Neck & Jaw -->
    <path d="M 275,320 L 275,370 L 325,370 L 325,320 Z" fill="#bd926f"/>

    <!-- Head & Beard -->
    <path d="M 260,250 Q 255,305 275,325 Q 300,338 325,325 Q 345,305 340,250 Q 335,200 300,200 Q 265,200 260,250 Z" fill="#cfa27c"/>
    <path d="M 265,280 Q 275,325 300,332 Q 325,325 335,280 Q 320,298 300,298 Q 280,298 265,280 Z" fill="#201b17"/>

    <!-- Sunglasses -->
    <rect x="268" y="245" width="28" height="20" rx="5" fill="#000000" stroke="#222" stroke-width="1.5"/>
    <rect x="304" y="245" width="28" height="20" rx="5" fill="#000000" stroke="#222" stroke-width="1.5"/>
    <line x1="296" y1="252" x2="304" y2="252" stroke="#222" stroke-width="3"/>
    <line x1="272" y1="250" x2="288" y2="258" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    <line x1="308" y1="250" x2="324" y2="258" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>

    <!-- Hair -->
    <path d="M 252,240 C 248,185 275,160 300,158 C 330,155 352,185 348,240 C 352,205 332,180 300,180 C 272,180 256,205 252,240 Z" fill="#1c1714"/>
  </g>
</svg>'''

with open('assets/images/about-portrait.svg', 'w') as f:
    f.write(svg_about)

print("Generated all primary SVG graphics successfully!")
