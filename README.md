# The Urban Bulletin - Design System

A vintage newspaper-styled landing page for a live masterclass event, featuring 3D animated ticket cards and smooth animations.

---

## 🎨 Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Cocoa Brown | `#35281E` | Primary dark background, headers |
| Cocoa Dark | `#2a1f17` | Text, borders, accents |
| Gold | `#B59E5F` | Highlights, accents, CTAs |
| Gold Light | `#c9b577` | Hover states, secondary accents |
| Gold Dark | `#9a8650` | Borders, subtle accents |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#f5f0e1` | Main background (newspaper) |
| Cream Dark | `#e8e0c8` | Secondary backgrounds |
| Ink Black | `#1a1512` | Ticker bar, deep backgrounds |
| Aged Paper | `#d4c9a8` | Subtle backgrounds |
| Sepia | `#704214` | Body text, captions |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Highlight Red | `#c0392b` | Important highlights, "7 FIGURES" text |
| Pure Black | `#0a0a0a` | Ticket section background |

---

## 📝 Typography

### Font Families

1. **UnifrakturMaguntia** - Blackletter masthead title
   - Used for: "The Urban Bulletin" newspaper title
   - Weight: 400

2. **Playfair Display** - Elegant serif headlines
   - Used for: Main headlines, section titles
   - Weights: 400, 500, 600, 700, 800, 900

3. **Instrument Serif** - Modern serif for tickets
   - Used for: Ticket card titles
   - Style: Regular, Italic

4. **Old Standard TT** - Classic body text
   - Used for: Body copy, descriptions
   - Weights: 400, 700

5. **Special Elite** - Typewriter monospace
   - Used for: Labels, badges, ticker text
   - Weight: 400

6. **Space Grotesk** - Modern sans-serif
   - Used for: Ticket descriptions, badges
   - Weights: 300-700

7. **IM Fell English** - Vintage English
   - Used for: Decorative quotes, mottos

---

## 🎭 Design Elements

### Newspaper Aesthetic
- Vintage masthead with blackletter typography
- Decorative ornaments (❧) for section headers
- Column-style layouts
- Sepia-toned imagery
- Aged paper textures

### 3D Ticket Cards
- **Rotation Animation**: Cards continuously rotate left/right on Y-axis
- **Background Images**: Full-bleed photos with gradient overlays
- **Glassmorphism**: Frosted glass effect on badges and descriptions
- **SVG Border Lines**: Ticket-shaped borders with perforations
- **Grain Overlay**: Subtle noise texture for vintage feel

### Animations
- **Ticker Bar**: Infinite horizontal scroll
- **Ticket Rotation**: 7-9 second rotateY animations
- **Hover Effects**: Scale, shadow, and glow transitions
- **Scroll Animations**: Fade-in and slide-up on scroll
- **Accordion**: Smooth expand/collapse with icon rotation

---

## 📐 Layout Structure

```
├── Ticker Bar (sticky, infinite scroll)
├── Masthead (newspaper header)
├── Headline Section
├── Video Section
│   └── CTA Button + Badges
├── Ticket Cards Section (3D rotating)
├── CTA Section
├── FAQ Accordions
└── Footer
```

---

## 🎬 Animation Keyframes

### Ticker Scroll
```css
@keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```

### Ticket Rotation
```css
@keyframes ticket-rotate-1 {
    0%, 100% { transform: rotateY(-15deg) rotateX(2deg); }
    50% { transform: rotateY(15deg) rotateX(-2deg); }
}
```

---

## 🔧 CSS Custom Properties

```css
:root {
    --cocoa-brown: #35281E;
    --cocoa-dark: #2a1f17;
    --gold: #B59E5F;
    --gold-light: #c9b577;
    --gold-dark: #9a8650;
    --cream: #f5f0e1;
    --cream-dark: #e8e0c8;
    --ink-black: #1a1512;
    --aged-paper: #d4c9a8;
    --sepia: #704214;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `900px` | Tablet - Stack tickets vertically |
| `768px` | Large mobile - Reduce font sizes |
| `600px` | Mobile - Compact layouts |

---

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, 3D transforms
- **JavaScript** - Vanilla JS for interactions
- **Framer Motion** - Animation library (CDN)
- **Google Fonts** - Typography

---

## 📁 File Structure

```
urban-bulletin-page/
├── index.html          # Main HTML file
├── README.md           # This file
└── assets/
    ├── style.css       # All styles
    ├── index.js        # JavaScript interactions
    └── images/         # Local images (if any)
```

---

## 🎯 Design Inspiration

- Vintage newspaper layouts (San Diego Union, NY Times vintage editions)
- Movie/train ticket stub aesthetics
- Glassmorphism UI trends
- 3D card animations from Framer templates

---

## ✨ Key Features

1. **Moving Ticker Bar** - Continuous scroll with countdown timer
2. **Newspaper Masthead** - Blackletter title with vintage styling
3. **Embedded Video Player** - Full-width video with CTA below
4. **3D Rotating Tickets** - Three animated ticket cards with parallax
5. **Working Accordions** - Smooth FAQ section
6. **Responsive Design** - Works on all screen sizes

---

*Created for Urban Bulletin Live Masterclass - January 27-29, 2025*

