function Form_Validation() {
  let a = document.querySelector("#name").value;

  if (a == "null" || a == "") {
    document.querySelector("#nameError").innerHTML = "Enter your name first...";
  } else {
    document.querySelector("#nameError").innerHTML = "";
  }

  let b = document.querySelector("#email").value;

  if (b == "null" || b == "") {
    document.querySelector("#emailError").innerHTML =
      "Enter your email first...";
  } else {
    document.querySelector("#emailError").innerHTML = "";
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = regex.test(b);
    if (email) {
    } else {
      document.querySelector("#emailError").innerHTML = "Enter valid email";
    }
  }

  let c = document.querySelector("#number").value;

  if (c == "null" || c == "") {
    document.querySelector("#numberError").innerHTML =
      "Enter your number first...";
  } else {
    document.querySelector("#numberError").innerHTML = "";
    let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let number = regex.test(c);
    if (number) {
    } else {
      document.querySelector("#numberError").innerHTML = "Enter valid number";
    }
  }

  let d = document.querySelector("#password").value;

  if (d == "null" || d == "") {
    document.querySelector("#passwordError").innerHTML =
      "Enter your password first...";
  } else {
    document.querySelector("#passwordError").innerHTML = "";
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let password = regex.test(d);
    if (password) {
    } else {
      document.querySelector("#passwordError").innerHTML =
        "Enter valid password";
    }
  }
}
