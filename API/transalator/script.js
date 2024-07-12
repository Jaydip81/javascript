document.getElementById("sbm").addEventListener("click", function (e) {
  e.preventDefault();
  var text = document.getElementById("inp-data").value;
  var target = document.getElementById("inp-language").value;

  const url = "https://text-translator2.p.rapidapi.com/translate";
  const data = new FormData();
  data.append("source_language", "en");
  data.append("target_language", target);
  data.append("text", text);

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "d47a13d774mshbf0128e72ba1bacp17869cjsn59b779901e34",
      "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    },
    body: data,
  };

  fetch(url,options).then(res => res.json()).then(data => {
    document.getElementById("res").innerHTML = data.data.transaltedText;
  });
});