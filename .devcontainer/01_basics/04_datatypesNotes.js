// primitve
//  how to define symbol;
const Id = Symbol('5')
//  5 is the value it can be anything
//  this will be unique
// console.log(Id);
const anotherId = Symbol('5')
// console.log(Id == anotherId);
// 7 types: string, Number, Bollean, BigInt, symbol, null, undefined

// reference (non primitive)
// Array
const heros = ["bahuabli", "shaktiman", "flying jaat"]

//  objects:
const heroins =
{name: "lata",
 age: 24,
 place: "chandigarh"
}
console.log(heroins);

// functions:
const myFunction = function(){
    console.log("hello world");
}
// this is the declaration
myFunction() //this is for calling the function

console.log(typeof heroins);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof Id);



//  Arrays, objects, functions.
//  javascript is dynamically typed language 
//  we don't have to define the variable type while declaring variables here that it will number, string , bollean , bigint , etc.






