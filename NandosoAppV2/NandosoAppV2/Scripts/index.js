document.addEventListener("DOMContentLoaded", function () {
    loadSpecials();
});

function loadSpecials() {

    SpecialsModule.getSpecials(getSpecialsTable);
}

function getSpecialsTable(specialsList) {
    var specialsTable = document.getElementById("specialsList");

    for (i = 0; i < specialsList.length; i++) {
        var row = document.createElement("tr"); //make a row

        var name = document.createElement("td"); //make a data entrie
        name.innerHTML = specialsList[i].LastName;   //set it to the name in the list of students
        row.appendChild(name);                   //slap it into the row

        var price = document.createElement("td");
        price.innerHTML = specialsList[i].FirstMidName;
        row.appendChild(price);

        var description = document.createElement("td");
        description.innerHTML = specialsList[i].EnrollmentDate;
        row.appendChild(description);

        specialsTable.appendChild(row);                  //slap row into the table
    }
}