/*
define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?*/

function isEven(a){
  if (a < 0) {
    let b = a * -1;
    return isEven(b);
  }
  if (a == 0 || a == 1) {
    if (a ==0) {
      return true;
    } else {
      return false;
    }
  }else {
    return isEven(a-2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
