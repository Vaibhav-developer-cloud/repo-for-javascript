let myYoutubeName = "My.com"
let anothername = myYoutubeName //copy store in here
anothername = "chaiaurcode"  //original value

console.log(myYoutubeName)
console.log(anothername);


//reference non primitive store in heap memory

let userOne={
    email:"user@google.com",
    upi :"user@ybl"
}

let userTwo = userOne
userTwo.email ="vaibhav@gmail,.com"
console.log(userOne.email)
console.log(userTwo.email)

//object is stored in heap menmory becaseof change refernce value

//Stack(Primitive)       Heap(Non-Primitive)