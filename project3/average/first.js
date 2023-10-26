var n = +prompt("plz enter how many number do you want to enter: ");
var num,
  sum = 0,
  avg;
for (var i = 0; i < n; i++) {
  num = +prompt("plz enter number");
  sum += num;
}
avg = sum / n;
console.warn(`sum= ${sum}`);
console.warn(`avg= ${avg}`);
alert(`your sum is ${sum}`);
alert(`your avg is ${avg}`);
