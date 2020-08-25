
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
bob1 = new Bob(75, 300, 50, 50);
bob2 = new Bob(125, 300, 50, 50);
bob3 = new Bob(175, 300, 50, 50);
bob4 = new Bob(225, 300, 50, 50);
bob5 = new Bob(275, 300, 50, 50);

roof = new Roof(190, 80, 300, 30)

rope1= new rope(bob1.body, roof.body, 50, 80);
rope2= new rope(bob2.body, roof.body, 100, 80);
rope3= new rope(bob3.body, roof.body, 150, 80);
rope4= new rope(bob4.body, roof.body , 200, 80);
rope5= new rope(bob5.body, roof.body, 250, 80);
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
  drawSprites();
 
}




