const COMPONENTS = {
    nav: `
    <nav class="nav">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <span class="logo-icon">🪝</span>
                <span class="logo-text">QAIL</span>
            </a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="playground.html">Playground</a>
                <a href="docs.html">Docs</a>
                <a href="status.html">Status</a>
                <a href="philosophy.html">Philosophy</a>
                <a href="compare.html">Examples</a>
            </div>
            
            <div class="nav-actions">
                <a href="https://github.com/qail-rs/qail" target="_blank" class="btn btn-github btn-icon-only-mobile">
                    <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span class="btn-text">GitHub</span>
                </a>
                <button class="mobile-toggle" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="playground.html">Playground</a>
        <a href="docs.html">Docs</a>
        <a href="status.html">Status</a>
        <a href="philosophy.html">Philosophy</a>
        <a href="compare.html">Examples</a>
        <a href="https://github.com/qail-rs/qail" target="_blank">GitHub</a>
    </div>
    `,
    footer: `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <span class="logo-icon">🪝</span>
                    <span>QAIL</span>
                </div>
                <p>MIT © 2025 QAIL Contributors</p>
            </div>
        </div>
    </footer>
    `
};

function renderNav() {
    const navContainer = document.getElementById('navbar');
    if (navContainer) {
        navContainer.innerHTML = COMPONENTS.nav;
        setActiveLink();
    }
}

// Mobile Menu Logic
window.toggleMenu = function () {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function renderFooter() {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = COMPONENTS.footer;
    }
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'https://github.com/qail-rs/qail') return;

        // Exact match or root match
        if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/')))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderFooter();
});
