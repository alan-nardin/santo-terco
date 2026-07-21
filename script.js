// Variável global para armazenar o prompt de instalação do PWA
let deferredPrompt;
const APP_VERSION = "v1.5"; // Versão atualizada com imagens de ícones.

// 1. Definição dos Mistérios
const MYSTERIES = [
  {
    dayName: "Domingo",
    type: "Mistérios Gloriosos",
    colorClass: "color-glorious",
    mysteries: [
      { title: "1º - A Ressurreição de Nosso Senhor Jesus Cristo." },
      { title: "2º - A Ascensão de Nosso Senhor Jesus Cristo ao Céu." },
      { title: "3º - A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos." },
      { title: "4º - A Assunção de Nossa Senhora ao Céu em corpo e alma." },
      { title: "5º - A Coroação de Nossa Senhora como Rainha do Céu e da Terra." },
    ],
  },
  {
    dayName: "Segunda-feira",
    type: "Mistérios Gozosos",
    colorClass: "color-joyful",
    mysteries: [
      { title: "1º - A Anunciação do Anjo Gabriel à Nossa Senhora." },
      { title: "2º - A Visita de Nossa Senhora à sua prima Santa Isabel." },
      { title: "3º - O Nascimento de Jesus Cristo em Belém." },
      { title: "4º - A Apresentação do Menino Jesus no Templo." },
      { title: "5º - O Encontro do Menino Jesus no Templo, entre os Doutores." },
    ],
  },
  {
    dayName: "Terça-feira",
    type: "Mistérios Dolorosos",
    colorClass: "color-sorrowful",
    mysteries: [
      { title: "1º - A Agonia de Jesus no Horto das Oliveiras." },
      { title: "2º - A Flagelação de Jesus atado à coluna." },
      { title: "3º - A Coroação de espinhos de Jesus." },
      { title: "4º - Jesus carregando a Cruz para o Calvário." },
      { title: "5º - A Crucificação e Morte de Nosso Senhor Jesus Cristo." },
    ],
  },
  {
    dayName: "Quarta-feira",
    type: "Mistérios Gloriosos",
    colorClass: "color-glorious",
    mysteries: [
      { title: "1º - A Ressurreição de Nosso Senhor Jesus Cristo." },
      { title: "2º - A Ascensão de Nosso Senhor Jesus Cristo ao Céu." },
      { title: "3º - A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos." },
      { title: "4º - A Assunção de Nossa Senhora ao Céu em corpo e alma." },
      { title: "5º - A Coroação de Nossa Senhora como Rainha do Céu e da Terra." },
    ],
  },
  {
    dayName: "Quinta-feira",
    type: "Mistérios Luminosos",
    colorClass: "color-luminous",
    mysteries: [
      { title: "1º - O Batismo de Jesus no rio Jordão." },
      { title: "2º - A Auto-revelação de Jesus nas Bodas de Caná." },
      { title: "3º - O Anúncio do Reino de Deus e o convite à conversão." },
      { title: "4º - A Transfiguração de Jesus no Monte Tabor." },
      { title: "5º - A Instituição da Santíssima Eucaristia." },
    ],
  },
  {
    dayName: "Sexta-feira",
    type: "Mistérios Dolorosos",
    colorClass: "color-sorrowful",
    mysteries: [
      { title: "1º - A Agonia de Jesus no Horto das Oliveiras." },
      { title: "2º - A Flagelação de Jesus atado à coluna." },
      { title: "3º - A Coroação de espinhos de Jesus." },
      { title: "4º - Jesus carregando a Cruz para o Calvário." },
      { title: "5º - A Crucificação e Morte de Nosso Senhor Jesus Cristo." },
    ],
  },
  {
    dayName: "Sábado",
    type: "Mistérios Gozosos",
    colorClass: "color-joyful",
    mysteries: [
      { title: "1º - A Anunciação do Anjo Gabriel à Nossa Senhora." },
      { title: "2º - A Visita de Nossa Senhora à sua prima Santa Isabel." },
      { title: "3º - O Nascimento de Jesus Cristo em Belém." },
      { title: "4º - A Apresentação do Menino Jesus no Templo." },
      { title: "5º - O Encontro do Menino Jesus no Templo, entre os Doutores." },
    ],
  },
];

const dayNamesShort = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

function getMysteryIconLabel(title) {
  const cleanTitle = (title || "").replace(/^\d+º - /, "").trim();
  if (!cleanTitle) return "✦";

  const words = cleanTitle.split(/\s+/).filter(Boolean);
  const meaningfulWords = words.filter(
    (word) => !["de", "do", "da", "dos", "das", "e", "a", "o", "no", "na", "em", "ao", "à", "as", "os"].includes(word.toLowerCase()),
  );

  const labelSource = meaningfulWords[0] || words[0];
  const normalized = labelSource.replace(/[.,;]/g, "").toUpperCase();

  return normalized.length > 10 ? normalized.slice(0, 10) : normalized;
}

/**
 * 2. Função principal para exibir os mistérios
 * @param {number} dayIndex - O índice do dia da semana (0-6)
 * @param {boolean} isToday - Indica se é o mistério do dia atual.
 */
function displayMysteries(dayIndex, isToday = false) {
  const data = MYSTERIES[dayIndex];
  const currentDayEl = document.getElementById("current-day");
  const mysteryTypeEl = document.getElementById("mystery-type");
  const mysteryTypeBoxEl = document.getElementById("mystery-type-box");
  const mysteriesListEl = document.getElementById("mysteries-list");
  const loadingEl = document.getElementById("loading");

  if (loadingEl) loadingEl.style.display = "none";

  currentDayEl.textContent = `${data.dayName} ${isToday ? "(Hoje)" : ""}`;
  mysteryTypeEl.textContent = data.type;

  mysteryTypeBoxEl.className = `mystery-type-box ${data.colorClass}`;

  mysteriesListEl.innerHTML = data.mysteries
    .map(
      (m, index) => `
                <li>
                    <div class="mystery-icon ${data.colorClass}" aria-hidden="true">${getMysteryIconLabel(m.title)}</div>
                    <div class="mystery-content">
                        <div class="mystery-header">
                            <h4 class="mystery-title">${index + 1}º - ${m.title.replace(/(\dº - )/, "")}</h4>
                        </div>
                        ${createPrayerCounterHtml(index)}
                    </div>
                </li>
            `,
    )
    .join("");

  document.querySelectorAll("#day-selector button").forEach((button, index) => {
    button.classList.remove("active");
    if (index === dayIndex) {
      button.classList.add("active");
    }
  });
}

/**
 * 3. Configuração da UI de seleção de dias
 */
function setupDaySelector() {
  const daySelectorEl = document.getElementById("day-selector");
  daySelectorEl.innerHTML = dayNamesShort
    .map(
      (name, index) => `
                <button
                    class="pure-button day-button"
                    data-day-index="${index}"
                    onclick="displayMysteries(${index})"
                >
                    ${name}
                </button>
            `,
    )
    .join("");
}

/**
 * 4. Lógica de inicialização
 */
function initializeApp() {
  const today = new Date();
  // getDay() retorna 0 para Domingo, 1 para Segunda, etc.
  const todayIndex = today.getDay();

  setupDaySelector();
  displayMysteries(todayIndex, true);

  // Tenta registrar o service worker (PWA)
  registerServiceWorker();

  // Mantem a tela sempre ligada
  keepScreenOn();
}

// 7. Lógica do Contador de Orações (Terço) - Adaptada para ser local

/**
 * Gera o HTML para o bloco de 12 contas (1 Pai-Nosso, 10 Ave-Marias, 1 Glória) e o botão de reset.
 * @param {number} mysteryIndex - O índice do mistério (0 a 4) para o título.
 * @returns {string} O HTML do contador da dezena.
 */
function createPrayerCounterHtml(mysteryIndex) {
  let beadsHtml = "";

  // Gerar 12 botões: 1 Pater (0), 10 Ave (1-10), 1 Gloria (11)
  for (let i = 0; i < 12; i++) {
    let type;
    let label;

    if (i === 0) {
      //type = 'pater';
      type = "ave";
      label = "Pai Nosso";
    } else if (i >= 1 && i <= 10) {
      type = "ave";
      label = i; // 1 a 10
    } else {
      // i === 11
      //type = 'gloria';
      type = "ave";
      label = "Glória"; // Glória abreviado
    }

    beadsHtml += `
                    <button
                        class="prayer-bead"
                        data-index="${i}"
                        data-type="${type}"
                        onclick="toggleBead(this)"
                    >
                        ${label}
                    </button>
                `;
  }

  // O container de orações por dezena, com o botão de reset específico.
  return `
                <div class="prayer-counter-deck">
                    <div class="counter-title">
                        Guia da Dezena ${mysteryIndex + 1}
                    </div>
                    ${beadsHtml}
                </div>
            `;
}

/**
 * Alterna o estado (ativo/inativo) da conta (bead) clicada.
 * @param {HTMLButtonElement} button - O botão clicado.
 */
function toggleBead(button) {
  button.classList.toggle("active");
}

/**
 * 5. Lógica e registro do Service Worker (PWA Offline)
 */
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    // Conteúdo do Service Worker embutido como Blob
    const swContent = `
                    const CACHE_NAME = 'terco-cache-${APP_VERSION}';
                    const urlsToCache = ['/', 'index.html', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'];

                    self.addEventListener('install', (event) => {
                        event.waitUntil(
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    return cache.addAll(urlsToCache);
                                })
                        );
                    });

                    self.addEventListener('fetch', (event) => {
                        event.respondWith(
                            caches.match(event.request)
                                .then((response) => {
                                    if (response) {
                                        return response;
                                    }
                                    return fetch(event.request);
                                })
                        );
                    });

                    self.addEventListener('activate', (event) => {
                        const cacheWhitelist = [CACHE_NAME];
                        event.waitUntil(
                            caches.keys().then((cacheNames) => {
                                return Promise.all(
                                    cacheNames.map((cacheName) => {
                                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                                            return caches.delete(cacheName);
                                        }
                                    })
                                );
                            })
                        );
                    });
                `;

    // Cria um Blob e URL para o SW para registrá-lo inline
    const swBlob = new Blob([swContent], {
      type: "application/javascript",
    });
    const swURL = URL.createObjectURL(swBlob);

    navigator.serviceWorker
      .register(swURL, { scope: "/" })
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
        URL.revokeObjectURL(swURL);
      })
      .catch((error) => {
        console.error("Falha no registro do Service Worker:", error);
      });
  }
}

function isIOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent) && !window.MSStream;
}

function isSafari() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (
    isIOS() && userAgent.includes("safari") && !userAgent.includes("chrome")
  );
}

function isStandalone() {
  return "standalone" in window.navigator && window.navigator.standalone;
}

document.addEventListener("DOMContentLoaded", () => {
  if (isIOS() && isSafari() && !isStandalone()) {
    const promptEl = document.getElementById("pwa-install-prompt");
    if (promptEl) {
      promptEl.innerHTML =
        '<small>Instale este app para acesso rápido e offline!<br>Clique em compartilhar e selecione<br>"Adicionar à Tela de Início"</small>';
      promptEl.classList.remove("hidden");
    }
  }
});

/**
 * 6. Lógica de Instalação do PWA
 */
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const promptEl = document.getElementById("pwa-install-prompt");
  if (promptEl) {
    promptEl.classList.remove("hidden");
  }
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log("User choice for installation:", choiceResult.outcome);
      const promptEl = document.getElementById("pwa-install-prompt");
      if (promptEl) {
        promptEl.classList.add("hidden");
      }
      deferredPrompt = null;
    });
  }
}

function keepScreenOn() {
  if (navigator.wakeLock && typeof navigator.wakeLock.request === "function") {
    navigator.wakeLock.request("screen").then((wakeLock) => {
      wakeLock.addEventListener("release", () => {
        console.log("Screen Wake Lock released");
      });
    }).catch(() => {
      console.log("Wake Lock não disponível neste navegador");
    });
  }
}

const THEME_KEY = "santo-terco-theme";
const contentFontZoom = document.querySelectorAll(".font-zoom");
const increaseBtn = document.getElementById("increase-font");
const decreaseBtn = document.getElementById("decrease-font");
const themeToggleBtn = document.getElementById("theme-toggle");
const installAppBtn = document.getElementById("install-app-btn");
const connectionStatusEl = document.getElementById("connection-status");

let currentFontSize = 16;
const step = 2;
const maxFontSize = 22;
const minFontSize = 16;

function updateFontSize() {
  contentFontZoom.forEach((el) => {
    el.style.fontSize = `${currentFontSize}px`;
  });
}

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.body.setAttribute("data-theme", resolvedTheme);
  localStorage.setItem(THEME_KEY, resolvedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.textContent = resolvedTheme === "dark" ? "☀️ Tema claro" : "🌙 Tema escuro";
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function updateConnectionStatus() {
  if (!connectionStatusEl) return;
  const isOnline = navigator.onLine;
  connectionStatusEl.textContent = isOnline ? "Online" : "Offline";
  connectionStatusEl.classList.toggle("online", isOnline);
  connectionStatusEl.classList.toggle("offline", !isOnline);
}

function showInstallOption() {
  if (installAppBtn) {
    installAppBtn.classList.remove("hidden");
  }
}

if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    if (currentFontSize < maxFontSize) {
      currentFontSize += step;
      updateFontSize();
    }
  });
}

if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    if (currentFontSize > minFontSize) {
      currentFontSize -= step;
      updateFontSize();
    }
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

if (installAppBtn) {
  installAppBtn.addEventListener("click", installPWA);
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallOption();
});
window.addEventListener("appinstalled", () => {
  if (installAppBtn) {
    installAppBtn.classList.add("hidden");
  }
});

window.onload = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
  document.body.setAttribute("data-standalone", window.matchMedia("(display-mode: standalone)").matches ? "true" : "false");
  updateConnectionStatus();
  initializeApp();
  updateFontSize();
};
