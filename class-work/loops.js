//while

let num = 50;
while (num < 90) {
  console.log(num);
  num++; //не підтримуються cypress
}

//do while

let num2 = 80;

do {
  console.log(num2);
  num2++;
} while (num2 <= 90); //не підтримуються cypress

//for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let num3 = [3, 4, 5];
console.log(num3.map((num) => num + 1));

let num5 = 0;
for (let i = 0; i < 8; i++) {
  if (num5 === 7) {
    break;
  }
  console.log(num5);
  num5++;
}
