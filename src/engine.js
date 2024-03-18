class Engine {
  constructor(
    pos, dimensions,
    mass, color,
    shape, force,
    friction, elasticity
  ) {

    this.default = createVector(pos.copy().x, pos.copy().y);
    this.pos = pos;
    this.shape = shape;
    this.dimensions = dimensions;
    this.mass = mass;
    this.scale = 100;
    this.color = color;
    this.force = force;
    this.elasticity = elasticity;
    this.g = 9.81 / this.scale;
    this.velocity = createVector(0, 0);
    this.friction = friction;
    this.collided = false;
    this.animation = false;



  }

  setGravity(gValue) {
    this.g = gValue / this.scale;
  }

  applyWind(f) {
    this.velocity.x = this.velocity.x + f / this.scale;
  }

  animate() {
    this.animation = true;

  }

  reset() {
    this.pos.x = this.default.x;
    this.pos.y = this.default.y;
    this.animation = false;
    this.collided = false;

  }
  applyForce(amplitude) {
    this.velocity.y = this.velocity.y + amplitude;

  }

  checkCollision(other) {
    let metaHeight = (this.pos.y + this.dimensions.y / 2) - (other.pos.y);

    if (metaHeight > 0) {

      if (this.collided == false) {

        let counterForce = -1 *
          this.velocity.y *
          map(this.elasticity.value(), 0, 100, 1, 2) *
          map(other.elasticity.value(), 0, 100, 1, 2) /
          (this.friction * other.friction);

        this.collided = true;
        this.applyForce(counterForce);

        if (Math.abs(this.velocity.y) <= 0.15) {
          this.velocity.y = 0;


        }
      }


    }
    else if (metaHeight <= 0) {
      this.collided = false;

    }

  }

  drawShape() {
    fill(this.color.x, this.color.y, this.color.z);
    window[this.shape](
      this.pos.x,
      this.pos.y,
      this.dimensions.x,
      this.dimensions.y
    );
  }

  update() {
    this.drawShape();
    if (!this.animation) return;


    if (this.force && !this.collided) {
      // Apply G Force
      this.applyForce(this.g);
    }

    this.pos.x = this.pos.x + this.velocity.x;
    this.pos.y = this.pos.y + this.velocity.y;




  }
}
