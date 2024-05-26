// singleton
// object.create // constructors

// object literals
const jsuser = {
    name: "Lucky goyal",
    id: 12,
    phoneNumber: 82818388691,
    age: 22,
    location:"coimbatore"
}
// console.log(jsuser.name); //acccess through key also
// in Array we can access values through index number only
// here through keys or through values
//  but the above way is not the correct way 

const mySym = Symbol("key1")
const jsuser1 = {
    name: "Lucky goyal",
    "full name":"Nishant Goyal",// if our key is there in this form 
    [mySym]:"mykey1", //this is way to access the symbol
    id: 12,
    phoneNumber: 82818388691,
    age: 22,
    location:"coimbatore"
}

// console.log(jsuser1."full name") //but not this way mean byb using . we can't access
// thats why this below method is refer to use
// console.log(jsuser1["full name"]) //by this we can access 

// console.log(jsuser["name","id","age","location"])
// this will give us only the first and last value that we want to print

// for symbol also :

// console.log(jsuser1[mySym]) //here no need to wrote in the double quotes

// we can change the values of the keys also 
jsuser.name = "pawan Goyal"

// but to freeze it also mean that once changed can't be change again

// Object.freeze(jsuser)
// console.log(jsuser) //u can see the changes

// // one more thing 
// console.log(jsuser1)
// here it will say that fo the symbol : [symbol(key1)]:'mykey1' output willl comein this way but fot the case of symbol only if we will reomve the bracket from the object of mykey then it will wokr as a normal key only it will not be a symbpl anymore 

//  now some more thing
 jsuser.greeting = function(){
    console.log("hello lucky bhaiya");

 }
 jsuser.greetingTwo = function(){
    console.log(`hello lucky bhaiya,${this.name},is your father and its your birthdate ${this.age}`)
    // this thing is known as string interpolation that we have already discusses in the string chapter 
 }
//   console.log(jsuser.greetingTwo()); //if we remove the paranthesis from greeting it will show us some error and that error is function (anonymous)
// it will also show us some undefine which is normal bcs it executes one moretime by its own which is not an issue that we will discuss later 

// keep one thing in mind while accessing the values of the keys of an object please don't use this . thing instead of it put the key name on double quote inside the square bracket to access its a good practise 
// And one more thing symbol key should also eb there inside the square bracket 



















