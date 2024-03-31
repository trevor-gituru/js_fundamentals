//This is where a program branches off into multiple road and the right path taken is based
// on a condition
//The keyword used is if and code is only executed if condition holds true
//Condition is in parenthesis and statemnt is n=in branches
//Braces used to group together a group of statemnts into a singular statement known as a
if (true) {
  console.log("True");
}

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
}

if (1 + 1 == 2) console.log("It's true");
// → It's true
//Else keyword is used if there are 2 paths
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
}
//If you have more than two paths to choose from, you can “chain” multiple
//if / else pairs together
let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}
