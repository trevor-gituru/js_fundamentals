require('/home/razaoul/Documents/c_4_data_structure/journal.js')
//An improved version for looping throughout arrays is to use "let element of array"
//It is basically saying for each element in the array
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events`);
}
