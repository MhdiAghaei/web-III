//password code
var password = prompt("plz enter new password");
var permission;
while (true) {
  permission = prompt("plz enter your password:");
  if (permission == password) {
    console.log(true);
    alert("welcome;)");
    break;
  } else {
    alert("password wrong;plz try again");
  }
}
