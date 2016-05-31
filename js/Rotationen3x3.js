var t = 0;

function setup() 
{
  createCanvas(600, 600);
    
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

function drawStar(m)
{
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
  for(var i in p)
  {
    p[i].transform(m);
  }
  drawShape(p);	
}

function draw()
{
   // clear();
	
  t += PI / 36;
  while(t > 8 * PI) { t -= 8 * PI; clear(); }
  
  	
  var dimension = min(width, height);
  translate(width/2, height/2);
  scale(dimension / 2, -dimension / 2);
  strokeWeight(0.02);
  
  

  
  // n Sterne
  var n = 6;
  
  for(var i = 0; i < n; i++)
  {
	  var phi0 = 2 * PI / n * i;
	  var phi = phi0 + t;
	  var r = pow(2, -1 / PI * t);
	  var s = 1.0 / 32.0 * r;
	  
	  // print("phi: " + phi + ", r: " + r + ", s: " + s);
	  
	  var m1 = Matrix3x3.scale(s);
	  var m2 = Matrix3x3.translate(r, 0);
	  var m3 = Matrix3x3.rotate(phi);
	  var m = Matrix3x3.multiply(m3, Matrix3x3.multiply(m2, m1));
	  
	  strokeWeight(0.1 * s);

	  drawStar(m);
  }
}