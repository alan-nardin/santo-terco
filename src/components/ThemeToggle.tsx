type ThemeMode = 'light' | 'dark';

export function ThemeToggle({ theme, onToggle }: { theme: ThemeMode; onToggle: () => void }) {
  return (
    <button id="theme-toggle" aria-label="Alternar tema" title="Alternar tema" onClick={onToggle}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
