function obtainAppToken(clientId, clientSecret) {
//FB.api(
//  '/oauth/access_token?client_id=' + clientId + '&client_secret=' + clientSecret + '&grant_type=client_credentials',
//  'get',
//  function(response) {
//    // handle the response
//    console.log('app_token:');
//    console.log(response);
//  }
//);

$.getJSON('https://graph.facebook.com/v2.5/oauth/access_token', {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type:'client_credentials'
})
.done(function(json) {
    $('#app_token').text(json.access_token);
});
}

function getAppToken() {
    return $('#app_token').text();
}