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
        tbody.append('<tr><td>' + item.title +
            '</td><td><a href="competition.html#comp_id=' + item.id + '">' +
            item.id + '</a></td></tr>');
    });

  }
);
}

function loadCompetition(id) {
FB.api(
  '/' + id,
  'get',
  function(response) {
    console.log(response.title);
    $('#comp_id').html(response.id);
    $('#comp_title').val(response.title);
  }
);
}

function saveCompetition(id) {
    FB.api(
      0 == id.length ? 'me/objects/fredagsmys_wadpam:competition' : id,
      'post',
      {'object': {
        'og:url': 'http://samples.ogp.me/1520768124920750',
        'og:title': $('#comp_title').val(),
        'og:type': 'fredagsmys_wadpam:competition',
        'og:image': 'https://fbstatic-a.akamaihd.net/images/devsite/attachment_blank.png',
        'og:description': '',
        'fb:app_id': '1520767301587499',
        'place:location:latitude': '55.2030',
        'place:location:longitude': '15.6070'
      }},

     function(response) {
        console.log(response);
        $('#comp_id').html(response.id);
      }
    );
}
