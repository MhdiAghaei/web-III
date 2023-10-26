var radius = +prompt("plz enter the radius of a circle: ");
var pi = 3.14;
function print(n) {
  console.log(n);
  alert(n);
}
function area(radius, pi) {
  var area = radius * radius * pi;
  return area;
}
function mohit(radius, pi) {
  var mohit = radius * 2 * pi;
  return mohit;
}
print(area(radius, pi));
print(mohit(radius, pi));
