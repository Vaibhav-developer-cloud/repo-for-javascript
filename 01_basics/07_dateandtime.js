// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)    //iw questions  which type for date =object


// let myCreateDate = new Date(2023,0,23)  //month is start from 0 = jan 1= feb

// let myCreateDate = new Date(2023,0,23,5,3) //timing 5:03:00 AM 

// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")

console.log(myCreateDate.toLocaleString())
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())
// console.log(myCreateDate.toLocaleString());

//note how to use on date injavascript using multiple functions available for date

//Timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime())
console.log(Date.now());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone:''
})
 //iw questions

