// the final game

let bird , floor;
let bg, base, flapMidImg;
let pipeGroup;
let pipe;
let topPipe, bottomPipe;
let gameoverLabel;
let startscreenLabel;
let startGame = false;
let score = 0;
let numberImages = [];
let scoreDigits;

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



  for(let i=0; i<10; i++) {
    numberImages[i] = loadImage('assets/' + i + '.png');
  }

}

function setup(){
//to create a new Canvas
 new Canvas(400,600);
 bird = new Sprite();
 bird.visible = false;
 bird.x =  width/2;
 bird.y = 348;
 bird.width = 30;
 bird.height = 30;
 bird.img = flapMidImg;

 //bird physics
 bird.collider ='dynamic';
 bird.mass =2;
 bird.drag = 0.02;
 bird.bounciness = 0.5;
 
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

 scoreDigits = new Group();
 scoreDigits.collider = "none";
 scoreDigits.layer = 1001;

}

function draw(){
  image(bg,0,0,width,height); // draw the bg


  if (kb.presses('space') || mouse.presses('left')){
    startGame = true;
    startScreenLabel.visible = false;
    world.gravity.y = 10;
    bird.visible = true;
  }
  
  if (startGame) {

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
      score++;
    }

    for (let pipe of pipeGroup) {
      if(pipe.x < -50){
          pipe.remove();
      }
    }


    if (bird.collides(pipeGroup) || bird.collides(floor) || bird.y <= 15) {
      gameoverLabel = new Sprite(width/2,height/2-50,192,42,"static");
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100;
      gameoverLabel.x = camera.x;
      bird.collider = "static"
      noLoop();
    }
  }
  drawScore(width/2,20,score,24,36)

}

function spawnPipePair() {
  let gap = 50;
  let midY = random(150, 375);

  topPipe = new Sprite(400 + bird.x, midY - gap / 2 - 200, 52, 320, 'kinematic');
  topPipe.img = pipeImg;
  topPipe.rotation = 180;
  
  bottomPipe = new Sprite(400 + bird.x, midY + gap / 2 + 200, 52, 320, 'kinematic');
  bottomPipe.img = pipeImg;

  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);

  pipeGroup.layer = 0;
}

function drawScore(x,y,score,digitWidth,digitHeight) {
  scoreDigits.removeAll();
  let scoreStr = str(score);
  let totalWidth = scoreStr.length * digitWidth;
  let startX = x - totalWidth / 2 + camera.x - width/2 + 24/2;

  for(let i=0; i<scoreStr.length; i++) {
    let digit = int(scoreStr[i]);
    let xPos = startX + i * digitWidth;
    let digitSprite = new scoreDigits.Sprite(xPos,y,digitWidth,digitHeight);
    digitSprite.img = numberImages[digit];
  }
}