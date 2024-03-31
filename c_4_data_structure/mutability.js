//Strings, text and boolean are immutable but the property themselves are
let object1 = {value : 10};
let object2 = object1;
let object3 = {value : 10};
console.log(object1 == object2);
console.log(object1 == object3);
object2.value = 20;
console.log(object2);
console.log(object1);
console.log(object3);
//When a object has a const binding name, then the properties of the object chan
//change but not the object itself
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
//score = {visitors: 1, home: 1};
//When one compares objects, they return true if they have the same identity
//but return false even if they have same property
let object4 = {value : 10};
let object5 = object4;
let object6 = {value : 10};
console.log(object4 == object5);
console.log(object4 == object6);
