function Matrix3x3(a, b, c, d, e, f, g, h, i) {
	this.m = [ a, b, c, d, e, f, g, h, i ];
}

Matrix3x3.scale = function(s)
{
	return new Matrix3x3(s, 0, 0, 0, s, 0, 0, 0, 1);
}

Matrix3x3.identity = function()
{
	return new Matrix3x3(1, 0, 0, 0, 1, 0, 0, 0, 1);
}

Matrix3x3.rotate = function(phi)
{
	return new Matrix3x3(cos(phi), -sin(phi), 0, sin(phi), cos(phi), 0, 0, 0, 1);
}

Matrix3x3.translate = function(tx, ty)
{
	return new Matrix3x3(1, 0, tx, 0, 1, ty, 0, 0, 1);
}

Matrix3x3.multiply = function(left, right)
{
	return new Matrix3x3(
		left.m[0] * right.m[0] + left.m[1] * right.m[3] + left.m[2] * right.m[6],
		left.m[0] * right.m[1] + left.m[1] * right.m[4] + left.m[2] * right.m[7],
		left.m[0] * right.m[2] + left.m[1] * right.m[5] + left.m[2] * right.m[8],
		left.m[3] * right.m[0] + left.m[4] * right.m[3] + left.m[5] * right.m[6],
		left.m[3] * right.m[1] + left.m[4] * right.m[4] + left.m[5] * right.m[7],
		left.m[3] * right.m[2] + left.m[4] * right.m[5] + left.m[5] * right.m[8],
		left.m[6] * right.m[0] + left.m[7] * right.m[3] + left.m[8] * right.m[6],
		left.m[6] * right.m[1] + left.m[7] * right.m[4] + left.m[8] * right.m[7],
		left.m[6] * right.m[2] + left.m[7] * right.m[5] + left.m[8] * right.m[8]
	);
}

