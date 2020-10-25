var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500); 

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor = color("white");
  wall.depth = car.depth;
  car.depth += 1; 
}

function draw() {
  background("black");

  deformation = (0.5*weight*speed*speed)/22500;

  if(car.isTouching(wall)){
    car.velocityX = 0;
  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }
  if(deformation >= 100 && deformation <= 180){
    car.shapeColor = color(230,230,0);
  }
  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }
}

  drawSprites();
}