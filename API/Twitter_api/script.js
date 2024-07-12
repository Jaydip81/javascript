const loadData = async () => {
  const url =
    "https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "629b492e79msh3738cac68010191p184d57jsn5906caeef90a",
      "x-rapidapi-host": "twitter154.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    load(result.results);
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
    title.textContent = ele.views;
    title.classList.add("cart-h4");

    let des = document.createElement("p");
    des.textContent = ele.reply_count;
    des.classList.add("grid-p");

    let fav = document.createElement("p");
    des.textContent = ele.favorite_count;
    des.classList.add("grid-p");

    grid_text.append(title);
    grid_text.append(des);
    grid_text.append(fav);
    div.append(grid_text);
    itemContainer.append(div);
  });
};

loadData();
