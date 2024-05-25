let score = 30
// console.log(score)
console.log(typeof(score))
//  or
console.log(typeof score) // both are correct


let stringOrAnything = "30"
console.log(typeof(stringOrAnything))

// now intially the data type of score in number and for the stringOrAnything it is string if we want to change the datatype for the variables
//  then do the following 
 let change = Number(stringOrAnything)
 console.log(typeof stringOrAnything)
 console.log(typeof change)

//  now if the string is something else for example 
 let madhu = "33abc"
 let prem = Number(madhu)
 console.log(typeof prem)
 console.log(prem)

//  so here the value of prem is coming NaN : mean "Not A Number" 
//  type if chnage from string to number but the value if not a number 

//  in case of null the value will be 0
//  in case of undefined the values will be NaN 
// in case of boolean if it is true it will 1 for false it will 0 and in case of a string it will 1 and if it is a empty string it will 0 

let someNumber = 33
 let someString = String(someNumber)
 console.log(someString)
 console.log(typeof someString)

//  by this we can convert anything into anything ofcourse there are some rare cases in which type will change but the values will not chnage 
