//CREATING A CANVAS OBJECT
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
drawClock();

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  /*
  ctx.arc(0, 0, radius, 0, 2 * Math.PI); //.arc method is used to create curves or circles
  ctx.fillStyle = "White";
  ctx.fill(); //.fill method fills the current path & the default color is black
  */
}

// CREATING THE CLOCK FACE
function drawFace(ctx, radius) {
  var grad;

  //   THE ACTUAL WHITE CIRCLE FOR THE FACE
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();

  //   CREATING A RADIAL GRADIENT WHICH IS 95% OF THE ACTUAL RADIUS
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333"); //COLORSTOP IS USED TO CREATE A 3D EFFECT
  grad.addColorStop(0.5, "#fff"); //COLORSTOP IS USED TO CREATE A 3D EFFECT
  grad.addColorStop(1, "#333"); //COLORSTOP IS USED TO CREATE A 3D EFFECT
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawNumbers() {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}
