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
