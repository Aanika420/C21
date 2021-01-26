var mr,fr,one,two;
function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor="green";
  mr.debug = true;

  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor="green";
  fr.debug = true;
  
  one = createSprite(700, 100, 50, 50);
  one.shapeColor="green";
  one.debug = true;
  one.velocityX = -3;

  two = createSprite(100, 100, 50, 50);
  two.shapeColor="green";
  two.debug = true;
  two.velocityX = 3;
}

function draw() {
  background(0); 
  mr.x = World.mouseX; 
  mr.y = World.mouseY;
if(isTouching(mr,two)){
  mr.shapeColor = "red";
  two.shapeColor = "red";
}
else{
  mr.shapeColor = "green";
  two.shapeColor = "green";
}
bounceOff(one,two)
  
  drawSprites();
}

