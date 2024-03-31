//To make a function accept any number of args use 3 dots before the last parameter
//ie creating a max function
//The rest paramaters bound any extra arguements to an array
//If there are parameters before it then the args will not be bound to the array
//
function max(...numbers){
  let result = -Infinity;
  for (let number of numbers){
    if(number > result){
      result = number;
    }
  }
  return result;
}
console.log(max(1,2,3,4,5,6,6,7,8,8,9,0,23,3,5,56,7,7,8,89,9,2,34));
//A similar 3 dot notation can be used to call a function with an array of args
let bec = [1,2,3,4,5,6,7,8];
console.log(max(...bec));
//This spreads out the elements in the array as separate args
//This is also possible
console.log(max(33, ...bec, 999));

//Square bracket array notation similarly allows to spread out an array into another
//new array
let names = ["Peter", "Joan"];
console.log(["Jame", ...names, "Kyle"]);
