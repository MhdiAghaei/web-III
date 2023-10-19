//welcome to this project
//in this project we recive time from system and send message to console and user
var time = new Date();
time = Number(time.getHours());
if (time >= 0 && time < 10) {
  console.log("morning");
  alert("good morning;)");
} else if (time >= 10 && time < 13) {
  console.log("noon");
  alert("have nice noon with a lot of peace:)");
} else if (time >= 13 && time < 15) {
  console.log("after_noon");
  alert("good after_noon;)");
} else if (time >= 15 && time < 18) {
  console.log("evening");
  alert("good evening");
} else if (time >= 18 && time < 24) {
  console.log("night");
  alert("good night");
}
