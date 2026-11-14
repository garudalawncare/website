// Garuda Lawn Care website — v1.9.4 (2026-11-14)
(function(){
  "use strict";
  var head=document.getElementById('top');
  if(head) addEventListener('scroll',function(){head.classList.toggle('scrolled',scrollY>8);});

  // drawer
  var drawer=document.getElementById('drawer'), ov=document.getElementById('overlay'),
      burger=document.getElementById('burger'), closeD=document.getElementById('closeDrawer');
  // page scroll lock (menu + quote overlay): page behind stays exactly where it was
  var locks=0, savedY=0;
  function lockPage(){
    if(locks++>0) return;
    savedY=window.pageYOffset||document.documentElement.scrollTop||0;
    var b=document.body;
    if(head){ b.style.paddingTop=head.offsetHeight+'px'; head.classList.add('pinned'); }
    b.style.position='fixed'; b.style.top=(-savedY)+'px'; b.style.left='0'; b.style.right='0'; b.style.width='100%';
    document.documentElement.classList.add('page-locked');
  }
  function unlockPage(){
    if(locks===0) return;
    if(--locks>0) return;
    var b=document.body, h=document.documentElement;
    b.style.position=''; b.style.top=''; b.style.left=''; b.style.right=''; b.style.width=''; b.style.paddingTop='';
    if(head) head.classList.remove('pinned');
    h.classList.remove('page-locked');
    var sb=h.style.scrollBehavior; h.style.scrollBehavior='auto';
    window.scrollTo(0,savedY);
    h.style.scrollBehavior=sb;
  }

  function openD(){
    if(drawer.classList.contains('open')) return;
    drawer.removeAttribute('inert');
    drawer.classList.add('open');ov.classList.add('open');drawer.setAttribute('aria-hidden','false');
    if(burger) burger.setAttribute('aria-expanded','true');
    lockPage();
  }
  function closeDr(){
    if(!drawer||!drawer.classList.contains('open')) return;
    drawer.classList.remove('open');ov.classList.remove('open');drawer.setAttribute('aria-hidden','true');
    drawer.setAttribute('inert','');
    if(burger) burger.setAttribute('aria-expanded','false');
    unlockPage();
  }
  if(burger) burger.onclick=openD;
  if(closeD) closeD.onclick=closeDr;
  if(ov) ov.onclick=closeDr;
  if(drawer) drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeDr);});

  // active nav highlight
  var path=(location.pathname.split('/').pop()||'index.html')||'index.html';
  if(drawer) drawer.querySelectorAll('nav a').forEach(function(a){
    var href=(a.getAttribute('href')||'').split('#')[0];
    if(href===path) a.classList.add('active');
  });

  // service photos  (EDIT these URLs to show photos on service cards)
  var SERVICE_PHOTOS={mowing:"",edging:"",fertilizing:"",hedge:"",sod:"",cleanup:""};
  document.querySelectorAll('.svc-bg').forEach(function(img){
    var u=SERVICE_PHOTOS[img.getAttribute('data-photo')];
    if(u){img.src=u;} else {img.remove();}
  });

  // gallery photos (EDIT these URLs to fill the gallery)
  var GALLERY_PHOTOS=["","","","","","","","",""];
  var lb=document.getElementById('lightbox'), lbImg=lb?lb.querySelector('img'):null;
  document.querySelectorAll('.gal-item').forEach(function(el,i){
    var u=GALLERY_PHOTOS[i];
    if(u){
      var im=document.createElement('img'); im.alt=''; im.loading='lazy';
      im.onerror=function(){this.remove();};
      im.src=u; el.appendChild(im); el.classList.add('has');
      el.addEventListener('click',function(){ if(lb&&lbImg){lbImg.src=u; lb.classList.add('open');} });
    }
  });
  if(lb){ lb.addEventListener('click',function(){lb.classList.remove('open');}); }

  // faq accordion
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){ q.parentElement.classList.toggle('open'); });
  });

  // ---- sectioned quote form (Web3Forms) ----
  function wireForm(qform){
    if(!qform||qform.getAttribute('data-wired')) return;
    qform.setAttribute('data-wired','1');
    var tiles=[].slice.call(qform.querySelectorAll('.tile'));
    var chips=[].slice.call(qform.querySelectorAll('.chip'));
    var bar=document.getElementById('qbar');
    function val(id){var e=document.getElementById(id);return e?(e.value||'').trim():'';}
    function services(){return tiles.filter(function(t){return t.querySelector('input').checked;}).map(function(t){return t.getAttribute('data-svc');});}
    function freq(){var c=qform.querySelector('.chip.sel');return c?c.getAttribute('data-freq'):'';}
    function mark(id,on){var el=document.getElementById(id);if(el)el.classList.toggle('done',on);}
    function progress(){
      var d=0, s1=!!val('addr'), s2=services().length>0, s3=!!freq(), s4=!!val('fn')&&!!val('ph');
      mark('qs1',s1); mark('qs2',s2); mark('qs3',s3); mark('qs4',s4);
      d=(s1?1:0)+(s2?1:0)+(s3?1:0)+(s4?1:0);
      if(bar) bar.style.width=(d/4*100)+'%';
    }
    tiles.forEach(function(t){t.addEventListener('click',function(){
      var cb=t.querySelector('input'); cb.checked=!cb.checked; t.classList.toggle('sel',cb.checked); progress();
    });});
    chips.forEach(function(c){c.addEventListener('click',function(){
      chips.forEach(function(x){x.classList.remove('sel');x.querySelector('input').checked=false;});
      c.classList.add('sel'); c.querySelector('input').checked=true; progress();
    });});
    ['addr','fn','ph','em','msg'].forEach(function(id){var el=document.getElementById(id);if(el)el.addEventListener('input',progress);});
    progress();

    function focusEl(id){var e=document.getElementById(id);if(e){e.scrollIntoView({block:'center',behavior:'smooth'});e.focus();}}
    function scrollTo(id){var e=document.getElementById(id);if(e)e.scrollIntoView({block:'center',behavior:'smooth'});}

    qform.addEventListener('submit',function(e){
      e.preventDefault();
      if(!val('addr')){focusEl('addr');return;}
      if(services().length===0){scrollTo('qs2');return;}
      if(!val('fn')){focusEl('fn');return;}
      if(!val('ph')){focusEl('ph');return;}
      var rob=document.getElementById('notRobot');
      if(rob && !rob.checked){document.getElementById('robotBox').classList.add('err');rob.focus();return;}
      if(document.getElementById('robotBox')) document.getElementById('robotBox').classList.remove('err');

      document.getElementById('h_services').value=services().join(', ');
      document.getElementById('h_freq').value=freq();
      document.getElementById('h_fromname').value=val('fn')||'Garuda Website';

      var btn=qform.querySelector('button[type=submit]'), orig=btn.textContent;
      btn.textContent='Sending\u2026'; btn.disabled=true;
      var data=Object.fromEntries(new FormData(qform).entries());
      fetch('https://api.web3forms.com/submit',{
        method:'POST',
        headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify(data)
      }).then(function(r){return r.json();}).then(function(res){
        if(res && res.success){
          qform.style.display='none';
          var pw=document.getElementById('qprogressWrap'); if(pw)pw.style.display='none';
          document.getElementById('qsuccess').classList.add('show');
          document.getElementById('qsuccess').scrollIntoView({block:'center',behavior:'smooth'});
        } else { fail(btn,orig); }
      }).catch(function(){ fail(btn,orig); });
    });
    function fail(btn,orig){
      btn.textContent=orig; btn.disabled=false;
      alert("Sorry, we couldn't send that just now. Please call or text us at 437-876-5492.");
    }
  }
  wireForm(document.getElementById('qform'));

  // scroll reveal
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  var QUOTE_CARD="<div class=\"quote-card\"> <div class=\"qprogress\" id=\"qprogressWrap\"><div class=\"bar\" id=\"qbar\"></div></div> <form id=\"qform\" autocomplete=\"off\"> <input type=\"hidden\" name=\"access_key\" value=\"ad4c0881-6d2c-43de-bb55-663baf195942\"> <input type=\"hidden\" name=\"subject\" value=\"New Free Quote — Garuda Lawn Care\"> <input type=\"hidden\" name=\"from_name\" id=\"h_fromname\" value=\"Garuda Website\"> <input type=\"checkbox\" name=\"botcheck\" style=\"display:none\" tabindex=\"-1\" autocomplete=\"off\"> <input type=\"hidden\" name=\"Services\" id=\"h_services\"> <input type=\"hidden\" name=\"Frequency\" id=\"h_freq\"> <div class=\"qsec\" id=\"qs1\"> <div class=\"qsec-head\"><span class=\"qsec-num\">1</span><h3>Your property</h3></div> <div class=\"fld\"><input id=\"addr\" name=\"Address\" required placeholder=\"Street address, City\"></div> </div> <div class=\"qsec\" id=\"qs2\"> <div class=\"qsec-head\"><span class=\"qsec-num\">2</span><h3>What do you need?</h3><span class=\"opt\">tap any that apply</span></div> <div class=\"tiles\"> <label class=\"tile\" data-svc=\"Mowing / Grass Cutting\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\"><use href=\"#icoMower\"/></svg></span><span>Mowing</span></label> <label class=\"tile\" data-svc=\"Fertilization\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\"><use href=\"#icoSpreader\"/></svg></span><span>Fertilization</span></label> <label class=\"tile\" data-svc=\"Hedge &amp; Shrub Trimming\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\"><use href=\"#icoShears\"/></svg></span><span>Hedge / Trim</span></label> <label class=\"tile\" data-svc=\"Sod / Seeding\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\"><use href=\"#icoSod\"/></svg></span><span>Sod / Seed</span></label> <label class=\"tile\" data-svc=\"Spring / Fall Cleanup\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\"><use href=\"#icoRake\"/></svg></span><span>Cleanup</span></label> <label class=\"tile\" data-svc=\"Other\"><input type=\"checkbox\"><span class=\"chk\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><span class=\"ic\"><svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 8c-12 0-20 8-20 20 12 0 20-8 20-20z\"/><path d=\"M36 30v10M31 35h10\"/></svg></span><span>Other</span></label> </div> </div> <div class=\"qsec\" id=\"qs3\"> <div class=\"qsec-head\"><span class=\"qsec-num\">3</span><h3>How often?</h3></div> <div class=\"chips\"> <label class=\"chip\" data-freq=\"Weekly\"><input type=\"radio\">Weekly</label> <label class=\"chip\" data-freq=\"Bi-weekly\"><input type=\"radio\">Bi-weekly</label> <label class=\"chip\" data-freq=\"One-time\"><input type=\"radio\">One-time</label> <label class=\"chip\" data-freq=\"Not sure yet\"><input type=\"radio\">Not sure yet</label> </div> </div> <div class=\"qsec\" id=\"qs4\"> <div class=\"qsec-head\"><span class=\"qsec-num\">4</span><h3>Your info</h3></div> <div class=\"grid2\"> <div class=\"fld\"><label for=\"fn\">Name</label><input id=\"fn\" name=\"name\" required placeholder=\"Your name\"></div> <div class=\"fld\"><label for=\"ph\">Phone</label><input id=\"ph\" name=\"Phone\" type=\"tel\" required placeholder=\"(437) 000-0000\"></div> </div> <div class=\"fld\"><label for=\"em\">Email <span style=\"color:var(--muted);font-weight:400\">(optional)</span></label><input id=\"em\" name=\"email\" type=\"email\" placeholder=\"you@email.com\"></div> <div class=\"fld\"><label for=\"msg\">Anything else? <span style=\"color:var(--muted);font-weight:400\">(optional)</span></label><textarea id=\"msg\" name=\"Message\" placeholder=\"Lawn size, gates, timing&hellip;\"></textarea></div> <div class=\"robot\" id=\"robotBox\"> <label class=\"robot-check\"><input type=\"checkbox\" id=\"notRobot\"><span class=\"box\"></span><span class=\"rtxt\">I'm not a robot</span></label> <span class=\"robot-brand\">Verification</span> </div> </div> <button class=\"btn btn-green btn-block\" type=\"submit\">Request My Free Quote</button> <p class=\"quote-foot\">We&rsquo;ll reply the same day. Prefer to talk? Call or text <a href=\"tel:+14378765492\">437-876-5492</a>.</p> </form> <div class=\"qsuccess\" id=\"qsuccess\"> <div class=\"ok\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M20 6 9 17l-5-5\"/></svg></div> <h3>Thank you!</h3> <p>Your request is in &mdash; we&rsquo;ll get back to you the same day, usually by phone or text. Talk soon!</p> </div> </div>";
  var QUOTE_ICONS="<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><symbol id=\"icoMower\" viewBox=\"0 0 64 64\"> <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <!-- body / deck --> <rect x=\"10\" y=\"26\" width=\"36\" height=\"10\" rx=\"3\"/> <!-- handle --> <path d=\"M42 26 L52 10\"/> <path d=\"M38 26 L48 10\"/> <line x1=\"48\" y1=\"10\" x2=\"52\" y2=\"10\"/> <!-- engine bump on top --> <rect x=\"22\" y=\"19\" width=\"14\" height=\"7\" rx=\"2\"/> <!-- blade indicator under deck --> <line x1=\"20\" y1=\"33\" x2=\"44\" y2=\"33\" stroke-dasharray=\"3 3\"/> <!-- left wheel --> <circle cx=\"18\" cy=\"40\" r=\"6\" fill=\"currentColor\" fill-opacity=\".12\"/> <circle cx=\"18\" cy=\"40\" r=\"6\"/> <circle cx=\"18\" cy=\"40\" r=\"2\" fill=\"currentColor\"/> <!-- right wheel --> <circle cx=\"44\" cy=\"40\" r=\"6\" fill=\"currentColor\" fill-opacity=\".12\"/> <circle cx=\"44\" cy=\"40\" r=\"6\"/> <circle cx=\"44\" cy=\"40\" r=\"2\" fill=\"currentColor\"/> <!-- grass blades being cut --> <path d=\"M8 36 Q6 30 8 24\" stroke-width=\"2.2\"/> <path d=\"M4 36 Q2 28 5 22\" stroke-width=\"2.2\"/> <path d=\"M56 36 Q60 29 57 23\" stroke-width=\"2.2\"/> </g> </symbol><symbol id=\"icoSpreader\" viewBox=\"0 0 64 64\"> <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <!-- hopper (big trapezoidal bin) --> <path d=\"M18 8 L46 8 L40 30 L24 30 Z\" fill=\"currentColor\" fill-opacity=\".1\"/> <path d=\"M18 8 L46 8 L40 30 L24 30 Z\"/> <!-- handle T-bar --> <line x1=\"32\" y1=\"8\" x2=\"32\" y2=\"2\"/> <line x1=\"24\" y1=\"2\" x2=\"40\" y2=\"2\"/> <!-- frame down to wheels --> <line x1=\"24\" y1=\"30\" x2=\"20\" y2=\"46\"/> <line x1=\"40\" y1=\"30\" x2=\"44\" y2=\"46\"/> <!-- axle --> <line x1=\"18\" y1=\"46\" x2=\"46\" y2=\"46\"/> <!-- left wheel --> <circle cx=\"18\" cy=\"50\" r=\"6\" fill=\"currentColor\" fill-opacity=\".12\"/> <circle cx=\"18\" cy=\"50\" r=\"6\"/> <!-- right wheel --> <circle cx=\"46\" cy=\"50\" r=\"6\" fill=\"currentColor\" fill-opacity=\".12\"/> <circle cx=\"46\" cy=\"50\" r=\"6\"/> <!-- pellets/granules falling --> <circle cx=\"28\" cy=\"36\" r=\"1.5\" fill=\"currentColor\"/> <circle cx=\"32\" cy=\"40\" r=\"1.5\" fill=\"currentColor\"/> <circle cx=\"36\" cy=\"35\" r=\"1.5\" fill=\"currentColor\"/> <circle cx=\"30\" cy=\"44\" r=\"1.5\" fill=\"currentColor\"/> <circle cx=\"34\" cy=\"43\" r=\"1.5\" fill=\"currentColor\"/> </g> </symbol><symbol id=\"icoShears\" viewBox=\"0 0 64 64\"> <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <!-- hedge block being trimmed --> <rect x=\"4\" y=\"8\" width=\"44\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\".1\"/> <rect x=\"4\" y=\"8\" width=\"44\" height=\"28\" rx=\"4\"/> <!-- leaves/texture on hedge --> <path d=\"M10 18 Q14 14 18 18 Q22 14 26 18 Q30 14 34 18 Q38 14 42 18\" stroke-width=\"2\"/> <path d=\"M10 24 Q14 20 18 24 Q22 20 26 24 Q30 20 34 24 Q38 20 42 24\" stroke-width=\"2\"/> <!-- shears blade top --> <path d=\"M8 36 L56 36 L56 40 L8 40 Z\" fill=\"currentColor\" fill-opacity=\".15\"/> <path d=\"M8 36 L56 36 L56 40 L8 40\"/> <!-- shears blade bottom (slight gap = open blades) --> <path d=\"M8 42 L56 42 L56 46 L8 46 Z\" fill=\"currentColor\" fill-opacity=\".15\"/> <path d=\"M8 42 L56 42 L56 46 L8 46\"/> <!-- handle left --> <path d=\"M12 46 Q10 52 8 58\"/> <!-- handle right --> <path d=\"M52 46 Q54 52 56 58\"/> <!-- clippings falling --> <path d=\"M20 40 L18 50\" stroke-width=\"2\"/> <path d=\"M32 40 L30 52\" stroke-width=\"2\"/> <path d=\"M44 40 L42 50\" stroke-width=\"2\"/> </g> </symbol><symbol id=\"icoSod\" viewBox=\"0 0 64 64\"> <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <!-- ground / prepared soil --> <rect x=\"4\" y=\"48\" width=\"56\" height=\"10\" rx=\"2\" fill=\"currentColor\" fill-opacity=\".15\"/> <rect x=\"4\" y=\"48\" width=\"56\" height=\"10\" rx=\"2\"/> <!-- sod roll (partially unrolled) --> <!-- unrolled flat section on ground --> <rect x=\"4\" y=\"42\" width=\"30\" height=\"8\" rx=\"1\" fill=\"currentColor\" fill-opacity=\".2\"/> <path d=\"M4 42 L34 42 L34 48 L4 48\"/> <!-- grass blades on flat section --> <path d=\"M10 42 Q10 37 10 34\" stroke-width=\"2\"/> <path d=\"M16 42 Q16 36 17 33\" stroke-width=\"2\"/> <path d=\"M22 42 Q22 37 22 34\" stroke-width=\"2\"/> <path d=\"M28 42 Q28 36 29 33\" stroke-width=\"2\"/> <!-- the roll itself --> <ellipse cx=\"44\" cy=\"38\" rx=\"12\" ry=\"10\" fill=\"currentColor\" fill-opacity=\".12\"/> <ellipse cx=\"44\" cy=\"38\" rx=\"12\" ry=\"10\"/> <!-- roll layers --> <ellipse cx=\"44\" cy=\"38\" rx=\"8\" ry=\"6.5\"/> <ellipse cx=\"44\" cy=\"38\" rx=\"4\" ry=\"3.5\"/> <!-- grass on top of roll --> <path d=\"M38 28 Q37 23 38 20\" stroke-width=\"2\"/> <path d=\"M44 26 Q43 21 44 18\" stroke-width=\"2\"/> <path d=\"M50 28 Q51 23 50 20\" stroke-width=\"2\"/> </g> </symbol><symbol id=\"icoRake\" viewBox=\"0 0 64 64\"> <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <!-- long handle --> <line x1=\"20\" y1=\"4\" x2=\"50\" y2=\"46\"/> <!-- rake head crossbar --> <path d=\"M32 40 Q44 36 56 40\"/> <!-- tines (5 teeth angled outward) --> <line x1=\"33\" y1=\"41\" x2=\"30\" y2=\"52\"/> <line x1=\"37\" y1=\"39\" x2=\"35\" y2=\"52\"/> <line x1=\"41\" y1=\"38\" x2=\"41\" y2=\"52\"/> <line x1=\"45\" y1=\"38\" x2=\"47\" y2=\"52\"/> <line x1=\"50\" y1=\"40\" x2=\"53\" y2=\"52\"/> <!-- leaf pile --> <ellipse cx=\"32\" cy=\"56\" rx=\"18\" ry=\"5\" fill=\"currentColor\" fill-opacity=\".15\"/> <path d=\"M16 56 Q18 52 22 54 Q24 50 28 53 Q30 49 34 52 Q37 48 40 52 Q43 50 46 54 Q48 56 48 56\"/> <!-- a few leaves in the air --> <path d=\"M10 40 Q8 35 11 32 Q14 35 12 40 Z\" fill=\"currentColor\" fill-opacity=\".4\"/> <path d=\"M6 48 Q4 43 7 40 Q10 43 8 48 Z\" fill=\"currentColor\" fill-opacity=\".3\"/> <path d=\"M14 32 Q15 27 18 26 Q19 30 16 34 Z\" fill=\"currentColor\" fill-opacity=\".35\"/> </g> </symbol></svg>";

  // ---- quote form overlay: every quote button opens the form on top of the page ----
  var qm=null, qmPanel=null, homeSlot=null, borrowed=null, lastFocus=null;
  function buildModal(){
    if(qm) return;
    qm=document.createElement('div'); qm.className='qmodal'; qm.id='qmodal';
    qm.setAttribute('role','dialog'); qm.setAttribute('aria-modal','true'); qm.setAttribute('aria-label','Free quote'); qm.hidden=true;
    qm.innerHTML='<div class="qmodal-panel" tabindex="-1"><button type="button" class="qmodal-x" aria-label="Close">&times;</button></div>';
    document.body.appendChild(qm);
    qmPanel=qm.querySelector('.qmodal-panel');
    qm.querySelector('.qmodal-x').addEventListener('click',closeQuote);
    qm.addEventListener('click',function(e){ if(e.target===qm) closeQuote(); });
  }
  function getCard(){
    var f=document.getElementById('qform');
    if(f) return f.closest('.quote-card');
    // pages without a form: create the same form
    if(!document.getElementById('icoMower')){ var d=document.createElement('div'); d.innerHTML=QUOTE_ICONS; document.body.appendChild(d.firstChild); }
    var w=document.createElement('div'); w.innerHTML=QUOTE_CARD;
    var card=w.firstChild; card.setAttribute('data-created','1');
    return card;
  }
  function openQuote(){
    buildModal();
    if(!qm.hidden) return;
    lastFocus=document.activeElement;
    var card=getCard();
    if(card.parentNode && !card.getAttribute('data-created')){
      // borrow the page's own form; hold its space so nothing behind moves
      homeSlot=document.createElement('div'); homeSlot.className='qslot';
      homeSlot.style.height=card.offsetHeight+'px';
      card.parentNode.insertBefore(homeSlot,card);
      borrowed=card;
    }
    card.removeAttribute('data-created');
    qmPanel.appendChild(card);
    wireForm(card.querySelector('#qform'));
    qm.hidden=false;
    lockPage();
    qm.scrollTop=0;
    qmPanel.focus({preventScroll:true});
  }
  function closeQuote(){
    if(!qm||qm.hidden) return;
    qm.hidden=true;
    if(borrowed && homeSlot){ homeSlot.parentNode.insertBefore(borrowed,homeSlot); homeSlot.remove(); }
    borrowed=null; homeSlot=null;
    unlockPage();
    if(lastFocus && lastFocus.focus){ try{lastFocus.focus({preventScroll:true});}catch(e){} }
  }
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){ if(qm&&!qm.hidden) closeQuote(); else closeDr(); }
  });
  var QUOTE_TEXT=/quote|exact price/i;
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a');
    if(!a || (qm&&qm.contains(a))) return;
    var href=a.getAttribute('href')||'';
    if(/^(tel:|mailto:|sms:|https?:)/i.test(href)) return;
    if(!QUOTE_TEXT.test(a.textContent||'')) return;
    if(e.ctrlKey||e.metaKey||e.shiftKey||e.button>0) return;
    e.preventDefault();
    closeDr();
    openQuote();
  },true);
})();
