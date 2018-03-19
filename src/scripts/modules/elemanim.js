var anime = require("animejs");


var elemanim = function(elem, content, delay) {

  _elem = elem.attr("id");
  direction = elem.attr("data-direction")

  var modifElem = function(modif) {
    if(elem.attr("src")) {
      elem.attr("src", modif);
    }
    else{
      elem.text(modif);
    }
  }


  anime({
    targets     : "#" + _elem,
    delay       : 0,
    duration    : 200,
    translateX  : function() {
      if(direction == "right") {
        return 4000
      }
      else if(direction == "left") {
        return -4000
      }
      else {
        return 0
      }
    },
    translateY  : function() {
      if(direction == "top") {
        return -4000
      }
      else if(direction == "bottom") {
        return 4000
      }
      else {
        return 0
      }
    },
    delay       : delay,
    easing      : [.91,-0.54,.29,1.56],
    direction   : "alternate"
  });

  setTimeout(function() {
    modifElem(content);
  }, 500);


}

module.exports = elemanim;
