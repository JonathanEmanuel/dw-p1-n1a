let posX = 30;
let posY = 100;
let d = 50;
let velX = 4;
let velY = 2;
function setup() {
  createCanvas(400, 400);
  //posX = random(30, 255);
  //posY = random(30, 200);
}

function draw() {
  background(220);
  //  x1, y1   x2, y2
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  
  posY = posY + velY;
  posX = posX + velX;

  textSize(26);
  let texto = posX + "; " + posY;
  text("💫" + texto, 250, 50);
  circle(posX, posY, d);
  //                   OR  ||
  if (posX > (width - 25) || posX < 25) {
    velX = velX * -1;
  }

  if( posY > height -25 || posY < 25){
    velY = velY * -1;
  }

  // Si             AND Y
  if (posX < (width/2)   &&  posY < (height/2)) {
      fill("slateblue");
  }
  if(posX < (width/2)   &&  posY > (height/2)){
    fill("yellow")
  }
  if(posX > width/2  && posY < height/2 ){
    fill("blue");
  }
  if(posX > width/2  && posY > height/2 ){
    fill("tomato");
  }
}
