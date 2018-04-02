var $ = require("jquery");
var datas = require("./datas.js")
var elemanim = require("./elemanim.js");


var loadCampaigns = function(state) {


  console.log(state);

  var advertiser = datas[state.campaign];

  var image_path = state.user + "-" + state.time + "-" + state.weather;

  var text_key = state.user + "-" + state.time + "-" + state.weather + "-" + state.geolocation;

  $("#campaign").on("click", function() {
    window.open(advertiser.redirect);
  });

  var delay = 0;

  if($("#data-image").attr("src") !== advertiser.images[image_path]) {
    elemanim($("#data-image"), advertiser.images[image_path], delay);
    delay += 100;
  }

  if($("#data-logo").attr("src") !== advertiser.logo) {
    elemanim($("#data-logo"), advertiser.logo, delay);
    delay += 100;
  }

  if($("#data-name").text() !== advertiser.name) {
    elemanim($("#data-name"), advertiser.name, delay);
    delay += 100;
  }

  if($("#data-domain").text() !== advertiser.hostname) {
    elemanim($("#data-domain"), advertiser.hostname, delay);
    delay += 100;
  }

  if($("#data-title").text() !== advertiser.wording.title[text_key]) {
    elemanim($("#data-title"), advertiser.wording.title[text_key], delay);
    delay += 100;
  }

  if($("#data-description").text() !== advertiser.wording.description[text_key]) {
    elemanim($("#data-description"), advertiser.wording.description[text_key], delay);
    delay += 100;
  }

}

module.exports = loadCampaigns;
