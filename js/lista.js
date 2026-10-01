// "Minha lista": a pessoa marca vários achados, vê o total e compra cada um no Mercado Livre.
// Não coleta nenhum dado pessoal: a lista fica só no navegador de quem está vendo (localStorage).
(function () {
  if (typeof PRODUTOS === 'undefined') return;
  const CHAVE = 'mzp-lista';
  const porNum = new Map(PRODUTOS.filter(p => Number.isInteger(p.num)).map(p => [p.num, p]));

  function carregar() {
    try {
      const v = JSON.parse(localStorage.getItem(CHAVE) || '[]');
      return Array.isArray(v) ? v.filter(n => porNum.has(n)) : [];
    } catch (e) { return []; }
  }
  function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(itens)); } catch (e) { /* modo anônimo: segue só na memória */ } }

  let itens = carregar();

  const preco = p => {
    const m = /([\d.]+),(\d{2})/.exec(p.preco || '');
    return m ? Number(m[1].replace(/\./g, '') + '.' + m[2]) : 0;
  };
  const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  // ---------- Barra flutuante ----------
  const barra = el('button', 'lista-barra');
  barra.type = 'button';
  barra.setAttribute('aria-haspopup', 'dialog');
  const bIcone = el('span', 'lista-icone');
  bIcone.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="17" cy="20.5" r="1.3"/></svg>';
  const bQtd = el('span', 'lista-qtd');
  const bTexto = el('span', 'lista-texto');
  const bTotal = el('span', 'lista-total');
  const bVer = el('span', 'lista-ver', 'Ver lista');
  bIcone.appendChild(bQtd);
  barra.append(bIcone, bTexto, bTotal, bVer);
  document.body.appendChild(barra);

  // ---------- Painel ----------
  const painel = document.createElement('dialog');
  painel.className = 'lista-painel';
  painel.setAttribute('aria-labelledby', 'lista-titulo');
  const topo = el('div', 'lista-topo');
  const titulo = el('h2', null, 'Minha lista');
  titulo.id = 'lista-titulo';
  const fechar = el('button', 'lista-fechar');
  fechar.type = 'button';
  fechar.setAttribute('aria-label', 'Fechar lista');
  fechar.textContent = '×';
  topo.append(titulo, fechar);
  const dica = el('p', 'lista-dica', 'Toque em "Comprar" em cada item: ele abre no Mercado Livre, você põe no carrinho de lá e paga tudo junto.');
  const ul = el('ul', 'lista-itens');
  const rodape = el('div', 'lista-rodape');
  const linhaTotal = el('div', 'lista-soma');
  const zap = el('a', 'lista-zap', 'Mandar lista no WhatsApp');
  zap.target = '_blank';
  zap.rel = 'noopener';
  const limpar = el('button', 'lista-limpar', 'Esvaziar lista');
  limpar.type = 'button';
  const aviso = el('p', 'lista-aviso', '#publi · Links de afiliado: podemos ganhar comissão, sem custo extra pra você. Preços podem mudar.');
  rodape.append(linhaTotal, zap, limpar, aviso);
  painel.append(topo, dica, ul, rodape);
  document.body.appendChild(painel);

  function montarPainel() {
    ul.textContent = '';
    let soma = 0;
    itens.forEach(n => {
      const p = porNum.get(n);
      soma += preco(p);
      const li = el('li');
      const img = el('div', 'li-img');
      if (/^(img\/[\w.-]+\.(webp|jpe?g|png)|https:\/\/[^/]*(mlstatic\.com|media-amazon\.com)\/.*)$/.test(p.imagem || '')) {
        const i = document.createElement('img');
        i.src = p.imagem; i.alt = ''; i.loading = 'lazy'; i.referrerPolicy = 'no-referrer';
        i.onerror = () => i.remove();
        img.appendChild(i);
      }
      const info = el('div', 'li-info');
      info.append(el('span', 'li-num', 'nº ' + p.num), el('strong', null, p.nome), el('span', 'li-preco', p.preco || ''));
      const acoes = el('div', 'li-acoes');
      const comprar = el('a', 'li-comprar', 'Comprar');
      comprar.href = p.link; comprar.target = '_blank'; comprar.rel = 'sponsored noopener';
      comprar.setAttribute('aria-label', 'Comprar ' + p.nome + ' no Mercado Livre (abre em nova aba)');
      const tirar = el('button', 'li-tirar', 'Tirar');
      tirar.type = 'button';
      tirar.setAttribute('aria-label', 'Tirar ' + p.nome + ' da lista');
      tirar.addEventListener('click', () => alternar(n));
      acoes.append(comprar, tirar);
      li.append(img, info, acoes);
      ul.appendChild(li);
    });
    linhaTotal.textContent = '';
    linhaTotal.append(el('span', null, itens.length + (itens.length === 1 ? ' item' : ' itens')), el('strong', null, brl(soma)));
    const texto = 'Minha lista de achados da MZP Garage:\n\n' +
      itens.map(n => { const p = porNum.get(n); return 'nº ' + p.num + ' · ' + p.nome + ' · ' + (p.preco || '') + '\n' + p.link; }).join('\n\n');
    zap.href = 'https://wa.me/?text=' + encodeURIComponent(texto);
    if (!itens.length) painel.open && painel.close();
    return soma;
  }

  function atualizar() {
    const soma = montarPainel();
    bQtd.textContent = String(itens.length);
    bTexto.textContent = itens.length === 1 ? '1 achado' : itens.length + ' achados';
    bTotal.textContent = brl(soma);
    barra.setAttribute('aria-label', 'Abrir minha lista: ' + bTexto.textContent + ', ' + bTotal.textContent);
    barra.classList.toggle('visivel', itens.length > 0);
    document.body.classList.toggle('com-lista', itens.length > 0);
    document.querySelectorAll('.add[data-num]').forEach(b => {
      const dentro = itens.includes(Number(b.dataset.num));
      b.setAttribute('aria-pressed', dentro ? 'true' : 'false');
      const nome = porNum.get(Number(b.dataset.num)).nome;
      b.setAttribute('aria-label', (dentro ? 'Tirar ' : 'Adicionar ') + nome + (dentro ? ' da' : ' à') + ' minha lista');
    });
  }

  function alternar(n) {
    itens = itens.includes(n) ? itens.filter(x => x !== n) : itens.concat(n);
    salvar();
    atualizar();
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('.add[data-num]');
    if (!b) return;
    const n = Number(b.dataset.num);
    const entrando = !itens.includes(n);
    alternar(n);
    if (entrando) { barra.classList.remove('pulo'); void barra.offsetWidth; barra.classList.add('pulo'); }
  });
  barra.addEventListener('click', () => { if (itens.length) painel.showModal(); });
  fechar.addEventListener('click', () => painel.close());
  painel.addEventListener('click', e => { if (e.target === painel) painel.close(); });
  limpar.addEventListener('click', () => { itens = []; salvar(); atualizar(); });
  document.addEventListener('vitrine:render', atualizar);
  window.addEventListener('storage', e => { if (e.key === CHAVE) { itens = carregar(); atualizar(); } });

  atualizar();
})();
