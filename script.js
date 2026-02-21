document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('coding-btn');
  const msg = document.getElementById('coding-msg');
  const TEXT = 'YES I AM ALWAYS CODING.';
  let typed = false;

  function typeText(node, text, speed = 40) {
    node.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    node.appendChild(cursor);

    let i = 0;
    const iv = setInterval(() => {
      if (i >= text.length) {
        clearInterval(iv);
        node.removeChild(cursor);
        const done = document.createElement('span');
        done.textContent = text;
        node.textContent = '';
        node.appendChild(done);
        return;
      }
      // insert text before cursor
      node.textContent = text.slice(0, i + 1);
      node.appendChild(cursor);
      i++;
    }, speed);
  }

  btn.addEventListener('click', () => {
    if (typed) return;
    btn.disabled = true;
    btn.textContent = 'Shown';
    typeText(msg, TEXT, 36);
    typed = true;
  });

  // allow message copy on click after typed
  msg.addEventListener('click', () => {
    if (!typed) return;
    const text = msg.textContent || TEXT;
    navigator.clipboard?.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = orig, 1200);
    }).catch(()=>{});
  });
});
