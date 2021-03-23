var fixedRect, movingRect;
var car, wall
var cat, mouse
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(300, 300, 50,30);
  wall=createSprite(600, 300,50,100);
  car.shapeColor="blue";
  wall.shapeColor="blue";
  car.velocityX=3;
  cat=createSprite(500,600,30,30);
  mouse=createSprite(100,600,10,10);
  cat.shapeColor="orange";
  mouse.shapeColor="grey"
  mouse.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car, wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
  car.velocityX=0;
 }
 else{
  car.shapeColor = "blue";
  wall.shapeColor = "blue";
 }
 bounceOff(cat, mouse);
  drawSprites();
}

