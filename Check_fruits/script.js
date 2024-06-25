let initialArray = [];
window.localStorage.setItem("myFruits", JSON.stringify(initialArray));

function add_fruits() {
  let data = JSON.parse(window.localStorage.getItem("myFruits"));

  let newFruits = "Banana,Orange,Apple,Kivi,Pineapple,Jackfruit".split(",");
  data.push(...newFruits); 

  window.localStorage.setItem("myFruits", JSON.stringify(data));

  displayFruits();
}

function displayFruits() {
  let displayElement = document.getElementById("display");
  let data = JSON.parse(window.localStorage.getItem("myFruits"));

  displayElement.innerHTML = "";

  let ul = document.createElement("ul");
  data.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
  });

  displayElement.appendChild(ul);
}

displayFruits();