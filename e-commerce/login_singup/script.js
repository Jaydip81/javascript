let check = JSON.parse(window.localStorage.getItem("check")) || [];
function singup() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let re_password = document.getElementById("re-password").value;

  let obj = { name, email, password };
  if (password != re_password) {
    alert("your password is did not match");
  } else {
    location.href = "./login.html";
  }
  check.push(obj);

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("re-password").value = "";
  window.localStorage.setItem("data", JSON.stringify(check));
}
function login() {
  let username = document.getElementById("lg-username").value;
  let password = document.getElementById("lg-password").value;

  let singup_add = JSON.parse(localStorage.getItem("data")) || [];

  singup_add.map((elm) => {
    if (!(username == elm.name && password == elm.password)) {
      alert("invalid username or password");
    } else {
      document.getElementById(
        "k.o"
      ).innerHTML = `<a href="../e-commmerce/index.html">Login</a> `;
    }
  });
}
