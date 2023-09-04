var NoseX =0;
var img= "";
var NoseY=0;
var marioX=325;
var marioY=325;

function setUp() {
    var canva=createCanvas(1240 , 340);
    canva.parent('canvas');
     instialize(mario);

     var video = createCapture(VIDEO);
     video.size(800,400)
     video.parent('gameConsole');

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose,gotPoses');
}

function preload() {
    img=loadImage("mario.jpeg");
    setSprites();
    marioAnimation();
    var world_start = loadSound("");
}

function draw() {
    game();
}

function modelLoaded(console, error) {
    console.log("modelo carregado");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	NoseX = results[0].pose.nose.x;
	NoseY = results[0].pose.nose.y;
  }
}

function game() {
  var gameStatus = "start";
}

function startGame() {
  document.getElementById("status").innerHTML = "loading game";
}

function changeGameStatus(character) {
  if (gameStatus == "start" && NoseX != "" && gameConfig.status == start) {
    world_start.play();
  }
}

function manualControl(character) {
  if (keyDown(control.left)) {
    character.velocity.x = gameConfig.moveSpeed;
    character.changeAnimation('move');
    character.mirror.x();
  }
}