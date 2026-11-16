(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const A = {};

  A.typing = function (node) {
    if (!node || reduce) return;
    const roles = node.dataset.roles.split('|');
    let r = 0, i = roles[0].length, del = true;
    (function tick() {
      const word = roles[r];
      i += del ? -1 : 1;
      node.textContent = word.slice(0, i);
      let wait = del ? 40 : 85;
      if (!del && i === word.length) { del = true; wait = 1400; }
      else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      setTimeout(tick, wait);
    })();
  };

  A.reveal = function (nodes) {
    if (!('IntersectionObserver' in window)) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    nodes.forEach(function (n) { io.observe(n); });
  };

  A.particles = function (canvas) {
    if (!canvas || reduce) return;
    const ctx = canvas.getContext('2d');
    let w, h, pts = [];
    function size() {
      w = canvas.width = innerWidth; h = canvas.height = innerHeight;
      const n = Math.min(70, Math.floor(w * h / 22000));
      pts = Array.from({ length: n }, function () {
        return { x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 };
      });
    }
    function draw() {
      if (document.hidden) return;
      ctx.clearRect(0, 0, w, h);
      pts.forEach(function (p, i) {
        p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
        ctx.fillStyle = 'rgba(120,160,255,.7)';
        ctx.fillRect(p.x, p.y, 1.6, 1.6);
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.strokeStyle = 'rgba(100,130,255,' + (0.12 * (1 - d / 120)) + ')';
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    }
    size(); draw();
    addEventListener('resize', size);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) draw(); });
  };

  A.tilt = function (nodes) {
    if (reduce || !fine) return;
    nodes.forEach(function (n) {
      n.addEventListener('mousemove', function (e) {
        const b = n.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
        n.style.transform = 'perspective(800px) rotateX(' + (-y * 6) + 'deg) rotateY(' + (x * 6) + 'deg)';
      });
      n.addEventListener('mouseleave', function () { n.style.transform = ''; });
    });
  };

  A.magnetic = function (nodes) {
    if (reduce || !fine) return;
    nodes.forEach(function (n) {
      n.addEventListener('mousemove', function (e) {
        const b = n.getBoundingClientRect();
        n.style.transform = 'translate(' + ((e.clientX - b.left - b.width / 2) * .25) + 'px,' + ((e.clientY - b.top - b.height / 2) * .35) + 'px)';
      });
      n.addEventListener('mouseleave', function () { n.style.transform = ''; });
    });
  };

  A.parallax = function (node) {
    if (!node || reduce) return;
    let ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { node.style.transform = 'translateY(' + Math.min(scrollY * .08, 60) + 'px)'; ticking = false; });
    }, { passive: true });
  };

  A.cursor = function (node) {
    if (!node || reduce || !fine) return;
    addEventListener('mousemove', function (e) { node.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)'; });
    document.querySelectorAll('a,button').forEach(function (n) {
      n.addEventListener('mouseenter', function () { node.classList.add('big'); });
      n.addEventListener('mouseleave', function () { node.classList.remove('big'); });
    });
  };

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.anim = A;
})();
