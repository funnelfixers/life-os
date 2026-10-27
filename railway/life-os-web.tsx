// Life OS schermen: gegenereerd door build.ts. Leesbare bron: src/app.html en src/sw.js.
const HTML = `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Life OS">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0c0c0c" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon.png">
<title>Life OS</title>
<style>:root{--bg:#ffffff;--fg:#111111;--muted:#8d8d8d;--card:#ffffff;--line:#ededed;--soft:#f6f6f6;--accent:#111111;--accent-soft:#f6f6f6;--ok:#111111;--ok-bg:#111111;--rec:#e5484d}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0c0c0c;--fg:#ededed;--muted:#7a7a7a;--card:#0c0c0c;--line:#1f1f1f;--soft:#161616;--accent:#ededed;--accent-soft:#161616;--ok:#ededed;--ok-bg:#ededed}
}
:root[data-theme="dark"]{--bg:#0c0c0c;--fg:#ededed;--muted:#7a7a7a;--card:#0c0c0c;--line:#1f1f1f;--soft:#161616;--accent:#ededed;--accent-soft:#161616;--ok:#ededed;--ok-bg:#ededed}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.5 -apple-system,BlinkMacSystemFont,"SF Pro Text","Inter",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
button,input,textarea,select{font:inherit;color:inherit}
main{max-width:560px;margin:0 auto;padding:calc(env(safe-area-inset-top) + 28px) 20px calc(env(safe-area-inset-bottom) + 170px)}
section[data-screen]{display:none}
section.on{display:block}
h1{font-size:24px;font-weight:600;margin:0 0 2px;letter-spacing:-0.02em}
h2{font-size:13px;color:var(--muted);margin:36px 0 10px;font-weight:500}
.sub{color:var(--muted);margin:0 0 20px;font-size:14px}
.card{background:none;border:0;border-radius:0;padding:0}
.card + .card{margin-top:12px}
.stack{display:grid;gap:16px}
ul{list-style:none;padding:0;margin:0}
.muted{color:var(--muted)}
.small{font-size:13px}
.row{display:flex;align-items:center;gap:10px}
.grow{flex:1;min-width:0}
.btn{height:40px;padding:0 16px;border-radius:99px;border:1px solid var(--line);background:none;font-weight:500;font-size:14px;cursor:pointer}
.btn:hover{border-color:var(--muted)}
.btn.primary,.btn.accent{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.btn:disabled{opacity:.3}
.link{background:none;border:0;color:var(--muted);font-size:14px;padding:4px 0;cursor:pointer}
.link:hover{color:var(--fg)}
textarea,input[type=text],input[type=date]{width:100%;padding:0;border:0;border-radius:0;background:none;font-size:17px;line-height:1.5}
textarea{min-height:100px;max-height:40vh;resize:none}
textarea:focus,input:focus{outline:none}
textarea::placeholder,input::placeholder{color:var(--muted);opacity:.7}
.status{color:var(--muted);font-size:13px;min-height:20px;margin:8px 0}
.meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;font-size:12px;color:var(--muted)}
.tag{padding:0;background:none;white-space:nowrap}
.tag + .tag::before{content:"·";margin-right:8px}
.tag.today{color:var(--fg)}
.now{padding:0}
.now .label{color:var(--muted);font-size:13px}
.now .title{font-size:20px;font-weight:600;margin:2px 0}
.now .next{color:var(--muted);font-size:14px}
.habits{display:flex;flex-wrap:wrap;gap:6px}
.habit{border:1px solid var(--line);background:none;border-radius:99px;padding:6px 12px;cursor:pointer;user-select:none;transition:background .15s,color .15s}
.habit .ic{display:none}
.habit .nm{font-size:13px;font-weight:400;line-height:1.2}
.habit.on{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.progress{height:1px;background:var(--line);overflow:hidden;margin:0 0 14px}
.progress div{height:100%;width:0;background:var(--fg);transition:width .3s}
.task{display:flex;gap:12px;align-items:flex-start;padding:12px 0;position:relative;transition:transform .2s,opacity .2s;touch-action:pan-y}
.task + .task{border-top:1px solid var(--line)}
.check{flex:none;width:18px;height:18px;border-radius:50%;border:1.5px solid var(--muted);background:none;margin-top:3px;display:grid;place-items:center;color:var(--bg);font-size:10px;cursor:pointer;padding:0}
.task.done .check{background:var(--fg);border-color:var(--fg)}
.task.done .t{text-decoration:line-through;color:var(--muted)}
.t{font-weight:400}
.s{color:var(--muted);font-size:13px;margin-top:2px}
.list{padding:0;overflow:hidden}
.x{flex:none;width:28px;height:28px;border:0;background:none;color:var(--muted);font-size:18px;border-radius:6px;cursor:pointer;opacity:.5}
.x:hover{opacity:1}
.star{flex:none;width:28px;height:28px;border:0;background:none;font-size:14px;border-radius:6px;cursor:pointer;opacity:.2;filter:grayscale(1)}
.star.on{opacity:1}
.empty{padding:12px 0;color:var(--muted);font-size:14px}
.sched li{display:flex;gap:10px;padding:5px 0;font-size:14px;color:var(--muted)}
.sched li.cur{color:var(--fg)}
.sched .tm{width:92px;flex:none;font-variant-numeric:tabular-nums}
#chat{display:flex;flex-direction:column;gap:14px}
.bubble{max-width:86%;white-space:pre-wrap;word-wrap:break-word}
.bubble.assistant{align-self:flex-start}
.bubble.user{align-self:flex-end;color:var(--muted);text-align:right}
.divider{align-self:center;font-size:12px;color:var(--muted);margin-top:10px}
.typing{align-self:flex-start;color:var(--muted);font-size:14px}
.chips{display:flex;gap:6px;overflow-x:auto;padding:2px 0 8px;scrollbar-width:none}
.chip{flex:none;height:30px;padding:0 12px;border-radius:99px;border:1px solid var(--line);background:none;font-size:13px;cursor:pointer;color:var(--muted)}
.chip:hover{color:var(--fg)}
.chip.on{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.composer{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom) + 52px);padding:10px 20px;background:var(--bg);display:none}
.composer.on{display:block}
.composer .in{max-width:560px;margin:0 auto;display:flex;gap:8px;align-items:flex-end}
.composer textarea{min-height:40px;height:40px;max-height:140px;padding:8px 0;font-size:16px;border-bottom:1px solid var(--line)}
.round{width:40px;height:40px;flex:none;border-radius:50%;border:1px solid var(--line);background:none;font-size:14px;cursor:pointer;display:grid;place-items:center}
.round.send{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.round.mic::after,.bigmic::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--rec)}
.round.mic.on,.bigmic.on{color:var(--rec);border-color:var(--rec);animation:pulse 1.4s infinite}
.round.mic.on::after,.bigmic.on::after{display:none}
@keyframes pulse{50%{box-shadow:0 0 0 8px rgba(229,72,77,.12)}
}
.actionbar{position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom) + 52px);padding:12px 20px 16px;display:none;justify-content:center;gap:16px;align-items:center;background:linear-gradient(transparent,var(--bg) 40%)}
.actionbar.on{display:flex}
.bigmic{width:60px;height:60px;border-radius:50%;border:1px solid var(--line);background:var(--bg);font-size:18px;cursor:pointer;display:grid;place-items:center}
.bigmic::after{width:16px;height:16px}
.bigmic:hover{border-color:var(--muted)}
nav.tabbar{position:fixed;left:0;right:0;bottom:0;background:var(--bg);border-top:1px solid var(--line);padding-bottom:env(safe-area-inset-bottom);z-index:10}
nav.tabbar .in{max-width:560px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr)}
nav.tabbar button{height:52px;border:0;background:none;color:var(--muted);font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative}
nav.tabbar button .i{display:none}
nav.tabbar button.on{color:var(--fg)}
nav.tabbar .dot{position:absolute;top:14px;right:calc(50% - 26px);width:5px;height:5px;border-radius:50%;background:var(--rec);display:none}
.area{padding:14px 0;border-top:1px solid var(--line)}
.area .head{display:flex;align-items:center;gap:10px;cursor:pointer}
.area .em{display:none}
.area .nm{font-weight:500;flex:1}
.score{font-variant-numeric:tabular-nums;color:var(--muted)}
.dots{display:flex;gap:4px;margin-top:10px}
.dots button{flex:1;height:26px;border-radius:6px;border:1px solid var(--line);background:none;font-size:12px;cursor:pointer;padding:0;color:var(--muted)}
.dots button.on{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.area .body{display:none;margin-top:12px}
.area.open .body{display:grid;gap:8px}
.area label{font-size:12px;color:var(--muted)}
.area textarea{min-height:60px;font-size:14px}
.goal{padding:8px 0;border-top:1px solid var(--line);display:flex;gap:10px;align-items:center}
.bar{height:2px;background:var(--line);overflow:hidden;width:60px;flex:none}
.bar div{height:100%;background:var(--fg)}
.seg{display:flex;gap:16px;margin:4px 0 10px;overflow-x:auto}
.seg button{flex:none;height:28px;padding:0;border:0;background:none;font-size:14px;cursor:pointer;color:var(--muted)}
.seg button.on{color:var(--fg);box-shadow:inset 0 -1px var(--fg)}
#jPreview{display:none;max-width:100%;max-height:220px;border-radius:8px;margin-top:10px}
.entry{cursor:pointer}
.banner{border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:12px}
.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom) + 140px);background:var(--fg);color:var(--bg);padding:8px 14px;border-radius:99px;font-size:13px;z-index:20;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw}
.toast.on{opacity:1}
.wiz{position:fixed;inset:0;z-index:30;background:var(--bg);display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}
.wiz.on{display:block}
.wiz .in{max-width:560px;margin:0 auto;padding:calc(env(safe-area-inset-top) + 24px) 20px calc(env(safe-area-inset-bottom) + 24px)}
.wiz h1{font-size:22px}
.wiz label{display:block;font-weight:500;margin:20px 0 6px}
.wiz .q{position:relative}
.wiz .q textarea{min-height:76px;padding-right:52px;border-bottom:1px solid var(--line)}
.wiz .q .round{position:absolute;right:0;bottom:8px;width:34px;height:34px}
.wiz .wnav{position:sticky;bottom:0;background:var(--bg);padding:12px 0 calc(env(safe-area-inset-bottom) + 4px);margin-top:16px}
.chips.wrap{flex-wrap:wrap;overflow:visible}
.wheel{display:grid;gap:12px}
.wheel .wr{display:grid;grid-template-columns:24px 1fr 52px;gap:8px;align-items:center;font-size:14px}
.wheel .wb{height:2px;background:var(--line);overflow:hidden}
.wheel .wb div{height:100%;background:var(--fg)}
.wheel .wn{display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:4px}
.ladder{font-size:14px;display:grid;gap:4px;margin:6px 0 2px}
.ladder b{font-weight:500}
.talk{position:fixed;inset:0;z-index:30;background:var(--bg);display:none;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:24px 24px calc(env(safe-area-inset-bottom) + 24px);text-align:center}
.talk.on{display:flex}
.orb{width:120px;height:120px;border-radius:50%;border:1px solid var(--line);background:none;font-size:36px;cursor:pointer;transition:transform .08s}
.orb.listening{border-color:var(--rec);animation:pulse 1.4s infinite}
.orb.thinking{opacity:.5;animation:breathe 1.6s infinite}
.orb.speaking{background:var(--fg);color:var(--bg);border-color:var(--fg)}
@keyframes breathe{50%{transform:scale(.92)}
}
.talk .state{font-size:15px;min-height:24px}
.talk .said{color:var(--muted);font-size:15px;max-width:520px;max-height:32vh;overflow:auto;white-space:pre-wrap}
.week{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.week button{min-width:0;border:0;background:none;border-radius:8px;padding:8px 2px;font-size:11px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;color:var(--muted)}
.week button b{font-size:14px;font-weight:500;color:var(--fg)}
.week button .w{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.week button.today b{text-decoration:underline;text-underline-offset:4px}
.week button.done b{color:var(--muted);text-decoration:line-through}
.week button.sel{background:var(--fg);color:var(--bg)}
.week button.sel b,.week button.sel .w{color:var(--bg)}
.ex{display:flex;gap:10px;align-items:center;padding:10px 0}
.ex + .ex{border-top:1px solid var(--line)}
.ex.done .check{background:var(--fg);border-color:var(--fg)}
.ex input{flex:none;width:80px;padding:4px 0;font-size:14px;border-bottom:1px solid var(--line)}
.card label{display:block}
kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:4px;padding:1px 5px}
.hotkey{display:none}
.vtabs{display:flex;justify-content:center;gap:22px;padding:0 20px;border-bottom:1px solid var(--line);flex:none}
.vtabs button{border:0;background:none;height:36px;padding:0;font-size:14px;color:var(--muted);cursor:pointer}
.vtabs button.on{color:var(--fg);box-shadow:inset 0 -1px var(--fg)}
section[data-screen="vandaag"].on{position:fixed;left:0;right:0;top:0;bottom:calc(env(safe-area-inset-bottom) + 52px);display:flex;flex-direction:column;padding-top:env(safe-area-inset-top);background:var(--bg)}
.pager{flex:1;min-height:0;display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain}
.pager::-webkit-scrollbar{display:none}
.pane{flex:0 0 100%;min-width:0;overflow-y:auto;scroll-snap-align:start;scroll-snap-stop:always;padding:24px 20px 80px;overscroll-behavior-y:contain}
.pj{border-top:1px solid var(--line)}
.pj-h{display:flex;align-items:center;gap:10px;width:100%;border:0;background:none;padding:14px 0;cursor:pointer;text-align:left}
.pj-h .nm{flex:1;font-weight:500}
.pj-h .chev{color:var(--muted);transition:transform .2s}
.pj.open .chev{transform:rotate(90deg)}
.pj-b{display:none;padding:0 0 8px 2px}
.pj.open .pj-b{display:block}
#pTasks .task,.ev.mine{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.task.lifted,.ev.lifted{opacity:.3}
.ghost{position:fixed;left:0;top:0;z-index:40;pointer-events:none;max-width:70vw;padding:8px 12px;border-radius:10px;background:var(--fg);color:var(--bg);font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cal{position:relative;margin:8px 0 0 44px;border-left:1px solid var(--line)}
.cal .hr{position:absolute;left:0;right:0;border-top:1px solid var(--line)}
.cal .hl{position:absolute;left:-44px;width:36px;text-align:right;font-size:11px;color:var(--muted);transform:translateY(-50%);font-variant-numeric:tabular-nums}
.cal .band{position:absolute;left:0;right:0;background:var(--soft);font-size:11px;color:var(--muted);padding:2px 8px;overflow:hidden;border-top:1px solid var(--bg)}
.cal .ev{position:absolute;border-radius:8px;padding:3px 8px;font-size:12px;line-height:1.3;overflow:hidden;background:var(--bg);border:1px solid var(--line);z-index:1}
.cal .ev .tm{color:var(--muted);font-size:11px}
.cal .ev.mine{background:var(--fg);color:var(--bg);border-color:var(--fg);padding-right:26px}
.cal .ev.mine .tm{color:var(--bg);opacity:.7}
.cal .ev .rs{position:absolute;left:0;right:0;bottom:0;height:16px;cursor:ns-resize;touch-action:none}
.cal .ev .rs::after{content:"";position:absolute;left:50%;bottom:4px;width:24px;height:3px;margin-left:-12px;border-radius:2px;background:currentColor;opacity:.5}
.cal .ev .del{position:absolute;top:0;right:0;width:28px;height:28px;border:0;background:none;color:inherit;opacity:.7;font-size:16px;cursor:pointer;padding:0}
.cal .nowl{position:absolute;left:-4px;right:0;border-top:2px solid var(--rec);z-index:2;pointer-events:none}
.cal .drop{position:absolute;left:4px;right:4px;border:1.5px dashed var(--fg);border-radius:8px;font-size:12px;padding:3px 8px;z-index:3;background:var(--bg);pointer-events:none;overflow:hidden}
@media (min-width:900px) and (hover:hover){
.vtabs,#pTasks,#pCal{display:none}
section[data-screen="vandaag"].on{position:static;display:block;padding:0}
.pager{display:block;overflow:visible}
.pane{padding:0;overflow:visible}
}
@media (min-width:900px) and (hover:hover){
.hotkey{display:block}
body{padding-left:180px}
main{padding-top:56px;padding-bottom:160px}
nav.tabbar{top:0;bottom:0;right:auto;width:180px;border-top:0;border-right:1px solid var(--line);padding:56px 0 0}
nav.tabbar .in{display:flex;flex-direction:column;gap:2px;padding:0 20px}
nav.tabbar button{height:34px;justify-content:flex-start;font-size:14px}
nav.tabbar button:hover{color:var(--fg)}
nav.tabbar .dot{top:15px;right:auto;left:-10px}
.composer,.actionbar{bottom:0;left:180px}
}
</style>
</head>
<body>
<main>
<!-- ========== VANDAAG ========== -->
<section data-screen="vandaag">
<div class="vtabs" id="vTabs"><button data-p="0">Taken</button><button data-p="1" class="on">Vandaag</button><button data-p="2">Agenda</button></div>
<div class="pager" id="vPager">
<div class="pane" id="pTasks">
<h1>Taken</h1>
<p class="sub">Houd een taak vast en sleep hem naar rechts, de agenda in.</p>
<div id="pjList"></div>
</div>
<div class="pane" id="pToday">
<h1 id="vGreeting">Goedemorgen</h1>
<p class="sub" id="vDate"></p>
<div id="vPush" class="card banner" hidden>
<div class="row"><div class="grow"><b>Meldingen aanzetten</b><div class="small muted">Dan krijg je je coach-check-ins op je telefoon.</div></div>
<button class="btn accent" id="vPushBtn">Aan</button></div>
</div>
<div id="vInstall" class="card banner" hidden>
<b>Zet Life OS op je beginscherm</b>
<div class="small muted">Safari → Deel-knop → "Zet op beginscherm". Daarna werken meldingen.</div>
</div>
<div id="vNow" class="card now" style="margin-top:20px" hidden></div>
<button class="link" id="vReplan" style="margin-top:8px">Plan gewijzigd? Vertel het →</button>
<h2>Ochtendroutine <span id="vHabitCount" class="muted"></span></h2>
<div class="progress"><div id="vHabitBar"></div></div>
<div class="habits" id="vHabits"></div>
<h2>Top 3 vandaag</h2>
<div class="card list" id="vTop3"></div>
<div class="row" style="margin-top:8px"><button class="link" data-go-coach="Help me mijn Top 3 voor vandaag kiezen.">Top 3 kiezen met coach →</button></div>
<div id="vLifeWrap" hidden>
<h2>1% leven vandaag</h2>
<div class="card list" id="vLife"></div>
<div class="row" style="margin-top:8px"><button class="link" id="vLifeSwap">Liever iets anders →</button></div>
</div>
<div id="vTrainWrap" hidden>
<h2>Training vandaag</h2>
<div class="card" id="vTrain" style="cursor:pointer"></div>
</div>
<div id="vCompassCta" class="card banner" style="margin-top:16px" hidden>
<b>Start je Levenskompas</b>
<div class="small muted">Kernwaarden en dromen per levensgebied. Daarna krijg je elke dag één kleine stap: 1% dichterbij.</div>
<button class="btn accent" data-compass style="margin-top:10px">Starten (±20 min)</button>
</div>
<div id="vOtherWrap" hidden>
<h2>Ook vandaag</h2>
<div class="card list" id="vOther"></div>
</div>
<div id="vEventsWrap" hidden>
<h2>Agenda</h2>
<div class="card"><ul class="sched" id="vEvents"></ul></div>
</div>
<div id="vSchedWrap">
<h2>Mijn dag <span id="vPlanTag" class="muted"></span></h2>
<div class="card"><ul class="sched" id="vSched"></ul></div>
</div>
</div>
<div class="pane" id="pCal">
<h1>Agenda</h1>
<p class="sub" id="calDate"></p>
<div id="calG" class="card banner small" hidden></div>
<div class="chips" id="calAll"></div>
<div class="cal" id="calGrid"></div>
</div>
</div>
</section>
<!-- ========== DUMP ========== -->
<section data-screen="dump">
<h1>Dump</h1>
<p class="sub">Tik op de microfoon en praat. Ik maak er taken van.<span class="hotkey small">Sneltoets: <kbd data-mod>⌘</kbd> <kbd>⇧</kbd> <kbd>Space</kbd> inspreken · <kbd data-mod>⌘</kbd> <kbd>↵</kbd> opslaan</span></p>
<textarea id="dText" placeholder="Of typ hier…"></textarea>
<div class="status" id="dStatus"></div>
<div class="card list" id="dTasks" hidden></div>
<div id="dDone"></div>
</section>
<!-- ========== COACH ========== -->
<section data-screen="coach">
<h1>Coach</h1>
<p class="sub">Je accountability partner. Kent je taken, habits, journal en doelen.</p>
<button class="link" id="cTalk" style="margin-bottom:16px">Praat met je coach →</button>
<div id="chat"></div>
</section>
<!-- ========== JOURNAL ========== -->
<section data-screen="journal">
<h1>Journal</h1>
<p class="sub">Praat, typ, of maak een foto van je geschreven pagina.</p>
<div class="small muted" style="margin-bottom:16px">
Hoe voel ik me en hoe heb ik geslapen? · 3 dingen waar ik dankbaar voor ben · Wat maakt vandaag een goede dag?
</div>
<textarea id="jText" style="min-height:170px" placeholder="Schrijf of spreek je journal in…"></textarea>
<img id="jPreview" alt="Foto van je journal">
<input id="jPhoto" type="file" accept="image/*" capture="environment" hidden>
<div class="status" id="jStatus"></div>
<div id="jResult"></div>
<h2>Eerder</h2>
<div class="stack" id="jList"></div>
</section>
<!-- ========== TRAINING ========== -->
<section data-screen="training">
<h1>Training</h1>
<p class="sub">Je weekschema. Vink af na je training, dan houdt je coach het bij.</p>
<h2>Deze week <span id="trCount" class="muted"></span></h2>
<div class="progress"><div id="trBar"></div></div>
<div class="week" id="trWeek"></div>
<div id="trDay" style="margin-top:12px"></div>
<div class="status" id="trStatus"></div>
<h2>Schema</h2>
<div class="card" id="trPlan"></div>
<h2>Recent</h2>
<div class="card list" id="trHist"></div>
</section>
<!-- ========== DOELEN ========== -->
<section data-screen="doelen">
<h1>Doelen</h1>
<p class="sub">Je levenskompas: waar sta je, wat droom je, en waar ben je al dankbaar voor.</p>
<div id="gCompass"></div>
<h2>Levenswiel</h2>
<div class="card wheel" id="gWheel"></div>
<h2>Gebieden</h2>
<div class="stack" id="gAreas"></div>
<h2>Alle taken</h2>
<div class="seg" id="gSeg">
<button data-st="today,doing" class="on">Vandaag</button>
<button data-st="inbox">Inbox</button>
<button data-st="later">Later</button>
<button data-st="done">Klaar</button>
</div>
<div class="card list" id="gTasks"></div>
</section>
</main>
<!-- Actiebalken -->
<div class="actionbar" id="dBar">
<button class="btn" id="dClear">Wis</button>
<button class="bigmic" id="dMic" aria-label="Opnemen"></button>
<button class="btn primary" id="dSave" disabled>Opslaan</button>
</div>
<div class="actionbar" id="jBar">
<button class="btn" id="jCam" aria-label="Foto">Foto</button>
<button class="bigmic" id="jMic" aria-label="Opnemen"></button>
<button class="btn primary" id="jSave">Opslaan</button>
</div>
<div class="composer" id="cBar">
<div class="in" style="flex-direction:column;align-items:stretch">
<div class="status" id="cStatus" style="margin:0 2px 6px;min-height:0"></div>
<div class="chips" id="cChips">
<button class="chip">Plan mijn dag</button>
<button class="chip">Ik zit vast</button>
<button class="chip">Ik heb geen zin</button>
<button class="chip">Dagreview</button>
<button class="chip">Weekreview</button>
</div>
<div class="in" style="width:100%">
<textarea id="cText" placeholder="Bericht aan je coach…" rows="1"></textarea>
<button class="round mic" id="cMic" aria-label="Inspreken"></button>
<button class="round send" id="cSend" aria-label="Versturen">↑</button>
</div>
</div>
</div>
<nav class="tabbar"><div class="in">
<button data-tab="vandaag"><span class="i">🏠</span>Vandaag</button>
<button data-tab="dump"><span class="i">🧠</span>Dump</button>
<button data-tab="coach"><span class="i">💬</span>Coach<span class="dot" id="coachDot"></span></button>
<button data-tab="journal"><span class="i">📓</span>Journal</button>
<button data-tab="training"><span class="i">🏋️</span>Training</button>
<button data-tab="doelen"><span class="i">🧭</span>Doelen</button>
</div></nav>
<div class="toast" id="toast"></div>
<div class="wiz" id="wiz"><div class="in">
<div class="row"><span class="small muted grow" id="wStep"></span><button class="x" id="wClose" aria-label="Sluiten">×</button></div>
<div id="wBody"></div>
<div class="status" id="wStatus"></div>
<div class="row wnav"><button class="btn" id="wBack">Terug</button><div class="grow"></div><button class="btn primary" id="wNext">Volgende</button></div>
</div></div>
<div class="talk" id="talk">
<div class="small muted" id="tMode"></div>
<button class="orb" id="tOrb" aria-label="Praten">🎙️</button>
<div class="state" id="tState"></div>
<div class="said" id="tText"></div>
<button class="btn" id="tStop">Gesprek stoppen</button>
</div>
<script>
(()=>{const params=new URLSearchParams(location.search);const store={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,
v)}catch{}}};let key=params.get("key");const inApp=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone;if(key){store.set("app-key",key);
if(inApp)history.replaceState(null,"",location.pathname+(params.get("tab")?"?tab="+params.get("tab"):""))}else key=store.get("app-key")||store.get("ramble-key");
if(key)document.querySelector('link[rel="manifest"]').href="manifest.json?key="+encodeURIComponent(key);const $=(id)=>document.getElementById(id);const el=(tag,cls,
text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e};function toast(msg){const t=$("toast");t.textContent=msg;
t.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("on"),2200)}async function api(path,body,method){const opts={method:method||(body===undefined?"GET":"POST"),
headers:{"x-app-key":key||""}};if(body!==undefined){opts.headers["Content-Type"]="application/json";opts.body=JSON.stringify(body)}const res=await fetch(path,opts);
const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||res.statusText);return data}const todayISO=()=>new Date().toLocaleDateString("sv-SE",
{timeZone:"Europe/Amsterdam"});const fmtDate=(d)=>new Date(d+"T12:00").toLocaleDateString("nl-NL",{weekday:"short",day:"numeric",month:"short"});const BLOK={"Deep work":"\\uD83C\\uDFAF Deep",
"Shallow work":"\\uD83D\\uDCE5 Shallow",Thuis:"\\uD83C\\uDFE0 Thuis"};const bars={dump:"dBar",journal:"jBar",coach:"cBar"};let current=null;function show(tab){if(!document.querySelector(\`section[data-screen="\${tab}"]\`))tab="vandaag";
current=tab;document.querySelectorAll("section[data-screen]").forEach((s)=>s.classList.toggle("on",s.dataset.screen===tab));document.querySelectorAll("nav.tabbar button").forEach((b)=>b.classList.toggle("on",
b.dataset.tab===tab));Object.entries(bars).forEach(([t,id])=>$(id).classList.toggle("on",t===tab));stopRec();if(sttServer===null)loadConfig();store.set("tab",tab);
if(tab==="vandaag")loadToday();if(tab==="coach"){loadChat();$("coachDot").style.display="none"}if(tab==="journal")loadJournalList();if(tab==="training")loadTraining();if(tab==="doelen"){loadAreas();
loadTasks()}window.scrollTo(0,tab==="coach"?document.body.scrollHeight:0)}document.querySelectorAll("nav.tabbar button").forEach((b)=>b.onclick=()=>show(b.dataset.tab));
document.addEventListener("click",(e)=>{const b=e.target.closest("[data-go-coach]");if(b){show("coach");$("cText").value=b.dataset.goCoach;autosize();$("cText").focus()}});
navigator.serviceWorker?.addEventListener("message",(e)=>{if(e.data?.type==="open")show(new URL(e.data.url,location.href).searchParams.get("tab")||"vandaag")});document.addEventListener("visibilitychange",
()=>{if(!document.hidden&&current)show(current)});const SR=window.SpeechRecognition||window.webkitSpeechRecognition;const canRecord=!!(window.MediaRecorder&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia);
let sttServer=null;let rec=null;const join=(...parts)=>parts.filter(Boolean).join(" ").replace(/\\s+/g," ").trim();const setStatus=(el,msg)=>{if(el)el.textContent=msg;
else if(msg)toast(msg)};const mmss=(ms)=>{const s=Math.floor(ms/1000);return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")};let ttsServer=null,configP=null;function loadConfig(){
if(key)configP=api("/api/config").then((c)=>{sttServer=c.stt;ttsServer=c.tts}).catch(()=>{})}loadConfig();function startRec(btn,ta,statusEl,onText){if(rec)stopRec();
if(sttServer&&canRecord)return startRecorder(btn,ta,statusEl,onText);if(SR)return startSpeech(btn,ta,statusEl,onText);ta.focus();setStatus(statusEl,"Tik in het tekstvak en gebruik de \\uD83C\\uDF99️ op je toetsenbord.")}async function stopRec(){
if(!rec)return;const st=rec;rec=null;await st.stop()}const recording=(btn)=>rec&&rec.btn===btn;function uiOn(st){st.btn.classList.add("on");st.btn.textContent="■";
if(navigator.vibrate)navigator.vibrate(10)}function uiOff(st){st.btn.classList.remove("on");st.btn.textContent=st.label}async function startRecorder(btn,ta,statusEl,
onText){const st={btn,label:btn.textContent,statusEl,kind:"recorder"};st.stop=async()=>{st.cancelled=true;uiOff(st)};rec=st;uiOn(st);let stream;try{stream=await navigator.mediaDevices.getUserMedia({
audio:{echoCancellation:true,noiseSuppression:true}})}catch(e){if(rec===st)rec=null;uiOff(st);setStatus(statusEl,"⚠️ Geen toegang tot de microfoon. Sta het toe via Instellingen → Safari → Microfoon.");
return}if(st.cancelled){stream.getTracks().forEach((t)=>t.stop());return}const type=["audio/mp4","audio/webm;codecs=opus","audio/webm","audio/ogg"].find((t)=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||"";
const mr=new MediaRecorder(stream,type?{mimeType:type}:undefined);const chunks=[];mr.ondataavailable=(e)=>{if(e.data&&e.data.size)chunks.push(e.data)};const t0=Date.now();
const tick=()=>setStatus(statusEl,"\\uD83D\\uDD34 Neemt op · "+mmss(Date.now()-t0)+" · tik ■ als je klaar bent");if(statusEl){tick();st.timer=setInterval(tick,500)}st.stop=()=>new Promise((resolve)=>{
clearInterval(st.timer);uiOff(st);mr.onstop=async()=>{stream.getTracks().forEach((t)=>t.stop());const blob=new Blob(chunks,{type:mr.mimeType||type||"audio/mp4"});
if(Date.now()-t0<700||blob.size<1000){setStatus(statusEl,"Te kort. Houd de opname iets langer aan.");return resolve()}btn.disabled=true;setStatus(statusEl,"✍️ Uitschrijven…");
try{const res=await fetch("/api/transcribe",{method:"POST",headers:{"x-app-key":key||"","Content-Type":blob.type},body:blob});const d=await res.json().catch(()=>({
}));if(!res.ok)throw new Error(d.error||res.statusText);if(d.text){ta.value=join(ta.value,d.text);ta.scrollTop=ta.scrollHeight;setStatus(statusEl,"");onText&&onText(true)}else setStatus(statusEl,
"Niks verstaan. Probeer het nog eens, iets dichter bij de microfoon.")}catch(e){setStatus(statusEl,"⚠️ "+e.message)}btn.disabled=false;resolve()};mr.stop()});mr.start()}function startSpeech(btn,
ta,statusEl,onText){const st={btn,label:btn.textContent,statusEl,kind:"speech",on:true,base:ta.value.trim(),committed:""};let r=null,sessionFinal="",done=null;const finish=()=>{
uiOff(st);ta.value=join(st.base,st.committed);onText&&onText(true);const d=done;done=null;if(d)d()};const begin=()=>{r=new SR;r.lang="nl-NL";r.continuous=true;r.interimResults=true;
sessionFinal="";r.onresult=(e)=>{let fin="",interim="";for(let i=0;i<e.results.length;i++){const t=e.results[i][0].transcript.trim();if(!t)continue;if(e.results[i].isFinal)fin=fin&&t.toLowerCase().startsWith(fin.toLowerCase())?t:join(fin,
t);else interim=t}if(interim&&fin&&interim.toLowerCase().startsWith(fin.toLowerCase()))interim=interim.slice(fin.length);sessionFinal=fin;ta.value=join(st.base,st.committed,
fin,interim);ta.scrollTop=ta.scrollHeight;onText&&onText(false)};r.onerror=(e)=>{if(e.error==="not-allowed"||e.error==="service-not-allowed"){st.on=false;setStatus(statusEl,
"⚠️ Spraak is geblokkeerd. Tik in het tekstvak en gebruik de \\uD83C\\uDF99️ op je toetsenbord.")}else if(e.error!=="no-speech"&&e.error!=="aborted")setStatus(statusEl,
"⚠️ Microfoon: "+e.error)};r.onend=()=>{st.committed=join(st.committed,sessionFinal);sessionFinal="";if(st.on){try{begin();return}catch{st.on=false}}if(rec===st)rec=null;
finish()};r.start()};st.stop=()=>new Promise((resolve)=>{done=resolve;st.on=false;try{r&&r.stop()}catch{finish()}setTimeout(()=>{if(done===resolve){done=null;finish();
resolve()}},1500)});try{begin()}catch(e){setStatus(statusEl,"⚠️ Spraak start niet. Gebruik de \\uD83C\\uDF99️ op je toetsenbord.");return}rec=st;uiOn(st);setStatus(statusEl,
"\\uD83C\\uDF99️ Luistert… tik ■ als je klaar bent")}function taskRow(t,opts={}){const li=el("div","task"+(t.status==="done"?" done":""));const ck=el("button","check",
t.status==="done"?"✓":"");ck.setAttribute("aria-label","Afvinken");if(opts.readonly)ck.disabled=true;else ck.onclick=async()=>{const done=t.status!=="done";t.status=done?"done":"today";
li.classList.toggle("done",done);ck.textContent=done?"✓":"";if(done&&navigator.vibrate)navigator.vibrate(20);try{await api(\`/api/tasks/\${t.id}\`,{status:t.status},
"PATCH");if(done)toast("Lekker bezig! ✅");opts.onChange&&opts.onChange()}catch(e){toast("⚠️ "+e.message)}};li.appendChild(ck);const body=el("div","grow");body.appendChild(el("div",
"t",t.title||t.taak));const step=t.first_step||t.eerste_stap;if(step)body.appendChild(el("div","s","→ "+step));const meta=el("div","meta");const area=t.area||t.gebied,
block=t.block||t.blok;if(t.vandaag)meta.appendChild(el("span","tag today","Vandaag"));if(area)meta.appendChild(el("span","tag "+area,area));if(block)meta.appendChild(el("span",
"tag",BLOK[block]||block));if(t.energy||t.energie)meta.appendChild(el("span","tag","⚡ "+(t.energy||t.energie)));if(t.deadline)meta.appendChild(el("span","tag","\\uD83D\\uDCC5 "+fmtDate(t.deadline)));
if(t.postponed>=2)meta.appendChild(el("span","tag warn",\`↻ \${t.postponed}× uitgesteld\`));if(meta.children.length)body.appendChild(meta);li.appendChild(body);if(opts.star){
const isTop=t.top3_date===todayISO();const s=el("button","star"+(isTop?" on":""),"⭐");s.setAttribute("aria-label","Top 3");s.onclick=()=>opts.star(t,!isTop);li.appendChild(s)}if(opts.onRemove){
const x=el("button","x","×");x.setAttribute("aria-label","Verwijder");const drop=()=>{li.style.opacity=0;li.style.transform="translateX(-60px)";setTimeout(opts.onRemove,
180)};x.onclick=drop;let x0=null;li.addEventListener("touchstart",(e)=>x0=e.touches[0].clientX,{passive:true});li.addEventListener("touchmove",(e)=>{if(x0!==null)li.style.transform=\`translateX(\${Math.min(0,
e.touches[0].clientX-x0)}px)\`},{passive:true});li.addEventListener("touchend",(e)=>{const dx=e.changedTouches[0].clientX-x0;x0=null;dx<-90?drop():li.style.transform=""});
li.appendChild(x)}return li}function fillList(container,tasks,opts,emptyText){container.innerHTML="";if(!tasks.length){container.appendChild(el("div","empty",emptyText));
return}tasks.forEach((t)=>container.appendChild(taskRow(t,opts)))}async function loadToday(){const h=new Date().getHours();$("vGreeting").textContent=h<12?"Goedemorgen":h<18?"Goedemiddag":"Goedenavond";
if(!key){$("vDate").textContent="Eenmalig: plak je persoonlijke link (of alleen de sleutel).";if(!$("vKey")){const box=el("div","row");box.id="vKey";box.style.marginBottom="12px";
const inp=el("input");inp.type="text";inp.placeholder="https://…?key=…";inp.autocapitalize="off";const b=el("button","btn accent","Openen");b.onclick=()=>{const v=inp.value.trim().replace(/^.*key=/,
"").replace(/[&#].*$/,"");if(v){store.set("app-key",v);location.replace("./?key="+encodeURIComponent(v))}};box.appendChild(inp);box.appendChild(b);$("vDate").after(box)}return}let o;
try{o=await api("/api/today")}catch(e){$("vDate").textContent="⚠️ "+e.message;return}$("vDate").textContent=o.label.charAt(0).toUpperCase()+o.label.slice(1);const nowEl=$("vNow");
if(o.block&&(o.block.now||o.block.next)){nowEl.hidden=false;nowEl.innerHTML="";const b=o.block.now;nowEl.appendChild(el("div","label",b?\`Nu · tot \${b.end}\`:"Straks"));
nowEl.appendChild(el("div","title",b?b.title:o.block.next.title));if(b&&o.block.next)nowEl.appendChild(el("div","next",\`Daarna \${o.block.next.start}: \${o.block.next.title}\`));
if(!b&&o.block.next)nowEl.appendChild(el("div","next",\`om \${o.block.next.start}\`))}else nowEl.hidden=true;const wrap=$("vHabits");wrap.innerHTML="";const doneCount=()=>o.habits.filter((x)=>x.done).length;
const updateBar=()=>{$("vHabitBar").style.width=Math.round(doneCount()/o.habits.length*100)+"%";$("vHabitCount").textContent=\`\${doneCount()}/\${o.habits.length}\`};o.habits.forEach((hb)=>{
const b=el("button","habit"+(hb.done?" on":""));b.appendChild(el("span","ic",hb.emoji));b.appendChild(el("span","nm",hb.name));b.onclick=async()=>{hb.done=!hb.done;
b.classList.toggle("on",hb.done);updateBar();if(hb.done&&navigator.vibrate)navigator.vibrate(15);if(hb.done&&doneCount()===o.habits.length)toast("\\uD83D\\uDD25 Routine compleet. Tijd voor deep work!");
try{await api("/api/habits",{id:hb.id,done:hb.done})}catch(e){hb.done=!hb.done;b.classList.toggle("on",hb.done);updateBar();toast("⚠️ "+e.message)}};wrap.appendChild(b)});
updateBar();fillList($("vTop3"),o.top3,{onChange:()=>{}},"Nog geen Top 3. Kies er max. 3 (⭐ bij Doelen → Alle taken), of laat je coach helpen.");$("vOtherWrap").hidden=!o.todayTasks.length;
fillList($("vOther"),o.todayTasks,{},"");$("vLifeWrap").hidden=!o.life;const tw=o.workout,ts=o.training[o.training.length-1],vt=$("vTrain");$("vTrainWrap").hidden=tw?!!tw.rest:!o.workday;vt.innerHTML="";vt.onclick=()=>show("training");
if(!tw){vt.appendChild(el("div","t","Nog geen trainingsschema"));vt.appendChild(el("div","s","Laat je coach er een maken →"))}else if(!tw.rest){const r=el("div","row"),b=el("div","grow");b.appendChild(el("div","t",tw.title+(tw.minutes?" · "+tw.minutes+" min":"")));
b.appendChild(el("div","s",tw.exercises.map((e)=>e.name).slice(0,4).join(" · ")||tw.focus||""));r.appendChild(b);r.appendChild(el("span","tag"+(ts&&ts.status==="gedaan"?" today":""),ts?ts.status==="gedaan"?"✅ Gedaan":ts.status==="overgeslagen"?"Overgeslagen":"Gepland":o.workday?"13:00":"Vandaag"));vt.appendChild(r)}$("vCompassCta").hidden=!!o.life||o.compass!==false;if(o.life)fillList($("vLife"),[o.life],
{onChange:()=>{}},"");$("vEventsWrap").hidden=!o.events.length;const ev=$("vEvents");ev.innerHTML="";o.events.forEach((x)=>{const li=el("li");li.appendChild(el("span",
"tm",x.start==="hele dag"?"hele dag":\`\${x.start}–\${x.end}\`));li.appendChild(el("span","",x.title));ev.appendChild(li)});$("vSchedWrap").hidden=!o.schedule.length;$("vPlanTag").textContent=o.customPlan?"· aangepast":"";
const sc=$("vSched");sc.innerHTML="";o.schedule.forEach((s)=>{const li=el("li",o.block.now&&o.block.now.start===s.start?"cur":"");li.appendChild(el("span","tm",\`\${s.start}–\${s.end}\`));
li.appendChild(el("span","",s.title));sc.appendChild(li)});pushBanner();vRender(o)}const AREA_EM={"Business":"🚀","Gezin & Eef":"👨‍👧‍👦","Gezondheid":"💪","Thuis":"🏠","Mezelf":"🌲","Vrienden":"🤝","Financiën":"💰"};const CAL0=6,CAL1=24,PPM=1;
const pager=$("vPager"),vTabs=$("vTabs"),pCal=$("pCal"),calGrid=$("calGrid");let vT=null,vEvents=[],vTasks=[],vPane=1,vInit=false,calScrolled=false,lp=null,drag=null;
const pmin=(s)=>Number(s.slice(0,2))*60+Number(s.slice(3,5));const hm2=(m)=>String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
function vGo(i,smooth){pager.scrollTo({left:i*pager.clientWidth,behavior:smooth===false?"auto":"smooth"})}vTabs.querySelectorAll("button").forEach((b)=>b.onclick=()=>vGo(Number(b.dataset.p)));
pager.addEventListener("scroll",()=>{const i=Math.round(pager.scrollLeft/Math.max(1,pager.clientWidth));if(i===vPane)return;vPane=i;vTabs.querySelectorAll("button").forEach((b)=>b.classList.toggle("on",Number(b.dataset.p)===i));
if(i===2)calToNow()},{passive:true});window.addEventListener("resize",()=>{if(pager.clientWidth)pager.scrollLeft=vPane*pager.clientWidth});
function vRender(o){vT=o;vEvents=o.events||[];if(!vInit&&pager.clientWidth){vInit=true;pager.scrollLeft=pager.clientWidth}renderCal();loadProjects()}
async function loadProjects(){try{vTasks=await api("/api/tasks")}catch(e){$("pjList").textContent="⚠️ "+e.message;return}renderProjects()}
function pjOpen(){try{return JSON.parse(store.get("pj-open")||"null")}catch{return null}}
function renderProjects(){const list=$("pjList"),saved=pjOpen(),open=new Set(saved||[]),blocked={};vEvents.forEach((e)=>{if(e.task)blocked[e.task]=e.start});list.innerHTML="";
const rank={doing:0,today:1,inbox:2,later:3};Object.keys(AREA_EM).concat(["Overig"]).forEach((name)=>{const tasks=vTasks.filter((t)=>(AREA_EM[t.area]?t.area:"Overig")===name).sort((a,b)=>rank[a.status]-rank[b.status]);
if(name==="Overig"&&!tasks.length)return;const isOpen=saved?open.has(name):tasks.some((t)=>t.status==="today"||t.status==="doing");const g=el("div","pj"+(isOpen?" open":"")),h=el("button","pj-h");
h.appendChild(el("span","",AREA_EM[name]||"📂"));h.appendChild(el("span","nm",name));h.appendChild(el("span","muted small",String(tasks.length)));h.appendChild(el("span","chev","›"));
h.onclick=()=>{g.classList.toggle("open");const now=new Set(pjOpen()||[...list.querySelectorAll(".pj.open .nm")].map((x)=>x.textContent));g.classList.contains("open")?now.add(name):now.delete(name);
store.set("pj-open",JSON.stringify([...now]))};const b=el("div","pj-b");if(!tasks.length)b.appendChild(el("div","empty","Geen open taken."));tasks.forEach((t)=>{
const li=taskRow(t,{onChange:()=>setTimeout(loadProjects,600)});if(blocked[t.id]){const m=li.querySelector(".meta")||li.querySelector(".grow").appendChild(el("div","meta"));
m.prepend(el("span","tag today","🗓 "+blocked[t.id]))}longPress(li,()=>({task:t,title:t.title,minutes:60}));b.appendChild(li)});g.appendChild(h);g.appendChild(b);list.appendChild(g)})}
function nowMin(){return pmin(new Date().toLocaleTimeString("nl-NL",{timeZone:"Europe/Amsterdam",hour:"2-digit",minute:"2-digit",hour12:false}))}
function calToNow(){if(calScrolled||!vT)return;calScrolled=true;const m=vT.date===todayISO()?nowMin():9*60;pCal.scrollTop=Math.max(0,calGrid.offsetTop+(m-60-CAL0*60)*PPM)}
function renderCal(){if(!vT)return;$("calDate").textContent=vT.label.charAt(0).toUpperCase()+vT.label.slice(1);const gb=$("calG"),g=vT.google||{};gb.hidden=!!g.connected;gb.innerHTML="";
if(!g.connected){gb.appendChild(el("div","muted",g.configured?"Blokken staan nu alleen in Life OS.":"Blokken worden in Life OS bewaard. Voor Google Calendar: zet GOOGLE_CLIENT_ID en GOOGLE_CLIENT_SECRET in Railway."));
if(g.configured){const a=el("a","link","Koppel Google Calendar →");a.href="/api/google/auth?key="+encodeURIComponent(key);gb.appendChild(a)}}
const all=$("calAll");all.innerHTML="";vEvents.filter((e)=>e.start==="hele dag").forEach((e)=>all.appendChild(el("span","chip",e.title)));all.hidden=!all.children.length;
const c=calGrid;c.innerHTML="";c.style.height=(CAL1-CAL0)*60*PPM+"px";for(let h=CAL0;h<=CAL1;h++){const y=(h-CAL0)*60*PPM+"px",l=el("div","hr");l.style.top=y;c.appendChild(l);
if(h<CAL1){const t=el("div","hl",String(h).padStart(2,"0")+":00");t.style.top=y;c.appendChild(t)}}const clip=(m)=>Math.max(CAL0*60,Math.min(CAL1*60,m));
(vT.schedule||[]).forEach((s)=>{const a=clip(pmin(s.start)),b=clip(pmin(s.end));if(b<=a)return;const d=el("div","band",s.title);d.style.top=(a-CAL0*60)*PPM+"px";d.style.height=(b-a)*PPM+"px";c.appendChild(d)});
const evs=vEvents.filter((e)=>e.start!=="hele dag").map((e)=>{const s=pmin(e.start);return{e,s,en:Math.max(s+15,e.end?pmin(e.end):s+60)}}).filter((x)=>x.en>CAL0*60&&x.s<CAL1*60).sort((a,b)=>a.s-b.s||b.en-a.en);
let cl=[],clEnd=-1;const flush=()=>{const n=Math.max(...cl.map((x)=>x.col))+1;cl.forEach((x)=>x.n=n);cl=[]};evs.forEach((x)=>{if(cl.length&&x.s>=clEnd){flush();clEnd=-1}const used=cl.filter((y)=>y.en>x.s).map((y)=>y.col);
let col=0;while(used.includes(col))col++;x.col=col;cl.push(x);clEnd=Math.max(clEnd,x.en)});if(cl.length)flush();evs.forEach((x)=>{const e=x.e,a=clip(x.s),b=clip(x.en),d=el("div","ev"+(e.task?" mine":""));
d.style.top=(a-CAL0*60)*PPM+"px";d.style.height=Math.max(18,(b-a)*PPM-2)+"px";d.style.left="calc("+x.col/x.n*100+"% + 4px)";d.style.width="calc("+100/x.n+"% - 8px)";d.appendChild(el("div","t",e.title));
d.appendChild(el("div","tm",e.start+"–"+(e.end||"")));if(e.task){const del=el("button","del","×");del.setAttribute("aria-label","Uit agenda halen");del.onclick=()=>unblock(e);d.appendChild(del);
const rs=el("div","rs");rs.addEventListener("touchstart",(ev)=>{ev.stopPropagation();startDrag({x:ev.touches[0].clientX,y:ev.touches[0].clientY,el:d},{resize:e,s:x.s,title:e.title,minutes:x.en-x.s})},{passive:true});
d.appendChild(rs);longPress(d,()=>({event:e,title:e.title,minutes:x.en-x.s}))}c.appendChild(d)});if(vT.date===todayISO()){const m=nowMin();if(m>CAL0*60&&m<CAL1*60){const n=el("div","nowl");n.style.top=(m-CAL0*60)*PPM+"px";c.appendChild(n)}}
const drop=el("div","drop");drop.id="calDrop";drop.hidden=true;c.appendChild(drop);if(vPane===2)calToNow()}
async function unblock(e){vEvents=vEvents.filter((x)=>x!==e);renderCal();renderProjects();try{await api("/api/calendar/block/"+encodeURIComponent(e.id),undefined,"DELETE");toast("Uit de agenda gehaald")}catch(err){toast("⚠️ "+err.message)}loadToday()}
function longPress(node,payload){node.addEventListener("touchstart",(e)=>{if(e.touches.length>1||e.target.closest("button,.rs"))return;const t=e.touches[0],st={x:t.clientX,y:t.clientY,el:node};
st.timer=setTimeout(()=>{lp=null;startDrag(st,payload())},380);lp=st},{passive:true})}
function startDrag(st,p){if(drag)return;drag=Object.assign(p,{x:st.x,y:st.y,el:st.el,slot:null,edgeT:0,vzT:0,ghost:el("div","ghost",p.resize?"":p.title)});if(navigator.vibrate)navigator.vibrate(15);
if(!p.resize){st.el.classList.add("lifted");document.body.appendChild(drag.ghost)}moveGhost();requestAnimationFrame(dragTick)}
function moveGhost(){drag.ghost.style.transform="translate("+(drag.x-24)+"px,"+(drag.y-44)+"px)"}
document.addEventListener("touchmove",(e)=>{if(drag){e.preventDefault();drag.x=e.touches[0].clientX;drag.y=e.touches[0].clientY;moveGhost();return}if(lp){const t=e.touches[0];
if(Math.abs(t.clientX-lp.x)>8||Math.abs(t.clientY-lp.y)>8){clearTimeout(lp.timer);lp=null}}},{passive:false});
document.addEventListener("touchend",()=>{if(lp){clearTimeout(lp.timer);lp=null}if(drag)endDrag(true)});document.addEventListener("touchcancel",()=>{if(lp){clearTimeout(lp.timer);lp=null}if(drag)endDrag(false)});
document.addEventListener("contextmenu",(e)=>{if(drag||lp)e.preventDefault()});
function dragTick(){if(!drag)return;const w=innerWidth,now=Date.now(),onCal=Math.abs(pager.scrollLeft-2*pager.clientWidth)<pager.clientWidth/3;if(!drag.resize){const edge=vPane!==2&&drag.x>w-36?2:vPane===2&&drag.task&&drag.x<36?0:-1;
if(edge<0)drag.edgeT=0;else if(!drag.edgeT)drag.edgeT=now;else if(now-drag.edgeT>300){drag.edgeT=0;vGo(edge)}}const r=pCal.getBoundingClientRect(),dir=!onCal?0:drag.y<r.top+56?-1:drag.y>r.bottom-56?1:0;if(!dir)drag.vzT=0;else if(!drag.vzT)drag.vzT=now;else if(now-drag.vzT>250)pCal.scrollTop+=dir*8;const drop=$("calDrop");if(!onCal||!drop){drag.slot=null;if(drop)drop.hidden=true}else{const g=calGrid.getBoundingClientRect(),m=CAL0*60+(drag.y-g.top)/PPM;let s,min;
if(drag.resize){s=drag.s;min=Math.max(15,Math.round((m-s)/15)*15)}else{min=drag.minutes;s=Math.round((m-15)/15)*15}s=Math.max(CAL0*60,Math.min(CAL1*60-min,s));drag.slot={s,min};drop.hidden=false;
drop.style.top=(s-CAL0*60)*PPM+"px";drop.style.height=min*PPM-2+"px";drop.textContent=hm2(s)+"–"+hm2(s+min)+" · "+drag.title}drag.ghost.style.opacity=drag.slot?0:1;requestAnimationFrame(dragTick)}
async function endDrag(ok){const d=drag;drag=null;d.ghost.remove();d.el.classList.remove("lifted");const drop=$("calDrop");if(drop)drop.hidden=true;if(!ok||!d.slot)return;const{s,min}=d.slot,start=hm2(s),end=hm2(s+min);
let body;if(d.task){body={task_id:d.task.id,date:vT.date,start,minutes:min};vEvents.push({id:"tmp",title:d.title,task:d.task.id,start,end})}else{const e=d.event||d.resize;if(e.start===start&&e.end===end)return;
body={event_id:e.id,date:vT.date,start,minutes:min};e.start=start;e.end=end}renderCal();renderProjects();if(navigator.vibrate)navigator.vibrate(10);try{await api("/api/calendar/block",body);
toast(d.resize?"Blok tot "+end:"🗓 Ingepland "+start+"–"+end)}catch(e){toast("⚠️ "+e.message)}loadToday()}
const standalone=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone;
async function pushBanner(){const isIOS=/iPhone|iPad/.test(navigator.userAgent);$("vInstall").hidden=!(isIOS&&!standalone);const can="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window;
$("vPush").hidden=!(can&&Notification.permission!=="granted"&&!(isIOS&&!standalone));if(can&&Notification.permission==="granted")subscribePush(false)}async function subscribePush(ask){
try{const reg=await navigator.serviceWorker.register("/sw.js");if(ask){const perm=await Notification.requestPermission();if(perm!=="granted"){toast("Meldingen niet toegestaan");
return}}const{key:vapid}=await api("/api/push/key");if(!vapid){if(ask)toast("Push is nog niet ingesteld op de server");return}let sub=await reg.pushManager.getSubscription();
if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlB64(vapid)});await api("/api/push/subscribe",sub.toJSON());if(ask){$("vPush").hidden=true;
await api("/api/push/test",{});toast("Meldingen staan aan \\uD83D\\uDD14")}}catch(e){if(ask)toast("⚠️ "+e.message)}}$("vPushBtn").onclick=()=>subscribePush(true);$("vLifeSwap").onclick=async()=>{
toast("Even zoeken…");try{await api("/api/life/swap",{});loadToday()}catch(e){toast("⚠️ "+e.message)}};function urlB64(s){const p="=".repeat((4-s.length%4)%4);const b=atob((s+p).replace(/-/g,
"+").replace(/_/g,"/"));return Uint8Array.from(b,(c)=>c.charCodeAt(0))}if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js").catch(()=>{});const dText=$("dText"),
dTasks=$("dTasks"),dStatus=$("dStatus"),dMic=$("dMic"),dSave=$("dSave");let parsed=[],removed=new Set,timer=null,inflight=0,lastParsed="";const norm=(s)=>s.toLowerCase().trim();
function renderDump(){const vis=parsed.filter((t)=>!removed.has(norm(t.taak)));dTasks.hidden=!vis.length;dTasks.innerHTML="";vis.forEach((t)=>dTasks.appendChild(taskRow(t,
{readonly:true,onRemove:()=>{removed.add(norm(t.taak));renderDump()}})));dSave.disabled=!vis.length;dSave.textContent=vis.length?\`Opslaan (\${vis.length})\`:"Opslaan"}const schedule=(ms)=>{
clearTimeout(timer);timer=setTimeout(parseNow,ms||1200)};let parsing=null;function parseNow(){const text=dText.value.trim();if(!text)return Promise.resolve();if(text===lastParsed)return parsing||Promise.resolve();
lastParsed=text;const my=++inflight;dStatus.textContent="✨ Taken maken…";$("dDone").innerHTML="";parsing=(async()=>{try{const r=await api("/api/dump/parse",{text});
if(my!==inflight)return;parsed=r.tasks;renderDump();if(!recording(dMic))dStatus.textContent=parsed.length?"":"Geen taken gevonden in wat je zei."}catch(e){dStatus.textContent="⚠️ "+e.message;
lastParsed=""}})();return parsing}dText.addEventListener("input",()=>schedule(1500));dMic.onclick=()=>{if(recording(dMic))return stopRec();startRec(dMic,dText,dStatus,
(final)=>final?parseNow():schedule(2500));dSave.disabled=false};dSave.onclick=async()=>{if(recording(dMic))await stopRec();await parseNow();const keep=parsed.filter((t)=>!removed.has(norm(t.taak)));
if(!keep.length){renderDump();return}dSave.disabled=true;dStatus.textContent="Opslaan…";try{const r=await api("/api/dump/save",{tasks:keep});resetDump();dStatus.textContent="";
const d=el("div","card",\`✅ \${r.saved} \${r.saved===1?"taak":"taken"} uit je hoofd. Hoofd leeg, terug naar je focus.\`);d.style.textAlign="center";$("dDone").appendChild(d)}catch(e){
dStatus.textContent="⚠️ "+e.message;dSave.disabled=false}};function resetDump(){dText.value="";parsed=[];removed=new Set;lastParsed="";renderDump()}$("dClear").onclick=async()=>{
await stopRec();resetDump();dStatus.textContent="";$("dDone").innerHTML=""};const chat=$("chat"),cText=$("cText"),cSend=$("cSend");let chatLoaded=false,sending=false;
function bubble(m){if(m.kind==="trigger"){const t=new Date(m.created_at);return el("div","divider",\`Check-in · \${t.toLocaleDateString("nl-NL",{weekday:"short"})} \${t.toLocaleTimeString("nl-NL",
{hour:"2-digit",minute:"2-digit"})}\`)}return el("div","bubble "+m.role,m.content)}async function loadChat(){if(!key)return;try{const msgs=await api("/api/coach");
chat.innerHTML="";if(!msgs.length)chat.appendChild(el("div","bubble assistant","Hé! Ik ben je coach. Zullen we beginnen met een korte intake: je life areas, doelen en wat je al goed vindt gaan? Of vertel gewoon waar je nu mee zit."));
msgs.forEach((m)=>chat.appendChild(bubble(m)));chatLoaded=true;window.scrollTo(0,document.body.scrollHeight)}catch(e){chat.innerHTML="";chat.appendChild(el("div",
"empty","⚠️ "+e.message))}}function autosize(){cText.style.height="44px";cText.style.height=Math.min(cText.scrollHeight,140)+"px"}cText.addEventListener("input",
autosize);cText.addEventListener("keydown",(e)=>{if(e.key==="Enter"&&!e.shiftKey&&!/iPhone|iPad|Android/.test(navigator.userAgent)){e.preventDefault();send()}});
async function send(textArg){if(recording($("cMic")))await stopRec();const text=(textArg||cText.value).trim();if(!text||sending)return;sending=true;cSend.disabled=true;
cText.value="";autosize();chat.appendChild(el("div","bubble user",text));const typing=el("div","typing","Coach denkt na…");chat.appendChild(typing);window.scrollTo(0,
document.body.scrollHeight);try{const m=await api("/api/coach",{text});typing.remove();chat.appendChild(bubble(m))}catch(e){typing.textContent="⚠️ "+e.message;cText.value=text}sending=false;
cSend.disabled=false;window.scrollTo(0,document.body.scrollHeight)}cSend.onclick=()=>send();$("cMic").onclick=()=>recording($("cMic"))?stopRec():startRec($("cMic"),
cText,$("cStatus"),autosize);$("cChips").querySelectorAll(".chip").forEach((c)=>c.onclick=()=>send(c.textContent));const talkEl=$("talk"),tOrb=$("tOrb"),tState=$("tState"),
tText=$("tText");const player=new Audio;player.setAttribute("playsinline","");let talk=null,actx=null;const silence=(()=>{const b=new DataView(new ArrayBuffer(844));
[[0,1380533830],[8,1463899717],[12,1718449184],[36,1684108385]].forEach(([o,v])=>b.setUint32(o,v));[[4,836],[16,16],[24,8000],[28,16000],[40,800]].forEach(([o,v])=>b.setUint32(o,
v,true));[[20,1],[22,1],[32,2],[34,16]].forEach(([o,v])=>b.setUint16(o,v,true));return URL.createObjectURL(new Blob([b],{type:"audio/wav"}))})();function tSet(state,
msg){tOrb.className="orb "+state;tOrb.style.transform="";tOrb.textContent={listening:"\\uD83C\\uDF99️",thinking:"\\uD83D\\uDCAD",speaking:"\\uD83D\\uDD0A",idle:"\\uD83C\\uDF99️"}[state];
tState.textContent=msg}async function openTalk(mode){await stopRec();if(configP)await configP;if(!sttServer||!canRecord){toast("Praten werkt zodra OPENAI_API_KEY in Railway staat. Typ je bericht nu even.");
show("coach");return}player.src=silence;player.play().catch(()=>{});try{actx=actx||new(window.AudioContext||window.webkitAudioContext);actx.resume()}catch{}talk={
mode,turns:0,active:true};$("tMode").textContent=mode==="plan"?"Plan gewijzigd":"Gesprek met je coach";tText.textContent=mode==="plan"?"Vertel wat er anders is. Ik pas je dagindeling en taken aan.":"";
talkEl.classList.add("on");listen()}function closeTalk(){if(!talk)return;talk.active=false;endListen(true);player.pause();if(window.speechSynthesis)speechSynthesis.cancel();
talk=null;talkEl.classList.remove("on");show(current||"vandaag")}async function listen(){const t=talk;if(!t||!t.active)return;tSet("listening","Ik luister…");let stream;
try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}})}catch{tSet("idle","⚠️ Geen toegang tot de microfoon");
return}if(talk!==t||!t.active){stream.getTracks().forEach((x)=>x.stop());return}const type=["audio/mp4","audio/webm;codecs=opus","audio/webm"].find((x)=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(x))||"";
const mr=new MediaRecorder(stream,type?{mimeType:type}:undefined),chunks=[];mr.ondataavailable=(e)=>{if(e.data&&e.data.size)chunks.push(e.data)};const L=t.listen={
stream,mr,chunks,type,t0:Date.now(),voiced:0,lastVoice:0};try{const src=actx.createMediaStreamSource(stream),an=actx.createAnalyser();an.fftSize=1024;src.connect(an);
const buf=new Float32Array(an.fftSize);let floor=0.01;L.vad=setInterval(()=>{an.getFloatTimeDomainData(buf);let sum=0;for(const v of buf)sum+=v*v;const rms=Math.sqrt(sum/buf.length),
now=Date.now();if(now-L.t0<400){floor=Math.max(floor,rms);return}tOrb.style.transform=\`scale(\${1+Math.min(rms*6,0.25)})\`;if(rms>Math.max(0.02,floor*2.5)){L.voiced+=100;
L.lastVoice=now}if(L.voiced>=300&&now-L.lastVoice>1100)finishListen();else if(!L.voiced&&now-L.t0>15000){endListen(true);tSet("idle","Tik op de bol om verder te praten")}else if(now-L.t0>120000)finishListen()},
100);L.src=src}catch{}tState.textContent=L.vad?"Ik luister… (stop met praten of tik op de bol)":"Ik luister… tik op de bol als je klaar bent";mr.start()}function endListen(discard){
const L=talk&&talk.listen;if(!L)return null;talk.listen=null;clearInterval(L.vad);try{L.src&&L.src.disconnect()}catch{}return new Promise((res)=>{L.mr.onstop=()=>{
L.stream.getTracks().forEach((x)=>x.stop());res(discard?null:new Blob(L.chunks,{type:L.mr.mimeType||L.type||"audio/mp4"}))};try{L.mr.stop()}catch{res(null)}})}async function finishListen(){
const t=talk;const blob=await endListen(false);if(!blob||!t.active)return;if(blob.size<1500)return listen();tSet("thinking","Even uitschrijven…");try{const r=await fetch("/api/transcribe",
{method:"POST",headers:{"x-app-key":key||"","Content-Type":blob.type},body:blob});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||r.statusText);
if(!t.active)return;if(!d.text){tSet("idle","Niks verstaan. Tik op de bol en probeer het nog eens.");return}tText.textContent="Jij: "+d.text;tSet("thinking","Coach denkt na…");
const text=t.mode==="plan"&&!t.turns?"[Plan gewijzigd] "+d.text:d.text;const m=await api("/api/coach",{text,voice:true});t.turns++;if(!t.active)return;tText.textContent=m.content;
chatLoaded=false;await say(m.content,t);if(t.active&&talk===t)listen()}catch(e){if(t.active)tSet("idle","⚠️ "+e.message+" · tik om opnieuw te proberen")}}async function say(text,
t){tSet("speaking","Coach praat… (tik om te onderbreken)");try{if(!ttsServer)throw new Error("geen tts");if(!t.active)return;player.src="/api/speak?key="+encodeURIComponent(key)+"&text="+encodeURIComponent(text);
const ok=await new Promise((res)=>{player.onended=player.onpause=()=>res(true);player.onerror=()=>res(false);player.play().catch(()=>res(false))});if(!ok)throw new Error("tts")}catch{
if(!window.speechSynthesis||!t.active)return;await new Promise((res)=>{const u=new SpeechSynthesisUtterance(text);u.lang="nl-NL";u.onend=u.onerror=res;speechSynthesis.speak(u)})}}tOrb.onclick=()=>{
if(!talk)return;if(talk.listen)return finishListen();if(tOrb.classList.contains("speaking")){player.pause();if(window.speechSynthesis)speechSynthesis.cancel();return}if(tOrb.classList.contains("idle")){
player.src=silence;player.play().catch(()=>{});listen()}};$("tStop").onclick=closeTalk;$("cTalk").onclick=()=>openTalk("chat");$("vReplan").onclick=()=>openTalk("plan");
const jText=$("jText"),jStatus=$("jStatus"),jMic=$("jMic"),jSave=$("jSave"),jResult=$("jResult"),jPhoto=$("jPhoto"),jPreview=$("jPreview");let photo=null;jText.value=store.get("journal-draft")||"";
const saveDraft=()=>store.set("journal-draft",jText.value);jText.addEventListener("input",saveDraft);jMic.onclick=()=>recording(jMic)?stopRec():startRec(jMic,jText,
jStatus,saveDraft);$("jCam").onclick=()=>jPhoto.click();jPhoto.onchange=()=>{const f=jPhoto.files&&jPhoto.files[0];if(!f)return;const img=new Image;img.onload=()=>{
const s=Math.min(1,1800/Math.max(img.width,img.height));const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
c.getContext("2d").drawImage(img,0,0,c.width,c.height);const url=c.toDataURL("image/jpeg",0.85);photo={media_type:"image/jpeg",data:url.split(",")[1]};jPreview.src=url;
jPreview.style.display="block";jStatus.textContent="\\uD83D\\uDCF7 Foto toegevoegd. Tik op Opslaan.";URL.revokeObjectURL(img.src)};img.src=URL.createObjectURL(f);jPhoto.value=""};
jSave.onclick=async()=>{await stopRec();const text=jText.value.trim();if(!text&&!photo){jStatus.textContent="Spreek, typ of fotografeer eerst je journal.";return}jSave.disabled=true;
jStatus.textContent=photo?"✨ Handschrift lezen…":"✨ Verwerken…";try{const r=await api("/api/journal",{text,image:photo});jText.value="";saveDraft();photo=null;jPreview.style.display="none";
jStatus.textContent="";jResult.innerHTML="";jResult.appendChild(entryCard(r.entry));if(r.tasks.length){jResult.appendChild(el("p","sub",\`\${r.tasks.length} \${r.tasks.length===1?"taak":"taken"} uit je journal toegevoegd:\`));
const l=el("div","card list");r.tasks.forEach((t)=>l.appendChild(taskRow(t)));jResult.appendChild(l)}toast("\\uD83D\\uDCD3 Journal opgeslagen, habit afgevinkt");loadJournalList()}catch(e){
jStatus.textContent="⚠️ "+e.message}jSave.disabled=false};function entryCard(j){const c=el("div","card entry");c.appendChild(el("div","t","\\uD83D\\uDCD3 "+(j.title||"Journal")));
c.appendChild(el("div","small muted",fmtDate(j.date)+(j.mood?\` · stemming \${j.mood}/10\`:"")));if(j.summary)c.appendChild(el("div","s",j.summary));if(j.gratitude)c.appendChild(el("div",
"s","\\uD83D\\uDE4F "+j.gratitude));if(j.intention)c.appendChild(el("div","s","\\uD83C\\uDFAF "+j.intention));c.onclick=async()=>{if(c.dataset.open)return;c.dataset.open="1";
try{const full=await api(\`/api/journal/\${j.id}\`);const b=el("div","",full.body);b.style.cssText="white-space:pre-wrap;margin-top:10px;font-size:15px";c.appendChild(b)}catch{
}};return c}async function loadJournalList(){if(!key)return;try{const list=await api("/api/journal");const w=$("jList");w.innerHTML="";if(!list.length)w.appendChild(el("div",
"empty","Nog geen journal-entries."));list.forEach((j)=>w.appendChild(entryCard(j)))}catch{}}async function loadAreas(){if(!key)return;let d;try{d=await api("/api/compass")}catch(e){
$("gAreas").textContent="⚠️ "+e.message;return}const kc=$("gCompass");kc.innerHTML="";const card=el("div","card"+(d.values?"":" banner"));if(d.values){card.appendChild(el("div",
"small muted","Mijn kernwaarden"));const ch=el("div","chips wrap");ch.style.marginTop="6px";d.values.top3.forEach((v,i)=>ch.appendChild(Object.assign(el("span","chip on",
\`\${i+1}. \${v.name}\`),{title:v.meaning||""})));card.appendChild(ch);card.appendChild(Object.assign(el("button","link","Kompas opnieuw invullen →"),{onclick:openWizard}))}else{
card.appendChild(el("b","","\\uD83E\\uDDED Start je Levenskompas"));card.appendChild(el("div","small muted","Kernwaarden en dromen per levensgebied. Daarna rolt er een plan uit met elke dag één kleine stap."));
const b=Object.assign(el("button","btn accent","Starten (±20 min)"),{onclick:openWizard});b.style.marginTop="10px";card.appendChild(b)}kc.appendChild(card);const wh=$("gWheel");
wh.innerHTML="";d.areas.forEach((a)=>{const r=el("div","wr"),mid=el("div"),top=el("div","wn"),bar=el("div","wb"),f=el("div");top.appendChild(el("span","",a.name));
top.appendChild(el("span","",a.target?\`1%: \${a.done_week}/\${a.target}\${a.done_week>=a.target?" ✓":""}\`:""));f.style.width=(a.satisfaction||0)*10+"%";bar.appendChild(f);
mid.appendChild(top);mid.appendChild(bar);const trend=a.prev_score!=null&&a.satisfaction?a.satisfaction>a.prev_score?" ↑":a.satisfaction<a.prev_score?" ↓":"":"";
r.appendChild(el("span","",a.emoji));r.appendChild(mid);r.appendChild(el("span","score",a.satisfaction?\`\${a.satisfaction}/10\${trend}\`:"–"));wh.appendChild(r)});const w=$("gAreas");
w.innerHTML="";const openName=store.get("open-area");d.areas.forEach((a)=>{const c=el("div","card area"+(openName===a.name?" open":""));const head=el("div","head");
head.appendChild(el("span","em",a.emoji));head.appendChild(el("span","nm",a.name));if(a.done_total)head.appendChild(el("span","small muted",\`\\uD83C\\uDF31 \${a.done_total}\`));
head.appendChild(el("span","score",a.satisfaction?\`\${a.satisfaction}/10\`:"–"));head.onclick=()=>{const o=!c.classList.contains("open");document.querySelectorAll(".area.open").forEach((x)=>x.classList.remove("open"));
c.classList.toggle("open",o);store.set("open-area",o?a.name:"")};c.appendChild(head);const body=el("div","body");body.appendChild(el("div","small muted",[a.desc,
a.rhythm&&"Ritme: "+a.rhythm].filter(Boolean).join(" · ")));body.appendChild(el("label","","Tevredenheid"));const dots=el("div","dots");for(let i=1;i<=10;i++){const b=el("button",
a.satisfaction===i?"on":"",String(i));b.onclick=async()=>{a.satisfaction=i;dots.querySelectorAll("button").forEach((x,j)=>x.classList.toggle("on",j+1===i));head.querySelector(".score").textContent=\`\${i}/10\`;
await api("/api/areas",{name:a.name,satisfaction:i}).catch((e)=>toast("⚠️ "+e.message))};dots.appendChild(b)}body.appendChild(dots);const field=(label,k,ph)=>{body.appendChild(el("label",
"",label));const t=el("textarea");t.value=a[k]||"";t.placeholder=ph;t.onchange=()=>api("/api/areas",{name:a.name,[k]:t.value}).then(()=>toast("Opgeslagen")).catch((e)=>toast("⚠️ "+e.message));
body.appendChild(t)};field("Droom (over 3 jaar)","vision","Hoe ziet een 10 eruit?");field("Focus deze week","week_focus","Waar let je deze week op?");field("Waar ik al dankbaar voor ben",
"gratitude","Wat gaat hier al goed?");body.appendChild(el("label","","Doelen"));d.goals.filter((g)=>g.area===a.name).forEach((g)=>{const r=el("div","goal");r.appendChild(el("span",
"grow",(g.status==="behaald"?"✅ ":"")+(g.kind==="kwartaal"?"Dit kwartaal: ":"12 mnd: ")+g.title+(g.deadline?\` · \${fmtDate(g.deadline)}\`:"")));const bar=el("div","bar");
const fill=el("div");fill.style.width=(g.progress||0)+"%";bar.appendChild(fill);r.appendChild(bar);r.onclick=async()=>{const v=prompt(\`Voortgang van "\${g.title}" (0-100), of typ "behaald":\`,
g.progress||0);if(v==null)return;const upd=v.trim().toLowerCase()==="behaald"?{id:g.id,status:"behaald",progress:100}:{id:g.id,progress:Number(v)||0};await api("/api/goals",
upd).catch((e)=>toast("⚠️ "+e.message));loadAreas()};body.appendChild(r)});const add=el("button","link","+ Doel toevoegen");add.onclick=async()=>{const title=prompt(\`Nieuw doel voor \${a.name}:\`);
if(!title)return;const deadline=prompt("Deadline (JJJJ-MM-DD), mag leeg:")||null;await api("/api/goals",{title,area:a.name,deadline}).catch((e)=>toast("⚠️ "+e.message));
loadAreas()};body.appendChild(add);body.appendChild(Object.assign(el("button","link",\`Bespreek \${a.name} met coach →\`),{onclick:()=>{show("coach");cText.value=\`Laten we \${a.name} bespreken: waar sta ik, waar ben ik al dankbaar voor, en wat is een goede volgende stap?\`;
autosize()}}));c.appendChild(body);w.appendChild(c)})}const VALUES=["Familie","Liefde","Vrijheid","Avontuur","Gezondheid","Groei","Rust","Plezier","Creativiteit",
"Vriendschap","Eerlijkheid","Zekerheid","Succes","Impact","Natuur","Spiritualiteit","Leren","Humor","Verbinding","Onafhankelijkheid","Dankbaarheid","Moed","Discipline",
"Rijkdom","Balans","Authenticiteit","Gemeenschap","Respect"];const QS=[["gratitude","Wat is hier al goed? Waar ben je dankbaar voor?"],["dream","Hoe ziet een 10 eruit over 3 jaar? Je droom."],
["year","Wat wil je over 12 maanden bereikt hebben?"],["step","Wat is de kleinste stap die je deze week kunt zetten?"]];let ks=null,kAreas=[];const kSave=()=>store.set("kompas",
JSON.stringify(ks));async function openWizard(){let d;try{d=await api("/api/compass")}catch(e){toast("⚠️ "+e.message);return}kAreas=d.areas;let saved=null;try{saved=JSON.parse(store.get("kompas")||"null")}catch{
}ks=saved&&saved.areas?saved:{step:0,chosen:d.values?d.values.chosen:[],top3:d.values?d.values.top3:[],areas:{}};kAreas.forEach((a)=>{const year=(d.goals.find((g)=>g.area===a.name&&g.kind==="jaar"&&g.status==="actief")||{
}).title||"";ks.areas[a.name]=Object.assign({satisfaction:a.satisfaction||null,gratitude:a.gratitude||"",dream:a.vision||"",year,step:""},ks.areas[a.name]||{})});
$("wiz").classList.add("on");renderWiz()}function qField(parent,label,obj,k,ph){parent.appendChild(el("label","",label));const q=el("div","q"),ta=el("textarea"),
mic=el("button","round mic","\\uD83C\\uDF99️");ta.value=obj[k]||"";ta.placeholder=ph||"Praat of typ…";ta.oninput=()=>{obj[k]=ta.value;kSave()};mic.setAttribute("aria-label",
"Inspreken");mic.onclick=()=>recording(mic)?stopRec():startRec(mic,ta,$("wStatus"),()=>{obj[k]=ta.value;kSave()});q.appendChild(ta);q.appendChild(mic);parent.appendChild(q)}function renderWiz(){
stopRec();const n=kAreas.length,s=ks.step,body=$("wBody");body.innerHTML="";$("wStatus").textContent="";$("wiz").scrollTop=0;$("wStep").textContent=s===0?"Levenskompas":\`Stap \${s} van \${n+3}\`;
$("wBack").style.visibility=s===0?"hidden":"visible";$("wNext").disabled=false;$("wNext").textContent=s===0?"Beginnen":s===n+3?"Maak mijn plan":"Volgende";if(s===0){
body.appendChild(el("h1","","\\uD83E\\uDDED Je Levenskompas"));body.appendChild(el("p","sub","In ±20 minuten: je kernwaarden, en per levensgebied waar je nu staat en waar je van droomt. Daarna maakt je coach een plan met elke dag één kleine stap: 1% dichterbij."));
body.appendChild(el("p","sub","Tik op \\uD83C\\uDF99️ en praat gewoon, eerlijk is beter dan mooi. Je kunt tussendoor stoppen: je antwoorden blijven bewaard."))}else if(s===1){
body.appendChild(el("h1","","Wat vind je echt belangrijk?"));body.appendChild(el("p","sub","Kies 3 tot 10 waarden die bij je passen."));const box=el("div","chips wrap"),
cnt=el("p","small muted");const upd=()=>cnt.textContent=\`\${ks.chosen.length}/10 gekozen\`;const chip=(v)=>{const c=el("button","chip"+(ks.chosen.includes(v)?" on":""),
v);c.onclick=()=>{const i=ks.chosen.indexOf(v);if(i>=0)ks.chosen.splice(i,1);else if(ks.chosen.length<10)ks.chosen.push(v);else return toast("Max. 10, haal er eerst één weg");
c.classList.toggle("on",i<0);ks.top3=ks.top3.filter((t)=>ks.chosen.includes(t.name));upd();kSave()};box.appendChild(c)};VALUES.concat(ks.chosen.filter((v)=>!VALUES.includes(v))).forEach(chip);
body.appendChild(box);body.appendChild(cnt);upd();const row=el("div","row"),inp=el("input"),b=el("button","btn","+ Eigen");inp.type="text";inp.placeholder="Eigen waarde…";
b.onclick=()=>{const v=inp.value.trim();if(!v||ks.chosen.length>=10)return;ks.chosen.push(v);kSave();renderWiz()};row.appendChild(inp);row.appendChild(b);body.appendChild(row)}else if(s===2){
body.appendChild(el("h1","","Jouw top 3"));body.appendChild(el("p","sub","Tik de 3 waarden aan die het zwaarst wegen. Zeg er kort bij wat ze voor jou betekenen."));
const box=el("div","chips wrap");ks.chosen.forEach((v)=>{const i=ks.top3.findIndex((t)=>t.name===v);const c=el("button","chip"+(i>=0?" on":""),(i>=0?i+1+". ":"")+v);
c.onclick=()=>{const j=ks.top3.findIndex((t)=>t.name===v);if(j>=0)ks.top3.splice(j,1);else if(ks.top3.length<3)ks.top3.push({name:v,meaning:""});else return toast("Max. 3");
kSave();renderWiz()};box.appendChild(c)});body.appendChild(box);ks.top3.forEach((t,i)=>qField(body,\`\${i+1}. \${t.name}: wat betekent dit voor jou?\`,t,"meaning"))}else if(s<n+3){
const a=kAreas[s-3],ans=ks.areas[a.name];body.appendChild(el("h1","",\`\${a.emoji} \${a.name}\`));body.appendChild(el("p","sub",a.desc));body.appendChild(el("label","",
"Hoe tevreden ben je nu? (1-10)"));const dots=el("div","dots");for(let i=1;i<=10;i++){const b=el("button",ans.satisfaction===i?"on":"",String(i));b.onclick=()=>{
ans.satisfaction=i;kSave();dots.querySelectorAll("button").forEach((x,j)=>x.classList.toggle("on",j+1===i))};dots.appendChild(b)}body.appendChild(dots);QS.forEach(([k,
label])=>qField(body,label,ans,k))}else{body.appendChild(el("h1","","Klaar om je plan te maken"));body.appendChild(el("p","sub","Je coach maakt per gebied een ladder: droom → doel voor 12 maanden → mijlpaal dit kwartaal → focus deze week → kleine stappen. Dat duurt ongeveer een halve minuut."));
const l=el("div","card wheel");kAreas.forEach((a)=>{const r=el("div","row");r.appendChild(el("span","grow",\`\${a.emoji} \${a.name}\`));r.appendChild(el("span","score",
ks.areas[a.name].satisfaction?ks.areas[a.name].satisfaction+"/10":"–"));l.appendChild(r)});body.appendChild(l)}}function showPlan(plan){const body=$("wBody");body.innerHTML="";
$("wStatus").textContent="";$("wiz").scrollTop=0;$("wStep").textContent="Je plan";body.appendChild(el("h1","","\\uD83C\\uDF89 Je kompas staat"));body.appendChild(el("p",
"sub","Vanaf nu staat er elke dag één kleine stap op Vandaag, uit het gebied dat die week aandacht nodig heeft. Alles is aan te passen bij Doelen."));plan.forEach((g)=>{
const a=kAreas.find((x)=>x.name===g.gebied)||{emoji:""},c=el("div","card"),l=el("div","ladder");c.style.marginBottom="10px";c.appendChild(el("div","t",\`\${a.emoji} \${g.gebied}\`));
[["Droom",g.droom],["12 maanden",g.jaardoel],["Dit kwartaal",g.kwartaal],["Deze week",g.week_focus],["Ritme",g.ritme],["Eerste stap",g.stappen[0]&&g.stappen[0].taak]].forEach(([k,
v])=>{if(!v)return;const r=el("div");r.appendChild(el("b","",k+": "));r.appendChild(document.createTextNode(v));l.appendChild(r)});c.appendChild(l);body.appendChild(c)});
$("wBack").style.visibility="hidden";$("wNext").disabled=false;$("wNext").textContent="Klaar"}const closeWiz=()=>{stopRec();$("wiz").classList.remove("on");show(current||"doelen")};
$("wClose").onclick=closeWiz;$("wBack").onclick=()=>{if(ks.step>0){ks.step--;kSave();renderWiz()}};$("wNext").onclick=async()=>{const n=kAreas.length;if(ks.step>n+3){
ks=null;closeWiz();return}if(ks.step===1&&ks.chosen.length<3)return toast("Kies er minstens 3");if(ks.step===2&&ks.top3.length<3)return toast("Kies je top 3");await stopRec();
if(ks.step<n+3){ks.step++;kSave();renderWiz();return}$("wNext").disabled=true;$("wBack").style.visibility="hidden";$("wStatus").textContent="✨ Je coach maakt je plan… (±30 seconden)";
try{const r=await api("/api/compass",{values:{chosen:ks.chosen,top3:ks.top3},areas:kAreas.map((a)=>Object.assign({name:a.name},ks.areas[a.name]))});store.set("kompas",
"");ks.step=n+4;showPlan(r.plan)}catch(e){$("wStatus").textContent="⚠️ "+e.message;$("wNext").disabled=false;$("wBack").style.visibility="visible"}};document.addEventListener("click",
(e)=>{if(e.target.closest("[data-compass]"))openWizard()});let segStatus="today,doing";$("gSeg").querySelectorAll("button").forEach((b)=>b.onclick=()=>{$("gSeg").querySelectorAll("button").forEach((x)=>x.classList.toggle("on",
x===b));segStatus=b.dataset.st;loadTasks()});async function loadTasks(){if(!key)return;try{const tasks=await api("/api/tasks?status="+segStatus);fillList($("gTasks"),
tasks,{star:segStatus==="done"?null:toggleTop3,onChange:()=>setTimeout(loadTasks,600)},"Niks hier. \\uD83C\\uDF89")}catch(e){$("gTasks").textContent="⚠️ "+e.message}}async function toggleTop3(t,
on){try{const o=await api("/api/today");let ids=o.top3.filter((x)=>x.status!=="done").map((x)=>x.id).filter((id)=>id!==t.id);if(on){if(ids.length>=3){toast("Max. 3 in je Top 3. Haal er eerst één weg.");
return}ids.push(t.id)}await api("/api/top3",{ids});toast(on?"⭐ In je Top 3":"Uit je Top 3");loadTasks()}catch(e){toast("⚠️ "+e.message)}}const trEl=$("trDay"),DOWS=["zo","ma","di","wo","do","vr","za"],LEVELS=["Beginner","Gemiddeld","Gevorderd"];let tr=null,trSel=null,trEdit=false,trGen=false;const trWish={goal:"",days:4,level:"Gemiddeld",equipment:"",notes:""};
async function loadTraining(){if(!key)return;try{tr=await api("/api/training")}catch(e){trEl.textContent="⚠️ "+e.message;return}if(!trSel||!tr.days.some((d)=>d.date===trSel))trSel=tr.today;if(!tr.plan)trGen=true;renderTraining()}
function renderTraining(){const p=tr.plan;$("trCount").textContent=p?tr.done+"/"+tr.target:"";$("trBar").style.width=p&&tr.target?Math.min(100,Math.round(tr.done/tr.target*100))+"%":"0";const wk=$("trWeek");wk.innerHTML="";
tr.days.forEach((d)=>{const s=d.session,w=d.workout,b=el("button",[d.date===tr.today?"today":"",s&&s.status==="gedaan"?"done":"",d.date===trSel?"sel":""].join(" "));b.appendChild(el("b","",d.label));
b.appendChild(el("span","w",s&&s.status==="gedaan"?"✓":s&&s.status==="overgeslagen"?"–":w&&!w.rest?w.title:"rust"));b.onclick=()=>{trSel=d.date;trEdit=false;renderTraining()};wk.appendChild(b)});renderTrDay();renderTrPlan();
const h=$("trHist");h.innerHTML="";if(!tr.history.length)h.appendChild(el("div","empty","Nog geen trainingen gelogd."));tr.history.forEach((s)=>{const r=el("div","task"),b=el("div","grow");b.appendChild(el("div","t","✅ "+(s.type||"Training")));
const ex=(s.exercises||[]).filter((e)=>e.result).map((e)=>e.name+": "+e.result).join(" · ");b.appendChild(el("div","s",fmtDate(s.date)+(s.minutes?" · "+s.minutes+" min":"")+(ex?" · "+ex:"")));r.appendChild(b);h.appendChild(r)})}
function renderTrDay(){const d=tr.days.find((x)=>x.date===trSel),w=d.workout,s=d.session,past=d.date<=tr.today;trEl.innerHTML="";$("trStatus").textContent="";if(!tr.plan){const c=el("div","card banner");
c.appendChild(el("b","","🏋️ Nog geen trainingsschema"));c.appendChild(el("div","small muted","Laat je coach hieronder een schema maken. Daarna zie je hier elke dag je training en vink je hem af."));trEl.appendChild(c);return}
if(trEdit)return trEditor(d);const c=el("div","card"),head=el("div","row"),hb=el("div","grow");hb.appendChild(el("div","t",w.rest?"😌 Rustdag":"🏋️ "+w.title));hb.appendChild(el("div","small muted",[fmtDate(d.date),
!w.rest&&w.minutes?w.minutes+" min":"",w.rest?"Wandelen of vrij: herstel hoort erbij.":w.focus].filter(Boolean).join(" · ")));head.appendChild(hb);head.appendChild(Object.assign(el("button","link",w.rest?"+ Training":"✏️ Aanpassen"),
{onclick:()=>{trEdit=true;renderTraining()}}));c.appendChild(head);if(s){const m=el("div","meta");m.appendChild(el("span","tag "+(s.status==="gedaan"?"today":"warn"),s.status==="gedaan"?"✅ Gedaan":s.status==="overgeslagen"?"⏭️ Overgeslagen":"🗓️ Gepland"));
if(s.type&&(w.rest||s.type!==w.title))m.appendChild(el("span","tag",s.type));if(s.reason)m.appendChild(el("span","tag",s.reason));c.appendChild(m)}trEl.appendChild(c);const prev={},rows=[];((s&&s.exercises)||[]).forEach((e)=>prev[e.name]=e);
if(!w.rest&&w.exercises.length){const l=el("div","card list");l.style.marginTop="10px";w.exercises.forEach((e)=>{const pe=prev[e.name],last=tr.last[e.name],r=el("div","ex"+(pe&&pe.done?" done":"")),ck=el("button","check",pe&&pe.done?"✓":"");
ck.setAttribute("aria-label","Afvinken");ck.onclick=()=>{const on=!r.classList.contains("done");r.classList.toggle("done",on);ck.textContent=on?"✓":"";if(on&&navigator.vibrate)navigator.vibrate(10)};r.appendChild(ck);const b=el("div","grow");
b.appendChild(el("div","t",e.name));const sub=[e.dose,e.note].filter(Boolean).join(" · ");if(sub)b.appendChild(el("div","s",sub));if(last&&!pe)b.appendChild(el("div","small muted","Vorige keer: "+last.result));r.appendChild(b);
if(past){const inp=el("input");inp.type="text";inp.placeholder=last?last.result:"kg × reps";inp.value=pe&&pe.result||"";inp.setAttribute("aria-label","Resultaat "+e.name);r.appendChild(inp);rows.push({e,r,inp})}l.appendChild(r)});trEl.appendChild(l)}
if(!past){trEl.appendChild(el("p","small muted","Gepland. Afvinken kan op de dag zelf."));return}const log=(status,extra)=>{const any=rows.some((x)=>x.r.classList.contains("done"));return trLog(Object.assign({date:d.date,status,
exercises:rows.map((x)=>({name:x.e.name,result:x.inp.value.trim(),done:any?x.r.classList.contains("done"):status==="gedaan"}))},extra))};const bar=el("div","row");bar.style.cssText="margin-top:12px;flex-wrap:wrap";
const done=s&&s.status==="gedaan";bar.appendChild(Object.assign(el("button","btn accent",done?"Opslaan":w.rest?"💪 Toch getraind":"✅ Training gedaan"),{onclick:()=>{if(w.rest&&!done){const t=prompt("Wat heb je gedaan?","Wandelen");
if(t===null)return;return log("gedaan",{type:t||"Extra training"})}log("gedaan",{})}}));if(!w.rest&&!(s&&s.status==="overgeslagen"))bar.appendChild(Object.assign(el("button","btn","Overslaan"),{onclick:()=>{
const reason=prompt("Waarom sla je over? (mag leeg)");if(reason!==null)log("overgeslagen",{reason})}}));if(s)bar.appendChild(Object.assign(el("button","link","Ongedaan maken"),{onclick:()=>trLog({date:d.date,undo:true})}));trEl.appendChild(bar)}
async function trLog(b){$("trStatus").textContent="Opslaan…";try{await api("/api/training/log",b);if(b.status==="gedaan"&&navigator.vibrate)navigator.vibrate(20);toast(b.undo?"Log verwijderd":b.status==="gedaan"?"💪 Training gelogd. Sterk!":"Gelogd. Volgende keer weer.");
await loadTraining()}catch(e){$("trStatus").textContent="⚠️ "+e.message}}
function trEditor(d){const p=tr.plan,dow=d.workout.dow,cur=p.days.find((x)=>x.dow===dow)||{dow,title:"",focus:"",minutes:60,exercises:[]},c=el("div","card"),f=(label,v,ph)=>{c.appendChild(el("label","small muted",label));
const i=el("input");i.type="text";i.value=v==null?"":v;i.placeholder=ph||"";i.style.margin="4px 0 10px";c.appendChild(i);return i};c.appendChild(el("div","t","Training op "+DOWS[dow]+" aanpassen"));c.lastChild.style.marginBottom="10px";
const ti=f("Naam (leeg = rustdag)",cur.title,"bijv. Push, Benen, Hardlopen"),mi=f("Minuten",cur.minutes,"60"),fo=f("Focus",cur.focus,"Waar draait deze sessie om?");mi.inputMode="numeric";
c.appendChild(el("label","small muted","Oefeningen: één per regel, als  naam | sets x reps | tip"));const ta=el("textarea");ta.style.marginTop="4px";ta.placeholder="Bankdrukken | 4x8 | laatste set tot falen\\nRoeien | 3x10";
ta.value=cur.exercises.map((e)=>e.name+(e.dose||e.note?" | "+(e.dose||""):"")+(e.note?" | "+e.note:"")).join("\\n");c.appendChild(ta);const bar=el("div","row");bar.style.cssText="margin-top:12px;flex-wrap:wrap";
const save=async(title)=>{const days=p.days.filter((x)=>x.dow!==dow);if(title)days.push({dow,title,focus:fo.value.trim(),minutes:Number(mi.value)||null,exercises:ta.value.split("\\n").map((l)=>l.split("|").map((x)=>x.trim())).filter((x)=>x[0]).map((x)=>({
name:x[0],dose:x[1]||"",note:x.slice(2).join(" | ")}))});try{await api("/api/training/plan",{goal:p.goal,days});trEdit=false;toast("Schema opgeslagen");loadTraining()}catch(e){toast("⚠️ "+e.message)}};
bar.appendChild(Object.assign(el("button","btn primary","Opslaan"),{onclick:()=>save(ti.value.trim())}));bar.appendChild(Object.assign(el("button","btn","Annuleren"),{onclick:()=>{trEdit=false;renderTraining()}}));
if(cur.title)bar.appendChild(Object.assign(el("button","link","Maak rustdag"),{onclick:()=>save("")}));c.appendChild(bar);trEl.appendChild(c)}
function renderTrPlan(){const c=$("trPlan"),p=tr.plan;c.innerHTML="";if(p){if(p.goal)c.appendChild(el("div","t","🎯 "+p.goal));c.appendChild(el("div","s",p.days.map((x)=>DOWS[x.dow]+": "+x.title).join(" · ")))}
const links=el("div","row");links.style.flexWrap="wrap";links.appendChild(Object.assign(el("button","link",trGen&&p?"Sluiten":p?"✨ Nieuw schema laten maken":"✨ Schema laten maken"),{onclick:()=>{trGen=!trGen;renderTrPlan()}}));
const cb=el("button","link","Bespreek met coach →");cb.dataset.goCoach=p?"Laten we mijn trainingsschema bespreken: wat werkt, wat moet anders?":"Help me een trainingsschema maken dat in mijn week past.";links.appendChild(cb);c.appendChild(links);if(!trGen)return;
const f=(label,k,ph)=>{c.appendChild(el("label","small muted",label));const i=el("input");i.type="text";i.value=trWish[k];i.placeholder=ph;i.style.margin="4px 0 10px";i.oninput=()=>trWish[k]=i.value;c.appendChild(i)},
seg=(label,opts,k)=>{c.appendChild(el("label","small muted",label));const s=el("div","seg");opts.forEach((o)=>{const b=el("button",trWish[k]===o?"on":"",String(o));b.onclick=()=>{trWish[k]=o;
s.querySelectorAll("button").forEach((x)=>x.classList.toggle("on",x===b))};s.appendChild(b)});c.appendChild(s)};c.appendChild(el("div","","")).style.height="8px";f("Doel","goal","bijv. sterker worden, 5 kg afvallen, 10 km hardlopen");
seg("Dagen per week",[2,3,4,5,6],"days");seg("Niveau",LEVELS,"level");f("Materiaal","equipment","Sportschool / thuis met dumbbells / niks");f("Beperkingen of wensen","notes","Blessures, wat je leuk vindt, vaste sportdagen");
const go=el("button","btn accent","Maak mijn schema");go.style.width="100%";const st=el("div","status");go.onclick=async()=>{go.disabled=true;st.textContent="✨ Je coach maakt je schema… (±30 seconden)";try{await api("/api/training/generate",trWish);
trGen=false;toast("🏋️ Je schema staat");await loadTraining()}catch(e){st.textContent="⚠️ "+e.message;go.disabled=false}};c.appendChild(go);c.appendChild(st)}
const isMac=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent);if(!isMac)document.querySelectorAll("kbd[data-mod]").forEach((k)=>k.textContent="Ctrl");let hkBtn=null,hkAt=0;const micFor=()=>current==="journal"?$("jMic"):current==="coach"?$("cMic"):dMic;
document.addEventListener("keydown",(e)=>{if(e.code==="Space"&&e.shiftKey&&(e.metaKey||e.ctrlKey)){e.preventDefault();if(e.repeat)return;if(rec){hkBtn=null;stopRec();return}
if(current!=="journal"&&current!=="coach"&&current!=="dump")show("dump");hkBtn=micFor();hkAt=Date.now();hkBtn.click();return}if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)&&current==="dump"){e.preventDefault();dSave.click()}});
document.addEventListener("keyup",(e)=>{if(!hkBtn||!["Space","MetaLeft","MetaRight","ControlLeft","ControlRight","ShiftLeft","ShiftRight"].includes(e.code))return;const b=hkBtn;hkBtn=null;if(Date.now()-hkAt>600&&recording(b))stopRec()});
show(params.get("tab")||store.get("tab")||"vandaag")})();

</script>
</body>
</html>
`;
const SW = `self.addEventListener("install",()=>self.skipWaiting());self.addEventListener("activate",(e)=>e.waitUntil(self.clients.claim()));self.addEventListener("push",(event)=>{let data={};try{data=event.data?event.data.json():{}}catch{data={body:event.data&&event.data.text()}}event.waitUntil(self.registration.showNotification(data.title||"Life OS",{body:data.body||"",icon:"/icon.png",badge:"/icon.png",data:{url:data.url||"/"}}))});self.addEventListener("notificationclick",(event)=>{event.notification.close();const url=event.notification.data&&event.notification.data.url||"/";event.waitUntil((async()=>{const all=await self.clients.matchAll({type:"window",includeUncontrolled:true});for(const c of all){if("focus"in c){await c.focus();c.postMessage({type:"open",url});return}}await self.clients.openWindow(url)})())});`;
Bun.serve({ port: Number(Bun.env.PORT || 3000), fetch(req) {
if (new URL(req.url).pathname === "/sw.js") return new Response(SW, { headers: { "Content-Type": "text/javascript" } });
return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
} });
console.log("Life OS schermen draaien");

