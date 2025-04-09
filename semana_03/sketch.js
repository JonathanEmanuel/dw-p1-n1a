function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke('red');
  //  posX1 posY2  posX2  posY2
  line(50,  100,   200,  100);
  line(200, 100,   200,  250);
  line(200, 250, 50, 250);
  line(50, 250, 50, 100);
  fill('red');
  // Circulo
  //    posX, posY, d
  circle(200, 200, 50);
  fill('white')
  stroke('black')
  // Elipse
  //     posX, posY, W, h
  ellipse(200, 50, 50, 80);
  stroke('slateblue')
  fill('slateblue')
  // Cuadrado
  // posX, posY, W
  rect(250, 100, 70);
  
  fill('yellow')
  stroke('yellow')
  //   posX, posY, w, h   ,r
  rect(150, 300, 150, 25, 20)
}
