function EMI() {

    let Value = parseInt(document.getElementById("Amount").value);
    let rate = parseInt(document.getElementById("Rate").value);
    let month = parseInt(document.getElementById("Month").value);

    calculate(Value,rate,month);
}

function calculate(Value,rate,month)
{
    let interest = (Value * (rate * 0.01)) / month;
     
    let total = ((Value / month) + interest).toFixed(2);
 
    document.getElementById("display").innerHTML = "EMI : (₹)" + total;
}
