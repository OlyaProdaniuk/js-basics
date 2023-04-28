//+
console.log(2 + 2);
console.log("arr" + " -object");
console.log(2 + "2");
console.log(2 + +"2");
//increment & decrement
let incr = 10;
let decr = 10;
console.log(incr++); //використовуєм значення і виводим
console.log(decr--);
console.log(++incr); //змінюєм значення і виводим
console.log(--decr);
//next
console.log(10 + 1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);
console.log(10 ** 2);
console.log(10 > 1);
console.log(10 < 1);
console.log(10 <= 2);
console.log(2 * 2 == "4");
//logical operators
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
let isChecked = true;
let isClosed = false;
console.log(isChecked && !isClosed);
let hamburger = true;
let fries = false;

if (hamburger && fries) {
  return console.log("i'm full");
} else {
  return console.log("i'm not full");
}

let hamburger1 = 5;
let fries1 = 4;

if (hamburger1 && fries1) {
  return console.log("i'm full");
} else {
  return console.log("i'm not full");
}
//falsy : 0, "", null, undefined, NaN, false, 0/0, 0/0/0,

//
let hamburgers = 2;
let cola = 2;
let nuggers = 2;
let fries2 = 2;

if ((hamburgers >= 3 && cola) || (nuggers >= 2 && fries2 >= 2)) {
  console.log("всі поїли");
}
