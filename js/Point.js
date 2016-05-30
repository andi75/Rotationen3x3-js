function Point(x, y) {
	this.x = x;
	this.y = y;
	this.w = 1;
}

Point.prototype.transform = function(m)
{
	var newx = m.m[0] * this.x + m.m[1] * this.y + m.m[2] * this.w;
	var newy = m.m[3] * this.x + m.m[4] * this.y + m.m[5] * this.w;
	var neww = m.m[6] * this.x + m.m[7] * this.y + m.m[8] * this.w;
	this.x = newx;
	this.y = newy;
	this.w = neww;
}