/**
 * MarineOS - Theme Toggle Script
 * Handles dark/light theme switching with localStorage persistence.
 */
(function () {
    const ROOT = document.documentElement;
    const STORAGE_KEY = 'marineOS-theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    // Apply saved theme immediately (before paint to avoid flash)
    const saved = localStorage.getItem(STORAGE_KEY) || DARK;
    ROOT.setAttribute('data-theme', saved);

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        // Sync icon with current theme
        function syncIcon(theme) {
            const icon = btn.querySelector('i');
            if (!icon) return;
            if (theme === LIGHT) {
                icon.className = 'bi bi-sun-fill';
                btn.title = 'Switch to Dark Theme';
            } else {
                icon.className = 'bi bi-moon-fill';
                btn.title = 'Switch to Light Theme';
            }
        }

        syncIcon(saved);

        btn.addEventListener('click', function () {
            const current = ROOT.getAttribute('data-theme') || DARK;
            const next = current === DARK ? LIGHT : DARK;
            ROOT.setAttribute('data-theme', next);
            localStorage.setItem(STORAGE_KEY, next);
            syncIcon(next);
        });
    });
})();
