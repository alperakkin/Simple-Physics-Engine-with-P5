let ball;
let floor;



function setup() {
  createCanvas(600, 400);
  let ballPos = createVector(100,100); 
  let ballMass = 200;
  let ballColor = createVector(100,200,100);
  let ballDim = createVector(40,40)
  let ballFriction = 1.01;
  let ballElasticity = 2;
  ball = new Ball(ballPos,ballDim, ballMass, ballColor, ballFriction, ballElasticity );
  
  let floorPos = createVector(0,height-20); 
  let floorMass = 200;
  let floorColor = createVector(200,200,100);
  let floorDim = createVector(600,20);
  let floorFriction = 1.20;
  let floorElasticity = 1;
  floor = new Floor(floorPos,floorDim, floorMass, floorColor, floorFriction,floorElasticity);
  
  
 
}

function draw() {
  background(220);
  ball.update();
  floor.update();
  ball.checkCollision(floor);
 
}
