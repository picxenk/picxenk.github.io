//ref:https://github.com/norvig/pytudes/blob/master/ipynb/Sierpinski.ipynb
// SeungBum Kim <picxenk@gmail.com>

const N = 6;
let vertexes;
let last;



function setup() {
  var front = createCanvas(windowWidth, 500);
  front.parent('p5');

  // createCanvas(800, 800);

  setPoints(N);
  last = random(vertexes);
  console.log(dist(0, 0, width, height));
}


function draw() {

  for (let i=0; i<1000; i++) {
    let randVertex = random(vertexes);
    let mid = midpoint(last, randVertex);
    let distance = dist(last[0], last[1], randVertex[0], randVertex[1]);
    // console.log(distance);
    strokeWeight(1);
    // stroke(random(240));
    stroke(color(map(distance, 0, 900, 0, 255)));
    point(mid[0], mid[1]);
    last = mid;
  }
}


function midpoint(p, q) {
  return [(p[0]+q[0])/2, (p[1]+q[1])/2];
}


function keyPressed() {
  background(255);
  setPoints(N);
}


function setPoints(n) {
  vertexes = [];
  for (let i=0; i<n; i++) {
    vertexes.push([random(width), random(height)]);
  }
}
