//When the control flow meets a function, then the control goes over to the function
//declaration where it runs its code and when its through with it it then gives
//control back to the code that called it
/*
not in function
    in greet
    not in greet
        in console.log
    in greet
not in function
    in console.log
not in function        */
function greet(who) {
  console.log("Hello " + who);
}
greet("Henry");
console.log("Bye");
/*Since computer has to jump back to the context that called it hence has to
remember that location. This is done through the call stack.*/
/*Every time a function is called the context(code called) is stored on top of the
stack and when it return it removes the context form top of the stack and uses it
to continue execution*/
/*This requires computer memory hence when there tooo many calls the computer issues
out os space*/
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??
