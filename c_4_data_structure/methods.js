/*Both string and array object contain length property as well as a numbber of
property that hold function values*/

let doh = "Doh";
console.log(doh.toUpperCase);
console.log(doh.toUpperCase());
let x = () => 123;
console.log(x)
console.log(x())
/*Properties that contain functions are usually called methods*/
//Examples
let sequence = [1, 2, 3];
//Push method adds a new element at the end to the array
sequence.push(4);
sequence.push(5);
console.log(sequence);
//Pop removes the last element and returns the value
console.log(sequence.pop());
console.log(sequence);
/*Operate similar in stack but in reverse order so that the last thing that
was added will be the first removed*/
