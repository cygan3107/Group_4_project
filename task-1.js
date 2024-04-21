"use strict";
/*function makeTransaction(quantity, pricePerDroid, customerCredits) {
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

//ROZGAŁĘZIENIA

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
/*
let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}
console.log(type); // 'adult'

//Ten sam kod można przepisać z użyciem operatora trójargumentowego:
const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult'


const a = 5;
const b = 10;
let biggerNumber;

if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}
console.log(biggerNumber); // 10

//Ten sam kod można przepisać z użyciem operatora trójargumentowego:
const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;
console.log(biggerNumber); // 10


const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}

const day = 3;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}

// Zmienna globalna
const value = "I'm a global variable";

if (true) {
	// Można odwołać się do zmiennej globalnej
  console.log(value); // "I'm a global variable"
}

// Można odwołać się do zmiennej globalnej
console.log(value); // "I'm a global variable"


if (true) {
  // Zmienna lokalna
	const value = "I'm a local variable";
  console.log(value); // "I'm a local variable"
}

// Błąd: zmienna lokalna nie jest widoczna poza blokiem
console.log(value); // ReferenceError: value is not defined


const globalVar = "Global";

console.log(globalVar); // Dostęp do globalVar z globalnego zakresu widoczności
// Brak dostępu do aVar, bVar i cVar

if(true) {
	const aVar = "A";
	console.log(globalVar); // Dostęp do globalVar z bloku A
  console.log(aVar); // Dostęp do aVar z bloku A
	// Brak dostępu do bVar i cVar

	if(true) {
		const bVar = "B";
		console.log(globalVar); // Dostęp do globalVar z bloku B
	  console.log(aVar); // Dostęp do aVar z bloku B
	  console.log(bVar); // Dostęp do bVar z bloku B
		// Brak dostępu do cVar
	}
}

console.log(globalVar); // Dostęp do globalVar z globalnego zakresu widoczności
// Brak dostępu do aVar, bVar i cVar

if(true) {
	const cVar = "C";
  console.log(globalVar); // Dostęp do globalVar z bloku C
  console.log(cVar); // Dostęp do cVar z bloku C
	// Brak dostępu do aVar i bVar
}

console.log(globalVar); // Dostęp do globalVar z globalnego zakresu widoczności
// Brak dostępu do aVar, bVar i cVar

//OPERATORY LOGICZNE
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

//  0. “”. NaN, null, undefined, false -> zawsze są konwertowane na false. 
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

//W następujących przykładach oba operandy konwertowane są na true.
Obliczenia odbywają się od lewej do prawej, więc wynikiem będzie wartość prawego operandu.
console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

//A oto w tym przykładzie jeden z operandów zostanie przekonwertowany do false, więc wynikiem będzie fałszywy operand.
console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

//
const a = 20;
console.log(a > 10 && a < 30); // true && true -> true

const b = 50;
console.log(b > 10 && b < 30); // true && false -> false
console.log(b > 80 && b < 120); // false && true -> false

//
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
}

//
console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

//
console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

//Jeśli wszystkie operandy przekształcają się na false, wynikiem będzie wartość skrajnego prawego operandu.
console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null

//
const a = 5;
console.log(a < 10 || a > 30); // true || false -> true

const b = 50;
console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40

//
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
  // w konsoli będzie pusto, ponieważ żaden z warunków nie został przekształcony na true
}

//Logiczne "NIE" konwertuje operand na wartość logiczną (true lub false) i następnie je neguje (odwraca),
czyli zamienia na przeciwne: true —> false, a false —> true.
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true

//
const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}

//
const isBlocked = true;
const canChat = !isBlocked; // !true -> false

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}

//
const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked; 
// true && !false -> true && true -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}

//METODY CIĄGU ZNAKÓW
const message = "JavaScript is awesome";
console.log(message.length); // 21

const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

str.slice(startIndex, endIndex)

gdzie:

    str — źródłowy ciąg znaków, z którego będzie tworzona kopia.
    startIndex — indeks, od którego zaczyna się kopiowanie elementów ciągu.
    endIndex — indeks, do którego (nie włączając) idzie kopiowanie elementów ciągu.

const fullName = "Jacob Mercer";
console.log(fullName.slice()); // 'Jacob Mercer'

const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6);
console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true

const username = 'Jacob Mercer';
console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false

const username = 'Jacob Mercer';
console.log(username.includes('Jacob')); // true
console.log(username.includes('jacob')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('mercer')); // false

const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");
if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}
// W tym przykładzie sprawdzamy, czy zmienna message zawiera podciąg "buy".
Jeśli tak, wyświetlane jest ostrzeżenie o zawartości zabronionych słów.
W przeciwnym razie wyświetlana jest wiadomość, że wiadomość można bezpiecznie otworzyć.

const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (metoda jest wrażliwa na wielkość liter)

const str = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (metoda jest wrażliwa na wielkość liter)

//szukanie podciągu "to"
const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8

//jeśli brak podciągu "hello" wtedy wartość -1
const message = "Welcome to Bahamas!";
const index = message.indexOf("hello");
console.log(index); // -1

//trim usuwa zbędne spacje
const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

//PĘTLE

W tym przykładzie mamy zmienną count, która zwiększa się z każdą iteracją.
Pętla while będzie wykonywała się dopóki count jest mniejsze niż 10. Gdy count osiągnie wartość 10 lub więcej,
warunek stanie się fałszywy i pętla się zakończy.

let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

//Zmienna clientCounter przechowuje liczbę zajętych pokoi w danym momencie.
Zmienna maxClients przechowuje całkowitą liczbę pokoi w hotelu.
Dzięki pętli while miejsca w hotelu będą zajmowane dopóki bieżąca liczba klientów nie osiągnie maksymalnie dopuszczalnej.

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

//pętla do ... while
let count = 0;

do {
	console.log(`Count: ${count}`);
	count += 1;
} while (count < 5);

//pętla for //  0, 5, 10, 15 i 20
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

//  20, 15, 10, 5 i 0
for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

//Prefiksowa inkrementacja (++value)
let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

//Postfiksowa inkrementacja (value++)
let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5

//Prefiksowa dekrementacja (--value)
let x = 5;
const y = --x;
console.log(x); // 4
console.log(y); // 4

//Postfiksowa dekrementacja (value--)
let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5

//W powyższym przykładzie pętli for, zmienna i jest inicjalizowana wartością 0,
a pętla wykonuje się dopóki i jest mniejsze lub równe 5. Po każdej iteracji wartość i jest zwiększana o 1.
W rezultacie w konsoli zostaną wyświetlone liczby od 0 do 5.
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//W tym przykładzie pętla for miała by się wykonywać, dopóki wartość zmiennej i jest mniejsza niż 10.
Jednak w ciele pętli znajduje się warunek if (i === 5), który sprawdza, czy wartość i jest równa liczbie 5.
Gdy ten warunek staje się prawdziwy, ciało if jest wykonywane i stosowany jest operator break,
a wykonanie pętli jest przerywane. W ten sposób w konsoli zostaną wyświetlone liczby od 0 do 5 (włącznie),
a pętla zakończy swoje działanie.
for (let i = 0; i < 10; i+=1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}
console.log('Log after cycle');

//function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function");

//function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Ten console.log nie jest wykonywany
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);



*/

