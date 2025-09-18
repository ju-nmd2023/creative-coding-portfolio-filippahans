class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const angle = random(TWO_PI);
    const speed = random(0.5, 2);
    this.velocity = createVector(cos(angle) * speed, sin(angle) * speed);
    this.lifespan = int(random(80, 150));
    this.size = random(2, 6);
  }

  update() {
    this.lifespan--;
    this.velocity.mult(0.955);
    this.position.add(this.velocity);
  }

  draw() {
    noStroke();
    fill(0);
    ellipse(this.position.x, this.position.y, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
}

function draw() {
  background(255);

  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let y = random(height);
    particles.push(new Particle(x, y));
  }

  for (let p of particles) {
    p.update();
    p.draw();
  }

  particles = particles.filter((p) => !p.isDead());
}
