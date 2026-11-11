// Wekker voor de Life OS-coach: draait elke 5 minuten en laat de app check-ins versturen die aan de beurt zijn.
const url = `${Bun.env.APP_URL || "https://ramble-production-0db5.up.railway.app"}/api/cron`;
const res = await fetch(url, { method: "POST", headers: { "x-app-key": Bun.env.APP_KEY || "" } });
console.log(res.status, await res.text());
