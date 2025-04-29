import { getCookie, setCookie, deleteCookie } from './cookies.js';
import products from './products.js';

export function addToCart(productId) {
    const cart = loadCart();
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      const cartItem = cart.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    }
  
    saveCart(cart);
    renderCart();
  }
  
export function renderCart() {
    const cart = loadCart();
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
  
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item) => {
      console.log(item)
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `${item.name} - ${item.quantity} - x - R$ ${(item.price * item.quantity).toFixed(2)}`;
      cartItems.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  
    totalPrice.innerText = total.toFixed(2);
  }

export function clearCart() {
  deleteCookie("cart");
  renderCart();
}

export function saveCart(cart) {
    setCookie("cart", cart, 7);
  }

export function loadCart() {
    return getCookie("cart") || [];
  }
  
  