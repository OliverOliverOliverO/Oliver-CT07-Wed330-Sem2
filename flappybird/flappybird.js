// the final game

let bird , floor;
let bg, base, flapMidImg;
let bird2;
let pipeGroup;
let pipe;
let topPipe, bottomPipe;
let gameoverLabel;
let startscreenLabel;
let startGame = false;
//load the images before game starts
function preload(){
  bg = loadImage('assets/background-day.png');
  base = loadImage('assets/base.png');

  flapMidImg = loadImage('assets/yellowbird-midflap.png');
  flapUpImg = loadImage('assets/yellowbird-upflap.png');
  flapDownImg = loadImage('assets/yellowbird-downflap.png');

  pipeImg = loadImage('assets/pipe-green.png');

  gameoverImg = loadImage('assets/gameover.png');
  startScreenImg = loadImage('assets/message.png');
}

function setup(){
//to create a new Canvas
 new Canvas(400,600);
 bird = new Sprite();
 bird.x =  width/2;
 bird.y = 200;
 bird.width = 30;
 bird.height = 30;
 bird.img = flapMidImg;

 //bird physics
 bird.collider ='dynamic';
 bird.mass =2;
 bird.drag = 0.02;
 bird.bounciness = 0.5;
 world.gravity.y = 10;
 
 floor = new Sprite();
 floor.x = 200;
 floor.y = height -20;
 floor.width = 400;
 floor.height = 125;
 floor.collider = 'static';
 floor.img = base;

 pipeGroup = new Group();

 startScreenLabel = new Sprite(width/2,height/2,50,50,'none');
 startScreenLabel.img = startScreenImg;

}

function draw(){
  image(bg,0,0,width,height); // draw the bg


  if (kb.presses('space') || mouse.presses('left')){
    startGame = true
  }

  if(kb.presses('space') || mouse.presses('left')){
    bird.vel.y = -5;
    bird.sleeping = false;
  }


  if(bird.vel.y < -1) {
    bird.img = flapUpImg;
    bird.rotation = -30;
  } else if (bird.vel.y > 1) {
    bird.img = flapDownImg;
    bird.rotation = 30;
  } else {
    bird.img = flapMidImg;
    bird.rotation = 0;
  }

  bird.x += 3;
  camera.x = bird.x;
  floor.x = bird.x;

  if(frameCount % 90 === 60) {
    spawnPipePair();
  }

  for (let pipe of pipeGroup) {
    if(pipe.x < -50){
        pipe.remove();
    }
  }


  if (bird.collides(pipeGroup) || bird.collides(floor) || bird.y <= 15) {
    gameoverLabel = new Sprite(width/2,height/2,192,42);
    gameoverLabel.img = gameoverImg;
    gameoverLabel.layer = 100;
    gameoverLabel.x = camera.x;
    noLoop();
  }

}

function spawnPipePair() {
  let gap = 50;
  let midY = random(75, 375);

  topPipe = new Sprite(400 + bird.x, midY - gap / 2 - 200, 52, 320, 'kinematic');
  topPipe.img = pipeImg;
  topPipe.rotation = 180;
  
  bottomPipe = new Sprite(400 + bird.x, midY + gap / 2 + 200, 52, 320, 'kinematic');
  bottomPipe.img = pipeImg;

  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);

  pipeGroup.layer = 0;
}
