var selectedRow = null      //missing object

$(document).ready(function() {
$("#music").addClass("animated shake");
});

function onFormSubmit() {     //When clicking the submit
    if (validate()) {
        var formData = readFormData(); 
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("trackName").value == "") {
        isValid = false;
        document.getElementById("trackNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("trackNameValidationError").classList.contains("hide"))
            document.getElementById("trackNameValidationError").classList.add("hide");
    }
    return isValid;
}






function readFormData() {
    var formData = {};
    formData["trackName"] = document.getElementById("trackName").value;
    formData["artist"] = document.getElementById("artist").value;
    formData["rating"] = document.getElementById("rating").value;
    formData["listeners"] = document.getElementById("listeners").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("playList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.trackName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.artist;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.rating;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.listeners;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("trackName").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("listeners").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("trackName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("artist").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[2].innerHTML;
    document.getElementById("listeners").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.trackName;
    selectedRow.cells[1].innerHTML = formData.artist;
    selectedRow.cells[2].innerHTML = formData.rating;
    selectedRow.cells[3].innerHTML = formData.listeners;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("playList").deleteRow(row.rowIndex);
        resetForm();
    }
}
