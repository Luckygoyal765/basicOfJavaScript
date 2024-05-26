// array 

const myArr = [0,1,2,3,4,5]
const myheroes = ["shaktiman","naagraaj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr2[1]); //use this to access the value of the array

//  Arrays in js is good basically u can define anythine like any datatype inside an siingle array 
//  two ways to define the arrays is given above 

// Array methods

myArr.push(6) //appends the values at the very end 
myArr.push(7)
myArr.pop() //removes the last value 
// console.log(myArr);

myArr.unshift(9) // inserts the values at the very first which is very time consuming if the array is very big 
myArr.shift() //removes the values form the very first

// console.log(myArr.includes(9)); //tells us whether the value is present or not 
// console.log(myArr.indexOf(9)); //gives us the value in the negsative if the valeu is not present 
// otherwise gives us the index of the particular value 

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr); //convert array into string 

// slice , splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log("A ",myArr);
console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//  now here comes the difference between slice and splice :
//  splice basically manipulates or changes the original array as u can see in the output when u will run tis above code but slice will not change the original array its an interview question 
//  keep the above point in mind

