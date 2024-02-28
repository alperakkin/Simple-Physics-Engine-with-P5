let ball;
let floor;


let button;
let resetObject;

let ballElasticity;
let floorElasticity;

let ballLabel;
let floorLabel;

let ballValue;
let floorValue;

let gOption;

let gravity = {
  Sun: 274,
  Mercury: 3.69,
  Venus: 8.87,
  Earth: 9.81,
  Moon: 1.62,
  Mars: 3.71,
  Jupiter: 24.72,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptun: 11.15,
  Pluto: 0.61
}

function setup() {
  createCanvas(800, 600);
  let button = createButton('Start');
  button.position(300, 10);

  let resetObject = createButton('Reset');
  resetObject.position(350, 10);

  ballElasticity = createSlider(0, 100);
  ballElasticity.position(200, 10);
  ballElasticity.size(80);

  floorElasticity = createSlider(0, 100);
  floorElasticity.position(200, 30);
  floorElasticity.size(80);

  gOption = createRadio();
  gOption.position(700, 20);

  gOption.style('display', 'flex');
  gOption.style('flex-direction', 'column');

  gLabel = createDiv(`Gravity`);
  gLabel.position(700, 5);


  Object.keys(gravity).forEach(item => gOption.option(item));
  gOption.selected("Earth")



  ballElasticityValue = map(ballElasticity.value(), 0, 100, 1, 2).toFixed(2);
  floorElasticityValue = map(floorElasticity.value(), 0, 100, 1, 2).toFixed(2);
  ballLabel = createDiv(`Ball Elasticity: ${ballElasticityValue}`);
  ballLabel.position(5, 10);

  floorLabel = createDiv(`Floor Elasticity: ${floorElasticityValue}`);
  floorLabel.position(5, 30);



  let ballPos = createVector(100, 100);

  let ballColor = createVector(100, 200, 100);
  let ballDim = createVector(40, 40)
  let ballFriction = 1.01;
  let ballMass = 200;

  ball = new Ball(ballPos, ballDim, ballMass, ballColor, ballFriction, ballElasticity);

  let floorPos = createVector(0, height - 20);
  let floorMass = 200;
  let floorColor = createVector(200, 200, 100);
  let floorDim = createVector(width, 20);
  let floorFriction = 1.20;

  floor = new Floor(floorPos, floorDim, floorMass, floorColor, floorFriction, floorElasticity);

  button.mousePressed(() => {
    ball.animate();
  });

  resetObject.mousePressed(() => {
    ball.reset();
  });


}



function draw() {
  ballElasticityValue = map(ballElasticity.value(), 0, 100, 1, 2).toFixed(2);
  floorElasticityValue = map(floorElasticity.value(), 0, 100, 1, 2).toFixed(2);
  ballLabel.html(`Ball Elasticity: ${ballElasticityValue}`);
  floorLabel.html(`Floor Elasticity: ${floorElasticityValue}`);
  ball.setGravity(gravity[gOption.value()])
  background(220);
  ball.update();
  floor.update();
  ball.checkCollision(floor);


}
