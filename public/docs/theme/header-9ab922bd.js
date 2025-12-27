// Inject QAIL header into mdBook pages
(function () {
    const header = document.createElement('nav');
    header.className = 'qail-header';
    header.innerHTML = `
        <a href="https://qail.rs" class="qail-logo">
            <span class="qail-icon">🪝</span>
            <span class="qail-text">QAIL</span>
        </a>
        <div class="qail-nav-links">
            <a href="https://qail.rs">Home</a>
            <a href="https://qail.rs/playground">Playground</a>
            <a href="https://qail.rs/docs" class="active">Docs</a>
            <a href="https://qail.rs/benchmarks">Benchmarks</a>
            <a href="https://github.com/qail-io/qail" target="_blank">GitHub</a>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
})();
