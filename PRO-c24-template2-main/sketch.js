const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = Bodies.circle(150,200,25);
    World.add(world,ball);
    iron = new Iron(700,450,20,20);
    stone = new Stone(600,300,20,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    rubber = new Rubber(56,46,55,55)
    ellipseMode();
    ellipse(ball.position.x,ball.position.y,50,50);
    fill("red");

    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
 
}