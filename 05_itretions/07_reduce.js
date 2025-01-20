// reduce method shopping cart use

// const array1 =[1,2,3,4]; //10

// const intialvalue = 0;
// const sumWithIntial = array1.reduce((accumulator,currentValue)=>accumulator+currentValue,intialvalue
// );

// console.log(sumWithIntial);

// //op :10

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval : ${currval}`);
//     // acc:0 and currval : 1
//     // acc:1 and currval : 2
//     // acc:3 and currval : 3
//     return acc +currval
// },0)
// console.log(myTotal)//6

const myNums = [1,2,3]
const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal)

const shoppingcart = [
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile course",
        price:2999
    },
    {
        itemname:"javascript course",
        price:2999
    },
    {
        itemname:"Data science",
        price:12000
    }
]
const priceToPay = shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay)


