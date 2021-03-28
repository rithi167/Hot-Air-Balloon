var balloon, balloonImg;
var background1, backgroundImg;

function preload(){
backgroundImg = loadImage("background.png");
balloonImg = loadImage("balloon.png")
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  database = firebase.database();

  //balloon = Bodies.circle(50,200,20);
  //World.add(world, balloon);
  balloon = createSprite(250,250,10,10);
  balloon.addImage(balloonImg);
  balloon.scale= 0.3;
}

function draw() {
  background(backgroundImg);  
   
  balloon.display();

  //imageMode(CENTER);
  //image(balloonImg, balloon.position.x,balloon.position.y,210,200);

    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x-10
    }
    else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x+10
    }
    else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y-10
    }
    else if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y+10
    }
    drawSprites();
}

