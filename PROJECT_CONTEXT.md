# Project Context: Averio Tours & Safaris

## 1. Project Overview
**Averio Tours & Safaris Ltd** is a premium travel and tourism company based in Rwanda. The project is a high-end, performant web application designed to attract international tourists (Europe, USA, Asia) and local adventurers.

- **Tagline:** "Beyond Safaris, Into Experiences"
- **Target Audience:** Luxury travelers, wildlife enthusiasts (Gorilla trekking), and cultural explorers.
- **Goal:** To provide a seamless, visually stunning, and mobile-responsive booking and exploration experience.

---

## 2. Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Engine:** Turbopack
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (staggered transitions, hover effects, slider logic)
- **Icons:** Lucide React
- **Optimization:** Next/Image for high-resolution photography.

---

## 3. Brand Identity & Design System
### Colors
- **Forest Green:** `#1B4332` (Primary)
- **Warm Gold:** `#D4A373` (Secondary)
- **Safari Brown:** `#BC6C25` (Accent)

### Typography
- **Primary Font:** Montserrat (Bold, uppercase for headings/nav)
- **Secondary Font:** Open Sans (Body text)
- **Style:** Luxury/Minimalist, high tracking (letter spacing).

---

## 4. File Structure
```text
/app
  /about           # Page À propos
  /tours           # Liste de tous les packages
    /[slug]        # Page dynamique pour chaque tour
  /services        # Location de voiture, transferts, etc.
  /gallery         # Galerie photos interactive
  /contact         # Formulaire et Google Maps
/components
  /ui              # Boutons, Inputs, Cartes
  /shared          # Navbar, Footer, WhatsApp Button
  /home            # Hero Section, Featured Tours
/lib               # Configuration du CMS et utilitaires SEO
/public            # Root directory for images (img (1).jpg to img (31).jpg)