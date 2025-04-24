let posX = 30;
let posY = 200;
let d = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("teal");
  textSize(26)
  text("📌" + posX, 300, 50)
  circle(posX, posY, d);

  posX = posX + 1;

  if ( posX > width){
    posX = 0

  }
}