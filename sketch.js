var car,wall
var speed,weight

function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background("black");  
  car.velocityX=speed;

 
  drawSprites();
  if(wall.x-car.x < (car.widht*wall.widht)/2)
  {
    car.velocityX=0;
    var deformation=0.5* weight * speed * speed/22509;
    {
      car.shapeColor=coloe(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
}