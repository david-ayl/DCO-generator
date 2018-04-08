var $ = require("jquery");


var gradient = function(target) {

  var randColor = function() {
    var c1 = Math.floor(Math.random() * 255);
    var c2 = Math.floor(Math.random() * 255);
    var c3 = Math.floor(Math.random() * 255);

    return c1 + ", " + c2 + ", " + c3;
  }

  $(target)
  .css({
    background: "-webkit-gradient(linear, left top, right top, from(rgb(" + randColor + ")), to(rgb(" + randColor() + ")))"
  })
  .css({
     background: "-moz-linear-gradient(left, rgb(" + randColor() + ") 0%, rgb(" + randColor + ") 100%)"
   });

};

module.exports = gradient;
