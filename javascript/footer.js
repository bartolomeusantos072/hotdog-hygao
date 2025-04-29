import { estabelecimento, cores } from './empresa.js';

export function aplicarTema() {
  document.body.style.backgroundColor = cores.fundo;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  if (header) header.style.backgroundColor = cores.primario;
  if (footer) footer.style.backgroundColor = cores.secundario;
}

export function preencherEmpresa() {
  const titulo = document.querySelector("header h1");
  const logo = document.querySelector("header img");
  if (titulo) titulo.textContent = estabelecimento.nome;
  if (logo && estabelecimento.logo) logo.src = estabelecimento.logo;

  const footerEl = document.querySelector("footer");
  if (!footerEl) return;

  footerEl.innerHTML = `
    <div class="footer-container">
      <div class="footer-section">
        <h3>Sobre</h3>
        <p>${estabelecimento.nome} entrega hot dogs artesanais com qualidade e rapidez.</p>
      </div>
      <div class="footer-section">
        <h3>Contato</h3>
        <p>📍 ${estabelecimento.endereco}</p>
        <p>📞 ${estabelecimento.telefone}</p>
      </div>
      <div class="footer-section">
        <h3>Redes Sociais</h3>
        <a href="${estabelecimento.instagram}" target="_blank">📸 Instagram</a> |
        <a href="${estabelecimento.facebook}" target="_blank">📘 Facebook</a> |
        <a href="https://wa.me/${estabelecimento.telefone}" target="_blank">📲 WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 ${estabelecimento.nome} - Todos os direitos reservados.</p>
    </div>
  `;
}

