alert("welcome to my javaScript calculator;)");
var num1 = Number(prompt("plz enter your first number: "));
var num2 = Number(prompt("plz enter your secound number: "));
var num3 = num1;
while (true) {
  num1 = num3;
  var exp = prompt(
    "plz enter one of these '+','-','/','*' if you want to exit press '0': "
  );

  switch (exp) {
    case "+":
      num1 += num2;
      alert(num1);
      break;
    case "*":
      num1 *= num2;
      alert(num1);
      break;
    case "-":
      num1 -= num2;
      alert(num1);
      break;

    case "/":
      num1 /= num2;
      alert(num1);
      break;
    case "0":
      break;
    default:
      alert("invalid expression,try agian");
      break;
  }
  if (exp == "0") {
    break;
  }
}
