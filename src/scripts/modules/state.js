var _ = require("lodash");
var $ = require("jquery");


var setState = function() {

  var   _camp     = $("[data-entry='campaign']").find(".active").attr("data-filter"),
        _geo      = $("[data-entry='Geolocation']").find(".active").attr("data-filter"),
        _weather  = $("[data-entry='Weather']").find(".active").attr("data-filter"),
        _time     = $("[data-entry='Time']").find(".active").attr("data-filter"),
        _user     = $("[data-entry='User-Profil']").find(".active").attr("data-filter");

  window.state = {
    "campaign" : _camp,
    "geolocation" : _geo,
    "weather" : _weather,
    "time" : _time,
    "user" : _user
  };

}

module.exports = setState;
