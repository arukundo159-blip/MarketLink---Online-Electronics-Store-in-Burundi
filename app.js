const products = [
  { id: 1, name: "iPhone 13", price: 650000, image: "https://placehold.co/300x200?text=iPhone+13" },
  { id: 2, name: "Samsung Galaxy", price: 450000, image: "https://placehold.co/300x200?text=Samsung" },
  { id: 3, name: "Wireless Headphones", price: 85000, image: "https://placehold.co/300x200?text=Headphones" },
  { id: 4, name: "Power Bank", price: 45000, image: "https://placehold.co/300x200?text=Power+Bank" },
  { id: 5, name: "Smart Watch", price: 95000, image: "https://placehold.co/300x200?text=Smart+Watch" },
  { id: 6, name: "Laptop", price: 900000, image: "https://placehold.co/300x200?text=Laptop" },
  { id: 7, name: "Bluetooth Speaker", price: 60000, image: "https://placehold.co/300x200?text=Speaker" },
  { id: 8, name: "Phone Charger", price: 20000, image: "https://placehold.co/300x200?text=Charger" }
];

let cart = [];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("search");

function formatPrice(price) {
  return price.toLocaleString("fr-FR") + " FBu";
}

function renderProducts(list = products) {
  productContainer.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML =       <img src="${product.image}" alt="${product.name}" loading="lazy">       <h3>${product.name}</h3>       <p><strong>${formatPrice(product.price)}</strong></p>       <button data-id="${product.id}">Add to Cart</button>    ;

    card.querySelector("button").addEventListener("click", () => {
      addToCart(product.id);
    });

    productContainer.appendChild(card);
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
  alert("Product added to cart!");
}

searchInput.addEventListener("input", event => {
  const query = event.target.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filteredProducts);
});

renderProducts();
