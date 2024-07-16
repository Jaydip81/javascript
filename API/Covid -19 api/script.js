let api = `https://api.rootnet.in/covid19-in/stats/latest`;

const fetchData = async (api) => {
  const response = await fetch(api);
  const data = await response.json();

  (document.getElementById("states").innerHTML = ""),
    data.data.regional.forEach((region) => {
      let div = document.createElement("div");
      div.classList.add("states-item");
      div.innerHTML = `<h3>${region.loc}</h3>
      <p>confirmedCasesIndian: ${region.confirmedCasesIndian}</p>
      <p>discharged : ${region.discharged}</p>
      <p>deaths: ${region.deaths}</p>
      <hr>`;

      document.getElementById("states").appendChild(div);
    });
};

fetchData(api);