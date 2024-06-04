function addData() {
    var input = document.getElementById("name").value;
    if (input === "") {
        alert("Please enter data.");
        return;
    }
    
    var table = document.getElementById("table");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = input;
    cell2.innerHTML = '<button onclick="removeData(this)">Remove</button>';
    cell3.innerHTML = '<button onclick="updateData(this)">Update</button>'; 
    
    document.getElementById("name").value = "";
}

function removeData(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateData(button) {
    var row = button.parentNode.parentNode;
    var newValue = prompt("Enter new value:"); 
    if (newValue !== null) { 
        row.cells[0].innerHTML = newValue; 
    }
}
