//hello to my js file
//this file uses for days of week switch case
while (true) {
  var day = Number(
    prompt("plz enter one number between 1 to 7 for exit press '0'")
  );
  if (day == 0) {
    break;
  } else {
    switch (day) {
      case 1:
        console.log("saturday");
        alert("your day is:" + " saturday");
        break;

      case 2:
        console.log("sunday");
        alert("your day is:" + " sunday");
        break;

      case 3:
        console.log("monday");
        alert("your day is:" + " monday");
        break;

      case 4:
        console.log("tuesday");
        alert("your day is:" + " tuesday");
        break;

      case 5:
        console.log("wednesday");
        alert("your day is:" + " wednesday");
        break;

      case 6:
        console.log("thursday");
        alert("your day is:" + " thursday");
        break;

      case 7:
        console.log("friday");
        alert("your day is:" + " friday");
        break;
      default:
        console.warn("invalid");
        alert("invlid expression");
        break;
    }
  }
}
