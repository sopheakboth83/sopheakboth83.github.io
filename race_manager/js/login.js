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
  $('#navbar_login').addClass('active');
  $('#login').attr('onclick','');
  $('#main_div').load('login.html');
}

function displayUser() {
    $('#navbar_login').removeClass('active');
    $('#navbar_home').addClass('active');
    $('#navbar_sub2').removeClass('active');
    FB.api('/me', function(response) {
      $('#login').html(response.name);
      $('#login').attr('onclick','FB.logout()');
      loadHome();
    });
}

function loadHome() {
    $('#main_div').load('home.html', {}, reloadCompetitions);
}