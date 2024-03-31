let toDoList = [];
//To add element at the end of the list
function remember(){
  toDoList.push();
}
//To remove the first element on the array and return
function getTask(){
  toDoList.shift();
}
//To add to the first element of the list
function rememberUrgently(task){
  toDoList.unshift(task);
}

let a = [1, 2, 3, 2, 1]
//To search for index of a particular element, form lef to right
console.log(a.indexOf(2));
//->1
//To seach for the index of a particular element form right to left
//-1 shows lack of element
//Both of the above method take an additional method to indicate where to start
//searching
console.log(a.lastIndexOf(2));
//->3
//Slice is another method to select part of an array and return the values
//The first args is inclusive while second args(end) is exclusive
//If second index not inputted it is assumed to display till the end
let b = [0, 1, 2, 3, 4]
console.log(b.slice(1, 3));
console.log(b.slice(2));

//Concat is another method to join two arrays together similar to + for strings
function remove(array, index){
  new_array = array.slice(0, index).concat(array.slice(index + 1));
  return new_array;
}
console.log(remove(b, 1));
//Any non array value added as an args to concat is treated as a one element array
