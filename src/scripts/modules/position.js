var $ = require("jquery");


function cooStart(elemStart, elemEnd, relativeParent) {

  console.log("top =", elemStart.offset().top - relativeParent.offset().top);
  console.log("left =", elemStart.offset().left - relativeParent.offset().left);

  var cooStart = {
    startX : elemStart.offset().left - relativeParent.offset().left,
    startY : elemStart.offset().top - relativeParent.offset().top
  };

  var cooStep = {
    startX : cooStart.startX + 11
  }

  var cooEnd = {
    startX : elemEnd.offset().left - relativeParent.offset().left,
    startY : elemEnd.offset().top - relativeParent.offset().top,
    cooEnd : elemEnd.offset().top - relativeParent.offset().top
  }

/*
  var cooStart = {
    startX : $(elemStart).position().left + $(elemStart).width() + 2,
    startY : $(elemStart).position().top + $(elemStart).height() + 2,
    endX : $(elemStart).position().left + $(elemStart).width() + 22
  };

  var cooStep = {
    startX : cooStart.startX + 11
  }

  var cooEnd = {
    startX : $(elemEnd).position().left + $(elemEnd).width() + 2,
    startY : $(elemEnd).position().top + $(elemEnd).height() + 2,
    endX : $(elemEnd).position().left + $(elemEnd).width() + 22
  }
*/
  var line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  line.setAttribute("points", cooStart.startX + " " + cooStart.startY + " " + cooStep.startX + " " + cooStart.startY + " " + cooStep.startX + " " + cooEnd.startY + " " + cooEnd.endX + " " + cooEnd.startY);
  line.setAttribute("stroke", "#199cb6");
  line.setAttribute("stroke-width", "3");
  line.setAttribute("stroke-linecap", "butt");
  line.setAttribute("stroke-linejoin", "miter");
  line.setAttribute("fill", "none");
  $("#svg_paths").append(line);

}


module.exports = cooStart;
