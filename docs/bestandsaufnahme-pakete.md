# Bestandsaufnahme: Neue Paketstruktur

Stand: 16.09.2026 · Branch `feature/neue-paketstruktur` · Grundlage: `prompts/umsetzungsplan-pakete.md` (Phase 0)

## 1. Projektstruktur

- **Reines statisches HTML/CSS/JS.** Kein Generator, kein Build, kein npm, keine Templates mit Includes.
  → Phase 1, Punkt 3 gilt: keine Datendatei, keine Build-Logik. `docs/pakete.md` wird die Referenz, Werte werden manuell gepflegt.
- Das einzige Template (`templates/blog.html`) betrifft nur Blogartikel und enthält keine Paketdaten.
- Geteiltes CSS in `assets/css/base.css`, seitenspezifisches CSS inline je Seite.
- Relevante Dateien: `index.html`, `starter-paket/index.html`, `growth-paket/index.html`,
  `scale-paket/index.html`, `nrw-foerderung/index.html`, `awareness-training-fuer-kmu/index.html`,
  `penetrationstest-kmu/index.html`, `quick-scan/index.html`, `sicherheit-fuer-kmu/index.html`,
  `cra-meldepflicht/index.html`, `red-team-plus/index.html`, `cybersecurity/*/index.html` (27 Seiten),
  `blog/*.html`, `sitemap.xml`, `llms.txt`, `robots.txt`.
- **Strukturierte Daten (JSON-LD) mit Paketpreisen:**
  - `index.html` – `ProfessionalService` mit `hasOfferCatalog` (drei `Offer` mit `price`), `FAQPage`, `WebSite`, `Person`
  - `starter-paket/`, `growth-paket/`, `scale-paket/` – je `Service` + `Offer` mit `price` und `BreadcrumbList`
  - `awareness-training-fuer-kmu/` – `Service` + `Offer` (490 €, bleibt)
  - Keine `Product`-Typen im Einsatz.

## 2. Fundstellen

### 2.1 Alte Preise und Rechenbeispiele

| Datei | Zeile | Fundstelle | Geplante Änderung | Phase |
|---|---|---|---|---|
| `growth-paket/index.html` | 8 | `meta description` „349 €/Monat. 3 Security-Checks … Compliance-Dokumentation“ | Neue Description (449 €, 2 Checks) | 3 |
| `growth-paket/index.html` | 9 | `meta keywords` „349 Euro Monat“, „Compliance“ | „449 Euro Monat“ | 3 |
| `growth-paket/index.html` | 14 | `og:description` „349 €/Monat – 3× Security-Checks“ | Neue Fassung | 3 |
| `growth-paket/index.html` | 18 | `<title>` „· 349 €/Monat“ | „· 449 €/Monat“ | 3 |
| `growth-paket/index.html` | 32 | JSON-LD `Service.description` | Neue Fassung | 3/7 |
| `growth-paket/index.html` | 52, 57 | JSON-LD `Offer.price` = 349 | 449 | 3/7 |
| `growth-paket/index.html` | 457 | Hero-Preis „349 €/Monat“ | 449 €/Monat + Zahlungszeile | 3 |
| `growth-paket/index.html` | 458 | „keine Einrichtungsgebühr“ | bleibt (gilt für Growth) | 3 |
| `growth-paket/index.html` | 479 | Kennzahl „349 €“ | 449 € | 3 |
| `growth-paket/index.html` | 549–554 | Förderrechnung 4.188 / 8.376 / 174,50 | 5.388 / 10.776 / 5.388 / 224,50 | 3 |
| `growth-paket/index.html` | 572 | Pricing-Box „349 €/Monat“ | 449 €/Monat | 3 |
| `growth-paket/index.html` | 582 | Next-Link „Scale Secure – 749 €/Monat“ | „ab 1.290 €/Monat“ | 3 |
| `scale-paket/index.html` | 8, 9, 13, 14, 18, 32 | Meta/Title/JSON-LD „749 €“, „Code Review“, „Vollständige Security-Partnerschaft“ | Neue Fassungen, „Code Review“ aus Keywords | 4/7 |
| `scale-paket/index.html` | 52, 57 | JSON-LD `Offer.price` = 749 | 1290 + `priceSpecification` mit `minPrice` | 4/7 |
| `scale-paket/index.html` | 456, 457 | Hero-Claim + „749 €/Monat“ | Neuer Claim, „ab 1.290 €/Monat“ + Zusatzzeile | 4 |
| `scale-paket/index.html` | 458 | „keine Einrichtungsgebühr“ | ersetzen: Onboarding-Pauschale ab 1.500 € | 4 |
| `scale-paket/index.html` | 479 | Kennzahl „749 €“ | „ab 1.290 €“ | 4 |
| `scale-paket/index.html` | 559–565 | Förderrechnung 8.988 / 4.494 / 374,50 | 15.480 / 7.740 / 645 + Onboarding-Hinweis | 4 |
| `scale-paket/index.html` | 582 | Pricing-Box „749 €/Monat“ | „ab 1.290 €/Monat“ | 4 |
| `scale-paket/index.html` | 591 | Prev-Link „← Growth Guard – 349 €/Monat“ | „449 €/Monat“ | 4 |
| `starter-paket/index.html` | 602 | Next-Link „Growth Guard – 349 €/Monat“ | „449 €/Monat“ | 2 |
| `index.html` | 1605, 1609 | JSON-LD Offer Growth `price` 349 | 449 | 5/7 |
| `index.html` | 1631, 1635 | JSON-LD Offer Scale `price` 749 | 1290 (+ `minPrice`) | 5/7 |
| `index.html` | 1892 | Tabelle „Im Abo enthalten (149–749 €/Monat)“ | „(ab 149 €/Monat)“ | 5 |
| `index.html` | 1932, 1942 | Service-Karten „349 €/Monat“, „749 €/Monat“ | 449 € / ab 1.290 € + neue Beschreibungstexte | 5 |
| `index.html` | 1968, 1969 | Vergleichstabelle Kopfzeilen | Neue Preise | 5 |
| `index.html` | 2013 | „Förderfähig (8.988 €/Jahr)“ | „(15.480 €/Jahr)“ | 5 |
| `index.html` | 2152, 2153 | FAQ-Antwort mit 349/749 und „drei Checks“ | 449 / ab 1.290, 1/2/4 Checks | 5 |
| `index.html` | 1766 ff. | NRW-Box mit „8.988 €“ | 15.480 € | 5 |
| `llms.txt` | 23, 24 | Growth „349 €“/3 Checks, Scale „749 €“/„5+ Systeme“/Code Review | Neue Beschreibungen | 7 |

### 2.2 Gestrichene Formulierungen

| Datei | Zeile | Fundstelle | Geplante Änderung | Phase |
|---|---|---|---|---|
| `starter-paket/index.html` | 14, 481 | „Fertig in 5 Werktagen“ | „Report 5 Werktage nach dem Check“ | 2 |
| `starter-paket/index.html` | 534 | „immer auf eure Situation zugeschnitten“ | „gefiltert nach eurem Tech-Stack“ | 2 |
| `scale-paket/index.html` | 487, 501, 502, 550 | „5+ Systeme“, „5 oder mehr“ | „bis 6 Systeme, weitere gegen Aufpreis“ | 4 |
| `scale-paket/index.html` | 508, 553 | „Code Review & Architektur-Check“ | „Architektur-Review-Workshop“, Code Review als Add-on | 4 |
| `scale-paket/index.html` | 516 | „kein Ticketsystem, kein Callcenter“ | „fester Ansprechpartner“ | 4 |
| `scale-paket/index.html` | 522, 523 | „gesamtes Team“, „ohne Teilnehmerbegrenzung“ | „je bis 30 Personen“ | 4 |
| `scale-paket/index.html` | 529, 530 | „Maßgeschneiderter Notfallplan“, „zugeschnitten“ | „auf Basis einer bewährten Vorlage, gemeinsam erarbeitet“ | 4 |
| `scale-paket/index.html` | 536, 537 | „Re-Tests sind inklusive“ (unbegrenzt) | „1 Re-Test je Check“ | 4 |
| `scale-paket/index.html` | 13, 456 | „Vollständige Security-Partnerschaft“ | „Security-Partnerschaft für Tech-Teams“ | 4 |
| `scale-paket/index.html` | 551 | „ISO 27001 oder NIS2-Compliance“ (Ideal für) | Nachweis-Formulierung | 4 |
| `growth-paket/index.html` | 516 | „branchenspezifisch anpassbar“ | streichen | 3 |
| `growth-paket/index.html` | 529, 530, 539 | „Compliance-Dokumentation“, „direkt nutzbar als Nachweis für DSGVO, NIS2“ | „Nachweispaket …“ | 3 |
| `index.html` | 1624 | JSON-LD Scale-Beschreibung mit „5+“, „Code Review“, „gesamtes Team“ | Neu | 5/7 |
| `index.html` | 1983, 1989, 2000, 2007 | Vergleichstabelle „5+“, „gesamtes Team“, „Compliance-Dokumentation“, „Code Review“ | Tabelle nach 1.1 neu aufbauen | 5 |
| `index.html` | 1917, 1961 | „ohne Einrichtungsgebühr“ (pauschal) | „Startup Shield und Growth Guard ohne Einrichtungsgebühr“ | 5 |
| `index.html` | 1450, 1498, 1543/1546, 2154, 2278, 2384–2402 | FAQ-Texte (sichtbar + JSON-LD) | gemäß Phase 5, Punkt 7 | 5 |
| `llms.txt` | 23, 24 | „5+ Systeme“, „Code Review“, „gesamtes Team“ | Neu | 7 |

### 2.3 Weitere Seiten

| Datei | Zeile | Fundstelle | Geplante Änderung | Phase |
|---|---|---|---|---|
| `awareness-training-fuer-kmu/index.html` | 413 | „In Growth Guard und Scale Secure sind Schulungen … enthalten“ | präzisieren: 1 Session (Growth) / 3 Sessions (Scale) | 6 |
| `awareness-training-fuer-kmu/index.html` | 421 | „Add-on zu jedem Abo-Paket“ | Satz aus Phase 6 ergänzen | 6 |
| `awareness-training-fuer-kmu/index.html` | 420 | „branchenspezifisch“ | bleibt (Einzelprodukt, laut 3.1 erlaubt) | – |
| `nrw-foerderung/index.html` | 322, 383, 426, 427 | Verweise auf Growth/Scale, Mindestvolumen | Beispielrechnungen nach 1.6 ergänzen/prüfen | 6 |
| `penetrationstest-kmu/index.html` | 368, 421 | „ab 149 €/Monat“ | bleibt korrekt | – |
| `quick-scan/index.html` | 470, 479 | Verweis auf Startup Shield | bleibt korrekt | – |
| `sicherheit-fuer-kmu/index.html` | 8, 33, 390 | „ab 149 €/Monat“, „Startup Shield für 149 €“ | bleibt korrekt, Leistungsbeschreibung prüfen | 6 |
| `cybersecurity/*/index.html` (27) | ~8, 14, 284 | „ab 149 €/Monat“, Paketnamen ohne Einzelpreise | bleibt korrekt – keine Änderung nötig | – |
| `cra-meldepflicht/index.html` | – | keine Preis- oder Paketangaben | keine Änderung | – |
| `red-team-plus/index.html` | 14, 755, 793, 835, 859 | „wie echte Angreifer“, „zugeschnitten“, „Re-Test“, „branchenspezifisch“ | **Ausnahme:** Red-Team-Kontext, laut E6/Phase 6 unverändert | – |
| `blog/nis2-richtlinie.html` | 300 | „Growth Guard … Compliance-Dokumentation“, „Scale Secure … Code Reviews und einen Notfallplan“ | anpassen (Nachweispaket / Architektur-Review) | 6 |
| `blog/cve-2026-33826-…html` | 621 | Verweis auf Startup Shield ohne Preis | keine Änderung | – |
| `blog/it-budget-cybersecurity.html` | 298 | „149“ nur im Fließtext-Beispiel, kein Paketpreis | prüfen | 6 |
| `blog/cybersecurity-audit.html` | 266 | „branchenspezifisch“ ohne Paketbezug | keine Änderung | – |
| `blog/ransomware-2026.html` | 8, 20, 34, 305 | „Notfallplan“ ohne Paketbezug | keine Änderung | – |
| `sitemap.xml` | alle geänderten Seiten | `lastmod` | aktualisieren | 7 |

### 2.4 Suchbegriffe ohne Treffer

`4188`, `4494`, `8988`, `149-749`, „Pentest pro Jahr“, „Externer Pentest“ – keine Fundstellen.
„349“ in `rechtliches/*.html` und `cybersecurity/*/index.html` ist ausschließlich die
Telefonnummer `+49 221 94334961` (Falsch-Treffer).

## 3. Offene Punkte vor Phase 2

- Go-Live-Voraussetzungen **V1–V7** (Abschnitt 2.2 des Plans) sind noch nicht bestätigt.
- Platzhalter **E1–E4** (Stundensatz, Notfallplan-Light, Code Review Sprint, IR/Vor-Ort) sind offen.
