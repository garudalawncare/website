// Garuda Lawn Care website — v1.5.1 (2026-07-18)
(function(){
  "use strict";
  var head=document.getElementById('top');
  if(head) addEventListener('scroll',function(){head.classList.toggle('scrolled',scrollY>8);});

  // drawer
  var drawer=document.getElementById('drawer'), ov=document.getElementById('overlay'),
      burger=document.getElementById('burger'), closeD=document.getElementById('closeDrawer');
  function openD(){drawer.classList.add('open');ov.classList.add('open');drawer.setAttribute('aria-hidden','false');}
  function closeDr(){drawer.classList.remove('open');ov.classList.remove('open');drawer.setAttribute('aria-hidden','true');}
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
  var qform=document.getElementById('qform');
  if(qform){
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

  // scroll reveal
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
