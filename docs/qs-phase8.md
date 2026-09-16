# Phase 8 – Qualitätssicherung

Stand: 16.09.2026 · Branch `feature/neue-paketstruktur`

Geprüft wurde die gesamte Website (53 Seiten) gegen die Referenz in
[`docs/pakete.md`](pakete.md) und die Checkliste aus
`prompts/umsetzungsplan-pakete.md`.

## Ergebnis der Checkliste

| # | Punkt | Ergebnis |
|---|---|---|
| 1 | Keine Treffer für `349`, `749`, `4.188`, `8.988`, `4.494`, `174,50`, `374,50`, `149–749` | **bestanden** – „349" kommt nur noch in der Telefonnummer vor |
| 2 | Keine der gestrichenen Formulierungen | **bestanden** – verbliebene Treffer für „wie echte Angreifer", „zugeschnitten", „branchenspezifisch" stehen ausschließlich auf `/red-team-plus/` bzw. im Blog und sind dort inhaltlich korrekt |
| 3 | „Code Review" nur noch als Add-on | **bestanden** – Scale Secure: Add-on-Tabelle + Abgrenzung, Growth Guard: Verweis auf Scale |
| 4 | Rechenbeispiele | **bestanden** – 1.788 / 5.388 / 10.776 / 5.388 / 224,50 / 15.480 / 7.740 / 645 sowie 298 € und 898 € Ersparnis stimmen überall |
| 5 | Startseite, Vergleichstabelle, Paketseiten, FAQ identisch | **bestanden nach Korrektur** – Scale-Paketseite nannte „~7.700 €/Jahr" statt 7.740 €; angeglichen |
| 6 | Keine sichtbaren Platzhalter `{{…}}` | **bestanden** – E1–E4 erscheinen als „auf Anfrage" / „nach Aufwand, auf Anfrage" / „Festpreis auf Anfrage" |
| 7 | Go-Live-Voraussetzungen V1–V7 | **bestanden nach Korrektur** – siehe unten |
| 8 | Interne Links | **bestanden** – alle `href`/`src` aller HTML-Seiten aufgelöst, 0 tote Links |
| 9 | Mobil/Desktop, Tabellen scrollen, kein horizontales Scrollen | **bestanden nach Korrektur** – siehe unten |
| 10 | Hell-/Dunkelmodus | **entfällt** – die Website ist dark-only, es gibt kein `prefers-color-scheme` und keine Light-Variante |
| 11 | HTML valide, keine Konsolenfehler | **bestanden** – Tag-Balance aller 53 Seiten sauber, 34 JSON-LD-Blöcke parsen fehlerfrei, 0 Konsolenfehler |
| 12 | Förder-Vorbehalte vollständig | **bestanden nach Korrektur** – siehe unten |
| 13 | `<!-- TODO: rechtliche Prüfung -->` an „Gut zu wissen" | **bestanden** – auf allen drei Paketseiten gesetzt |

## Verwendete Übergangsformulierungen (V1–V7)

| ID | Status | Auf der Website |
|---|---|---|
| V1 E-Learning | bestätigt | Zielformulierung: „Kompaktes E-Learning (30–45 Minuten) für bis zu 10 Personen" |
| V2 Monitoring | bestätigt | Zielformulierung mit Frequenz (monatlich / wöchentlich) |
| V3 Sofortalarm | offen | „kritische Änderungen zeitnah gemeldet" – der Begriff „Sofortalarm" kommt nicht vor |
| V4 Security-Starter-Kit | offen | weggelassen – kein Treffer auf der Website |
| V5 Security-One-Pager | offen | „Kurzzusammenfassung für Investoren- und Kundengespräche" |
| V6 Kundenportal / Ticket | offen | „per E-Mail" – „Ticket"/„Kundenportal" kommen im Abo-Kontext nicht vor |
| V7 Onboarding-Formular | offen | „in einem kurzen Onboarding-Gespräch" |

## In Phase 8 vorgenommene Korrekturen

**Inhalt**

1. `scale-paket/index.html` – Förderbetrag im NRW-Banner von „~7.700 €/Jahr" auf
   „7.740 € im Jahr" angeglichen (identisch mit Paketseite und `/nrw-foerderung/`).
2. V5 nachgezogen: Startseite (Service-Karte, Vergleichstabelle, JSON-LD) und
   `llms.txt` sprachen noch vom „Security-One-Pager" bzw. „Investoren-One-Pager".
   Jetzt überall „Kurzzusammenfassung für Investoren- und Kundengespräche" –
   wie auf der Paketseite selbst.
3. Förder-Vorbehalt ergänzt auf `starter-paket`, `red-team-plus` und
   `awareness-training-fuer-kmu`: „Angaben vorbehaltlich Bewilligung, die Vergabe
   erfolgt per Losverfahren; maßgeblich sind die Konditionen der NRW.BANK."
   Diese drei Seiten nannten Förderquote bzw. Förderfähigkeit ohne Vorbehalt.

**Darstellung** (alle Seiten sind jetzt bei 320/390/480/560/768/1024/1440 px frei von
horizontalem Scrollen, vorher an sieben Stellen nicht)

4. `nrw-foerderung` + `quick-scan`: Die Kenndaten-Kacheln standen unter 480 px in zwei
   Spalten, wodurch „15.000 €" die Seite seitwärts aufzog. Jetzt eine Spalte unter
   480 px, kleinere Kennzahl unter 768 px, Spalten als `minmax(0, 1fr)`.
5. `assets/css/base.css`: `h1, h2, h3` erhalten `overflow-wrap: break-word` – lange
   Komposita („Verbraucherstreitbeilegung/Universalschlichtungsstelle" im Impressum)
   ragten bis 768 px über den Rand hinaus.
6. `assets/css/base.css`: `.upgrade-box .btn` wird unter 600 px volle Breite statt
   `flex-shrink: 0` – der Upgrade-CTA ragte auf schmalen Displays hinaus.
7. `awareness-training-fuer-kmu` + `blog/index.html`: `minmax(350px, 1fr)` →
   `minmax(min(350px, 100%), 1fr)`; dazu auf dem Handy weniger Innenabstand und
   kleinere Modul-Überschriften.
8. Paketseiten: `.pricing-big` auf dem Handy 2,2 rem, geschütztes Leerzeichen
   zwischen Betrag und „€/Monat" – der Preis brach vorher als „449" / „€/Monat" um.

## Offene Punkte für die Geschäftsführung

- **E1–E4** (Stundensatz, Notfallplan-Light, Code Review Sprint, IR-Bereitschaft,
  Vor-Ort-Aufschlag) stehen weiter als „auf Anfrage" auf der Website.
- **E5** Förderfähigkeit von Abo und Onboarding-Pauschale mit der NRW.BANK klären.
- **V3–V7** bestätigen, dann die Zielformulierungen einsetzen.
- Die visuelle Endabnahme auf echten Geräten bleibt beim Auftraggeber.
