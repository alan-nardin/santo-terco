import { useEffect, useMemo, useState } from 'react';
import { MYSTERIES } from './data';
import { DaySelector } from './components/DaySelector';
import { FinalPrayerBlockList } from './components/FinalPrayerBlockList';
import { MysteryCard } from './components/MysteryCard';
import { PrayerBlockList } from './components/PrayerBlockList';
import { ThemeToggle } from './components/ThemeToggle';

type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'santo-terco-theme';
const FONT_STEP = 2;
const FONT_MIN = 14;
const FONT_MAX = 24;

function App() {
    const [theme, setTheme] = useState<ThemeMode>('light');
    const [selectedDay, setSelectedDay] = useState(() => new Date().getDay());
    const [fontSize, setFontSize] = useState(16);
    const [installPromptVisible, setInstallPromptVisible] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    const selectedMystery = useMemo(() => MYSTERIES[selectedDay], [selectedDay]);

    useEffect(() => {
        if (!('serviceWorker' in navigator)) return;

        const swContent = `
      const CACHE_NAME = 'terco-cache-v1.4';
      const urlsToCache = ['/', '/index.html', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'];

      self.addEventListener('install', (event) => {
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
      });

      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.match(event.request).then((response) => response || fetch(event.request)),
        );
      });

      self.addEventListener('activate', (event) => {
        event.waitUntil(
          caches.keys().then((cacheNames) =>
            Promise.all(cacheNames.map((cacheName) => {
              if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
              return null;
            })),
          ),
        );
      });
    `;

        const swBlob = new Blob([swContent], { type: 'application/javascript' });
        const swURL = URL.createObjectURL(swBlob);

        navigator.serviceWorker.register(swURL).catch(() => undefined).finally(() => URL.revokeObjectURL(swURL));
    }, []);

    useEffect(() => {
        if (!('wakeLock' in navigator)) return;

        let wakeLock: WakeLockSentinel | null = null;

        navigator.wakeLock.request('screen').then((lock) => {
            wakeLock = lock;
        }).catch(() => undefined);

        return () => {
            if (wakeLock) {
                wakeLock.release().catch(() => undefined);
            }
        };
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
        const preferred = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(preferred);
        document.documentElement.setAttribute('data-theme', preferred);
        document.body.setAttribute('data-theme', preferred);

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (event: MediaQueryListEvent) => {
            if (!localStorage.getItem(THEME_KEY)) {
                const nextTheme = event.matches ? 'dark' : 'light';
                setTheme(nextTheme);
                document.documentElement.setAttribute('data-theme', nextTheme);
                document.body.setAttribute('data-theme', nextTheme);
            }
        };

        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            body.setAttribute('data-theme', 'dark');
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.setAttribute('content', '#121212');
        } else {
            root.removeAttribute('data-theme');
            body.removeAttribute('data-theme');
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.setAttribute('content', '#7B0000');
        }
    }, [theme]);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();
            setDeferredPrompt(event as BeforeInstallPromptEvent);
            setInstallPromptVisible(true);
        };

        const handleAppInstalled = () => setInstallPromptVisible(false);

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    useEffect(() => {
        document.querySelectorAll('.font-zoom').forEach((element) => {
            const node = element as HTMLElement;
            node.style.fontSize = `${fontSize}px`;
        });
    }, [fontSize]);

    const onToggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
    };

    const onInstallPwa = async () => {
        if (!deferredPrompt) return;
        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        setDeferredPrompt(null);
        setInstallPromptVisible(false);
    };

    const isToday = selectedDay === new Date().getDay();

    return (
        <div id="app">
            <header>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                <h1>
                    <span className="cross">†</span> Santo Terço
                </h1>
                <p>Meditações para oração diária</p>
            </header>

            <main>
                <div className="zoom-control-deck">
                    <button type="button" id="decrease-font" onClick={() => setFontSize((current) => Math.max(current - FONT_STEP, FONT_MIN))}>
                        A-
                    </button>
                    <button type="button" id="increase-font" onClick={() => setFontSize((current) => Math.min(current + FONT_STEP, FONT_MAX))}>
                        A+
                    </button>
                </div>

                <PrayerBlockList />

                <h2 id="current-day">{selectedMystery.dayName}{isToday ? ' (Hoje)' : ''}</h2>
                <DaySelector selectedDay={selectedDay} onSelect={setSelectedDay} />
                <h3 id="mystery-type">
                    {selectedMystery.type}
                </h3>

                <ul id="mysteries-list">
                    {selectedMystery.mysteries.map((mystery, index) => (
                        <MysteryCard key={`${mystery.title}-${index}`} item={mystery} index={index} />
                    ))}
                </ul>

                <FinalPrayerBlockList />
            </main>

            <footer>
                <p>Santo Terço | Que Deus nos guie na fé.</p>
                <p>Feito por A.Nardin</p>
            </footer>

            {installPromptVisible && (
                <div id="pwa-install-prompt" className="pwa-message">
                    Instale este app para acesso rápido e offline!
                    <button type="button" onClick={onInstallPwa}>
                        Instalar
                    </button>
                </div>
            )}
        </div>
    );
}

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default App;
