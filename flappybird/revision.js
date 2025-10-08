function preload() {
    backgroundImg = loadImage('assets/background-day.png');
    birdImg = loadImage('assets/yellowbird-midflap.png');
}

function setup() {
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 50);
    bird.img = birdImg;

    bg = new Sprite(0, 0, 800, 1200);
    bg.img = backgroundImg;


}

function draw() {

}