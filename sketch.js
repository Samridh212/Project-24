
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,dustbin2,dustbin3;	
var world;
var Crumbledpaper,ground;


function setup() {
	createCanvas(1300,500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new Dustbin(1165,450,180,20);
	dustbin2=new Dustbin(1065,410,20,100);
	dustbin3=new Dustbin(1250,410,20,100);
	Crumbledpaper=new paper(300,300,30);
	ground=new Ground(650,470,1300,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  Crumbledpaper.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(Crumbledpaper.body,Crumbledpaper.body.position,{x:45,y:-45});
    
  	}
}





