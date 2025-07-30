let ball;
let box;

function setup() {
  // Set up the canvas
  new Canvas(800, 400);

  world.gravity.y = 10

  ball = new Sprite;
  ball.x = 100
  ball.y = 200
  ball.diameter = 40;
  ball.color = "lime";
  ball.stroke = "orange";
  ball.strokeWeight = 10;
  ball.vel.x = 3;
  ball.vel.y = 3;
  ball.bounciness = 1;
  ball.collider = "dynamic";

  box = new Sprite;
  box.x = 100;
  box.y = 100;
  box.w = 80;
  box.h = 40;
  box.color = "yellow"
  box.stroke = "cyan"
  box.strokeWeight = 10;
  box.collider = "dynamic";
  box.bounciness = 0;

   // Create a bouncing ball sprite
   // write your codes here
}

function draw() {
  background(250);
  // fill("green");
  // stroke("orange");
  // strokeWeight(10);

  // circle(30,30,50);
  // rect(50,50,100,200);
  // rect(150,250,50,50);

  fill(255, 100, 0);
  textSize(12);
  text("Ball: (" + int(ball.x) + "," + int(ball.y) + ")", 10, 20);
  text("Mouse: (" + mouseX + "," + mouseY + ")", 10, 40);

  if(ball.x < 0 + ball.diameter / 2 || ball.x > 800 - ball.diameter / 2) {
    ball.vel.x *= -1
  }

  if(ball.y < 0 + ball.diameter / 2 || ball.y > 400 - ball.diameter / 2) {
    ball.vel.y *= -1
  }

  box.x = mouseX;
  box.y = mouseY;

  if(mouse.presses('left')) {
    let x = new Sprite (mouseX, mouseY, 30, 30);
    x.collider = "dynamic";
  }

    if(mouse.presses('right')) {
    let x = new Sprite (mouseX, mouseY, 30, 30);
    x.collider = "static";
  }
}