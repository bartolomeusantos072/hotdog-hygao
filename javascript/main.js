import { renderProducts } from './produtos-ui.js';
import { renderCart, clearCart } from './carrinho.js';
import { initModal } from './modal.js';
import { aplicarTema, preencherEmpresa } from './footer.js';

import { setCookie, getCookie } from './cookies.js'; // Importando as funções de cookies

document.addEventListener("DOMContentLoaded", () => {
  aplicarTema();
  preencherEmpresa();
  renderProducts();
  renderCart();
  initModal();
  
  // Função para controlar o consentimento de cookies
  handleCookieConsent();

  document.getElementById("clear-cart").addEventListener("click", clearCart);
});

// Função para exibir o banner de cookies e lidar com o consentimento
function handleCookieConsent() {
  const cookieConsent = getCookie("cookieConsent");
  const cookieBanner = document.getElementById("cookie-banner");

  // Se o consentimento já foi dado ou recusado, não mostramos o banner
  if (cookieConsent || !cookieBanner) {
    return;
  }

  // Exibe o banner de cookies se não houver consentimento
  cookieBanner.style.display = "block";

  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      setCookie("cookieConsent", "true", 365);  // Salva o consentimento por 1 ano
      cookieBanner.style.display = "none";      // Fecha o banner
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", () => {
      setCookie("cookieConsent", "false", 365); // Salva a recusa do consentimento
      cookieBanner.style.display = "none";      // Fecha o banner
    });
  }
}
