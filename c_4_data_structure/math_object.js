//Math object is used to hold a collection of function related to Math
//It does not so much as serve as a value but more like to provide a namespace
//so that to avoid pollution of too much binding names to
//avoid overwritting the nby accident
//Examples of math functions include: Math.max, Math.min, Math.cos, Math.sin,
//Math.tan, Math.PI, Math.acos, Math.atan, Math.asin, Math.sqrt
//There is an old prog tradition of writing names of constan values in all caps
function randomPointOnCircle(radius){
  let angle = Math.random() *  2 * Math.PI;
  return {
    x : radius * Math.cos(angle),
    y : radius * Math.sin(angle)
  }
}
console.log(randomPointOnCircle(90));
//Math.random is a function that provides a random no between 0(inclusive) and 1(exclusive)
//If one want a whole number one can use math floor to round down
//Since a computer is a deterministic machine hence there is no truly random number
//But through complex calculations
console.log(Math.floor(Math.random() * 10) );
//Math.ceil - round up, Math.abs - absolute value without sign, Math.rounds- round nearest values
