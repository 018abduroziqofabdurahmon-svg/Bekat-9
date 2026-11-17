# BEKAT-9 — Toshkent Metro & Public Transport Guide

A responsive, single-page web application and interactive guide for the **Tashkent Metro and Public Transport Network** (Toshkent Metropoliteni). Built with modern HTML5, CSS3, vanilla JavaScript, and skeuomorphic glassmorphic design inspired by modern rolling stock and station hardware.

---

## Overview

**BEKAT-9** provides residents and visitors of Tashkent with a fast, real-time public transit companion. It features an instant station search directory across all 4 operational metro lines, connecting bus route lookups, transfer hub guides, an interactive ATTO fare calculator with turnstile audio simulation, and live line overviews.

---

## Key Features

### 1. Modern Metro Train Cabin Navbar
- Styled after the aerodynamic front cabin and windshield of a modern Tashkent Metro train.
- **Dynamic Livery Accent Stripe**: Dynamically transitions its glowing color (Red, Blue, Green, Yellow, or Cyan) based on the currently selected metro line.
- **Integrated Cockpit Controls**: Includes glowing LED headlights, a live digital Tashkent time clock (`Asia/Tashkent`), and a light mode toggle.

### 2. Full-Screen Cinematic Video Hero
- Immersive `100vh` full-screen video background (`assets/metro-hero.mp4`) with a dark gradient overlay.
- Centered static hero typography and tactile frosted-glass CTA buttons (`Explore Stations` and `Calculate Fare`) that smoothly scroll to key modules.

### 3. Real-Time Station Search & Bus Connections
- **Instant Search**: Filter across 50+ stations by name, line, or connecting city bus route numbers.
- **Quick Filters**: Toggle between *All Stations*, *Transfer Hubs*, and *Bus Connections*.
- **Station Cards**: Display station name, line color badge, transfer interchange links, and clickable connecting bus pills.

### 4. Interactive ATTO Fare Calculator & Turnstile Simulator
- **Fare Presets**: Standard ATTO Card (2,000 UZS), Student / Pensioner Discount (1,000 UZS), and Multi-Ride passes.
- **Passenger Stepper**: Increment or decrement riders (1–50) with animated real-time total computation.
- **Turnstile Simulator**: Click "Tap ATTO Card" to trigger an interactive Web Audio API synthesized entry chime and turnstile clearance visual indicator.

### 5. Interactive Metro Lines Directory
- Comprehensive 4-column overview of all operational lines:
  - **Chilonzor Line (Red)**: 17 stations &bull; 23.7 km &bull; 3–5 min interval
  - **Oʻzbekiston Line (Blue)**: 11 stations &bull; 14.3 km &bull; 4–6 min interval
  - **Yunusobod Line (Green)**: 8 stations &bull; 10.5 km &bull; 5–8 min interval
  - **Halqa / Circle Line (Yellow)**: 14 stations &bull; 18.0 km &bull; 8–10 min interval
- Clicking any line overview card automatically filters the station directory.

### 6. Major Transfer Hubs & Interchanges
- Visual transfer cards highlighting Tashkent's core subway transfer nodes:
  - **Amir Temur Xiyoboni &harr; Yunus Rajabiy** (Chilonzor &harr; Yunusobod)
  - **Paxtakor &harr; Alisher Navoiy** (Chilonzor &harr; Oʻzbekiston)
  - **Oybek &harr; Ming Oʻrik** (Oʻzbekiston &harr; Yunusobod)
  - **Texnopark (Doʻstlik-2) &harr; Doʻstlik** (Halqa &harr; Oʻzbekiston)
  - **Qipchoq (Chinor / 14-Bekat)** (Halqa &harr; Chilonzor)

### 7. Key Bus Corridors & Airport / Railway Links
- Quick-reference cards for major transit gates:
  - **Tashkent International Airport** (Buses 11, 40, 67, 77)
  - **Northern Railway Station (Toshkent Markaziy Vokzali)** (Buses 12, 22, 26, 40, 60, 91)
  - **Southern Railway Station (Janubiy Vokzal)** (Buses 38, 70, 84, 118)
  - **Chorsu Bazaar & Old City Hub** (Buses 11, 35, 42, 46, E1 Express)

### 8. Metro Train Tail-Light Footer
- Styled after the rear carriage of a metro train, featuring glowing red LED tail-lights, operating hours indicator (05:00 – 00:00), network status, and a smooth back-to-top button.

---

## Design System

- **Obsidian Dark Glassmorphism**: Pure black `#000000` base with frosted glass panels (`backdrop-filter: blur(16px)`, `rgba(255, 255, 255, 0.05)`).
- **Tactile Skeuomorphism**: Beveled buttons with realistic `:active` depress offsets, physical toggle switches, and glowing LED status lamps.
- **Crisp High-Contrast Typography**: System UI font stack with `#ffffff` headlines and `#a1a1aa` / `#cbd5e1` high-contrast sub-labels.
- **Web Audio API**: Real-time synthetic multi-oscillator transit chimes without requiring external audio files.

---

## Tech Stack & CDN Dependencies

- **HTML5** &bull; Semantic structure, responsive video background, accessibility tags.
- **CSS3** &bull; Custom CSS variables, flexbox/grid layout, hardware-accelerated animations, glassmorphism filters.
- **JavaScript (ES6+)** &bull; Pure vanilla JS, event-driven search filtering, Web Audio API synthesis.
- **Bootstrap 5.3.3** (CDN) &bull; Responsive layout grid and utility classes.
- **Font Awesome 6.5.1** (CDN) &bull; Transit, subway, bus, clock, and UI icons.
- **AOS (Animate On Scroll) 2.3.4** (CDN) &bull; Scroll-reveal entrance animations.
- **particles.js 2.0.0** (CDN) &bull; Ambient telemetry background particle field.

---

## Project Structure

```text
bekat-9/
├── assets/
│   └── metro-hero.mp4      # Background video loop for hero section
├── index.html              # Main single-page application structure
├── style.css               # Complete stylesheet & glassmorphic design system
├── script.js               # Application logic, metro data, search & audio synthesis
├── train.mp4               # Source video asset
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites
No build steps, package managers, or compilers are required. You only need a modern web browser.

### Quick Run
1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/bekat-9.git
   cd bekat-9
   ```

2. Open `index.html` directly in any modern browser:
   - On Windows: Double-click `index.html` or run:
     ```powershell
     Start-Process index.html
     ```
   - Using a local HTTP server (recommended for optimal video streaming & audio policy):
     ```bash
     # Using Python 3
     python -m http.server 8080

     # Using Node.js (npx)
     npx serve .
     ```
3. Open your browser and navigate to `http://localhost:8080`.

---

## Tashkent Metro Quick Reference

| Line | Color | Stations | Length | Operating Hours | Frequency |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Chilonzor Line** | Red (`#ef4444`) | 17 | 23.7 km | 05:00 – 00:00 | 3–5 min |
| **Oʻzbekiston Line** | Blue (`#0ea5e9`) | 11 | 14.3 km | 05:00 – 00:00 | 4–6 min |
| **Yunusobod Line** | Green (`#10b981`) | 8 | 10.5 km | 05:00 – 00:00 | 5–8 min |
| **Halqa (Circle) Line** | Yellow (`#f59e0b`) | 14 | 18.0 km | 05:00 – 00:00 | 8–10 min |

### Fare Structure (ATTO Transit)
- **Standard ATTO Single Ride**: 2,000 UZS
- **Discounted (Student / Pensioner)**: 1,000 UZS
- **Cash / Single-use Paper QR**: 3,000 UZS
- **Operating Hours**: Daily from `05:00` to `00:00` (midnight).

---

## License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).
