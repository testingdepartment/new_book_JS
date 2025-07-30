// app.js - JS Testing Academy core logic

// Base path for GitHub Pages subfolder support
const BASE_PATH = window.location.pathname.replace(/[^\/]*$/, '');

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(BASE_PATH + 'service-worker.js', { scope: BASE_PATH })
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}

// Simple navigation placeholder
function showLesson(id) {
  const container = document.getElementById('lessonContainer');
  container.innerHTML = `<div class="lesson-content"><h1>Урок: ${id}</h1><p>Контент урока загружается...</p></div>`;
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});
