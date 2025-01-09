let score = undefined
console.log(typeof score)
console.log(typeof (score))


let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //33 but lecture //undefined is nan means not a number

//"33" => 33
//"33abc=> NaN
//true = 1; false =0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 =>true ; 0 =>false
//"hitesh"= true
//"" =false
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)


// ************************** Operations***************************************

let value  = 3 
let negValue = -value
//console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(23)

let str1 = "hello"
let str2 = " Hitesh"
str3 = str1 + str2
console.log(str3) //hello Hitesh

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log((3+4)*5%3)
console.log(true)
console.log(+"")

let gameCounter =100;
gameCounter++;//postfix operators
//read mdn documentions
console.log(gameCounter) 

//Link to study 
//https://tc39.es/ecma262/multipage/abstract-operations.html
//mdn read postfix and prefix


