//Get request parameters from url with start by #
function getParameterByName(name) {
	console.log(window.location);
    var match = RegExp('[?#&]' + name + '=([^&]*)').exec(window.location);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
