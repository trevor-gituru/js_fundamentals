/*Since bindings only grasp their values not contain them hence the content of
array and objects are stored as addresses of their content to computer nmemory.
Hence to send this data over the netwrork to another computer the content
has to be converted into a description of the value they are supposed o hold
THis can be done using JSON - JavaSctipt Object Notation. Hence what we do is to
 serialize the data*/
 /*JSON way of writing array and objects is slightly similar to JavaSctipt except
 that all property names must be  in double quotes, no comments allowed, only
 simple data expressions are allowed - no function calls, bindings or anything that
 involves actual computation*/
 //A journal entry might look like this when presented as Json format
/*
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}
*/
 //There are 2 functions JSON.stringify/parse to convert data to and from this
 //format
 let string = JSON.stringify({
   squirrel : false,
   events : ["weekend"]
 });
 console.log(string);
console.log(JSON.parse(string));
console.log(JSON.parse(string).events);
