# Paketdaten M2 Cybersec (Referenz)

> **Single Source of Truth für alle Seiten.** Inhaltlich identisch mit Abschnitt 1 aus
> `prompts/umsetzungsplan-pakete.md`. Weicht eine Seite hiervon ab, ist die Seite falsch.
>
> Stand: 16.09.2026 · Alle Preise netto zzgl. USt.

## Getroffene Entscheidungen für die Umsetzung

**Platzhalter E1–E4** sind offen. Auf der Website steht überall **„auf Anfrage“**
(Code Review Sprint: „Festpreis auf Anfrage“). Betroffen: Stundensatz für
Due-Diligence-/Fragebogen-Service, Notfallplan-Light, Code Review Sprint (2 T / 3 T),
Incident-Response-Bereitschaft, Vor-Ort-Aufschlag.

**Go-Live-Voraussetzungen V1–V7:**

| ID | Leistung | Status | Formulierung auf der Website |
|---|---|---|---|
| V1 | E-Learning „Security-Basics“ | **bestätigt** | Zielformulierung: E-Learning (30–45 Min), bis 10 Personen |
| V2 | Monitoring monatlich / wöchentlich | **bestätigt** | Zielformulierung mit Frequenzangabe |
| V3 | Sofortalarm (Scale) | offen | Übergang: „Zeitnahe Meldung kritischer Änderungen“ |
| V4 | Security-Starter-Kit | offen | Übergang: Punkt wird **weggelassen** |
| V5 | Security-One-Pager | offen | Übergang: „Kurzzusammenfassung für Investoren- und Kundengespräche“ |
| V6 | Kundenportal / Ticket | offen | Übergang: „per E-Mail“ statt „im Kundenportal“ / „per Ticket“ |
| V7 | Online-Onboarding-Formular | offen | Übergang: „Kurzes Onboarding-Gespräch“ |

Anrede bleibt je Seite wie bisher (E7): Startup Shield „ihr/euch“, alle anderen „Sie“.
Red-Team- und Pentest-Preise bleiben unverändert (E6).

---

## 1. Zielbild: Die neuen Pakete (Single Source of Truth)

Alle Preise netto zzgl. USt. Laufzeit jeweils 12 Monate.

### 1.1 Überblick

| | **Startup Shield** | **Growth Guard** | **Scale Secure** |
|---|---|---|---|
| Zielgruppe | Gründer:innen, MVP, erste Kunden | Startups nach Finanzierung, erste Enterprise-Kunden, KMU | Tech-Teams mit eigener Entwicklung, hohe Nachweispflichten |
| Preis/Monat | **149 €** | **449 €** | **ab 1.290 €** |
| Jahresvorauszahlung | **1.490 €** (statt 1.788 €, 2 Monate gespart) | **4.490 €** (statt 5.388 €, 2 Monate gespart) | – |
| Einrichtung | keine Einrichtungsgebühr | keine Einrichtungsgebühr | **Onboarding-Pauschale ab 1.500 €** (einmalig, Rahmen 1.500–2.500 € je nach Umfang) |
| Jahreswert (monatlich) | 1.788 € | 5.388 € | 15.480 € (+ Onboarding) |
| Systeme | 1 Domain (bis 10 Subdomains) + 1 Web-App oder API | bis 3 Systeme | bis 6 Systeme, jedes weitere **+129 €/Monat** |
| Volle Security-Checks | 1× pro Jahr | 2× pro Jahr (halbjährlich) | 4× pro Jahr (quartalsweise) |
| Testtiefe | unauthentifiziert | authentifiziert, 1 Rolle | authentifiziert, bis 2 Rollen |
| Automatisches Monitoring | monatlich, extern | wöchentlich, extern | wöchentlich, extern, mit Sofortalarm |
| Re-Test | Add-on (190 €) | 1 je Check (kritisch/hoch) | 1 je Check (alle Schweregrade, ein Durchgang) |
| Report | automatisch erzeugt, max. 5 Seiten | Report je Check + monatlicher Statusbericht | Report je Check + monatlicher CVSS-Report mit Trend und Management-Seite |
| Menschlicher Kontakt | 1 Ergebniscall/Jahr (30 Min) | Quartalscall (30 Min) | Quartals-Steering (60 Min) |
| SLA | – | – | 24 h Rückmeldung zu kritischen Findings (Werktage, 9–18 Uhr) |
| Mitarbeitende | E-Learning „Security-Basics“ (bis 10 Personen) | 1 Live-Session remote (bis 15 Personen) + 1 Phishing-Kampagne (bis 50 Empfänger) | 3 Live-Sessions (je bis 30 Personen) + 2 Phishing-Kampagnen |
| Nachweise | Security-One-Pager für Investoren/Kunden | Jährliches Nachweispaket + 1 Fragebogen/Jahr (bis 2 h) | Nachweispaket + Notfallplan (inkl. jährl. Update) + 1 Architektur-Review/Jahr |
| Beratungskontingent | – | 2 h pro Quartal | 4 h pro Quartal |
| Support | E-Mail, Antwort in 3 Werktagen | E-Mail, fester Ansprechpartner | Ticket/E-Mail + fester Ansprechpartner |

Kontingente verfallen am Quartalsende bzw. nicht genutzte Checks am Ende der Vertragslaufzeit. Ab ca. 10 Systemen: individuelles Angebot.

### 1.2 Startup Shield – 149 €/Monat

**Positionierung:** Der bezahlbare Einstieg in Cybersecurity für Startups. In 30 Tagen etwas Vorzeigbares für Investoren und erste Kunden.

**Enthalten:**
- Einfaches Onboarding per Formular (Domain, Tech-Stack, Ansprechpartner, schriftliche Testfreigabe)
- 1 Security-Check pro Jahr: 1 Domain (bis 10 Subdomains) + 1 Web-App oder API, unauthentifiziert. Automatisiert geprüft, kritische und hohe Findings manuell verifiziert
- Report (max. 5 Seiten), CVSS-bewertet, innerhalb von 5 Werktagen nach Abschluss des Checks
- 30-minütiger Ergebniscall
- Monatliches externes Monitoring mit E-Mail-Hinweis bei neuen offenen Diensten, ablaufenden Zertifikaten und Fehlern bei E-Mail-Sicherheit (SPF, DKIM, DMARC)
- Monatlicher Lagebericht, gefiltert nach eurem Tech-Stack: relevante CVEs, Bedrohungslage, Tipp des Monats
- Security-Starter-Kit (einmalig): Baseline-Checkliste, Vorlage für Passwort-/MFA-Richtlinie, Notfallkarte
- Security-One-Pager: kompakte Zusammenfassung des Checks für Investoren- und Kundengespräche
- E-Learning „Security-Basics“ (30–45 Min) für bis zu 10 Personen
- Support per E-Mail, Antwort innerhalb von 3 Werktagen

**Nicht enthalten:** Pentest, Live-Schulung, Phishing-Simulation, Re-Test, Beantwortung von Due-Diligence- oder Sicherheitsfragebögen, individuelle Beratung.

**Add-ons:**
| Add-on | Preis |
|---|---|
| Re-Test | 190 € |
| Awareness+ Live-Session | 490 € |
| Zusätzliche Web-App/API | 49 €/Monat |
| Due-Diligence-/Fragebogen-Service | `{{STUNDENSATZ}}` €/Stunde |
| Pentest | individuelles Angebot |

**Upgrade-Hinweis auf der Seite:** „Erster Enterprise-Kunde verlangt Nachweise? Team wächst? → Growth Guard“

### 1.3 Growth Guard – 449 €/Monat

**Positionierung:** Für Startups und KMU, die erste größere Kunden haben und regelmäßig Nachweise liefern müssen.

**Enthalten:**
- 2 volle Security-Checks pro Jahr (halbjährlich), bis 3 Systeme, authentifiziert mit 1 Rolle. Automatisiert geprüft, Findings manuell verifiziert und priorisiert
- Wöchentliches externes Monitoring aller Systeme; kritische Funde werden manuell geprüft und gemeldet
- 1 Re-Test je Check für kritische und hohe Findings
- Monatlicher Statusbericht: offene und behobene Findings, Trend, relevante CVEs
- Quartalscall (30 Min) mit festem Ansprechpartner
- 1 Awareness-Live-Session pro Jahr, remote, bis 15 Personen, mit Teilnahmezertifikaten
- 1 Phishing-Simulation pro Jahr (bis 50 Empfänger) mit Auswertung
- Jährliches Nachweispaket: Management-Zusammenfassung der Maßnahmen, geordnet nach typischen Anforderungen von Kunden und Cyberversicherern
- 1 Kunden- oder Versicherer-Fragebogen pro Jahr (bis 2 Stunden Aufwand)
- Beratungskontingent: 2 Stunden pro Quartal (verfällt am Quartalsende)

**Nicht enthalten:** Code Review, Notfallplan, weitere Fragebögen, branchenspezifische Anpassung von Schulungen, Vor-Ort-Termine, Umsetzung von Maßnahmen, Rechtsberatung.

**Add-ons:**
| Add-on | Preis |
|---|---|
| Zusätzliches System | 99 €/Monat |
| Weitere Awareness+ Session | 490 € |
| Notfallplan-Light (Festpreisprojekt) | `{{PREIS_NOTFALLPLAN_LIGHT}}` € |
| Weitere Fragebögen | `{{STUNDENSATZ}}` €/Stunde |
| Vor-Ort-Termin | `{{AUFSCHLAG_VOR_ORT}}` € |
| Pentest | individuelles Angebot |

**Upgrade-Hinweis auf der Seite:** „Eigenes Dev-Team, mehr als 3 Systeme oder Kunden fordern Notfallplan und Reaktionszeiten? → Scale Secure“

### 1.4 Scale Secure – ab 1.290 €/Monat + Onboarding

**Positionierung:** Security-Partnerschaft mit klaren Leistungen für Unternehmen mit eigener Entwicklung und hohen Nachweispflichten.

**Onboarding (einmalig, ab 1.500 €):**
- Aufnahme von Scope und Architektur
- Notfallplan auf Basis einer bewährten Vorlage, gemeinsam in einem Workshop erarbeitet
- Einrichtung des Monitorings

**Enthalten:**
- 4 Security-Checks pro Jahr (quartalsweise), bis 6 Systeme, authentifiziert mit bis zu 2 Rollen
- Wöchentliches Monitoring mit Sofortalarm bei kritischen Änderungen
- 1 Re-Test je Check, alle Schweregrade, in einem Durchgang
- Monatlicher CVSS-Report mit Trend und Management-Seite
- Quartals-Steering-Call (60 Min)
- 1 Architektur-Review-Workshop pro Jahr (halber Tag, anhand von Dokumentation und Diagrammen)
- Jährliches Update des Notfallplans
- 3 Awareness-Live-Sessions pro Jahr, je bis 30 Personen
- 2 Phishing-Simulationen pro Jahr
- 24-h-Rückmeldung zu kritischen Findings aus unseren Checks (Werktage, 9–18 Uhr). **Keine Incident Response.**
- Beratungskontingent: 4 Stunden pro Quartal (verfällt am Quartalsende)
- Fester Ansprechpartner, Kommunikation über E-Mail/Ticket

**Nicht enthalten:** Quellcode-Review, Pentest, Incident Response, ISO-27001-Begleitung, DSGVO-Dokumentation (VVT, DSFA), Umsetzung von Maßnahmen, Rechtsberatung.

**Add-ons:**
| Add-on | Preis |
|---|---|
| Zusätzliches System | 129 €/Monat |
| Code Review Sprint (2 oder 3 Tage, Festpreis) | `{{PREIS_CODE_REVIEW_2T}}` € / `{{PREIS_CODE_REVIEW_3T}}` € |
| Weitere Awareness-Gruppe | 390 € |
| Incident-Response-Bereitschaft | `{{PREIS_IR}}` |
| ISO-27001-Readiness (Projekt) | individuelles Angebot |
| Red Team | individuelles Angebot |

**Hinweis auf der Seite:** „Mehr als 10 Systeme oder vCISO-Bedarf? Wir erstellen ein individuelles Angebot.“

### 1.5 Unveränderte Produkte

- **Awareness+ Training:** 490 €/Session, bis 25 Personen, 90 Minuten. Bleibt unverändert.
- **Quick-Scan:** kostenlos. Bleibt unverändert, der nächste Schritt verweist weiterhin auf Startup Shield.
- **Red Team Lite / Plus / Pro, Pentest:** in diesem Auftrag nicht ändern (siehe E6).

### 1.6 NRW-Förderung – neue Rechenbeispiele

Rechnungen geprüft, Beträge netto:

| Beispiel | Volumen | Zuschuss bis 50 % | Effektiv |
|---|---|---|---|
| Startup Shield 12 Monate | 1.788 € | nicht förderfähig (unter 8.000 €) | – |
| Growth Guard 12 Monate | 5.388 € | allein nicht förderfähig | – |
| Growth Guard 24 Monate | 10.776 € | − 5.388 € | 5.388 € (≈ 224,50 €/Monat) |
| Scale Secure 12 Monate (Abo ohne Onboarding) | 15.480 € | − 7.740 € | 7.740 € (≈ 645 €/Monat) |

Ob die Onboarding-Pauschale förderfähig ist, ist offen (E5). Daher im Beispiel **nicht** einrechnen.

---
