﻿var onLoginClick = 0;
document.addEventListener("DOMContentLoaded", function () {
    loadSpecials(0);
});

function loadSpecials(isPrem) {
    if (isPrem == 0) {
        onLoginClick = 0;
    } else {
        onLoginClick = 1;
    }
    SpecialsModule.getSpecials(getSpecialsTable);
}

function getSpecialsTable(specialsList) {
    var specialsTable = document.getElementById("specialsList");
    var d = new Date;
    for (i = 0; i < specialsList.length; i++) {
        if (d.getDay() == specialsList[i].specialDate) {
            var loggedIn;
            FB.getLoginStatus(function (response) {
                if (response.status == 'connected') {
                    loggedIn = 1;
                } else {
                    loggedIn = 0;
                }
            });
            console.log(loggedIn);
            if ((loggedIn == 1 || specialsList[i].isPremium == 0) && onLoginClick == 0) {
                var row = document.createElement("tr"); //make a row
                console.log("This is the default table generator");
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
            } else if (onLoginClick == 1 && specialsList[i].isPremium == 1) {
                var row = document.createElement("tr"); //make a row
                console.log("if dis shows it should be making normal specials")
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
}