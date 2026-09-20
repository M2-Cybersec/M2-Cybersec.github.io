/* ==========================================================================
   M2 Cybersec – Referenzen-Leiste ("Vertrauen von Unternehmen in ganz Deutschland")
   ==========================================================================

   NEUES KUNDENLOGO HINZUFÜGEN
   ---------------------------
   Nur die Liste M2_REFERENCES_DATA unten ergänzen – sonst nichts. Die Leiste
   läuft als Endlosschleife und braucht dafür zwei identische Sätze; den
   zweiten Satz legt das Script selbst an. Ist die Liste leer, verschwindet
   die Logo-Leiste (der BSI-Beleg darunter bleibt stehen).

   Felder je Eintrag:
     src      Pflicht. Pfad zum Logo, üblicherweise /assets/references/<name>-mono.png.
              ⚠ Nur eigene Pfade – die CSP der Seite erlaubt keine Fremdbilder.
              Konvention: weißes Monochrom-PNG mit transparentem Hintergrund.
     alt      Pflicht. Name des Unternehmens (wird vorgelesen).
     width    Pflicht. Originalbreite des PNG in Pixeln.
     height   Pflicht. Originalhöhe des PNG in Pixeln.
              width/height verhindern, dass die Leiste beim Laden springt –
              die echten Maße stehen z. B. in `file <bild>` oder den Bildinfos.

   Nur Logos von Kunden eintragen, die der Nennung zugestimmt haben.
   ========================================================================== */

var M2_REFERENCES_DATA = [
    { src: '/assets/references/akip-mono.png', alt: 'akip köln', width: 628, height: 200 },
    { src: '/assets/references/dq-drives-mono.png', alt: 'DQ Drives', width: 250, height: 200 },
    { src: '/assets/references/brinktec-mono.png', alt: 'Brinktec', width: 688, height: 200 },
    { src: '/assets/references/recosic-mono.png', alt: 'RECOSiC', width: 141, height: 200 },
    { src: '/assets/references/kado-mono.png', alt: 'KaDo Haustechnik', width: 245, height: 200 },
    { src: '/assets/references/he-solutions-mono.png', alt: 'HE Solutions', width: 260, height: 200 },
    { src: '/assets/references/immosthetics-mono.png', alt: 'Immosthetics', width: 500, height: 279 },
    { src: '/assets/references/megatech-logo.svg', alt: 'Megatech', width: 500, height: 279 }
];

/* --------------------------------------------------------------------------
   Ab hier die Mechanik – zum Hinzufügen eines Logos nicht nötig.

   Markup, das die Seite mitbringen muss:
       <div class="references-logos" hidden>
           <p class="references-label">…</p>
           <div class="references-track-wrapper">
               <div class="references-track" data-references></div>
           </div>
       </div>
   Eine Seite kann eigene Logos zeigen, indem sie vor diesem Script
   window.M2_REFERENCES = [...] setzt.
   -------------------------------------------------------------------------- */

(function () {
    'use strict';

    // Tempo der Endlosschleife: Sekunden pro Logo. Damit läuft die Leiste
    // gleich schnell, egal wie viele Logos in der Liste stehen.
    var SECONDS_PER_LOGO = 10;

    var track = document.querySelector('[data-references]');
    if (!track) return;

    var items = (window.M2_REFERENCES || M2_REFERENCES_DATA)
        .filter(function (item) { return item && item.src && item.alt; });

    var group = track.closest('.references-logos') || track;
    if (!items.length) return;   // Leiste bleibt ausgeblendet

    function buildLogo(item, muted) {
        var cell = document.createElement('div');
        cell.className = 'ref-logo';
        if (muted) cell.setAttribute('aria-hidden', 'true');

        var img = document.createElement('img');
        img.src = item.src;
        img.alt = muted ? '' : item.alt;   // der zweite Satz ist nur Dekoration
        if (item.width) img.width = item.width;
        if (item.height) img.height = item.height;
        img.loading = 'lazy';

        cell.appendChild(img);
        return cell;
    }

    // Satz 1 wird vorgelesen, Satz 2 ist die Kopie für den nahtlosen Umlauf.
    [false, true].forEach(function (muted) {
        items.forEach(function (item) { track.appendChild(buildLogo(item, muted)); });
    });

    track.style.animationDuration = (items.length * SECONDS_PER_LOGO) + 's';
    group.removeAttribute('hidden');
})();
