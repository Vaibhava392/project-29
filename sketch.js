const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    block1 = new Block(380,370,30,30)
    block2 = new Block(410,370,30,30)
    block3 = new Block(440,370,30,30)
    block4 = new Block(470,370,30,30)
    block5 = new Block(500,370,30,30)
    block6 = new Block(530,370,30,30)
    block7 = new Block(560,370,30,30)
    block8 = new Block(395,340,30,30)
    block9 = new Block(425,340,30,30)
    block10 = new Block(455,340,30,30)
    block11 = new Block(485,340,30,30)
    block12 = new Block(515,340,30,30)
    block13 = new Block(545,340,30,30)
    block14 = new Block(410,310,30,30)
    block15 = new Block(440,310,30,30)
    block16 = new Block(470,310,30,30)
    block17 = new Block(500,310,30,30)
    block18 = new Block(530,310,30,30)
    block19 = new Block(425,280,30,30)
    block20 = new Block(455,280,30,30)
    block21 = new Block(485,280,30,30)
    block22 = new Block(515,280,30,30)
    block23 = new Block(440,250,30,30)
    block24 = new Block(470,250,30,30)
    block25 = new Block(500,250,30,30)
    block26 = new Block(455,220,30,30)
    block27 = new Block(485,220,30,30)
    polygon = new Polygon(100,150,10);
    slingshot = new SlingShot(polygon.body,{x:150, y:180});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(1); 
    ground.display();
    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    detectCollision(polygon,block1);
    detectCollision(polygon,block2);
    detectCollision(polygon,block3);
    detectCollision(polygon,block4);
    detectCollision(polygon,block5);
    detectCollision(polygon,block6);
    detectCollision(polygon,block7);
    detectCollision(polygon,block8);
    detectCollision(polygon,block9);
    detectCollision(polygon,block10);
    detectCollision(polygon,block11);
    detectCollision(polygon,block12);
    detectCollision(polygon,block13);
    detectCollision(polygon,block14);
    detectCollision(polygon,block15);
    detectCollision(polygon,block16);
    detectCollision(polygon,block17);
    detectCollision(polygon,block18);
    detectCollision(polygon,block19);
    detectCollision(polygon,block20);
    detectCollision(polygon,block21);
    detectCollision(polygon,block22);
    detectCollision(polygon,block23);
    detectCollision(polygon,block24);
    detectCollision(polygon,block25);
    detectCollision(polygon,block26);
    detectCollision(polygon,block27);
    slingshot.display();   
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<= Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}