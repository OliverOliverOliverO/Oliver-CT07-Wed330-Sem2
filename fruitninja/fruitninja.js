// write your codes here
let dojoBG;
let fruitGroup;
let fruitTypes = [];
let fruitHalves;
let score = 0;
let missedFruit = 0;
let gameState = 'start';
let gameStartTime;
let gameTimer;
let gameDuration = 60;
let lastFruitSpawn = 0;

function preload() {
    dojoBG = loadImage('assets/dojobackground.png');

    let peach = {
        whole: loadImage('assets/peachwhole.png'), 
        half: loadImage('assets/peachhalf2.png')
    }

    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png'), 
        half: loadImage('assets/watermelonhalf.png')
    }

    fruitTypes = [peach, watermelon];
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;

    fruitGroup = new Group;
    fruitHalves = new Group;
}

function draw() {
    clear();
    image(dojoBG,0,0,width,height);

    if((kb.presses(' ') || mouse.presses()) && (gameState === 'start')) {
        gameState = 'play';
        score = 0;
        missedFruit = 0;
        fruitGroup.removeAll()
        fruitHalves.removeAll()

        gameStartTime = millis();
        gameTimer = 0;
    }

    if(gameTimer >= gameDuration) {
        gameState = 'gameover';
        return;
    }


    if (gameState == 'gameover') {
        pass;
    }
    if(gameState === 'play') {

        if (millis()>lastFruitSpawn + (1000 - gameTimer*7.5)) {
            spawnFruit();
            lastFruitSpawn = millis();
        }
        if(mouse.pressing()) {
            trail = new Sprite(mouse.x, mouse.y, 8);
            trail.collider = "none";
            trail.life = 10

            sliceFruit();
        }

        stroke(45, 178, 96);
        fill(255);
        textSize(24);
        textAlign(LEFT, TOP);
        text('Score: ' + score, 10, 10)
        text('MissedFruits: ' + missedFruit, 200, 10)
        for(fruit of fruitGroup) {
            if(fruit.y > height+50) {
            missedFruit += 1
            fruit.remove();
            }
        }
    }
    if(gameState == 'start') {
        fill(0,180);
        rect(0,0,width,height);
        fill(255);
        textAlign(CENTER, CENTER)
        text('Fruit Ninja', width/2, height/2-40)
        textSize(24);
        text('Press space or click to start', width/2, height/2+20)

    }

    gameTimer = floor((millis() - gameStartTime) / 1000)

    text('Time: ' + (gameDuration - gameTimer), 400, 10)

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

function sliceFruit() {
    for(let fruit of fruitGroup) {
        if(fruit.sliced) {
            continue;
        }

        let d = dist(mouse.x, mouse.y, fruit.x, fruit.y);

        if(d < fruit.d/2+5) {
            fruit.sliced = true;
            
            let fx = fruit.x;
            let fy = fruit.y;
            score += 1
            fruit.remove();

            splitFruit(fx, fy, fruit.type)

            break;
        }
    }
}

function splitFruit(x, y, fruitData) {
    let left = new fruitHalves.Sprite(x-20, y, 40, 40)
    left.img = fruitData.half;
    left.vel.x = -3;
    left.vel.y = random(-5,-2);
    left.rotationSpeed = -5;
    left.life = 40;

    let right = new fruitHalves.Sprite(x+20, y, 40, 40)
    right.img = fruitData.half;
    right.vel.x = 3;
    right.vel.y = random(-5,-2);
    right.rotationSpeed = 5;
    right.life = 40;
}