function setup() {
  createCanvas(400, 400);
}
// loop
function draw() {
  background(220, 2);
  // Genera número ramdom(min, max)
  let posX = random(400);
  let posY = random(400);
  let d = random(40);

  // RGB
  let red = random(1, 255);
  let green = 100;
  let blue = random(255);
  fill(red, green, blue);
  noStroke();

  //     posX  posY  d
  rect(posX, posY, d);

}
