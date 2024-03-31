/*
phi = (n11n00 - n01n10) / (n1. n0. n.1 n.0)
n11 - means no of times both 1st and 2nd variables were true
while n1. means sum of no of times where 1st variable appeared*/
/*Table can be represented by a 2*2 array or an object whose propery names
are "11". Using binary notation leftmost represent squirel while rightmost represent pizza
When converted to decimal it will indicate the postion
00 - 0 , 01 - 1 , 10 - 2, 11 - 3*/
function phi(table) {
  //Math sqrt is the function provided by Math Object
  let result = (table[3] * table[0] - table[2] * table[1]) /
                Math.sqrt((table[2] + table[3])*
                          (table[0] + table[1])*
                          (table[1] + table[3])*
                          (table[0] + table[2]));
  return result;

}
console.log(phi([76, 9, 4, 1]));
require('/home/razaoul/Documents/c_4_data_structure/journal.js')

/*To extract a two-by-two table for a specific event from the journal, we must
loop over all the entries and tally how many times the event occurs in relation
to squirrel transformations.*/
//Requires two arguements namely the event to be compared to and variable holding
//journal
function tableFor(event, journal) {
  //Create the table to hold results
  let table = [0, 0, 0, 0];
  //To loop through each day
  for (let i = 0; i < journal.length; i++) {
    //To look for the entry for a specific day and to contain position in table
    let entry = journal[i], index = 0;
    //Checks for squirrel and events and decides the position in table
    //Array has an includes method which checks whether a particular element is there
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
module.exports = phi;
global.phi = phi;
module.export = tableFor;
global.tableFor = tableFor;
