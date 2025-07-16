let ball;
let box;

function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  // Basic shape testing
  // write your codes here
  ball = new Sprite;
  ball.x = 100
  ball.y = 200
  ball.diameter = 40;
  ball.color = "lime";
  ball.stroke = "orange";
  ball.strokeWeight = 10;

  box = new Sprite;
  box.x = 100;
  box.y = 100;
  box.w = 80;
  box.h = 40;
  box.color = "yellow"
  box.stroke = "cyan"
  box.strokeWeight = 10;
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here
  draw()
}

function draw() {
  // fill("green");
  // stroke("orange");
  // strokeWeight(10);

  // circle(30,30,50);
  // rect(50,50,100,200);
  // rect(150,250,50,50);
}