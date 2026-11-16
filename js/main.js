(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const P = window.Portfolio, A = P.anim;
  const $ = function (s) { return document.querySelector(s); };
  const $$ = function (s) { return Array.from(document.querySelectorAll(s)); };

  function initNav() {
    const toggle = $('.nav-toggle'), menu = $('#menu');
    function set(open) { document.body.classList.toggle('nav-open', open); toggle.setAttribute('aria-expanded', String(open)); }
    toggle.addEventListener('click', function () { set(!document.body.classList.contains('nav-open')); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    const links = $$('.menu a[href^="#"]:not(.btn)');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach(function (s) { io.observe(s); });
    }
  }

  function initLearning() {
    const tabs = $$('.learn-tabs button'), out = $('#learn-desc');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
        t.classList.add('active'); t.setAttribute('aria-selected', 'true');
        out.textContent = t.dataset.desc;
      });
    });
  }

  function initForm() {
    const form = $('#contact-form'), status = $('#cf-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = $('#cf-name').value.trim(), email = $('#cf-email').value.trim(), msg = $('#cf-msg').value.trim();
      if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) { status.textContent = 'Enter your name, a valid email and a message, then try again.'; return; }
      const body = msg + '\n\nFrom: ' + name + ' (' + email + ')';
      location.href = 'mailto:lattaajay@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + name) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open with the message ready. Press send there to deliver it.';
    });
  }

  function initGraph() {
    const img = $('#graph img');
    if (!img) return;
    img.addEventListener('error', function () { img.hidden = true; $('#graph-note').hidden = false; });
  }

  function initLoader() {
    const l = $('#loader');
    const hide = function () { l.classList.add('done'); };
    if (document.readyState === 'complete') setTimeout(hide, 500); else addEventListener('load', function () { setTimeout(hide, 500); });
    setTimeout(hide, 3000);
  }

  function initTransitions() {
    const fade = $('.page-fade');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        fade.classList.add('on'); setTimeout(function () { fade.classList.remove('on'); }, 260);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    $('#year').textContent = new Date().getFullYear();
    P.renderProjects($('#project-grid'));
    initNav(); initLearning(); initForm(); initGraph(); initLoader(); initTransitions();
    A.typing($('#typed'));
    A.particles($('#bg'));
    A.reveal($$('.reveal'));
    A.tilt($$('.tilt'));
    A.magnetic($$('.magnetic'));
    A.parallax($('.hero-visual'));
    A.cursor($('.cursor'));
  });
})();
