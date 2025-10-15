// let bgImg;
// let birdImg;
// let bird;
// let bg;

// function preload() {
//     bgImg = loadImage('assets/background-day.png');
//     birdImg = loadImage('assets/yellowbird-midflap.png');
// }

// function setup() {
//     new Canvas(400, 600);
//     world.gravity.y = 10;
//     bird = new Sprite(200, 300, 30, 30, 'dynamic');
//     bird.img = birdImg;
//     bird.layer = 1;

//     bg = new Sprite(200, 300, width, height, 'none');
//     bg.img = bgImg
//     bg.layer = 0;

// }

// function draw() {
//     if(mouse.presses('left')) {
//         bird.vel.y = -5;
//     }
// }

function preload() {

}

function setup() {
    new Canvas(400, 600);
    world.gravity.y = 1;

    ball = new Sprite(200, 300, 30);
    ball.collider = 'dynamic';
}

function draw() {
    background(220);
}