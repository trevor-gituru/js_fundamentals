//When an operator is applied to wrong type of value, Js queitly converts it to the type
//required.This is known as type coercion
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
18// → NaN
console.log(false == 0)
// → true
//Empty values are true only when compared with each other
//Usefull for testing absense of meaningful value
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
console.log(null == "");
//To prevent automatic type coercion
console.log(false == 0);
// → true
console.log(false === 0);
// → false
