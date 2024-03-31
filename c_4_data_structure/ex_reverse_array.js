/*Arrays have a reverse method that changes the array by inverting the order in
which its elements appear*/
/*write two functions, reverseArray
and reverseArrayInPlace . The first, reverseArray , takes an array as argument
and produces a new array that has the same elements in the inverse order.*/
function reverseArray(array){
  let new_array = [];
  for (let element of array){
    new_array.unshift(element);
  }
  return new_array;
}
let array1 = ["Hello", 123, true];
console.log(reverseArray(array1));

/*The
second, reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements*/
let array2 = [1,2,3,4,5];

function reverseArrayInPlace(array){
  for (let i=0; i <= Math.floor(array.length / 2 ); i++){
    let replace = array[i];
    //Left value replaced by right value
    array[i] = array[array.length - 1 - i];
    //Right value replaced by left value
    array[array.length - 1 - i] = replace;
  }
  return array;
}
console.log(reverseArrayInPlace(array2));
