// AOS Init
AOS.init();

// About section typewriter
document.addEventListener('DOMContentLoaded', function () {
  const about = document.getElementById('about-text');
  const full = about.textContent;
  about.textContent = '';
  let i = 0;
  function type() {
    if (i < full.length) {
      about.textContent += full.charAt(i++);
      setTimeout(type, 25);
    }
  }
  type();
});

// Hero slideshow random + overlay
(function () {
  const hero = document.querySelector('.hero');
  const imgs = [
    'images/hero-bg1.jpg',
    'images/hero-bg2.jpg',
    'images/hero-bg3.jpg',
    'images/hero-bg4.jpg',
    'images/hero-bg5.jpg',
    'images/hero-bg6.jpg'
  ];
  let pool = [...imgs];

  function nextBg() {
    if (pool.length === 0) pool = [...imgs];
    const idx = Math.floor(Math.random() * pool.length);
    const sel = pool.splice(idx, 1)[0];
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${sel}')`;
  }

  nextBg();
  setInterval(nextBg, 3000);
})();

// Services cards animation + click light border
(function () {
  const cards = document.querySelectorAll('.service-card');

  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      if (card.getBoundingClientRect().top < window.innerHeight - 50) {
        card.classList.add('show');
      }
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
})();

// Testimonials slide animation
(function () {
  const tests = document.querySelectorAll('.testimonial');

  window.addEventListener('scroll', () => {
    tests.forEach(t => {
      if (t.getBoundingClientRect().top < window.innerHeight - 50 && !t.classList.contains('shown')) {
        t.classList.add('shown');
      }
    });
  });
})();
