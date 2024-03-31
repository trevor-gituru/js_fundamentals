//A function is a value that encapsulates a piece of program
//Function can be compared to vocabulary in dictionaries
//Function dfn is a regular binding whose value is a function
//Function created with expression that starts with keyword function
//Followed by a set of parameters and its body
const square = function(x) {
  return x * x;
};
console.log(square(12));
// → 144

//Functions can have multiple parameters or no parameters at all.
const makeNoise = function() {
  console.log("Pling!");
};
makeNoise();
// → Pling!
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
}
return result;
};
console.log(power(2, 10));
// → 1024
//Functions may produce a value, side effect(display) or do nothing
//Return statement determines the value the function returns
//When prog comes across such a statement it exits the function and gives the value
//to the code that called it
//A return statement without a value will cause the statement to return undefined
//Functions that dont have a return statement similarly return undefined
//Parameters to a function behave like regular bindings, but their initial values
//are given by the caller of the function, not the code in the function itself.
console.log(makeNoise());
