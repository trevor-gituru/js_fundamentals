//JS quite liberal hence can accept extra args and ignore them while no given argue
//returns as undefined
//The downside of this is that if the wrong no of args are entered then no // WARNING:
//The upside is that one can enter any no of args
function square (x) {
  return x*x ;
}
console.log(square(3333, true, "Hle"));
console.log(square());

function minus (a,b) {
  if (b === undefined) {
    return -a;
  }else {
    return a-b;
  }
}
console.log(minus(8));
console.log(minus(8, 6));

//To be able to place a default value, use = operator after a parameter
function power(base, exponent = 2){
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
console.log(power(4, 3));
