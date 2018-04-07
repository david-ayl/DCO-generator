var $ = require("jquery");


function cooStart(elemStart, elemEnd, relativeParent) {

  var strokeWidth = 3,
      adjust = strokeWidth + strokeWidth / 2;

  var cooStart = {
    startX : (elemStart.offset().left - relativeParent.offset().left) + elemStart.width(),
    startY : ((elemStart.offset().top - relativeParent.offset().top) + (elemStart.height() / 2)) + adjust
  };

  var cooEnd = {
    startX : elemEnd.offset().left - relativeParent.offset().left,
    startY : ((elemEnd.offset().top - relativeParent.offset().top) + (elemEnd.height() / 2)) + adjust
  };

  var cooStep1 = {
    startX : cooStart.startX + ((cooEnd.startX - cooStart.startX) / 2),
    startY : cooStart.startY
  };

  var cooStep2 = {
    startX : cooStart.startX + ((cooEnd.startX - cooStart.startX) / 2),
    startY : cooEnd.startY
  };

  var line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  line.setAttribute("points", cooStart.startX + " " + cooStart.startY + " " + cooStep1.startX + " " + cooStep1.startY + " " + cooStep2.startX + " " + cooStep2.startY + " " + cooEnd.startX + " " + cooEnd.startY);
  line.setAttribute("stroke", "#000000");
  line.setAttribute("stroke-width", strokeWidth);
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("stroke-linejoin", "bevel");
  line.setAttribute("fill", "none");
  $("#svg_paths").append(line);

}


module.exports = cooStart;
