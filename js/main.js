//Calculator ;)
alert("Calculator");
let a = Number(prompt("1-qiymatni kiriting!"));
let belgi = prompt("Arifmetik amalni kiriting!!! ");
let b = Number(prompt("2-qiymatni kiriting!!"));

switch (1) {
  case 1:
    if (belgi == "+") {
      console.log(a + b);
    } else if (belgi == "-") {
      console.log(a - b);
    } else if (belgi == "/") {
      console.log(a / b);
    } else if (belgi == "*") {
      console.log(a * b);
    } else {
      console.log("Xatolik bor!!");
    }
}
alert("Tub son yoki murakkab son??");
// Tub son va murakkab sonni aniqlovchi dastur :)

let d = Number(prompt("Son kiriting"));

if (d / d == 1 && d / 1 == d && d % 2 == 1) {
  console.log("Tub son");
} else if (d / d == 1 && d % 2 == 0) {
  console.log("Murakkab son");
} else {
  console.log("Raqam kiriting!!");
}

//Amerikanskiy shokolad kilosi nech pulligini aniqlovchi dastur:)

let chocolateCostUSD = 5;
let chocolateWeight = 15;

for (let i = 1; i <= 15; i++) {
  console.log(i + " kg " + chocolateCostUSD * i + "$");
}
