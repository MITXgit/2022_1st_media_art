function setup() {
  createCanvas(800, 600);
  textSize(100);
  background(100);
}

function draw() {
  background(100);
  text(sum(mouseX, mouseY), width/2, height/2);
  
}

function sum(x, y){
  let num = x + y;
  return num;
}
