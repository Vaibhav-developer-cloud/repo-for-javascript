//primitive 

// 7 types : String,Number ,Boolean,null,undefined,Symbol,BigInt


//javascript is dynamic datatype because of runtime decide this datatype

const score = 34
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = undefined
const outsideTemp1= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof(anotherId))
console.log(id === anotherId)

//bigint add last n represent this bigint
const bigNumber =234325266226662n
console.log(typeof(bigNumber))


//Reference (Non Primitive)
//Array,object, Functions
const heross =["Shaktiman","Naagraj","doga"]
let myObj ={
    name:"hitesh",
    age: 22
}


const MyFunction = function(){
    console.log("Hello Word")
}
//javascript objects and browser web event master than you master in javascript

console.log(typeof(outsideTemp1))


//Typeof cheak on documentions


/*
Primitive

Number =>Number
string
Boolean
null =>object
Undefined
Symbol
BgInt

Non Primitive

Arrays => Object
Function =>function
Object =>object

*/


