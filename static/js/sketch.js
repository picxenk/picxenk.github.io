function setup() {
    var front = createCanvas(windowWidth, 300);
    front.parent('p5');
    background(250, 250, 250);
    frameRate(10);
}

function draw() {

  var x = random(0, width);
  var y = random(-10, height);
  var w = random(5, 500);

  if (w < 100 && random(100) > 70) {
    noStroke();
    // fill(0, random(5, 100));
    fill(250);
  } else {
    strokeWeight(0.3);
    stroke(0, random(0, 100));
    noFill();
  }


  rect(x, y, w, w);
}
