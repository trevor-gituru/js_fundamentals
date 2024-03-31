//Used to represent text
//Format is that text enclosed in either single/doube quotes or backtick
console.log("Hello");
console.log('World');
console.log(`I am John`);

//When a backslash is used it means that the character proceeding it has a special meaning
//ie newline, include backslash/ quotes or tablines
console.log("Peter said \n \t\"Good Sir\\Madam");

//Unicode standard is used to represent each character in bits
//Strings acn be joined together with + or , known as concatenate
//Comma adds space
console.log("Hello " + "Peter", "Good morning");

//Template literas/ backticks can be used to embed other values AND  span lines ie'
console.log(`Square of 2 is
  ${2*2}`);
