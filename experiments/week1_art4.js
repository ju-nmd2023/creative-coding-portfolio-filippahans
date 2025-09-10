const size = 100;
const amount = 24;
const gap = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  noLoop();
}

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}

function drawSquare(x, y, s) {
  const variance = s / 2;
  beginShape();
  vertex(
    getRandomValue(x - s / 2, variance),
    getRandomValue(y - s / 2, variance)
  );
  vertex(
    getRandomValue(x + s / 2, variance),
    getRandomValue(y - s / 2, variance)
  );
  vertex(
    getRandomValue(x + s / 2, variance),
    getRandomValue(y + s / 2, variance)
  );
  vertex(
    getRandomValue(x - s / 2, variance),
    getRandomValue(y + s / 2, variance)
  );
  endShape(CLOSE);
}

function draw() {
  background(250, 218, 221);
  stroke(219, 21, 20);
  strokeWeight(1.5);
  noFill();

  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      drawSquare(x, y, size);
      x += size + gap;
    }
    y += size + gap;
  }
}
