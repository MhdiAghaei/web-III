let $ = document;
let num1 = $.querySelector("#num1");
let num2 = $.querySelector("#num2");
let submit = $.getElementsByClassName("submit")[0];

submit.onclick = function bmi() {
  let num3 = num1.value / num2.value ** 2;
  if (num3 < 0.00185) {
    console.log("کمبود وزن");
    $.getElementById("img-box").style.backgroundImage = "url('img/thin.png')";
  } else if (num3 >= 0.00185 && num3 < 0.00245) {
    console.log("وزن سلامت");
    $.getElementById("img-box").style.backgroundImage =
      "url('img/healthy.jpg')";
  } else if (num3 >= 0.00245 && num3 < 0.00299) {
    console.log("اضافه وزن");
    $.getElementById("img-box").style.backgroundImage =
      "url('img/little fat.jpg')";
  } else {
    console.log("چاقی");
    $.getElementById("img-box").style.backgroundImage = "url('img/fat.jpg')";
  }
};
