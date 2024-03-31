/*The map function transforms an array by applying a function to all of its
elements and building a new array from the returned values. The new array will have
the same array as the input array but its content will have been mapped into a
new form */
require(`/home/razaoul/Documents/c_4_higher_order_function/script.js`)
function map(array, transform){
  let mapped = [];
  for (let element of array){
    mapped.push(transform(element));
  }
  return mapped
}
let rtlScript = SCRIPTS.filter(element => element.direction == "rtl" );
console.log(map(rtlScript, s => s.name));
//Like forEach, map is a standard array method
