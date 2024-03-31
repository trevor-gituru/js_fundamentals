/*Another common thing to do with an array is to compute a single value from them
eg summing a collection of numbers*/
/*An example is a higher order function known as reduce that takes an array,
a combine function(how to combine two values whether multiply,add..) and
the start value*/
require(`/home/razaoul/Documents/js/c_5_higher_order_function/script.js`)

function reduce(array, combine, start){
  let current = start;
  for (let element of array){
    current = combine(current, element)
  }
  return current;
}
//To summing
let a = [1,2,3,4,5]
console.log(reduce(a, (b, c) => b + c , 0));
//->15
//To multiply
console.log(reduce(a, (b, c) => b * c, 1));
/*The reduce function is also a standard array method, it has an added advantage
in which if the element has atleast one element then the first element will
be the current while the second element henceforth will start reducing*/
/*To reduce twice to find the script with the most characters we will use the
below function*/
//[[], [], ]
function characterCount(script) {
  return script.ranges.reduce((total, [from, to]) => {
    return total + (to - from);
  }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
