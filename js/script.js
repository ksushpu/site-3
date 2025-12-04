class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle.querySelector('.theme-icon');
        this.themeText = this.themeToggle.querySelector('.theme-text');
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            this.enableDarkTheme();
        } else {
            this.enableLightTheme();
        }

        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    enableDarkTheme() {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.themeIcon.textContent = '🔆';
        this.themeText.textContent = 'Яркость';
        localStorage.setItem('theme', 'dark');
    }

    enableLightTheme() {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        this.themeIcon.textContent = '🔆';
        this.themeText.textContent = 'Яркость';
        localStorage.setItem('theme', 'light');
    }

    toggleTheme() {
        if (document.body.classList.contains('dark-theme')) {
            this.enableLightTheme();
        } else {
            this.enableDarkTheme();
        }
        
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = '';
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});