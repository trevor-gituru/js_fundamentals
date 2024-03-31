/*Functions that operate on other functions either as args or by returning them
are known as higher order functions*/
/*HOF allow us to abstract over actions not just values and come in several form
eg*/
//Functions that create new functions
/*Creates a function that compares whether a value is greater than a certain value
The certain value can be set by binding it to a value and use that binding as a function
to compare whether another value is greater than it*/
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
//->true

//Functions that change other functions

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//We can even write functions that provides new types control flow
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
function unless(test, then){
  if(!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
});
//->0 is even
//->2 is even

//There is a built-in array method, forEach , that provides something like a
//for / of loop as a higher-order function.
["A", "B"].forEach(l => console.log(l);)
