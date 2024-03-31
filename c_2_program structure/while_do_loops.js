//To repeatedly execute a block of statements a given number of times use while and do loops
//While checks the condition before executing while do executes the block atleast once before
//checking the condition
//This form of control flow is known as a loop
//Looping control flow allows us to go back to some point in the program where
//we were before and repeat it with our current program state.
//Counter bindings can be used in both cases to track progress of loop
let counter = 0
while (counter < 12){
  console.log(counter);
  counter ++;
}
console.log();

let track = 0;
do {
  console.log(track);
  track ++;
} while (track < 12)

//A program that shows the value of 2^10
let result = 1;
let counte = 0;
while (counte < 10) {
result = result * 2;
counte = counte + 1;
}
console.log(result);
// -> 1024

//To prompt for a value until it is entered
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
