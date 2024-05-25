let score = 30
// console.log(score)
// console.log(typeof(score))
//  or
//console.log(typeof score) // both are correct


let stringOrAnything = "30"
// console.log(typeof(stringOrAnything))

// now intially the data type of score in number and for the stringOrAnything it is string if we want to change the datatype for the variables
//  then do the following 
 let change = Number(stringOrAnything)
//  console.log(typeof stringOrAnything)
//  console.log(typeof change)

//  now if the string is something else for example 
 let madhu = "33abc"
 let prem = Number(madhu)
//  console.log(typeof prem)
//  console.log(prem)

//  so here the value of prem is coming NaN : mean "Not A Number" 
//  type if chnage from string to number but the value if not a number 

//  in case of null the value will be 0
//  in case of undefined the values will be NaN 
// in case of boolean if it is true it will 1 for false it will 0 and in case of a string it will 1 and if it is a empty string it will 0 

let someNumber = 33
 let someString = String(someNumber)
//  console.log(someString)
//  console.log(typeof someString)

//  by this we can convert anything into anything ofcourse there are some rare cases in which type will change but the values will not chnage 

// ******************** Operations ***********************

let value = 3
let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) => this is for the power 2^2 
// console.log(2/2)
// console.log(2%3) =>this is for the remainder

let str1 ="hello"
let str2 =" Lucky"

let str3 = str1+str2
// console.log(str3)

// this is for the concatenation

// console.log("1" + 2);

//  this will give u the 12 output its an issue that how we can add string to the number 

// console.log(1 + "2");

// it is direclty converting this string value to the number and adding it to the number 
// it cannot be that smart 
//  but if this is the case the then the output should be 3 not 12 
//  ofcourse if we will add two string by this format it will give us like 1 2

// console.log("1" + 2 + 2); //lets try this also 

//  ouput is 122
// holy shit man 

// but for this 


// console.log(1 + 2 + "2");

//  the output is 32

// kyun chauk gaye naaaa

//  the value which is coming first it goes form there and accordingly it works 

// console.log(1 + "2" + 1);

// output will be 121

// console.log(+true); //output: 1
// console.log(+false);//output: 0
// console.log(+""); // output: 0

let gameCounter = 100
// gameCounter++ ==> meaning of this is 100+1
// console.log(gameCounter);
// ++gameCounter ==> meaning of this is 1+100
// console.log(gameCounter);

//  output for both will be 101

// to check more about it go to the website MDN 

