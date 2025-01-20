const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {   //foreach callback arrow  function
//     // console.log(item)
//     return item
// })//foreach any time do not return value
// console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((num)=>num>4) //using circuler parntesis self return this condition arrow fun //callback functio in filter
// console.log(newNums)  //filter always return but foreach not return

//main diff filter and foreach filter is condition is want

// 

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>{ 
//     return num>4  //after adding {} curly paranthesis explicitly return not self return because of create scope{}
// }  )
// console.log(newNums)


//foreach in same use this like condition //filter easy way taking option direct condition and array print 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums =[]
//foreach is create new empty array write condition and push using this condition new array 
myNums.forEach((num) => {
    if(num>4){  //but logic here extra and filter easy
        newNums.push(num)
    }
});
console.log(newNums)



const books =[
    {'title': 'Book One', 'genre': 'Fiction', 'publish': 1981, 'edition': 2004},
    {'title': 'Book Two', 'genre': 'Non-Fiction', 'publish': 1995, 'edition': 2007},
    {'title': 'Book Three', 'genre': 'Mystery', 'publish': 2000, 'edition': 2010},
    {'title': 'Book Four', 'genre': 'Romance', 'publish': 1988, 'edition': 2001},
    {'title': 'Book Five', 'genre': 'History', 'publish': 2000, 'edition': 2005},
    {'title': 'Book Six', 'genre': 'Thriller', 'publish': 1999, 'edition': 2008},
    {'title': 'Book Seven', 'genre': 'Science Fiction', 'publish': 1985, 'edition': 2002},
    {'title': 'Book Eight', 'genre': 'Biography', 'publish': 1978, 'edition': 1996},
    {'title': 'Book Nine', 'genre': 'History', 'publish': 1992, 'edition': 2003},
    {'title': 'Book Ten', 'genre': 'Adventure', 'publish': 1983, 'edition': 2000},
];

// const userBooks=books.filter((bk)=>(bk.genre==='History'))
let userBooks=books.filter((bk)=>(bk.genre==='History'))
// userBooks=books.filter((bk)=>(bk.publish>=2000)) //const is not redecareTypeError: Assignment to constant variable.let you can change after iniialization same var
userBooks=books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre=='History' })  //afte open scope {} mannualyy return otherwise you can auto but in circular brackets
console.log(userBooks);

userBooks = books


