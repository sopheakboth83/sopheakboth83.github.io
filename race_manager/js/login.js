function getGujaUrl() {
        if (-1 < window.location.href.indexOf('localhost')) {
            return 'http://localhost:8080/';
        }
        else {
            return 'https://ta-tram.appspot.com/';
        }
}

// Only works after `FB.init` is called
function myFacebookLogin() {
  FB.login(updateStatusCallback, {scope: 'publish_actions'});
}


// This is called with the results from from FB.getLoginStatus().
function updateStatusCallback(response) {
    if (response.status === 'connected') {
        gujaSignin(response.authResponse);
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

function gujaSignin(authResponse) {
    $.getJSON(getGujaUrl() + 'oauth/federated', {
        providerId: 'facebook',
        providerUserId: authResponse.userID,
        access_token: authResponse.accessToken,
        expires_in: authResponse.expiresIn
    })
    .done(function(data) {
        console.log(data)
    });
}

function displayLogin() {
  $('#navbar_login').addClass('active');
  $('#navbar_home').removeClass('active');
  $('#login').attr('onclick','myFacebookLogin()');
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