/* ============================================================
   AD ENGINEERING — Language toggle + WhatsApp links
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '60146226011'; // 014-6226011
  var WA_MESSAGE = {
    ms: 'Hai AD Engineering! Saya nak bertanya tentang servis aircond / elektrik.',
    en: 'Hi AD Engineering! I would like to ask about your aircond / electrical services.'
  };

  /* ---------- Translations ---------- */
  var I18N = {
    ms: {
      nav_services: 'Servis',
      nav_why: 'Kenapa Kami',
      nav_gallery: 'Galeri',
      nav_contact: 'Hubungi',
      cta_whatsapp: 'WhatsApp Kami',
      hero_badge: '✦ Aircond & Elektrik — KL & Selangor',
      hero_title: 'Rumah & Pejabat Sejuk, <span class="accent">Wiring Selamat.</span>',
      hero_sub: 'AD Engineering Electrical & Electronic — servis, cuci & repair aircond, plus wiring dan semua kerja elektrik. Teknisi berpengalaman, harga berpatutan.',
      hero_cta1: 'Tempah Sekarang',
      hero_cta2: 'Lihat Servis',
      trust1: 'Tahun Pengalaman',
      trust2: 'Kerja Siap',
      trust3: 'Aircond + Elektrik',
      img_hero: 'AD Engineering',
      svc_kicker: 'PERKHIDMATAN KAMI',
      svc_title: 'Satu Pasukan Untuk Sejuk & Selamat.',
      svc_sub: 'Aircond dan elektrik under satu bumbung — senang, jimat & konsisten.',
      svc1_title: 'Servis & Cuci Aircond',
      svc1_desc: 'Servis biasa & chemical wash — aircond sejuk semula, jimat letrik, sihat untuk keluarga.',
      svc2_title: 'Repair & Troubleshooting',
      svc2_desc: 'Aircond tak sejuk, berair, berbunyi? Kami diagnose & baiki dengan tepat — tak tampal-tampal.',
      svc3_title: 'Isi Gas & Tukar Part',
      svc3_desc: 'Isi gas R410/R32, tukar capacitor, PCB, blower & parts original berikut model.',
      svc4_title: 'Pemasangan & Alih Aircond',
      svc4_desc: 'Pasang baru, pindah unit lama & pasang semula — kemas, kering & terjamin.',
      svc5_title: 'Wiring & Kerja Elektrik',
      svc5_desc: 'Wiring rumah & premis baru, tambah point, tukar DB, pasang lampu & fan — ikut standard selamat.',
      svc6_title: 'Kontrak Premis & Pejabat',
      svc6_desc: 'Servis berkala (PSS) untuk office, kedai & bangunan — satu team, jadual tetap, harga kontrak.',
      why_kicker: 'KENAPA AD ENGINEERING?',
      why_title: 'Kerja Kemas, Harga Jujur, Datang Punctual.',
      f1_title: 'Teknisi Berpengalaman',
      f1_desc: 'Licensed & trained — faham aircond dan sistem elektrik, bukan cuba-cuba.',
      f2_title: 'Harga Telus',
      f2_desc: 'Quote dulu sebelum kerja. Tiada caj tersembunyi, tiada kejutan bil.',
      f3_title: 'Datang On-Time',
      f3_desc: 'Janji waktu tetap waktu. Kesesakan KL? Kami plan perjalanan dengan betul.',
      f4_title: 'Kerja Dijamin',
      f4_desc: 'Kalau masalah sama berulang selepas servis, kami datang semula — free.',
      proc_kicker: 'CARA KERJA',
      proc_title: 'Mudah. 3 Langkah Je.',
      s1_title: 'WhatsApp Kami',
      s1_desc: 'Cerita masalah & hantar lokasi. Kami bagi quote awal.',
      s2_title: 'Pilih Masa',
      s2_desc: 'Slot ikut keselesaan anda — termasuk hujung minggu.',
      s3_title: 'Kami Selesaikan',
      s3_desc: 'Kerja kemas, uji sebelum balik, rumah sejuk & selamat.',
      gal_kicker: 'GALERI KERJA KAMI',
      gal_title: 'Hasil Kerja yang Bercakap.',
      band_title: 'Aircond tak sejuk atau wiring bermasalah? ⚡',
      band_sub: 'WhatsApp sekarang — quote percuma, kerja kemas, harga jujur.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'AD Engineering Electrical & Electronic — servis aircond, wiring & kerja elektrik di KL & Selangor.',
      foot_hubungi: 'Hubungi',
      foot_hours: '⏰ Setiap hari, 9pagi – 7malam',
      foot_area: 'Area Servis',
      foot_area_list: 'Kuala Lumpur • Selangor — Shah Alam • Subang • Petaling Jaya • Klang • Puchong • Cheras • Ampang • Bangi • Kajang',
      foot_rights: 'Hak cipta terpelihara.'
    },
    en: {
      nav_services: 'Services',
      nav_why: 'Why Us',
      nav_gallery: 'Gallery',
      nav_contact: 'Contact',
      cta_whatsapp: 'WhatsApp Us',
      hero_badge: '✦ Aircond & Electrical — KL & Selangor',
      hero_title: 'Cool Homes & Offices, <span class="accent">Safe Wiring.</span>',
      hero_sub: 'AD Engineering Electrical & Electronic — aircond service, cleaning & repair, plus wiring and all electrical work. Experienced technicians, honest prices.',
      hero_cta1: 'Book Now',
      hero_cta2: 'Our Services',
      trust1: 'Years of Experience',
      trust2: 'Jobs Completed',
      trust3: 'Aircond + Electrical',
      img_hero: 'AD Engineering',
      svc_kicker: 'OUR SERVICES',
      svc_title: 'One Team for Cooling & Safety.',
      svc_sub: 'Aircond and electrical under one roof — easy, cost-effective & consistent.',
      svc1_title: 'Aircond Service & Cleaning',
      svc1_desc: 'Regular service & chemical wash — cold air restored, lower electricity bills, healthier home.',
      svc2_title: 'Repair & Troubleshooting',
      svc2_desc: 'Not cold, leaking, noisy? We diagnose & fix it right — no patchwork.',
      svc3_title: 'Gas Refill & Parts',
      svc3_desc: 'R410/R32 gas refill, capacitor, PCB, blower replacement with original parts.',
      svc4_title: 'Installation & Relocation',
      svc4_desc: 'New installs, unit relocation & reinstallation — neat, dry & guaranteed.',
      svc5_title: 'Wiring & Electrical Work',
      svc5_desc: 'House & premises wiring, extra points, DB upgrade, lights & fans — to safety standards.',
      svc6_title: 'Premises Contracts',
      svc6_desc: 'Scheduled maintenance (PSS) for offices, shops & buildings — one team, fixed schedule, contract pricing.',
      why_kicker: 'WHY AD ENGINEERING?',
      why_title: 'Neat Work, Honest Prices, Always On Time.',
      f1_title: 'Experienced Technicians',
      f1_desc: 'Licensed & trained — they understand aircond and electrical systems, no guesswork.',
      f2_title: 'Transparent Pricing',
      f2_desc: 'Quoted upfront before work begins. No hidden charges, no bill surprises.',
      f3_title: 'Always On Time',
      f3_desc: 'We keep our appointment times. KL traffic? We plan the route properly.',
      f4_title: 'Workmanship Guaranteed',
      f4_desc: 'If the same issue returns after service, we come back — free of charge.',
      proc_kicker: 'HOW IT WORKS',
      proc_title: 'Easy. Just 3 Steps.',
      s1_title: 'WhatsApp Us',
      s1_desc: "Describe the issue & send your location. We'll give an initial quote.",
      s2_title: 'Pick a Time',
      s2_desc: 'Slots to suit you — weekends included.',
      s3_title: 'We Get It Done',
      s3_desc: 'Neat work, tested before we leave — cool & safe.',
      gal_kicker: 'OUR GALLERY',
      gal_title: 'Work That Speaks for Itself.',
      band_title: 'Aircond not cold or wiring problems? ⚡',
      band_sub: 'WhatsApp us now — free quote, neat work, honest prices.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'AD Engineering Electrical & Electronic — aircond service, wiring & electrical work in KL & Selangor.',
      foot_hubungi: 'Contact',
      foot_hours: '⏰ Daily, 9am – 7pm',
      foot_area: 'Service Area',
      foot_area_list: 'Kuala Lumpur • Selangor — Shah Alam • Subang • Petaling Jaya • Klang • Puchong • Cheras • Ampang • Bangi • Kajang',
      foot_rights: 'All rights reserved.'
    }
  };

  var currentLang = localStorage.getItem('ad-lang') || 'ms';

  /* ---------- Apply language ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ad-lang', lang);
    document.documentElement.lang = lang;

    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.getElementById('langLabel').textContent = lang.toUpperCase();
    updateWaLinks();
  }

  /* ---------- WhatsApp helpers ---------- */
  function waLink() {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE[currentLang]);
  }

  function updateWaLinks() {
    ['waNav', 'waHero', 'waBand', 'waFooter', 'waFloat'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.href = waLink();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);

    document.getElementById('langToggle').addEventListener('click', function () {
      applyLang(currentLang === 'ms' ? 'en' : 'ms');
    });

    // Navbar scroll state
    var navbar = document.getElementById('navbar');
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  });
})();
