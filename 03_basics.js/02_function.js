//Global and local  scope

var a= 100 //global scope
if(true){
let a=10 //local scope
let b=20
var c=30
// console.log("INNER:",a);
}

// console.log(a)
// console.log(b)
// console.log(c)

//scope level and mini hoisting in javascript

// nasted function scope
function one(){
    const username ="Vaibhav"  //parent var
    function two(){
        const website = "youtube"
        console.log("USERNAME=",username);
    }
    // console.log(website);
    two()
}
// one()

if(true)
{
    const username ="Vaibhav"
    if(username === "Vaibhav"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website);   //error scope not defined
}
// console.log(username)       //error here 

// *************************************intresting*************************************************


console.log(addone(5))  //hoisting
function addone(num){
    return num +1
}

//

addTwo(5)   //error show here becase  //variable hoisted but out of tdz not work 
const addTwo = function(num) //this way of creating function javascript var stored anything 
{
    return num +2
}

add = addTwo(5)
console.log(add)
