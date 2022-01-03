let circle1,circle2;


function setup() {
  createCanvas(400, 400);
  circle1 = new Circle();
  circle2 = new Circle();
  
}

function draw() {
  background(28);
  circle1.move();
  circle1.show();
  circle2.move()
  circle2.show()

}
