function reloadCompetitions(tbody) {
FB.api(
  'me/objects/fredagsmys_wadpam:competition',
  'get',
  function(response) {
    // handle the response
    console.log(response);
    tbody.innerHTML = '';
    response.data.forEach(function(item, index) {
        console.log(item);
        tbody.append('<tr><td>' + item.title + '</td></tr>');
    });

  }
);
}

function createCompetition(tbody) {
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
        reloadCompetitions(tbody);
      }
    );
}
