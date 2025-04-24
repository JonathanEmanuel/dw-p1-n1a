var posX = 25;
var posY = 200;
var d = 50;
var velX = 5;
var vueltas = 0;

function setup() {
    createCanvas(500, 400);

}
// loop
function draw() {
  background(220);
  line(width/2, 0, width/2, height);

 

  fill("slateblue");
  circle(posX, posY, d);

  posX = posX + velX ;

  if( posX > 400){ // Si
    posX = 25;
    vueltas = vueltas + 1;
  console.log(vueltas);

  }
  //console.log("PosX: ", posX);

}
