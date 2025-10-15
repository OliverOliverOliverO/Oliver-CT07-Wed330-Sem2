function preload() {
    backgroundImg = loadImage('assets/background-day.png');
    birdImg = loadImage('assets/yellowbird-midflap.png');
}

function setup() {
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 50);
    bird.img = birdImg;
    bird.layer = 1;

    bg = new Sprite(200, 300, 400, 600);
    bg.img = backgroundImg;
    bg.layer = 0;

}

function draw() {
    bird.vel.y += 1
}