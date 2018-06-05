'use strict';
(function () {
  // Citation
  const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('#clipboard-snackbar'));
  const dialog = new mdc.dialog.MDCDialog(document.querySelector('#cite-dialog'));
  const bibtex = document.querySelector('#bibtex');
  let devt = null;
  bibtex.addEventListener('mousedown', (evt) => {
    devt = evt;
  })
  bibtex.addEventListener('mouseup', (uevt) => {
    if (uevt && devt.pageX === uevt.pageX && devt.pageY === uevt.pageY) {
      const range = document.createRange()
      range.selectNode(bibtex);
      const select = getSelection();
      select.empty();
      select.addRange(range);
    }
  })
  document.querySelector('#copy-to-clipboard').addEventListener('click', () => {
    try {
      const range = document.createRange()
      range.selectNode(bibtex);
      const select = getSelection();
      select.empty();
      select.addRange(range);
      if (document.execCommand('copy')) {
        snackbar.show({
          message: 'Copied citation to clipboard',
          timeout: 2000,
        });
      } else {
        snackbar.show({
          message: 'Failed copying citation to clipboard',
          timeout: 2000,
        });
      }
      select.empty();
    } catch (err) {
      console.error(err);
      snackbar.show({
        message: "Browser doesn't support copying",
        timeout: 2000,
      });
    }
  });
  [].forEach.call(document.querySelectorAll('.citation-button'), button => {
    const citation = button.querySelector('.bibtex-citation').textContent;
    button.addEventListener('click', evt => {
      bibtex.textContent = citation;
      dialog.show();
    });
  });

  // Expand descriptions
  [].forEach.call(document.querySelectorAll('.collapsed'), card => {
    const button = card.querySelector('.expand-button');
    button.addEventListener('click', _ => {
      card.classList.toggle('collapsed');
      const newTitle = button.getAttribute('data-title');
      button.setAttribute('data-title', button.getAttribute('title'))
      button.setAttribute('title', newTitle);
    });
  });

  // Color side bar with scrolling
  var navLinks = Array.from(document.querySelectorAll('.nav-list a'));
  var targets = navLinks.map(link => link.hash);

  window.addEventListener('scroll', event => {
    const pos = window.scrollY;
    const hash = targets.filter(target =>
      document.querySelector(target).getBoundingClientRect().top > -1)[0]
    navLinks.forEach(link => {
      if (link.hash == hash) {
        link.classList.remove('nav-list--inactive');
      } else {
        link.classList.add('nav-list--inactive');
      }
    });
  });

  // Initialize mdc
  window.mdc.autoInit();

  // Trigger initial scroll event for coloring
  window.dispatchEvent(new Event('scroll'));

  // Service worker
  if ('serviceWorker' in navigator) {
    (async () => {
      await navigator.serviceWorker.register('/service_worker.js');
    })();
  }
})();
