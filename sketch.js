var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
var inv1, inv2, inv3, inv4;
var gameState = "START";
var basket1, basket2;
var scoreimg, score;
var points1 = 0;
var points2 = 0;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/walluigi.png");
 circle2img = loadImage("images/mario.png");
 circle3img = loadImage("images/KD.png");
 circle4img = loadImage("images/wario.png");
 ballimg = loadImage("images/Basketball.png");
 scoreimg = loadImage("images/score.png");
}
function setup() {
  createCanvas(1000, 1000);
    myteam = createGroup();
    opponentteam = createGroup();
    circle1 = createSprite(500, 200, 10, 10);
    circle1.addImage("circle1", circle1img);
    circle1.scale = 0.1;
    opponentteam.add(circle1);
    circle3 = createSprite(500, 750, 10, 10);
    circle3.addImage("circle3", circle4img);
    circle3.scale = 0.1;
    myteam.add(circle3);
    ball = createSprite(500, 500, 10, 10);
    ball.addImage("ball", ballimg);
    ball.scale = 0.1;
    inv1 = createSprite(990, 500, 10, 1000);
    inv1.shapeColor = "blue";
    inv1.visible = false;
    inv2 = createSprite(10, 500, 10, 1000);
    inv2.shapeColor = "yellow";
    inv2.visible = false;
    inv3 = createSprite(500, 990, 1000, 9);
    inv3.shapeColor = "green";
    inv3.visible = false; 
    inv4 = createSprite(500, 10, 1000, 9);
    inv4.shapeColor = "red";
    inv4.visible = false;
    basket1 = createSprite(500, 950, 10, 30);
    basket1.shapeColor = "red";
    basket1.visible = false;
    basket2 = createSprite(500, 50, 10, 30);
    basket2.shapeColor = "blue";
    basket2.visible = false;
    score = createSprite(500, 500, 10, 10);
    score.addImage("score", scoreimg);
    score.scale = 0.1;
    score.visible = false;
}
function draw() {
  if(gameState === "START"){
    background(courtimg);
    fill("black");
    strokeWeight(1);
    textSize(20)
    text("touch anywhere or press space to start", 500, 400);
    if(touches.lenght > 10 || keyDown("space") && gameState ==="START"){
      gameState = "PLAY";
    }
    hidden();
  }
    if(gameState === "PLAY"){
      background(courtimg);
      seen();
      if(keyDown("up")){
        circle3.y-=10;
      }
      if(keyDown("down")){
        circle3.y+=10;
      }
      if(keyDown("right")){
        circle3.x+=10;
      }
      if(keyDown("left")){
        circle3.x-=10;
      }
      if(keyDown("w")){
        circle1.y-=10;
      }
      if(keyDown("s")){
        circle1.y+=10;
      }
      if(keyDown("d")){
        circle1.x+=10;
      }
      if(keyDown("a")){
        circle1.x-=10;
      }
    }
    if(ball.isTouching(inv1)||ball.isTouching(inv2)||ball.isTouching(inv3)||ball.isTouching(inv4)){
      ball.x = 500;
      ball.y = 500;
    }
    if(circle1.isTouching(inv1)){
      circle1.x = 100;
    }
    if(circle1.isTouching(inv2)){
      circle1.x = 900;
    }
    if(circle1.isTouching(inv3)){
      circle1.y = 100;
    }
    if(circle1.isTouching(inv4)){
      circle1.y = 900;
    }
    if(circle3.isTouching(inv1)){
      circle3.x = 100;
    }
    if(circle3.isTouching(inv2)){
      circle3.x = 900;
    }
    if(circle3.isTouching(inv3)){
      circle3.y = 100;
    }
    if(circle3.isTouching(inv4)){
      circle3.y = 900;
    }
    if(circle1.isTouching(basket2)){
      circle1.x = 500;
      circle1.y = 200;
    }
    if(circle3.isTouching(basket1)){
      circle3.x = 500;
      circle3.y = 750;
    }
    if(ball.isTouching(basket1)){
      points2+= 10;
      reset();
      gameState = "MIDPLAY";
    }
    if(ball.isTouching(basket2)){
      points1+= 10;
      reset();
      gameState = "MIDPLAY";
    }
    if(gameState === "MIDPLAY"){
      score.visible = true;
      fill("red");
      textSize(15);
      text("touch anywhere or press c to continue",600, 600);
      if(touches.length > 10 || keyDown("c")){
        gameState = "PLAY";
        score.visible = false;
      }
    }
    if(points2 === 50){
      gameState = "END";
      textSize(15);
      fill("purple");
      text("WALUIGI WON THE GAME", 400, 600);
    }
    if(points1 === 50){
      gameState = "END";
      textSize(15);
      fill("yellow");
      text("WARIO WON THE GAME", 400, 600);
    }
    if(gameState === "END"){
      hidden();
      textSize(15);
      fill("orange");
      text("touch anywhere or press r to restart", 500, 700);
      if(touches.length>10||keyDown("r")){
        textSize(15);
        gameState = "PLAY";
        points1 = 0;
        points2 = 0;
        reset();
      }
    }
      fill("red");
      textSize(20);
      text("Wario's points:" + points1, 800, 990);

      fill("purple");
      textSize(20);
      text("Waluigi's points: " + points2, 800, 29);
      ball.bounceOff(circle3);
      ball.bounceOff(circle1);
      drawSprites();
}
function hidden(){
  ball.visible = false;
  circle1.visible = false;
  circle3.visible = false;
}
function seen(){
  ball.visible = true;
  circle1.visible = true;
  circle3.visible = true;
}
function reset(){
  score.visible = false;
  ball.x = 500;
  ball.y = 500;
  circle1.x = 500;
  circle1.y = 200;
  circle3.x = 500;
  circle3.y = 750;
}
function ballreset(){
  ball.x = 500;
  ball.y = 500;
}