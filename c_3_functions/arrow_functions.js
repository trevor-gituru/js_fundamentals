/*
The third notation of defining a function is to use arguements, followed by
arrow(=>) then block of statements.If there is only one arguement then the parenthesis can
be removed.*/
const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result
};
console.log(power(2,3));

const square1 = (x) => {return x*x;};
//When block is a single expression one can just use that expression
//without return since the function will return the expression
const square2 = x => x*x ;
console.log(square1(2));
console.log(square2(3));
//When the function has no parameters then it is just a set of parenthesis
const horn = () => {
  console.log("Toot");
}
horn();
