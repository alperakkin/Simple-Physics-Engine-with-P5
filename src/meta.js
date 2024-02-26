class Ball extends Engine {
  constructor(pos, dimensions, mass, color, friction, elasticity){
    let shape = 'circle';
    let force = true;
    super(pos, dimensions, mass, color, shape, force, friction,elasticity);
  }
  
}

class Floor extends Engine {
  constructor(pos, dimensions, mass, color, friction, elasticity){
    let shape = 'rect';
    let force = false;
    super(pos, dimensions, mass, color, shape, force, friction, elasticity);
  }
  
}
