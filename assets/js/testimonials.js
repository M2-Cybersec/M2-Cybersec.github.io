/* ==========================================================================
   M2 Cybersec – Kundenstimmen-Karussell
   ==========================================================================

   NEUE STIMME HINZUFÜGEN
   ----------------------
   Nur die Liste TESTIMONIALS unten ergänzen – sonst nichts. Die Reihenfolge
   in der Liste ist die Reihenfolge auf der Seite. Ist die Liste leer, bleibt
   die Sektion komplett ausgeblendet (kein leerer Abschnitt auf der Seite).

   Felder je Eintrag:
     quote     Pflicht. Das Zitat, ohne Anführungszeichen – die setzt das CSS.
     name      Pflicht. Name der Person, oder das Unternehmen, wenn die
               Stimme nicht namentlich freigegeben ist (z. B. 'Kunde aus Köln').
     role      Optional. Funktion und Unternehmen, z. B. 'Geschäftsführer, Brinktec'.
     image     Optional. Pfad zu einem Bild im eigenen Projekt, z. B. ein
               Kundenlogo aus /assets/references/ oder ein Porträt.
               ⚠ Nur eigene Pfade – die CSP der Seite erlaubt keine Fremdbilder.
               Ohne Bild zeigt die Kachel die Initialen aus 'name'.
     fit       Optional. 'logo' (Standard, Bild wird eingepasst) oder
               'portrait' (Bild füllt die Kachel formatfüllend).

   Beispiel (zum Übernehmen die Kommentarzeichen entfernen und Inhalt ersetzen):

     {
         quote: 'Nach dem ersten Report wussten wir zum ersten Mal genau, wo wir stehen.',
         name: 'Vorname Nachname',
         role: 'Geschäftsführer, Beispiel GmbH',
         image: '/assets/references/brinktec-mono.png',
         fit: 'logo'
     },

   Nur echte, freigegebene Zitate eintragen – keine erfundenen Stimmen.
   ========================================================================== */

var M2_TESTIMONIALS_DATA = [
    // Hier die freigegebenen Kundenstimmen eintragen (Beispiel siehe oben).
    {
         quote: 'Als Gründerin eines Startups habe ich viele Fragen rund um die Sicherheit unserer IT und den Schutz von Kundendaten. Mit M2 habe ich einen Partner an meiner Seite, der unsere Situation versteht und schnell die passende Lösungen findet. Besonders schätze ich die schnelle und persönliche Unterstützung – auf Fragen erhalte ich oft noch am selben Tag kompetente Antworten. M2 hilft uns dabei, unsere IT-Infrastruktur sicherer aufzustellen und mögliche Schwachstellen zu schließen. Die Zusammenarbeit ist pragmatisch, lösungsorientiert und findet auf Augenhöhe statt.',
         name: 'Daniela Zakowski',
         role: 'Gründerin der Vertriebsberatung Zakcess UG (haftungsbeschränkt)',
         image: '/assets/testimonials/daniela-zakowski.webp',
         fit: 'portrait'
     },
     {
     	 quote: 'Als Gründerin hatte ich Cybersecurity bisher immer aufgeschoben. Der Security Check bei M2 Cybersec hat das Thema plötzlich greifbar gemacht. Meine IP-Adresse wurde tiefgehend analysiert, inklusive erweiterter Schwachstellenprüfung und Service- und Sicherheitsanalyse. Das Ergebnis stand in einem strukturierten, wirklich verständlichen Report. So konnte ich die gefundenen Schwachstellen endlich ernst nehmen und handeln. Besonders gut: die Kombination aus Fachtiefe und Kommunikation auf Augenhöhe. M2 Cybersec erklärt so, dass auch IT-Laien fundierte Entscheidungen treffen können. Für alle, die ihr Unternehmen professionell absichern wollen, ohne ein riesiges Budget einzuplanen: sehr empfehlenswert!',
         name: 'Larissa Ost',
         role: 'Geschäftsführerin, Immosthetics',
         image: '/assets/testimonials/larissa-ost.webp',
         fit: 'portrait'
     },

];

/* --------------------------------------------------------------------------
   Ab hier die Mechanik – zum Hinzufügen einer Stimme nicht nötig.

   Markup, das die Seite mitbringen muss:
       <section id="stimmen" class="section" hidden>
           <div class="testimonials" data-testimonials></div>
       </section>
   Ein Karussell pro Seite – gebaut wird der erste Container mit data-testimonials.
   Optional am Container: data-autoplay="false" schaltet den Selbstlauf aus.
   Eine Seite kann eigene Stimmen zeigen, indem sie vor diesem Script
   window.M2_TESTIMONIALS = [...] setzt.
   -------------------------------------------------------------------------- */

(function () {
    'use strict';

    var ARROW_LEFT = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
    var ARROW_RIGHT = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
    var AUTOPLAY_MS = 7000;

    var container = document.querySelector('[data-testimonials]');
    if (!container) return;

    var items = (window.M2_TESTIMONIALS || M2_TESTIMONIALS_DATA)
        .filter(function (item) { return item && item.quote && item.name; });
    if (!items.length) return;

    var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    var hasVisual = items.some(function (item) { return item.image; });
    var active = 0;
    var timer = null;
    var touched = false;   // erst nach einer Nutzeraktion wird angesagt

    // --- Aufbau -----------------------------------------------------------
    function initials(name) {
        return name.trim().split(/\s+/).slice(0, 2).map(function (part) {
            return part.charAt(0).toUpperCase();
        }).join('');
    }

    function buildVisual(item) {
        var tile = document.createElement('div');
        tile.className = 'tm-visual';
        tile.setAttribute('data-fit', item.fit === 'portrait' ? 'portrait' : 'logo');
        if (item.image) {
            var img = document.createElement('img');
            img.src = item.image;
            img.alt = '';               // Firma und Name stehen im Zitat-Block
            img.loading = 'lazy';
            tile.appendChild(img);
        } else {
            var mark = document.createElement('span');
            mark.className = 'tm-monogram';
            mark.textContent = initials(item.name);
            tile.appendChild(mark);
        }
        return tile;
    }

    function buildQuote(text) {
        var quote = document.createElement('blockquote');
        quote.className = 'tm-quote';
        text.trim().split(/\s+/).forEach(function (word, i) {
            var span = document.createElement('span');
            span.className = 'tm-word';
            span.style.setProperty('--tm-i', String(i));
            span.textContent = word;
            quote.appendChild(span);
            quote.appendChild(document.createTextNode(' '));
        });
        return quote;
    }

    function buildSlide(item, index) {
        var slide = document.createElement('div');
        slide.className = 'tm-slide';
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'Kundenstimme');
        slide.setAttribute('aria-label', (index + 1) + ' von ' + items.length);

        slide.appendChild(buildQuote(item.quote));

        var name = document.createElement('p');
        name.className = 'tm-name';
        name.textContent = item.name;
        slide.appendChild(name);

        if (item.role) {
            var role = document.createElement('p');
            role.className = 'tm-role';
            role.textContent = item.role;
            slide.appendChild(role);
        }
        return slide;
    }

    var stage = document.createElement('div');
    stage.className = 'tm-stage';

    var visuals = null;
    if (hasVisual) {
        visuals = document.createElement('div');
        visuals.className = 'tm-visuals';
        visuals.setAttribute('aria-hidden', 'true');
        items.forEach(function (item) { visuals.appendChild(buildVisual(item)); });
        stage.appendChild(visuals);
    }

    var body = document.createElement('div');
    body.className = 'tm-body';
    var slides = items.map(function (item, i) {
        var slide = buildSlide(item, i);
        body.appendChild(slide);
        return slide;
    });

    var controls = document.createElement('div');
    controls.className = 'tm-controls';

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'tm-arrow';
    prev.innerHTML = ARROW_LEFT;
    prev.setAttribute('aria-label', 'Vorherige Kundenstimme');

    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'tm-arrow';
    next.innerHTML = ARROW_RIGHT;
    next.setAttribute('aria-label', 'Nächste Kundenstimme');

    var dots = document.createElement('div');
    dots.className = 'tm-dots';
    var dotButtons = items.map(function (item, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'tm-dot';
        dot.setAttribute('aria-label', 'Kundenstimme ' + (i + 1) + ' von ' + items.length);
        dot.addEventListener('click', function () { go(i); });
        dots.appendChild(dot);
        return dot;
    });

    controls.appendChild(prev);
    controls.appendChild(next);
    controls.appendChild(dots);
    body.appendChild(controls);
    stage.appendChild(body);

    container.classList.add('testimonials');
    if (!hasVisual) container.classList.add('is-textonly');
    if (items.length === 1) container.classList.add('is-single');
    container.setAttribute('aria-roledescription', 'Karussell');
    container.appendChild(stage);

    var section = container.closest('section') || container;
    section.removeAttribute('hidden');

    // --- Wechsel ----------------------------------------------------------
    // Nach dem letzten Wort kommt die Animationsklasse wieder weg, damit die
    // Wörter als normaler Text gerendert werden (sonst auf Mobilgeräten teils
    // unscharf). Die Zeit reicht auch, wenn animationend ausbleibt.
    var settleTimer = null;

    function settle(slide) {
        if (settleTimer) window.clearTimeout(settleTimer);
        var words = slide.querySelectorAll('.tm-word').length;
        settleTimer = window.setTimeout(function () {
            settleTimer = null;
            slide.classList.remove('is-in');
        }, words * 25 + 220 + 200);
    }

    function show(index) {
        active = (index + items.length) % items.length;

        slides.forEach(function (slide, i) {
            var isActive = i === active;
            slide.classList.toggle('is-active', isActive);
            slide.classList.remove('is-in');
            if (isActive) {
                void slide.offsetWidth;     // Wort-Animation neu starten
                slide.classList.add('is-in');
                settle(slide);
            }
        });

        dotButtons.forEach(function (dot, i) {
            if (i === active) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
        });

        if (!visuals) return;
        var tiles = visuals.children;
        for (var i = 0; i < tiles.length; i++) {
            var forward = (i - active + items.length) % items.length;
            var backward = (active - i + items.length) % items.length;
            var pos = 'hidden';
            if (forward === 0) pos = 'center';
            else if (items.length > 2 && backward === 1) pos = 'left';
            else if (forward === 1) pos = 'right';
            tiles[i].setAttribute('data-pos', pos);
        }
    }

    function go(index) {
        if (!touched) {
            // Ab der ersten Nutzeraktion darf der Wechsel angesagt werden.
            touched = true;
            body.setAttribute('aria-live', 'polite');
        }
        stop();
        show(index);
    }

    prev.addEventListener('click', function () { go(active - 1); });
    next.addEventListener('click', function () { go(active + 1); });

    // Pfeiltasten nur, solange der Fokus im Karussell liegt.
    container.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    });

    // Wischen auf Touch-Geräten
    if (window.PointerEvent) {
        var startX = null;
        container.addEventListener('pointerdown', function (e) {
            startX = e.pointerType === 'mouse' ? null : e.clientX;
        });
        container.addEventListener('pointerup', function (e) {
            if (startX === null) return;
            var dx = e.clientX - startX;
            startX = null;
            if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
        });
    }

    // --- Selbstlauf -------------------------------------------------------
    // Zugabe, nicht Voraussetzung: Er ruht bei Hover, Fokus, im Hintergrund,
    // außerhalb des Bildschirms und bleibt nach jeder Nutzeraktion aus.
    var wantsAutoplay = container.dataset.autoplay !== 'false'
        && items.length > 1
        && !calm.matches;
    var onscreen = true;

    function stop() {
        wantsAutoplay = false;
        if (timer) { window.clearInterval(timer); timer = null; }
    }

    function sync() {
        var shouldRun = wantsAutoplay && onscreen && !document.hidden
            && !container.matches(':hover')
            && !container.contains(document.activeElement);
        if (shouldRun && !timer) {
            timer = window.setInterval(function () { show(active + 1); }, AUTOPLAY_MS);
        } else if (!shouldRun && timer) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    ['mouseenter', 'mouseleave', 'focusin', 'focusout'].forEach(function (type) {
        container.addEventListener(type, sync);
    });
    document.addEventListener('visibilitychange', sync);

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                onscreen = entry.isIntersecting;
                sync();
            });
        }, { rootMargin: '120px 0px' }).observe(container);
    }

    show(0);
    sync();
})();
