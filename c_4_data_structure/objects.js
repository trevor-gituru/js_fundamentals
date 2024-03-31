//Object also called dictionaries use a key value pair where you acces the value
//using the key
//In objects it is a collection of properties where the property names are
//decided by oneself
let day1 = {
  squirrel : false,
  events : ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
//To create a new key/value pair ,its like creating a new property(binding)
//In this way one can also reassign a new property value
day1.wolf = false;
console.log(day1.wolf);
//Propery whose names arent valid binding names have to be quoted
let descriptions = {
  work : "Went to work",
  "touched tree":"Touched a tree"
};
//As we can see braces can either be used to contain a group of statements or
//to define an object
//Object can be theorized as octopuses with tenacles being bindings which have
//their name tattoed on their arms and also grasp values
//Hence multiple properties can have the same values
let anObject = {left : 1, right :2};
console.log(anObject.left);
//Delete is a binary operator which deletes a property from an object
delete anObject.left;
//In is a binary operator which checks for the presence of a property in an objects
//And returns a boolean value;
console.log("left" in anObject);
console.log("right" in anObject);
//Object.keys is a function that returns a list of property names
console.log(Object.keys(day1));

let objectC = {b: 1, d: 2, f: 4};
let objectD = {a: 3, b: 2, e:6, g:7 };
//The below function copies values in one object to another
Object.assign(objectD, objectC);
console.log(objectD);

//Hence array can be considered an object whose tentacales are orderd according
//to their position
let arr = [1,2,34,4];
console.log(typeof arr);
//We will represent the journal that jacques keeps as an array of objects
let journal = [{
  //Day 1
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
  squirrel: false},
  //Day 2
  {events: ["work", "ice cream", "cauliflower",
          "lasagna", "touched tree", "brushed teeth"],
  squirrel: false},
  //Day3
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
  squirrel: true},
  //Day 4
  /* and so on... */
}]
