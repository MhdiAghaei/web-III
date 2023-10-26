var fname, lname, phoneNumber;

for (var i = 0; i < 9; i++) {
  fname = prompt("plz enter the students name: ");
  lname = prompt("plz enter the lastName of students: ");
  phoneNumber = prompt("plz enter the phone number: ");
  if (i == 0 || i == 3 || i == 6) {
    document.getElementsByTagName("td")[i].innerText = fname;
  } else if (i == 1 || i == 4 || i == 7) {
    document.getElementsByTagName("td")[i].innerText = lname;
  } else if (i == 2 || i == 5 || i == 8) {
    document.getElementsByTagName("td")[i].innerText = phoneNumber;
  }
}
