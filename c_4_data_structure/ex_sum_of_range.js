/*Write a range function that takes two arguments, start and end , and returns
an array containing all the numbers from start up to (and including) end .*/
function range(start, end){
  let list = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}
console.log(range(1, 10));
/*Next, write a sum function that takes an array of numbers and returns the
sum of these numbers*/
function sum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sum(range(1, 10)));
//-> 55
/*As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior.Make sure it also works with negative step values*/
function new_range(start, end, steps=1){
  let list = [];
  if(steps >= 0){
    for (let i = start; i <= end; i += steps) {
      list.push(i);
    }
  }else{
    for (let i = start; i >= end; i += steps) {
      list.push(i);
    }
  }
  return list;
}
console.log(new_range(1, 10, 2));
console.log(new_range(10, 1, -2));
