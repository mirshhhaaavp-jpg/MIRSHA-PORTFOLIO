import os

icons = {
    "chatgpt.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#10a37f" fill-opacity="0.15" stroke="#10a37f" stroke-width="1.5"/>
  <path d="M37.5 21.6a8.4 8.4 0 0 0-.7-6.9 8.5 8.5 0 0 0-8.9-4.1 8.4 8.4 0 0 0-6.1-2.7c-4.4 0-8 3.4-8.3 7.8a8.5 8.5 0 0 0-5.3 4 8.5 8.5 0 0 0 .9 9.8 8.4 8.4 0 0 0 .7 6.9 8.5 8.5 0 0 0 8.9 4.1 8.4 8.4 0 0 0 6.1 2.7c4.4 0 8-3.4 8.3-7.8a8.5 8.5 0 0 0 5.3-4 8.5 8.5 0 0 0-.9-9.8zm-13.5 17c-1.5 0-2.9-.4-4.2-1.2l.5-.9 3.5-6.1c.3-.5.9-.9 1.5-.9h.1c.6 0 1.2.3 1.5.8l2.9 5.1c-1.7 2-3.8 3.2-5.8 3.2zm-9.3-5.3c-.9-1.2-1.4-2.7-1.4-4.3 0-1.8.6-3.4 1.7-4.8l3.6 2.1c.5.3.8.9.8 1.5v7.1c-1.8-.3-3.4-1.2-4.7-1.6zm-1.8-12.7c.6-1.4 1.7-2.6 3.1-3.3l3.5 6.1c.3.5.3 1.2 0 1.7l-3.5 6.1c-1.4-1.6-2.3-3.7-2.3-5.9-.1-1.6.4-3.2-.8-4.7zm15.4-3.9l-3.5-2.1c1.2-.5 2.6-.8 4-.8 2 0 3.9.7 5.4 2l-.5.9-3.5 6.1c-.3.5-.9.9-1.5.9h-.1c-.6 0-1.2-.3-1.5-.8l-2.9-5.1c1.2-.7 2.4-1.1 3.6-1.1zm9.4 5.3c.9 1.2 1.4 2.7 1.4 4.3 0 1.8-.6 3.4-1.7 4.8l-3.6-2.1c-.5-.3-.8-.9-.8-1.5v-7.1c1.8.3 3.4 1.2 4.7 1.6zm-4.7 12.1l-3.5-6.1c-.3-.5-.3-1.2 0-1.7l3.5-6.1c1.4 1.6 2.3 3.7 2.3 5.9.1 1.6-.4 3.2.8 4.7l-3.1 3.3z" fill="#10a37f"/>
</svg>''',

    "gemini.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#1e293b" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.5"/>
  <path d="M24 10C24 17.732 17.732 24 10 24C17.732 24 24 30.268 24 38C24 30.268 30.268 24 38 24C30.268 24 24 17.732 24 10Z" fill="url(#gemini_glow)"/>
  <defs>
    <linearGradient id="gemini_glow" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38bdf8"/>
      <stop offset="0.5" stop-color="#818cf8"/>
      <stop offset="1" stop-color="#c084fc"/>
    </linearGradient>
  </defs>
</svg>''',

    "claude.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#cc785c" fill-opacity="0.15" stroke="#cc785c" stroke-width="1.5"/>
  <path d="M28.5 13H19.5L13 35H18.5L20 30H28L29.5 35H35L28.5 13ZM21.5 25L24 17L26.5 25H21.5Z" fill="#cc785c"/>
</svg>''',

    "kling.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#6366f1" fill-opacity="0.15" stroke="#a3e635" stroke-width="1.5"/>
  <path d="M14 14V34L28 24L14 14Z" fill="#a3e635"/>
  <circle cx="32" cy="24" r="5" fill="#6366f1"/>
</svg>''',

    "nanobanana.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#facc15" fill-opacity="0.15" stroke="#facc15" stroke-width="1.5"/>
  <path d="M16 32C18 34 26 36 32 30C35 27 34 20 31 16C31 16 29 23 23 26C19 28 16 30 16 32Z" fill="#facc15"/>
  <circle cx="20" cy="18" r="3" fill="#a3e635"/>
</svg>''',

    "omniflash.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#ec4899" fill-opacity="0.15" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M26 11L15 25H23L21 37L33 22H25L26 11Z" fill="#f43f5e"/>
</svg>''',

    "seedance.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#8b5cf6" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1.5"/>
  <path d="M24 12C18 12 14 18 14 24C14 30 18 36 24 36C30 36 34 30 34 24C34 18 30 12 24 12ZM24 30C20.7 30 18 27.3 18 24C18 20.7 20.7 18 24 18C27.3 18 30 20.7 30 24C30 27.3 27.3 30 24 30Z" fill="#a78bfa"/>
  <circle cx="24" cy="24" r="3" fill="#a3e635"/>
</svg>''',

    "flow.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#06b6d4" fill-opacity="0.15" stroke="#22d3ee" stroke-width="1.5"/>
  <path d="M14 24C14 18.5 18.5 14 24 14C29.5 14 34 18.5 34 24C34 29.5 29.5 34 24 34" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="4" fill="#a3e635"/>
</svg>''',

    "canva.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#00c4cc" fill-opacity="0.15" stroke="#00c4cc" stroke-width="1.5"/>
  <circle cx="24" cy="24" r="12" stroke="#00c4cc" stroke-width="3"/>
  <path d="M21 21C22 19 25 19 26 21" stroke="#00c4cc" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M19 25C21 28 27 28 29 25" stroke="#00c4cc" stroke-width="2.5" stroke-linecap="round"/>
</svg>''',

    "capcut.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-width="1.5"/>
  <path d="M14 19L24 24L14 29V19Z" fill="#ffffff"/>
  <path d="M34 19L24 24L34 29V19Z" fill="#ffffff"/>
</svg>''',

    "photoshop.svg": '''<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#001e36" stroke="#31a8ff" stroke-width="1.5"/>
  <text x="14" y="31" fill="#31a8ff" font-family="-apple-system, sans-serif" font-size="18" font-weight="800">Ps</text>
</svg>'''
}

for filename, content in icons.items():
    with open(f"assets/icons/{filename}", "w") as f:
        f.write(content)

print(f"Generated {len(icons)} tool icons successfully!")
