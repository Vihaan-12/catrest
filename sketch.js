var car;
var wall;
var speed;
var weight;

function setup (){
  createCanvas(800,800);

  car = createSprite(100,400,50,50);

  wall = createSprite(700,400,50,100);
  wall.shapeColor = color("white");

  speed = random(55,90);
  weight = random(400,1500);
}

function draw (){
  background(0,0,0);


  car.velocityX = speed;
  car.weight = weight;

if(car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < wall.width/2 + car.width/2
  && car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2){
car.velocityX=0;

var deformation=0.5 * weight * speed * speed/22500;

if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
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

  

  drawSprites();
}