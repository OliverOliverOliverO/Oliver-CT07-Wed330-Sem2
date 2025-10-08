// write your codes here
let dojoBG;
let fruitGroup;
let fruitTypes = [];

function preload() {
    dojoBG = loadImage('assets/dojobackground.png');

    let peach = {
        whole: loadImage('assets/peachwhole.png')
    }

    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png')
    }

    fruitTypes = [peach, watermelon];
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;

    fruitGroup = new Group;
}

function draw() {
    image(dojoBG,0,0,width,height);

    if (frameCount % 60 === 30) {
        spawnFruit();
    }
    if(mouse.pressing()) {
        trail = new Sprite(mouse.x, mouse.y, 8);
        trail.collider = "none";
        trail.life = 10

        splitFruit();
    }
}

function spawnFruit() {
    let fruitData = random(fruitTypes);
    let spawnX = random(100, width - 100)

    let fruit = new fruitGroup.Sprite(spawnX, height+20, 40)
    fruit.img = fruitData.whole;
    fruit.type = fruitData;
    fruit.vel.x = (height/2 - spawnX)/75;
    fruit.vel.y = random(-10, -14);
    fruit.friction = 0;
}

function splitFruit() {
    for(let fruit of fruitGroup) {
        if(fruit.sliced) {
            continue;
        }

        let d = dist(mouse.x, mouse.y, fruit.x, fruit.y);

        if(d < fruit.d/2+5) {
            fruit.sliced = true
        }
    }
}