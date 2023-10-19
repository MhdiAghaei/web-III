//its search box
var list = [];
for (var i = 0; i < 4; i++) {
  list[i] = prompt(
    "plz enter 4 name:" + " " + "you enter name number" + (i + 1)
  );
}
var search = prompt("plz enter the name you looking for:");
var trueFalse = false;
for (var i = 0; i < 4; i++) {
  if (search === list[i]) {
    console.log(true);
    alert("yes it's available");
    trueFalse = true;
    break;
  }
}
if (trueFalse == false) {
  alert("i can't find it:(");
  console.log(false);
}
