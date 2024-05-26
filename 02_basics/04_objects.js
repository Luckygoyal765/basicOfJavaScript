// const tinderUser = {} // its an literal object
// const tinderUser = new Object() //its an singleton object
// console.log(tinderUser)
//  the output for the objects is same 
const tinderUser = {
    age:"22",
    fullname:{
        username:{
            firstname:"Lucky",
            lastName:"Goyal"
        }
    }
}
// console.log(tinderUser.fullname.username)
// // its a nested object declaration 
// // we can accesss it according to our requirements 
// //  for example 
// console.log(tinderUser.fullname)//it will give us username: inside that it will give us the firstname and the last name 

// now how to combine two or more objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3) //the error will be same as array it will give us output in this way 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// to cure this best way to do that is:
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)
// this will give us the correct output here its completely ups to us that we want to use {} or not but using is a great practise 
// the meaning of using this is that all the values are going to the {} so it means that it is the target node and others are the source nodes if we guys are not giving that it means all the values are going to the obj1 which is also not wrong but just to remember clarifying it here only
// its an empty object

// but the new method that we can use is 

const obj3 ={...obj1,...obj2} //best way to use this method or to perform concatenation
// console.log(obj3) //add as many as objects we want

// console.log(Object.keys(tinderUser)) //to access the keys of an object 
// the output will come an array mean all the keys are store in an array and afteer that if we want we can use loops or anything we can perform according to our chouces and our needs

// console.log(Object.values(tinderUser)) //with this same method i can take out values also of the keys of an object 

// one more thing
// to check whether the vallue of that key is present in the object or not 

// console.log(tinderUser.hasOwnProperty('age'))
// output will come in boolean if yes then true else false

const course ={
    courseName: "js in hindi",
    price: "999",
    courseTeacher:"Lucky"
}

// for accessing the values
// console.log(course.courseTeacher) //instead of using this use the below method

const{courseTeacher: instructor} = course // here we can give any other name also
console.log(instructor)

// both are correct in their places but the most usable one is this one only which will make ur work lil bit easy 

// THIS IS KNOWN AS OBJECT DESTRUCTING 

// now for json API

// {
//     "name":"Lukcy",
//     "coursename":"json API in hindi"
//     "price":"free"
// }

// this above method is the syntax for json API in the form of object ofcourse its not an object completely bcs objects have some names to it but we can say bcs of this {}

// but we can also get it in the form of arrays []

// [
//     {},
//     {},
//     {}
// ]

// array that contains alot of objects

