// --- Application State & Data ---
const navItems = [
  { id: "home", icon: "fa-house", label: "Home" },
  { id: "features", icon: "fa-star", label: "Features" },
  { id: "wiki", icon: "fa-book-open", label: "Wiki" },
  { id: "download", icon: "fa-download", label: "Download" },
  { id: "about-devs", icon: "fa-users", label: "About Devs" },
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
  get wiki() {
    return renderWikiHub();
  },
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
  "about-devs": `
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
    `,
};

// --- UI Components Generation ---
function renderNav(activeId) {
  const navLinks = navItems
    .map(
      (item) =>
        `<a href="#${item.id}" class="${item.id === activeId ? "active" : ""}"><i class="fa-solid ${item.icon}"></i> ${item.label}</a>`,
    )
    .join("");
  const mobLinks = navItems
    .map(
      (item) =>
        `<a href="#${item.id}" class="mob-link ${item.id === activeId ? "active" : ""}"><i class="fa-solid ${item.icon}" style="color:var(--primary)"></i> ${item.label}</a>`,
    )
    .join("");

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
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadDownloadNotice() {
  const el = document.getElementById("downloadNotice");
  if (!el) return;
  try {
    const res = await fetch("release-config.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();

    const changelogs = Array.isArray(data.changelogs) ? data.changelogs : [];
    const v7a = data.downloads?.v7a;
    const v8a = data.downloads?.v8a;

    el.innerHTML = `
            <div class="notice-head">
                <h3>PawGram ${escapeHtml(data.version || "")}</h3>
                <p>${escapeHtml(data.title || "")}</p>
            </div>
            <div class="notice-chip">
                <span>Base: ${escapeHtml(data.base || "")}</span>
            </div>
            <p class="notice-arch">Architecture: ${escapeHtml(data.architecture || "")}</p>
            <h4>Changelogs:</h4>
            <ul class="notice-changelogs">
                ${changelogs.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
            <div class="notice-actions">
                ${v7a?.url ? `<a class="btn btn-primary" href="${escapeHtml(v7a.url)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHtml(v7a.label || "v7a")}</a>` : ""}
                ${v8a?.url ? `<a class="btn btn-primary" href="${escapeHtml(v8a.url)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${escapeHtml(v8a.label || "v8a")}</a>` : ""}
            </div>
        `;
  } catch (e) {
    el.innerHTML = `
            <h3>Latest Build Notice</h3>
            <p class="notice-loading">Could not load notice JSON. Ensure <code>release-config.json</code> is available in the directory.</p>
        `;
  }
}

// --- PawGram & PawGram X Wiki Ecosystem Data ---
const wikiCategories = {
  core: {
    id: "core",
    name: "PawGram Core",
    icon: "fa-solid fa-paw",
    badge: "Mainline Edition",
    color: "var(--ig-orange)",
    tagline: "The stable, refined Instagram Alpha build for daily Android use.",
    description:
      "PawGram Core is built on the official Instagram Alpha channel with aesthetic refinements, native iOS emoji injection, ad-free browsing, developer options, and independent clone packaging.",
    articles: [
      {
        id: "overview",
        title: "PawGram Core Overview",
        icon: "fa-solid fa-paw",
        readTime: "2 min read",
        shortDesc:
          "Mainline release foundation, design philosophy, and performance goals.",
        content: `
          <h2>The Daily-Driver Client</h2>
          <p>PawGram Core represents the foundation of the PawGram project: a clean, performance-first Android client based directly on the official Instagram Alpha channel. It is engineered specifically for users who want refined aesthetics, buttery-smooth animations, and power-user developer tools without sacrificing system stability or daily battery life.</p>
          
          <div class="wiki-callout info">
            <div class="wiki-callout-icon"><i class="fa-solid fa-circle-info"></i></div>
            <p><strong>Weekly Release Cadence:</strong> PawGram Core is updated weekly to incorporate upstream Instagram Alpha optimizations while continuously maintaining our custom patch set.</p>
          </div>

          <h2>Key Architectural Goals</h2>
          <ul>
            <li><strong>Minimal Footprint:</strong> Zero third-party ad tracking, unwanted bloat, or background analytics telemetry.</li>
            <li><strong>Visual Polish:</strong> High-fidelity iOS aesthetic parity, native iOS emoji glyph rendering, and smooth frame transitions.</li>
            <li><strong>Universal Architecture:</strong> Full compatibility with both ARMv7 (32-bit legacy) and ARM64 (64-bit modern) devices.</li>
            <li><strong>Sandbox Isolation:</strong> Installed under a separate package identifier so you can keep and compare your official Instagram app side-by-side.</li>
          </ul>
        `,
      },
      {
        id: "ad-blocking",
        title: "Ad-Free Experience",
        icon: "fa-solid fa-ban",
        readTime: "2 min read",
        shortDesc:
          "Native suppression of sponsored feed posts, story ads, and video promotions.",
        content: `
          <h2>Distraction-Free Feed & Stories</h2>
          <p>Traditional Instagram feeds are heavily saturated with sponsored posts, interruptive story advertisements, and algorithmic marketing promotions. PawGram strips these injections natively at the application level.</p>

          <div class="wiki-callout tip">
            <div class="wiki-callout-icon"><i class="fa-solid fa-shield-halved"></i></div>
            <p><strong>Zero Interruption:</strong> Ad suppression happens before views are instantiated, conserving mobile bandwidth and accelerating timeline scrolling speeds.</p>
          </div>

          <h2>What is Filtered?</h2>
          <ul>
            <li><strong>Sponsored Timeline Posts:</strong> Marketing posts and carousel ads in the main feed are completely omitted.</li>
            <li><strong>Story Advertisements:</strong> Video and image ads between stories are smoothly bypassed.</li>
            <li><strong>Suggested Reels Promotions:</strong> Reels feeds are cleaned of sponsored injection units.</li>
          </ul>
        `,
      },
      {
        id: "developer-options",
        title: "Developer Options & Internal Menus",
        icon: "fa-solid fa-screwdriver-wrench",
        readTime: "3 min read",
        shortDesc:
          "Access Meta's internal alpha switches and developer preferences.",
        content: `
          <h2>Unlocking Hidden Alpha Settings</h2>
          <p>PawGram hooks into internal user session verifications to force-unlock Meta's hidden Developer Options menu. This unlocks deep client-side toggles normally restricted to internal Meta test teams.</p>

          <div class="wiki-callout tip">
            <div class="wiki-callout-icon"><i class="fa-solid fa-lightbulb"></i></div>
            <p><strong>How to Access:</strong> Simply long-press the <strong>Home icon (🏠)</strong> on PawGram's bottom navigation bar. The Developer Options panel will immediately open.</p>
          </div>

          <h2>What You Can Configure</h2>
          <ul>
            <li><strong>MetaConfig Flags:</strong> Modify internal experiment parameters and test upcoming feature flags.</li>
            <li><strong>UI Customization:</strong> Switch between different layout prototypes and experimental navigation bars.</li>
            <li><strong>Performance & Caching:</strong> Adjust image cache limits, video prefetch thresholds, and render buffer sizes.</li>
            <li><strong>Debug Overlays:</strong> Inspect frame rendering metrics and network latency.</li>
          </ul>
        `,
      },
      {
        id: "ios-emojis",
        title: "Native iOS Emojis & Typography",
        icon: "fa-brands fa-apple",
        readTime: "2 min read",
        shortDesc:
          "Apple Color Emoji integration across chats, comments, and stories without root.",
        content: `
          <h2>Apple Color Emoji on Android</h2>
          <p>Android devices often render system emojis differently across OEMs (Samsung, Xiaomi, Google Pixel, etc.), causing mismatched expressions and layout bugs. PawGram replaces Instagram's default font resource with Apple Color Emoji glyphs directly inside the APK.</p>

          <div class="wiki-callout info">
            <div class="wiki-callout-icon"><i class="fa-solid fa-font"></i></div>
            <p><strong>Byte-Level Replacement:</strong> Injected directly into <code>IGBetaUIv9_Regular.ttf</code> in the APK assets. No root access, Magisk modules, or third-party font keyboards are required.</p>
          </div>

          <h2>Where Do iOS Emojis Appear?</h2>
          <ul>
            <li>Direct Message chat bubbles and reactions</li>
            <li>Story captions, stickers, and interactive question boxes</li>
            <li>Timeline comments and comment replies</li>
            <li>User profile bios and display names</li>
          </ul>
        `,
      },
      {
        id: "clone-builds",
        title: "Clone App Package Architecture",
        icon: "fa-solid fa-copy",
        readTime: "2 min read",
        shortDesc: "Isolated package namespaces for side-by-side installation.",
        content: `
          <h2>Coexist with Official Instagram</h2>
          <p>PawGram is compiled with an independent application package name: <code>paw.instagram.android</code>. This provides complete sandbox separation from the official Google Play release.</p>

          <div class="wiki-callout tip">
            <div class="wiki-callout-icon"><i class="fa-solid fa-check"></i></div>
            <p><strong>Independent Data Storage:</strong> PawGram keeps its own cache, authentication credentials, and database files. You can safely run both applications simultaneously on the same device.</p>
          </div>

          <h2>Architecture Support</h2>
          <ul>
            <li><strong>ARMv7 (32-bit):</strong> Specially optimized for older and low-spec Android devices to ensure lightweight memory consumption.</li>
            <li><strong>ARM64 (64-bit):</strong> Compiled with full 64-bit native binaries for peak rendering speeds and high refresh rates on modern devices.</li>
          </ul>
        `,
      },
    ],
  },
  x: {
    id: "x",
    name: "PawGram X",
    icon: "fa-solid fa-spider",
    badge: "Experimental Edition",
    color: "#b89fff",
    tagline:
      "The bleeding-edge testbed with Ghost modes and advanced MetaConfig flags.",
    description:
      "PawGram X is our experimental branch exploring advanced configuration hooks, MetaConfig overrides, stealth Ghost reading tools, and monthly updates for power users.",
    articles: [
      {
        id: "overview",
        title: "PawGram X Overview",
        icon: "fa-solid fa-spider",
        readTime: "2 min read",
        shortDesc:
          "Experimental branch scope, release schedule, and power-user focus.",
        content: `
          <h2>Pushing the Boundaries of Customization</h2>
          <p>PawGram X is the dedicated testing ground for experimental features, unconventional patches, and power-user configurations. While PawGram Core focuses on daily-driver rock-solid stability, PawGram X explores advanced privacy enhancements, font options, and MetaConfig tools.</p>

          <div class="wiki-callout purple">
            <div class="wiki-callout-icon"><i class="fa-solid fa-flask"></i></div>
            <p><strong>Monthly Release Cadence:</strong> PawGram X follows a monthly cycle to allow thorough development, validation, and testing of complex bytecode modifications.</p>
          </div>

          <h2>What PawGram X Adds:</h2>
          <ul>
            <li><strong>MetaConfig Flag Overrides:</strong> Apply preconfigured flag files to modify server-controlled behaviors.</li>
            <li><strong>Ghost Mode:</strong> Read incoming DMs and view stories without transmitting read receipts.</li>
            <li><strong>Custom Story Fonts:</strong> Unlock additional font faces for creative story creation.</li>
            <li><strong>Config Import/Export:</strong> Export your active configuration and share presets with others.</li>
          </ul>
        `,
      },
      {
        id: "metaconfig-flags",
        title: "MetaConfig Flags & Experimentation",
        icon: "fa-solid fa-sliders",
        readTime: "3 min read",
        shortDesc: "Deep server-side flag overrides and UI experimentation.",
        content: `
          <h2>Controlling Instagram's Internal Engine</h2>
          <p>Instagram uses a client configuration system called <em>MobileConfig</em> (MetaConfig) to remotely toggle features, UI layouts, and test algorithms. PawGram X gives users the ability to override these parameters directly via <code>mc_overrides.json</code>.</p>

          <div class="wiki-callout purple">
            <div class="wiki-callout-icon"><i class="fa-solid fa-gear"></i></div>
            <p><strong>Custom Overrides:</strong> Store custom JSON configs inside <code>/data/files/mobileconfig/mc_overrides.json</code> to persist your preferred flag state across reboots.</p>
          </div>

          <h2>Popular MetaConfig Capabilities:</h2>
          <ul>
            <li>Enabling unreleased UI designs and layout refreshes</li>
            <li>Adjusting media bitrate limits and video upload qualities</li>
            <li>Toggling experimental feed sorting and navigation controls</li>
          </ul>
        `,
      },
      {
        id: "ghost-mode",
        title: "Ghost DM & Stealth Story Viewing",
        icon: "fa-regular fa-eye-slash",
        readTime: "2 min read",
        shortDesc: "Unseen message reading and incognito story viewing.",
        content: `
          <h2>Client-Side Stealth Controls</h2>
          <p>Ghost Mode in PawGram X provides experimental privacy controls designed to prevent the client from sending interaction signals back to Meta's servers.</p>

          <div class="wiki-callout purple">
            <div class="wiki-callout-icon"><i class="fa-solid fa-ghost"></i></div>
            <p><strong>Read Receipt Suppression:</strong> When enabled, opening direct messages will not dispatch a "Seen" status notification to the sender.</p>
          </div>

          <h2>Stealth Features:</h2>
          <ul>
            <li><strong>Ghost Story View:</strong> Watch friends' stories without your profile appearing in their viewer list.</li>
            <li><strong>Ghost Direct Message:</strong> Read incoming messages privately without marking them as opened.</li>
            <li><strong>Safe Client Execution:</strong> Works entirely client-side by withholding outgoing telemetry packets.</li>
          </ul>
        `,
      },
      {
        id: "story-fonts",
        title: "Premium Story Fonts Unlock",
        icon: "fa-solid fa-font",
        readTime: "2 min read",
        shortDesc: "Creative typography options unlocked in the Story editor.",
        content: `
          <h2>Expanded Creative Typography</h2>
          <p>In standard Instagram, many story fonts and typographic styles are region-restricted, device-locked, or hidden behind server-side A/B tests. PawGram X force-unlocks the full palette of story fonts for all users.</p>

          <div class="wiki-callout purple">
            <div class="wiki-callout-icon"><i class="fa-solid fa-pen-nib"></i></div>
            <p><strong>Express Yourself:</strong> Access creative typefaces, elegant scripts, and distinct headline fonts directly in your story editor toolbar.</p>
          </div>

          <h2>Benefits:</h2>
          <ul>
            <li>Full story font carousel unlocked globally</li>
            <li>Consistent typography rendering for stories</li>
            <li>Custom background styling options enabled</li>
          </ul>
        `,
      },
      {
        id: "config-management",
        title: "Config Import & Export",
        icon: "fa-solid fa-file-export",
        readTime: "2 min read",
        shortDesc: "Backup and restore custom MetaConfig configurations.",
        content: `
          <h2>Share and Migrate Setups</h2>
          <p>Manually adjusting dozens of MetaConfig flags can be tedious. PawGram X includes built-in config import and export handling, making it effortless to backup or share your preferred setups.</p>

          <div class="wiki-callout tip">
            <div class="wiki-callout-icon"><i class="fa-solid fa-file-arrow-up"></i></div>
            <p><strong>One-Click Sharing:</strong> Export your tuned flags to a clean JSON file and share it with friends in the PawGram Telegram community.</p>
          </div>

          <h2>Workflow:</h2>
          <ul>
            <li><strong>Export:</strong> Save your active modifications into a portable backup file.</li>
            <li><strong>Import:</strong> Load community-curated presets to instantly activate recommended flag sets.</li>
          </ul>
        `,
      },
    ],
  },
  comparison: {
    id: "comparison",
    name: "Feature Comparison",
    icon: "fa-solid fa-table-columns",
    badge: "Matrix & Breakdown",
    color: "var(--ig-pink)",
    tagline:
      "Comprehensive side-by-side comparison between Core and X editions.",
    description:
      "Evaluate features, update cadence, stability expectations, and choose the edition that fits your everyday usage.",
    articles: [
      {
        id: "matrix",
        title: "Core vs PawGram X Comparison Matrix",
        icon: "fa-solid fa-code-compare",
        readTime: "3 min read",
        shortDesc:
          "Side-by-side breakdown of features, update cycles, and differences.",
        content: `
          <h2>Which Build is Right for You?</h2>
          <p>Both PawGram Core and PawGram X share the same high-performance base, but they serve different user preferences. Review the side-by-side breakdown below to find your ideal match.</p>

          <div class="wiki-callout info">
            <div class="wiki-callout-icon"><i class="fa-solid fa-paw"></i></div>
            <p><strong>Summary Recommendation:</strong> Choose <strong>PawGram Core</strong> if you want a reliable daily driver with weekly updates, ad removal, and iOS emojis. Choose <strong>PawGram X</strong> if you love tweaking MetaConfig flags and want experimental Ghost modes.</p>
          </div>

          <div style="margin: 2rem 0;">
            ${renderComparisonTableHtml()}
          </div>
        `,
      },
    ],
  },
  guides: {
    id: "guides",
    name: "Guides & FAQ",
    icon: "fa-solid fa-compass",
    badge: "Help & Documentation",
    color: "var(--ig-blue)",
    tagline: "Step-by-step installation guides and frequently asked questions.",
    description:
      "Learn how to apply custom config overrides and find verified answers to common questions about PawGram.",
    articles: [
      {
        id: "config-guide",
        title: "Guide to Apply Config File (mc_overrides.json)",
        icon: "fa-solid fa-file-code",
        readTime: "3 min read",
        shortDesc: "Step-by-step instructions for placing custom config files.",
        content: `
          <h2>Step-by-Step Instructions</h2>
          <p>Follow these steps to properly install and apply your custom configuration file to PawGram.</p>

          <h3>1. Download the Config File</h3>
          <p>Download your desired config file and save it locally on your device (usually saved in your <em>Downloads</em> folder).</p>

          <h3>2. Install Required File Manager</h3>
          <p>To access application internal data folders, you will need a capable file manager such as <strong>Files App</strong> or <strong>MT Manager</strong>.</p>

          <h3>3. Locate and Copy the File</h3>
          <p>Open your file manager, locate the downloaded configuration file, and copy it to your clipboard.</p>

          <h3>4. Navigate to PawGram Directory</h3>
          <p>Navigate to PawGram's internal configuration folder by following this exact path:</p>
          <div class="wiki-code-block">PawGram &rarr; data &rarr; files &rarr; mobileconfig</div>

          <h3>5. Rename the File</h3>
          <p>Paste the file and rename it to:</p>
          <div class="wiki-code-block">mc_overrides.json</div>

          <div class="wiki-callout orange">
            <div class="wiki-callout-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <p><strong>Important:</strong> If an older <code>mc_overrides.json</code> already exists in this folder, delete it before renaming the new one to prevent conflicts.</p>
          </div>

          <h3>6. Apply Changes and Restart</h3>
          <p>Go to your Android App Info settings, <strong>Force Stop</strong> PawGram, and reopen the application. Your custom settings are now active!</p>
        `,
      },
      {
        id: "faq",
        title: "Frequently Asked Questions (FAQ)",
        icon: "fa-solid fa-circle-question",
        readTime: "4 min read",
        shortDesc: "Answers about clone safety, outdated popups, and emojis.",
        content: `
          <h2>Common Questions & Solutions</h2>

          <h3>Can I use PawGram alongside the official Instagram app?</h3>
          <p>Yes! PawGram is compiled as a clone package (<code>paw.instagram.android</code>). This isolates its data and installation from the official app, allowing you to run both safely on the same device.</p>

          <h3>I'm seeing an "App is outdated" popup. What do I do?</h3>
          <p>PawGram includes a specific modification that bypasses the base outdated popup. If you ever see this notice, simply ensure you have installed the latest update from our Telegram channel.</p>

          <h3>How do I access hidden Alpha features?</h3>
          <p>Long-press the <strong>Home Icon (🏠)</strong> on PawGram's bottom navigation bar to open the Developer Options page and MetaConfig Flags panel.</p>

          <h3>Why do some emojis look different?</h3>
          <p>We replaced Instagram's default <code>IGBetaUIv9_Regular.ttf</code> file with Apple Color Emojis, providing a native iOS emoji visual experience across the app without requiring root.</p>

          <h3>Will I get banned for using this?</h3>
          <p>PawGram focuses exclusively on client-side aesthetic and layout modifications (ad-blocking, iOS emojis, AMOLED theming). It does not automate actions, scrape data, or spam APIs.</p>
        `,
      },
    ],
  },
};

// --- Breadcrumb Navigation Component ---
function renderBreadcrumbs(crumbs, backLink = null, backLabel = null) {
  const listItems = crumbs
    .map((crumb, idx) => {
      const isLast = idx === crumbs.length - 1;
      const iconHtml = crumb.icon ? `<i class="${crumb.icon}"></i> ` : "";
      if (isLast) {
        return `<li class="breadcrumb-item current" aria-current="page">${iconHtml}${escapeHtml(crumb.label)}</li>`;
      }
      return `
        <li class="breadcrumb-item">
          <a href="${crumb.href || "#"}">${iconHtml}${escapeHtml(crumb.label)}</a>
        </li>
        <li class="breadcrumb-separator" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></li>
      `;
    })
    .join("");

  const backHtml = backLink
    ? `<a href="${backLink}" class="breadcrumb-back-pill" title="${escapeHtml(backLabel || "Back")}">
         <i class="fa-solid fa-arrow-left"></i> <span>${escapeHtml(backLabel || "Back")}</span>
       </a>`
    : "";

  return `
    <div class="wiki-breadcrumbs-container">
      <nav class="wiki-breadcrumbs fade-up" aria-label="Breadcrumb">
        <ol class="breadcrumb-list">
          ${listItems}
        </ol>
        ${backHtml}
      </nav>
    </div>
  `;
}

function renderComparisonTableHtml() {
  return `
    <div class="card fade-up" style="overflow-x: auto; padding: 0; border-radius: var(--r-card);">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: center;">
            <thead style="background: rgba(255, 255, 255, 0.04); border-bottom: 1px solid var(--border);">
                <tr>
                    <th style="padding: 20px 24px; text-align: left; font-family: 'Syne', sans-serif; font-size: 1.1rem; color: #fff;">Feature</th>
                    <th style="padding: 20px 24px; font-family: 'Syne', sans-serif; font-size: 1.1rem; color: #fff;"><i class="fa-solid fa-paw" style="color: var(--ig-orange);"></i> PawGram</th>
                    <th style="padding: 20px 24px; font-family: 'Syne', sans-serif; font-size: 1.1rem; color: #fff;"><i class="fa-solid fa-spider" style="color: #b89fff;"></i> PawGram X</th>
                </tr>
            </thead>
            <tbody style="font-size: 0.95rem;">
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Ads Removed</td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Developer Options</td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Clone Builds & iOS Emojis</td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">MetaConfig Experiments</td>
                    <td style="padding: 18px 24px; color: var(--muted);">—</td>
                    <td style="padding: 18px 24px; color: #b89fff;"><i class="fa-solid fa-flask"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Ghost DM & Story View</td>
                    <td style="padding: 18px 24px; color: var(--muted);">—</td>
                    <td style="padding: 18px 24px; color: #b89fff;"><i class="fa-solid fa-ghost"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Premium Story Fonts</td>
                    <td style="padding: 18px 24px; color: var(--muted);">—</td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Config Import / Export</td>
                    <td style="padding: 18px 24px; color: var(--muted);">—</td>
                    <td style="padding: 18px 24px; color: #66e59c;"><i class="fa-solid fa-check"></i></td>
                </tr>
                <tr>
                    <td style="padding: 18px 24px; text-align: left; color: var(--muted); font-weight: 500;">Update Cycle</td>
                    <td style="padding: 18px 24px; color: #fff; font-weight: 600;">Weekly</td>
                    <td style="padding: 18px 24px; color: #fff; font-weight: 600;">Monthly</td>
                </tr>
            </tbody>
        </table>
    </div>
  `;
}

// --- Wiki View Renderers ---
function renderWikiArticle(catId, artId) {
  const cat = wikiCategories[catId];
  if (!cat) return renderWikiHub();
  const artIndex = cat.articles.findIndex((a) => a.id === artId);
  const art = cat.articles[artIndex];
  if (!art) return renderWikiCategory(catId);

  const prevArt = artIndex > 0 ? cat.articles[artIndex - 1] : null;
  const nextArt =
    artIndex < cat.articles.length - 1 ? cat.articles[artIndex + 1] : null;

  const breadcrumbs = renderBreadcrumbs(
    [
      { label: "Wiki", href: "#wiki", icon: "fa-solid fa-book-open" },
      { label: cat.name, href: `#wiki/${cat.id}`, icon: cat.icon },
      { label: art.title, icon: art.icon },
    ],
    `#wiki/${cat.id}`,
    `Back to ${cat.name}`,
  );

  return `
    ${breadcrumbs}
    <article class="features" style="max-width: 980px; margin: 0 auto 3rem;">
      <div class="wiki-article-card fade-up">
        <header class="wiki-article-header">
          <div class="wiki-article-badge" style="color: ${cat.color};">
            <i class="${cat.icon}"></i> ${escapeHtml(cat.name)}
          </div>
          <h1>${escapeHtml(art.title)}</h1>
          <p class="article-subtitle">${escapeHtml(art.shortDesc)}</p>
          <div class="wiki-article-meta">
            <span><i class="fa-regular fa-clock"></i> ${escapeHtml(art.readTime)}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${escapeHtml(cat.badge)}</span>
            <span><i class="fa-solid fa-mobile-screen"></i> Android Alpha</span>
          </div>
        </header>

        <div class="wiki-prose">
          ${art.content}
        </div>

        <footer class="wiki-nav-bar">
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="#wiki/${cat.id}" class="btn btn-secondary">
              <i class="fa-solid fa-arrow-left"></i> Back to ${escapeHtml(cat.name)}
            </a>
            <a href="#wiki" class="btn btn-secondary">
              <i class="fa-solid fa-book-open"></i> Wiki Index
            </a>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            ${
              prevArt
                ? `<a href="#wiki/${cat.id}/${prevArt.id}" class="btn btn-secondary" title="${escapeHtml(prevArt.title)}">
                     <i class="fa-solid fa-chevron-left"></i> Previous
                   </a>`
                : ""
            }
            ${
              nextArt
                ? `<a href="#wiki/${cat.id}/${nextArt.id}" class="btn btn-primary" title="${escapeHtml(nextArt.title)}">
                     Next <i class="fa-solid fa-chevron-right"></i>
                   </a>`
                : ""
            }
          </div>
        </footer>
      </div>
    </article>
  `;
}

function renderWikiCategory(catId) {
  const cat = wikiCategories[catId];
  if (!cat) return renderWikiHub();

  const breadcrumbs = renderBreadcrumbs(
    [
      { label: "Wiki", href: "#wiki", icon: "fa-solid fa-book-open" },
      { label: cat.name, icon: cat.icon },
    ],
    "#wiki",
    "Back to Wiki Index",
  );

  const articleCards = cat.articles
    .map(
      (art, index) => `
        <a href="#wiki/${cat.id}/${art.id}" class="card article-card-link fade-up" style="transition-delay: ${0.05 * (index + 1)}s">
          <div>
            <div class="card-icon" style="color: ${cat.color}; background: rgba(255, 255, 255, 0.05);">
              <i class="${art.icon}"></i>
            </div>
            <h3>${escapeHtml(art.title)}</h3>
            <p>${escapeHtml(art.shortDesc)}</p>
          </div>
          <div style="margin-top: 20px; display: flex; align-items: center; justify-content: space-between; font-size: 0.86rem; color: var(--muted); border-top: 1px solid var(--border); padding-top: 14px;">
            <span><i class="fa-regular fa-clock"></i> ${escapeHtml(art.readTime)}</span>
            <span style="color: #fff; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Read Article <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem;"></i>
            </span>
          </div>
        </a>
      `,
    )
    .join("");

  return `
    ${breadcrumbs}
    <header class="hero category-hero fade-up">
      <div class="hero-badge" style="color: ${cat.color};">
        <i class="${cat.icon}"></i> ${escapeHtml(cat.badge)}
      </div>
      <h1>${escapeHtml(cat.name)}</h1>
      <p>${escapeHtml(cat.description)}</p>
      <div class="category-stat-badge">
        <i class="fa-solid fa-file-lines"></i> ${cat.articles.length} Knowledge Base Articles
      </div>
    </header>

    <section class="features">
      <h2 class="section-title fade-up">Browse Articles in ${escapeHtml(cat.name)}</h2>
      <div class="grid">
        ${articleCards}
      </div>
      <div class="btn-group fade-up" style="margin-top: 3rem;">
        <a href="#wiki" class="btn btn-secondary"><i class="fa-solid fa-book-open"></i> Back to Wiki Index</a>
        <a href="#download" class="btn btn-primary"><i class="fa-solid fa-download"></i> Get PawGram</a>
      </div>
    </section>
  `;
}

function renderWikiHub() {
  const breadcrumbs = renderBreadcrumbs([
    { label: "Home", href: "#home", icon: "fa-solid fa-house" },
    { label: "Wiki", icon: "fa-solid fa-book-open" },
  ]);

  const categoryCards = Object.values(wikiCategories)
    .map(
      (cat, index) => `
        <a href="#wiki/${cat.id}" class="card category-card fade-up" style="transition-delay: ${0.05 * (index + 1)}s">
          <div class="card-icon" style="color: ${cat.color}; background: rgba(255, 255, 255, 0.05);">
            <i class="${cat.icon}"></i>
          </div>
          <div style="display: inline-block; font-size: 0.76rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.8px; color: ${cat.color}; margin-bottom: 6px;">
            ${escapeHtml(cat.badge)}
          </div>
          <h3>${escapeHtml(cat.name)}</h3>
          <p>${escapeHtml(cat.tagline)}</p>
          <div style="margin-top: auto; padding-top: 18px; display: flex; align-items: center; justify-content: space-between; font-size: 0.86rem; color: var(--muted); border-top: 1px solid var(--border);">
            <span><i class="fa-solid fa-file-lines"></i> ${cat.articles.length} Articles</span>
            <span style="color: #fff; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Explore <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem;"></i>
            </span>
          </div>
        </a>
      `,
    )
    .join("");

  const coreArticles = wikiCategories.core.articles
    .map(
      (art, index) => `
        <a href="#wiki/core/${art.id}" class="card article-card-link fade-up" style="transition-delay: ${0.05 * (index + 1)}s">
          <div>
            <div class="card-icon"><i class="${art.icon}"></i></div>
            <h3>${escapeHtml(art.title)}</h3>
            <p>${escapeHtml(art.shortDesc)}</p>
          </div>
          <div style="margin-top: 18px; font-size: 0.85rem; color: #fff; font-weight: 600; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 12px;">
            <span style="color: var(--muted);"><i class="fa-regular fa-clock"></i> ${escapeHtml(art.readTime)}</span>
            <span>Read <i class="fa-solid fa-chevron-right" style="font-size: 0.76rem;"></i></span>
          </div>
        </a>
      `,
    )
    .join("");

  const xArticles = wikiCategories.x.articles
    .map(
      (art, index) => `
        <a href="#wiki/x/${art.id}" class="card article-card-link fade-up" style="transition-delay: ${0.05 * (index + 1)}s">
          <div>
            <div class="card-icon" style="color: #b89fff; background: rgba(131, 58, 180, 0.14);"><i class="${art.icon}"></i></div>
            <h3>${escapeHtml(art.title)}</h3>
            <p>${escapeHtml(art.shortDesc)}</p>
          </div>
          <div style="margin-top: 18px; font-size: 0.85rem; color: #fff; font-weight: 600; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 12px;">
            <span style="color: var(--muted);"><i class="fa-regular fa-clock"></i> ${escapeHtml(art.readTime)}</span>
            <span>Read <i class="fa-solid fa-chevron-right" style="font-size: 0.76rem;"></i></span>
          </div>
        </a>
      `,
    )
    .join("");

  return `
    ${breadcrumbs}
    <header class="hero fade-up">
        <div class="hero-badge"><i class="fa-solid fa-book-open"></i> PawGram Ecosystem</div>
        <h1>Two builds.<br><span>One idea.</span></h1>
        <p>Understand the differences between PawGram and PawGram X, explore experimental features, and browse technical documentation with category navigation.</p>
    </header>

    <section class="features">
        <h2 class="section-title fade-up">Wiki Categories</h2>
        <div class="grid">
            ${categoryCards}
        </div>
    </section>

    <section class="features">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
          <h2 class="section-title fade-up" style="margin-bottom: 0;">PawGram Core Features</h2>
          <a href="#wiki/core" class="btn btn-secondary fade-up" style="font-size: 0.88rem; padding: 10px 18px;">
            View All Core Articles <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div class="grid">
            ${coreArticles}
        </div>
    </section>

    <section class="features">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
          <h2 class="section-title fade-up" style="margin-bottom: 0;">PawGram X Features</h2>
          <a href="#wiki/x" class="btn btn-secondary fade-up" style="font-size: 0.88rem; padding: 10px 18px;">
            View All X Articles <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div class="grid">
            ${xArticles}
        </div>
    </section>

    <section class="features">
        <h2 class="section-title fade-up">Feature Comparison</h2>
        ${renderComparisonTableHtml()}
    </section>

    <section class="community fade-up">
        <h2>Ready to paw in?</h2>
        <p>Get the latest available PawGram and PawGram X builds directly from the official PawGram download hub.</p>
        <div class="btn-group">
            <a href="#download" class="btn btn-primary"><i class="fa-solid fa-cloud-arrow-down"></i> Open Download Hub</a>
            <a href="#wiki/guides/faq" class="btn btn-secondary"><i class="fa-solid fa-circle-question"></i> Read FAQ</a>
        </div>
    </section>
  `;
}

// --- Event Initialization & Observers ---
function initGlobalEvents() {
  const progressBar = document.getElementById("scrollProgress");
  const scrollTopBtn = document.getElementById("scrollTop");

  // Scroll Logic
  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;

      if (progressBar)
        progressBar.style.width =
          (total > 0 ? ((scrolled / total) * 100).toFixed(1) : 0) + "%";
      if (scrollTopBtn)
        scrollTopBtn.classList.toggle("visible", scrolled > 400);
    },
    { passive: true },
  );

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  // Navigation Toggle Logic
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    const closeMenu = () => {
      navToggle.classList.remove("open");
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target))
        closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Make closeMenu accessible to router
    window.closeMobileMenu = closeMenu;
  }
}

function initPageInteractions() {
  const fadeEls = document.querySelectorAll(".fade-up");
  if (fadeEls.length) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.08 },
    );

    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        io.observe(el);
      }
    });
  }
}

// --- Routing Engine ---
function updateNavActiveState(fullHash) {
  const parts = fullHash.split("/").filter(Boolean);
  const root = parts[0] || "home";

  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle(
      "active",
      href === `#${root}` || href === `#${fullHash}`,
    );
  });

  if (root === "wiki") {
    if (parts.length >= 3 && wikiCategories[parts[1]]) {
      const art = wikiCategories[parts[1]].articles.find(
        (a) => a.id === parts[2],
      );
      if (art) {
        document.title = `PawGram - ${art.title} | Wiki`;
        return;
      }
    }
    if (parts.length >= 2 && wikiCategories[parts[1]]) {
      document.title = `PawGram - ${wikiCategories[parts[1]].name} | Wiki`;
      return;
    }
    document.title = "PawGram - Wiki";
    return;
  }

  const titleMap = {
    home: "Home",
    features: "Features",
    download: "Download",
    "about-devs": "About Devs",
  };
  document.title = `PawGram - ${titleMap[root] || "Home"}`;
}

function router() {
  const fullHash = window.location.hash.slice(1) || "home";
  const parts = fullHash.split("/").filter(Boolean);
  const root = parts[0] || "home";

  // Boot shell if empty
  if (!document.getElementById("nav-container").innerHTML) {
    document.getElementById("nav-container").innerHTML = renderNav(root);
    document.getElementById("footer-container").innerHTML = renderFooter();
    initGlobalEvents();
  } else {
    updateNavActiveState(fullHash);
  }

  // Determine active view content
  let content = "";
  if (root === "wiki") {
    if (parts.length === 1) {
      content = renderWikiHub();
    } else if (parts.length === 2) {
      const catId = parts[1];
      if (wikiCategories[catId]) {
        content = renderWikiCategory(catId);
      } else {
        content = renderWikiHub();
      }
    } else if (parts.length >= 3) {
      const catId = parts[1];
      const artId = parts[2];
      if (wikiCategories[catId]) {
        const article = wikiCategories[catId].articles.find(
          (a) => a.id === artId,
        );
        if (article) {
          content = renderWikiArticle(catId, artId);
        } else {
          content = renderWikiCategory(catId);
        }
      } else {
        content = renderWikiHub();
      }
    }
  } else if (pages[root]) {
    content = pages[root];
  } else {
    content = pages.home;
  }

  // Inject active page view
  document.getElementById("app-content").innerHTML = content;

  // Cleanup & Post-Render hooks
  if (window.closeMobileMenu) window.closeMobileMenu();
  window.scrollTo(0, 0);

  // Defer observation slightly to ensure DOM paints first
  setTimeout(() => {
    initPageInteractions();
    if (root === "download") loadDownloadNotice();
  }, 0);
}

// --- Application Boot ---
window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", router);
