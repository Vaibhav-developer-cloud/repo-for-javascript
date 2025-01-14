const marvel_heroes = ["thor","Ironman","spiderman"]

const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)  //not array merge array under another array
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]) //flash but not good way write this code

// const allheroes = marvel_heroes.concat(dc_heroes) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allheroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes]  //... means spread operators
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  //multiple arrays inside one array main point conver in one proper array
const real_nother_array = another_array.flat(Infinity)
console.log(real_nother_array)

console.log(Array.isArray("Vaibhav"))//false
console.log(Array.from("Vaibhav")) //split in character convert in array //question string write reverse using this character

console.log(Array.from({name:"Vaibhav"}))  //intresting
let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)) //convert multiple variable in one array

