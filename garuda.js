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

  // services multiselect
  var sel=document.getElementById('sel');
  if(sel){
    var selBtn=document.getElementById('selBtn'), selLabel=document.getElementById('selLabel');
    var checks=sel.querySelectorAll('input[type=checkbox]');
    selBtn.addEventListener('click',function(e){e.stopPropagation();sel.classList.toggle('open');});
    document.addEventListener('click',function(e){if(!e.target.closest('#sel'))sel.classList.remove('open');});
    checks.forEach(function(c){c.addEventListener('change',function(){
      var v=[].slice.call(checks).filter(function(x){return x.checked;}).map(function(x){return x.value;});
      if(v.length){selLabel.textContent=v.join(', ');selLabel.classList.remove('ph');}
      else{selLabel.textContent='Select one or more\u2026';selLabel.classList.add('ph');}
    });});
    window.__garudaChecks=checks;
  }

  // quote form -> WhatsApp (with robot check)
  var form=document.getElementById('qform');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var rob=document.getElementById('notRobot');
      if(rob && !rob.checked){document.getElementById('robotBox').classList.add('err');rob.focus();return;}
      if(document.getElementById('robotBox')) document.getElementById('robotBox').classList.remove('err');
      function g(id){var el=document.getElementById(id);return el?(el.value||'').trim():'';}
      var checks=window.__garudaChecks||[];
      var svcs=[].slice.call(checks).filter(function(x){return x.checked;}).map(function(x){return x.value;}).join(', ');
      var t='Hi Garuda Lawn Care! I would like a free quote.%0A%0A'
        +'Name: '+encodeURIComponent(g('fn'))+'%0A'
        +'Phone: '+encodeURIComponent(g('ph'))+'%0A'
        +'Email: '+encodeURIComponent(g('em'))+'%0A'
        +'Address: '+encodeURIComponent(g('addr'))+'%0A'
        +'Services: '+encodeURIComponent(svcs)+'%0A'
        +'Details: '+encodeURIComponent(g('msg'));
      window.open('https://wa.me/14378765492?text='+t,'_blank');
    });
  }

  // scroll reveal
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();