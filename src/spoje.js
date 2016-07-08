function setup() {
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent("spoje");
  frameRate(3);
  stroke(42);
  strokeWeight(2);
  rectMode(CENTER);
}

var mini = 8;
var maxi = 48;
var end = 64;

var s;
var x, x0;
var y, y0;
var r, g, b;

function draw() {
  if (end++ == 64) {
    end = 0;
    x = width/2;
    y = height/2;
    fill(255);
    background(255);
    rect(x, y, 25, 25);
  }

  x0 = x;
  y0 = y;
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  s = random(mini, maxi);
  
  if (random(2) < 1) {
    x = random(maxi, width-maxi);
  } else {
    y = random(maxi, height-maxi);
  }

  fill(r, g, b);
  line(x0, y0, x, y);
  ellipse(x, y, s, s);
}
