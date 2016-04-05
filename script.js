'use strict';
window.addEventListener('load', () => {
    // Filtering
    PLEB_SEARCH.init('.filter', '.filterable', jQuery.fn.slideDown, jQuery.fn.slideUp);

    // Click to expand
    var expandables = document.querySelectorAll('.block-list > li.expandable');
    for (var i = 0; i < expandables.length; i++) {
        var expandable = expandables[i];
        expandable.querySelector('.expandable-target').addEventListener('click', event => {
            expandable.classList.toggle('expanded');
            var toExpand = expandable.querySelectorAll('.collapsed');
            for (var j = 0; j < toExpand.length; j++) {
                $(toExpand[j]).slideToggle()
            }
        });
    }

    // Citations
    var citeables = document.querySelectorAll('.has-citation');
    for (var i = 0; i < citeables.length; i++) {
        var citation = citeables[i].querySelector('.citation');
        citeables[i].querySelector('.citation-link').addEventListener('click', event => {
            citation.classList.add('active');
        });
    }
    var citations = document.querySelectorAll('.citation');
    for (var i = 0; i < citations.length; i++) {
        var citation = citations[i];
        citation.addEventListener('click', event => {
            if (event.target == citation) {
                citation.classList.remove('active');
            }
        });
    }

    // Nav Links
    var navLinks = Array.from(document.querySelectorAll('nav .nav-list a'));
    var targets = navLinks.map(link => link.hash);

    // Smooth scrolling
    navLinks.forEach(link => {
        var target = document.querySelector(link.hash);
        link.addEventListener('click', event => {
            $('html, body').animate({scrollTop: target.offsetTop}, 600);
            event.preventDefault();
            return false;
        });
    });

    // Color side bar with scrolling
    window.addEventListener('scroll', event => {
        var pos = window.scrollY;
        var hash;
        for (var target of targets) {
            hash = target;
            // -1 is a margin or error (e.g. less than a pix)
            if (document.querySelector(target).getBoundingClientRect().top > -1) {
                break;
            }
        }

        for (var link of navLinks) {
            if (link.hash == hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });

    // All keypresses sent to search box
    var searchBox = document.querySelector('.filter');
    window.addEventListener('keypress', event => searchBox.focus());

    // Trigger initial scroll event
    window.dispatchEvent(new Event('scroll'));
});
