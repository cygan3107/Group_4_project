"use strict";
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if ( totalPrice <= customerCredits) {
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
  } else {
    console.log(`Insufficient funds!`);
  }
}
makeTransaction(5, 3000, 23000); // "You ordered 5 droids worth 15000 credits!"
makeTransaction(3, 1000, 15000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 5000, 8000); // "Insufficient funds!"
makeTransaction(8, 2000, 10000); // "Insufficient funds!"
makeTransaction(10, 500, 5000); // "You ordered 10 droids worth 5000 credits!"

/*let price = 0;
const subscription = "pro";
if (subscription === "pro") {
    //true
    price = 100;
}
console.log(price); // 100

let price2 = 0;
const subscription2 = "free";
if (subscription2 === "pro") {
    //false
    price2 = 100;
}
console.log(price2); // 0

const grade = 85;
if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

const grade = 40;
if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

if (condition_1) {
  // kod, który jest wykonywany, jeśli warunek (condition_1) jest prawdziwy
} else if (condition_2) {
  // kod, który jest wykonywany, jeśli warunek (condition_2) jest prawdziwy
} else if (condition_3) {
  // kod, który jest wykonywany, jeśli warunek (condition_3) jest prawdziwy
} else {
	// kod, który jest wykonywany, jeśli wszystkie warunki są fałszywe
}

const grade = 85;
if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

const grade = 85;

if (grade >= 90) {
    console.log("Perfectly");
} else if (grade >= 86) {
    console.log("Good");
} else if (grade >= 70) {
    console.log("Satisfactorily");
} else {
    console.log("Unsatisfactorily");
}*/
