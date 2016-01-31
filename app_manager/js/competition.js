function loadCompetition(id) {
FB.api(
  '/' + id,
  'get',
  {
    access_token: getAppToken()
  },
  function(response) {
    console.log(response.title);
    $('#comp_id').html(response.id);
    $('#comp_title').val(response.title);
  }
);
}
