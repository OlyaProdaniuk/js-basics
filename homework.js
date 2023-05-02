/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
 */

let hamburgers = 4;
let fries = 3;
if (hamburgers >= 4 && fries >= 4) {
  console.log("Ми поїли");
} else if (isNaN(hamburgers && fries)) {
  console.log("we need numbers");
} else {
  console.log("Ми йдемо в інше кафе");
}

/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
Результат виводити в консоль.*/

let price = "nine hundred ninety nine";
if (price >= 1000 && price <= 1900) {
  console.log("we found it");
} else if (isNaN(price)) {
  console.log("we are looking for a number not a string");
} else {
  console.log("This is not our price");
}

/*3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль. */

let newPrice = 1902;
if (!(newPrice >= 1000 && newPrice <= 1900)) {
  console.log("the price is not in the range");
} else if (newPrice >= 1000 && newPrice <= 1900) {
  console.log("the price is in the range");
} else {
  console.log("looks like it's something else");
}
/* 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль. */

let seasonNumber = prompt("Please enter number from 1 to 4");
let seasons = ["winter", "spring", "summer", "fall"];
if (seasonNumber == 1) {
  console.log(seasons[0]);
} else if (seasonNumber == 2) {
  console.log(seasons[1]);
} else if (seasonNumber == 3) {
  console.log(seasons[2]);
} else if (seasonNumber == 4) {
  console.log(seasons[3]);
}
/* 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let firstNum = 10;
let secondNum = 20;
let thirdNum = 30;

if (
  (firstNum < secondNum && secondNum < thirdNum) ||
  (thirdNum < secondNum && secondNum < firstNum)
) {
  console.log(`The answer is ${secondNum}`);
} else if (
  (secondNum < firstNum && firstNum < thirdNum) ||
  (thirdNum < firstNum && firstNum < secondNum)
) {
  console.log(`The answer is ${firstNum}`);
} else {
  console.log(`The answer is ${thirdNum}`);
}
/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */
let weekDays = prompt("Please enter number from 1 to 7");
switch (weekDays) {
  case "1":
    console.log("Monday");
    break;
  case "2":
    console.log("Tuesday");
    break;
  case "3":
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5":
    console.log("Friday");
    break;
  case "6":
    console.log("Saturday");
    break;
  case "7":
    console.log("Sunday");
    break;
  default:
    console.log("Please pick a number from 1 to 7");
    break;
}
/*За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */
let a = 5;
let b = 19;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("abc");
    break;
}
/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
 */

let string = "Let's remove all vowels";
const noVowels = string.replace(/[aeiou]/gi, "");
console.log(noVowels);

/*Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
 */

let meters = 5000;
let kilometers = meters / 1000;
let kilometersName = "кілометр";
let metersName = "метр";

if (meters == 1 || meters % 10 == 1) {
  console.log(`${meters} ${metersName} це ${kilometers} ${kilometersName}a`);
} else if (meters >= 2 && meters <= 4) {
  console.log(`${meters} ${metersName}a це ${kilometers} ${kilometersName}a`);
} else if (
  meters.toString().endsWith(5) ||
  meters.toString().endsWith(6) ||
  meters.toString().endsWith(7) ||
  meters.toString().endsWith(8) ||
  meters.toString().endsWith(9)
) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}а`);
} else if (meters >= 5000 && kilometers >= 5 && kilometers <= 20) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}ів`);
} else if (meters >= 5 && meters <= 20) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}a`);
} else if (meters % 10 == 0 && meters != 1000) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}a`);
} else if (meters % 10 == 0 && meters == 1000) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}`);
} else if (meters % 10 == 0 && meters > 1001) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}a`);
} else if (
  meters.toString().endsWith(2) ||
  meters.toString().endsWith(3) ||
  meters.toString().endsWith(4)
) {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}ів`);
} else {
  console.log(`${meters} ${metersName}ів це ${kilometers} ${kilometersName}ів`);
}
