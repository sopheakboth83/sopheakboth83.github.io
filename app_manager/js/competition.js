function loadCompetition(id) {
FB.api(
  '/' + id,
  'get',
  {
    access_token: getAppToken()
  },
  function(response) {
    console.log(response);
    $('#comp_id').val(response.id);
    $('#comp_title').val(response.title);
  }
);
}
