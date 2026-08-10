/* ==========================================================================
   Kouk Creatives — homepage behaviour
   Sections: data, rendering, then interactions.
   ========================================================================== */
(function () {
  'use strict';

  var CDN = 'https://cdn.prod.website-files.com/65c15d25c2ef3b5343d2ec9b/';

  /* ----------------------------------------------------------------------
     DATA
     ---------------------------------------------------------------------- */

  var CLIENT_LOGOS = [
    { alt: 'Suncorp',              src: CDN + '66c731ea95d2a1310d499d4a_client-logos_0015s_0001_suncorp-black.png' },
    { alt: 'Vero',                 src: CDN + '66c73162811592e7fff10ff5_client-logos_0010s_0001_vero-black.png' },
    { alt: 'AMP',                  src: CDN + '66c7310686d6822f3c08b7d4_client-logos_0008s_0001_amp--black.png' },
    { alt: 'Rotary',               src: CDN + '66c731b09fefee49ef43518f_client-logos_0013s_0001_rotary-black.png' },
    { alt: 'Ensemble',             src: CDN + '66c7368ac5a65747c5be6ad5_ensemble-black.png' },
    { alt: 'TCS',                  src: CDN + '66c73185d3d4f83b877dda1a_client-logos_0011s_0001_tcs-black.png' },
    { alt: 'Blast Worx',           src: CDN + '670670b9d6ca687e741bfc9d_blastworx-black.png' },
    { alt: 'Nice Fuels',           src: CDN + '66c730b75195922d0f8d3690_client-logos_0004s_0001_nicefuel--black.png' },
    { alt: 'Chemicorp',            src: CDN + '66c7314caa841b1d0e5996da_client-logos_0009s_0001_chemicorp--black.png' },
    { alt: 'Parnell Cricket Club', src: CDN + '66c735ac2412b6088a38288f_pcc-black.png' },
    { alt: 'Eyes4Everest',         src: CDN + '66c731970de12bcb5b7b7122_client-logos_0012s_0001_eyes4everest-black.png' },
    { alt: 'Bee Society',          src: CDN + '66c73076c5a66b289a796d94_client-logos_0001s_0001_beesociety-black.png' },
    { alt: 'Serpenti Investigations', src: 'https://cdn.prod.website-files.com/68102b47f03abf5dd072dafe/68177f0cd51c9aa75a2572c5_Serpenti%20LOGO%20WHITE%20TRANS-p-500.png', inv: true },
    { alt: 'NZ Institute of Private Investigators', src: 'https://cdn.prod.website-files.com/68a27cb44ec6ceb822938742/68a9c8bad05fb7bf868aea7c_New-Zealand-Institute-of-Private-Investigators-Logo-whitepartial.png', inv: true },
    { alt: 'Kouki Photography',    src: 'https://cdn.prod.website-files.com/68e7b96779856210aac0f8f5/691c62ecb37a8e647de60fb2_logo-kouki-dark-p-500.png' },
    { alt: 'Whys Logistics',       src: 'https://cdn.prod.website-files.com/6994daec178f296465098938/69952b6b200d7499cd0e1e49_Whys-Logistics-Logo-1500px.webp' },
    { alt: 'Kiwiana Tours',        src: 'https://kiwianatours.com/wp-content/uploads/2025/01/kiwiana-logo-white-transparent-background.png', inv: true }
  ];

  var PROJECTS = [
    { name: 'Ensemble Magazine',      platform: 'Webflow',       sector: 'Publishing',            blurb: 'Daily editorial platform their team ships stories on without a developer.', logo: CDN + '66c7368ac5a65747c5be6ad5_ensemble-black.png' },
    { name: 'Blast Worx',             platform: 'Shopify',       sector: 'Industrial supply',     blurb: 'Customised catalogue and checkout for abrasive blasting equipment.',       logo: CDN + '670670b9d6ca687e741bfc9d_blastworx-black.png' },
    { name: 'Nice Fuels NZ',          platform: 'Shopify',       sector: 'Motorsport',            blurb: 'Streamlined ordering for premium race fuel, built for repeat buyers.',     logo: CDN + '66c730b75195922d0f8d3690_client-logos_0004s_0001_nicefuel--black.png' },
    { name: 'Serpenti Investigations',platform: 'Webflow',       sector: 'Private investigation', blurb: 'Discreet, cinematic build with a separate path for every kind of client.', logo: 'https://cdn.prod.website-files.com/68102b47f03abf5dd072dafe/68102b47f03abf5dd072dd8d_logo%20(4).svg' },
    { name: 'Kouki Photography NZ',   platform: 'Webflow',       sector: 'Wedding photography',   blurb: 'Award-winning wedding work, given a site that gets out of its way.',       logo: '' },
    { name: 'Eyes4Everest',           platform: 'Webflow',       sector: 'Not-for-profit',        blurb: 'Storytelling and donations in one seamless flow, top to bottom.',          logo: CDN + '66c731970de12bcb5b7b7122_client-logos_0012s_0001_eyes4everest-black.png' },
    { name: 'Rotary',                 platform: 'WordPress',     sector: 'Community',             blurb: 'Multi-branch site with events, membership and local content control.',     logo: CDN + '66c731b09fefee49ef43518f_client-logos_0013s_0001_rotary-black.png' },
    { name: 'Chemicorp',              platform: 'WordPress',     sector: 'Manufacturing',         blurb: 'Product catalogue with the business automation running underneath it.',    logo: CDN + '66c7314caa841b1d0e5996da_client-logos_0009s_0001_chemicorp--black.png' },
    { name: 'Bee Society',            platform: 'Shopify',       sector: 'Retail',                blurb: 'Product storytelling that lifts basket size without a discount in sight.',  logo: CDN + '66c73076c5a66b289a796d94_client-logos_0001s_0001_beesociety-black.png' },
    { name: 'Suncorp',                platform: 'Logo & design', sector: 'Insurance',             blurb: 'Campaign assets and digital collateral, produced to strict brand spec.',    logo: CDN + '66c731ea95d2a1310d499d4a_client-logos_0015s_0001_suncorp-black.png' },
    { name: 'Vero',                   platform: 'Logo & design', sector: 'Insurance',             blurb: 'Digital asset library and templates for a national broker network.',       logo: CDN + '66c73162811592e7fff10ff5_client-logos_0010s_0001_vero-black.png' },
    { name: 'Good Honest',            platform: 'Logo & design', sector: 'Food & beverage',       blurb: 'Logo, palette, packaging direction and a style guide that holds up.',      logo: CDN + '66c7305519cbc1078bfc0b24_client-logos_0000s_0001_goodhonest-black.png' },
    { name: 'WPS',                    platform: 'WordPress',     sector: 'Professional services', blurb: 'Lead-focused rebuild with a clearer path from landing to contact.',        logo: CDN + '66c730e53fb8b29557b51a06_client-logos_0006s_0001_wps-black.png' }
  ];

  var TABS = ['All', 'WordPress', 'Shopify', 'Webflow', 'Logo & design'];

  var TINTS = {
    'WordPress':     '#F4F1EA',
    'Shopify':       '#EEF3EC',
    'Webflow':       '#ECF0F6',
    'Logo & design': '#F6EFEA'
  };

  var SERVICES = [
    { num: '01', title: 'Website Design',        body: 'New sites built to convert. Fast, search-friendly, sharp on every screen, and easy for your team to update afterwards.', tags: ['Wireframes', 'UI design', 'Copy support', 'Custom code'] },
    { num: '02', title: 'Website Redesign',      body: 'Sometimes the bones are fine. We rebuild what is holding you back and keep what already works.',                          tags: ['Audit', 'Restructure', 'Migration'] },
    { num: '03', title: 'WordPress Development', body: 'Flexible, self-managed builds your team can run without a developer on speed dial.',                                      tags: ['Custom themes', 'Plugins', 'CMS training'] },
    { num: '04', title: 'Shopify Development',   body: 'Selling online without the admin headache. Catalogues, payments and the automation running underneath.',                  tags: ['Catalogues', 'Payments', 'Integrations'] },
    { num: '05', title: 'Website Maintenance',   body: 'You brush your teeth every day. Same idea. We handle the upkeep so it never becomes a chore.',                            tags: ['Updates', 'Backups', 'Debugging'] },
    { num: '06', title: 'SEO',                   body: 'Clean structure, fast loading, proper metadata. The unglamorous work that decides whether anyone turns up.',              tags: ['Technical SEO', 'Content', 'Local search'] },
    { num: '07', title: 'Domain / Hosting',      body: 'Fast, secure and hands-off. We sort the plumbing so you never think about it again.',                                     tags: ['Migration', 'SSL', 'Monitoring'] },
    { num: '08', title: 'Logo / Digital Assets', body: 'More than a look and feel. The statement your business makes before anyone reads a word.',                                tags: ['Logo', 'Style guide', 'Brochures', 'Mock ups'] }
  ];

  var STEPS = [
    { n: '1', title: 'Discovery',       body: 'Every business has its own fingerprint. We sit down, work out what you are actually after, and propose something that fits.', meta: 'Week 1 · scope and price in writing' },
    { n: '2', title: 'Design',          body: 'Wireframes first, then a proper design. You see and sign off every screen before a line of code is written.',                 meta: 'Weeks 2 to 3 · you approve before we build' },
    { n: '3', title: 'Build & launch',  body: 'Engineered for speed and search, content loaded, tested on real devices. Then it goes live.',                                 meta: 'Weeks 4 to 8 · weekly progress you can see' },
    { n: '4', title: 'Support & grow',  body: 'We stay on. Support tickets, feature requests, improvements. And no, there are no dumb questions here.',                      meta: 'Ongoing · we are still here after launch' }
  ];

  var REVIEWS = [
    { quote: 'When communicating with Simon, you can feel the energy and passion the team brings to the project. His vision is forward thinking.', name: 'Shaun Chang', role: 'Founder, Eyes4Everest', initials: 'SC', photo: 'https://cdn.prod.website-files.com/65c15d25c2ef3b5343d2ec07/661608e64e740554d20da18f_shaun%2Bmen%2Bof%2Binfluence%2Bnight.jpg' },
    { quote: 'Add a client review here. Two or three sentences works best. What the problem was, and what changed after launch.', name: 'Client name', role: 'Role, Company', initials: 'CN', photo: '' },
    { quote: 'Another review placeholder. Reviews that mention a number such as enquiries, sales or time saved convert far better than praise alone.', name: 'Client name', role: 'Role, Company', initials: 'CN', photo: '' },
    { quote: 'Placeholder for a review about the process rather than the result. Being kept in the loop, no surprises on the invoice.', name: 'Client name', role: 'Role, Company', initials: 'CN', photo: '' },
    { quote: 'Placeholder for a review from an e-commerce client. Ideally one who can speak to the ordering experience improving.', name: 'Client name', role: 'Role, Company', initials: 'CN', photo: '' },
    { quote: 'Placeholder for a review about support after launch. This is the objection most prospects never say out loud.', name: 'Client name', role: 'Role, Company', initials: 'CN', photo: '' }
  ];

  var FAQS = [
    { q: 'How long does a website take?', a: 'Most builds run six to ten weeks from kick-off, depending on page count and how quickly content comes through. If you have a hard deadline, tell us early and we will say honestly whether it is doable.' },
    { q: 'What does it cost?', a: 'Every project is scoped and quoted individually. A five-page brochure site and an e-commerce build with stock integration are very different animals. You get a fixed number in writing before we start, and it does not move unless you ask for something new.' },
    { q: 'Can I update the site myself afterwards?', a: 'Yes. Text, images, news, products are all editable by you without touching code. We walk your team through it, and if you would rather we just did it, that is what our management service is for.' },
    { q: 'We already have a site. Can you fix it instead of rebuilding?', a: 'Often, yes. Sometimes the bones are fine and it is a speed, structure or content problem. We will tell you straight which is cheaper for you, even when that is the smaller job.' },
    { q: 'Do you do SEO?', a: 'Every site we build is engineered to be found: clean structure, fast loading, proper metadata, mobile-first. That is the foundation. Ongoing content and campaign work we can advise on or run for you.' },
    { q: 'What happens after launch?', a: 'We stay on. Support tickets, feature requests, content loading, debugging, all handled through our support channels. There is always room to grow a site, and we would rather be the ones helping you do it.' }
  ];

  var NEEDS = ['New website', 'Redesign', 'E-commerce', 'Branding', 'Ongoing support', 'Not sure yet'];

  var RAIL = [
    { id: 'top',        label: 'Intro' },
    { id: 'problem',    label: 'The problem' },
    { id: 'work',       label: 'Case studies' },
    { id: 'showcase',   label: 'Showcase' },
    { id: 'capability', label: 'Capability' },
    { id: 'process',    label: 'Process' },
    { id: 'reviews',    label: 'Reviews' },
    { id: 'faq',        label: 'FAQ' },
    { id: 'quote',      label: 'Get a quote' }
  ];

  /* ----------------------------------------------------------------------
     HELPERS
     ---------------------------------------------------------------------- */

  function el(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ----------------------------------------------------------------------
     RENDER
     ---------------------------------------------------------------------- */

  function renderMarquee() {
    var host = el('marquee');
    if (!host) return;
    var run = CLIENT_LOGOS.map(function (l) {
      return '<img' + (l.inv ? ' class="inv"' : '') + ' src="' + l.src + '" alt="' + esc(l.alt) + '">';
    }).join('');
    host.innerHTML = '<div class="marquee-run">' + run + '</div><div class="marquee-run" aria-hidden="true">' + run + '</div>';
  }

  function renderTabs(active) {
    var host = el('tabs');
    if (!host) return;
    host.innerHTML = TABS.map(function (t) {
      var count = t === 'All' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.platform === t; }).length;
      return '<button type="button" class="tab' + (t === active ? ' is-active' : '') + '" data-tab="' + esc(t) + '">' +
             '<span>' + esc(t) + '</span><span class="count">' + count + '</span></button>';
    }).join('');
  }

  function renderProjects(active) {
    var host = el('showcaseGrid');
    if (!host) return;
    var list = PROJECTS.filter(function (p) { return active === 'All' || p.platform === active; });
    host.innerHTML = list.map(function (p) {
      var mark = p.logo
        ? '<img src="' + p.logo + '" alt="' + esc(p.name) + '">'
        : '<div class="wordmark">' + esc(p.name) + '</div>';
      return '<article class="project">' +
        '<div class="project-plate" style="background:' + (TINTS[p.platform] || '#F4F1EA') + '">' +
          mark +
          '<span class="project-badge">' + esc(p.platform) + '</span>' +
        '</div>' +
        '<div class="project-body">' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p>' + esc(p.blurb) + '</p>' +
          '<div class="project-foot">' + esc(p.sector) + '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderCapability() {
    var host = el('capGrid');
    if (!host) return;
    host.innerHTML = SERVICES.map(function (s) {
      return '<div class="cap">' +
        '<div class="num">' + s.num + '</div>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p>' + esc(s.body) + '</p>' +
        '<div class="tags">' + s.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
      '</div>';
    }).join('');
  }

  function renderSteps() {
    var host = el('steps');
    if (!host) return;
    host.innerHTML = STEPS.map(function (s) {
      return '<div class="step reveal">' +
        '<div class="n">' + s.n + '</div>' +
        '<div><h3>' + esc(s.title) + '</h3><p>' + esc(s.body) + '</p><div class="meta">' + esc(s.meta) + '</div></div>' +
      '</div>';
    }).join('');
  }

  function renderReviews() {
    var host = el('reviewGrid');
    if (!host) return;
    host.innerHTML = REVIEWS.map(function (r) {
      var avatar = r.photo
        ? '<img src="' + r.photo + '" alt="' + esc(r.name) + '">'
        : '<div class="avatar-placeholder">' + esc(r.initials) + '</div>';
      return '<article class="review reveal">' +
        '<div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
        '<p>' + esc(r.quote) + '</p>' +
        '<div class="byline">' + avatar + '<div><strong>' + esc(r.name) + '</strong><br>' + esc(r.role) + '</div></div>' +
      '</article>';
    }).join('');
  }

  function renderFaqs() {
    var host = el('faqList');
    if (!host) return;
    host.innerHTML = FAQS.map(function (f, i) {
      return '<div class="faq-item' + (i === 0 ? ' is-open' : '') + '">' +
        '<button type="button" class="faq-q">' + esc(f.q) + '<span class="faq-mark">' + (i === 0 ? '&minus;' : '+') + '</span></button>' +
        '<p class="faq-a">' + esc(f.a) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderChips() {
    var host = el('needChips');
    if (!host) return;
    host.innerHTML = NEEDS.map(function (n, i) {
      return '<button type="button" class="chip' + (i === 0 ? ' is-active' : '') + '">' + esc(n) + '</button>';
    }).join('');
  }

  function renderRail() {
    var host = el('rail');
    if (!host) return;
    host.innerHTML = RAIL.map(function (r) {
      return '<a href="#' + r.id + '" data-rail="' + r.id + '"><span class="dot"></span><span class="label">' + esc(r.label) + '</span></a>';
    }).join('');
  }

  /* ----------------------------------------------------------------------
     INTERACTIONS
     ---------------------------------------------------------------------- */

  function initServicesMenu() {
    var menu = el('servicesMenu');
    if (!menu) return;
    menu.addEventListener('mouseenter', function () { menu.classList.add('is-open'); });
    menu.addEventListener('mouseleave', function () { menu.classList.remove('is-open'); });
    menu.querySelector('.menu-trigger').addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('is-open');
    });
  }

  function initTabs() {
    var host = el('tabs');
    if (!host) return;
    host.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab');
      if (!btn) return;
      var tab = btn.getAttribute('data-tab');
      renderTabs(tab);
      renderProjects(tab);
    });
  }

  function initFaq() {
    var host = el('faqList');
    if (!host) return;
    host.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-q');
      if (!btn) return;
      var item = btn.parentElement;
      var open = item.classList.contains('is-open');
      host.querySelectorAll('.faq-item').forEach(function (n) {
        n.classList.remove('is-open');
        n.querySelector('.faq-mark').innerHTML = '+';
      });
      if (!open) {
        item.classList.add('is-open');
        item.querySelector('.faq-mark').innerHTML = '&minus;';
      }
    });
  }

  function initForm() {
    var chips = el('needChips');
    if (chips) {
      chips.addEventListener('click', function (e) {
        var chip = e.target.closest('.chip');
        if (!chip) return;
        chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
      });
    }
    var form = el('quoteForm'), card = el('formCard'), reset = el('resetForm');
    if (form && card) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        card.classList.add('is-sent');
      });
    }
    if (reset && card) {
      reset.addEventListener('click', function (e) {
        e.preventDefault();
        card.classList.remove('is-sent');
      });
    }
  }

  function initScroll() {
    var header = el('siteHeader'), bar = el('progressBar'), rail = el('rail');
    var railLinks = rail ? rail.querySelectorAll('[data-rail]') : [];
    var current = null;

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;

      if (header) header.classList.toggle('is-scrolled', y > 40);

      if (bar) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      }

      if (rail) {
        rail.classList.toggle('is-visible', y > 500);
        var probe = window.innerHeight * 0.34, active = RAIL[0].id;
        RAIL.forEach(function (r) {
          var node = document.getElementById(r.id);
          if (node && node.getBoundingClientRect().top <= probe) active = r.id;
        });
        if (active !== current) {
          current = active;
          railLinks.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('data-rail') === active);
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    nodes.forEach(function (n) { io.observe(n); });
    setTimeout(function () { nodes.forEach(function (n) { n.classList.add('is-visible'); }); }, 6000);
  }

  function initCounters() {
    var nodes = document.querySelectorAll('[data-count]');
    function run(node) {
      var end = parseFloat(node.getAttribute('data-count'));
      var suffix = node.getAttribute('data-suffix') || '';
      var dur = 1500, t0 = performance.now();
      function step(now) {
        var p = Math.min((now - t0) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(end * e) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function initTilt() {
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      var img = card.querySelector('img');
      card.addEventListener('mouseenter', function () {
        if (img) img.style.transform = 'scale(1.06)';
        card.style.boxShadow = '0 40px 100px rgba(23,20,15,0.16)';
      });
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -3.2;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 3.2;
        card.style.transform = 'perspective(1400px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1400px) rotateX(0) rotateY(0) translateY(0)';
        card.style.boxShadow = 'none';
        if (img) img.style.transform = 'scale(1)';
      });
    });
  }

  function initSpotlight() {
    var node = el('spotlight');
    if (!node || window.matchMedia('(hover: none)').matches) return;
    window.addEventListener('mousemove', function (e) {
      node.style.opacity = '1';
      node.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    }, { passive: true });
  }

  function initCanvas() {
    var cv = el('heroCanvas');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var pts = [], mouse = { x: -9999, y: -9999 };

    function resize() {
      var r = cv.getBoundingClientRect();
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.min(110, Math.round(w * h / 15000));
      pts = [];
      for (var i = 0; i < target; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.6 + 0.5
        });
      }
    }

    resize();
    window.addEventListener('resize', resize);

    cv.addEventListener('mousemove', function (e) {
      var r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    cv.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });

    (function tick() {
      ctx.clearRect(0, 0, w, h);
      var i, j, p, a, b, dx, dy, d2, o;

      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (i = 0; i < pts.length; i++) {
        for (j = i + 1; j < pts.length; j++) {
          a = pts[i]; b = pts[j];
          dx = a.x - b.x; dy = a.y - b.y;
          d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            o = (1 - d2 / 22000) * 0.30;
            ctx.strokeStyle = 'rgba(196,86,48,' + o.toFixed(3) + ')';
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        dx = p.x - mouse.x; dy = p.y - mouse.y;
        var near = dx * dx + dy * dy < 34000;
        ctx.fillStyle = near ? 'rgba(228,85,43,0.95)' : 'rgba(196,86,48,0.55)';
        ctx.beginPath(); ctx.arc(p.x, p.y, near ? p.r * 1.9 : p.r, 0, 6.2832); ctx.fill();
      }
      requestAnimationFrame(tick);
    })();
  }

  /* ----------------------------------------------------------------------
     BOOT
     ---------------------------------------------------------------------- */

  function boot() {
    renderMarquee();
    renderTabs('All');
    renderProjects('All');
    renderCapability();
    renderSteps();
    renderReviews();
    renderFaqs();
    renderChips();
    renderRail();

    initServicesMenu();
    initTabs();
    initFaq();
    initForm();
    initScroll();
    initReveal();
    initCounters();
    initTilt();
    initSpotlight();
    initCanvas();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* Mobile navigation (hamburger) toggle */
(function () {
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      // Lock body scroll while the full-height menu is open.
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Tapping a real link closes the menu; the Services trigger just expands.
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (a.classList.contains('menu-trigger')) return;
        close();
      });
    });

    // Reset when resizing back up to desktop.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 960 && nav.classList.contains('is-open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();
