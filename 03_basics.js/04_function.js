//THIS and arrow functions

const user = {
    username:"Vaibhav",
    price:999,

    welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this)
    }
    
}


user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this)

//this keyword show current context 

// function chai(){
//     let username ="Vaibhav"

//     console.log(this.username); //undefined in functions
// }
// chai()

// const chai = function(){
//     let username ="Vaibhav"
//     console.log(this.username); //undefined 
// }
// chai()


const chai = function(){
    let username ="Vaibhav"
    console.log(this.username); //undefined
}
chai()


const chai1 = ()=>{
    let username ="Vaibhav"
    console.log(this.username); //undefined 
}
chai1()


//main functions and arrow functions difference

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => (num1+num2) //react main //without return keyword curly braces using required return keyword
const addTwo = (num1,num2) => ({username:"Vaibhav"}) //arrw fun with wrap username
console.log(addTwo(23,54))

console.log