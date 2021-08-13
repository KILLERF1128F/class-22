const Engine  = Matter.Engine;
const World  = Matter.World;
const Bodies  = Matter.Bodies;

var engine , world 
var ground , ball

function setup() {
  createCanvas(800,400);

  engine= Engine.create();

world=engine.world;

var groundoptions = {isStatic :true};
ground=Bodies.rectangle(400,380,400,20,groundoptions); 

World.add(world,ground);


var balloptions = {restitution : 1};
ball=Bodies.circle(400,100,30,balloptions);

World.add(world,ball)
console.log(ground);


}

function draw() {
  background(0);  

Engine.update(engine);

fill("gold");
rectMode(CENTER);

rect(ground.position.x,ground.position.y,400,20);

fill("red")
ellipse(ball.position.x,ball.position.y,30,30);






 
}