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
                <a href="docs.html">Docs</a>
                <a href="philosophy.html">Philosophy</a>
                <a href="compare.html">Examples</a>
                <a href="https://github.com/qail-rs/qail" target="_blank" class="btn btn-github">GitHub</a>
            </div>
        </div>
    </nav>
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
