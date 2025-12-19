const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Shoes", price: 1299 }
];

const div = document.getElementById("products");

products.forEach(p => {
  div.innerHTML += `
    <div class="product">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});
