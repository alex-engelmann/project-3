var startGoogle = function () {
    gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '106921362394-0opkp83gmfiuitpnpd0tankti11jhthf.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('signInBtn'));
    });
};

function attachSignin(element) {

    auth2.attachClickHandler(element, {},
        function () {
            $("#welcome").text("Hello " +
                auth2.currentUser.get().getBasicProfile().getGivenName() + "!");
            $("#gSignInWrapper").attr("class", "hide")
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}

function signOut() {

    if (auth2.isSignedIn.get()) {
        gapi.auth2.getAuthInstance().signOut().then(function () {
            // console.log('User signed out.');

            $("#welcome").text("Goodbye " +
                auth2.currentUser.get().getBasicProfile().getGivenName() + "!");
        });
    } else { alert("No user signed in") }

}

function getUserInfo() {

    if (auth2.isSignedIn.get()) {
        var profile = auth2.currentUser.get().getBasicProfile();
        // console.log('ID: ' + profile.getId());
        // console.log('Full Name: ' + profile.getName());
        // console.log('Given Name: ' + profile.getGivenName());
        // console.log('Family Name: ' + profile.getFamilyName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());

        //updates text fields
        $("#name").text("Name: " + profile.getName());
        $("#ID").text("ID: " + profile.getId());
        $("#email").text("email: " + profile.getEmail());
    }
    else {
        $("#name").text("No user signed in")
        $("#ID").text("No user signed in");
        $("#email").text("No user signed in");
    }
}