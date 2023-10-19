switch (new Date().getDay()) {
  case 0:
    console.log("saturday");
    alert("this is:" + " saturday");
    break;

  case 1:
    console.log("sunday");
    alert("this is:" + " sunday");
    break;

  case 2:
    console.log("monday");
    alert("this is:" + " monday");
    break;

  case 3:
    console.log("tuesday");
    alert("this is:" + " tuesday");
    break;

  case 4:
    console.log("wednesday");
    alert("this is:" + " wednesday");
    break;

  case 5:
    console.log("thursday");
    alert("this is:" + " thursday");
    break;

  case 6:
    console.log("friday");
    alert("this is:" + " friday");
    break;
  default:
    console.warn("invalid");
    alert("invlid expression");
    break;
}
