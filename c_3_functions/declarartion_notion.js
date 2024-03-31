/*A shorter way to declare a function is to put binding name before the arguements
It does not require a semicolon*/
function square(x){
  return x*x;
}
console.log(square(2));

/*
Function declaration does not follow the normal control flow but its scope
is assumed that its at the to hence can be used by preceeding code*/
console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}
