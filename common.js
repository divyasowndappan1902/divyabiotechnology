// Shared components and global behaviour

function getNavbar(activePage) {
    const pages = [
        { href: 'index.html', label: 'Home' },
        { href: 'services.html', label: 'Services' },
        { href: 'solutions.html', label: 'Solutions' },
        { href: 'research.html', label: 'Research & Innovation' },
    ];
    const links = pages.map(p =>
        `<li><a href="${p.href}"${p.href === activePage || (activePage && activePage.startsWith('research') && p.href === 'research.html') ? ' class="active"' : ''}>${p.label}</a></li>`
    ).join('');
    return `
    <nav class="navbar" id="mainNav">
        <div class="nav-logo">
            <a href="index.html"><img src="logo1.webp.png" alt="Stackly BioTech"></a>
        </div>
        <ul class="nav-links" id="navLinks">${links}</ul>
        <div class="auth-btns">
            <a href="signin.html" class="btn btn-primary" style="font-size:0.88rem;padding:0.6rem 1.2rem;">Sign In</a>
            <div class="mobile-menu-btn" id="menuToggle">☰</div>
        </div>
    </nav>`;
}

function getFooter() {
    return `
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <img src="logo1.webp.png" alt="Stackly BioTech" class="footer-logo">
                <p>Pioneering the next frontier of life sciences from Salem, Tamil Nadu.</p>
                <p style="margin-top:1rem;">contact@stacklybiotech.com</p>
                <p>+91 427 000 0000</p>
            </div>
            <div class="footer-col">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="solutions.html">Solutions</a></li>
                    <li><a href="research.html">Research & Innovation</a></li>
                    <li><a href="signin.html">Sign In</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Research Areas</h4>
                <ul>
                    <li><a href="genomics.html">Genomics & Gene Editing</a></li>
                    <li><a href="bioinformatics.html">Bioinformatics & AI</a></li>
                    <li><a href="synthetic.html">Synthetic Biology</a></li>
                    <li><a href="clinical.html">Clinical Trials</a></li>
                    <li><a href="diagnostics.html">Molecular Diagnostics</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>📍 Stackly BioTech HQ — Salem, Tamil Nadu</h4>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125026.11542157!2d78.08160411640625!3d11.6625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf050338ac97f%3A0x2668fc7df35d1f87!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        <div class="footer-bottom">&copy; 2026 Stackly BioTech Pvt. Ltd. All Rights Reserved. | Salem, Tamil Nadu, India</div>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.08)' : 'none';
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
        });
        // Close on link click
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    }

    // Redirect button-like elements to 404 page (except auth and dashboard navigation)
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('button, .btn, .btn-primary, .btn-secondary, .btn-outline, .sidebar-link');
        if (!btn) return;

        // Exclude links that should lead to active pages
        if (btn.closest('.auth-btns') || btn.classList.contains('login-btn')) return;

        // Prevent default only if it's a link or button
        if (btn.tagName === 'A' || btn.tagName === 'BUTTON' || btn.type === 'submit') {
            e.preventDefault();
            window.location.href = '404.html';
        }
    });
});
