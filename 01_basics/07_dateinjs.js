// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // here in javascript months starts from 0  // the ouput will be mar-jan-23-2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //it will give us the time also : 5 is the hour and 3 is the minute
// let myCreatedDate = new Date("2023-01-14") // in this format months will start from 1 only in the upper condition it was basically an array thats why its started from 0
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //gives us the values or time in seconds not in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
})); 
//  we can change the upper format according to ourself btw it takes objects and it can take as many as parameters it wants or user wants
