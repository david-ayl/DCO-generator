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
var gradient      = require("./modules/gradient.js");


$(document).ready(function() {

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
    $(this).toggleClass("active");
    drawPath();
    setState();
    setCampaign(window.state);
    gradient("#DCO_wrapper");
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
