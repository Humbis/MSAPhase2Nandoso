document.addEventListener("DOMContentLoaded", function () {
    loadSpecials();
});

function loadSpecials() {

    SpecialsModule.getSpecials(getSpecialsTable);
}

function getSpecialsTable(specialsList) {
    var specialsTable = document.getElementById("specialsList");
    var d = new Date;
    for (i = 0; i < specialsList.length; i++) {
        if (d.getDay() == specialsList[i].specialDate) {

            var row = document.createElement("tr"); //make a row

            var name = document.createElement("td"); //make a data entrie
            name.innerHTML = specialsList[i].name;   //set it to the name in the list of specials
            row.appendChild(name);                   //put it into the row

            var price = document.createElement("td");
            price.innerHTML = specialsList[i].price;
            row.appendChild(price);

            var description = document.createElement("td");
            description.innerHTML = specialsList[i].description;
            row.appendChild(description);

            specialsTable.appendChild(row);                  //put row into the table
        }
    }
}