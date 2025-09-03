const size = 80;
const gap = 20;
const amount = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(255);
  let y = (height - size * amount - gap * (amount - 1)) / 2;

  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);

      let flowerSize = size * random(0.8, 1.2);

      let r = random(250, 255);
      let g = random(200, 255);
      let b = random(180, 255);
      fill(r, g, b, 120);
      stroke(r - 80, g - 80, b - 80, 220);
      strokeWeight(1.5);

      let petals = 6;
      for (let i = 0; i < petals; i++) {
        ellipse(0, 0, flowerSize / 1.5, flowerSize);
        rotate((PI * 2) / petals);
      }

      noFill();
      for (let m = 0; m < 4; m++) {
        rect(
          -flowerSize / 60,
          -flowerSize / 20,
          flowerSize / 10,
          flowerSize / 6
        );
        rotate(PI / 2);
      }

      pop();
      x += size + gap;
    }
    y += size + gap;
  }
}
