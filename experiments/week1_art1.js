//flowergrid
const size = 80;
const gap = 20;
const amount = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(239, 231, 219);
  let y = (height - size * amount - gap * (amount - 1)) / 2;
  let counter = 0;

  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);

      let r = random(200, 255);
      let g = random(100, 220);
      let b = random(100, 180);
      fill(r, g, b, 150);
      noStroke();

      let petals = 5;
      for (let i = 0; i < petals; i++) {
        ellipse(0, 0, size, size / 2);
        rotate((PI * 2) / petals);
      }

      fill(255, 255, 255, 100);
      for (let k = 0; k < 4; k++) {
        ellipse(-size / 8, -size / 8, size / 4, size / 4);
        rotate(PI / 2);
      }

      pop();
      x += size + gap;
      counter++;
    }
    y += size + gap;
  }
}
