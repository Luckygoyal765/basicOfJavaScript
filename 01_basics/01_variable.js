console.log("Lucky Goyal")
let name = "lucky"
let age = 22
 console.log(age)
 console.log(name)
//  or else we can do that instead of using console.log again and again we can use console.table for the same 
// console.table([age, name])
//  one more thing is here 
/*
lets assume we are declaring some variable but we guys are not assigning it so in that case lets check what will be output
*/
let studentId;
// before that lets comment the first console.table
console.table([age, name, studentId])
//  so yaa ofcourse if a variable is not assign it will so its undefine

let Id= null;
// null is a object basically it tells us that as of now the value of that particular variable is not fix so till now its empty nothing is there 

// one more thing we can declare variable by using "var" also but due to the issue of scope we don't use that 

//  now the point comes what is scope : {}, this bracket is scope , initially in old java this bracket is use to unseen by the java thats why nowdays we don't use that 

// we have different types of datatypes like:
/*
 number
 bollean
 bigint
 string 
 undefine is a data type
 null is an object : its a stand alone variable
 symbol = unique

*/

console.table([age, name,studentId,Id])

// see here the outptu of Id will be null but for the studentId it will be undefine 

console.log(typeof age)
//  this will temme the datatype of the variable here we can use either variable name or else we can use direct values also
//  like this 
console.log(typeof 3)
//  here both are numbers

console.log(typeof "radha swami jii")
//  here its a string 
