//Strings,numbers and boolean are immutaeble hence one cannot add properties to them
//But they come with a copuple inbuilt methods such as indexOf, slice
console.log("Coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));
// → 11
//Trim method removes whitespace from start to end of the line
console.log("  Hello World \n".trim());
//Another method is padStart which takes the desired length and character to pad
//as args
console.log("7".padStart(3, "0"));
//Split is another method that separates a string into an array based on a particular condition
let sentence = "Secretarybirds specialize in stomping";
word = sentence.split(" ");
console.log(word);
//Join is an array method to join its elements into a string with a specific character
//used in between each element
console.log(word.join(" "));
//A string can be repeated a predetermined number of times to form a new Strings
// as a return value
console.log("PA".repeat(4));
//THere is also length to find total number of character in astringg and accessing
// a string is like accessing any element in an array
console.log("Hello".length);
console.log("Hello"[1]);
