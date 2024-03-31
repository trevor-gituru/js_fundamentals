//The break statement is used to break out of the enclosing Loop
//If one does not include a condition in the loop condition part then the entire
//loop runs forever

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21
