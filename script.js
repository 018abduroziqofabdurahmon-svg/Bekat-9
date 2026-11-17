const METRO_DATA = [
  {
    lineId: "chilonzor",
    lineName: "Chilonzor Line",
    lineColor: "#ef4444",
    stations: [
      { name: "Buyuk Ipak Yo'li", transfer: null, buses: ["1", "14", "28", "49"] },
      { name: "Pushkin", transfer: null, buses: ["14", "17", "24"] },
      { name: "Hamid Olimjon", transfer: null, buses: ["17", "58"] },
      { name: "Amir Temur Xiyoboni", transfer: "Transfer to Yunus Rajabiy (Yunusobod Line)", buses: ["38", "51", "58", "67"] },
      { name: "Mustaqillik Maydoni", transfer: null, buses: ["28", "44", "78"] },
      { name: "Paxtakor", transfer: "Transfer to Alisher Navoiy (Oʻzbekiston Line)", buses: ["11", "28", "37"] },
      { name: "Xalqlar Do'stligi", transfer: null, buses: ["33", "84", "98"] },
      { name: "Milliy Bog'", transfer: null, buses: ["33", "56", "84"] },
      { name: "Novza", transfer: null, buses: ["40", "56", "84"] },
      { name: "Mirzo Ulug'bek", transfer: null, buses: ["48", "84", "115"] },
      { name: "Chilonzor", transfer: null, buses: ["48", "84", "115", "131"] },
      { name: "Olmazor", transfer: null, buses: ["38", "70", "84", "118"] },
      { name: "Choshtepa", transfer: null, buses: ["38", "118"] },
      { name: "O'zgarish", transfer: null, buses: ["38", "86"] },
      { name: "Sirg'ali", transfer: null, buses: ["40", "86", "117"] },
      { name: "Yangihayot", transfer: null, buses: ["40", "117"] },
      { name: "Qipchoq (Chinor)", transfer: "Transfer to Halqa Line", buses: ["40", "117", "130"] }
    ]
  },
  {
    lineId: "ozbekiston",
    lineName: "Oʻzbekiston Line",
    lineColor: "#0ea5e9",
    stations: [
      { name: "Beruniy", transfer: null, buses: ["11", "28", "31", "88"] },
      { name: "Tinchlik", transfer: null, buses: ["11", "28", "34"] },
      { name: "Chorsu", transfer: null, buses: ["11", "35", "42", "46", "E1"] },
      { name: "G'afur G'ulom", transfer: null, buses: ["35", "42", "46"] },
      { name: "Alisher Navoiy", transfer: "Transfer to Paxtakor (Chilonzor Line)", buses: ["11", "28", "46"] },
      { name: "O'zbekiston", transfer: null, buses: ["37", "57", "98"] },
      { name: "Kosmonavtlar", transfer: null, buses: ["38", "57", "58", "67"] },
      { name: "Oybek", transfer: "Transfer to Ming O'rik (Yunusobod Line)", buses: ["38", "57", "58", "67"] },
      { name: "Toshkent", transfer: "Central Railway Station", buses: ["12", "22", "26", "40", "60", "91"] },
      { name: "Mashinasozlar", transfer: null, buses: ["10", "15", "22", "95"] },
      { name: "Do'stlik", transfer: "Transfer to Texnopark (Halqa Line)", buses: ["10", "15", "28", "72"] }
    ]
  },
  {
    lineId: "yunusobod",
    lineName: "Yunusobod Line",
    lineColor: "#10b981",
    stations: [
      { name: "Turkiston", transfer: null, buses: ["24", "72", "96", "124"] },
      { name: "Yunusobod", transfer: null, buses: ["24", "60", "72", "96"] },
      { name: "Shahriston", transfer: null, buses: ["24", "51", "60", "97"] },
      { name: "Bodomzor", transfer: "Tashkent TV Tower / Expo", buses: ["9", "24", "51", "67", "72"] },
      { name: "Minor", transfer: null, buses: ["9", "51", "72", "97"] },
      { name: "Abdulla Qodiriy", transfer: null, buses: ["51", "58", "67", "91"] },
      { name: "Yunus Rajabiy", transfer: "Transfer to Amir Temur (Chilonzor Line)", buses: ["38", "51", "58"] },
      { name: "Ming O'rik", transfer: "Transfer to Oybek (Oʻzbekiston Line)", buses: ["38", "57", "58", "67"] }
    ]
  },
  {
    lineId: "halqa",
    lineName: "Halqa (Circle) Line",
    lineColor: "#f59e0b",
    stations: [
      { name: "Texnopark (Do'stlik-2)", transfer: "Transfer to Do'stlik (Oʻzbekiston Line)", buses: ["10", "15", "28"] },
      { name: "Yashnobod", transfer: null, buses: ["15", "106"] },
      { name: "Tuzel", transfer: null, buses: ["15", "110"] },
      { name: "Olmos", transfer: null, buses: ["15", "30"] },
      { name: "Rohat", transfer: null, buses: ["30", "106"] },
      { name: "Yangiobod", transfer: null, buses: ["30", "48"] },
      { name: "Qo'yliq", transfer: "Qo'yliq Market Hub", buses: ["12", "13", "30", "48", "54", "93"] },
      { name: "Matonat", transfer: null, buses: ["13", "54"] },
      { name: "Qiyot", transfer: null, buses: ["13", "54", "86"] },
      { name: "Tolariq", transfer: null, buses: ["54", "86"] },
      { name: "Xonobod", transfer: null, buses: ["86", "117"] },
      { name: "Quruvchilar", transfer: null, buses: ["117"] },
      { name: "Turon", transfer: null, buses: ["117", "130"] },
      { name: "Qipchoq (14-Bekat)", transfer: "Transfer to Chilonzor Line (Chinor)", buses: ["40", "117", "130"] }
    ]
  }
];

let selectedLineFilter = "all";
let selectedQuickFilter = "all";
let searchKeyword = "";
let passengerCount = 1;
let audioCtx = null;

function playAudioChime() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!audioCtx) audioCtx = new AudioContextClass();
  if (audioCtx.state === "suspended") audioCtx.resume();
  
  const now = audioCtx.currentTime;
  const osc1 = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(880, now);
  gain1.gain.setValueAtTime(0.08, now);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  osc1.connect(gain1);
  gain1.connect(audioCtx.destination);
  osc1.start(now);
  osc1.stop(now + 0.13);

  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(1320, now + 0.08);
  gain2.gain.setValueAtTime(0.09, now + 0.08);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
  osc2.connect(gain2);
  gain2.connect(audioCtx.destination);
  osc2.start(now + 0.08);
  osc2.stop(now + 0.28);
}

function updateTashkentClock() {
  const el = document.getElementById("digitalClockDisplay");
  if (!el) return;
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const tsk = new Date(utc + 3600000 * 5);
  const hh = String(tsk.getHours()).padStart(2, "0");
  const mm = String(tsk.getMinutes()).padStart(2, "0");
  const ss = String(tsk.getSeconds()).padStart(2, "0");
  el.innerHTML = `<i class="fa-regular fa-clock me-1"></i>${hh}:${mm}:${ss} Tashkent`;
}

function updateFareDisplay() {
  const select = document.getElementById("fareTypeSelect");
  const priceDisplay = document.getElementById("totalFareDisplay");
  const countDisplay = document.getElementById("passengerCountDisplay");
  if (!select || !priceDisplay || !countDisplay) return;

  const unitRate = parseInt(select.value, 10) || 2000;
  const total = passengerCount * unitRate;
  countDisplay.innerText = passengerCount;
  priceDisplay.innerText = `${total.toLocaleString("en-US")} UZS`;
}

function renderStations() {
  const container = document.getElementById("stationsListContainer");
  if (!container) return;
  container.innerHTML = "";

  let list = [];
  METRO_DATA.forEach(line => {
    if (selectedLineFilter === "all" || selectedLineFilter === line.lineId) {
      line.stations.forEach(st => {
        list.push({
          ...st,
          lineId: line.lineId,
          lineName: line.lineName,
          lineColor: line.lineColor
        });
      });
    }
  });

  if (selectedQuickFilter === "transfer") {
    list = list.filter(s => s.transfer !== null);
  } else if (selectedQuickFilter === "airport") {
    list = list.filter(s => s.buses.includes("58"));
  } else if (selectedQuickFilter === "express") {
    list = list.filter(s => s.buses.some(b => b.startsWith("E")));
  }

  if (searchKeyword) {
    list = list.filter(s => 
      s.name.toLowerCase().includes(searchKeyword) ||
      (s.transfer && s.transfer.toLowerCase().includes(searchKeyword)) ||
      s.buses.some(b => b.toLowerCase().includes(searchKeyword))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4" style="color: var(--text-muted); font-size: 0.9rem;">
        No stations found matching "${searchKeyword}".
      </div>
    `;
    return;
  }

  list.forEach(st => {
    const card = document.createElement("div");
    card.className = "station-item-card";
    card.innerHTML = `
      <div class="station-name-group">
        <span class="station-line-dot" style="background-color: ${st.lineColor};"></span>
        <div>
          <div class="station-name">${st.name}</div>
          ${st.transfer ? `<div class="station-transfer"><i class="fa-solid fa-arrows-split-up-and-left"></i>${st.transfer}</div>` : ''}
        </div>
      </div>
      <div class="bus-tags-group">
        ${st.buses.map(b => `<span class="bus-pill ${b.startsWith('E') ? 'express' : ''}">Bus ${b}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

function setLiveryStripeColor(lineId) {
  const stripe = document.getElementById("trainLiveryStripe");
  if (!stripe) return;

  const colorMap = {
    all: { color: "#38bdf8", shadow: "0 0 12px rgba(56, 189, 248, 0.8)" },
    chilonzor: { color: "#ef4444", shadow: "0 0 14px rgba(239, 68, 68, 0.8)" },
    ozbekiston: { color: "#0ea5e9", shadow: "0 0 14px rgba(14, 165, 233, 0.8)" },
    yunusobod: { color: "#10b981", shadow: "0 0 14px rgba(16, 185, 129, 0.8)" },
    halqa: { color: "#f59e0b", shadow: "0 0 14px rgba(245, 158, 11, 0.8)" }
  };

  const current = colorMap[lineId] || colorMap.all;
  stripe.style.backgroundColor = current.color;
  stripe.style.boxShadow = current.shadow;
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({ duration: 550, once: true });
  }

  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 20, density: { enable: true, value_area: 800 } },
        color: { value: "#38bdf8" },
        opacity: { value: 0.18, random: true },
        size: { value: 2, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 0.5, direction: "none", random: true, out_mode: "out" }
      },
      interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
      retina_detect: true
    });
  }

  updateTashkentClock();
  setInterval(updateTashkentClock, 1000);

  renderStations();
  updateFareDisplay();

  const contrastToggle = document.getElementById("contrastModeToggle");
  if (contrastToggle) {
    contrastToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.add("high-contrast");
      } else {
        document.body.classList.remove("high-contrast");
      }
    });
  }

  document.querySelectorAll(".line-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".line-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedLineFilter = btn.getAttribute("data-line");
      setLiveryStripeColor(selectedLineFilter);
      renderStations();
    });
  });

  const searchInput = document.getElementById("stationSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      renderStations();
    });
  }

  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedQuickFilter = pill.getAttribute("data-filter");
      renderStations();
    });
  });

  const btnMinus = document.getElementById("stepMinusBtn");
  const btnPlus = document.getElementById("stepPlusBtn");
  const fareSelect = document.getElementById("fareTypeSelect");

  if (btnMinus) {
    btnMinus.addEventListener("click", () => {
      if (passengerCount > 1) {
        passengerCount -= 1;
        updateFareDisplay();
      }
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener("click", () => {
      if (passengerCount < 50) {
        passengerCount += 1;
        updateFareDisplay();
      }
    });
  }

  if (fareSelect) {
    fareSelect.addEventListener("change", updateFareDisplay);
  }

  const tapBtn = document.getElementById("tapCardBtn");
  const tapStatus = document.getElementById("tapStatusPill");

  if (tapBtn && tapStatus) {
    tapBtn.addEventListener("click", () => {
      playAudioChime();
      const unitRate = parseInt(fareSelect.value, 10) || 2000;
      const total = passengerCount * unitRate;
      tapStatus.innerText = `Card Accepted — ${total.toLocaleString("en-US")} UZS Deducted`;
      tapStatus.classList.add("success");

      setTimeout(() => {
        tapStatus.innerText = "Ready to tap card or phone at turnstile";
        tapStatus.classList.remove("success");
      }, 3000);
    });
  }

  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const heroExploreBtn = document.getElementById("heroExploreBtn");
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener("click", () => {
      const searchInput = document.getElementById("stationSearchInput");
      if (searchInput) {
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
        searchInput.focus();
      }
    });
  }

  const heroFareBtn = document.getElementById("heroFareBtn");
  if (heroFareBtn) {
    heroFareBtn.addEventListener("click", () => {
      const fareBox = document.getElementById("fareTypeSelect");
      if (fareBox) {
        fareBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  const heroScrollIndicator = document.getElementById("heroScrollIndicator");
  if (heroScrollIndicator) {
    heroScrollIndicator.addEventListener("click", () => {
      const filterBar = document.querySelector(".line-filter-bar");
      if (filterBar) {
        filterBar.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  document.querySelectorAll(".metro-line-card").forEach(card => {
    card.addEventListener("click", () => {
      const lineId = card.getAttribute("data-line");
      const targetBtn = document.querySelector(`.line-filter-btn[data-line="${lineId}"]`);
      if (targetBtn) {
        targetBtn.click();
        const searchInput = document.getElementById("stationSearchInput");
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
          searchInput.focus();
        }
      }
    });
  });
});
