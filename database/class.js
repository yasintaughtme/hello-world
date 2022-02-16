class ENTITY {
  constructor() {
    let xRand = random(-0.5, 0.5);
    let yRand = random(-0.5, 0.5);

    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(xRand, yRand);
    this.acc = createVector(0, 0);

    this.rad = 50;

    this.a = 0;
    this.aVel = 0;
    this.aAcc = 0;
  }

  force(force) {
    let f = force;
    this.acc.add(f);
  }

  motion() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.aAcc += this.acc.y / 10;
    this.aAcc -= this.acc.x / 10;
    this.aVel -= this.aAcc;
    this.aVel = constrain(this.aVel, -0.005, 0.005);
    this.a -= this.aVel;

    this.acc.set(0, 0);
  }

  param() {
    switch(true) {
      case this.pos.x > width || this.pos.x < 0:
        this.vel.x *= -1;
        break;
      case this.pos.y > height || this.pos.y < 0:
        this.vel.y *= -1;
        break;
      default:
        null;
        break;
    }
  }
 
  build() {
    push();
      translate(this.pos.x - this.rad/2, this.pos.y - this.rad/2);
      rotate(this.a);
      image(greet, 0, 0, this.rad, this.rad);
    pop();
  }
}