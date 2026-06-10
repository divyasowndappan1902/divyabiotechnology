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

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.card, .icon-card, .feature-text, .feature-img, .section-title, .hero-content, .hero-image');
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        // stagger cards
        if(el.classList.contains('card') || el.classList.contains('icon-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => observer.observe(el));

    // Premium Spotlight Hover Effect for Cards
    document.querySelectorAll('.card, .icon-card, .team-card, .tier-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

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
    // 3D Card Tilt Effect
    document.querySelectorAll('.card, .icon-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            card.style.transition = 'transform 0.1s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });

    // Super Interactive Particle Background
    const canvas = document.createElement('canvas');
    canvas.id = 'global-particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    
    // Global mouse tracker for particles
    let mouse = { x: null, y: null, radius: 180 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.radius = Math.random() * 2.5 + 1;
            this.baseColor = Math.random() > 0.4 ? 'rgba(59, 130, 246,' : 'rgba(16, 185, 129,';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Optional collision with mouse (bounce away slightly)
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= forceDirectionX * force * 2;
                    this.y -= forceDirectionY * force * 2;
                }
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.baseColor + ' 0.6)';
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const numParticles = Math.min(Math.floor((width * height) / 8000), 150);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Link particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - dist/750})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            
            // Link particle to mouse
            if (mouse.x != null && mouse.y != null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(16, 185, 129, ${0.8 - dist/mouse.radius})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
});
