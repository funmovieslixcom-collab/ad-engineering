/* ============================================================
   MEGAT HANDYMAN — Language toggle + WhatsApp links
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '60146226011'; // 014-6226011
  var WA_MESSAGE = {
    ms: 'Hai Megat Handyman! Saya nak bertanya tentang repair TV / servis setrika.',
    en: 'Hi Megat Handyman! I would like to ask about your TV / iron repair service.'
  };

  /* ---------- Translations ---------- */
  var I18N = {
    ms: {
      nav_services: 'Servis',
      nav_why: 'Kenapa Kami',
      nav_gallery: 'Galeri',
      nav_contact: 'Hubungi',
      cta_whatsapp: 'WhatsApp Kami',
      hero_badge: '🔧 Repair TV & Setrika — Datang Ke Rumah',
      hero_title1: 'TV Rosak?',
      hero_title2: 'Setrika Mati?',
      hero_sub: 'Megat Handyman — pakar repair TV LED/LCD & servis setrika. Kami datang ke rumah anda, diagnose on-the-spot, dan pulangkan macam baru. Cepat & jujur.',
      hero_cta1: 'Repair Sekarang',
      hero_cta2: 'Lihat Servis',
      trust1: 'Servis Di Rumah',
      trust2: 'Respons Pantas',
      trust3: 'Harga Jujur',
      hero_caption: 'Repair TV — sebelum & selepas ✨',
      hero_caption2: 'Servis setrika 🔥',
      svc_kicker: 'PERKHIDMATAN',
      svc_title: 'Rosak Bawa Datang? Kami Datang Je.',
      svc_sub: 'Tak payah susah-susah angkut — kami repair di rumah anda.',
      svc1_title: 'Repair TV LED / LCD / Smart TV',
      svc1_desc: 'TV tak hidup, skrin gelap, garisan, takde bunyi, WiFi problem — kami baiki semua jenama: Samsung, LG, Panasonic, Sony, TCL & lain-lain.',
      svc2_title: 'Repair & Servis Setrika',
      svc2_desc: 'Setrika tak panas, melekat pada baju, wayar rosak, bocor air — setrika biasa atau steam iron, kami selamatkan.',
      svc3_title: 'Diagnose Percuma',
      svc3_desc: 'Hantar gambar & cerita masalah kat WhatsApp — kami bagi anggaran awal.',
      svc4_title: 'Servis Di Rumah',
      svc4_desc: 'Datang ke rumah/premis anda. Tak payah angkut TV besar ke mana-mana.',
      svc5_title: 'Warranty Kerja',
      svc5_desc: 'Masalah sama berulang selepas repair? Kami datang semula — free.',
      why_kicker: 'KENAPA MEGAT HANDYMAN?',
      why_title: 'Bukan Sekadar Baik. Kami Baik Dengan Betul.',
      f1_title: 'Tangan Mahir',
      f1_desc: 'Bertahun fix TV & alat rumah — faham masalah tu macam mana, bukan cuba-cuba.',
      f2_title: 'Quote Dulu',
      f2_desc: 'Harga dipakai sebelum kerja mula. Mahal murah, anda tahu awal.',
      f3_title: 'Kami Yang Datang',
      f3_desc: 'Anda duduk rumah je. TV 65 inci? Bukan masalah kami.',
      f4_title: 'Jimat, Takyah Baru',
      f4_desc: 'Repair jimat berbanding beli baru — dan alat lama memang lebih padu.',
      proc_kicker: 'CARA KERJA',
      proc_title: 'Mudah. 3 Langkah Je.',
      s1_title: 'WhatsApp Kami',
      s1_desc: 'Hantar gambar/rosalah & lokasi. Kami quote awal — free.',
      s2_title: 'Fix Masa',
      s2_desc: 'Pilih hari & waktu yang senang untuk anda.',
      s3_title: 'Kami Repair',
      s3_desc: 'Datang, baiki, test depan anda. Bayar bila dah puas hati.',
      gal_kicker: 'GALERI KERJA',
      gal_title: 'Bukti Kami Kerja.',
      band_title: 'TV dah berhabuk, setrika dah meroyan? 😅',
      band_sub: 'Jangan beli baru lagi — WhatsApp kami, repair jimat lebih.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'Pakar repair TV LED/LCD & servis setrika — servis di rumah anda, kawasan KL & Selangor.',
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
      hero_badge: '🔧 TV & Iron Repair — We Come To You',
      hero_title1: 'Broken TV?',
      hero_title2: 'Dead Iron?',
      hero_sub: 'Megat Handyman — TV LED/LCD repair & iron service specialists. We come to your home, diagnose on-the-spot, and bring it back to life. Fast & honest.',
      hero_cta1: 'Repair Now',
      hero_cta2: 'Our Services',
      trust1: 'Home Service',
      trust2: 'Fast Response',
      trust3: 'Honest Pricing',
      hero_caption: 'TV repair — before & after ✨',
      hero_caption2: 'Iron service 🔥',
      svc_kicker: 'OUR SERVICES',
      svc_title: "Don't Haul It Around — We Come To You.",
      svc_sub: 'No need to carry your heavy TV anywhere — we repair at your home.',
      svc1_title: 'TV LED / LCD / Smart TV Repair',
      svc1_desc: "Won't turn on, dark screen, lines, no sound, WiFi issues — we fix all brands: Samsung, LG, Panasonic, Sony, TCL & more.",
      svc2_title: 'Iron Repair & Service',
      svc2_desc: 'Iron not heating, sticking to clothes, damaged cord, water leaking — regular or steam irons, we save them all.',
      svc3_title: 'Free Diagnosis',
      svc3_desc: 'Send a photo & describe the problem on WhatsApp — we give an initial estimate.',
      svc4_title: 'At-Home Service',
      svc4_desc: "We come to your home/premises. No need to haul a big TV anywhere.",
      svc5_title: 'Workmanship Warranty',
      svc5_desc: 'Same issue returns after repair? We come back — free of charge.',
      why_kicker: 'WHY MEGAT HANDYMAN?',
      why_title: 'Not Just Fixed. Fixed Properly.',
      f1_title: 'Skilled Hands',
      f1_desc: 'Years fixing TVs & home appliances — we understand the real problem, no guesswork.',
      f2_title: 'Quote Upfront',
      f2_desc: 'Price agreed before work starts. You know the cost early.',
      f3_title: 'We Travel To You',
      f3_desc: 'Just stay home. A 65-inch TV? No problem for us.',
      f4_title: 'Repair, Not Replace',
      f4_desc: 'Repairing saves money versus buying new — and old appliances are built tougher.',
      proc_kicker: 'HOW IT WORKS',
      proc_title: 'Easy. Just 3 Steps.',
      s1_title: 'WhatsApp Us',
      s1_desc: "Send photos & the problem plus your location. Free initial quote.",
      s2_title: 'Fix a Time',
      s2_desc: 'Pick a day & time convenient for you.',
      s3_title: 'We Repair',
      s3_desc: 'We arrive, fix it, and test it in front of you. Pay when satisfied.',
      gal_kicker: 'OUR WORK',
      gal_title: 'Proof We Deliver.',
      band_title: 'TV on its last legs, iron driving you crazy? 😅',
      band_sub: "Don't buy new — WhatsApp us, repair saves more.",
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'TV LED/LCD repair & iron service specialists — at your home, around KL & Selangor.',
      foot_hubungi: 'Contact',
      foot_hours: '⏰ Daily, 9am – 7pm',
      foot_area: 'Service Area',
      foot_area_list: 'Kuala Lumpur • Selangor — Shah Alam • Subang • Petaling Jaya • Klang • Puchong • Cheras • Ampang • Bangi • Kajang',
      foot_rights: 'All rights reserved.'
    }
  };

  var currentLang = localStorage.getItem('mh-lang') || 'ms';

  /* ---------- Apply language ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mh-lang', lang);
    document.documentElement.lang = lang;

    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
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
