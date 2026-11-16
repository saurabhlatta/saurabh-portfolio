/* Project data. Set `repo` / `demo` to real URLs and the buttons appear automatically.
   Leave null when no real link exists. */
(function () {
  'use strict';
  const projects = [
    { name: 'LinkForge AI', status: 'In development',
      description: 'A Streamlit-based LinkedIn AI assistant exploring AI-powered content generation and professional profile assistance.',
      stack: ['Python', 'Streamlit', 'AI'], repo: null, demo: null },
    { name: 'SheharSathi', status: 'Concept',
      description: 'A smart-city application concept designed to help visitors navigate Jaipur, discover transportation, hotels, restaurants and local services.',
      stack: ['Firebase', 'React Native / Expo'], repo: null, demo: null },
    { name: 'Color Detection Web App', status: 'Academic project',
      description: 'A Python-based color detection project developed for academic learning.',
      stack: ['Python'], repo: null, demo: null },
    { name: 'Arena-Verse', status: 'Concept',
      description: 'A multiplayer gaming platform concept featuring multiple games and online gameplay.',
      stack: ['JavaScript', 'Firebase'], repo: null, demo: null }
  ];

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function link(label, href, cls) {
    const a = el('a', cls, label);
    a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer';
    return a;
  }

  function renderProjects(container) {
    if (!container) return;
    projects.forEach(function (p) {
      const card = el('article', 'glass project tilt');
      card.appendChild(el('span', 'status', p.status));
      card.appendChild(el('h3', '', p.name));
      card.appendChild(el('p', '', p.description));
      const stack = el('ul', 'stack');
      p.stack.forEach(function (s) { stack.appendChild(el('li', '', s)); });
      card.appendChild(stack);
      if (p.repo || p.demo) {
        const row = el('div', 'p-links');
        if (p.repo) row.appendChild(link('GitHub repository', p.repo, 'btn btn-sm btn-ghost'));
        if (p.demo) row.appendChild(link('Live demo', p.demo, 'btn btn-sm'));
        card.appendChild(row);
      }
      container.appendChild(card);
    });
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.projects = projects;
  window.Portfolio.renderProjects = renderProjects;
})();
