let dots = [];
const numDots = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);

  for (let i = 0; i < numDots; i++) {
    dots.push({
      position: createVector(random(width), random(height)),
      velocity: createVector(random(-3, 3), random(-3, 3)),
      size: random(1, 1),
    });
  }
}

function draw() {
  noStroke();

  for (let dot of dots) {
    fill(0, 0, 0);
    ellipse(dot.position.x, dot.position.y, dot.size);
    ellipse(width - dot.position.x, dot.position.y, dot.size);
    ellipse(dot.position.x, height - dot.position.y, dot.size);
    ellipse(width - dot.position.x, height - dot.position.y, dot.size);

    dot.position.add(dot.velocity);

    if (dot.position.x > width || dot.position.x < 0) dot.velocity.x *= -1;
    if (dot.position.y > height || dot.position.y < 0) dot.velocity.y *= -1;

    dot.velocity.mult(0.98);
  }
}
