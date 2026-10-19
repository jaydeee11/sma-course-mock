(function(){
  var toggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
  toggle.addEventListener('click',function(){var o=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',o)});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')})});

  var captions={
    ivy:'Meet <strong>Miss Ivy</strong>, hindi pa niya natapos ang course pero na-hire siya agad sa inapplayan niyang Work-from-home job at kumikita na ng P35,000+.',
    heidee:'Ito naman si <strong>Miss Heidee</strong>, na-hire agad sa isang Full-Time at isang Part-Time Job pagkatapos niyang matapos ang SMM Course.',
    aubrey:'"KUNG HINDI TALAGA AKO NAG-ENROLL, HINDI TALAGA AKO MAHA-HIRE AS A SOCIAL MEDIA MANAGER!" — <strong>Miss Aubrey</strong>',
    rhed:'"Ito po yung lucky charm kasi detailed po lahat." — <strong>Miss Rhed</strong>'
  };
  var player=document.getElementById('player'),cap=document.getElementById('playerCaption');
  var items=[].slice.call(document.querySelectorAll('.playlist__item'));
  function load(i,play){
    var b=items[i];items.forEach(function(x){x.classList.remove('is-active')});b.classList.add('is-active');
    player.pause();player.setAttribute('poster',b.dataset.poster);
    player.querySelector('source').src=b.dataset.src;player.load();
    cap.innerHTML=captions[b.dataset.story];
    if(play){var p=player.play();if(p&&p.catch)p.catch(function(){});}
  }
  items.forEach(function(b,i){b.addEventListener('click',function(){load(i,true)})});
  document.querySelectorAll('[data-play]').forEach(function(b){b.addEventListener('click',function(){
    load(+b.dataset.play,true);document.getElementById('watch').scrollIntoView({behavior:'smooth'});
  })});

  var lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
  document.querySelectorAll('.gallery__item').forEach(function(b){b.addEventListener('click',function(){lbImg.src=b.dataset.full;lb.hidden=false})});
  lb.addEventListener('click',function(e){if(e.target!==lbImg)lb.hidden=true});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});

  var bar=document.querySelector('.mobile-bar'),hero=document.querySelector('.hero'),pricing=document.getElementById('pricing');
  if('IntersectionObserver' in window){
    var heroVis=true,priceVis=false;
    function upd(){bar.classList.toggle('is-visible',!heroVis&&!priceVis)}
    new IntersectionObserver(function(e){heroVis=e[0].isIntersecting;upd()}).observe(hero);
    new IntersectionObserver(function(e){priceVis=e[0].isIntersecting;upd()}).observe(pricing);
  }
})();
