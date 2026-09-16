# Übergabe: Neue Paketstruktur

Stand: 16.09.2026 · Branch `feature/neue-paketstruktur` · Phasen 0–8 abgeschlossen

Grundlage: `prompts/umsetzungsplan-pakete.md` (Auftrag, Abschnitt A).
Referenz für alle Inhalte: [`docs/pakete.md`](pakete.md).
Prüfprotokoll: [`docs/qs-phase8.md`](qs-phase8.md).
Ausgangslage: [`docs/bestandsaufnahme-pakete.md`](bestandsaufnahme-pakete.md).

Kurzfassung der inhaltlichen Umstellung: Growth Guard 349 € → 449 €/Monat,
Scale Secure 749 € → ab 1.290 €/Monat mit einmaliger Onboarding-Pauschale ab
1.500 €, Startup Shield unverändert 149 €/Monat. Dazu überall klare
Leistungsgrenzen statt offener Zusagen (Systemzahl, Teilnehmerzahl, Re-Tests,
Kontingente) und „Security-Check“ statt „Pentest“ im Abo-Kontext.
URLs wurden nicht geändert.

---

## 1. Geänderte Dateien

14 Dateien geändert, 3 neu angelegt (`git diff --stat main...HEAD`: 17 Dateien,
+1127 / −213 Zeilen).

### Seiten

| Datei | Phase | Was geändert wurde |
|---|---|---|
| `index.html` | 5, 7, 8 | NRW-Banner (15.480 € statt 8.988 €), Preiszeile „ab 149 €/Monat“, Einrichtungsgebühr-Hinweis, drei Paketkarten, Vergleichstabelle mit 16 Zeilen neu, FAQ-Reihenfolge im `FAQPage`-Markup, JSON-LD-Offers (149 / 449 / 1290 mit `minPrice`), V5-Formulierung |
| `starter-paket/index.html` | 2, 4, 8 | Leistungen und Grenzen nach `docs/pakete.md`, Add-on-Tabelle, „Gut zu wissen“, Cross-Link zu Growth Guard, Förder-Vorbehalt, Preis-Umbruch mobil |
| `growth-paket/index.html` | 3, 4, 7, 8 | 449 €/Monat, Leistungsgrenzen, Add-on-Tabelle, Nachweispaket statt Compliance-Doku, `meta keywords`, Preis-Umbruch mobil |
| `scale-paket/index.html` | 4, 8 | ab 1.290 €/Monat, Onboarding-Pauschale, bis 6 Systeme, Architektur-Review-Workshop statt Code Review, 24-h-Rückmeldung ohne IR-Zusage, Förderbetrag 7.740 €, Preis-Umbruch mobil |
| `awareness-training-fuer-kmu/index.html` | 6, 8 | Enthaltene Sessions je Paket konkret benannt, Förder-Vorbehalt, Modul-Grid mobil |
| `nrw-foerderung/index.html` | 6, 8 | Abschnitt „Was das für unsere Pakete bedeutet“ mit vier Rechnungen, Hinweis-Box (Onboarding nicht eingerechnet, Losverfahren), Kenndaten-Kacheln mobil |
| `quick-scan/index.html` | 8 | Kenndaten-Kacheln mobil |
| `red-team-plus/index.html` | 8 | Förder-Vorbehalt |
| `blog/nis2-richtlinie.html` | 6 | „Compliance-Dokumentation“ → „jährliches Nachweispaket“, „Code Reviews“ → „Architektur-Review-Workshop“ |
| `blog/index.html` | 8 | Kartenraster mobil |

### Technik und Metadaten

| Datei | Phase | Was geändert wurde |
|---|---|---|
| `assets/css/base.css` | 2, 3, 4, 8 | Komponenten für die Paketseiten (u. a. Add-on-Tabelle, Note-Box), `overflow-wrap: break-word` für h1–h3, `.upgrade-box .btn` unter 600 px volle Breite |
| `llms.txt` | 7, 8 | Alle drei Pakete vollständig neu beschrieben, NRW- und Awareness+-Zeile, V5-Formulierung |
| `sitemap.xml` | 7 | `lastmod` der sieben geänderten Seiten auf 2026-09-16 |
| `robots.txt` | 1 | `/docs/` per `Disallow` blockiert |

### Neu angelegt

| Datei | Phase | Zweck |
|---|---|---|
| `docs/pakete.md` | 1 | Single Source of Truth für alle Paketdaten |
| `docs/bestandsaufnahme-pakete.md` | 0 | Ausgangslage: wo welche alten Preise und Formulierungen standen |
| `docs/qs-phase8.md` | 8 | Prüfprotokoll mit 13 Checklistenpunkten und allen Korrekturen |

### Unverändert, weil bereits korrekt

`/quick-scan/` (inhaltlich), `/penetrationstest-kmu/`, `/sicherheit-fuer-kmu/`,
`/cra-meldepflicht/`, die 27 Regionalseiten unter `/cybersecurity/` (nennen nur
„ab 149 €/Monat“ und Paketnamen ohne Einzelpreise) sowie die Blog-Artikel zu
IT-Budget und CVE-2026-33826.

---

## 2. Offene Platzhalter E1–E7 mit Fundstellen

Kein Platzhalter `{{…}}` ist auf der Website sichtbar – überall steht eine
Ersatzformulierung. Sobald eine Entscheidung fällt, muss nur die genannte Zeile
ersetzt werden.

| ID | Entscheidung | Fundstelle | Steht dort aktuell |
|---|---|---|---|
| E1 | `{{STUNDENSATZ}}` Due-Diligence-/Fragebogen-Service | `starter-paket/index.html:628`, `growth-paket/index.html:594` | „nach Aufwand, auf Anfrage“ |
| E2 | `{{PREIS_NOTFALLPLAN_LIGHT}}` | `growth-paket/index.html:590` | „auf Anfrage“ |
| E3 | `{{PREIS_CODE_REVIEW_2T}}` / `{{PREIS_CODE_REVIEW_3T}}` | `scale-paket/index.html:599` | „Festpreis auf Anfrage“ |
| E4 | `{{PREIS_IR}}` (Incident-Response-Bereitschaft) | `scale-paket/index.html:603` | „auf Anfrage“ |
| E4 | `{{AUFSCHLAG_VOR_ORT}}` | `growth-paket/index.html:598` | „auf Anfrage“ |
| E5 | Förderfähigkeit von Abo und Onboarding-Pauschale (NRW.BANK) | `nrw-foerderung/index.html` (Hinweis-Box), Förder-Boxen auf allen drei Paketseiten, `red-team-plus`, `awareness-training-fuer-kmu` | Vorbehalte gesetzt, Onboarding ausdrücklich **nicht** eingerechnet |
| E6 | Preis Red Team Lite „ab 3.500 €“ | `index.html:1784`, `index.html:1893` | unverändert übernommen |
| E7 | Anrede vereinheitlichen | Startup Shield duzt („ihr/euch“), alle übrigen Seiten siezen | je Seite unverändert belassen |

---

## 3. Verwendete Übergangsformulierungen V1–V7

V1 und V2 waren bestätigt – dort steht die Zielformulierung. V3 bis V7 sind offen;
dort steht die Übergangsformulierung aus Abschnitt 2.2 des Umsetzungsplans.

| ID | Status | Formulierung auf der Website | Fundstellen |
|---|---|---|---|
| V1 E-Learning „Security-Basics“ | bestätigt | Ziel: „Kompaktes E-Learning (30–45 Minuten) für bis zu 10 Personen“ | `starter-paket`, `index.html` (Vergleichstabelle), `llms.txt` |
| V2 Monitoring | bestätigt | Ziel: mit Frequenz – monatlich (Startup, Growth) / wöchentlich (Scale) | alle drei Paketseiten, `index.html`, `llms.txt` |
| V3 Sofortalarm (Scale) | **offen** | Übergang: „kritische Änderungen zeitnah gemeldet“; der Begriff „Sofortalarm“ kommt nirgends vor | `scale-paket/index.html:525`, `index.html:2013` |
| V4 Security-Starter-Kit | **offen** | Übergang: Punkt komplett weggelassen – kein Treffer auf der Website | – |
| V5 Security-One-Pager | **offen** | Übergang: „Kurzzusammenfassung für Investoren- und Kundengespräche“ | `starter-paket/index.html:550`, `index.html:1572` (JSON-LD), `index.html:1924`, `index.html:2059`, `llms.txt` (Zeile 21) |
| V6 Kundenportal / Ticket | **offen** | Übergang: „per E-Mail“; „Ticket“ und „Kundenportal“ kommen im Abo-Kontext nicht vor | `starter-paket/index.html:650`, `growth-paket/index.html:625`, `scale-paket/index.html:634` |
| V7 Online-Onboarding-Formular | **offen** | Übergang: „in einem kurzen Onboarding-Gespräch“ | `starter-paket/index.html:654`; Scale Secure: Onboarding-Workshop (`scale-paket/index.html:500 ff.`) |

Wird eine Voraussetzung bestätigt, ersetzt die Zielformulierung aus
`docs/pakete.md` die Übergangsformulierung – und zwar an **allen** oben genannten
Fundstellen gleichzeitig, inklusive `llms.txt` und JSON-LD.

---

## 4. Stellen mit `<!-- TODO: rechtliche Prüfung -->`

Vier Marker im HTML, jeweils direkt vor dem Abschnitt, der Leistungsgrenzen,
Verfall und Mitwirkungspflichten formuliert:

| Datei | Zeile | Abschnitt |
|---|---|---|
| `starter-paket/index.html` | 646 | „Gut zu wissen“ – Verfall des Security-Checks, Report-Frist ab Zugängen, Support-Reaktionszeit |
| `growth-paket/index.html` | 618 | „Gut zu wissen“ – Verfall der Beratungsstunden am Quartalsende, Report-Frist, Mitwirkung bei der Phishing-Simulation |
| `scale-paket/index.html` | 499 | „Onboarding“ – einmalige Pauschale ab 1.500 €, Umfang abhängig vom Scope |
| `scale-paket/index.html` | 626 | „Gut zu wissen“ – Verfall der Beratungsstunden, 24-h-Rückmeldung ausdrücklich **ohne** Incident-Response-Zusage, Report-Frist |

Die Marker sind HTML-Kommentare und für Besucher unsichtbar. Sie bleiben stehen,
bis die anwaltliche Prüfung erfolgt ist – danach entfernen.

---

## 5. Blog-Artikel, bei denen eine Entscheidung nötig war

| Artikel | Entscheidung | Begründung |
|---|---|---|
| `blog/nis2-richtlinie.html` | Aussage **aktualisiert**, kein Preis-Stand-Hinweis | Der Artikel nannte Leistungen („Compliance-Dokumentation“, „Code Reviews“), die es so nicht mehr gibt, aber keine Preise. Ein Stand-Hinweis hätte nichts gerettet, deshalb der Text angepasst: „jährliches Nachweispaket“ und „Architektur-Review-Workshop“ |
| `blog/it-budget-cybersecurity.html` | **unverändert** | Nennt „Security-Abos ab 149 €/Monat“ – der Einstiegspreis hat sich nicht geändert, die Aussage bleibt richtig |
| `blog/cve-2026-33826-…-patch.html` | **unverändert** | Verweist auf den Security-Check in Startup Shield und auf den Pentest als eigene Vertiefung – genau die neue Abgrenzung |
| übrige 6 Artikel | **unverändert** | Nennen weder Paketnamen noch Preise (geprüft per Volltextsuche) |

Kein Artikel hat einen „Preise Stand …“-Hinweis erhalten, weil nach dieser
Durchsicht kein Artikel einen Abo-Preis nennt. Bei neuen Artikeln bleibt die
Regel: Preise nur auf den Paketseiten, im Blog auf `/starter-paket/` &
Co. verlinken.

---

## 6. Hinweise für die Geschäftsführung

### 6.1 Vor dem Go-Live zu klären

**AGB und Leistungsbeschreibung an die neuen Grenzen anpassen lassen.**
Die Website formuliert jetzt Grenzen, die vertraglich hinterlegt sein müssen,
sonst weicht das Versprechen auf der Seite vom Vertrag ab:

- **Verfall von Kontingenten** – Beratungsstunden verfallen am Quartalsende, ein
  nicht genutzter Security-Check am Ende der Vertragslaufzeit
- **Mitwirkungspflichten** – die Report-Frist beginnt erst, wenn Zugänge und
  Freigaben vollständig vorliegen; die Phishing-Simulation setzt Allowlisting
  durch die IT des Kunden voraus; für jeden Check braucht es eine schriftliche
  Testfreigabe
- **SLA-Definition** – die 24-h-Rückmeldung bei Scale Secure gilt für kritische
  Findings **aus unseren Checks**, werktags 9–18 Uhr, und ist ausdrücklich keine
  Incident Response. Das muss der Vertrag genauso eng fassen
- **Scope-Änderungen** – Systemobergrenzen (1 Domain + 1 App bei Startup Shield,
  bis 6 Systeme bei Scale Secure) und die Aufpreise für zusätzliche Systeme
  gehören in die Leistungsbeschreibung, samt Verfahren für Scope-Erweiterungen
  während der Laufzeit
- **Onboarding-Pauschale Scale Secure** – „ab 1.500 €, abhängig vom Umfang“
  braucht eine Regel, wie der konkrete Betrag ermittelt und vereinbart wird

Die vier `TODO: rechtliche Prüfung`-Marker aus Abschnitt 4 markieren genau die
Textstellen, die dabei mit dem Vertrag abgeglichen werden sollten.

**Förderfähigkeit mit der NRW.BANK klären (E5).**
Offen ist, ob ein monatliches Abo und die einmalige Onboarding-Pauschale unter
MID-Digitale Sicherheit förderfähig sind. Bis das geklärt ist, steht auf
`/nrw-foerderung/` und allen Paketseiten der Vorbehalt „vorbehaltlich
Bewilligung, Vergabe per Losverfahren, maßgeblich sind die Konditionen der
NRW.BANK“, und die Onboarding-Pauschale ist in keiner Beispielrechnung
enthalten. Fällt die Auskunft positiv aus, können die Rechnungen in
Abschnitt 1.6 von `docs/pakete.md` erweitert werden.

**Bestandskunden.**
Die Website-Änderung berührt laufende Verträge nicht – dort gelten die
vereinbarten Preise und Leistungen bis zum Ende der Laufzeit. Festzulegen ist,
was zur Verlängerung passiert: Überführung in die neue Struktur zum neuen Preis,
Bestandsschutz für eine weitere Periode, oder ein Übergangsrabatt. Betroffen
sind vor allem Growth-Guard-Kunden (349 € → 449 €) und Scale-Secure-Kunden
(749 € → ab 1.290 € plus Onboarding). Eine Ansprache sollte vorliegen, bevor die
neuen Preise live gehen, weil Bestandskunden die Seite sehen.

### 6.2 Was nach Freigabe noch zu tun ist

1. Branch `feature/neue-paketstruktur` nach `main` mergen und pushen
2. Geänderte Seiten per IndexNow melden (Befehl in `CLAUDE.md`), Sitemap in der
   Google Search Console erneut einreichen
3. Visuelle Endabnahme auf echten Geräten – die Prüfung in Phase 8 lief mit
   simulierten Breiten von 320 bis 1440 px
4. `CLAUDE.md` nachziehen: die Paketstruktur-Tabelle dort nennt noch 349 € und
   749 € (bewusst erst nach dem Merge, damit die Doku dem Live-Stand folgt)
