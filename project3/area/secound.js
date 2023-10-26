var height = +prompt("ertefa mosalas ra vared konid: ");
var length = [];
var sum = 0;
function print(n) {
  console.warn(n);
  alert(n);
}
for (var i = 0; i < 3; i++) {
  length[i] = +prompt("azla mosalas ra vared konid{aval qaede}:");
}
function masahat(length, height) {
  var area = length[0] * height;
  return area;
}
function Mohit(length) {
  var mohit = 0;
  for (var i = 0; i < 3; i++) {
    mohit += length[i];
  }
  return mohit;
}
print(masahat(length, height));
print(Mohit(length));
