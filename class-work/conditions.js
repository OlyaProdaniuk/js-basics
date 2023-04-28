if (4 === 9) {
  console.log("Express is true");
}

if (4 === 9) {
  console.log("Expression is true");
}

if (4) {
  console.log("Expression is true");
} else {
  return false;
}
let num = 50;
if (num < 49) {
  throw new Error("num is less than 49");
} else if (num > 100) {
  return "some big number";
} else {
  return "our num is 50";
}

//ternary operator
let num1 = 50;
num1 === 50 ? console.log("num is 50") : console.log("num is not 50");

//switch

let number = 50;
switch (number) {
  case 49:
    console.log("look more");
    break;
  case 48:
    console.log("nope");
    break;
  case 47:
    console.log("go go");
    break;
  case 46:
    console.log("time to think");
    break;
  case 45:
    console.log("come on");
    break;
  default:
    console.log("number is 50");
    break;
}
