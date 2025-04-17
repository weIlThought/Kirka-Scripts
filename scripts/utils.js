(function() {
  'use strict';

  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {

      // Menu Button
      const button = document.createElement('button');
      button.innerHTML = '☰';
      button.style.position = 'fixed';
      button.style.left = '10px';
      button.style.bottom = '10px';
      button.style.padding = '10px 15px';
      button.style.backgroundColor = 'black';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '5px';
      button.style.cursor = 'pointer';
      button.style.zIndex = '1000';
      document.body.appendChild(button);

      // Menu
      const menu = document.createElement('div');
      menu.style.position = 'fixed';
      menu.style.left = '10px';
      menu.style.bottom = '50px';
      menu.style.padding = '15px';
      menu.style.backgroundColor = 'black';
      menu.style.color = 'white';
      menu.style.border = '1px solid #fff';
      menu.style.borderRadius = '5px';
      menu.style.display = 'none';
      menu.style.zIndex = '1000';
      menu.style.width = '200px';
      document.body.appendChild(menu);

      // Optionen
      const options = [
        { label: 'FPS Counter', id: 'fpsCounter' },
        { label: 'Ping anzeigen', id: 'showPing' }
      ];

      options.forEach(option => {
        const container = document.createElement('div');
        container.style.padding = '5px 0';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = option.id;
        checkbox.style.marginRight = '10px';

        const label = document.createElement('label');
        label.htmlFor = option.id;
        label.innerText = option.label;

        container.appendChild(checkbox);
        container.appendChild(label);
        menu.appendChild(container);
      });

      // Menü sichtbar machen wenn Maus über Button oder Menü ist
      let isOverMenu = false;

      function showMenu() {
        menu.style.display = 'block';
      }

      function hideMenu() {
        if (!isOverMenu) {
          menu.style.display = 'none';
        }
      }

      button.addEventListener('mouseenter', () => {
        isOverMenu = true;
        showMenu();
      });

      button.addEventListener('mouseleave', () => {
        isOverMenu = false;
        setTimeout(hideMenu, 200);
      });

      menu.addEventListener('mouseenter', () => {
        isOverMenu = true;
        showMenu();
      });

      menu.addEventListener('mouseleave', () => {
        isOverMenu = false;
        setTimeout(hideMenu, 200);
      });

      // FPS Counter + Ping Container
      const infoContainer = document.createElement('div');
      infoContainer.style.position = 'fixed';
      infoContainer.style.left = '10px';
      infoContainer.style.top = '50%';
      infoContainer.style.transform = 'translateY(-50%)';
      infoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      infoContainer.style.color = 'white';
      infoContainer.style.padding = '10px';
      infoContainer.style.borderRadius = '5px';
      infoContainer.style.zIndex = '1000';
      infoContainer.style.fontFamily = 'monospace';
      infoContainer.style.display = 'none';
      document.body.appendChild(infoContainer);

      let fpsDisplay = null;
      let pingDisplay = null;

      // FPS Counter
      function showFPSCounter() {
        if (!fpsDisplay) {
          fpsDisplay = document.createElement('div');
          fpsDisplay.innerText = '0 FPS';
          infoContainer.appendChild(fpsDisplay);
        }

        let lastFrameTime = performance.now();
        let frameCount = 0;

        function updateFPS() {
          const now = performance.now();
          frameCount++;
          if (now >= lastFrameTime + 1000) {
            fpsDisplay.innerHTML = frameCount + ' FPS';
            lastFrameTime = now;
            frameCount = 0;
          }
          requestAnimationFrame(updateFPS);
        }
        updateFPS();

        infoContainer.style.display = 'block';
      }

      // Ping Anzeige
      function showPing() {
        if (!pingDisplay) {
          pingDisplay = document.createElement('div');
          pingDisplay.innerText = 'Ping: n/a';
          infoContainer.appendChild(pingDisplay);
        }

        async function measurePing() {
          const start = performance.now();
          try {
            await fetch(window.location.origin, { method: 'HEAD', cache: 'no-cache' });
            const end = performance.now();
            const ping = Math.round(end - start);
            pingDisplay.innerHTML = `${ping} ms Ping`;
          } catch {
            pingDisplay.innerHTML = 'Ping: n/a';
          }
        }

        setInterval(measurePing, 1000);
        measurePing();

        infoContainer.style.display = 'block';
      }

      // Event-Listener für Optionen
      document.getElementById('fpsCounter').addEventListener('change', (e) => {
        if (e.target.checked) {
          showFPSCounter();
        } else {
          if (fpsDisplay) {
            infoContainer.removeChild(fpsDisplay);
            fpsDisplay = null;
          }
          if (!pingDisplay) {
            infoContainer.style.display = 'none';
          }
        }
      });

      document.getElementById('showPing').addEventListener('change', (e) => {
        if (e.target.checked) {
          showPing();
        } else {
          if (pingDisplay) {
            infoContainer.removeChild(pingDisplay);
            pingDisplay = null;
          }
          if (!fpsDisplay) {
            infoContainer.style.display = 'none';
          }
        }
      });

    });
  }

})();
