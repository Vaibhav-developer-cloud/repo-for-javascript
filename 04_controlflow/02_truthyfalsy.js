// const userEmail="Vaibhav@.ai" //truthy
//const userEmail=""//false
// const userEmail=" " //truthy
const userEmail=[] //truthy value

if(userEmail){
    console.log("Got user email")
}else
{
    console.log("Don't have user email");
}

//falsy values
// false,0 -0,BigInt 0n, "",null,undefined,NaN   // this falsy vaues

//truthy values
//"0",[],'false'," ",{},function(){}//empty function

if(userEmail.length===0){
    console.log("Array is empty")
}
const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

// false ==0;
// true //op
// false ==""
// true //op

//Nullish coalescing Operators (??): null undefined 

let val1;
val1 = 5 ?? 10 //database coming two values but first values null,undefined 
// that time codestructure unstable that time usee ?? becase otherwise print 2nd value
val1 = null ?? 10  //here return 2nd value 
console.log(val1)//
val1 = undefined ?? 15
console.log(val1)

//?? null collasion operators

val1 = null ?? 10 ?? 15;
console.log(val1)


//ternary operators
// condition ? true :false

const iceTeaPrice=100;
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")