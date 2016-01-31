// Only works after `FB.init` is called
function myFacebookLogin() {
  FB.login(updateStatusCallback, {scope: 'publish_actions'});
}


// This is called with the results from from FB.getLoginStatus().
function updateStatusCallback(response) {
    if (response.status === 'connected') {
        displayUser();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        displayLogin();
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
        displayLogin();
    }
}

function displayLogin() {
FB.api('/me', function(response) {
  $('#navbar-login').addClass('active');
  $('#login').attr('onclick','');
});
$('#main_div').load('home.html', {}, reloadCompetitions);
}

function displayUser() {
FB.api('/me', function(response) {
  $('#login').html(response.name);
  $('#login').attr('onclick','');
});
$('#main_div').load('home.html', {}, reloadCompetitions);
}

