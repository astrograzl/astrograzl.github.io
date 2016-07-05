function setup() {
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent("spoje");
  frameRate(3);
  stroke(42);
  strokeWeight(2);
  rectMode(CENTER);
  background(255);
}

var x;
var y;
var mini = 8;
var maxi = 48;
var end = 0;

function draw() {
  if (frameCount == 1) init();

  var x0 = x;
  var y0 = y;
  
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  var s = random(mini, maxi);
  
  if (random(2) > 1) {
    x = random(maxi, width-maxi);
    line(x0, y0, x, y0);
    fill(r, g, b);
    ellipse(x, y0, s, s);
  } else {
    y = random(maxi, height-maxi);
    line(x0, y0, x0, y);
    fill(r, g, b);
    ellipse(x0, y, s, s);
  }

  end = end + 1;
  if (end % 64 == 0) {
    //delay(3000);
    init();
  }
}

function init() {
  x = width/2;
  y = height/2;
  fill(255);
  background(255);
  rect(x, y, 25, 25);
}
