// +++++++++++++++++++++++++ number +++++++++++++++++++++++++++++++
const score = 400
console.log(score); //output: 400

const balance = new Number(100)
console.log(balance); //output: [Number: 100]

//this is the only difference between both of this btw btoh will work use depends on your condition and ur output

// ofcourse we can convert this number into string to use the different functionalites or options which is there in the string datatype

console.log(balance.toString()) //output: 100
console.log(balance.toString().length);//output: 3
// simple only nothing to worry about it 
console.log(balance.toFixed(2)) // this is for decimal whatever values you will give that much 0's will come //the output will be 100.00

const otherNumber = 23.89657

console.log(otherNumber.toPrecision(3));//output : 23.9
//but if the value is 123.89657
// then the output will be 124
// gives priority before the decimal first then moves after the decimal use it very carefully 

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math.abs(-4)); // output : 4
console.log(Math.abs(4)); // output: 4
console.log(Math.round(4.3)); //output: 4
console.log(Math.round(4.6)); //output 5
console.log(Math.ceil(4.2)); //output: 5 takes upper value
console.log(Math.floor(4.8)); //output: 4 takes lower value

console.log(Math.sqrt(4)); //output: 2

console.log(Math.random()); //output the values will come between 0 and 1 always it will come differnet all the time

//  top define the range of the randome use this :

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max - min + 1 ) + min)) // reme,ber this formula and learn it how it is working



