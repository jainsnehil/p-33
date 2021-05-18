const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bg
var snoww=[];

function preload(){
  bg=loadImage("snow1.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(800,400);
  
  for(var i=0;i<=200;i++){
    snoww.push(new Snow(random(100,700),i))
  }
  
  
}

function draw() {
  background(bg);  


 if(frameCount%20===0){
for(var i=0;i<snoww.length;i++){
    snoww[i].display();
  }
 }
 
 
 // drawSprites();
}

 
