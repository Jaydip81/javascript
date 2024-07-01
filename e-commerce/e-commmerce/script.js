const cards = document.querySelectorAll(".card");
const cart = document.getElementById("cart");
const totalElement = document.getElementById("total");
const selectedItems = {};

function handleCardClick(event) {
  const card = event.currentTarget;
  const itemId = card.id;
  const itemName = card.querySelector("h2").textContent;
  const itemPrice = parseFloat(card.querySelector(".price").textContent);

  if (selectedItems[itemId]) {
    selectedItems[itemId].count++;
  } else {
    selectedItems[itemId] = {
      name: itemName,
      price: itemPrice,
      count: 1,
    };
  }

  updateCart();
}

function updateCart() {
  cart.innerHTML = "";
  let total = 0;

  for (const itemId in selectedItems) {
    const item = selectedItems[itemId];
    const listItem = document.createElement("li");
    const quantityContainer = document.createElement("div");
    const quantityText = document.createElement("span");
    const addButton = document.createElement("button");
    const subtractButton = document.createElement("button");

    addButton.textContent = "+";
    subtractButton.textContent = "-";

    quantityText.textContent = item.count;

    addButton.addEventListener("click", () => {
      addItem(itemId);
    });

    subtractButton.addEventListener("click", () => {
      removeItem(itemId);
    });

    const hr = document.createElement("hr");

    quantityContainer.appendChild(subtractButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(addButton);
    quantityContainer.appendChild(hr);

    listItem.textContent = `${item.name} - $${item.price * item.count}`;
    listItem.appendChild(quantityContainer);
    cart.appendChild(listItem);

    total += item.price * item.count;
  }

  totalElement.textContent = `Общая сумма: $${total.toFixed(2)}`;
}

function addItem(itemId) {
  if (selectedItems[itemId]) {
    selectedItems[itemId].count++;
  }
  updateCart();
}

function removeItem(itemId) {
  if (selectedItems[itemId]) {
    selectedItems[itemId].count--;
    if (selectedItems[itemId].count <= 0) {
      delete selectedItems[itemId];
    }
  }
  updateCart();
}

cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
