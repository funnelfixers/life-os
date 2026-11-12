// VYTL schermen: serveert app.html en sw.js. Let op: ramble past app.html aan via exacte
// tekstvervangingen (WEB_PATCHES in services/ramble/index.ts); houd die in sync bij wijzigingen.
const dir = import.meta.dir;
const HTML = await Bun.file(`${dir}/app.html`).text();
const SW = await Bun.file(`${dir}/sw.js`).text();
Bun.serve({
  port: Number(Bun.env.PORT || 3000),
  fetch(req) {
    if (new URL(req.url).pathname === "/sw.js") return new Response(SW, { headers: { "Content-Type": "text/javascript" } });
    return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },
});
console.log("VYTL schermen draaien");
