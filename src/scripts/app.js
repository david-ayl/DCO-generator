var $             = require("jquery");
var loader        = require("./modules/loader.js");
var elemanim      = require("./modules/elemanim.js");
var anime         = require("animejs");
var datas         = require("./modules/datas.js");
var _             = require("lodash");
var setState      = require("./modules/state.js");
var setCampaign   = require("./modules/loadcampaigns.js");
var jscrollify    = require("jquery-scrollify");
var position      = require("./modules/position.js");


$(document).ready(function() {

  console.log(position($("#DCO_wrapper > div.campaign_wrapper.right_content > div.params_wrapper > div.filters_wrapper > div:nth-child(1) > div > div:nth-child(2)")));

  console.log($("#DCO_wrapper > div.campaign_wrapper.right_content > div.params_wrapper > div.filters_wrapper > div:nth-child(1) > div > div:nth-child(2)"), $("#DCO_wrapper > div.campaign_wrapper.right_content > div.params_wrapper > div.filters_wrapper > div:nth-child(1) > div > div:nth-child(2)").position());

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

  $(".param_item:first-of-type").addClass("active");

  setState();
  setCampaign(window.state);
  $(document).on("click", ".param_item", function() {
    if(!$(this).hasClass("active")) {
      $(this).closest(".param_item_wrapper").find(".active").removeClass("active");
    }
    else{
      return;
    }
    $(this).toggleClass("active");
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
