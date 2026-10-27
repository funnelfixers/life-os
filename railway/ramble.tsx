// Life OS server: gegenereerd door build.ts (geminificeerd vanwege de maximale bestandsgrootte). Leesbare bron: src/server.ts.
var __require=import.meta.require;import Anthropic from"@anthropic-ai/sdk";import webpush from"web-push";var{SQL}=globalThis.Bun;import{deflateSync}from"zlib";var env=Bun.env,
APP_KEY=env.APP_KEY||env.RAMBLE_KEY||"",configured=Boolean(APP_KEY&&env.DATABASE_URL&&env.ANTHROPIC_API_KEY);if(!configured)console.error("Ontbrekende variabelen: APP_KEY (of RAMBLE_KEY), DATABASE_URL en ANTHROPIC_API_KEY zijn verplicht.");
var sql=new SQL(env.DATABASE_URL||"postgres://localhost/none"),client=new Anthropic({apiKey:env.ANTHROPIC_API_KEY||"missing"}),MODEL="claude-opus-5-5",pushReady=Boolean(env.VAPID_PUBLIC_KEY&&env.VAPID_PRIVATE_KEY);
if(pushReady)webpush.setVapidDetails(env.VAPID_SUBJECT||"mailto:coach@example.com",env.VAPID_PUBLIC_KEY,env.VAPID_PRIVATE_KEY);var TZ="Europe/Amsterdam",AREAS=[{
name:"Business",emoji:"🚀",desc:"Pinscale: klanten, sales, product, team",target:0,rhythm:"Dagelijks in deep work (9-12)"},{name:"Gezin & Eef",emoji:"👨‍👧‍👦",
desc:"De kids, Eef, samen tijd en dates",target:3,rhythm:"Dagelijks 17-21:30, 1 date per week"},{name:"Gezondheid",emoji:"💪",desc:"Training, voeding, slaap, energie",
target:3,rhythm:"4-5x per week trainen om 13:00"},{name:"Thuis",emoji:"🏠",desc:"Huishouden, klusjes, papierwerk",target:2,rhythm:"2x per week een power hour"},
{name:"Mezelf",emoji:"🌲",desc:"Natuur, reizen, hobby's, rust",target:2,rhythm:"1x per week natuur, 1x per kwartaal weg"},{name:"Vrienden",emoji:"🤝",
desc:"Vrienden, socializen, community",target:1,rhythm:"1x per week contact, 1x per maand afspreken"},{name:"Financi\xEBn",emoji:"💰",desc:"Geld, sparen, investeren, belasting",
target:1,rhythm:"1x per week geldmoment"}],RENAMED=[["Gezin","Gezin & Eef"],["Relatie","Gezin & Eef"],["Admin","Thuis"],["Groei","Mezelf"]],AREA_NAMES=AREAS.map((a)=>a.name),
HABITS=[{name:"Affirmation music",emoji:"🎧"},{name:"Morning exercise",emoji:"🏃"},{name:"10 breaths",emoji:"🌬️"},{name:"Water + supps",
emoji:"💧"},{name:"Sunlight",emoji:"☀️"},{name:"Journal",emoji:"📓"}],ENERGIE=["Hoog","Midden","Laag"],BLOKKEN=["Deep work","Shallow work",
"Thuis"],STATUSES=["inbox","today","doing","done","later"],SCHEDULE=[{start:"07:30",end:"09:00",title:"Ochtendroutine",emoji:"🌅"},{start:"09:00",end:"12:00",
title:"Deep work",emoji:"🎯"},{start:"12:00",end:"12:30",title:"Lunch",emoji:"🥗"},{start:"12:30",end:"13:00",title:"Vrij",emoji:"🌿"},
{start:"13:00",end:"14:30",title:"Trainen + douchen",emoji:"🏋️"},{start:"14:30",end:"16:30",title:"Shallow work",emoji:"📥"},{start:"16:30",
end:"17:00",title:"Plan morgen",emoji:"🗓️"},{start:"17:00",end:"20:00",title:"Gezin: koken, eten, opruimen, kids naar bed",emoji:"🍝"},
{start:"20:00",end:"21:30",title:"Vrije tijd / Eef",emoji:"❤️"}],CHECKINS=[{slot:"start",time:"08:52",days:[1,2,3,4,5],label:"Start deep work",prompt:'Het is 08:52, de ochtendroutine loopt af en om 9:00 begint deep work. Haal eerst het overzicht van vandaag op. Geef: (a) routine-score x/6 met \xE9\xE9n zin erkenning; ontbreekt het journal, nodig me in \xE9\xE9n zin uit om nog 2 minuten in te spreken (Journal-scherm), (b) staat er nog geen Top 3, kies er dan max. 3 met set_top3 (minstens \xE9\xE9n Deep work-taak die een actief doel vooruit helpt), (c) DE ene taak voor dit blok met de eerste stap van 5 minuten, (d) noem in \xE9\xE9n zin de 1%-leven-actie van vandaag (life) als die er is. Eindig met: "Telefoon weg. Start je om 9:00 met [eerste stap]?"'},
{slot:"middag",time:"14:27",days:[1,2,3,4,5],label:"Na training",prompt:"Het is 14:27, training is net klaar en shallow work begint. Haal het overzicht op. Vraag in \xE9\xE9n zin hoe het deep work-blok ging (welke Top 3-taak is af?) en of ik getraind heb. Noem de 3 belangrijkste open taken met Blok = Shallow work (en meetings uit de agenda als die er zijn)."},
{slot:"plan",time:"16:28",days:[1,2,3,4,5],label:"Dagreview + plan morgen",prompt:'Het is 16:28: dagreview en plan morgen, om 17:00 gaat de laptop dicht voor het gezin. Haal het overzicht op. Noem mijn Top 3 van vandaag en vraag: "Welke heb je afgerond?" Daarna (in volgende berichten, \xE9\xE9n vraag per keer): open Top 3-taken doorschuiven (postpone_task), dagscore 1-10 en \xE9\xE9n ding waar ik dankbaar voor ben (log_day), Top 3 voor morgen kiezen (set_top3 met morgen), afsluiten met een compliment en "Laptop dicht. Geniet van je avond met de kids en Eef."'},
{slot:"week",time:"16:28",days:[0],label:"Weekreview",prompt:`Het is zondag: weekreview. Gebruik get_week_review en get_areas_goals. Geef: (a) scorekaart (max. 6 regels), (b) wat ging goed: 3 concrete winsten + 3 dingen waar ik deze week dankbaar voor was (uit journal/dagreviews), (c) \xE9\xE9n patroon + \xE9\xE9n verbeterpunt, (d) levenswiel: per gebied 1%-acties deze week vs. doel (wheel); vraag: "Geef elk levensgebied een cijfer 1-10: ${AREA_NAMES.join(", ")}." en leg de cijfers vast met update_area, (e) daarna per gebied \xE9\xE9n focus voor volgende week (update_area week_focus), met voorrang voor gebieden die achterblijven. Is het Levenskompas nog niet ingevuld (geen kernwaarden), nodig me dan uit om het te doen (Doelen-scherm, \xB120 minuten).`}];
function nowParts(d=new Date){let p=Object.fromEntries(new Intl.DateTimeFormat("en-CA",{timeZone:TZ,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",
hour12:!1,weekday:"short"}).formatToParts(d).map((x)=>[x.type,x.value])),dow=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.weekday);return{date:`${p.year}-${p.month}-${p.day}`,
time:`${p.hour==="24"?"00":p.hour}:${p.minute}`,dow}}var today=()=>nowParts().date;function addDays(iso,n){let d=new Date(iso+"T12:00:00Z");return d.setUTCDate(d.getUTCDate()+n),
d.toISOString().slice(0,10)}function dayLabel(iso){return new Date(iso+"T12:00:00Z").toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"})}async function migrate(){
await sql`CREATE TABLE IF NOT EXISTS life_areas (
id serial PRIMARY KEY, name text UNIQUE NOT NULL, emoji text, sort int DEFAULT 0,
vision text DEFAULT '', satisfaction int, gratitude text DEFAULT '', focus text DEFAULT '', checked_at text)`,await sql`CREATE TABLE IF NOT EXISTS goals (
id serial PRIMARY KEY, title text NOT NULL, area text, why text DEFAULT '', metric text DEFAULT '',
deadline text, status text DEFAULT 'actief', progress int DEFAULT 0, created_at timestamptz DEFAULT now())`,await sql`CREATE TABLE IF NOT EXISTS tasks (
id serial PRIMARY KEY, title text NOT NULL, first_step text DEFAULT '', area text, energy text, block text,
status text DEFAULT 'inbox', top3_date text, deadline text, postponed int DEFAULT 0, goal_id int,
created_at timestamptz DEFAULT now(), done_at timestamptz)`,await sql`CREATE TABLE IF NOT EXISTS journal (
id serial PRIMARY KEY, date text NOT NULL, source text, title text, body text, summary text, mood int,
gratitude text DEFAULT '', intention text DEFAULT '', areas text DEFAULT '', created_at timestamptz DEFAULT now())`,await sql`CREATE TABLE IF NOT EXISTS habits (id serial PRIMARY KEY, name text UNIQUE NOT NULL, emoji text, sort int DEFAULT 0, active boolean DEFAULT true)`,
await sql`CREATE TABLE IF NOT EXISTS habit_log (date text NOT NULL, habit_id int NOT NULL, done boolean DEFAULT true, PRIMARY KEY (date, habit_id))`,await sql`CREATE TABLE IF NOT EXISTS days (
date text PRIMARY KEY, energy int, sleep numeric, score int, top3_done int, trained boolean,
wins text, blockers text, gratitude text, coach_note text)`,await sql`ALTER TABLE days ADD COLUMN IF NOT EXISTS plan jsonb`,await sql`CREATE TABLE IF NOT EXISTS training (
id serial PRIMARY KEY, date text NOT NULL, type text, minutes int, status text DEFAULT 'gedaan', reason text DEFAULT '')`,await sql`CREATE TABLE IF NOT EXISTS messages (
id serial PRIMARY KEY, role text NOT NULL, kind text DEFAULT 'chat', content text NOT NULL, created_at timestamptz DEFAULT now())`,await sql`CREATE TABLE IF NOT EXISTS push_subs (endpoint text PRIMARY KEY, sub jsonb NOT NULL, created_at timestamptz DEFAULT now())`,
await sql`CREATE TABLE IF NOT EXISTS checkins_sent (date text NOT NULL, slot text NOT NULL, PRIMARY KEY (date, slot))`,await sql`CREATE TABLE IF NOT EXISTS settings (key text PRIMARY KEY, value jsonb)`,
await sql`CREATE TABLE IF NOT EXISTS area_scores (week text NOT NULL, area text NOT NULL, score int, PRIMARY KEY (week, area))`,await sql`CREATE TABLE IF NOT EXISTS blocks (id serial PRIMARY KEY, task_id int, title text, date text NOT NULL, start_at text NOT NULL, minutes int NOT NULL)`,await sql`ALTER TABLE life_areas ADD COLUMN IF NOT EXISTS active boolean DEFAULT true`,
await sql`ALTER TABLE life_areas ADD COLUMN IF NOT EXISTS week_focus text DEFAULT ''`,await sql`ALTER TABLE life_areas ADD COLUMN IF NOT EXISTS rhythm text DEFAULT ''`,
await sql`ALTER TABLE life_areas ADD COLUMN IF NOT EXISTS target int DEFAULT 1`,await sql`ALTER TABLE goals ADD COLUMN IF NOT EXISTS kind text DEFAULT 'jaar'`,await sql`ALTER TABLE goals ADD COLUMN IF NOT EXISTS parent_id int`,
await sql`ALTER TABLE tasks ADD COLUMN IF NOT EXISTS life boolean DEFAULT false`,await sql`ALTER TABLE days ADD COLUMN IF NOT EXISTS life_task_id int`,await sql`ALTER TABLE training ADD COLUMN IF NOT EXISTS exercises jsonb`;for(let[from,
to]of RENAMED){await sql`UPDATE tasks SET area = ${to} WHERE area = ${from}`,await sql`UPDATE goals SET area = ${to} WHERE area = ${from}`;let[exists]=await sql`SELECT 1 FROM life_areas WHERE name = ${to}`;
if(exists)await sql`UPDATE life_areas SET active = false WHERE name = ${from}`;else await sql`UPDATE life_areas SET name = ${to} WHERE name = ${from}`}for(let[i,a]of AREAS.entries())await sql`INSERT INTO life_areas (name, emoji, sort, rhythm, target) VALUES (${a.name}, ${a.emoji}, ${i}, ${a.rhythm}, ${a.target})
ON CONFLICT (name) DO UPDATE SET emoji = EXCLUDED.emoji, sort = EXCLUDED.sort, active = true,
target = CASE WHEN COALESCE(life_areas.rhythm, '') = '' THEN EXCLUDED.target ELSE life_areas.target END,
rhythm = COALESCE(NULLIF(life_areas.rhythm, ''), EXCLUDED.rhythm)`;await sql`UPDATE life_areas SET active = false WHERE name NOT IN ${sql(AREA_NAMES)}`;for(let[i,
h]of HABITS.entries())await sql`INSERT INTO habits (name, emoji, sort) VALUES (${h.name}, ${h.emoji}, ${i}) ON CONFLICT (name) DO NOTHING`}var pick=(v,options,fallback)=>options.includes(v)?v:fallback,
isDate=(v)=>typeof v==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(v),str=(v,max=2000)=>v==null?"":String(v).slice(0,max);async function addTask(t){let title=str(t.taak??t.title,
300).trim();if(!title)throw Error("Taak zonder titel");let status=t.vandaag?"today":pick(t.status,STATUSES,"inbox"),[row]=await sql`INSERT INTO tasks (title, first_step, area, energy, block, status, top3_date, deadline, goal_id, life) VALUES (
${title}, ${str(t.eerste_stap??t.first_step,500)}, ${pick(t.gebied??t.area,AREA_NAMES,null)},
${pick(t.energie??t.energy,ENERGIE,null)}, ${pick(t.blok??t.block,BLOKKEN,null)}, ${status},
${t.vandaag?today():null}, ${isDate(t.deadline)?t.deadline:null}, ${Number.isInteger(t.goal_id)?t.goal_id:null}, ${t.life===!0}
) RETURNING *`;return row}async function updateTask(id,f){let set={};if(f.title!=null)set.title=str(f.title,300);if(f.first_step!=null)set.first_step=str(f.first_step,
500);if(f.area!==void 0)set.area=pick(f.area,AREA_NAMES,null);if(f.energy!==void 0)set.energy=pick(f.energy,ENERGIE,null);if(f.block!==void 0)set.block=pick(f.block,
BLOKKEN,null);if(f.deadline!==void 0)set.deadline=isDate(f.deadline)?f.deadline:null;if(f.top3_date!==void 0)set.top3_date=isDate(f.top3_date)?f.top3_date:null;if(f.goal_id!==void 0)set.goal_id=Number.isInteger(f.goal_id)?f.goal_id:null;
if(f.status!=null){let s=pick(f.status,STATUSES,null);if(!s)throw Error("Ongeldige status");set.status=s,set.done_at=s==="done"?new Date:null}if(!Object.keys(set).length)throw Error("Niets om bij te werken");
let[row]=await sql`UPDATE tasks SET ${sql(set)} WHERE id = ${id} RETURNING *`;if(!row)throw Error(`Taak ${id} niet gevonden`);return row}async function postponeTask(id,
toDate){let[row]=await sql`UPDATE tasks SET postponed = postponed + 1, top3_date = ${toDate}, status = 'today'
WHERE id = ${id} RETURNING *`;if(!row)throw Error(`Taak ${id} niet gevonden`);return row}async function setTop3(date,ids){if(ids.length>3)throw Error("Maximaal 3 taken in je Top 3");
if(await sql`UPDATE tasks SET top3_date = NULL WHERE top3_date = ${date} AND status <> 'done'`,ids.length)await sql`UPDATE tasks SET top3_date = ${date}, status = CASE WHEN status = 'done' THEN status ELSE 'today' END WHERE id IN ${sql(ids)}`;
return sql`SELECT * FROM tasks WHERE top3_date = ${date} ORDER BY id`}async function habitsFor(date){return sql`SELECT h.id, h.name, h.emoji, COALESCE(l.done, false) AS done FROM habits h
LEFT JOIN habit_log l ON l.habit_id = h.id AND l.date = ${date} WHERE h.active ORDER BY h.sort, h.id`}async function setHabit(date,habitId,done){await sql`INSERT INTO habit_log (date, habit_id, done) VALUES (${date}, ${habitId}, ${done})
ON CONFLICT (date, habit_id) DO UPDATE SET done = EXCLUDED.done`}async function setHabitByName(date,name,done){let[h]=await sql`SELECT id FROM habits WHERE name = ${name}`;
if(h)await setHabit(date,h.id,done)}async function logDay(date,f){let row={date};for(let k of["energy","score","top3_done"])if(f[k]!=null)row[k]=Math.round(Number(f[k]));
if(f.sleep!=null)row.sleep=Number(f.sleep);if(f.trained!=null)row.trained=Boolean(f.trained);for(let k of["wins","blockers","gratitude","coach_note"])if(f[k]!=null)row[k]=str(f[k]);
let cols=Object.keys(row).filter((k)=>k!=="date");if(!cols.length)return(await sql`SELECT * FROM days WHERE date = ${date}`)[0]??null;let[r]=await sql`INSERT INTO days ${sql(row)} ON CONFLICT (date) DO UPDATE SET ${sql(row,
...cols)} RETURNING *`;return r}function currentBlock(time,schedule){return{now:schedule.find((b)=>time>=b.start&&time<b.end)??null,next:schedule.find((b)=>b.start>time)??null}}async function setDayPlan(date,
blocks){let hhmm=(v)=>/^\d{2}:\d{2}$/.test(String(v)),plan=(Array.isArray(blocks)?blocks:[]).filter((b)=>hhmm(b?.start)&&hhmm(b?.end)&&b.title).map((b)=>({start:b.start,
end:b.end,title:str(b.title,80),emoji:str(b.emoji||"•",8)})).sort((a,b)=>a.start.localeCompare(b.start)).slice(0,30),value=plan.length?JSON.stringify(plan):null;
return await sql`INSERT INTO days (date, plan) VALUES (${date}, ${value}::jsonb) ON CONFLICT (date) DO UPDATE SET plan = EXCLUDED.plan`,{date,plan:plan.length?plan:"standaard"}}async function overview(date=today()){
let{time,dow}=nowParts(),[habits,top3,todayTasks,journal,day,training,events,plan]=await Promise.all([habitsFor(date),sql`SELECT * FROM tasks WHERE top3_date = ${date} ORDER BY (status = 'done'), id`,
sql`SELECT * FROM tasks WHERE status IN ('today','doing') AND (top3_date IS NULL OR top3_date <> ${date}) ORDER BY id`,sql`SELECT id, title, summary, mood, gratitude, intention FROM journal WHERE date = ${date} ORDER BY id`,
sql`SELECT * FROM days WHERE date = ${date}`,sql`SELECT * FROM training WHERE date = ${date}`,calendarEvents(date),getPlan()]),wd=date===today()?dow:new Date(date+"T12:00Z").getUTCDay(),
workday=wd>=1&&wd<=5,custom=day[0]?.plan?typeof day[0].plan==="string"?JSON.parse(day[0].plan):day[0].plan:null,schedule=custom??(workday?trainSchedule(plan,date):[]);return{date,
label:dayLabel(date),time,workday,customPlan:!!custom,block:date===today()?currentBlock(time,schedule):{now:null,next:null},schedule,habits,top3,todayTasks,journal,
day:day[0]??null,training,events,life:date===today()?await lifeAction(date).catch((e)=>{return console.warn("Leven-actie:",e.message),null}):null,compass:date===today()?!!await getSetting("values"):null,workout:workoutFor(plan,date),google:{configured:gConfigured(),connected:!!await googleConf(),error:gErr}}}var icsCache=null,gToken=null,gErr=null,GCAL="https://www.googleapis.com/calendar/v3/calendars/primary/events",gConfigured=()=>Boolean(env.GOOGLE_CLIENT_ID&&env.GOOGLE_CLIENT_SECRET),
gRedirect=()=>env.GOOGLE_REDIRECT_URI||`https://${env.RAILWAY_PUBLIC_DOMAIN}/api/google/callback`,googleConf=async()=>gConfigured()?parseJson(await getSetting("google")):null;
async function googleAuthUrl(){let state=crypto.randomUUID();return await setSetting("google_state",state),"https://accounts.google.com/o/oauth2/v2/auth?"+new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,
redirect_uri:gRedirect(),response_type:"code",scope:"https://www.googleapis.com/auth/calendar.events",access_type:"offline",prompt:"consent",state})}async function googleToken(body){
let r=await fetch("https://oauth2.googleapis.com/token",{method:"POST",body:new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET,...body})}),d=await r.json().catch(()=>({}));
if(!r.ok){if(d.error==="invalid_grant"&&body.refresh_token)await sql`DELETE FROM settings WHERE key = 'google'`;throw Error(`Google: ${d.error_description||d.error||r.status}`)}return gToken={token:d.access_token,
exp:Date.now()+((d.expires_in||3600)-60)*1000},d}async function googleCallback(url){let state=parseJson(await getSetting("google_state"));if(!state||url.searchParams.get("state")!==state)throw Error("Ongeldige of verlopen koppel-link, probeer opnieuw");
let d=await googleToken({code:url.searchParams.get("code")||"",grant_type:"authorization_code",redirect_uri:gRedirect()});if(!d.refresh_token)throw Error("Geen refresh token van Google ontvangen");
await setSetting("google",{refresh_token:d.refresh_token,since:today()}),await sql`DELETE FROM settings WHERE key = 'google_state'`,gErr=null}async function gFetch(path,opts={}){let conf=await googleConf();
if(!conf?.refresh_token)throw Error("Google Calendar is niet gekoppeld");if(!gToken||Date.now()>gToken.exp)await googleToken({refresh_token:conf.refresh_token,grant_type:"refresh_token"});let r=await fetch(GCAL+path,
{...opts,headers:{Authorization:`Bearer ${gToken.token}`,"Content-Type":"application/json"}});if(r.status===204)return null;let d=await r.json().catch(()=>({}));if(!r.ok)throw Error(`Google Calendar: ${d.error?.message||r.status}`);return d}
async function googleEvents(date){let d=await gFetch("?"+new URLSearchParams({timeMin:addDays(date,-1)+"T12:00:00Z",timeMax:addDays(date,1)+"T12:00:00Z",singleEvents:"true",orderBy:"startTime",maxResults:"100"})),out=[];
for(let ev of d.items||[]){if(ev.status==="cancelled")continue;let base={id:ev.id,title:str(ev.summary||"(geen titel)",120),task:Number(ev.extendedProperties?.private?.lifeosTask)||null};if(ev.start?.date){
if(ev.start.date<=date&&date<(ev.end?.date||addDays(ev.start.date,1)))out.push({...base,start:"hele dag",end:""});continue}let s=nowParts(new Date(ev.start.dateTime)),e=nowParts(new Date(ev.end.dateTime));
if(s.date===date)out.push({...base,start:s.time,end:e.date===date?e.time:"23:59"})}return out}var hm=(m)=>String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0"),gTime=(date,time)=>({dateTime:`${date}T${time}:00`,timeZone:TZ});
async function blockTask(f){let date=isDate(f.date)?f.date:today(),start=/^\d{2}:\d{2}$/.test(f.start)?f.start:null;if(!start)throw Error("Ongeldige starttijd (HH:MM)");let minutes=Math.max(15,Math.min(Math.round(Number(f.minutes)||60),600)),
end=hm(Math.min(minutesBetween("00:00",start)+minutes,1439)),when={start:gTime(date,start),end:gTime(date,end)};if(String(f.event_id||"").startsWith("lb")||!f.event_id&&!await googleConf().catch(()=>null))return localBlock(f,date,start,minutes);if(f.event_id)return gFetch("/"+encodeURIComponent(f.event_id),{method:"PATCH",body:JSON.stringify(when)});
let[t]=await sql`SELECT * FROM tasks WHERE id = ${Number(f.task_id)}`;if(!t)throw Error("Taak niet gevonden");if(date===today()&&["inbox","later"].includes(t.status))await updateTask(t.id,{status:"today"});
return gFetch("",{method:"POST",body:JSON.stringify({...when,summary:(t.block==="Deep work"?"🎯 ":"✅ ")+t.title,description:(t.first_step?`Eerste stap: ${t.first_step}

`:"")+"Ingepland vanuit Life OS",extendedProperties:{private:{lifeosTask:String(t.id)}}})})}
async function localBlock(f,date,start,minutes){if(f.event_id){let[b]=await sql`UPDATE blocks SET date = ${date}, start_at = ${start}, minutes = ${minutes} WHERE id = ${Number(String(f.event_id).slice(2))} RETURNING *`;if(!b)throw Error("Blok niet gevonden");return b}
let[t]=await sql`SELECT * FROM tasks WHERE id = ${Number(f.task_id)}`;if(!t)throw Error("Taak niet gevonden");if(date===today()&&["inbox","later"].includes(t.status))await updateTask(t.id,{status:"today"});
let[b]=await sql`INSERT INTO blocks (task_id, title, date, start_at, minutes) VALUES (${t.id}, ${(t.block==="Deep work"?"🎯 ":"✅ ")+t.title}, ${date}, ${start}, ${minutes}) RETURNING *`;return b}
async function calendarEvents(date){let[ev,lb]=await Promise.all([extEvents(date),(async()=>sql`SELECT * FROM blocks WHERE date = ${date}`)().catch(()=>[])]);
return[...ev,...lb.map((b)=>({id:"lb"+b.id,title:b.title,task:b.task_id,start:b.start_at,end:hm(Math.min(minutesBetween("00:00",b.start_at)+b.minutes,1439))}))].sort((a,b)=>a.start<b.start?-1:a.start>b.start?1:0)}
async function extEvents(date){if(await googleConf().catch(()=>null))try{let ev=await googleEvents(date);return gErr=null,ev}catch(e){gErr=e.message,console.warn("Google Calendar:",e.message)}if(!env.ICS_URL)return[];try{if(!icsCache||Date.now()-icsCache.at>600000){let r=await fetch(env.ICS_URL);icsCache={at:Date.now(),
text:await r.text()}}let data=(await import("node-ical")).sync.parseICS(icsCache.text),dayStart=new Date(`${date}T00:00:00Z`).getTime()-10800000,dayEnd=dayStart+108000000,
out=[],fmt=(d)=>nowParts(d);for(let ev of Object.values(data)){if(ev.type!=="VEVENT")continue;let dur=(ev.end?.getTime?.()??ev.start.getTime())-ev.start.getTime(),
starts=ev.rrule?ev.rrule.between(new Date(dayStart),new Date(dayEnd),!0):[ev.start];for(let s of starts){if(ev.exdate&&Object.values(ev.exdate).some((x)=>x.getTime()===s.getTime()))continue;
let p=fmt(s);if(p.date!==date)continue;out.push({start:ev.datetype==="date"?"hele dag":p.time,end:fmt(new Date(s.getTime()+dur)).time,title:str(ev.summary,120)})}}return out.sort((a,
b)=>a.start.localeCompare(b.start))}catch(e){return console.warn("Agenda niet gelezen:",e.message),[]}}var TASK_ITEM_SCHEMA={type:"object",properties:{taak:{type:"string",
description:"Korte, actiegerichte taaknaam, begint met een werkwoord"},eerste_stap:{type:"string",description:"Concrete eerste stap van max. 5 minuten"},gebied:{
type:"string",enum:AREA_NAMES},energie:{type:"string",enum:ENERGIE},blok:{type:"string",enum:BLOKKEN},deadline:{type:["string","null"],description:"YYYY-MM-DD of null"},
vandaag:{type:"boolean",description:"true als de spreker zegt dat het vandaag moet"}},required:["taak","eerste_stap","gebied","energie","blok","deadline","vandaag"],
additionalProperties:!1},TASKS_SCHEMA={type:"object",properties:{tasks:{type:"array",items:TASK_ITEM_SCHEMA}},required:["tasks"],additionalProperties:!1},JOURNAL_SCHEMA={
type:"object",properties:{tekst:{type:"string",description:"De volledige journaltekst, getrouw (bij een foto: letterlijk overgenomen handschrift)"},titel:{type:"string",
description:"Korte titel van 3-6 woorden"},samenvatting:{type:"string",description:"2-3 zinnen: wat speelt er"},stemming:{type:"integer",description:"Ingeschatte stemming 1-10"},
dankbaar:{type:"string",description:"Waar de schrijver dankbaar voor is (leeg als niet genoemd)"},intentie:{type:"string",description:"Intentie of focus voor vandaag (leeg als niet genoemd)"},
gebieden:{type:"array",items:{type:"string",enum:AREA_NAMES}},tasks:{type:"array",items:TASK_ITEM_SCHEMA,description:"Concrete acties die in het journal genoemd worden"}},
required:["tekst","titel","samenvatting","stemming","dankbaar","intentie","gebieden","tasks"],additionalProperties:!1},TASK_RULES=`Regels voor taken:
- E\xE9n taak per afzonderlijke actie. Voeg dubbelingen samen. Negeer opvulwoorden, twijfels en gedachten die geen actie zijn.
- Taaknaam: kort, begint met een werkwoord ("Factuur sturen naar Bakker").
- Eerste stap: belachelijk klein en concreet, max. 5 minuten ("Open Moneybird en dupliceer vorige factuur").
- Gebied (life area): ${AREAS.map((a)=>`${a.name} (${a.desc})`).join(", ")}.
- Energie: Hoog (diep denkwerk/creatief/lastige gesprekken), Midden, Laag (simpel/routinematig).
- Blok: "Deep work" (9:00-12:00, focus en creatief werk dat het bedrijf vooruit helpt), "Shallow work" (14:30-16:30, admin, mails, bellen, meetings, simpele taken), "Thuis" (priv\xE9/huishouden, buiten werktijd).
- Deadline alleen als die genoemd of duidelijk afgeleid wordt ("morgen", "vrijdag", "eind van de maand"); anders null. Reken vanaf vandaag.
- Herstel duidelijke spraakfouten in namen/woorden.`;async function structured(system,content,schema){let params={model:MODEL,max_tokens:16000,output_config:{effort:"low",
format:{type:"json_schema",schema}},system,messages:[{role:"user",content}]},response;try{response=await client.beta.messages.create({...params,betas:["server-side-fallback-2026-07-01"],
fallbacks:"default"})}catch(e){if(!(e instanceof Anthropic.BadRequestError))throw e;console.warn("Fallback niet geaccepteerd, opnieuw zonder:",e.message),response=await client.messages.create(params)}if(response.stop_reason==="refusal")throw Error("Claude kon dit niet verwerken.");
if(response.stop_reason==="max_tokens")throw Error("Te lang, splits het op.");let block=response.content.find((b)=>b.type==="text");return JSON.parse(block.text)}async function extractTasks(text){
return(await structured(`Je zet een rommelige gesproken braindump (Nederlands, soms Engels, met spraakherkenningsfouten) om in losse taken voor een ondernemer met ADHD.
${TASK_RULES}`,`Vandaag is het ${dayLabel(today())} (${today()}).

Braindump:
${text}`,TASKS_SCHEMA)).tasks}async function processJournal(text,image){let content=[];if(image)content.push({type:"image",source:{type:"base64",media_type:image.media_type,
data:image.data}});content.push({type:"text",text:`Vandaag is het ${dayLabel(today())} (${today()}).

`+(image?"Dit is een foto van mijn handgeschreven journal."+(text?`
Aanvulling (ingesproken):
${text}`:""):`Mijn journal (ingesproken):
${text}`)});let j=await structured(`Je verwerkt het ochtendjournal van een ondernemer met ADHD (vader, partner van Eef). Het journal is ingesproken (spraakherkenning, met fouten) of een foto van een handgeschreven pagina.
- Neem de tekst volledig en getrouw over in "tekst": herstel alleen spraak-/leesfouten, verander niets aan de inhoud. Onleesbare woorden: [?].
- Vat warm en kort samen, zonder te oordelen.
- Haal alleen taken eruit die echt als actie genoemd worden.
${TASK_RULES}`,content,JOURNAL_SCHEMA),date=today(),[row]=await sql`INSERT INTO journal (date, source, title, body, summary, mood, gratitude, intention, areas) VALUES (
${date}, ${image?"foto":"spraak"}, ${str(j.titel,200)}, ${str(j.tekst,50000)}, ${str(j.summary??j.samenvatting)},
${Math.max(1,Math.min(10,Number(j.stemming)||5))}, ${str(j.dankbaar)}, ${str(j.intentie)},
${(j.gebieden||[]).filter((g)=>AREA_NAMES.includes(g)).join(",")}
) RETURNING *`,tasks=[];for(let t of j.tasks||[])tasks.push(await addTask(t));return await setHabitByName(date,"Journal",!0),{entry:row,tasks}}var DOW_NL=["zo","ma","di","wo","do","vr","za"],TRAIN_STATUS=["gedaan","gepland","overgeslagen"],
dowOf=(date)=>new Date(date+"T12:00Z").getUTCDay();function cleanPlan(p){let seen=new Set,days=(Array.isArray(p?.days)?p.days:[]).map((d)=>({dow:Number(d?.dow),
title:str(d?.title,60).trim(),focus:str(d?.focus,200).trim(),minutes:Number(d?.minutes)>0?Math.min(Math.round(Number(d.minutes)),240):null,exercises:(Array.isArray(d?.exercises)?d.exercises:[]).slice(0,
20).map((e)=>({name:str(e?.name,80).trim(),dose:str(e?.dose,60).trim(),note:str(e?.note,200).trim()})).filter((e)=>e.name)})).filter((d)=>Number.isInteger(d.dow)&&d.dow>=0&&d.dow<=6&&d.title&&!seen.has(d.dow)&&seen.add(d.dow)).sort((a,
b)=>(a.dow+6)%7-(b.dow+6)%7);return{goal:str(p?.goal,300).trim(),days,updated:today()}}var getPlan=async()=>{let p=await getSetting("training_plan");return p?parseJson(p):null},
setPlan=async(p)=>{let plan=cleanPlan(p);return await setSetting("training_plan",plan),plan};function workoutFor(plan,date){if(!plan?.days?.length)return null;let w=plan.days.find((d)=>d.dow===dowOf(date));
return w?{...w,date}:{rest:!0,dow:dowOf(date),date}}function trainSchedule(plan,date){let w=workoutFor(plan,date);return w?SCHEDULE.map((b)=>b.start==="13:00"?{...b,title:w.rest?"Rustdag: wandelen of vrij":"Training: "+w.title}:b):SCHEDULE}
async function trainingWeek(date=today()){let ws=weekStart(date),[plan,sessions,history]=await Promise.all([getPlan(),sql`SELECT * FROM training WHERE date >= ${ws} AND date <= ${addDays(ws,6)} ORDER BY date, id`,
sql`SELECT * FROM training WHERE status = 'gedaan' ORDER BY date DESC, id DESC LIMIT 40`]),last={};for(let s of history)for(let e of parseJson(s.exercises)||[])if(e.result&&!last[e.name])last[e.name]={
result:e.result,date:s.date};let days=Array.from({length:7},(_,i)=>{let d=addDays(ws,i),s=sessions.filter((x)=>x.date===d).pop();return{date:d,label:DOW_NL[dowOf(d)],workout:workoutFor(plan,d),
session:s?{...s,exercises:parseJson(s.exercises)}:null}});
return{plan,today:today(),days,done:sessions.filter((s)=>s.status==="gedaan").length,target:plan?.days?.length||null,last,history:history.slice(0,10).map((s)=>({...s,exercises:parseJson(s.exercises)}))}}
async function logTraining(f){let date=isDate(f.date)?f.date:today();if(f.undo)return await sql`DELETE FROM training WHERE date = ${date}`,await logDay(date,{trained:!1}),{date,undone:!0};
let status=pick(f.status,TRAIN_STATUS,"gedaan"),w=workoutFor(await getPlan(),date),ex=Array.isArray(f.exercises)?JSON.stringify(f.exercises.slice(0,20).map((e)=>({name:str(e?.name,80).trim(),
result:str(e?.result,60).trim(),done:e?.done!==!1})).filter((e)=>e.name)):null,type=str(f.type||(w&&!w.rest?w.title:""),50),minutes=Number.isInteger(f.minutes)?f.minutes:w?.minutes??null,
reason=str(f.reason,500),[cur]=await sql`SELECT id FROM training WHERE date = ${date} ORDER BY id DESC LIMIT 1`,[row]=cur?await sql`UPDATE training SET type = ${type}, minutes = ${minutes}, status = ${status},
reason = ${reason}, exercises = COALESCE(${ex}::jsonb, exercises) WHERE id = ${cur.id} RETURNING *`:await sql`INSERT INTO training (date, type, minutes, status, reason, exercises)
VALUES (${date}, ${type}, ${minutes}, ${status}, ${reason}, ${ex}::jsonb) RETURNING *`;if(status!=="gepland")await logDay(date,{trained:status==="gedaan"});return row}
var TRAIN_SCHEMA={type:"object",properties:{goal:{type:"string",description:"Doel van het schema in \xE9\xE9n zin"},days:{type:"array",description:"Alleen trainingsdagen, rustdagen weglaten",
items:{type:"object",properties:{dow:{type:"integer",description:"0=zo, 1=ma, 2=di, 3=wo, 4=do, 5=vr, 6=za"},title:{type:"string",description:"Korte naam, bijv. 'Push', 'Benen', 'Hardlopen'"},
focus:{type:"string",description:"E\xE9n zin: waar deze sessie om draait"},minutes:{type:"integer"},exercises:{type:"array",items:{type:"object",properties:{name:{type:"string"},
dose:{type:"string",description:"bijv. '4x8', '3x10-12', '20 min zone 2'"},note:{type:"string",description:"Korte tip (techniek, tempo, rust), mag leeg"}},required:["name",
"dose","note"],additionalProperties:!1}}},required:["dow","title","focus","minutes","exercises"],additionalProperties:!1}}},required:["goal","days"],additionalProperties:!1};
async function generatePlan(b){let cur=await getPlan(),wish={doel:str(b.goal,300),dagen_per_week:Math.max(1,Math.min(7,Number(b.days)||4)),niveau:str(b.level,40),materiaal:str(b.equipment,
200),beperkingen:str(b.notes,500)};return setPlan(await structured(`Je bent een ervaren personal trainer. Maak een realistisch weekschema voor een drukke ondernemer met ADHD (ouder van jonge kinderen).
- Op werkdagen traint hij om 13:00-14:30 inclusief douchen: sessies van max. \xB160 minuten op ma-vr. Weekend alleen als het aantal dagen daarom vraagt.
- ADHD-proof: vaste dagen, 4-6 oefeningen per sessie, warming-up kort in de eerste oefening, duidelijke sets x herhalingen, ruimte voor progressie.
- Spreid zware sessies, geen twee keer dezelfde spiergroep op opeenvolgende dagen. Houd rekening met materiaal en beperkingen.
- Nederlands; gangbare Engelse oefeningnamen mogen.`,`Wensen: ${JSON.stringify(wish)}${cur?`
Huidig schema (verbeter dit, behoud wat werkt): ${JSON.stringify(cur)}`:""}`,TRAIN_SCHEMA))}var COACH_TOOLS=[{
name:"get_overview",description:"Overzicht van een dag: habits, Top 3, andere taken voor vandaag, journal, dagreview, training, agenda en dagindeling. Standaard vandaag.",
input_schema:{type:"object",properties:{date:{type:"string",description:"YYYY-MM-DD"}}}},{name:"list_tasks",description:"Taken opvragen, optioneel gefilterd. Status: inbox, today, doing, done, later.",
input_schema:{type:"object",properties:{status:{type:"array",items:{type:"string",enum:STATUSES}},area:{type:"string",enum:AREA_NAMES},block:{type:"string",enum:BLOKKEN},
limit:{type:"integer"}}}},{name:"add_task",description:"Nieuwe taak toevoegen (altijd met een eerste stap van max. 5 minuten).",input_schema:{type:"object",properties:{
title:{type:"string"},first_step:{type:"string"},area:{type:"string",enum:AREA_NAMES},energy:{type:"string",enum:ENERGIE},block:{type:"string",enum:BLOKKEN},status:{
type:"string",enum:STATUSES},deadline:{type:"string",description:"YYYY-MM-DD"},goal_id:{type:"integer"},life:{type:"boolean",description:"true = kleine 1%-stap (max. 15 min) richting een droom/doel in een levensgebied buiten werk"}},
required:["title","first_step"]}},{name:"update_task",description:"Taak bijwerken (bijv. status 'done' bij afgerond, 'later' bij parkeren, of titel/eerste stap/blok aanpassen).",
input_schema:{type:"object",properties:{id:{type:"integer"},title:{type:"string"},first_step:{type:"string"},status:{type:"string",enum:STATUSES},area:{type:"string",
enum:AREA_NAMES},energy:{type:"string",enum:ENERGIE},block:{type:"string",enum:BLOKKEN},deadline:{type:"string"},goal_id:{type:"integer"}},required:["id"]}},{name:"postpone_task",
description:"Top 3-taak die niet af is doorschuiven naar een andere dag; verhoogt 'postponed' met 1.",input_schema:{type:"object",properties:{id:{type:"integer"},
to_date:{type:"string",description:"YYYY-MM-DD"}},required:["id","to_date"]}},{name:"set_top3",description:"De Top 3 (max. 3 taken) voor een dag vastleggen. Vervangt de huidige Top 3 van die dag.",
input_schema:{type:"object",properties:{date:{type:"string"},task_ids:{type:"array",items:{type:"integer"},maxItems:3}},required:["date","task_ids"]}},{name:"log_day",
description:"Dagreview vastleggen/aanvullen: energie (1-10), slaap (uren), dagscore (1-10), aantal Top 3 gehaald, getraind, wat werkte, wat blokkeerde, dankbaarheid, coachnotitie.",
input_schema:{type:"object",properties:{date:{type:"string"},energy:{type:"integer"},sleep:{type:"number"},score:{type:"integer"},top3_done:{type:"integer"},trained:{
type:"boolean"},wins:{type:"string"},blockers:{type:"string"},gratitude:{type:"string"},coach_note:{type:"string"}},required:["date"]}},{name:"log_training",description:"Training van een dag loggen (gedaan, gepland of overgeslagen + reden). Overschrijft een eerdere log van die dag. Type leeg = de training uit het schema.",
input_schema:{type:"object",properties:{date:{type:"string"},type:{type:"string",description:"bijv. Push, Benen, wandelen"},minutes:{type:"integer"},status:{type:"string",
enum:["gedaan","gepland","overgeslagen"]},reason:{type:"string"},exercises:{type:"array",description:"Optioneel: resultaat per oefening",items:{type:"object",properties:{
name:{type:"string"},result:{type:"string",description:"bijv. '60 kg x 8' of '5 km in 28 min'"}},required:["name"]}}},required:["date","status"]}},{name:"get_training",
description:"Trainingsschema plus de week rond een datum: geplande training per dag, wat er gelogd is, aantal gedaan vs. doel, laatste resultaat per oefening en recente trainingen.",
input_schema:{type:"object",properties:{date:{type:"string",description:"YYYY-MM-DD, standaard vandaag"}}}},{name:"set_training_plan",description:"Trainingsschema vastleggen of aanpassen. Geef het VOLLEDIGE schema (alleen trainingsdagen; rustdagen weglaten). Vervangt het huidige schema.",
input_schema:{type:"object",properties:{goal:{type:"string"},days:{type:"array",items:{type:"object",properties:{dow:{type:"integer",description:"0=zo, 1=ma ... 6=za"},
title:{type:"string"},focus:{type:"string"},minutes:{type:"integer"},exercises:{type:"array",items:{type:"object",properties:{name:{type:"string"},dose:{type:"string",
description:"bijv. 4x8"},note:{type:"string"}},required:["name"]}}},required:["dow","title"]}}},required:["days"]}},{name:"block_task",description:"Timeblocken: een taak als blok in Raouls Google Calendar zetten (of een bestaand Life OS-blok verplaatsen met event_id). Plan alleen in vrije ruimte (zie events) en passend bij de dagindeling.",
input_schema:{type:"object",properties:{task_id:{type:"integer"},event_id:{type:"string",description:"id van een bestaand blok om te verplaatsen"},date:{type:"string",description:"YYYY-MM-DD"},start:{type:"string",description:"HH:MM"},
minutes:{type:"integer",description:"Duur, standaard 60"}},required:["start"]}},{name:"list_journal",description:"Journal-entries van de afgelopen dagen (samenvatting, stemming, dankbaarheid, intentie).",
input_schema:{type:"object",properties:{days:{type:"integer"}}}},{name:"get_areas_goals",description:"Levenskompas: kernwaarden, alle levensgebieden (droom, tevredenheid, dankbaarheid, weekfocus, ritme, 1%-acties deze week vs. doel) en doelen (jaar + kwartaal).",
input_schema:{type:"object",properties:{}}},{name:"update_area",description:"Levensgebied bijwerken: tevredenheid 1-10 (telt mee in het levenswiel), droom (vision, 3 jaar), waar ik al dankbaar voor ben, focus deze week, ritme, aantal 1%-acties per week (target).",
input_schema:{type:"object",properties:{name:{type:"string",enum:AREA_NAMES},satisfaction:{type:"integer"},vision:{type:"string"},gratitude:{type:"string"},week_focus:{
type:"string"},rhythm:{type:"string"},target:{type:"integer"}},required:["name"]}},{name:"save_goal",description:"Doel toevoegen (zonder id) of bijwerken (met id). Status: actief, gepauzeerd, behaald, losgelaten.",
input_schema:{type:"object",properties:{id:{type:"integer"},title:{type:"string"},area:{type:"string",enum:AREA_NAMES},why:{type:"string"},metric:{type:"string"},
deadline:{type:"string"},status:{type:"string",enum:["actief","gepauzeerd","behaald","losgelaten"]},progress:{type:"integer",description:"0-100"},kind:{type:"string",
enum:["jaar","kwartaal"]},parent_id:{type:"integer",description:"bij een kwartaal-mijlpaal: id van het jaardoel"}}}},{name:"get_week_review",description:"Cijfers en notities van de afgelopen 7 dagen: habits per dag, Top 3 gehaald, trainingen, dagscores, stemming, dankbaarheid, meest uitgestelde taken.",
input_schema:{type:"object",properties:{}}},{name:"set_day_plan",description:"Dagindeling van een dag aanpassen als plannen veranderen (afspraak, ziek kind, training verschuift, vrije dag). Geef de VOLLEDIGE nieuwe indeling van de hele dag. Lege lijst = terug naar de standaard werkdag.",
input_schema:{type:"object",properties:{date:{type:"string",description:"YYYY-MM-DD, standaard vandaag"},blocks:{type:"array",items:{type:"object",properties:{start:{
type:"string",description:"HH:MM"},end:{type:"string",description:"HH:MM"},title:{type:"string"},emoji:{type:"string"}},required:["start","end","title"]}}},required:["blocks"]}}];
async function runTool(name,input){let d=(v)=>isDate(v)?v:today();switch(name){case"get_overview":return overview(d(input.date));case"list_tasks":{let status=Array.isArray(input.status)&&input.status.length?input.status.filter((s)=>STATUSES.includes(s)):["inbox",
"today","doing"],limit=Math.min(Number(input.limit)||60,200);return sql`SELECT * FROM tasks WHERE status IN ${sql(status)}
AND (${input.area??null}::text IS NULL OR area = ${input.area??null})
AND (${input.block??null}::text IS NULL OR block = ${input.block??null})
ORDER BY postponed DESC, deadline NULLS LAST, id LIMIT ${limit}`}case"add_task":return addTask(input);case"update_task":return updateTask(Number(input.id),input);
case"postpone_task":return postponeTask(Number(input.id),d(input.to_date));case"set_top3":return setTop3(d(input.date),(input.task_ids||[]).map(Number));case"log_day":return logDay(d(input.date),
input);case"log_training":return logTraining(input);case"get_training":return trainingWeek(d(input.date));case"set_training_plan":return setPlan(input);case"block_task":return blockTask(input);case"list_journal":{let since=addDays(today(),-Math.min(Number(input.days)||7,60));return sql`SELECT id, date, title, summary, mood, gratitude, intention, areas FROM journal WHERE date >= ${since} ORDER BY date DESC, id DESC`}case"get_areas_goals":return areasAndGoals();
case"update_area":return updateArea(input);case"save_goal":return saveGoal(input);case"get_week_review":return weekReview();case"set_day_plan":return setDayPlan(d(input.date),
input.blocks);default:throw Error(`Onbekende tool: ${name}`)}}var weekStart=(date=today())=>{let dow=(new Date(date+"T12:00Z").getUTCDay()+6)%7;return addDays(date,
-dow)},getSetting=async(k)=>(await sql`SELECT value FROM settings WHERE key = ${k}`)[0]?.value??null,setSetting=(k,v)=>sql`INSERT INTO settings (key, value) VALUES (${k}, ${JSON.stringify(v)}::jsonb) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
parseJson=(v)=>typeof v==="string"?JSON.parse(v):v;async function areasAndGoals(){let ws=weekStart(),[areas,goals,week,total,prev,values]=await Promise.all([sql`SELECT * FROM life_areas WHERE active ORDER BY sort, id`,
sql`SELECT * FROM goals ORDER BY (status <> 'actief'), kind, deadline NULLS LAST, id`,sql`SELECT area, count(*)::int AS n FROM tasks WHERE life AND status = 'done' AND done_at >= ${ws}::date GROUP BY area`,
sql`SELECT area, count(*)::int AS n FROM tasks WHERE life AND status = 'done' GROUP BY area`,sql`SELECT area, score FROM area_scores WHERE week = ${addDays(ws,-7)}`,
getSetting("values")]),by=(rows,k="n")=>Object.fromEntries(rows.map((r)=>[r.area,r[k]])),w=by(week),t=by(total),pv=by(prev,"score");for(let a of areas)Object.assign(a,
{desc:AREAS.find((x)=>x.name===a.name)?.desc??"",done_week:w[a.name]??0,done_total:t[a.name]??0,prev_score:pv[a.name]??null});return{values:values?parseJson(values):null,
areas,goals}}async function updateArea(f){let set={checked_at:today()};if(f.satisfaction!=null)set.satisfaction=Math.max(1,Math.min(10,Math.round(Number(f.satisfaction))));
for(let k of["vision","gratitude","focus","week_focus","rhythm"])if(f[k]!=null)set[k]=str(f[k]);if(f.target!=null)set.target=Math.max(0,Math.min(14,Math.round(Number(f.target))));
let[row]=await sql`UPDATE life_areas SET ${sql(set)} WHERE name = ${f.name} RETURNING *`;if(!row)throw Error("Life area niet gevonden");if(set.satisfaction!=null)await sql`INSERT INTO area_scores (week, area, score) VALUES (${weekStart()}, ${row.name}, ${set.satisfaction}) ON CONFLICT (week, area) DO UPDATE SET score = EXCLUDED.score`;
return row}async function saveGoal(f){let row={};if(f.title!=null)row.title=str(f.title,300);if(f.area!==void 0)row.area=pick(f.area,AREA_NAMES,null);for(let k of["why",
"metric"])if(f[k]!=null)row[k]=str(f[k]);if(f.deadline!==void 0)row.deadline=isDate(f.deadline)?f.deadline:null;if(f.status!=null)row.status=pick(f.status,["actief",
"gepauzeerd","behaald","losgelaten"],"actief");if(f.progress!=null)row.progress=Math.max(0,Math.min(100,Math.round(Number(f.progress))));if(f.kind!=null)row.kind=pick(f.kind,
["jaar","kwartaal"],"jaar");if(f.parent_id!==void 0)row.parent_id=Number.isInteger(f.parent_id)?f.parent_id:null;if(f.id){if(!Object.keys(row).length)throw Error("Niets om bij te werken");
let[r2]=await sql`UPDATE goals SET ${sql(row)} WHERE id = ${Number(f.id)} RETURNING *`;if(!r2)throw Error("Doel niet gevonden");return r2}if(!row.title)throw Error("Doel zonder titel");
let[r]=await sql`INSERT INTO goals ${sql(row)} RETURNING *`;return r}async function weekReview(){let since=addDays(today(),-6),[habitDays,days,training,journal,top3,
postponed,done]=await Promise.all([sql`SELECT date, count(*) FILTER (WHERE done)::int AS done FROM habit_log WHERE date >= ${since} GROUP BY date ORDER BY date`,sql`SELECT * FROM days WHERE date >= ${since} ORDER BY date`,
sql`SELECT * FROM training WHERE date >= ${since} ORDER BY date`,sql`SELECT date, title, summary, mood, gratitude FROM journal WHERE date >= ${since} ORDER BY date`,
sql`SELECT top3_date AS date, count(*)::int AS total, count(*) FILTER (WHERE status = 'done')::int AS done FROM tasks WHERE top3_date >= ${since} GROUP BY top3_date ORDER BY top3_date`,
sql`SELECT id, title, postponed FROM tasks WHERE status <> 'done' AND postponed > 0 ORDER BY postponed DESC LIMIT 5`,sql`SELECT title, area, life FROM tasks WHERE done_at >= now() - interval '7 days' ORDER BY done_at`]),
wheel=(await areasAndGoals()).areas.map((a)=>({area:a.name,score:a.satisfaction,prev_score:a.prev_score,life_done_week:a.done_week,target:a.target,week_focus:a.week_focus}));
return{since,habits_total:HABITS.length,habitDays,days,training,journal,top3,postponed,done,wheel}}var STEP={type:"object",properties:{taak:{type:"string",description:"Concrete actie van max. 15 minuten, begint met een werkwoord"},
eerste_stap:{type:"string",description:"Wat je in de eerste 2 minuten doet"}},required:["taak","eerste_stap"],additionalProperties:!1},PLAN_SCHEMA={type:"object",
properties:{gebieden:{type:"array",items:{type:"object",properties:{gebied:{type:"string",enum:AREA_NAMES},droom:{type:"string",description:"De droom over 3 jaar in \xE9\xE9n inspirerende zin, in de woorden van de gebruiker"},
jaardoel:{type:"string",description:"Concreet en meetbaar doel voor de komende 12 maanden"},kwartaal:{type:"string",description:"Mijlpaal voor dit kwartaal die het jaardoel dichterbij brengt"},
week_focus:{type:"string",description:"E\xE9n focus voor deze week"},ritme:{type:"string",description:"Realistisch ritme dat in de week past, bijv. '2x per week een power hour'"},
per_week:{type:"integer",description:"Aantal kleine 1%-acties per week voor dit gebied (0-5; Business 0 want dat loopt via deep work)"},stappen:{type:"array",items:STEP,
description:"3 eerste kleine stappen, oplopend"}},required:["gebied","droom","jaardoel","kwartaal","week_focus","ritme","per_week","stappen"],additionalProperties:!1}}},
required:["gebieden"],additionalProperties:!1},STEPS_SCHEMA={type:"object",properties:{stappen:{type:"array",items:STEP}},required:["stappen"],additionalProperties:!1},
quarterEnd=(date=today())=>{let[y,m]=date.split("-").map(Number),q=Math.ceil(m/3)*3;return new Date(Date.UTC(y,q,0)).toISOString().slice(0,10)};async function buildCompass(b){
let values={chosen:(Array.isArray(b.values?.chosen)?b.values.chosen:[]).slice(0,12).map((v)=>str(v,40)),top3:(Array.isArray(b.values?.top3)?b.values.top3:[]).slice(0,
3).map((v)=>({name:str(v.name,40),meaning:str(v.meaning,300)}))};await setSetting("values",values);let answers=(Array.isArray(b.areas)?b.areas:[]).filter((a)=>AREA_NAMES.includes(a.name));
for(let a of answers)await updateArea({name:a.name,satisfaction:a.satisfaction||null,gratitude:a.gratitude??null,vision:a.dream??null});let plan=await structured(`Je bent een levenscoach voor een ondernemer met ADHD (ouder, partner van Eef). Maak van de antwoorden per levensgebied een ladder: droom (3 jaar) → jaardoel (12 maanden) → kwartaal-mijlpaal → weekfocus → 3 piepkleine eerste stappen (max. 15 minuten elk, ADHD-proof: concreet, zonder voorbereiding te starten).
Regels:
- Blijf dicht bij de eigen woorden en kernwaarden; verzin geen dromen. Is een gebied leeg gelaten, maak dan een bescheiden voorstel op basis van de kernwaarden en het cijfer.
- Balans boven perfectie: de hele week moet behapbaar blijven naast een volle werkweek (deep work 9-12, training 13:00, gezin 17-21:30). Liever 1 kleine stap die gebeurt dan 3 die blijven liggen.
- Gebieden met een laag cijfer krijgen iets meer aandacht (per_week), maar nooit meer dan 3 per gebied en samen max. 12 per week.
- Ook tevredenheid telt: een gebied dat al goed gaat mag "onderhouden" als doel hebben.
Gebieden: ${AREAS.map((a)=>`${a.name} (${a.desc})`).join("; ")}.`,`Vandaag: ${dayLabel(today())} (${today()}), kwartaal eindigt ${quarterEnd()}.
Kernwaarden: ${JSON.stringify(values)}
Antwoorden per gebied (cijfer 1-10, al goed/dankbaar, droom over 3 jaar, wens voor 12 maanden, kleinste stap deze week):
${JSON.stringify(answers)}`,PLAN_SCHEMA);for(let g of plan.gebieden){await updateArea({name:g.gebied,vision:g.droom,week_focus:g.week_focus,rhythm:g.ritme,target:g.per_week});
let[jaar]=await sql`SELECT * FROM goals WHERE area = ${g.gebied} AND kind = 'jaar' AND status = 'actief' ORDER BY id DESC LIMIT 1`;jaar=await saveGoal({id:jaar?.id,
title:g.jaardoel,area:g.gebied,kind:"jaar",deadline:addDays(today(),365)});let[kw]=await sql`SELECT * FROM goals WHERE area = ${g.gebied} AND kind = 'kwartaal' AND status = 'actief' ORDER BY id DESC LIMIT 1`,
kwartaal=await saveGoal({id:kw?.id,title:g.kwartaal,area:g.gebied,kind:"kwartaal",parent_id:jaar.id,deadline:quarterEnd()});await sql`UPDATE tasks SET life = false WHERE life AND area = ${g.gebied} AND status <> 'done'`;
for(let st of g.stappen)await addTask({taak:st.taak,eerste_stap:st.eerste_stap,gebied:g.gebied,status:"later",life:!0,goal_id:kwartaal.id,blok:g.gebied==="Business"?"Deep work":"Thuis"})}return await sql`UPDATE days SET life_task_id = NULL WHERE date = ${today()}`,
{values,plan:plan.gebieden}}async function nextSteps(area){let[goals,done]=await Promise.all([sql`SELECT id, title, kind FROM goals WHERE area = ${area.name} AND status = 'actief' ORDER BY kind DESC, id DESC LIMIT 2`,
sql`SELECT title FROM tasks WHERE life AND area = ${area.name} AND status = 'done' ORDER BY done_at DESC LIMIT 8`]),r=await structured("Je bedenkt de volgende 3 piepkleine stappen (max. 15 minuten, ADHD-proof, concreet) richting de droom en doelen in \xE9\xE9n levensgebied van een ondernemer met ADHD. Bouw voort op wat al gedaan is; geen herhaling.",
`Gebied: ${area.name} (${AREAS.find((a)=>a.name===area.name)?.desc}). Droom: ${area.vision||"-"}. Doelen: ${JSON.stringify(goals)}. Focus deze week: ${area.week_focus||"-"}. Al gedaan: ${JSON.stringify(done.map((d)=>d.title))}.`,
STEPS_SCHEMA),goalId=goals.find((g)=>g.kind==="kwartaal")?.id??goals[0]?.id;for(let st of r.stappen.slice(0,3))await addTask({taak:st.taak,eerste_stap:st.eerste_stap,
gebied:area.name,status:"later",life:!0,goal_id:goalId,blok:"Thuis"})}async function lifeAction(date,skipArea){let[day]=await sql`SELECT life_task_id FROM days WHERE date = ${date}`;
if(day?.life_task_id&&!skipArea){let[t]=await sql`SELECT * FROM tasks WHERE id = ${day.life_task_id}`;if(t)return t}if(!await getSetting("values"))return null;let{
areas}=await areasAndGoals(),candidates=areas.filter((a)=>a.target>0&&a.name!==skipArea).sort((a,b)=>a.done_week/a.target-b.done_week/b.target||(a.satisfaction??5)-(b.satisfaction??5));
for(let area of candidates.slice(0,3)){let[t]=await sql`SELECT * FROM tasks WHERE life AND area = ${area.name} AND status <> 'done' ORDER BY id LIMIT 1`;if(!t)await nextSteps(area),
[t]=await sql`SELECT * FROM tasks WHERE life AND area = ${area.name} AND status <> 'done' ORDER BY id LIMIT 1`;if(t)return await sql`INSERT INTO days (date, life_task_id) VALUES (${date}, ${t.id}) ON CONFLICT (date) DO UPDATE SET life_task_id = EXCLUDED.life_task_id`,
t}return null}function compassContext(c){if(!c.values)return"Levenskompas: nog niet ingevuld (geen kernwaarden).";return`Levenskompas. Kernwaarden: ${c.values.top3.map((v)=>v.name+(v.meaning?` (${v.meaning})`:"")).join(", ")}.
Gebieden: ${c.areas.map((a)=>`${a.name}: ${a.satisfaction??"?"}/10, droom "${a.vision||"-"}", weekfocus "${a.week_focus||"-"}", 1%-acties ${a.done_week}/${a.target} deze week`).join(" | ")}
Doelen: ${c.goals.filter((g)=>g.status==="actief").map((g)=>`[${g.id}] ${g.area} ${g.kind}: ${g.title}`).join(" | ")}`}function coachSystem(ctx,voice=!1){let{date,time}=nowParts();
return`Je bent de persoonlijke Life OS-coach en accountability partner van Raoul (ondernemer met ADHD, ouder, partner van Eef). Je zit in Raouls eigen app en hebt tools om taken, habits, journal, dagreviews, training, dagindeling, life areas en doelen te lezen en bij te werken. Je spreekt Raoul aan met "je".
Doel: dat Raoul elke dag met energie de belangrijkste taken afmaakt, consistent traint, doelen in de life areas bereikt, \xE9n tevreden is met wat er al is.
Toon: direct maar warm. Nederlands. Kort: max. ~6 regels per bericht, tenzij Raoul om meer vraagt. E\xE9n vraag tegelijk. Eerlijk over uitstel of shiny objects, nooit schuld aanpraten. Vier kleine winsten echt.
Standaard werkdag (ma-vr): 07:30 ochtendroutine (Affirmation music, Morning exercise, 10 breaths, Water + supps, Sunlight, Journal) \xB7 09:00-12:00 deep work \xB7 12:00 lunch \xB7 13:00-14:30 trainen + douchen \xB7 14:30-16:30 shallow work (admin, mails, meetings) \xB7 16:30 plan morgen \xB7 17:00-20:00 gezin (koken, eten, opruimen, kids naar bed) \xB7 20:00-21:30 vrije tijd / Eef. Na 17:00 geen werkdruk.
Werkwijze:
- Lees met tools voordat je iets beweert over Raouls data; leg elke afspraak vast met tools (taak toevoegen, Top 3, doorschuiven, dagreview, training, dagindeling). Zeg kort wat je hebt vastgelegd.
- Max. 3 prioriteiten per dag (Top 3), minstens \xE9\xE9n Deep work-taak die een actief doel vooruit helpt.
- Elke taak heeft een eerste stap van max. 5 minuten. Vastgelopen? Hak op tot een belachelijk kleine stap en stel 25 minuten focus voor.
- Uitgesteld (postponed ≥ 3)? Confronteer: doen, delegeren, opknippen of schrappen.
- Training overgeslagen: kort waarom, log het, en plan direct een nieuw moment (15 minuten wandelen telt ook).
- Trainingsschema: snapshot.workout is de geplande training van vandaag (rest = rustdag, null = nog geen schema). Raoul vinkt trainingen af in het Training-scherm; hoort je dat hij getraind heeft, log het met log_training. get_training geeft de week en vorige resultaten (progressie: stel bij goede sessies iets meer gewicht of herhalingen voor). Schema aanpassen of een nieuw schema maken: set_training_plan met het volledige schema. Nog geen schema? Bied aan er samen een te maken.
- Agenda en timeblocking: snapshot.events zijn de afspraken van vandaag uit Google Calendar (task = id van een ingeplande Life OS-taak). Vraagt Raoul om zijn dag te plannen, zet de Top 3 dan met block_task als blokken in vrije ruimte: Deep work-taken in 9:00-12:00, Shallow work in 14:30-16:30, nooit over afspraken, training of gezinstijd heen.
- Nieuw idee tijdens focus: zet het als taak met status 'later' en breng de focus terug naar de Top 3.
- Balans en levensgebieden (Levenskompas): naast werk krijgt Raoul elke dag \xE9\xE9n kleine "1% leven"-actie (≤15 min) uit het gebied dat deze week achterloopt op zijn ritme (zie snapshot.life). Houd dit licht: \xE9\xE9n ding per dag, niet alles tegelijk. Verbind keuzes met de kernwaarden. Nieuwe stappen richting een droom leg je vast met add_task (life: true, status 'later').
- Plan gewijzigd (afspraak, ziek kind, uitloop, minder energie)? Handel het meteen af zonder eerst toestemming te vragen: haal het overzicht op, zet met set_day_plan de volledige nieuwe dagindeling vanaf nu (de rest van de dag blijft realistisch: training en gezinstijd beschermen, deep work zo nodig inkorten), pas de Top 3 aan (wat niet meer past doorschuiven met postpone_task naar morgen, max. 3 haalbare taken) en noem daarna kort wat er nu anders is. Vraag alleen door als iets echt onduidelijk is (bijv. hoe laat de afspraak is).
- Balans: benoem ook wat er al goed is en waar Raoul dankbaar voor kan zijn.
- Geen markdown-koppen of tabellen; korte zinnen, eventueel een korte opsomming.${voice?`
Dit is een GESPROKEN gesprek: je antwoord wordt voorgelezen. Antwoord in 1 tot 3 korte, natuurlijke spreekzinnen. Geen opsommingen, emoji, symbolen of afkortingen; schrijf tijden als "half tien" of "14:30". Stel hooguit \xE9\xE9n vraag en eindig daarmee als je iets wilt weten.`:""}
Nu: ${dayLabel(date)} (${date}), ${time} uur.
${ctx}`}async function history(limit=30){let rows=await sql`SELECT role, kind, content FROM messages ORDER BY id DESC LIMIT ${limit}`,msgs=[];for(let r of rows.reverse()){
let content=r.kind==="trigger"?`[Automatische check-in] ${r.content}`:r.content,last=msgs[msgs.length-1];if(last&&last.role===r.role)last.content+=`

`+content;else msgs.push({role:r.role,content})}while(msgs.length&&msgs[0].role!=="user")msgs.shift();return msgs}async function coachTurn(userText,kind="chat",voice=!1){
await sql`INSERT INTO messages (role, kind, content) VALUES ('user', ${kind}, ${userText})`;let[snapshot,compass]=await Promise.all([overview(),areasAndGoals()]),ctx=`${compassContext(compass)}

Snapshot van vandaag (JSON):
${JSON.stringify({habits:snapshot.habits,top3:snapshot.top3,life:snapshot.life,journal:snapshot.journal,day:snapshot.day,training:snapshot.training,events:snapshot.events,
block:snapshot.block,schedule:snapshot.schedule,customPlan:snapshot.customPlan,workout:snapshot.workout})}`,messages=await history(),text="";for(let i=0;i<12;i++){let response=await client.messages.create({
model:MODEL,max_tokens:16000,output_config:{effort:voice?"low":"medium"},system:coachSystem(ctx,voice),tools:COACH_TOOLS,messages});if(response.stop_reason==="refusal"){
text="Daar kan ik je nu niet mee helpen. Probeer het anders te formuleren?";break}let textNow=response.content.filter((b)=>b.type==="text").map((b)=>b.text).join(`
`).trim();if(textNow)text=textNow;let uses=response.content.filter((b)=>b.type==="tool_use");if(response.stop_reason!=="tool_use"||!uses.length)break;messages.push({
role:"assistant",content:response.content});let results=[];for(let u of uses)try{let out=await runTool(u.name,u.input??{});results.push({type:"tool_result",tool_use_id:u.id,
content:JSON.stringify(out??null).slice(0,60000)})}catch(e){results.push({type:"tool_result",tool_use_id:u.id,content:`Fout: ${e.message}`,is_error:!0})}messages.push({
role:"user",content:results})}if(!text)text="Gedaan. ✅";let[row]=await sql`INSERT INTO messages (role, kind, content) VALUES ('assistant', ${kind==="trigger"?"checkin":"chat"}, ${text}) RETURNING *`;
return row}async function pushAll(title,body,url="/?tab=coach"){if(!pushReady)return 0;let subs=await sql`SELECT endpoint, sub FROM push_subs`,sent=0;for(let s of subs)try{
await webpush.sendNotification(typeof s.sub==="string"?JSON.parse(s.sub):s.sub,JSON.stringify({title,body,url})),sent++}catch(e){if(e.statusCode===404||e.statusCode===410)await sql`DELETE FROM push_subs WHERE endpoint = ${s.endpoint}`;
else console.warn("Push mislukt:",e.statusCode,e.body||e.message)}return sent}async function runDueCheckins(force){let{date,time,dow}=nowParts(),done=[];for(let c of CHECKINS){
if(!(force?c.slot===force:c.days.includes(dow)&&time>=c.time&&minutesBetween(c.time,time)<=45))continue;if(!(await sql`INSERT INTO checkins_sent (date, slot) VALUES (${date}, ${c.slot}) ON CONFLICT DO NOTHING RETURNING slot`).length&&!force)continue;
try{let msg=await coachTurn(c.prompt,"trigger");await pushAll(`Coach \xB7 ${c.label}`,msg.content.replace(/\s+/g," ").slice(0,160)),done.push(c.slot)}catch(e){console.error("Check-in mislukt:",
c.slot,e),await sql`DELETE FROM checkins_sent WHERE date = ${date} AND slot = ${c.slot}`}}return done}function minutesBetween(a,b){let m=(s)=>Number(s.slice(0,2))*60+Number(s.slice(3,
5));return m(b)-m(a)}function makeIcon(size=180){let s=size/180,px=Buffer.alloc(size*(size*3+1)),inMark=(x,y)=>{let d=Math.hypot(x-90*s,y-90*s);if(Math.abs(d-52*s)<=7*s)return!0;
let seg=(x1,y1,x2,y2)=>{let[ax,ay,bx,by]=[x1*s,y1*s,x2*s,y2*s],t=Math.max(0,Math.min(1,((x-ax)*(bx-ax)+(y-ay)*(by-ay))/((bx-ax)**2+(by-ay)**2)));return Math.hypot(x-(ax+t*(bx-ax)),
y-(ay+t*(by-ay)))<=8*s};return seg(64,92,82,110)||seg(82,110,118,72)};for(let y=0;y<size;y++){let row=y*(size*3+1);for(let x=0;x<size;x++){let w=inMark(x+0.5,y+0.5),
i=row+1+x*3;px[i]=w?255:228,px[i+1]=w?255:87,px[i+2]=w?255:46}}let crcTable=Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?3988292384^c>>>1:c>>>1;
return c>>>0}),crc=(buf)=>{let c=4294967295;for(let b of buf)c=crcTable[(c^b)&255]^c>>>8;return(c^4294967295)>>>0},chunk=(type,data)=>{let len=Buffer.alloc(4);len.writeUInt32BE(data.length);
let td=Buffer.concat([Buffer.from(type),data]),c=Buffer.alloc(4);return c.writeUInt32BE(crc(td)),Buffer.concat([len,td,c])},ihdr=Buffer.alloc(13);return ihdr.writeUInt32BE(size,
0),ihdr.writeUInt32BE(size,4),ihdr[8]=8,ihdr[9]=2,Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk("IHDR",ihdr),chunk("IDAT",deflateSync(px)),chunk("IEND",
Buffer.alloc(0))])}var ICON=makeIcon(180),ICON_512=makeIcon(512),manifest=(key)=>JSON.stringify({name:"Life OS",short_name:"Life OS",start_url:key===APP_KEY&&key?"./?key="+encodeURIComponent(key):"./",
display:"standalone",background_color:"#111111",theme_color:"#111111",icons:[{src:"icon.png",sizes:"180x180",type:"image/png"},{src:"icon-512.png",sizes:"512x512",
type:"image/png"}]}),STT=env.OPENAI_API_KEY?{name:"openai",url:(env.STT_BASE_URL||"https://api.openai.com/v1")+"/audio/transcriptions",key:env.OPENAI_API_KEY,model:env.STT_MODEL||"gpt-4o-transcribe"}:env.GROQ_API_KEY?{
name:"groq",url:(env.STT_BASE_URL||"https://api.groq.com/openai/v1")+"/audio/transcriptions",key:env.GROQ_API_KEY,model:env.STT_MODEL||"whisper-large-v3-turbo"}:null;
async function transcribe(audio){if(!STT)throw Error("Spraak uitschrijven is niet ingesteld (OPENAI_API_KEY of GROQ_API_KEY ontbreekt)");if(audio.size<1000)return"";
let ext=audio.type.includes("webm")?"webm":audio.type.includes("ogg")?"ogg":audio.type.includes("wav")?"wav":"m4a",form=new FormData;form.append("file",new File([audio],
`opname.${ext}`,{type:audio.type||"audio/mp4"})),form.append("model",STT.model),form.append("prompt","Nederlandse braindump of journal van een ondernemer, soms met Engelse woorden. Namen: Eef.");
let res=await fetch(STT.url,{method:"POST",headers:{Authorization:`Bearer ${STT.key}`},body:form}),data=await res.json().catch(()=>({}));if(!res.ok)throw Error(`Uitschrijven mislukt (${res.status}): ${data?.error?.message||"onbekende fout"}`);
return String(data.text||"").trim()}async function speak(text){let res=await fetch((env.TTS_BASE_URL||"https://api.openai.com/v1")+"/audio/speech",{method:"POST",
headers:{Authorization:`Bearer ${env.OPENAI_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:env.TTS_MODEL||"gpt-4o-mini-tts",voice:env.TTS_VOICE||"onyx",
input:text.slice(0,4000),response_format:"mp3",instructions:"Spreek vloeiend Nederlands (Nederlandse uitspraak). Mannelijke coach: warm en direct, vlot tempo, zelfverzekerd."})});
if(!res.ok)throw Error(`Voorlezen mislukt (${res.status})`);return new Response(res.body,{headers:{"Content-Type":"audio/mpeg","Cache-Control":"no-store"}})}var json=(data,
status=200)=>Response.json(data,{status});async function readText(req){let raw=await req.text();try{return String(JSON.parse(raw).text??"").trim()}catch{return raw.trim()}}async function api(req,
url){let p=url.pathname,m=req.method,body=async()=>await req.json().catch(()=>({})),idFrom=(re)=>Number(p.match(re)?.[1]);if(p==="/api/compass"&&m==="GET")return json(await areasAndGoals());
if(p==="/api/compass"&&m==="POST")return json(await buildCompass(await body()));if(p==="/api/life/swap"&&m==="POST"){let[cur]=await sql`SELECT t.area FROM days d JOIN tasks t ON t.id = d.life_task_id WHERE d.date = ${today()}`;
return json(await lifeAction(today(),cur?.area??"-"))}if(p==="/api/today"&&m==="GET")return json(await overview(isDate(url.searchParams.get("date"))?url.searchParams.get("date"):today()));
if(p==="/api/habits"&&m==="POST"){let b=await body();return await setHabit(isDate(b.date)?b.date:today(),Number(b.id),Boolean(b.done)),json({ok:!0})}if(p==="/api/tasks"&&m==="GET"){
let status=(url.searchParams.get("status")||"inbox,today,doing,later").split(",").filter((s)=>STATUSES.includes(s));return json(await sql`SELECT * FROM tasks WHERE status IN ${sql(status)} ORDER BY (status='done'), top3_date NULLS LAST, deadline NULLS LAST, id DESC LIMIT 300`)}if(p==="/api/tasks"&&m==="POST")return json(await addTask(await body()));
if(/^\/api\/tasks\/\d+$/.test(p)&&m==="PATCH")return json(await updateTask(idFrom(/(\d+)$/),await body()));if(p==="/api/top3"&&m==="POST"){let b=await body();return json(await setTop3(isDate(b.date)?b.date:today(),
(b.ids||[]).map(Number)))}if(p==="/api/dump/parse"&&m==="POST"){let text=await readText(req);return json({tasks:text?await extractTasks(text):[]})}if(p==="/api/dump/save"&&m==="POST"){
let b=await body(),saved=[];for(let t of(Array.isArray(b.tasks)?b.tasks:[]).slice(0,50))saved.push(await addTask(t));return json({saved:saved.length,tasks:saved})}if(p==="/api/dump"&&m==="POST"){
let text=await readText(req);if(!text)return new Response("Niks gehoord.");let tasks=await extractTasks(text);for(let t of tasks)await addTask(t);return new Response(tasks.length?`${tasks.length} taken toegevoegd:
${tasks.map((t)=>"• "+t.taak).join(`
`)}`:"Geen taken gevonden.")}if(p==="/api/journal"&&m==="GET")return json(await sql`SELECT id, date, source, title, summary, mood, gratitude, intention, areas FROM journal ORDER BY date DESC, id DESC LIMIT 30`);
if(/^\/api\/journal\/\d+$/.test(p)&&m==="GET")return json((await sql`SELECT * FROM journal WHERE id = ${idFrom(/(\d+)$/)}`)[0]??null);if(p==="/api/journal"&&m==="POST"){
let b=await body(),text=str(b.text,50000).trim(),image=b.image?.data?{data:String(b.image.data),media_type:pick(b.image.media_type,["image/jpeg","image/png","image/webp"],
"image/jpeg")}:void 0;if(!text&&!image)return json({error:"Leeg journal"},400);return json(await processJournal(text,image))}if(p==="/api/coach"&&m==="GET"){let rows=await sql`SELECT id, role, kind, content, created_at FROM messages ORDER BY id DESC LIMIT 80`;
return json(rows.reverse())}if(p==="/api/coach"&&m==="POST"){let b=await body(),text=str(b.text,8000).trim();if(!text)return json({error:"Leeg bericht"},400);return json(await coachTurn(text,
"chat",b.voice===!0))}if(p==="/api/areas"&&m==="GET")return json(await areasAndGoals());if(p==="/api/areas"&&m==="POST")return json(await updateArea(await body()));
if(p==="/api/goals"&&m==="POST")return json(await saveGoal(await body()));if(p==="/api/training"&&m==="GET")return json(await trainingWeek(isDate(url.searchParams.get("date"))?url.searchParams.get("date"):today()));if(p==="/api/training/plan"&&m==="POST")return json(await setPlan(await body()));
if(p==="/api/training/generate"&&m==="POST")return json(await generatePlan(await body()));if(p==="/api/training/log"&&m==="POST")return json(await logTraining(await body()));if(p==="/api/google/auth"&&m==="GET"){if(!gConfigured())return json({error:"Zet eerst GOOGLE_CLIENT_ID en GOOGLE_CLIENT_SECRET in Railway"},501);return new Response(null,{status:302,headers:{Location:await googleAuthUrl()}})}
if(p==="/api/google/disconnect"&&m==="POST")return await sql`DELETE FROM settings WHERE key = 'google'`,gToken=null,json({ok:!0});if(p==="/api/calendar/block"&&m==="POST")return json(await blockTask(await body()));
if(p.startsWith("/api/calendar/block/lb")&&m==="DELETE")return await sql`DELETE FROM blocks WHERE id = ${Number(p.slice(22))}`,json({ok:!0});if(p.startsWith("/api/calendar/block/")&&m==="DELETE")return await gFetch("/"+encodeURIComponent(decodeURIComponent(p.slice(20))),{method:"DELETE"}),json({ok:!0});if(p==="/api/push/key"&&m==="GET")return json({key:env.VAPID_PUBLIC_KEY||null});if(p==="/api/config"&&m==="GET")return json({
stt:STT?.name??null,tts:env.OPENAI_API_KEY?"openai":null});if(p==="/api/speak"){if(!env.OPENAI_API_KEY)return json({error:"Voorlezen is niet ingesteld"},501);let text=str(m==="GET"?url.searchParams.get("text"):(await body()).text,
4000).trim();return text?speak(text):json({error:"Lege tekst"},400)}if(p==="/api/transcribe"&&m==="POST"){let audio=await req.blob();if(audio.size>25165824)return json({
error:"Opname te lang (max. \xB120 minuten)"},413);let type=req.headers.get("content-type")||"audio/mp4";return json({text:await transcribe(new Blob([audio],{type}))})}if(p==="/api/push/subscribe"&&m==="POST"){
let sub=await body();if(!sub?.endpoint)return json({error:"Ongeldige subscription"},400);return await sql`INSERT INTO push_subs (endpoint, sub) VALUES (${sub.endpoint}, ${JSON.stringify(sub)}::jsonb) ON CONFLICT (endpoint) DO UPDATE SET sub = EXCLUDED.sub`,
json({ok:!0})}if(p==="/api/push/test"&&m==="POST")return json({sent:await pushAll("Life OS","Meldingen werken! 💪","/")});if(p==="/api/cron"&&m==="POST")return json({
sent:await runDueCheckins(url.searchParams.get("force")||void 0)});return json({error:"Niet gevonden"},404)}var ready=null,webCache=new Map;async function webPage(path,
type){let c=webCache.get(path);if(!c||Date.now()-c.at>30000)try{let r=await fetch((env.WEB_URL||"").replace(/\/$/,"")+path);if(!r.ok)throw Error(String(r.status));
c={at:Date.now(),body:await r.text()},webCache.set(path,c)}catch(e){if(console.warn("Schermen ophalen mislukt:",e.message),!c)return new Response("Life OS start op, probeer het zo opnieuw.",
{status:503})}return new Response(c.body,{headers:{"Content-Type":type,"Cache-Control":"no-cache"}})}var ensureDb=()=>ready??=migrate().catch((e)=>{throw ready=null,
e});Bun.serve({port:Number(env.PORT||3000),maxRequestBodySize:26214400,idleTimeout:120,async fetch(req){let url=new URL(req.url),p=url.pathname;if(req.method==="GET"&&!p.startsWith("/api/")){
if(p==="/"||p==="/index.html")return webPage("/","text/html; charset=utf-8");if(p==="/sw.js")return webPage("/sw.js","text/javascript");if(p==="/manifest.json")return new Response(manifest(url.searchParams.get("key")),
{headers:{"Content-Type":"application/manifest+json"}});if(p==="/icon.png"||p==="/apple-touch-icon.png"||p==="/favicon.ico")return new Response(ICON,{headers:{"Content-Type":"image/png",
"Cache-Control":"max-age=86400"}});if(p==="/icon-512.png")return new Response(ICON_512,{headers:{"Content-Type":"image/png","Cache-Control":"max-age=86400"}});if(p==="/health")return new Response(configured?"ok":"niet geconfigureerd");
return new Response("Niet gevonden",{status:404})}if(!p.startsWith("/api/"))return new Response("Niet gevonden",{status:404});if(p==="/api/google/callback"&&configured){let ok=!0,msg="";try{await ensureDb(),await googleCallback(url)}catch(e){ok=!1,msg=e.message}
return new Response(`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font:17px system-ui;padding:40px 24px;text-align:center"><h2>${ok?"✅ Google Calendar gekoppeld":"⚠️ Koppelen mislukt"}</h2><p>${ok?"Je afspraken staan nu op je Vandaag-scherm.":msg.replace(/[<>&]/g,"")}</p><p><a href="/?tab=vandaag">Terug naar Life OS</a></p>`,{status:ok?200:400,headers:{"Content-Type":"text/html; charset=utf-8"}})}if(!configured)return json({error:"Server mist instellingen (zie Railway variables)"},
503);if((req.headers.get("x-app-key")||req.headers.get("x-ramble-key")||url.searchParams.get("key"))!==APP_KEY)return json({error:"Ongeldige sleutel"},401);try{return await ensureDb(),
await api(req,url)}catch(e){return console.error(p,e),p==="/api/dump"?new Response(`Mislukt: ${e.message}`,{status:500}):json({error:e.message},500)}}});if(configured)ensureDb().then(()=>console.log("Database klaar")).catch((e)=>console.error("Migratie mislukt:",
e));console.log("Life OS draait");

