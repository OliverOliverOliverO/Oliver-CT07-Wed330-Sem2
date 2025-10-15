let bgImg;
let birdImg;

function preload() {
    bgImg = loadImage('assets/background-day.png');
    birdImg = loadImage('assets/yellowbird-midflap.png');
}

function setup() {
    new Canvas(400, 600);
    world.gravity.y = 10;
    bird = new Sprite(200, 300, 30, 30, 'dynamic');
    bird.img = birdImg;
    bird.layer = 1;

    bg = new Sprite(200, 300, width, height, 'none');
    bg.img = bgImg

}

function draw() {
    if(mouse.presses('left')) {
        bird.vel.y = -5;
    }
}