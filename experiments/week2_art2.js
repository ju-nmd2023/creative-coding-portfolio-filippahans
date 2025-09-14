let dots = [];
const numDots = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  noLoop();

  for (let i = 0; i < numDots; i++) {
    dots.push({
      position: createVector(random(width), random(height)),
      size: random(5, 20),
    });
  }
}

function draw() {
  noStroke();
  fill(0);

  for (let dot of dots) {
    ellipse(dot.position.x, dot.position.y, dot.size);
    ellipse(width - dot.position.x, dot.position.y, dot.size);
    ellipse(dot.position.x, height - dot.position.y, dot.size);
    ellipse(width - dot.position.x, height - dot.position.y, dot.size);
  }
}
