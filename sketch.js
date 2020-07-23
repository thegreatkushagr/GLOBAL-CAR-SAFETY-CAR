const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var ball;

var box;

var wall;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundoptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,groundoptions);
  
 
  World.add(world, ground);

  console.log(ground);
  
  var ballopt = {
    restitution: 1
  }
  ball = Bodies.circle(200,70,20,ballopt);
  World.add(world, ball);
  
  var boxoptions = {
    restitution: 0
  }
  box = Bodies.rectangle(230,350,50,50,boxoptions);
  World.add(world,box);

  var walloptions = {
    restitution: 0
  }
  wall = Bodies.rectangle(100,200,20,380,walloptions);
  World.add(world,wall);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  rectMode(CENTER);
  rect(box.position.x, box.position.y,50,50);

  rectMode(CENTER);
  rect(wall.position.x, wall.position.y,20,380);
}