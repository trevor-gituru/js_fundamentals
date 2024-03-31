require(`/home/razaoul/Documents/c_4_higher_order_function/script.js`)
/*The below function takes in a binding array and a function arguement that test
the element in the binding array and if it is true prints out a list of all the
passed values. The function is considered pure since it does not modify the array
given*/
function filte(array, test){
  let passed = [];
  for(let script of SCRIPTS){
    if (test(script)) {
      passed.push(script)
    }
  }
  return passed
}
//console.log(filte(SCRIPTS, script => script.living )[1]);
//Like forEach, filter is a standard array method
//The below is the method of filter
console.log(SCRIPTS.filter(script => script.direction == "ttb"));
