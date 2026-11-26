/* Align Media invitation engine. Each model page sets window.C, then loads this file. */
(()=>{
const C=window.C,$=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const q=new URLSearchParams(location.search),guest=(q.get('to')||'').trim().slice(0,40);
const st=new Date(C.start),en=new Date(C.end||C.start);
const fmt=o=>new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',...o}).format(st);
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const B=C.kind==='birthday';
const G='<defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dc8c"/><stop offset=".5" stop-color="#c9982f"/><stop offset="1" stop-color="#8a6418"/></linearGradient><radialGradient id="gl"><stop offset="0" stop-color="#ffd27a" stop-opacity=".9"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>';
const FL='M0 0C-7-8-6-20 0-30C6-20 7-8 0 0Z';
/* ---------- intro scenes ---------- */
const I={
envelope:()=>`<div class="env pulse"><div class="back"></div><div class="peek">${esc(C.short)}</div><div class="flap"></div><div class="pocket"></div><div class="seal">${esc(C.initials)}</div></div>`,
doors:()=>`<div class="doors"><div class="door l"></div><div class="door r"></div></div><div class="medal pulse">${C.medal||esc(C.initials)}</div>`,
curtain:()=>`<div class="cur l"></div><div class="cur r"></div><div class="valance"></div><div class="medal pulse" style="z-index:3">${C.medal||esc(C.initials)}</div>`,
scroll:()=>`<div class="scrollw"><div class="twine"></div><div class="roll"></div><div class="paper"><span>${esc(C.short)}</span></div><div class="roll"></div></div>`,
lamp:()=>`<div class="stage"><svg viewBox="0 0 200 270">${G}<circle class="glow" cx="100" cy="60" r="120" fill="url(#gl)"/>
<path d="M100 8l7 14-7 10-7-10z" fill="url(#gg)"/><rect x="96" y="30" width="8" height="40" fill="url(#gg)"/>
<path d="M28 78Q100 104 172 78L160 92Q100 112 40 92Z" fill="url(#gg)"/><ellipse cx="100" cy="78" rx="72" ry="10" fill="#e7c46c"/>
${[40,70,100,130,160].map(x=>`<g transform="translate(${x} 76)"><path class="flame" d="${FL}" fill="#ffb63b"/></g>`).join('')}
<rect x="93" y="100" width="14" height="120" fill="url(#gg)"/><ellipse cx="100" cy="130" rx="16" ry="8" fill="url(#gg)"/><ellipse cx="100" cy="175" rx="20" ry="9" fill="url(#gg)"/>
<path d="M60 250Q100 205 140 250Z" fill="url(#gg)"/><ellipse cx="100" cy="252" rx="62" ry="12" fill="#b5862a"/></svg></div>`,
lanterns:()=>`<div class="stage" style="width:min(86vw,380px)"><svg class="lanw" viewBox="0 0 300 300">${G}${[[60,90],[150,150],[240,100]].map(([x,h])=>`<g class="lan"><line x1="${x}" y1="-400" x2="${x}" y2="${h}" stroke="${C.lanline||'#cdd2e6'}"/><g transform="translate(${x} ${h})"><circle class="glow" cy="45" r="60" fill="url(#gl)" style="opacity:.6"/><path d="M-14 0h28l6 12h-40z" fill="url(#gg)"/><path d="M-20 12h40l-4 60h-32z" fill="${C.lanbody||'#3b2a55'}" stroke="url(#gg)" stroke-width="2"/><path d="M-10 20q10-10 20 0v42h-20z" fill="#ffd98a" opacity=".85"/><path d="M-16 72h32l-6 10h-20z" fill="url(#gg)"/><path d="M0 82v12" stroke="url(#gg)" stroke-width="2"/><circle cy="96" r="3" fill="url(#gg)"/></g></g>`).join('')}</svg></div>`,
gift:()=>`<div class="stage"><svg viewBox="0 0 200 220"><g class="gift"><rect x="30" y="100" width="140" height="110" rx="6" fill="${C.box||'#ff5d8f'}"/><rect x="90" y="100" width="20" height="110" fill="${C.ribbon||'#ffd23f'}"/>
<g class="lid"><rect x="22" y="72" width="156" height="32" rx="6" fill="${C.box2||'#ff3d7a'}"/><rect x="90" y="72" width="20" height="32" fill="${C.ribbon||'#ffd23f'}"/><path d="M100 72C70 40 50 60 70 72ZM100 72C130 40 150 60 130 72Z" fill="${C.ribbon||'#ffd23f'}" stroke="#0002"/><circle cx="100" cy="70" r="7" fill="${C.ribbon||'#ffd23f'}"/></g></g></svg></div>`,
cake:()=>`<div class="stage cake"><svg viewBox="0 0 200 230"><circle class="glow" cx="100" cy="40" r="50" fill="#ffd27a" opacity=".3"/>
<ellipse cx="100" cy="214" rx="90" ry="12" fill="#fff" opacity=".9"/><rect x="30" y="150" width="140" height="62" rx="10" fill="${C.tier1||'#f4a6b8'}"/><rect x="50" y="100" width="100" height="56" rx="10" fill="${C.tier2||'#fff4f6'}"/>
<path d="M50 112q10 14 20 0t20 0 20 0 20 0 20 0" fill="none" stroke="${C.tier1||'#f4a6b8'}" stroke-width="7" stroke-linecap="round"/><path d="M30 162q12 14 23 0t23 0 24 0 23 0 23 0 24 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
<rect x="95" y="58" width="10" height="44" rx="3" fill="${C.candle||'#8ec5e8'}"/><g transform="translate(100 58)"><path class="flame" d="${FL}" fill="#ffb63b"/></g><circle class="smoke" cx="100" cy="40" r="8" fill="#bbb"/></svg></div>`,
doves:()=>{const d=(c)=>`<g class="dove ${c}"><path d="M0 20C10 5 30 0 45 8L62 2 53 15C58 24 50 35 34 35 19 35 8 30 0 20Z" fill="#fff" stroke="#c9d6e6"/><path d="M18 16C22-4 42-14 56-12 46 2 38 14 30 22Z" fill="#f4f8fc" stroke="#c9d6e6"/><circle cx="48" cy="11" r="1.6" fill="#334"/></g>`;
 return `<div class="stage"><svg viewBox="0 0 220 160"><g transform="translate(20 50)">${d('a')}</g><g transform="translate(200 50) scale(-1 1)">${d('b')}</g><path class="ribbon" d="M80 82Q110 120 140 82" fill="none" stroke="${C.acc||'#c4a76a'}" stroke-width="3"/><text class="ribbon" x="110" y="140" text-anchor="middle" font-size="22" fill="${C.ringt||'#6f8fb5'}" style="font-family:var(--sf)">${esc(C.short)}</text></svg></div>`},
ring:()=>`<div class="stage"><svg class="ring" viewBox="0 0 200 200">${G}<circle cx="100" cy="100" r="86" fill="none" stroke="url(#gg)" stroke-width="3"/><circle cx="100" cy="100" r="78" fill="none" stroke="url(#gg)" stroke-width="1"/>
${Array.from({length:18},(_,i)=>{const a=(i/18)*Math.PI*2;return `<ellipse cx="${100+92*Math.cos(a)}" cy="${100+92*Math.sin(a)}" rx="7" ry="3" transform="rotate(${a*57.3+60} ${100+92*Math.cos(a)} ${100+92*Math.sin(a)})" fill="url(#gg)"/>`}).join('')}
<text x="100" y="${C.ringBig?122:114}" text-anchor="middle" font-size="${C.ringBig?70:44}" fill="url(#gg)" style="font-family:var(--${C.ringBig?'hf':'sf'})">${esc(C.ringText||C.initials)}</text></svg></div>`
};
const intro=$('#intro');
intro.setAttribute('role','button');intro.tabIndex=0;intro.setAttribute('aria-label','Open the invitation');
intro.innerHTML=I[C.intro]()+'<div class="tap"><b></b><span></span></div>';
intro.querySelector('.tap b').textContent=guest?('Dear '+guest):(C.tapTitle||"You're invited");
intro.querySelector('.tap span').textContent=C.tapText||'Tap to open';
/* ---------- invitation ---------- */
const names=B?`${esc(C.name)}${C.age?`<span class="age">${esc(C.age)}</span>`:''}`:`${esc(C.groom)}<span class="amp">&amp;</span>${esc(C.bride)}`;
const rule=`<svg class="rule" viewBox="0 0 120 14" aria-hidden="true"><path d="M0 7h46M74 7h46" stroke="currentColor" style="color:var(--acc)"/><path d="M60 1l6 6-6 6-6-6z" fill="currentColor" style="color:var(--acc)"/></svg>`;
const cal='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(C.calTitle||(B?C.name+"'s Birthday":C.groom+' & '+C.bride+' Wedding'))+'&dates='+[st,en].map(d=>d.toISOString().replace(/[-:]|\.\d{3}/g,'')).join('/')+'&location='+encodeURIComponent(C.venue+', '+C.addr);
const ic={pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'};
const app=document.createElement('main');
app.innerHTML=`<article class="card rise">${C.ornTop||''}
<p class="guestline" hidden></p>
${C.blessAr?`<p class="arabic">${esc(C.blessAr)}</p>`:''}${C.bless?`<p class="bless">${esc(C.bless)}</p>`:''}
${C.verse?`<p class="verse">${esc(C.verse)}<small>${esc(C.verseRef)}</small></p>`:''}
${C.lead?`<p class="lead">${esc(C.lead)}</p>`:''}
<h1>${C.ornName||''}<span style="position:relative">${names}</span></h1>
${C.parents?`<p class="par">${C.parents.map(esc).join('<br>')}</p>`:''}
<p class="inv">${esc(C.invite)}</p>${rule}
<div class="datewrap"><div class="date"><div class="s">${esc(fmt({weekday:'long'}).toUpperCase())}</div><div class="d">${esc(fmt({day:'2-digit'}))}</div><div class="s">${esc(fmt({month:'long'}).toUpperCase())}<br>${esc(fmt({year:'numeric'}))}</div></div>${C.scratch?'<canvas class="scr" aria-label="Scratch to reveal the date"></canvas>':''}</div>
<div class="cd" aria-live="off"></div>${C.ornBot||''}</article>
<section class="sec rise"><h2>${esc(C.evTitle||(B?'The plan':'Ceremonies'))}</h2>${C.events.map(e=>`<div class="ev"><div class="t">${esc(e.t)}<small>${esc(e.ap)}</small></div><div><h3>${esc(e.n)}</h3><p>${esc(e.d)}</p></div></div>`).join('')}</section>
${C.extra?`<section class="sec extra rise"><h2>${esc(C.extra.h)}</h2><p>${esc(C.extra.p)}</p></section>`:''}
<section class="sec venue rise"><h2>${esc(C.venueTitle||'Venue')}</h2><strong>${esc(C.venue)}</strong><p>${esc(C.addr)}</p>
<div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.mapQuery||C.venue+' '+C.addr)}">${ic.pin}Location</a><a class="btn" target="_blank" rel="noopener" href="${cal}">${ic.cal}Add to calendar</a></div></section>
<div class="foot rise"><b>${esc(C.thanks||'Thank you')}</b>${esc(C.host)}</div>
<p class="note">Sample details for this demo — your names, photos and colours go here</p>
<p class="credit">Digital invitation by <b>Align Media</b>, Mannarkkad · +91 95628 27463</p>`;
document.body.appendChild(app);
const bar=document.createElement('div');bar.className='bar';
bar.innerHTML=`<button class="btn" id="mute" aria-label="Music on or off">${ic.note}</button><a class="btn fill" target="_blank" rel="noopener" href="https://wa.me/${C.phone}?text=${encodeURIComponent((guest?guest+' here! ':'Hello! ')+(C.rsvpText||("We'll be there for "+(B?C.name+"'s birthday":C.groom+' & '+C.bride+"'s wedding")+'.'))+' 🙏')}">RSVP on WhatsApp</a><button class="btn" id="share">Share</button>`;
document.body.appendChild(bar);
const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);
if(guest){const g=$('.guestline');g.hidden=false;g.textContent='Dear '+guest+',';}
/* countdown */
const cd=$('.cd'),L=['Days','Hours','Minutes','Seconds'];
const tick=()=>{const s=Math.max(0,(st-Date.now())/1000|0);cd.innerHTML=[s/86400|0,(s%86400)/3600|0,(s%3600)/60|0,s%60].map((n,i)=>`<div><b>${String(n).padStart(2,'0')}</b><span>${L[i]}</span></div>`).join('')};
tick();setInterval(tick,1000);
/* particles */
const SH={
petal:c=>`<svg viewBox="-8 -8 16 16"><path d="M0-7C5-4 5 4 0 7-5 4-5-4 0-7Z" fill="${c}"/></svg>`,
jasmine:c=>`<svg viewBox="-8 -8 16 16"><g fill="${c}">${[0,72,144,216,288].map(a=>`<ellipse rx="2.6" ry="5" transform="rotate(${a}) translate(0 -3.5)"/>`).join('')}</g><circle r="1.6" fill="#e8c877"/></svg>`,
marigold:c=>`<svg viewBox="-8 -8 16 16">${[7,5,3].map((r,i)=>`<circle r="${r}" fill="${i%2?'#ffcd3c':c}"/>`).join('')}</svg>`,
confetti:c=>`<svg viewBox="0 0 10 14"><rect width="10" height="14" rx="2" fill="${c}"/></svg>`,
star:c=>`<svg viewBox="-10 -10 20 20"><path d="M0-9 2.5-2.5 9 0 2.5 2.5 0 9-2.5 2.5-9 0-2.5-2.5Z" fill="${c}"/></svg>`,
heart:c=>`<svg viewBox="0 0 20 18"><path d="M10 18C-6 8 2-4 10 4 18-4 26 8 10 18Z" fill="${c}"/></svg>`,
leaf:c=>`<svg viewBox="-8 -8 16 16"><path d="M-6 6C-6-4 2-7 7-7 7-2 4 6-6 6Z" fill="${c}"/></svg>`,
balloon:c=>`<svg viewBox="0 0 30 60"><ellipse cx="15" cy="16" rx="13" ry="16" fill="${c}"/><path d="M15 32l-3 4h6z" fill="${c}"/><path d="M15 36q4 10-2 22" stroke="#999" fill="none"/></svg>`};
function fx(o){if(reduce||!o)return;const up=o.type==='balloon';for(let i=0;i<o.n;i++){const p=document.createElement('div');p.className='fx'+(up?' up':'');const sz=(o.size||16)*(.7+Math.random()*.6);p.style.width=sz+'px';p.style.height=(up?sz*2:sz)+'px';p.innerHTML=SH[o.type](o.colors[i%o.colors.length]);p.style.left=Math.random()*100+'vw';p.style.setProperty('--dx',(Math.random()*140-70)+'px');p.style.setProperty('--r',(up?Math.random()*40-20:Math.random()*720-360)+'deg');p.style.animationDuration=(o.speed||6)*(.7+Math.random()*.7)+'s';p.style.animationDelay=Math.random()*(o.spread||3)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),20000)}}
/* scratch */
function scratch(){const cv=$('.scr');if(!cv)return;const w=cv.parentElement,r=w.getBoundingClientRect(),dpr=devicePixelRatio||1;cv.width=r.width*dpr;cv.height=r.height*dpr;const x=cv.getContext('2d');x.scale(dpr,dpr);
 const gr=x.createLinearGradient(0,0,r.width,r.height);gr.addColorStop(0,C.scratchA||'#d9b65b');gr.addColorStop(1,C.scratchB||'#a87d25');x.fillStyle=gr;x.fillRect(0,0,r.width,r.height);
 x.fillStyle='#fff';x.font='600 16px '+getComputedStyle(document.body).fontFamily;x.textAlign='center';x.textBaseline='middle';x.fillText('✦ Scratch to reveal the date ✦',r.width/2,r.height/2);
 x.globalCompositeOperation='destination-out';let down=false,n=0;
 const draw=e=>{if(!down)return;const b=cv.getBoundingClientRect();x.beginPath();x.arc(e.clientX-b.left,e.clientY-b.top,22,0,7);x.fill();if(++n%12===0){const d=x.getImageData(0,0,cv.width,cv.height).data;let c=0;for(let i=3;i<d.length;i+=64)if(d[i]===0)c++;if(c/(d.length/64)>.5){cv.style.opacity=0;setTimeout(()=>cv.remove(),700);fx(C.fx)}}};
 cv.addEventListener('pointerdown',e=>{down=true;cv.setPointerCapture(e.pointerId);draw(e)});cv.addEventListener('pointermove',draw);cv.addEventListener('pointerup',()=>down=false)}
/* music */
const M=Object.assign({pad:'sine',bell:'triangle',chords:[[48,55,64,71],[45,52,60,67],[41,48,57,64],[43,50,59,66]],arp:[0,1,2,3,2,1],bar:4,vol:.22,padv:.05,bellv:.05},C.music||{});
const hz=m=>440*2**((m-69)/12);let ac,master,on=false,timer,n=0,drones=[];
function tone(m,t,d,type,v,att){const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=hz(m);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+(att||.015));g.gain.exponentialRampToValueAtTime(.0003,t+d);o.connect(g);g.connect(master);o.start(t);o.stop(t+d+.05)}
function cycle(){const t=ac.currentTime+.06;
 if(M.melody){let x=t;M.melody.forEach(([m,b])=>{if(m)tone(m,x,Math.max(.5,b*M.beat*1.6),M.bell,M.bellv);x+=b*M.beat});(M.chords).forEach((ch,i)=>ch.forEach(m=>tone(m,t+i*M.bar,M.bar*1.1,M.pad,M.padv*.6,.6)));return}
 const ch=M.chords[n%M.chords.length];
 if(M.drone){M.pluck.forEach((m,j)=>tone(m,t+j*(M.bar/M.pluck.length),2.6,'triangle',.035,.01))}
 else if(M.padv)ch.forEach(m=>tone(m,t,M.bar*1.1,M.pad,M.padv,1.2));
 M.arp.forEach((k,j)=>{if(k!=null&&k>=0)tone((M.scale?M.scale[(k+n*2)%M.scale.length]:ch[k%ch.length]+12),t+j*(M.bar/M.arp.length),1.8,M.bell,M.bellv)});n++}
function startMusic(){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();
 if(!master){master=ac.createGain();master.gain.value=0;const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2600;const dl=ac.createDelay();dl.delayTime.value=.38;const fb=ac.createGain();fb.gain.value=.35;master.connect(lp);lp.connect(ac.destination);lp.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(ac.destination)}
 master.gain.setTargetAtTime(M.vol,ac.currentTime,1.2);
 if(M.drone&&!drones.length)M.drone.forEach(m=>{const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=hz(m);g.gain.value=.03;o.connect(g);g.connect(master);o.start();drones.push(o)});
 const len=M.melody?M.melody.reduce((a,b)=>a+b[1],0)*M.beat+2:M.bar;cycle();clearInterval(timer);timer=setInterval(cycle,len*1000);on=true;$('#mute').style.opacity=1}catch(e){}}
function stopMusic(){if(master)master.gain.setTargetAtTime(0,ac.currentTime,.3);clearInterval(timer);drones.forEach(o=>o.stop());drones=[];on=false;$('#mute').style.opacity=.5}
$('#mute').onclick=()=>on?stopMusic():startMusic();
/* open */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function open(){if(intro.classList.contains('open'))return;intro.classList.add('open');if(C.intro==='cake')intro.classList.add('cakeo');startMusic();
 if(C.burst)setTimeout(()=>fx(C.burst),300);
 setTimeout(()=>{document.querySelectorAll('.rise').forEach(r=>io.observe(r));fx(C.fx);scratch()},(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--idelay'))||1)*1000+200)}
intro.addEventListener('click',open);intro.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
const say=m=>{toast.textContent=m;toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),1800)};
$('#share').onclick=async()=>{const url=location.origin+location.pathname;try{if(navigator.share){await navigator.share({title:document.title,url});return}await navigator.clipboard.writeText(url);say('Link copied')}catch(e){if(e.name!=='AbortError')say('Copy the link from the address bar')}};
})();
