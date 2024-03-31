//A list is a nested set of objects, with the first object holding a reference to
//the second, the second to the third, and so on.
let list = {
  value : 1,
  rest : {
    value :2,
    rest : {
      value : 3,
      rest : null
    }
  }
}
console.log(list);
//A nice thing about lists is that they can share parts of their structure.
//The below 2 bindings share similar structue but do not change the list binding
let new1 = {
  value : 0,
  rest : list
}
let new2 = {
  value : -1,
  rest : list
}
console.log(new1);
console.log(new2.rest.rest.value);
/*Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument.*/
function arrayToList(array){
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value : array[i], rest : list};
  }
  return list;
}
console.log(arrayToList([1,2,3,4,5]));
/*Also write a listToArray function that produces an array from a list*/
function listToArray(list){
  let array = [];
  for(node = list; node; node=node.rest){
    array.push(node.value);
  }
  return array
}
console.log();
console.log(listToArray(list));
console.log(listToArray(new1));
console.log(listToArray(new2));
/*Then add a helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list*/
function prepend(value, list){
  return {value, rest: list}
}
console.log();
console.log(prepend("Hello", list));
/*and nth , which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.*/
function nth(list, number){
  let result;
  for (let node = list, i= 0; node; node = node.rest, i++) {
    if (node.value == number) {
      result = i;
      break;
    }
  }
  return result;
}
console.log(nth(list, 3));
console.log(nth(list, 2));
console.log(nth(list, 1));
console.log(nth(list, 0));
/*also write a recursive version of nth*/
function rth(list, number){
  if (!list) {
    return undefined;
  }else if (number == 0) {
    return list.value;
  }else {
    return rth(list.rest, number -1);
  }
}
console.log(rth(list, 4));
