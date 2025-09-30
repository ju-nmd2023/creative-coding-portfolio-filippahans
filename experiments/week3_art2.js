class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.lastPosition = this.position.copy();
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.lifespan = int(random(80, 150));
    this.size = random(3, 6);
    this.maxSpeed = 2;
    this.maxForce = 0.05;
  }

  follow(flow) {
    let desired = flow.copy();
    desired.setMag(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan--;
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }

  draw() {
    push();
    stroke(255, map(this.lifespan, 0, 150, 0, 255));
    strokeWeight(this.size / 2);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

const fieldSize = 50;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 4;
let field;
let particles = [];
let osc;
let lfo;

function generateField() {
  let f = [];
  noiseSeed(Math.random() * 100);
  for (let x = 0; x < maxCols; x++) {
    f.push([]);
    for (let y = 0; y < maxRows; y++) {
      const value = noise(x / divider, y / divider) * TWO_PI;
      f[x].push(p5.Vector.fromAngle(value));
    }
  }
  return f;
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  field = generateField();

  synth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 2, decay: 2, sustain: 0.5, release: 4 },
    volume: -20,
  }).toDestination();

  lfo = new Tone.LFO({
    type: "sine",
    min: 180,
    max: 300,
    frequency: 0.05,
  }).connect(synth.frequency);

  window.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttack("C4");
    lfo.start();
    console.log("Audio started!");
  });
}

function draw() {
  background(100, 10);

  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let y = random(height);
    particles.push(new Particle(x, y));
  }

  for (let p of particles) {
    const x = Math.floor(p.position.x / fieldSize);
    const y = Math.floor(p.position.y / fieldSize);

    if (x >= 0 && x < maxCols && y >= 0 && y < maxRows) {
      const flow = field[x][y];
      p.follow(flow);
    }

    p.update();
    p.checkBorders();
    p.draw();
  }

  particles = particles.filter((p) => !p.isDead());
}
