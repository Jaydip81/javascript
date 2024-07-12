const loadData = async () => {
  const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '629b492e79msh3738cac68010191p184d57jsn5906caeef90a',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    load(result.data.products);
  
  } catch (error) {
    console.error(error);
  }  
}

const load = (data) => {
  let itemContainer = document.getElementById("char");
  data.map((ele) => {
    let div = document.createElement("div");

    let grid_img = document.createElement("div");
    grid_img.classList.add("grid-img");
    let img = document.createElement("img");
    img.src = ele.product_photo;
    img.classList.add("grid-img");

    let grid_text = document.createElement("div");
    grid_text.classList.add("grid-text");
    let title = document.createElement("h4");
    title.textContent = ele.product_title;
    title.classList.add("cart-h4");

    let des = document.createElement("p");
    des.textContent = ele.product_price;
    des.classList.add("grid-p");

    grid_img.append(img);
    grid_text.append(title);
    grid_text.append(des);
    div.append(grid_img);
    div.append(grid_text);
    itemContainer.append(div);
  });
};

loadData();