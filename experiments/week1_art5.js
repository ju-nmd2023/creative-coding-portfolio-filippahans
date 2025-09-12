const size = 100;
const amount = 24;
const gap = 20;

let currentRow = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  frameRate(2);
}

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}
// fill effect with help from chatGPT https://chatgpt.com/share/68c3d604-8270-800f-8ce2-ad486f9be358
function drawSquare(x, y, s, fillColor) {
  const variance = s / 2;
  if (fillColor) {
    fill(fillColor);
  } else {
    noFill();
  }
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

  let startY = (height - size * amount - gap * (amount - 1)) / 2;

  for (let i = 0; i < amount; i++) {
    let startX = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      if (i <= currentRow) {
        drawSquare(startX, startY, size, color(219, 21, 20, 100));
      } else {
        drawSquare(startX, startY, size, null);
      }
      startX += size + gap;
    }
    startY += size + gap;
  }

  if (currentRow < amount - 1) {
    currentRow++;
  }
}
