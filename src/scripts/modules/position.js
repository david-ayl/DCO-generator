var $ = require("jquery");


function coo(elem) {

  var sx = $(elem).position().left + $(elem).width(),
      sy = $(elem).position().top + ($(elem).height() / 2),
      ex = $(elem).position().left;
  var coo = {
    startX : sx,
    startY : sy,
    endX : ex,
    endY : sy
  };

  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", coo.startX);
  line.setAttribute("x2", coo.startY);
  line.setAttribute("y1", coo.endX);
  line.setAttribute("y2", coo.endY);
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linecap", "butt");
  line.setAttribute("stroke-linejoin", "miter");
  $("#svg_paths").append(line);

}


module.exports = coo;
