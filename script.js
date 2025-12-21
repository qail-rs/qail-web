// QAIL Website - Interactive Features

// Copy install command
function copyInstall() {
    copyText('cargo install qail', document.querySelector('.copy-btn'));
}

// Generic copy function
function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.style.color = '#22c55e';
        setTimeout(() => {
            btn.textContent = 'Copy';
            btn.style.color = '';
        }, 2000);
    });
}

// Smooth reveal on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const elements = document.querySelectorAll('.feature-card, .example-card, .symbols-table tr');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // Make visible when observed
    const style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);

    // Typing effect for QAIL code
    animateQailCode();
});

// Typing animation for demo code
function animateQailCode() {
    const codeEl = document.querySelector('.qail-code');
    if (!codeEl) return;

    const fullText = codeEl.textContent;
    codeEl.textContent = '';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < fullText.length) {
            codeEl.textContent += fullText.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            // Add blinking cursor effect
            codeEl.classList.add('typed');
        }
    }, 50);
}

// Add cursor blink style
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .qail-code.typed::after {
        content: '▋';
        animation: blink 1s step-end infinite;
        color: var(--accent-cyan);
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(cursorStyle);

// Interactive symbol hover effect
document.querySelectorAll('.symbols-table td.symbol').forEach(td => {
    td.addEventListener('mouseenter', () => {
        td.style.textShadow = '0 0 20px rgba(0, 240, 255, 0.8)';
    });
    td.addEventListener('mouseleave', () => {
        td.style.textShadow = 'none';
    });
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
    }

    lastScroll = currentScroll;
});



console.log('🪝 QAIL - Stop writing strings. Hook your data.');
