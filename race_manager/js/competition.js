function reloadCompetitions() {
FB.api(
  'me/objects/fredagsmys_wadpam:competition',
  'get',
  function(response) {
    // handle the response
    console.log(response);
    $("#competitions").html('');
    response.data.forEach(function(item, index) {
        $("#competitions").append('<tr><td><a onclick="loadCompetition(\'' + item.id + '\')">' +
            item.title + '</a></td></tr>');
    })

  }
);
}

function loadCompetition(id) {
    $('#main_div').load('competition.html',
    {
        fields: 'id, title, place:location'
    },
    function() {
        // load the competition object
        FB.api(
          '/' + id,
          'get',
          function(response) {
            console.log(response);
            $('#comp_id').html(response.id);
            $('#comp_title').val(response.title);
            $('#a_sub2').html(response.title);

            $('#navbar_home').removeClass('active');
            $('#navbar_sub2').addClass('active');
            $('#navbar_sub3').removeClass('active');
            $('#navbar_sub3').removeClass('active');
          }
        );

        // load events
        FB.api(
          'me/objects/fredagsmys_wadpam:event',
          'get',
          {

          },
          function(response) {
            // handle the response
          }
        );
    });
}

function saveCompetition(id) {
    FB.api(
      0 == id.length ? 'me/objects/fredagsmys_wadpam:competition' : id,
      'post',
      {'object': {
        'og:url': 'https://graph.facebook.com/v2.5/' + id,
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
