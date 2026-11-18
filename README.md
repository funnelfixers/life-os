# VYTL / Life OS – AI-coach

Broncode van de services in het Railway-project **ai-coach**. Railway deployt automatisch vanaf `main`:
een PR mergen = live zetten.

| Map | Railway-service | Wat |
|---|---|---|
| `services/ramble` | `ramble` | API-server + coach (Anthropic, push, Postgres) |
| `services/life-os-web` | `life-os-web` | Schermen (HTML/PWA) |
| `services/checkin-cron` | `checkin-cron` | Elke 5 min `POST /api/cron` op ramble |

Elke service heeft een eigen `railway.json` (start-commando, cron en watch-paths), zodat een wijziging
in één map alleen die service opnieuw deployt. Geheimen staan alleen in de Railway-variabelen, niet in deze repo.

Lokaal draaien: `cd services/<service> && bun install && PORT=3000 bun index.ts`.

## Werkwijze
1. Maak een branch, wijzig de code en open een PR naar `main`.
2. Merge de PR; Railway bouwt en deployt de betreffende service.
3. Gaat een build mis? Dan blijft de vorige deployment gewoon draaien.

## Google Calendar: blokken volgen de taken

Een taak die je inplant (slepen op de agenda, "Taak" toevoegen, de weekplanning of de coach) wordt één blok in
de **doelagenda** (Instellingen → Google Calendar, standaard je hoofdagenda; kies daar bijv. "My week"), met
één melding 10 minuten vooraf (`REMIND_MIN`), los van de standaard van die agenda. Daarna houdt `services/ramble`
de blokken gelijk aan de taak:

- Dezelfde taak op dezelfde dag en tijd nog eens inplannen (of de weekplanning twee keer vastleggen) maakt geen
  tweede blok; de weekplanning vervangt de blokken van een taak die nog moesten komen.
- Hernoemen, eerste stap of blok-type wijzigen → de titel en beschrijving in de agenda gaan mee.
- Plandatum verzetten of doorschuiven → de blokken die nog moesten komen verhuizen mee.
- Een blok slepen in de agenda → de plandatum van de taak wordt de dag van haar eerste blok.
- Afvinken of archiveren → blokken die nog niet begonnen zijn verdwijnen; wat al liep blijft als geschiedenis.
  Verwijderen haalt alle blokken weg.
- Elke dag (eerste cron-tik na middernacht), bij elke deploy en met Instellingen → **Opschonen** wordt de
  hele agenda nagelopen: dubbele blokken, blokken van afgeronde of verwijderde taken en oude titels worden
  rechtgezet (ook de melding van 10 minuten) en blokken die nog in een andere agenda staan verhuizen naar de doelagenda (`POST /api/google/sync`).

De doelagenda wordt altijd gelezen voor het dagoverzicht, ook als hij in het agenda-filter uit staat. Zonder
Google-koppeling gelden dezelfde regels voor de lokale blokken (tabel `blocks`).
