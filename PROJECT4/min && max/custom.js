let n = +prompt("how many number do you want to enter: ");
let num1 = [];
for (let i = 0; i < n; i++) {
  num1[i] = +prompt(`plz enter number:you entered ${i} number`);
}
function print(x) {
  console.log(x);
  alert(x);
}
function max() {
  let temp = num1[0];
  for (let i = 1; i <= n; i++) {
    if (temp < num1[i]) {
      temp = num1[i];
    } else continue;
  }
  return temp;
}
function min() {
  let temp = num1[0];
  for (let i = 1; i <= n; i++) {
    if (temp > num1[i]) {
      temp = num1[i];
    } else continue;
  }
  return temp;
}
print(max());
print(min());
