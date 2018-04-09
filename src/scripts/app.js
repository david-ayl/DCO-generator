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

  var randColorArrays = function() {
    var colorsSetleft = ["#51baa2", "#199cb6", "#77A6B6",  "#93FEF2", "#87E2B4"];
    var colorsSetRight = ["#FFD993", "#E2B1C4", "#E2A488", "#D09648", "#9FB500"];
    var arr = [];
    var col1 = colorsSetleft[Math.floor(Math.random()*colorsSetleft.length)];
    arr.push(col1);
    var col2 = colorsSetRight[Math.floor(Math.random()*colorsSetRight.length)];
    arr.push(col2);
    return arr;
  };

  var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
      "default-state": {
        gradients: [
          ['#51baa2', '#FFD993']
        ],
        transitionSpeed: 1000,
        loop: false
      },
      "state-1": {
        gradients: [
          ["#199cb6", '#6E48AA']
        ],
        transitionSpeed: 1000,
        loop: false
      },
      "state-2": {
        gradients: [
          ['#bada55', '#1a9dd7']
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
    if($(this).closest(".filters_wrapper").attr("data-colors") == "state-1") {

      $(this).closest(".filters_wrapper").attr("data-colors", "state-2");

      granimInstance.states["state-1"].gradients[0] = randColorArrays();

      granimInstance.changeState("state-1");

    }
    else {

      $(this).closest(".filters_wrapper").attr("data-colors", "state-1");

      granimInstance.states["state-2"].gradients[0] = randColorArrays();

      granimInstance.changeState("state-2");

    }
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
