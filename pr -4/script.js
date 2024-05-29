function addData() {
    var input = document.getElementById("name").value;
    if (input === "") {
        alert("Please enter data.");
    }
    
    var table = document.getElementById("table");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = input;
    cell2.innerHTML = '<button onclick="removeData(this)">Remove</button>';
    
    document.getElementById("name").value;
}

function removeData(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}