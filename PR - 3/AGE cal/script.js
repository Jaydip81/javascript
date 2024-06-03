function Age_Calculate() {
  let age = document.getElementById("Date_of_birth").value;
  let date= new Date(entity_age);

  if (age == null || age == "") {
    document.getElementById("Notification").innerHTML = "dang! chief pick a date first";
  } else {
    let month = Date.now() - date;

    let age_date = new Date(month);
    let year = age_date.getUTCFullYear();
    let age = year - 1970;
    return (document.getElementById("display").innerHTML = "Age is: " + age);
  }
}
