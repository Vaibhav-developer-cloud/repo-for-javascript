// const tinderuser = new Objects() //singletone objects
const tinderuser ={}  //non singletone objects

tinderuser.id ="123456"
tinderuser.name = "samay"
tinderuser.isLoggedIn=false
// console.log(tinderuser)

const regularUser ={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Vaibhav",
        lastname : "Zore"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname); //optional chaining fullname? questionmark like api call anytime and dont have exists fullname that time use this concept

//iw optional chaining

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj4}   //spread operators use multiple obj in to one as same for array
console.log(obj3)

//users coming from database as array of object
const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


//cheak all properties object inspect console