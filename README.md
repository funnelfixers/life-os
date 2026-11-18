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

### Schermen (`services/life-os-web`)
De leesbare bron is `app.html` (plus `sw.js`). `index.ts` wordt gegenereerd: na een wijziging
`cd services/life-os-web && node build-web.mjs` draaien en `index.ts` mee committen. Let op: `ramble`
past op de HTML nog tekst-patches toe (`WEB_PATCHES` in `services/ramble/index.ts`); die moeten op
`app.html` blijven matchen.

### Dagplanning (timeblocks)
Het dagritme komt uit `ramble` (`SCHEDULE`, of een eigen indeling per dag in `days.plan`). Elk blok heeft
een `id` en een `done`-vlag (`days.plan_done`). De schermen vinken blokken af (`POST /api/plan/done`) en
slaan een aangepaste indeling op (`POST /api/plan`, hele lijst; lege lijst = standaarddag). Loopt een blok
uit, dan schuift de app de volgende blokken in het scherm door en stuurt de nieuwe lijst op.

## Werkwijze
1. Maak een branch, wijzig de code en open een PR naar `main`.
2. Merge de PR; Railway bouwt en deployt de betreffende service.
3. Gaat een build mis? Dan blijft de vorige deployment gewoon draaien.
