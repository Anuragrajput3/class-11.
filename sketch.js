var ship,ship1;
var sea,sea1;

function preload(){
  ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1=loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,500);
  background("blue");

  // create the sea
  sea=createSprite(600,300);
  sea.addAnimation("running",ship1);
  sea.scale=0.5;
  seavelocityX=-1;

  // creating ship
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges= createsprites();

  // adding scale and possition to ship
  ship.scale=0.25;
  ship.x=90;
  ship.y=300;
}

function draw() {
  background("blue");
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  //sea.velocityX = -3;
  //sea.velocityX = 3;
  

  
    
  drawSprites();
}
