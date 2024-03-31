//Local bindings for functions are created a fresh for every function call
//Previously saved wont affetc any other
//Closure is the feature of being able to refer to a specific instance of a Local
//binding in an enclosing loop
function wrapValue(n) {
  let local = n;
  return () => local;
}
wrap1 = wrapValue(1);
wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//When function is called it thinks of the enviroment in which it was called not
//created

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
