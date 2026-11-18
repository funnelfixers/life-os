// Bouwt index.ts uit app.html en sw.js: `node build-web.mjs`. Railway heeft een limiet op de bestandsgrootte,
// daarom gaan de schermen gecomprimeerd (gzip + base64) mee in index.ts. Bewerk app.html en sw.js, nooit index.ts.
import fs from "node:fs";
import zlib from "node:zlib";
const dir = new URL(".", import.meta.url).pathname;
const read = (f) => fs.readFileSync(dir + f, "utf8");
const pack = (s) => zlib.gzipSync(Buffer.from(s), { level: 9 }).toString("base64");
const out = `// GEGENEREERD door build-web.mjs uit app.html en sw.js (gecomprimeerd i.v.m. Railway-limiet). Bewerk app.html, niet dit bestand. Build ${new Date().toISOString()}
const unz = (s) => new TextDecoder().decode(Bun.gunzipSync(Buffer.from(s, "base64")));
const HTML = unz("${pack(read("app.html"))}");
const SW = unz("${pack(read("sw.js"))}");
Bun.serve({ port: Number(Bun.env.PORT || 3000), fetch(req) {
if (new URL(req.url).pathname === "/sw.js") return new Response(SW, { headers: { "Content-Type": "text/javascript" } });
return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
} });
console.log("VYTL schermen draaien");
`;
fs.writeFileSync(dir + "index.ts", out);
console.log("index.ts geschreven:", out.length, "bytes");
