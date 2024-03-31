/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.*/
function countBs(s){
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B" ) {
      result ++;
    }
  }
  return result;
}
console.log(countBs("BBBBB"));
/*
write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters)
*/
function countChar(s, t){
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t ) {
      result ++;
    }
  }
  return result;
}
console.log(countChar("Hello", "l"));
