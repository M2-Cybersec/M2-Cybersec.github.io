// Mobile Hamburger-Navigation (Button-basiert, aria-expanded)
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    }

    toggle.addEventListener('click', function () {
        setOpen(!menu.classList.contains('nav-open'));
    });

    // Menü schließen nach Link-Klick (v. a. bei Anker-Links)
    menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
    });

    // Escape schließt das Menü
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('nav-open')) {
            setOpen(false);
            toggle.focus();
        }
    });
})();
