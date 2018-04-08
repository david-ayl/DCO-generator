var $             = require("jquery");
var loader        = require("./modules/loader.js");
var elemanim      = require("./modules/elemanim.js");
var anime         = require("animejs");
var datas         = require("./modules/datas.js");
var _             = require("lodash");
var setState      = require("./modules/state.js");
var setCampaign   = require("./modules/loadcampaigns.js");
var jscrollify    = require("jquery-scrollify");
var path          = require("./modules/path.js");
var Granim        = require("granim");

$(document).ready(function() {

  var colorsSet = ["#51baa2", "#199cb6", "#ee7444", "#77A6B6", "#fc7a57"];

  var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
      "default-state": {
        gradients: [
          ['#B3FFAB', '#12FFF7'],
          ['#ADD100', '#7B920A']
        ],
        transitionSpeed: 1000,
        loop: false
      },
      "violet-state": {
        gradients: [
          ['#9D50BB', '#6E48AA'],
          ['#4776E6', '#8E54E9']
        ],
        transitionSpeed: 1000,
        loop: false
      },
      "orange-state": {
        gradients: [
          ['#FF4E50', '#F9D423'],
          ["#199cb6", "#ee7444"]
        ],
        transitionSpeed: 1000,
        loop: false
      }
    }
  });

  var drawPath = function() {
    $("#svg_paths").empty();
    path($($(".filters_group")[0]).find(".active"), $($(".filters_group")[1]).find(".active"), $(".campaign_wrapper"));
    path($($(".filters_group")[1]).find(".active"), $($(".filters_group")[2]).find(".active"), $(".campaign_wrapper"));
    path($($(".filters_group")[2]).find(".active"), $($(".filters_group")[3]).find(".active"), $(".campaign_wrapper"));
    path($($(".filters_group")[3]).find(".active"), $("#wayout"), $(".campaign_wrapper"));
    path($("#wayout"), $("#wayin"), $(".campaign_wrapper"));
    path($("#wayin"), $("#wayinto"), $(".campaign_wrapper"));
  };

  setTimeout(function() {
    drawPath();
  }, 500);

  $(window).resize(function() {
    drawPath();
  });

  $(function() {
    $.scrollify({
      section : ".section_wrapper"
    });
  });


  if(window.location.href.indexOf("?dev") !== -1) {
    $("#main_loader").hide();
  }
  else{
    loader();
  }

  $("[data-filter]:first-of-type").addClass("active");

  setState();
  setCampaign(window.state);
  $(document).on("click", "[data-filter]", function() {
    if(!$(this).hasClass("active")) {
      $(this).closest("[data-entry]").find(".active").removeClass("active");
    }
    else{
      return;
    }
    granimInstance.changeState("violet-state");
    $(this).toggleClass("active");
    drawPath();
    setState();
    setCampaign(window.state);
  });


  $(document)
  .on("click", ".toggle_containers", function() {

    $(".section_wrapper").each(function() {
      if($(this).hasClass("section_hidden")) {
        $(this).removeClass("section_hidden").addClass("section_display");
      }
      else {
        $(this).removeClass("section_display").addClass("section_hidden");
      }
    });

  })
  .on("click", "#to_generator", function() {

    $.scrollify.move("#2");

  });

});
