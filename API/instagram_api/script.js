const loadData = async () => {
  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1/likes?code_or_id_or_url=CxYQJO8xuC6";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "629b492e79msh3738cac68010191p184d57jsn5906caeef90a",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    load(result.data.items);
  } catch (error) {
    console.error(error);
  }
};

const load = (data) => {
  let itemContainer = document.getElementById("char");
  data.map((ele) => {
    let div = document.createElement("div");

    let grid_text = document.createElement("div");
    grid_text.classList.add("grid-text");
    let title = document.createElement("h4");
    title.textContent = ele.full_name;
    title.classList.add("cart-h4");

    let grid_img = document.createElement("div");
    grid_img.classList.add("grid-img");
    let img = document.createElement("img");
    img.src = ele.profile_pic_id;
    img.classList.add("grid-img");

    let des = document.createElement("p");
    des.textContent = ele.username;
    des.classList.add("grid-p");

    grid_text.append(title);
    grid_text.append(des);
    div.append(grid_img);
    div.append(grid_text);
    itemContainer.append(div);
  });
};

loadData();