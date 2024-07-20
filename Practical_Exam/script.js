let obj = [
  {
    name: "Toy car",
    src: "https://m.media-amazon.com/images/I/61UgMxbLUKL.jpg",
    price: "₹1,899",
  },
  {
    name: "pixel 8",
    src: "https://m.media-amazon.com/images/I/41S2ZIExa3L._SX300_SY300_QL70_FMwebp_.jpg",
    price: "₹61,999",
  },
  {
    name: "Mixer grinder",
    src: "https://glenindia.com/cdn/shop/products/61js9jPC5GL._SL1100_618x618.jpg?v=1668846902",
    price: "₹1,999",
  },
  {
    name: "Samsung-S24",
    src: "https://m.media-amazon.com/images/I/71IfBk7ET0L._SX679_.jpg",
    price: "₹1,25,000",
  },
  {
    name: "iq-neo7",
    src: "https://m.media-amazon.com/images/I/41xfzQ2MeAL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "₹19,999",
  },
];

let cart = [];

let container = document.getElementById("product-container");
let cartList = document.getElementById("cart-list");

obj.forEach((product) => {
  let productDiv = document.createElement("div");
  productDiv.classList.add("product");

  let img = document.createElement("img");
  img.src = product.src;
  img.alt = product.name;

  let name = document.createElement("h3");
  name.textContent = product.name;
  name.classList.add("product-name");

  let price = document.createElement("p");
  price.textContent = product.price;
  price.classList.add("product-price");

  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.classList.add("add-to-cart");

  addToCartBtn.addEventListener("click", function () {
    cart.push(product);
    console.log(`Added ${product.name} to cart`);
    updateCartCount();
    renderCartItems(); 
  });

  productDiv.appendChild(img);
  productDiv.appendChild(name);
  productDiv.appendChild(price);
  productDiv.appendChild(addToCartBtn);

  container.appendChild(productDiv);
});

function updateCartCount() {
  let cartCount = document.getElementById("cart-count");
  cartCount.textContent = `Cart (${cart.length})`;
}

function renderCartItems() {
  cartList.innerHTML = ""; // Clear existing list

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    cartList.appendChild(li);
  });
}
