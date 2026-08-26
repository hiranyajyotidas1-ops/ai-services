/* Clevora shared app logic */
(function () {
  const COUNTRIES = [
    { code: "IN", name: "India", currency: "INR", symbol: "₹", rate: 1 },
    { code: "US", name: "United States", currency: "USD", symbol: "$", rate: 0.012 },
    { code: "GB", name: "United Kingdom", currency: "GBP", symbol: "£", rate: 0.0094 },
    { code: "AE", name: "UAE", currency: "AED", symbol: "د.إ", rate: 0.044 },
    { code: "SG", name: "Singapore", currency: "SGD", symbol: "S$", rate: 0.016 },
    { code: "AU", name: "Australia", currency: "AUD", symbol: "A$", rate: 0.018 },
    { code: "CA", name: "Canada", currency: "CAD", symbol: "C$", rate: 0.016 },
    { code: "DE", name: "Germany", currency: "EUR", symbol: "€", rate: 0.011 },
    { code: "FR", name: "France", currency: "EUR", symbol: "€", rate: 0.011 },
    { code: "JP", name: "Japan", currency: "JPY", symbol: "¥", rate: 1.8 },
    { code: "BR", name: "Brazil", currency: "BRL", symbol: "R$", rate: 0.066 },
    { code: "ZA", name: "South Africa", currency: "ZAR", symbol: "R", rate: 0.22 },
  ];

  const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "es", label: "Español" },
    { code: "ar", label: "العربية" },
    { code: "fr", label: "Français" },
    { code: "pt", label: "Português" },
    { code: "bn", label: "বাংলা" },
    { code: "ta", label: "தமிழ்" },
    { code: "te", label: "తెలుగు" },
    { code: "mr", label: "मराठी" },
    { code: "de", label: "Deutsch" },
    { code: "ja", label: "日本語" },
  ];

  const SERVICES = [
    {
      slug: "content",
      title: "Content studio",
      blurb: "SEO articles, newsletters, product copy and captions in the language you need.",
      includes: ["1,000–2,000 words", "SEO outline", "One revision", "24-hour delivery"],
      priceInr: 29,
      delivery: "24 hours",
      category: "Writing",
    },
    {
      slug: "design",
      title: "Brand & design",
      blurb: "Logo directions, social graphics and a compact brand kit you can use immediately.",
      includes: ["3 logo directions", "Color + type notes", "Social crop set", "48-hour delivery"],
      priceInr: 29,
      delivery: "48 hours",
      category: "Design",
    },
    {
      slug: "website",
      title: "Website build",
      blurb: "Name the site. Describe it. Receive a complete multi-page HTML site ready to host.",
      includes: ["5 pages", "Responsive layout", "Hosting notes", "72-hour delivery"],
      priceInr: 299,
      delivery: "72 hours",
      category: "Web",
    },
    {
      slug: "research",
      title: "Research desk",
      blurb: "Competitor maps, market briefs and decision memos for any niche.",
      includes: ["Sources listed", "SWOT", "Action list", "48-hour delivery"],
      priceInr: 29,
      delivery: "48 hours",
      category: "Research",
    },
    {
      slug: "scripts",
      title: "Scripts & video",
      blurb: "YouTube, Reels and ad scripts with hooks, beats and on-screen text.",
      includes: ["Hook + structure", "Duration-matched", "CTA options", "24-hour delivery"],
      priceInr: 29,
      delivery: "24 hours",
      category: "Video",
    },
    {
      slug: "consult",
      title: "Strategy consult",
      blurb: "A practical AI and automation plan for a small business — not a slide deck of fluff.",
      includes: ["Stack advice", "90-day plan", "Tool list", "48-hour delivery"],
      priceInr: 101,
      delivery: "48 hours",
      category: "Strategy",
    },
    {
      slug: "seo",
      title: "SEO brief",
      blurb: "Keyword map, on-page fixes and a 10-article calendar for one market.",
      includes: ["Keyword clusters", "On-page checklist", "Content calendar", "48-hour delivery"],
      priceInr: 101,
      delivery: "48 hours",
      category: "Growth",
    },
    {
      slug: "email",
      title: "Email sequences",
      blurb: "Welcome, nurture and offer sequences written in your voice.",
      includes: ["5 emails", "Subject lines", "Plain-text versions", "48-hour delivery"],
      priceInr: 101,
      delivery: "48 hours",
      category: "Growth",
    },
    {
      slug: "social",
      title: "Social calendar",
      blurb: "Thirty days of posts for one channel, with captions and visual notes.",
      includes: ["30 posts", "Hashtag sets", "Best-time notes", "48-hour delivery"],
      priceInr: 101,
      delivery: "48 hours",
      category: "Growth",
    },
  ];

  const PLANS = [
    {
      id: "starter",
      name: "Starter",
      priceInr: 29,
      note: "One focused deliverable",
      items: ["1 article or 1 design", "24-hour delivery", "1 revision", "Email support"],
      featured: false,
    },
    {
      id: "professional",
      name: "Professional",
      priceInr: 101,
      note: "Most teams start here",
      items: ["3 articles", "2 designs", "1 landing page", "SEO pass", "48-hour delivery", "3 revisions"],
      featured: true,
    },
    {
      id: "business",
      name: "Business",
      priceInr: 299,
      note: "A full presence",
      items: ["10 articles", "5 designs", "5-page website", "1 script", "1 research report", "Unlimited revisions"],
      featured: false,
    },
  ];

  const PRODUCTS = [
    {
      slug: "prompt-pack",
      title: "Operator prompt pack",
      blurb: "120 prompts for content, ads, research and support — ready to paste.",
      priceInr: 49,
    },
    {
      slug: "n8n-kit",
      title: "n8n starter kit",
      blurb: "Five workflow JSON files: leads, content, invoices, social, reports.",
      priceInr: 149,
    },
    {
      slug: "seo-checklist",
      title: "SEO launch checklist",
      blurb: "A 40-point on-page and technical list for new sites.",
      priceInr: 49,
    },
    {
      slug: "brand-notes",
      title: "Brand notes template",
      blurb: "Voice, color, type and usage rules in a one-page kit.",
      priceInr: 79,
    },
  ];

  const TOOLS = [
    { slug: "word-counter", title: "Word counter", blurb: "Words, characters, reading time and keyword density." },
    { slug: "meta-tags", title: "Meta tag builder", blurb: "Title, description and Open Graph tags from a few fields." },
    { slug: "color-studio", title: "Color studio", blurb: "Pick a color, get contrast-safe pairs and CSS tokens." },
    { slug: "headline-lab", title: "Headline lab", blurb: "Score a headline for length, clarity and punch." },
  ];

  const POSTS = [
    {
      slug: "why-cheap-ai-work-still-needs-taste",
      title: "Why cheap AI work still needs taste",
      date: "2026-08-12",
      excerpt: "Price is not the product. The product is a brief, a voice, and a revision loop that does not waste the buyer.",
    },
    {
      slug: "build-a-site-from-a-name",
      title: "Build a site from a name",
      date: "2026-08-18",
      excerpt: "The fastest path from idea to hosted page is a tight brief, not a 40-page spec.",
    },
    {
      slug: "india-first-global-second",
      title: "India first, global second",
      date: "2026-08-22",
      excerpt: "UPI, rupee pricing and Hindi copy are not afterthoughts. They are how a worldwide shop starts.",
    },
  ];

  const I18N = {
    en: {
      tagline: "AI services for everyone",
      hero: "Work that ships. Prices that stay honest.",
      heroBody:
        "Content, design, websites, research and scripts — written, built and delivered without a retainer. Preview everything before you create an account.",
      start: "Create free account",
      seeServices: "Browse services",
      live: "Live · 24/7 delivery desk",
      services: "Services",
      pricing: "Pricing",
      builder: "Website builder",
      tools: "Tools",
      store: "Store",
      api: "API",
      blog: "Journal",
      about: "About",
      contact: "Contact",
      login: "Sign in",
      signup: "Sign up",
      dashboard: "Desk",
      settings: "Settings",
      how: "How it works",
      guarantee: "30-day money-back. One price. No subscription.",
    },
    hi: {
      tagline: "सबके लिए AI सेवाएँ",
      hero: "काम निकलता है। कीमत साफ़ रहती है।",
      heroBody:
        "कंटेंट, डिज़ाइन, वेबसाइट, रिसर्च और स्क्रिप्ट — रिटेनर के बिना डिलीवर। अकाउंट बनाने से पहले सब कुछ देखें।",
      start: "मुफ़्त अकाउंट बनाएँ",
      seeServices: "सेवाएँ देखें",
      live: "लाइव · 24/7 डिलीवरी",
      services: "सेवाएँ",
      pricing: "कीमत",
      builder: "वेबसाइट बिल्डर",
      tools: "टूल्स",
      store: "स्टोर",
      api: "API",
      blog: "जर्नल",
      about: "हमारे बारे में",
      contact: "संपर्क",
      login: "साइन इन",
      signup: "साइन अप",
      dashboard: "डेस्क",
      settings: "सेटिंग्स",
      how: "कैसे काम करता है",
      guarantee: "30 दिन मनी-बैक। एक कीमत। कोई सब्सक्रिप्शन नहीं।",
    },
  };

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem("clevora-prefs") || "{}");
    } catch {
      return {};
    }
  }

  function savePrefs(p) {
    localStorage.setItem("clevora-prefs", JSON.stringify(p));
  }

  function getPrefs() {
    const p = loadPrefs();
    return {
      country: p.country || "IN",
      language: p.language || "en",
      theme: p.theme || "light",
    };
  }

  function setPref(key, value) {
    const p = getPrefs();
    p[key] = value;
    savePrefs(p);
    applyTheme(p.theme);
    return p;
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }

  function formatPrice(inr, countryCode) {
    const c = COUNTRIES.find((x) => x.code === countryCode) || COUNTRIES[0];
    const value = inr * c.rate;
    if (c.currency === "INR") return c.symbol + inr;
    if (c.currency === "JPY") return c.symbol + Math.round(value);
    return c.symbol + (Math.round(value * 100) / 100).toFixed(2);
  }

  function t(key) {
    const lang = getPrefs().language;
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function uid() {
    return "ord_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem("clevora-user") || "null");
    } catch {
      return null;
    }
  }

  function setUser(user) {
    if (user) localStorage.setItem("clevora-user", JSON.stringify(user));
    else localStorage.removeItem("clevora-user");
  }

  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem("clevora-orders") || "[]");
    } catch {
      return [];
    }
  }

  function saveOrders(list) {
    localStorage.setItem("clevora-orders", JSON.stringify(list));
  }

  function placeOrder({ slug, kind, title, amountInr, brief, language }) {
    const user = getUser();
    if (!user) {
      location.href = "login.html?next=" + encodeURIComponent(location.pathname.split("/").pop() || "index.html");
      return null;
    }
    const order = {
      id: uid(),
      userEmail: user.email,
      slug,
      kind,
      title,
      amountInr,
      brief: brief || "",
      language: language || "en",
      status: "paid",
      deliverable: null,
      createdAt: new Date().toISOString(),
    };
    const list = getOrders();
    list.unshift(order);
    saveOrders(list);
    return order;
  }

  function generateDeliverable(order) {
    const brief = order.brief || order.title;
    const lang = order.language || "en";
    if (order.kind === "builder" || order.slug === "website") {
      return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(order.title)}</title>
<style>
  body{margin:0;font-family:system-ui,sans-serif;background:#f7f4ee;color:#161513;line-height:1.55}
  header,footer{padding:1.25rem 1.5rem;border-bottom:1px solid #ddd6c8}
  footer{border-top:1px solid #ddd6c8;border-bottom:0;margin-top:3rem;font-size:.875rem;color:#6a645c}
  main{max-width:720px;margin:0 auto;padding:2rem 1.5rem}
  h1{font-size:2.25rem;letter-spacing:-.03em}
  h2{margin-top:2rem;font-size:1.35rem}
  .cta{display:inline-block;margin-top:1.5rem;padding:.75rem 1.25rem;background:#2c456f;color:#faf7f0;border-radius:8px;text-decoration:none}
</style>
</head>
<body>
<header><strong>${escapeHtml(order.title)}</strong></header>
<main>
  <h1>${escapeHtml(order.title)}</h1>
  <p>${escapeHtml(brief)}</p>
  <h2>About</h2>
  <p>We built this starter site from your brief. Replace this copy, connect a form, and host on Cloudflare Pages or GitHub Pages.</p>
  <h2>Services</h2>
  <p>List your offers here. Keep one primary action above the fold.</p>
  <h2>Contact</h2>
  <p>Add email or a booking link.</p>
  <a class="cta" href="#contact">Get in touch</a>
</main>
<footer>Generated by Clevora · ${new Date().toISOString().slice(0, 10)}</footer>
</body>
</html>`;
    }
    if (order.slug === "design") {
      return `Brand kit — ${order.title}\nLanguage: ${lang}\n\nBrief: ${brief}\n\nName options:\n1. ${order.title}\n2. ${order.title} Studio\n3. North of ${order.title}\n\nColors:\n- Ink #161513\n- Paper #F3EFE6\n- Accent #2C456F\n\nType:\n- Display: Fraunces\n- Body: Figtree\n\nVoice: calm, specific, no hype.\n\n6 social captions:\n1. A quiet start for ${order.title}.\n2. Built for people who read the details.\n3. One price. Clear work.\n4. From brief to file — same day when it fits.\n5. India first. Global ready.\n6. Taste over volume.`;
    }
    return `Deliverable — ${order.title}\nStatus: generated (demo)\nLanguage: ${lang}\n\nBrief:\n${brief}\n\nOutline:\n1. Goal\n2. Audience\n3. Message\n4. Structure\n5. CTA\n\nBody:\nThis is a working sample deliverable stored on your desk. Connect Supabase Edge Functions + an LLM API for live generation. Until then, use this structure and edit the brief.\n\nNext steps:\n- Tighten the brief\n- Choose channel\n- Request one revision`;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function currentPage() {
    const p = location.pathname.split("/").pop() || "index.html";
    return p === "" ? "index.html" : p;
  }

  function renderHeader() {
    const prefs = getPrefs();
    const user = getUser();
    const page = currentPage();
    applyTheme(prefs.theme);

    const nav = [
      { href: "services.html", key: "services" },
      { href: "builder.html", key: "builder" },
      { href: "pricing.html", key: "pricing" },
      { href: "tools.html", key: "tools" },
      { href: "store.html", key: "store" },
      { href: "blog.html", key: "blog" },
    ];

    const countryOpts = COUNTRIES.map(
      (c) => `<option value="${c.code}" ${c.code === prefs.country ? "selected" : ""}>${c.code} ${c.currency}</option>`
    ).join("");
    const langOpts = LANGUAGES.map(
      (l) => `<option value="${l.code}" ${l.code === prefs.language ? "selected" : ""}>${l.label}</option>`
    ).join("");

    const authHtml = user
      ? `<a class="btn btn-ghost" href="dashboard.html">${t("dashboard")}</a>
         <button type="button" class="btn btn-secondary" id="signOutBtn">Sign out</button>`
      : `<a class="btn btn-primary" href="signup.html">${t("signup")}</a>`;

    return `
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="index.html"><span class="brand-mark">C</span> Clevora</a>
    <nav class="nav-desktop">
      ${nav
        .map(
          (n) =>
            `<a href="${n.href}" class="${page === n.href ? "active" : ""}">${t(n.key)}</a>`
        )
        .join("")}
    </nav>
    <div class="header-actions">
      <select class="select-sm country" id="countrySelect" aria-label="Country" style="display:none">${countryOpts}</select>
      <select class="select-sm lang" id="langSelect" aria-label="Language" style="display:none">${langOpts}</select>
      <button type="button" class="icon-btn" id="themeBtn" aria-label="Toggle theme">${prefs.theme === "dark" ? "☀" : "☾"}</button>
      ${authHtml}
      <button type="button" class="icon-btn menu-toggle" id="menuBtn" aria-label="Menu">☰</button>
    </div>
  </div>
  <div class="mobile-nav" id="mobileNav">
    ${nav.map((n) => `<a href="${n.href}">${t(n.key)}</a>`).join("")}
    <a href="about.html">${t("about")}</a>
    <a href="contact.html">${t("contact")}</a>
  </div>
</header>`;
  }

  function renderFooter() {
    return `
<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <div class="footer-brand">Clevora</div>
      <p class="footer-tag">${t("tagline")}</p>
    </div>
    <div class="footer-col">
      <h4>Product</h4>
      <a href="services.html">Services</a>
      <a href="builder.html">Website builder</a>
      <a href="tools.html">Tools</a>
      <a href="store.html">Store</a>
      <a href="api.html">API</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="about.html">About</a>
      <a href="blog.html">Journal</a>
      <a href="contact.html">Contact</a>
      <a href="privacy.html">Privacy</a>
    </div>
    <div class="footer-col">
      <h4>Account</h4>
      <a href="signup.html">Sign up</a>
      <a href="login.html">Sign in</a>
      <a href="dashboard.html">Desk</a>
      <a href="settings.html">Settings</a>
    </div>
  </div>
  <div class="footer-bottom">© 2026 Clevora. One-time prices. No retainers.</div>
</footer>`;
  }

  function wireChrome() {
    const prefs = getPrefs();
    const countryEl = qs("#countrySelect");
    const langEl = qs("#langSelect");
    if (countryEl) {
      countryEl.style.display = window.matchMedia("(min-width: 640px)").matches ? "block" : "none";
      countryEl.addEventListener("change", () => {
        setPref("country", countryEl.value);
        location.reload();
      });
    }
    if (langEl) {
      langEl.style.display = window.matchMedia("(min-width: 900px)").matches ? "block" : "none";
      langEl.addEventListener("change", () => {
        setPref("language", langEl.value);
        location.reload();
      });
    }
    qs("#themeBtn")?.addEventListener("click", () => {
      const next = getPrefs().theme === "dark" ? "light" : "dark";
      setPref("theme", next);
      location.reload();
    });
    qs("#menuBtn")?.addEventListener("click", () => {
      qs("#mobileNav")?.classList.toggle("open");
    });
    qs("#signOutBtn")?.addEventListener("click", () => {
      setUser(null);
      location.href = "index.html";
    });
  }

  function mountShell(mainHtml) {
    const root = qs("#app");
    if (!root) return;
    root.innerHTML = renderHeader() + mainHtml + renderFooter();
    wireChrome();
  }

  // Expose API
  window.Clevora = {
    COUNTRIES,
    LANGUAGES,
    SERVICES,
    PLANS,
    PRODUCTS,
    TOOLS,
    POSTS,
    getPrefs,
    setPref,
    formatPrice,
    t,
    getUser,
    setUser,
    getOrders,
    saveOrders,
    placeOrder,
    generateDeliverable,
    mountShell,
    qs,
    qsa,
    escapeHtml,
  };

  // Auto theme early
  applyTheme(getPrefs().theme);
})();
