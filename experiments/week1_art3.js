const size = 50;
const layers = 8;
const amount = 5;
const gap = 40;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}

function drawLayers(x, y, size, layers) {
  const variance = size / 15;
  noFill();

  stroke(219, 21, 20);
  strokeWeight(1);

  for (let i = 0; i < layers; i++) {
    const s = (size / layers) * i;
    const half = s / 2;

    beginShape();
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(getRandomValue(x, variance), getRandomValue(y - half, variance));
    vertex(
      getRandomValue(x + half / 2, variance),
      getRandomValue(y - half, variance)
    );

    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half / 2, variance)
    );
    vertex(getRandomValue(x + half, variance), getRandomValue(y, variance));

    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(getRandomValue(x, variance), getRandomValue(y + half, variance));
    vertex(
      getRandomValue(x - half / 2, variance),
      getRandomValue(y + half, variance)
    );

    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half / 2, variance)
    );
    vertex(getRandomValue(x - half, variance), getRandomValue(y, variance));
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half / 2, variance)
    );
    endShape(CLOSE);
  }
}

function draw() {
  background(255);

  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      drawLayers(x, y, size, layers);

      if (random() < 0.4) {
        stroke(34, 139, 34);
        strokeWeight(2);
        line(x, y + size / 2, x, y + size);

        line(x, y + size * 0.85, x - 10, y + size * 0.65);
        line(x, y + size * 0.75, x + 10, y + size * 0.65);
      }
      x += size + gap;
    }
    y += size + gap;
  }
}
