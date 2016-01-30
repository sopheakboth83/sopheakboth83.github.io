function reloadCompetitions() {
FB.api(
  'me/objects/fredagsmys_wadpam:competition',
  'get',
  function(response) {
    // handle the response
    console.log(response);
    $('#competitions').innerHTML = '';
    response.data.forEach(function(index, item) {
        console.log(item);
    });

  }
);
}

function createCompetition() {
    FB.api(
      'me/objects/fredagsmys_wadpam:competition',
      'post',
      {'object': {
        'og:url': 'http://samples.ogp.me/1520768124920750',
        'og:title': 'Sample Competition',
        'og:type': 'fredagsmys_wadpam:competition',
        'og:image': 'https://fbstatic-a.akamaihd.net/images/devsite/attachment_blank.png',
        'og:description': '',
        'fb:app_id': '1520767301587499',
        'place:location:latitude': '55.2030',
        'place:location:longitude': '15.6070'
      }},

     function(response) {
        reloadCompetitions();
      }
    );
}
