import { estabelecimento } from './empresa.js';

function isMobile() {
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

function getWhatsAppLink(phone, message) {
  const encoded = encodeURIComponent(message);
  return isMobile()
    ? `https://api.whatsapp.com/send/?phone=${phone}&text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}

export function initModal() {
  const modal = document.getElementById("pedido-modal");
  const btnOpen = document.getElementById("fazer-pedido");
  const btnClose = document.querySelector(".close");
  const btnConfirm = document.getElementById("confirmar-pedido");
  const btnCancel = document.getElementById("cancelar-pedido");

  if (!modal || !btnOpen || !btnClose || !btnConfirm || !btnCancel) return;

  btnOpen.onclick = () => modal.style.display = "flex";
  btnClose.onclick = btnCancel.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  btnConfirm.onclick = () => {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const pagamento = document.getElementById("pagamento").value;
    const total = document.getElementById("total-price").textContent;

    if (!nome || !endereco) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const itens = Array.from(document.querySelectorAll("#cart-items li"))
      .map(li => li.textContent)
      .join("\n- ");

    const mensagem = `🌭 *Novo Pedido - ${estabelecimento.nome}*\n\n👤 *Nome:* ${nome}\n📍 *Endereço:* ${endereco}\n💳 *Pagamento:* ${pagamento}\n\n🛒 *Itens:*\n- ${itens}\n\n💰 *Total:* R$ ${total}`;

    const link = getWhatsAppLink(estabelecimento.telefone, mensagem);
    window.open(link, "_blank");

    modal.style.display = "none";
  };
}
