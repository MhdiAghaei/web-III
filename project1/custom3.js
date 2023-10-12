var studentGrade = [];
var sum = 0;
for (let i = 0; i < 10; i++) {
  studentGrade[i] = Number(prompt("plz enter student number " + i + " grade:"));
}
for (let i = 0; i < 10; i++) {
  sum += studentGrade[i];
}
alert(sum / 10);
