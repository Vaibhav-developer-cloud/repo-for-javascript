//function
// console.log("V")
// console.log("A")
// console.log("I")
// console.log("B")
// console.log("H")
// console.log("A")
// console.log("V")

function sayMyName(){
    console.log("V")
console.log("A")
console.log("I")
console.log("B")
console.log("H")
console.log("A")
console.log("V")
}

// sayMyName()

// function addTwoNumbers(number1,number2){  //(number1,number2)
//     console.log(number1 +number2)
// }
// const result = addTwoNumbers(67,76) //argument 
// console.log("Results:",result)  //result value return undefined

function addTwoNumbers(number1,number2){ 
    let result = number1+number2
    return result;  //that time returns always function stored in variable
}
const result = addTwoNumbers(67,76) 
console.log("Results:",result) 

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username");
        return;      //this condition true because of next return not execute 
    }
    return `${username} just logged in` //condition false than run this return statement
}
console.log(loginUserMessage("vaibhav")) // empty variable return undefined
// console.log(loginUserMessage())

//function with objects and array
function calculatecartprice(val1,val2,...num1){ //... rest operatos means merge all varaibles and stored in one variable like arrasy
    return num1  //op num2=500,2000 becase val1=200,val2=400
}
console.log(calculatecartprice(200,400,500,2000))
const user ={
    username : "Vaibhav",
    price:199    //change prices change name
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({username:"Niket",
    price:299
})
const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,500,10000]))

