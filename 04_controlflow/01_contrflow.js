// if(2=="2"){
//     console.log("executed");
// }
// else
// {
//     console.log("not executed")
// }

// <,>,<=,>=,==,!=,=== strict equal,!==
// const score = 200;
// if(score >100){
//     const power = "fly"
//     console.log(`user power: ${power}`); //condition true

// }
// console.log(`user power:${power}`) //scope error

const balance =1000;

// if(balance>500) console.log("test"),console.log("test2"); //code is executed but this not good way for write

// if(balance<500)
// {
//     console.log("less than")
// }
// else if(balance < 750){
// console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn =true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard)
{
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromEmail)
{
    console.log("user login")
}

// const month=3;
// switch(month){
//     case 1:
//         console.log("january")
//         break;
//         case 2:
//             console.log("Feb")
//             break;
//         case 3:
//             console.log("March")
//         break;
//         case 4:
//             console.log("April")
//         break;
//         case 5:
//         console.log("May")
//         break;
//         case 6:
//         console.log("June")
//         break;
//     default:
//         break;
// }


//case sensitive 
const month="April";
switch(month){
    case "jan":
        console.log("january")
        break;
        case "feb":
            console.log("Feb")
            break;
        case "March":
            console.log("March")
        break;
        case "April":
            console.log("April")
        break;
        case 5:
        console.log("May")
        break;
        case 6:
        console.log("June")
        break;
    default:
        break;
}

