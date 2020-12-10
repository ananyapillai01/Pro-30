
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
    polygonImg = loadImage("polygon.png");
}

function setup()
{
    createCanvas(1300, 600);

    engine = Engine.create();
    world = engine.world;

   
  
    polygon = Bodies.circle(50, 200, 20);
    
    World.add(world, polygon);
   

     ground1 = new Ground(700, 580, 1300, 20);


     platform1 = new Ground(390,300,250,10);
    
        block1 = new Box(300,275,30,40);
    console.log(block1);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);
    
    platform2 = new Ground(900, 235, 250, 10);

    //level one
    block17 = new Box(910, 195, 30, 40);
    block18 = new Box(940, 195, 30, 40);
    block19 = new Box(980, 195, 30, 40);
    block20 = new Box(1010, 195, 30, 40);
    block21 = new Box(1040, 195, 30, 40);

    //level two
    block22 = new Box(940, 155, 30, 40);
    block23 = new Box(980, 155, 30, 40);
    block24 = new Box(1010, 155, 30, 40);
    
    //top
    block25 = new Box(980, 115, 30, 40);

     sling1 = new SlingShot(this.polygon, {x:100, y: 200});

    Engine.run(engine);
}
function draw()
{
    rectMode(CENTER);
    background(255);

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    
    ground1.display();
    platform1.display();
    platform2.display();

    fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("pink");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();

  fill("grey");
  block25.display();

  sling1.display();

    mouseReleased();

    drawSprites();
}
function keyPressed()
{
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x:100, y:200})
        sling1.attach(polygon.body);
    }
}
function mouseReleased()
{
    slingShot.fly();
}