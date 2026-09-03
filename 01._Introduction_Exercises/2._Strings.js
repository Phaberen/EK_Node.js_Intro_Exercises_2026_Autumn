// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const roundedSum = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(roundedSum);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sumWithDecimals = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(5)

console.log(typeof (roundedSum));
console.log(typeof (sumWithDecimals));
console.log(sumWithDecimals);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3;
const averageWithFiveDecimals = average.toFixed(5)

console.log(averageWithFiveDecimals);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const charAtIndexOfc = letters.charAt(2)
console.log(charAtIndexOfc);
console.log(typeof (charAtIndexOfc));

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

// .replace replaces first occurence of given string with a new string, returns an entirely new string - strings are immutable
// .replaceAll would replace every occuring instance. 
const factWithCapitalizedJ = fact.replace("javascript", "Javascript");
console.log(factWithCapitalizedJ);

// --------------------------------------