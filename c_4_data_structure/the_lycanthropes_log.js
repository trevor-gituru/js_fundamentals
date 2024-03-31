//To setup enviroment for journal
let journal = [];
//If a property name in brace notation isnt followed by a value, its value is taken form
//binding with same name as property name
function addEntry(events, squirrel){
  journal.push({events, squirrel })
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false );
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false );
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true );
//Statistics-correlation will be used to find out which of the events will have a relation
//to squirrelfication
//Phi coefficient will be used to compute correlation
//0 no relation, 1 perfectly related, -1 related but in opposite direction          
