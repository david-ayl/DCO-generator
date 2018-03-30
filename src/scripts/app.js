var $             = require("jquery");
var loader        = require("./modules/loader.js");
var elemanim      = require("./modules/elemanim.js");
var anime         = require("animejs");
var datas         = require("./modules/datas.js");
var _             = require("lodash");
var setState      = require("./modules/state.js");
var setCampaign   = require("./modules/loadcampaigns.js");

$(document).ready(function() {


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

  var toggleWrapper = function() {



  };


  $(document).on("click", ".toggle_containers", function() {

console.log("in");
    $(".section_wrapper").each(function() {
      if($(this).hasClass("section_hidden")) {
        $(this).removeClass("section_hidden").addClass("section_display");
      }
      else {
        $(this).removeClass("section_display").addClass("section_hidden");
      }
    });

  });


});
