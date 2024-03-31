//It is okay for a function to call itself as long as it does not cause the
//stack to overflow
//This version is slower than the looping version since callling a function
//muliple times is quite slow
//Programmer has to decide between speed and elegance
function power(base, exponent){
  let result = 1;
  if (exponent == 0) {
    return result;
  }else {
    return base * power(base, exponent-1);
  }
}
console.log(power(2, 2));


function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
