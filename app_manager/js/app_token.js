function getAppToken(clientId, clientSecret) {
FB.api(
  '/oauth/access_token?client_id=' + clientId + '&client_secret=' + clientSecret + '&grant_type=client_credentials',
  'get',
  function(response) {
    // handle the response
    console.log('app_token: ' + response);
  }
);

}