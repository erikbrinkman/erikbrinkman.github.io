'use strict';
(function() {
    // Clipboard
    const snackbar = document.querySelector('#clipboard-snackbar');
    const clipboard = new Clipboard('.citation-btn');

    clipboard.on('success', _ => {
        snackbar.MaterialSnackbar.showSnackbar({
            message: 'Copied bibtex citation to clipboard',
            timeout: 2000,
        });
    });

    clipboard.on('error', _ => {
        snackbar.MaterialSnackbar.showSnackbar({
            message: 'Error attempting to copy citation to clipboard',
            timeout: 2000,
        });
    });

    // Expand card
    Array.from(document.querySelectorAll('.mdl-card')).forEach(card => {
        const btn = card.querySelector('.expand-btn');
        if (btn) {
            btn.addEventListener('click', _ => {
                card.classList.toggle('collapsed');
            });
        }
    });

    // Color side bar with scrolling
    var navLinks = Array.from(document.querySelectorAll('.nav-list a'));
    var targets = navLinks.map(link => link.hash);

    window.addEventListener('scroll', event => {
        const pos = window.scrollY;
        const hash = targets.filter(target => document.querySelector(target).getBoundingClientRect().top > -1)[0]
        navLinks.forEach(link => {
            if (link.hash == hash) {
                link.classList.add('mdl-button--colored');
            } else {
                link.classList.remove('mdl-button--colored');
            }
        });
    });

    // All keypresses sent to search box
    const searchBox = document.querySelector('#search');
    window.addEventListener('keypress', event => searchBox.focus());

    // Filter on key press
    const filterable = Array.from(document.querySelectorAll('.filterable'));
    searchBox.addEventListener('input', _ => {
        if (searchBox.value) {
            const words = searchBox.value.toLowerCase().split(' ').filter(word => word);
            filterable.forEach(elem => {
                if (words.map(w => elem.textContent.toLowerCase().includes(w)).reduce((a, b) => a || b)) {
                    elem.classList.remove('filtered');
                } else {
                    elem.classList.add('filtered');
                }
            });
        } else {
            filterable.forEach(elem => elem.classList.remove('filtered'));
        }
    });

    // Trigger initial scroll event
    window.dispatchEvent(new Event('scroll'));
})();
