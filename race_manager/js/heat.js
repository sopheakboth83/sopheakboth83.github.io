function reloadHeats(eventId) {
    if ('' != eventId) {
        console.log('reloadHeats for ' + eventId);
        $.getJSON(getGujaUrl() + 'api/events/' + eventId + '/heats')
        .done(function(data) {
    //        console.log(data);
            $('#createHeatButton').removeAttr('disabled');
            data.items.forEach(function(item, index) {
                $("#heats").append('<tr><td onclick="loadHeat(' + eventId + ',' + item.id + ')">' +
                    item.title + '</td></tr>');
            });
        })
        .fail(function() {
        });
    }
    else {
        $('#createHeatButton').attr('disabled','disabled');
    }
}

function loadHeat(competitionId, id) {
    $('#main_div').load('event.html', {}, reloadHeats(id));

    $.getJSON(getGujaUrl() + 'api/events/' + id)
    .done(function(response) {
        console.log(response.title);
        $('#event_id').html(response.id);
        $('#event_title').val(response.title);
    });
}

function saveHeat(competitionId) {
    var createUrl = getGujaUrl() + 'api/events' + (0 == id.length ? '' : '/' + id);
    var body = '{"title":"' + $('#comp_title').val() + '","competitionId":' + competitionId + '}';
    $.ajax(createUrl,{
        method: 'POST',
        contentType: 'application/json',
        crossDomain: true,
        data: body,
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        $('#comp_id').html(data.id);
    });
}