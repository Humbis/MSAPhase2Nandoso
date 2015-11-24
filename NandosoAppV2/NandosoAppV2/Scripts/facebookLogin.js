// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app to see the premium specials';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook to see premium specials';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
    location.reload();
}

window.fbAsyncInit = function () {
    FB.init({
        //******************************************************************************//
        appId: '174988242850133',
        //*****************************************************************************//
        cookie: true,  // enable cookies to allow the server to access 
    // the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.2' // use version 2.2
});

// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
});
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
            var loggedIn;
            FB.getLoginStatus(function (response) {
                if (response.status == 'connected') {
                    loggedIn = 1;
                } else {
                    loggedIn = 0;
                }
            });
            console.log(loggedIn);
            if (loggedIn == 1 || specialsList[i].isPremium == 0) {
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
}
};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);

        // This line adds text to the div tag with the id of 'status'
        // to show the user they're currently logged in.
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}