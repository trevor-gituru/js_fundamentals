/*Find correlation of every type of event in array. To do that we first must know
all the type of events*/
require('/home/razaoul/Documents/c_4_data_structure/journal.js')
require(`/home/razaoul/Documents/c_4_data_structure/computing_correlation.js`)
function journalEVents(journal){
  let list = [];
  for (let entry of journal){
    for (let even of entry.events){
      if (!list.includes(even)) {
        list.push(even)
      }
    }
  }
  return list;
}

//console.log(journalEVents(JOURNAL));

//To print an event followed by correlation
/*
for (let event of journalEVents(JOURNAL)){
  console.log(`${event} : ${phi(tableFor(event, JOURNAL))} `);
}
//Let’s filter the results to show only correlations
//greater than 0.1 or less than -0.1

for (let event of journalEVents(JOURNAL)){
  if ((phi(tableFor(event, JOURNAL)) >= 0.1) || (phi(tableFor(event, JOURNAL)) <= -0.1)) {
    console.log(`\n ${event} : ${phi(tableFor(event, JOURNAL))} `);
  }
}
*/
//As we can see eating peanuts has a higher chance to turn into a squirrel
//while brushing teeth has a higher chance of not turning into a asquirrel
//If create a new value for entry for every time there is eating peanuts and not
//brushing teeth to confirm whether peanut is key
for(let entry of JOURNAL){
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(`peanut teeth : ${phi(tableFor("peanut teeth", JOURNAL))}`);

//Hence it is confirmed that the event happens only when Jacquel fails to brush teeth
//and eats peanuts
