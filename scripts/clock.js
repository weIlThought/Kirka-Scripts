function initClock() {
    // Uhr-Container erstellen
    const clockContainer = document.createElement("div");
    clockContainer.id = "juice-clock-container";
    clockContainer.style.position = "fixed";
    clockContainer.style.top = "10px";
    clockContainer.style.left = "50%";
    clockContainer.style.transform = "translateX(-50%)";
    clockContainer.style.padding = "8px 16px";
    clockContainer.style.borderRadius = "8px";
    clockContainer.style.fontFamily = "Arial, sans-serif";
    clockContainer.style.fontSize = "24px";
    clockContainer.style.zIndex = "9999";
    clockContainer.style.cursor = "default";
    clockContainer.style.transition = "all 0.3s ease";
    clockContainer.style.userSelect = "none";
  
    // Themes definieren
    const themes = {
      dark: {
        background: "#111",
        color: "#fff",
        border: "1px solid #333"
      },
      light: {
        background: "#fff",
        color: "#111",
        border: "1px solid #ccc"
      },
      neon: {
        background: "#000",
        color: "#39ff14",
        border: "1px solid #39ff14"
      }
    };
  
    let currentTheme = "dark";
  
    // Theme anwenden
    function applyTheme(theme) {
      const t = themes[theme];
      if (!t) return;
      clockContainer.style.background = t.background;
      clockContainer.style.color = t.color;
      clockContainer.style.border = t.border;
    }
    applyTheme(currentTheme);
  
    // Uhrzeit updaten
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      clockContainer.innerText = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    // Button zum Ein-/Ausblenden
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🕑";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.zIndex = "10000";
    toggleButton.style.padding = "6px 10px";
    toggleButton.style.borderRadius = "6px";
    toggleButton.style.border = "none";
    toggleButton.style.background = "#444";
    toggleButton.style.color = "#fff";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontSize = "18px";
    toggleButton.style.transition = "all 0.3s ease";
  
    toggleButton.onclick = () => {
      if (clockContainer.style.display === "none") {
        clockContainer.style.display = "block";
      } else {
        clockContainer.style.display = "none";
      }
    };
  
    // Theme-Wechsel per Rechtsklick auf den Button
    toggleButton.oncontextmenu = (e) => {
      e.preventDefault();
      const themeKeys = Object.keys(themes);
      const currentIndex = themeKeys.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themeKeys.length;
      currentTheme = themeKeys[nextIndex];
      applyTheme(currentTheme);
    };
  
    // Größenregler (Mausrad)
    clockContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      let currentSize = parseFloat(clockContainer.style.fontSize);
      if (e.deltaY < 0) {
        currentSize += 2;
      } else {
        currentSize -= 2;
      }
      clockContainer.style.fontSize = `${Math.max(10, currentSize)}px`;
    });
  
    // Ins Dokument einfügen
    document.body.appendChild(clockContainer);
    document.body.appendChild(toggleButton);
  }
  
  // Warten bis document.body existiert
  const clockInterval = setInterval(() => {
    if (document.body) {
      clearInterval(clockInterval);
      initClock();
    }
  }, 100);
  