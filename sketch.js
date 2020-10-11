var monkey, ground, bananagroup,obstaclegroup, bananaimage;
var obstacleimage, backg, score, player_running, invisibleground, back, obstacle, banana, randomNumber;

function preload() {
  backImage = loadImage("jungle.jpg");
  player_running = 
    loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("stone.png");
}
function setup() {
  createCanvas(800, 400);
  
  backg = createSprite(0,0,800,400);
  backg.addImage("background", backImage);
  backg.scale = 1.5;
  backg.velocityX = -2;
  backg.x = backg.width/2;
  
  invisibleground = createSprite(200,320,400,10);
  invisibleground.visible = false;
  
  monkey = createSprite(40,240,20,20);
  monkey.addAnimation("monkey", player_running);
  monkey.scale = 0.1;
  
  score = 0;
  
  bananagroup = new Group();
  obstaclegroup = new Group();
}

function draw() {
  background(255);

 
  if (backg.x < 100){
    backg.x = backg.width/2;
  }
  switch(score){
    case 10: monkey.scale=0.12;
                break;
    case 20: monkey.scale=0.14;
                break;
    case 30: monkey.scale=0.16;
                break;
    case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  if(bananagroup.isTouching(monkey)){
      bananagroup.destroyEach();
    score = score + 2;
    }
  if(keyDown("space")&& monkey.y>=0) {
      monkey.velocityY = -10;
    }
  if(obstaclegroup.isTouching(monkey)){ 
      monkey.scale=0.1;
  }
  monkey.velocityY = monkey.velocityY + 1;
               
  food();
  obstacles();
  
  
  monkey.collide(invisibleground)
  drawSprites();
  
  stroke("white");
  textSize(20);
 fill("black");
 text("Score:"+ score,320,30);
}
function food() {
  if (frameCount%80===0) {
    var banana = createSprite(400,350,20,20);
    banana.y = random(100,200);
    banana.addImage("Banana", bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    banana.lifetime = 154;
    
    bananagroup.add(banana);
  }
}
function obstacles() {
  if (frameCount%300===0) {
    var obstacle = createSprite(800,280,10,40);
    obstacle.velocityX = -5;
    obstacle.addImage("Stone",obstacleimage);
    obstacle.scale = 0.25;
    obstacle.lifetime = 300;
    
    obstaclegroup.add(obstacle);
  }
}