function preload() {
    backgroundImg = loadImage('assets/background-day.png');
    birdImg = loadImage('assets/yellowbird-midflap.png');
}

function setup() {
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 50);
    bird.img = birdImg;
}