const marvelHeroes = ["thor","iron man", "captain america"]
const DcHeroes = ["BatMan","superman","flash","acquaman"]

// marvelHeroes.push(DcHeroes)
// console.log(marvelHeroes); //this is not a good thing bcs its merging two array which we don't want as of now 
// console.log(marvelHeroes[3][1]);
// const heroes = marvelHeroes.concat(DcHeroes)
// console.log(heroes);
// in case of push or concat the output will come different push will make changes on the same array whereas the concat will return us the new array 


const heroes = [...marvelHeroes, ...DcHeroes]
// this is most preferable bcs here we can add as much as values or array we want which is not possible in tha case of concat
console.log(heroes);
// but the ouptut will come same only

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);
// it will return the single array



console.log(Array.isArray("Lucky")); // checks whether its an array or not and gives the output in the boolean form
console.log(Array.from("Lucky")); //makes the string or object or anything whatever wwe will give to an array

// for the case of object

console.log(Array.from({name:"lucky"})) //interesting thing to study 
// it will return us the empty array bcs its in confusion that what type of array should i make of keys or of values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
//  makes an array of the values of the variables that we have passed 

// k