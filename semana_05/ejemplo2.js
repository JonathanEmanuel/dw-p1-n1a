let posX = 30;
let posY = 200;
let d = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //  x1, y1   x2, y2
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);


  textSize(26)
  text("📌" + posX, 300, 50)
  circle(posX, posY, d);

  posX = posX + 1;

  if ( posX > width){
    posX = 0

  }
  // Si 
  if( posX > width/2){
    fill("blue");
  } else { // si no
    fill("slateblue");
  }
}