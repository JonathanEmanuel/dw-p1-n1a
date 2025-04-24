var posX = 200;
var posY = 100;
var d = 200;

function setup() {
  createCanvas(400, 400);
}
// loop
function draw() {
  background(220);
  // Dibujamos un circulo
  strokeWeight(4);
  stroke("orange");
  fill('yellow');
  circle(posX, posY, d);

  stroke('gray');
  strokeWeight(1);
  fill('white');
  //      x ,  Y,  D
  circle(160, 70, 50);
  //    X    Y    W    H   r 
  rect(150, 130, 100, 50, 50);
}