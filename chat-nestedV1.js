// /js/chat-nested.js
(function(){
  const cfg = window.FAQ_CONFIG || {};
  const root = document.getElementById('im-chat');
  const log  = document.getElementById('im-log');
  if(!root || !log) return;

  const L = cfg.lang || 'nl';
  const labels = {
    chooseCat: L==='fr' ? 'Choisissez une catégorie' : 'Kies een categorie',
    chooseSub: L==='fr' ? 'Choisissez un sujet' : 'Kies een onderwerp',
    back: L==='fr' ? '← Retour' : '← Terug',
    more: L==='fr' ? 'Autres questions' : 'Andere vragen',
    cats: L==='fr' ? 'Catégories' : 'Categorieën',
    assistant: L==='fr' ? 'Assistant' : 'Assistent',
    you: L==='fr' ? 'Vous' : 'Jij'
  };

  // UI helpers
  function clear(){ log.innerHTML=''; }
  function add(role, html, me=false){
    const d = document.createElement('div'); d.className='im-chat__msg';
    d.innerHTML = `<b>${role}</b><span class="im-chat__bubble ${me?'im-chat__bubble--me':'im-chat__bubble--bot'}">${html}</span>`;
    log.appendChild(d); log.scrollTop = log.scrollHeight;
  }
  function addButtons(items, title, onClick){
    const wrap = document.createElement('div'); wrap.className='im-chat__msg';
    if(title) wrap.innerHTML = `<b>${title}</b>`;
    const row = document.createElement('div'); row.className='im-btn-row';
    items.forEach(it=>{
      const b = document.createElement('button'); b.type='button';
      b.className='im-chat__send secondary'; b.textContent = it.label;
      b.onclick = ()=> onClick(it);
      row.appendChild(b);
    });
    wrap.appendChild(row); log.appendChild(wrap); log.scrollTop = log.scrollHeight;
  }

  // Navigatie
  function showCategories(){
    clear();
    add(labels.assistant, cfg.startText || 'Kies een categorie om te beginnen.');
    const cats = (cfg.categories||[]).map(c=>({ id:c.id, label:c.label, node:c }));
    addButtons(cats, labels.chooseCat, (c)=> openNode(c.node));
  }

  function openNode(node, trail=[]){
    clear();
    if(!node) return showCategories();

    // Menu-node
    if(node.type === 'menu'){
      add(labels.assistant, `<strong>${node.label}</strong>`);
      const items = (node.children||[]).map(ch=>({ id: ch.id, label: ch.label, node: ch }));
      addButtons(items, labels.chooseSub, (c)=> openNode(c.node, [...trail, node]));
      // back
      addBack(trail.length ? ()=> openNode(trail[trail.length-1], trail.slice(0,-1)) : showCategories);
      return;
    }

    // Antwoord-node
    if(node.type === 'answer'){
      add(labels.you, node.label, true);
      add(labels.assistant, node.answer || (L==='fr'?'Information à venir.':'Informatie volgt.'));
      addActions(trail, node);
      return;
    }

    // Fallback: als categorie op topniveau zonder type als answer wordt gebruikt
    if(node.answer){
      add(labels.you, node.label, true);
      add(labels.assistant, node.answer);
      addActions(trail, node);
    } else if (node.children) {
      // als categorie children heeft maar type mist, behandel als menu
      openNode({ ...node, type:'menu' }, trail);
    } else {
      showCategories();
    }
  }

  function addBack(onBack){
    const w = document.createElement('div'); w.className='im-chat__msg';
    const b = document.createElement('button'); b.type='button'; b.className='im-chat__send';
    b.textContent = labels.back; b.onclick = onBack;
    w.appendChild(b); log.appendChild(w);
  }

  function addActions(trail){
    const w = document.createElement('div'); w.className='im-chat__msg';
    const row = document.createElement('div'); row.className='im-btn-row';
    const b1 = button(labels.more, ()=> trail.length ? openNode(trail[trail.length-1], trail.slice(0,-1)) : showCategories);
    const b2 = button(labels.cats, showCategories);
    row.appendChild(b1); row.appendChild(b2); w.appendChild(row); log.appendChild(w);
  }
  function button(text, onClick){ const b=document.createElement('button'); b.type='button'; b.className='im-chat__send'; b.textContent=text; b.onclick=onClick; return b; }

  // Start
  showCategories();
})();
