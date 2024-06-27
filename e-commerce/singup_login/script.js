let check = JSON.parse(window.localStorage.getItem("check")) || [];
function singup() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let re_password = document.getElementById('re-password').value;
     
    if(password != re_password) {
        alert('your password is did not match');
    }
    else{
        document.getElementById('click').innerHTML = `<a href="/index.html">singup</a>`;
    }
    check.push({
        name: name,
        password: password,
    });

    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('re-password').value = "";
    window.localStorage.setItem('data', JSON.stringify(check));
}
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let singup_add = JSON.parse(localStorage.getItem("data")) || [];

    let user = singup_add.find(user => user.username === username && user.password === password);

    if (!user || " ") {
        alert("invalid username or password")
    }
    else {
        document.getElementById("k.o").innerHTML = `<a href="/index.html>login</a>`;
    }
}