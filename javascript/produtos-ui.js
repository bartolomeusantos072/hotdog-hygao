import products from './products.js';
import { addToCart } from './carrinho.js';

export function renderProducts() {
  const productList = document.getElementById("products-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.nome}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button class="add-to-cart" data-id="${product.id}">Adicionar</button>
    `;
    productList.appendChild(div);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const id = e.target.dataset.id;
      addToCart(id);
    }
  });
}
