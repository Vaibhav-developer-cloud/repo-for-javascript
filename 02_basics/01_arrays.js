// Array 
// javascript array is resizable
//array access using index
//using refernce crate copy and manipulate data 

const myArr = [0,1,2,3,4,5]
const myheros =["Shaktiman","naagraj"]

// array in lenghth
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])

// Array methods 

// myArr.push(6) //last element add at position array

// console.log(myArr)

// myArr.pop() //last element remove from array
// myArr.unshift(9) //add at starting position
// myArr.shift() //remove first position element


// console.log(myArr.includes(9)) //return boolean value
// console.log(myArr.indexOf(19)) //not exists value retunn always -1 otherwise exists value return

// const newArr = myArr.join() //array converts in string
// console.log(myArr);
// console.log(newArr);
// slice,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3) //return index value 1 and 2 3 is exclude [1,2]
console.log("B",myArr)
console.log(myn1)
const myn2 = myArr.splice(1,3) //
console.log("C",myArr); //after using splice change in main original array [0,4,5]
//iw question splice vs slice
//slice is not changes in original array but splice is manipulate original array 
console.log(myn2);


//you can cheak all array function on console browser in prototype under