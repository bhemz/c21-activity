var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,250,50,50);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityX = 4;
  gameObject2 = createSprite(50,250,50,150);
  gameObject2.shapeColor = "Orange";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(500,250,50,150);
  gameObject4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}


  if(isTouching(gameObject1, gameObject4)){
    textSize(40);
    fill("yellow");
    text("It's Touching", 500,500);
  }

  if(isTouching(gameObject1, gameObject2)){
    textSize(40);
    fill("yellow");
    text("It's Touching", 500,500);
  }

  bounceoff(gameObject1,gameObject4);
  collide(gameObject1, gameObject2);
  drawSprites();
}

