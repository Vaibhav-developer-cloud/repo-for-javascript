const myNumbers =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num)=> num+10) //similar to here filter
// console.log(newNums) 
// const newArr=[]
// myNumbers.forEach((num)=>
// {
//  newArr.push(num+10)
// })
// console.log(newArr) //this using foreach

//chaining
const newNums = myNumbers
                .map((num) => num*10) //
                .map((num)=>num+1)  //here value direct 10 is first vaue stored in num 
                .filter((num) =>num>=40)

                console.log(newNums)


