// Vídeo do topo: toca sozinho, sem som e em loop.
// Se o navegador bloquear o autoplay, mostra um botão de play e começa no primeiro toque/rolagem.
(function () {
  const v = document.getElementById('video-garagem');
  if (!v) return;
  v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = true;
  v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
  const box = v.closest('.hero-video');
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'video-play'; btn.setAttribute('aria-label', 'Tocar vídeo');
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
  box.appendChild(btn);
  const reduzir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  let visivel = true;
  function tocar() {
    const p = v.play();
    if (p && p.then) p.then(function () { box.classList.remove('parado'); }).catch(function () { box.classList.add('parado'); });
  }
  btn.addEventListener('click', function () { tocar(); });
  v.addEventListener('click', function () { if (v.paused) tocar(); });
  v.addEventListener('playing', function () { box.classList.remove('parado'); });
  // Primeira interação da pessoa destrava o autoplay em navegadores mais restritos
  ['pointerdown', 'touchstart', 'scroll', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, function once() { if (v.paused && visivel && !(reduzir && reduzir.matches)) tocar(); window.removeEventListener(ev, once); }, { passive: true });
  });
  if (reduzir && reduzir.matches) { box.classList.add('parado'); }
  else if (v.readyState >= 2) tocar(); else { v.addEventListener('canplay', function c() { v.removeEventListener('canplay', c); tocar(); }); v.load(); }
  setTimeout(function () { if (visivel && v.paused && !document.hidden) box.classList.add('parado'); }, 2000);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        visivel = e.isIntersecting;
        if (reduzir && reduzir.matches) return;
        if (visivel) { if (!box.classList.contains('parado')) tocar(); } else v.pause();
      });
    }, { threshold: 0.2 }).observe(v);
  }
})();
