// console.log("J");
// console.log("A");
// console.log("S");
// instead of writing in this way 


// write in this way 
// this is the format for declaring and assignning a function 
function sayMyName() {
    console.log("J");
    console.log("A");
    console.log("S");
}

// console.log(sayMyName());
// note: sayMyName: this is the reference    but    sayMyName(): this is the execution

// we can print this in this way also without using console.log

// sayMyName()
// by this also we can print a function

function addTwoNum(num1, num2) {

    // console.log(num1 + num2)

}

// addTwoNum(3, 4)


// another way try to use this function

function addTwoNum(num1, num2){ //these num1 , num2 are the parameters which we passes here
    if (num1 === undefined || num1 === null || num2 === undefined || num2 === null){
        console.log("values are not given")
        return;
    }
    return num1+num2
}
console.log(addTwoNum()) //here 3,4 or whatever we will give will eb the arguments 

// we can print like this also 

// if we are returning something from the function it does mean tht it will print that for that we have to use console.log haan if we are doing console.log in the function itself then no need of repeating the step again 

// Another thing here is that if we are declaring or assigning something inside the fucntion that will be allowed to work inside the function only we can't use tht variable outside the function 

// note: in the case when we are returning something inside the function and doing console.log outside the fucntion and we are not giving any arguments then the outcome will come undefine not null its an interview qwuestion

// to cure this method in which if user is not passing any argument we can actually assign some values in the parametes only as a default values and if we guys are also passing some values to the arguments then it will be overwrite

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


