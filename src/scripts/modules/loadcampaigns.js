var $ = require("jquery");
var datas = require("./datas.js")
var elemanim = require("./elemanim.js");


var loadCampaigns = function(state) {

  var advertiser = datas[state.campaign];

  var image_path = state.user + "-" + state.time + "-" + state.weather;

  var text_key = state.user + "-" + state.time + "-" + state.weather + "-" + state.geolocation;

  $("#campaign").on("click", function() {
    window.open(advertiser.redirect);
  });

  elemanim($("#data-image"), advertiser.images[image_path], 0);

  elemanim($("#data-logo"), advertiser.logo, 100);

  elemanim($("#data-name"), advertiser.name, 200);

  elemanim($("#data-domain"), advertiser.hostname, 300);

  elemanim($("#data-title"), advertiser.wording.title[text_key], 400);

  elemanim($("#data-description"), advertiser.wording.description[text_key], 500);

}

module.exports = loadCampaigns;
