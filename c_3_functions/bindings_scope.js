/*
Each Bindings have a scope which is the area in the program from which it is visible
If binding is defined outside fucntion then it is accessible throughout the entire program
hence its scope is considered global
Bindings created as parameters or in that function can only be used within the function
hence its scope is considered local
*/

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
console.log(y);
// → 40

const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
