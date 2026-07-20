// Variável global para armazenar o prompt de instalação do PWA
let deferredPrompt;
const APP_VERSION = "v1.4"; // Versão atualizada com imagens de ícones.

// Imagem Placeholder Padrão
const IMAGE_BASE_URL = "https://placehold.co/100x100/7B0000/ffffff?text=";

// 1. Definição dos Mistérios com Meditações e URL da Imagem
const MYSTERIES = [
  {
    // 0: Domingo (Gloriosos) - Fonte: Vatican.va
    dayName: "Domingo",
    type: "Mistérios Gloriosos",
    colorClass: "color-glorious",
    mysteries: [
      {
        title: "1º - A Ressurreição de Nosso Senhor Jesus Cristo.",
        meditation:
          "«No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro [...] Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou» (Lc 24, 1-6).",
        imageUrl: IMAGE_BASE_URL + "RESSURREI%C3%87%C3%83O",
      },
      {
        title: "2º - A Ascensão de Nosso Senhor Jesus Cristo ao Céu.",
        meditation:
          "«Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19).",
        imageUrl: IMAGE_BASE_URL + "ASCENS%C3%83O",
      },
      {
        title:
          "3º - A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos.",
        meditation:
          "«Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar [...] Apareceram-lhes então umas línguas como de fogo, que se distribuíram e foram pousar sobre cada um deles. E todos ficaram cheios do Espírito Santo» (At 2, 1-4).",
        imageUrl: IMAGE_BASE_URL + "PENTECOSTES",
      },
      {
        title: "4º - A Assunção de Nossa Senhora ao Céu em corpo e alma.",
        meditation:
          "«[...] Porque fez em mim grandes coisas Aquele que é Poderoso; o seu Nome é Santo» (Lc 1, 49). O Catecismo ensina que Maria é levada ao Céu em corpo e alma.",
        imageUrl: IMAGE_BASE_URL + "ASSUN%C3%87%C3%83O",
      },
      {
        title:
          "5º - A Coroação de Nossa Senhora como Rainha do Céu e da Terra.",
        meditation:
          "«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).",
        imageUrl: IMAGE_BASE_URL + "COROA%C3%87%C3%83O",
      },
    ],
  },
  {
    // 1: Segunda-feira (Gozosos) - Fonte: Vatican.va
    dayName: "Segunda-feira",
    type: "Mistérios Gozosos",
    colorClass: "color-joyful",
    mysteries: [
      {
        title: "1º - A Anunciação do Anjo Gabriel à Nossa Senhora.",
        meditation:
          "«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José [...] e o nome da virgem era Maria» (Lc 1, 26-27).",
        imageUrl: IMAGE_BASE_URL + "ANUNCIA%C3%87%C3%83O",
      },
      {
        title: "2º - A Visita de Nossa Senhora à sua prima Santa Isabel.",
        meditation:
          "«Logo que Isabel ouviu a saudação de Maria, a criança estremeceu-lhe no ventre e Isabel ficou cheia do Espírito Santo» (Lc 1, 41).",
        imageUrl: IMAGE_BASE_URL + "VISITA%C3%87%C3%83O",
      },
      {
        title: "3º - O Nascimento de Jesus Cristo em Belém.",
        meditation:
          "«Ela deu à luz o seu filho primogênito, e envolveu-o em panos e deitou-o numa manjedoura» (Lc 2, 7).",
        imageUrl: IMAGE_BASE_URL + "NASCIMENTO",
      },
      {
        title: "4º - A Apresentação do Menino Jesus no Templo.",
        meditation:
          "«Quando se cumpriu o tempo da purificação, segundo a Lei de Moisés, levaram-no a Jerusalém, para o apresentarem ao Senhor» (Lc 2, 22).",
        imageUrl: IMAGE_BASE_URL + "TEMPLO",
      },
      {
        title: "5º - O Encontro do Menino Jesus no Templo, entre os Doutores.",
        meditation:
          "«Não sabíeis que Eu tenho de estar na casa de meu Pai?» (Lc 2, 49).",
        imageUrl: IMAGE_BASE_URL + "DOUTORES",
      },
    ],
  },
  {
    // 2: Terça-feira (Dolorosos) - Fonte: Vatican.va
    dayName: "Terça-feira",
    type: "Mistérios Dolorosos",
    colorClass: "color-sorrowful",
    mysteries: [
      {
        title: "1º - A Agonia de Jesus no Horto das Oliveiras.",
        meditation:
          "«Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres» (Mt 26, 36-39).",
        imageUrl: IMAGE_BASE_URL + "GETS%C3%8AMANI",
      },
      {
        title: "2º - A Flagelação de Jesus atado à coluna.",
        meditation:
          "«Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado» (Mt 27, 26).",
        imageUrl: IMAGE_BASE_URL + "FLAGELA%C3%87%C3%83O",
      },
      {
        title: "3º - A Coroação de espinhos de Jesus.",
        meditation:
          "«Despiram-no e puseram-lhe um manto escarlate. Depois, teceram uma coroa de espinhos e puseram-lha na cabeça» (Mt 27, 28-29).",
        imageUrl: IMAGE_BASE_URL + "ESPINHOS",
      },
      {
        title: "4º - Jesus carregando a Cruz para o Calvário.",
        meditation:
          "«Tomaram de assalto um homem de Cirene, chamado Simão, que vinha do campo, e impuseram-lhe a cruz para a levar atrás de Jesus» (Lc 23, 26).",
        imageUrl: IMAGE_BASE_URL + "CRUZ",
      },
      {
        title: "5º - A Crucificação e Morte de Nosso Senhor Jesus Cristo.",
        meditation:
          '«Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". Ditas estas palavras, expirou» (Lc 23, 46).',
        imageUrl: IMAGE_BASE_URL + "CALV%C3%81RIO",
      },
    ],
  },
  {
    // 3: Quarta-feira (Gloriosos - repetição) - Fonte: Vatican.va
    dayName: "Quarta-feira",
    type: "Mistérios Gloriosos",
    colorClass: "color-glorious",
    mysteries: [
      {
        title: "1º - A Ressurreição de Nosso Senhor Jesus Cristo.",
        meditation:
          "«No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro [...] Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou» (Lc 24, 1-6).",
        imageUrl: IMAGE_BASE_URL + "RESSURREI%C3%87%C3%83O",
      },
      {
        title: "2º - A Ascensão de Nosso Senhor Jesus Cristo ao Céu.",
        meditation:
          "«Depois que o Senhor Jesus les falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19).",
        imageUrl: IMAGE_BASE_URL + "ASCENS%C3%83O",
      },
      {
        title:
          "3º - A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos.",
        meditation:
          "«Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar [...] Apareceram-lhes então umas línguas como de fogo, que se distribuíram e foram pousar sobre cada um deles. E todos ficaram cheios do Espírito Santo» (At 2, 1-4).",
        imageUrl: IMAGE_BASE_URL + "PENTECOSTES",
      },
      {
        title: "4º - A Assunção de Nossa Senhora ao Céu em corpo e alma.",
        meditation:
          "«[...] Porque fez em mim grandes coisas Aquele que é Poderoso; o seu Nome é Santo» (Lc 1, 49). O Catecismo ensina que Maria é levada ao Céu em corpo e alma.",
        imageUrl: IMAGE_BASE_URL + "ASSUN%C3%87%C3%83O",
      },
      {
        title:
          "5º - A Coroação de Nossa Senhora como Rainha do Céu e da Terra.",
        meditation:
          "«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).",
        imageUrl: IMAGE_BASE_URL + "COROA%C3%87%C3%83O",
      },
    ],
  },
  {
    // 4: Quinta-feira (Luminosos) - Fonte: Vatican.va
    dayName: "Quinta-feira",
    type: "Mistérios Luminosos",
    colorClass: "color-luminous",
    mysteries: [
      {
        title: "1º - O Batismo de Jesus no rio Jordão.",
        meditation:
          '«E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição"» (Mt 3, 16-17).',
        imageUrl: IMAGE_BASE_URL + "BATISMO",
      },
      {
        title: "2º - A Auto-revelação de Jesus nas Bodas de Caná.",
        meditation:
          "«Este foi o primeiro dos seus milagres; realizou-o em Caná da Galileia. Manifestou a sua glória e os seus discípulos creram nele» (Jo 2, 11).",
        imageUrl: IMAGE_BASE_URL + "CAN%C3%81",
      },
      {
        title: "3º - O Anúncio do Reino de Deus e o convite à conversão.",
        meditation:
          "«Completou-se o tempo e o Reino de Deus está próximo; fazei penitência e crede no Evangelho» (Mc 1, 15).",
        imageUrl: IMAGE_BASE_URL + "REINO",
      },
      {
        title: "4º - A Transfiguração de Jesus no Monte Tabor.",
        meditation:
          "«O seu rosto brilhou como o sol, e as suas vestes tornaram-se brancas como a luz» (Mt 17, 2).",
        imageUrl: IMAGE_BASE_URL + "TRANSFIGURA%C3%87%C3%83O",
      },
      {
        title: "5º - A Instituição da Santíssima Eucaristia.",
        meditation:
          '«Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: "Tomai e comei, isto é meu corpo"» (Mt 26, 26).',
        imageUrl: IMAGE_BASE_URL + "EUCARISTIA",
      },
    ],
  },
  {
    // 5: Sexta-feira (Dolorosos - repetição) - Fonte: Vatican.va
    dayName: "Sexta-feira",
    type: "Mistérios Dolorosos",
    colorClass: "color-sorrowful",
    mysteries: [
      {
        title: "1º - A Agonia de Jesus no Horto das Oliveiras.",
        meditation:
          "«Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres» (Mt 26, 36-39).",
        imageUrl: IMAGE_BASE_URL + "GETS%C3%8AMANI",
      },
      {
        title: "2º - A Flagelação de Jesus atado à coluna.",
        meditation:
          "«Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado» (Mt 27, 26).",
        imageUrl: IMAGE_BASE_URL + "FLAGELA%C3%87%C3%83O",
      },
      {
        title: "3º - A Coroação de espinhos de Jesus.",
        meditation:
          "«Despiram-no e puseram-lhe um manto escarlate. Depois, teceram uma coroa de espinhos e puseram-lha na cabeça» (Mt 27, 28-29).",
        imageUrl: IMAGE_BASE_URL + "ESPINHOS",
      },
      {
        title: "4º - Jesus carregando a Cruz para o Calvário.",
        meditation:
          "«Tomaram de assalto um homem de Cirene, chamado Simão, que vinha do campo, e impuseram-lhe a cruz para a levar atrás de Jesus» (Lc 23, 26).",
        imageUrl: IMAGE_BASE_URL + "CRUZ",
      },
      {
        title: "5º - A Crucificação e Morte de Nosso Senhor Jesus Cristo.",
        meditation:
          '«Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". Ditas estas palavras, expirou» (Lc 23, 46).',
        imageUrl: IMAGE_BASE_URL + "CALV%C3%81RIO",
      },
    ],
  },
  {
    // 6: Sábado (Gozosos - repetição) - Fonte: Vatican.va
    dayName: "Sábado",
    type: "Mistérios Gozosos",
    colorClass: "color-joyful",
    mysteries: [
      {
        title: "1º - A Anunciação do Anjo Gabriel à Nossa Senhora.",
        meditation:
          "«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José [...] e o nome da virgem era Maria» (Lc 1, 26-27).",
        imageUrl: IMAGE_BASE_URL + "ANUNCIA%C3%87%C3%83O",
      },
      {
        title: "2º - A Visita de Nossa Senhora à sua prima Santa Isabel.",
        meditation:
          "«Logo que Isabel ouviu a saudação de Maria, a criança estremeceu-lhe no ventre e Isabel ficou cheia do Espírito Santo» (Lc 1, 41).",
        imageUrl: IMAGE_BASE_URL + "VISITA%C3%87%C3%83O",
      },
      {
        title: "3º - O Nascimento de Jesus Cristo em Belém.",
        meditation:
          "«Ela deu à luz o seu filho primogênito, e envolveu-o em panos e deitou-o numa manjedoura» (Lc 2, 7).",
        imageUrl: IMAGE_BASE_URL + "NASCIMENTO",
      },
      {
        title: "4º - A Apresentação do Menino Jesus no Templo.",
        meditation:
          "«Quando se cumpriu o tempo da purificação, segundo a Lei de Moisés, levaram-no a Jerusalém, para o apresentarem ao Senhor» (Lc 2, 22).",
        imageUrl: IMAGE_BASE_URL + "TEMPLO",
      },
      {
        title: "5º - O Encontro do Menino Jesus no Templo, entre os Doutores.",
        meditation:
          "«Não sabíeis que Eu tenho de estar na casa de meu Pai?» (Lc 2, 49).",
        imageUrl: IMAGE_BASE_URL + "DOUTORES",
      },
    ],
  },
];

const dayNamesShort = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

function getMysteryIconLabel(imageUrl) {
  if (!imageUrl) return "✦";

  const text = imageUrl.replace(IMAGE_BASE_URL, "");
  return decodeURIComponent(text) || "✦";
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
                    <div class="mystery-icon ${data.colorClass}" aria-hidden="true">${getMysteryIconLabel(m.imageUrl)}</div>
                    <div class="mystery-content">
                        <div class="mystery-header">
                            <h4 class="mystery-title">${index + 1}º - ${m.title.replace(/(\dº - )/, "")}</h4>
                        </div>
                        <p class="meditation-text">${m.meditation}</p>
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

let currentFontSize = 14;
const step = 2;
const maxFontSize = 18;
const minFontSize = 14;

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
