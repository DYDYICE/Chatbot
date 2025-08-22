(function(){
  const log = document.getElementById('im-log');
  const form = document.getElementById('im-form');
  const input = document.getElementById('im-input');

  function add(role, text, me=false){
    const wrap = document.createElement('div');
    wrap.className = 'im-chat__msg';
    wrap.innerHTML = `
      <b>${role}</b>
      <span class="im-chat__bubble ${me?'im-chat__bubble--me':'im-chat__bubble--bot'}">${escapeHtml(text)}</span>`;
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }
  function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const q = (input.value||'').trim();
    if(!q) return;
    add('You', q, true);
    input.value = '';
    try{
      const r = await fetch('/chat', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ message: q })
      });
      const data = await r.json();
      add('Bot', data.reply || '(no reply)');
    }catch(err){
      add('Bot', 'Sorry, er ging iets mis. Probeer opnieuw.');
      console.error(err);
    }
  });

  // Optioneel: privacy hint
  add('Bot', 'Hallo! Dit gesprek kan gelogd worden om onze service te verbeteren.');
})();
