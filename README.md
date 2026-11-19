# BEKAT-9 — Toshkent Metro & Public Transport Guide

A responsive, single-page web application and interactive guide for the **Tashkent Metro and Public Transport Network** (Toshkent Metropoliteni). Built with **100% pure HTML5 and modern CSS3** (zero JavaScript), featuring skeuomorphic glassmorphic design inspired by modern rolling stock and station hardware.

---

## Overview

**BEKAT-9** provides residents and visitors of Tashkent with a fast public transit companion. It features an instant station directory across all 4 operational metro lines, connecting bus route lookups, transfer hub guides, an interactive pure CSS ATTO fare calculator with turnstile simulation, pure CSS line filters, and live line overviews.

---

## Key Features

### 1. Modern Metro Train Cabin Navbar
- Styled after the aerodynamic front cabin and windshield of a modern Tashkent Metro train.
- **Dynamic Livery Accent Stripe**: Dynamically transitions its glowing color (Red, Blue, Green, Yellow, or Cyan) in pure CSS based on the currently selected metro line.
- **Integrated Cockpit Controls**: Includes glowing LED headlights, operating transit schedule HUD (`05:00 – 00:00 Daily • Tashkent`), and a pure CSS Light Mode toggle.

### 2. Full-Screen Cinematic Video Hero
- Immersive `100vh` full-screen video background (`assets/metro-hero.mp4`) with a dark gradient overlay.
- Centered static hero typography and tactile frosted-glass CTA buttons (`Explore Stations` and `Calculate Fare`) with native smooth scrolling.

### 3. All 50 Metro Stations & Bus Feeder Directory
- Complete native HTML directory covering all 50 operational stations across Tashkent:
  - **Chilonzor Line (Red)**: 17 stations
  - **Oʻzbekiston Line (Blue)**: 11 stations
  - **Yunusobod Line (Green)**: 8 stations
  - **Halqa / Circle Line (Yellow)**: 14 stations
- Station cards display line color dots, transfer interchanges, and connecting municipal bus badges.

### 4. Pure CSS Line & Quick Filters
- **Zero-JS State Engine**: Uses modern CSS `:has()` pseudo-class with radio inputs to instantly filter stations by transit line (*All Lines*, *Chilonzor*, *Oʻzbekiston*, *Yunusobod*, *Halqa*).
- **Quick Filters**: Instant pure CSS filtering for *All Stations*, *Transfer Hubs*, *Airport Bus (58)*, and *Express Lines*.
- **Interactive Overview Cards**: Clicking any line overview card automatically activates that line's filter in pure CSS.

### 5. Interactive ATTO Fare Calculator & Turnstile Simulator
- **Fare Tariff Selection**: Choose between Standard ATTO Card (2,000 UZS), Student & Pensioner Privilege (1,000 UZS), and Single-Ride Paper QR (3,000 UZS).
- **Turnstile Simulator**: Tactile "Tap ATTO Turnstile" button with interactive `:active` and `:focus` states providing visual entry clearance.

### 6. Major Transfer Hubs & Interchanges
- Visual transfer cards highlighting Tashkent's core subway transfer nodes:
  - **Amir Temur Xiyoboni &harr; Yunus Rajabiy** (Chilonzor &harr; Yunusobod)
  - **Paxtakor &harr; Alisher Navoiy** (Chilonzor &harr; Oʻzbekiston)
  - **Oybek &harr; Ming Oʻrik** (Oʻzbekiston &harr; Yunusobod)
  - **Texnopark (Doʻstlik-2) &harr; Doʻstlik** (Halqa &harr; Oʻzbekiston)
  - **Qipchoq (Chinor / 14-Bekat)** (Halqa &harr; Chilonzor)

### 7. Key Bus Corridors & Airport / Railway Links
- Quick-reference cards for major transit gates:
  - **Tashkent International Airport** (Buses 11, 40, 67, 76)
  - **Northern Railway Station (Toshkent Markaziy Vokzali)** (Buses 12, 22, 26, 60, 91)
  - **Chorsu Bazaar & Old City Hub** (Buses 11, 35, 42, 46, E1 Express)

### 8. Metro Train Tail-Light Footer
- Styled after the rear carriage of a metro train, featuring glowing red LED tail-lights, operating hours indicator (05:00 – 00:00), network status, and a smooth back-to-top button.

---

## Design System

- **Obsidian Dark Glassmorphism**: Pure black `#000000` base with frosted glass panels (`backdrop-filter: blur(16px)`, `rgba(255, 255, 255, 0.05)`).
- **Pure CSS Light Mode**: Clean silver/white titanium theme activated via `:has(#themeModeToggle:checked)`.
- **Tactile Skeuomorphism**: Beveled buttons with realistic `:active` depress offsets, physical toggle switches, and glowing LED status lamps.
- **Pure CSS Ambient Particles**: 60fps GPU-accelerated particle telemetry grid without external scripts.

---

## Tech Stack

- **HTML5** &bull; 100% semantic structure, pure HTML state management, responsive video background.
- **CSS3** &bull; Modern CSS `:has()` pseudo-class selectors, CSS custom properties, flexbox/grid layout, smooth scroll.
- **Bootstrap 5.3.3 CSS** (CDN) &bull; Responsive layout grid and utility classes (CSS-only).
- **Font Awesome 6.5.1** (CDN) &bull; Transit, subway, bus, clock, and UI icons.
- **Zero JavaScript** &bull; Completely free of client-side scripts for maximum speed, security, and battery efficiency.

---

## Project Structure

```text
bekat-9/
├── assets/
│   └── metro-hero.mp4      # Background video loop for hero section
├── index.html              # 100% pure HTML application structure (50 stations)
├── style.css               # Complete stylesheet, pure CSS filters & light mode
├── train.mp4               # Source video asset
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites
No build steps, package managers, node modules, or compilers are required.

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
   - Using a local HTTP server:
     ```bash
     python -m http.server 8080
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
