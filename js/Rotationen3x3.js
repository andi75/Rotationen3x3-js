var phi = 0;

function setup() 
{
  createCanvas(400, 400);
    
  background(255);
  stroke(0);
  fill(127);
  
  frameRate(24);
}

function drawShape(points) 
{
  beginShape();
  for(var i in points)
  {
    vertex(points[i].x, points[i].y);
  }  
  endShape(CLOSE);
}

function draw()
{	
  var dimension = min(width, height);
  translate(width/2, height/2);
  scale(dimension / 2, dimension / 2);
  strokeWeight(0.02);
  
  var k = 0.2;
  var p = [
     new Point(1, 0),
     new Point(k, k),
     new Point(0, 1),
     new Point(-k, k),
     new Point(-1, 0),
     new Point(-k, -k),
     new Point(0, -1),
     new Point(k, -k),
     // new Point(1, 0)
  ];
  
  phi += PI / 36;
  var s = 0.5 * sin(1.5 * phi);
  fill(144 + 72 * s);
    
  var m1 = Matrix3x3.rotate(phi);
  var m2 = Matrix3x3.scale(s);
  var m3 = Matrix3x3.translate(0.5 * cos(phi), 0.5 * sin(phi))
  var m = Matrix3x3.multiply(m3, Matrix3x3.multiply(m2, m1));
  
  for(var i in p)
  {
    p[i].transform(m);
  }
  
  drawShape(p);
}