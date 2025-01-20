// High order Array loops 
// for of loop
//for in loop
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }
// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

//Maps
//object key value pair
// const map = new Map()
// map.set('IN','India')
// map.set('USA','United State')
// map.set('Fr',"France")
// map.set("In","India")

// console.log(map)

// for (const [key,value] of map) {  //destructured here 
//     console.log(key, ':-',value)
// }

// const myObject ={
//     'game1': 'NFS',
//     'game2':'spiderman'
// }

// const myObject ={
//     game1: 'NFS',
//     game2:'spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// } //object is not itrable

// const myObject ={
//     js:'javascript',
//     cpp:'C++',
//     Swift:"Swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut for ${myObject[key]}`);
// }  //for in

// const programming = ["js","rb","py","java","cpp"]

// for(const key in programming)
// {
//     console.log(programming[key])
// }

const map = new Map()
map.set('IN','India')
map.set('USA','United State')
map.set('Fr',"France")
map.set("In","India")

for (const key in map) {
    console.log(key);
}

