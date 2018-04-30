function log(a) {
  console.log(a);
}

function rand(sup) {
  return Math.floor(Math.random()*sup);
}

function byid(s) {
  return document.getElementById(s);
}

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

canvas = byid("mon_canvas");
cx = canvas.getContext('2d');

function init() {
  
  cx.fillStyle = "yellow";
  cx.beginPath();
  var rad = 5;
  var randX = rand(canvas.width);
  var randY = rand(canvas.height);
  cx.arc(randX, randY, rad, 0, 2*Math.PI, true);
    cx.closePath();
  cx.fill();

  repeat(50, function () {
    cx.fillStyle = "green";
    cx.beginPath();
    var rad = 2;
    var randX = rand(canvas.width);
    var randY = rand(canvas.height);
    cx.arc(randX, randY, rad, 0, 2*Math.PI, true);
    cx.closePath();
    cx.fill();
  });
  
  cx.save();
  cx.translate(10, 10);
  repeat(canvas.height-10, function (y) {
    cx.fillStyle = "blue";
    cx.beginPath();
    cx.arc(10, y, 10, 0, 2*Math.PI, true);
    cx.closePath();
    cx.fill();
    var x = 0
    //while(x++ <10000000) {}
    //cx.restore();
  });

  log("end");
  //cx.fillStyle = "rgb(255,0,0)";
}

log("started");
init();