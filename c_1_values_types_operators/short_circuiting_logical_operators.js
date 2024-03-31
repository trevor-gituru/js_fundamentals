//Logical operator and and or handle values of different types in a peculiar way
//They convert value to the leftside to boolean and depending on its value,
//They return either original leftside or rightside
//And true -right, or true -lefttside
//Basically reverse alphabetical order
console.log(null && 5);
// ->  null
console.log("Hello" && 5);
// -> 5
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
console.log("Hello" || ldldlflf);
//Can be used as a default value where the replacement value is on left while
//default value on right
//Another important to note is that value to right is only evaluated when selected
console.log(false && xx);
console.log(true || xx);
//This is shown to short circuit  evaluation
