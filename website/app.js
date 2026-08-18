// --- Application State & Data ---
const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'features', icon: 'fa-star', label: 'Features' },
    { id: 'download', icon: 'fa-download', label: 'Download' },
    { id: 'about-devs', icon: 'fa-users', label: 'About Devs' }
];

const pages = {
    home: `
        <header class="hero fade-up">
            <div class="hero-badge"><i class="fa-solid fa-paw"></i> Android Client</div>
            <h1>The iOS Instagram<br><span>Experience.</span> Built for Android.</h1>
            <p>Elevate your social feed. PawGram is a performance-first client bringing refined aesthetics, buttery-smooth animations, and native rendering right to your Android device.</p>
            <div class="btn-group">
                <a href="#download" class="btn btn-primary"><i class="fa-solid fa-download"></i> Get Latest Release</a>
                <a href="#features" class="btn btn-secondary"><i class="fa-solid fa-star"></i> Explore Features</a>
            </div>
        </header>
        <section class="features">
            <h2 class="section-title fade-up">PawGram in one glance</h2>
            <div class="grid">
                <div class="card fade-up" style="transition-delay:.05s">
                    <div class="card-icon"><i class="fa-solid fa-palette"></i></div>
                    <h3>Refined Aesthetics</h3>
                    <p>Premium visual polish inspired by iOS, tuned for modern Android form factors.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.10s">
                    <div class="card-icon"><i class="fa-solid fa-bolt"></i></div>
                    <h3>High Performance</h3>
                    <p>Fast feeds, smooth transitions, and efficient resource use across devices.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.15s">
                    <div class="card-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3>Stable Daily Use</h3>
                    <p>Reliability-focused updates shaped by active users and real-world testing.</p>
                </div>
            </div>
            <div class="btn-group fade-up">
                <a href="#features" class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i> See all Features</a>
            </div>
        </section>
        <section class="community fade-up">
            <h2>Built with the community.<br>Maintained by PAWJECTS.</h2>
            <p>Follow releases, feature announcements, and improvements from the core team.</p>
            <div class="btn-group">
                <a href="https://t.me/pawgramapp" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-telegram"></i> Join Channel</a>
                <a href="#about-devs" class="btn btn-secondary"><i class="fa-solid fa-users"></i> Meet PAWJECTS</a>
            </div>
        </section>
    `,
    features: `
        <header class="hero fade-up">
            <div class="hero-badge"><i class="fa-solid fa-star"></i> Feature Highlights</div>
            <h1>Everything that makes<br><span>PawGram</span> feel premium.</h1>
            <p>Every feature is tuned for visual consistency, speed, and stability across Android devices.</p>
        </header>
        <section class="features">
            <h2 class="section-title fade-up">Why choose PawGram?</h2>
            <div class="grid">
                <div class="card fade-up" style="transition-delay:.05s">
                    <div class="card-icon"><i class="fa-solid fa-palette"></i></div>
                    <h3>Refined Aesthetics</h3>
                    <p>Enjoy the premium look and feel of iOS, optimized beautifully and cleanly for your Android screen.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.10s">
                    <div class="card-icon"><i class="fa-solid fa-bolt"></i></div>
                    <h3>Lightning Fast</h3>
                    <p>Rewritten resource handling means smoother scrolling, faster loading, and zero lag when browsing your feed.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.15s">
                    <div class="card-icon"><i class="fa-solid fa-face-smile"></i></div>
                    <h3>Native iOS Emojis</h3>
                    <p>Express yourself exactly how you want. Built-in rendering ensures your emojis look perfectly consistent.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.20s">
                    <div class="card-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3>Rock-Solid Stability</h3>
                    <p>Say goodbye to unexpected crashes. Under-the-hood adjustments provide a seamless daily experience.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.25s">
                    <div class="card-icon"><i class="fa-solid fa-mobile-screen"></i></div>
                    <h3>Universal Compatibility</h3>
                    <p>Engineered to run flawlessly on both legacy and modern hardware, supporting 32-bit and 64-bit architectures.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.30s">
                    <div class="card-icon"><i class="fa-solid fa-rotate"></i></div>
                    <h3>Community-Driven</h3>
                    <p>Continuous updates and improvements guided directly by active community feedback and testing.</p>
                </div>
            </div>
        </section>
        <section class="community fade-up">
            <h2>Ready to try these features?</h2>
            <p>Install the latest release and stay connected with updates from the team.</p>
            <div class="btn-group">
                <a href="#download" class="btn btn-primary"><i class="fa-solid fa-download"></i> Download PawGram</a>
                <a href="https://github.com/pawjects/PawGram" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-brands fa-github"></i> View Source</a>
            </div>
        </section>
    `,
    download: `
        <header class="hero fade-up">
            <div class="hero-badge"><i class="fa-solid fa-download"></i> Official Downloads</div>
            <h1>Install the latest<br><span>PawGram</span> build.</h1>
            <p>Choose your preferred source and stay updated with stable releases and community announcements.</p>
        </header>
        <section class="features">
            <h2 class="section-title fade-up">Download PawGram</h2>
            <div class="grid">
                <div class="card fade-up download-notice" id="downloadNotice" style="transition-delay:.05s">
                    <p class="notice-loading">Loading latest build notice...</p>
                </div>
                <div class="card fade-up" style="transition-delay:.10s">
                    <div class="card-icon"><i class="fa-brands fa-github"></i></div>
                    <h3>GitHub Repository</h3>
                    <p>Track source changes, review release artifacts, and follow development progress.</p>
                    <div class="btn-group">
                        <a href="https://github.com/pawjects/PawGram" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-solid fa-code-branch"></i> View Repository</a>
                    </div>
                </div>
                <div class="card fade-up" style="transition-delay:.15s">
                    <div class="card-icon"><i class="fa-solid fa-users"></i></div>
                    <h3>Telegram Community</h3>
                    <p>Need support or want to report issues? Join the developer group and share details directly.</p>
                    <div class="btn-group">
                        <a href="https://t.me/pawgramapp" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-brands fa-telegram"></i> Join Community </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="community fade-up">
            <h2>Before you install</h2>
            <p>Use trusted links above, keep your current app data backed up, and read release notes for compatibility changes.</p>
            <a href="#features" class="btn btn-primary"><i class="fa-solid fa-star"></i> Review Features</a>
        </section>
    `,
    'about-devs': `
        <header class="hero fade-up">
            <div class="hero-badge"><i class="fa-solid fa-users"></i> PAWJECTS Team</div>
            <h1>Community-first development<br>by <span>PAWJECTS.</span></h1>
            <p>PawGram is built and maintained by a contributor-driven team focused on quality Android experiences.</p>
        </header>
        <section class="features">
            <h2 class="section-title fade-up">About the developers</h2>
            <div class="grid">
                <div class="card fade-up" style="transition-delay:.05s">
                    <div class="card-icon"><i class="fa-solid fa-bullseye"></i></div>
                    <h3>Mission</h3>
                    <p>Deliver a polished, stable, and accessible Instagram client experience for Android users.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.10s">
                    <div class="card-icon"><i class="fa-solid fa-code"></i></div>
                    <h3>Engineering Approach</h3>
                    <p>Iterative releases, practical performance tuning, and user-led validation before broad rollouts.</p>
                </div>
                <div class="card fade-up" style="transition-delay:.15s">
                    <div class="card-icon"><i class="fa-solid fa-comments"></i></div>
                    <h3>Open Feedback Loop</h3>
                    <p>Bug reports and ideas from the community are directly reflected in upcoming updates.</p>
                </div>
            </div>
        </section>
        <section class="community fade-up">
            <h2>Connect with PAWJECTS</h2>
            <p>Join the team spaces for support, announcements, and collaboration.</p>
            <div class="btn-group">
                <a href="https://t.me/pawgramapp" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-telegram"></i> PawGram Community </a>
                <a href="https://pawjects.github.io/" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-solid fa-globe"></i> Official Site</a>
            </div>
        </section>
    `
};

// --- UI Components Generation ---
function renderNav(activeId) {
    const navLinks = navItems.map(item => `<a href="#${item.id}" class="${item.id === activeId ? 'active' : ''}"><i class="fa-solid ${item.icon}"></i> ${item.label}</a>`).join('');
    const mobLinks = navItems.map(item => `<a href="#${item.id}" class="mob-link ${item.id === activeId ? 'active' : ''}"><i class="fa-solid ${item.icon}" style="color:var(--primary)"></i> ${item.label}</a>`).join('');

    return `
    <nav>
        <a class="logo" href="#home" aria-label="PawGram Home">
            <div style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 14px; background: var(--ig-gradient); box-shadow: 0 10px 30px rgba(131, 58, 180, 0.32);">
                <i class="fa-solid fa-paw" style="color: #fff; font-size: 1.2rem;"></i>
            </div>
            PawGram
        </a>
        <div class="nav-links">${navLinks}</div>
        <button class="nav-toggle" id="navToggle" aria-label="Open navigation" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        ${mobLinks}
    </div>
    `;
}

function renderFooter() {
    return `
    <footer class="fade-up">
        <div class="footer-links">
            <a href="https://pawjects.github.io/" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fa-solid fa-globe"></i> PAWJECTS Official Site
            </a>
            <a href="https://github.com/pawjects/PawGram" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fa-brands fa-github"></i> GitHub Repository
            </a>
            <a href="https://t.me/pawjects" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fa-brands fa-telegram"></i> Developer Channel
            </a>
        </div>
        <div class="footer-copy">
            <p>Crafted with paw by PAWJECTS.</p>
            <p>© 2026 PAWJECTS. PawGram is an independent community project and is not affiliated with Instagram or Meta Platforms, Inc.</p>
        </div>
    </footer>
    `;
}

// --- Data Fetching Logic (Retained from original) ---
function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

async function loadDownloadNotice() {
    const el = document.getElementById('downloadNotice');
    if (!el) return;
    try {
        const res = await fetch('download-notice.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        
        const changelogs = Array.isArray(data.changelogs) ? data.changelogs : [];
        const v7a = data.downloads?.v7a;
        const v8a = data.downloads?.v8a;

        el.innerHTML = `
            <div class="notice-head">
                <h3>PawGram ${escapeHtml(data.version || '')}</h3>
                <p>${escapeHtml(data.title || '')}</p>
            </div>
            <div class="notice-chip">
                <span>Base: ${escapeHtml(data.base || '')}</span>
            </div>
            <p class="notice-arch">Architecture: ${escapeHtml(data.architecture || '')}</p>
            <h4>Changelogs:</h4>
            <ul class="notice-changelogs">
                ${changelogs.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
            <div class="notice-actions">
                ${v7a?.url ? `<a class="btn btn-primary" href="${escapeHtml(v7a.url)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHtml(v7a.label || 'v7a')}</a>` : ''}
                ${v8a?.url ? `<a class="btn btn-primary" href="${escapeHtml(v8a.url)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHtml(v8a.label || 'v8a')}</a>` : ''}
            </div>
        `;
    } catch (e) {
        el.innerHTML = `
            <h3>Latest Build Notice</h3>
            <p class="notice-loading">Could not load notice JSON. Ensure <code>download-notice.json</code> is available in the directory.</p>
        `;
    }
}

// --- Event Initialization & Observers ---
function initGlobalEvents() {
    const progressBar = document.getElementById('scrollProgress');
    const scrollTopBtn = document.getElementById('scrollTop');

    // Scroll Logic
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        
        if (progressBar) progressBar.style.width = (total > 0 ? (scrolled / total * 100).toFixed(1) : 0) + '%';
        if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', scrolled > 400);
    }, { passive: true });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Navigation Toggle Logic
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        const closeMenu = () => {
            navToggle.classList.remove('open');
            mobileMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', e => {
            e.stopPropagation();
            const isOpen = mobileMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', e => {
            if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
        });
        
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeMenu();
        });
        
        // Make closeMenu accessible to router
        window.closeMobileMenu = closeMenu;
    }
}

function initPageInteractions() {
    const fadeEls = document.querySelectorAll('.fade-up');
    if (fadeEls.length) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px', threshold: 0.08 });

        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                io.observe(el);
            }
        });
    }
}

// --- Routing Engine ---
function updateNavActiveState(activeId) {
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
    
    const titleMap = { home: 'Home', features: 'Features', download: 'Download', 'about-devs': 'About Devs' };
    document.title = `PawGram - ${titleMap[activeId] || 'Home'}`;
}

function router() {
    let hash = window.location.hash.slice(1) || 'home';
    if (!pages[hash]) hash = 'home';

    // Boot shell if empty
    if (!document.getElementById('nav-container').innerHTML) {
        document.getElementById('nav-container').innerHTML = renderNav(hash);
        document.getElementById('footer-container').innerHTML = renderFooter();
        initGlobalEvents();
    } else {
        updateNavActiveState(hash);
    }

    // Inject active page view
    document.getElementById('app-content').innerHTML = pages[hash];
    
    // Cleanup & Post-Render hooks
    if (window.closeMobileMenu) window.closeMobileMenu();
    window.scrollTo(0, 0);
    
    // Defer observation slightly to ensure DOM paints first
    setTimeout(() => {
        initPageInteractions();
        if (hash === 'download') loadDownloadNotice();
    }, 0);
}

// --- Application Boot ---
window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);
