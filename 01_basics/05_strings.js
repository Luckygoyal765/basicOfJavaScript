const name = "Lucky"
const repoCount = 10

// console.log(name + repoCount + "value"); this is a very outdated syntax for adding two and more strings together no one uses this method nowdays the new version or mewthod is :

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);
// here we are using `` not this ''

// different method to assign string 
// one method 
const var1 = "string name"
// another method:
const var2 = new String('string name')

// console.log(var1[4]); // this we can do in both the cases 

// console.log(var1.length);

// we have a lot of different types of prototypes that we can access that we can see in inspect icon 

// console.log(var1.toUpperCase()); //make whole string uppercase
// console.log(var1.toLowerCase()); //make whole string lowercase
// this will  not change the original value bcs it is primitive comes under stack 

// console.log(var1);

// console.log(var1.charAt(3)); //tells what is the character at index 3 
// console.log(var1.indexOf('g')); //tells what is the index value of the the given character

// some other prototypes

/*
1. substring
2. trim 
3. replace
4. includes // answer will come in boolean for this 
5. slice
6. spilt // to split the string on the basis of anything 

*/
// console.log(var1.bold()) //will make the string into bold characters

