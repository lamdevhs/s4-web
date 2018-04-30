function log(a) {
  console.log(a);
}

function rand(sup) {
  return Math.floor(Math.random()*sup);
}

function byid(s) {
  return document.getElementById(s);
}

function repeat(start, end, f) {
  for (var i = start; i < end; i++) {
    f(i);
  }
}

function eachOf(array, f){
  len = array.length;
  for (var i = 0; i < len; i++) {
    f(array[i], i);
  }
}


function fillPath(cx, filling, positions){
  cx.beginPath();
  cx.fillStyle = filling;
  eachOf(positions, function (pos, ix){
    if (ix === 0) {
      cx.moveTo(pos[0], pos[1])
    }
    if (ix !== 0) {
      cx.lineTo(pos[0], pos[1])
    }
  })
  //cx.closePath();
  cx.fill();
}

function strokePath(cx, style, positions){
  cx.beginPath();
  cx.strokeStyle = style;
  eachOf(positions, function (pos, ix){
    if (ix === 0) {
      cx.moveTo(pos[0], pos[1])
    }
    if (ix !== 0) {
      cx.lineTo(pos[0], pos[1])
    }
  })
  //cx.closePath();
  cx.stroke();
}

function waveline(cx, color, radius, x, y, maxwidth) {
  cx.lineWidth = 5;
  cx.strokeStyle = color;
  while (x < maxwidth) {
    cx.beginPath();
    cx.arc(x, y, radius, 0, Math.PI, false);
    cx.stroke();
    x += radius*2;
  }
}


window.addEventListener("load", function (e) {
  log("started");

  canvas = byid("mon_canvas");
  cx = canvas.getContext('2d');
  if (!cx) {
    alert("Error");
    return;
  }

  // mast
  cx.lineWidth = 10;
  strokePath(cx, "sienna", [[140, 50], [140, 250]]);
  // cx.beginPath();
  // cx.lineWidth = 10;
  // cx.strokeStyle = "sienna";
  // cx.moveTo(140, 50);
  // cx.lineTo(140, 250);
  // cx.closePath();
  // cx.stroke();

  // sail
  fillPath(cx, "lightblue", [[150,80], [300,230], [150,230]]);

  // hull
  strokePath(cx, "#A0522D",
    [[300,250], [250,300],
    [100,300], [50,250]]);
  cx.fillStyle = "#CD853F";
  cx.fill();

  cx.fillStyle = "lightblue";
  cx.shadowOffsetX = 1;
  cx.shadowOffsetY = 2;
  cx.shadowBlur = 3;
  cx.shadowColor = "#eee";
  cx.font = "50px Times New Roman";
  cx.fillText("Bateau sur l'eau", 200, 50);

  var degrade = cx.createRadialGradient(45,45,10,  50, 50, 40);
  degrade.addColorStop(0, "#FFFF00");
  degrade.addColorStop(1, "#FFBB00");
  cx.fillStyle = degrade;

  cx.beginPath();
  cx.arc(50, 50, 40, 0, Math.PI*2, true);
  cx.fill();

  var cpt = 0
  var upOrDown = true;
  setInterval(function (){
    // waves
    var k = cpt % 20;
    if (k == 0) {
      upOrDown = !upOrDown;
    }
    if (upOrDown) {
      var y1 = k; var y2 = 20 - k;
    }
    else {
      var y1 = 20 - k; var y2 = k;
    }
    cx.clearRect(0, 305, canvas.width, canvas.height);
    waveline(cx, "#00bfff", 50, 0, 305 + y1, canvas.width);
    waveline(cx, "#1e90ff", 50, 50, 305 + y2, canvas.width);
    cpt++;
  }, 50);

  log("end");
  //cx.fillStyle = "rgb(255,0,0)";
});

fofofo = byid("mon_canvas").getContext("2d");