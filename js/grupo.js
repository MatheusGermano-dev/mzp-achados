// Link do grupo de WhatsApp da MZP. Quando a Comunidade existir, cole o convite aqui
// (formato https://chat.whatsapp.com/...). Enquanto estiver vazio, os botões levam pro Instagram.
const LINK_GRUPO = '';

(function () {
  if (!/^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+$/.test(LINK_GRUPO)) return;
  const trocar = (id, texto) => {
    const a = document.getElementById(id);
    if (!a) return;
    a.href = LINK_GRUPO;
    if (texto) a.lastChild.textContent = texto;
    a.classList.add('zap');
  };
  trocar('cta-grupo', 'Entrar no grupo de achados');
  trocar('cta-topo', 'Grupo de achados');
  trocar('cta-rodape', 'Entrar no grupo do WhatsApp');
})();
