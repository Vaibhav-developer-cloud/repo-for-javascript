// Singletone 

// myArray = ["v","a"]
// myArray[0]  array cheak using index but object depends on key value pair

//objects literals
const mySym= Symbol("key1") //task iw

const jsuser = {
    name :"Vaibhav",
    "Full Name":"Vaibhav Zore",
   // mySym :"myKey1",   // this type is string not refers above symbol var
   [mySym]:"myKey1",  //write way
    age:18,
    location:"jaipur",
    email:"vaibhav@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(jsuser.email) //
// console.log(jsuser["Full Name"])
// console.log(jsuser["email"])
console.log(typeof jsuser[mySym]) //write way
// console.log(typeof(jsuser.mySym)) //
// Object.freeze(jsuser) //not any changes propogate here
jsuser.email="vaibhavchatgpt@com"
console.log(jsuser)

jsuser.greeting = function(){
    console.log(jsuser.greetings)
}

jsuser.greetingTwo = function(){
    console.log(`hello JS users, ${this.name}`);
}


console.log(jsuser.greetingTwo())