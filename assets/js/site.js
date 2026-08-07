/* Theme toggle + "show more" for the news list. */

(function () {
  var STORAGE_KEY = 'theme';

  function applyTheme(mode, button) {
    var dark = mode === 'dark';
    document.body.classList.toggle('dark-mode', dark);
    if (button) {
      button.textContent = dark ? '☀️' : '🌙';
      button.setAttribute('aria-pressed', String(dark));
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    var stored = null;

    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* Storage can be blocked; the toggle still works for the session. */
    }

    if (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      stored = 'dark';
    }

    applyTheme(stored, toggle);

    if (toggle) {
      toggle.addEventListener('click', function () {
        var dark = !document.body.classList.contains('dark-mode');
        applyTheme(dark ? 'dark' : 'light', toggle);
        try {
          localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
        } catch (e) {
          /* ignore */
        }
      });
    }

    var moreButton = document.getElementById('news-toggle');
    var hiddenNews = document.getElementById('news-hidden');

    if (moreButton && hiddenNews) {
      moreButton.addEventListener('click', function () {
        var collapsed = hiddenNews.classList.toggle('hidden');
        moreButton.textContent = collapsed ? 'Show more' : 'Show less';
        moreButton.setAttribute('aria-expanded', String(!collapsed));
      });
    }
  });
})();
