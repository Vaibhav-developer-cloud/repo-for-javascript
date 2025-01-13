const name ="Vaibhav"
const repoCount = 50

// console.log(name + repoCount + "value") // this not good waay write concatitation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  //string interpolation better way 
//modern way write this type of code 

const gameName = new String("Vaibhav")

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())//copy only here becase stack do not change originl value
console.log(gameName.charAt(3)) //which character this position 3
console.log(gameName.indexOf('i')) //this char which position

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7 ,4)
console.log(anotherString)

const newStringOne = "      Vaibhav   "
console.log(newStringOne.trim()) //remove white extra spaces start end remove spaces not mid

const url = "https://vaibhav.com/vaibhav%20zore"
console.log(url.replace('%20', '-'))
console.log(url)
console.log(url.includes('sundar')) //cheachk this string in this string 

//practice with string all functions 


