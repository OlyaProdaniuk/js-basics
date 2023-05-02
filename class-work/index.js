let number = 5;
const userScore = 1000;
let numberOne = 1;
console.log(numberOne);
numberOne = 2;
console.log(numberOne);
const obj = {
  age: 20,
  height: 190,
  name: "John",
  status: {
    qwe1: 1,
    qwe2: 2,
  },
};
console.log(`${obj.age}`);

console.log(obj.status.qwe2);

console.log(obj);
obj.age = 33;
console.log(obj);

let result = [1, 2, 3, 4];
console.log(result);
let mappedResult = result.map((num) => num * 2);

console.log(mappedResult);

const pushButton = document.getElementById("pushBtn");
pushButton.addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
//data types
//boolean
let isExist = true;
let isNotExist = false;
//null & undefined
let isUndefined = undefined;
let isNull = null;
console.log(null);
console.log(qweqwe);
//object
let objNew = {};
objNew.name = "John";
console.log(objNew.name);
let person = new Object();
person.name = "John"; //json path
person.age = 17;
console.log(person);
//array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
console.log(arr[2]);

let numArr = [6, 1, 2, 3, 4, 5];
let numObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(numArr.sort());
console.log(numArr.map((num) => num * 2));
console.log(numArr.filter((num) => num % 2 === 0));
let salaryArr = ["Anna", "Vlada", "Vika"];
let salary = { Anna: 1000, Vlada: 2000, Vika: 3000 };
console.log(salary.valueOf("Anna"));
console.log(salary.hasOwnProperty("Vlada"));
//changing objects
salary.Vlada = 10000;
console.log(salary);
//
let someText = "Hello world!";
// console.log(someText.indexOf("Hello"));
// console.log(someText.length);
// console.log(someText.substring(0, 4));
// console.log(someText);
// console.log(someText.toUpperCase()); //toLowerCase()
// console.log(someText.toLowerCase()); //toUpperCase()
// console.log(someText.trim()); //trim()
// console.log(someText.trimStart()); //trimStart()
// console.log(someText.trimEnd()); //trimEnd()
console.log(someText.charAt(5));
console.log(someText[2]);

let newArr = [];
newArr.push("Доброго");
newArr.push("вечора");

// console.log(newArr.length);
// console.log(newArr.join(" "));
// console.log(newArr);
console.log(newArr.pop());
console.log(newArr);
//objects

let newObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: "eggegeg",
  f: {
    g: 1,
    h: 2,
    i: 3,
  },
};

console.log(newObj.a);
delete newObj.a;
console.log(newObj);
console.log(newObj.e.length);
//numbers
let someNum = 12.4;
console.log(Math.round(someNum));
let resolution = "12.2px";
console.log(parseInt(resolution)); //дістати ціле число
console.log(parseFloat(resolution)); // дістати floating number
