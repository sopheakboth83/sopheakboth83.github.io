function reloadCompetitions(tbody) {
FB.api(
  'app/objects/fredagsmys_wadpam:competition',
  'get',
  {
    access_token: getAppToken()
  },
  function(response) {
    // handle the response
    console.log(response);
    tbody.innerHTML = '';
    response.data.forEach(function(item, index) {
        console.log(item);
        tbody.append('<tr><td>' + item.title + '</td><td>' + item.id + '</td></tr>');
    });

  }
);
}
