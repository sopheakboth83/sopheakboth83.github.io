function saveEvent(competitionId) {
FB.api(
  'me/fredagsmys_wadpam:participate',
  'post',
  {
    'competition': '"https://graph.facebook.com/v2.5/' + competitionId + '"'
  },

 function(response) {
   console.log(response);
  }
);}