function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  translate(width/2, height/2);
  rotate(-90);
  strokeWeight(12);
  noFill();

  stroke(0,0,255);
  arc(0,0,445,445,0,scAngle);
  push();
  rotate(scAngle);
  line(0,0,160,0);
  pop();

  stroke(0,255,0);
  arc(0,0,425,425,0,mnAngle);
  push();
  rotate(mnAngle);
  line(0,0,120,0);
  pop();

  stroke(255,0,0);
  arc(0,0,400,400,0,hrAngle);
  push();
  rotate(hrAngle);
  line(0,0,80,0);
  pop();

  stroke(255);
  point(0,0);
}