//Define f to hold a function value
const f = function (g) {
  console.log(g + 2);
};
//Declare g to be a function
function g (a,b){
  return a * b * 3.5
}
//A less verbose function value
let h = a => a % 3 ;
