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




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive)  heap (non primitive (reference))

let myName = "Lucky Goyal"

let anotherName = "Nishant Goyal"

anothername = myName


console.log(anotherName);
console.log(myName);


let userOne = {
    email:"lucky@google.com",
    upi:"upi@ybl"
}

let userTwo = userOne

userTwo.email = "Nishant@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack provides us the copy of the data so even if we giys are making some changes in the stack or in any variable it will not affect the main varibale 
// whereas, in the case of heap all the variables are referenced through the same reference same point so if we are making any changes there or in any one variable or anyother variable is associated to that same variable then the values of all the variables will change 
