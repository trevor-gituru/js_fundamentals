//The below function is inelegant since the binding points to its elements
//Instead of each element can have it own unique binding
function phi(table) {
return (table[3] * table[0] - table[2] * table[1]) /
            Math.sqrt((table[2] + table[3]) *
                      (table[0] + table[1]) *
                      (table[1] + table[3]) *
                      (table[0] + table[2]));
}
//This can be rectified by
function phi([n00, n01, n10, n11]){
  return (n11 * n00 - n10 * n01)/
            Math.sqrt((n10 + n11)*
                      (n00 + n01)*
                      (n01 + n11)*
                      (n00 + n10));
}
//If one knows that the args will be an array one can use [] and bind each
//individual element
//A similar trick works for objects, using braces instead of square brackets.
//But for braces the binding name must be similar to property name
let {name, age} = {name: "Faraji", age: 23};
let [n11 ,n22] = [1,2]

console.log(name);
// → Faraji
console.log(n11);
console.log(n22);
