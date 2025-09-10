const size = 80;
const gap = 20;
const amount = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(239, 231, 219);
  strokeWeight(2);
  stroke(158, 144, 137);
  fill(239, 231, 219);
  let y = (height - size * amount - gap * (amount - 1)) / 2;

  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);

      let flowerSize = size * random(0.8, 1.2);

      let petals = 5;
      for (let i = 0; i < petals; i++) {
        ellipse(0, 0, flowerSize, flowerSize / 2);
        rotate((PI * 2) / petals);
      }

      fill(239, 231, 219);
      for (let k = 0; k < 4; k++) {
        ellipse(
          -flowerSize / 50,
          -flowerSize / 20,
          flowerSize / 10,
          flowerSize / 8
        );
        rotate(PI / 2);
      }

      pop();
      x += size + gap;
    }
    y += size + gap;
  }
}
