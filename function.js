// function paramiter(num1, num2){
//     let par = num1 * num2;
//     // let par2 = num1 + num2;
//     // console.log(parseFloat(par2))
//     console.log(par)

// }
// let argument = 50;
// let argument2 = 10;
// paramiter(argument, argument2)




// return
// function argument(par1, par2){
//     let multiplication = par1 * par2;
//     return multiplication;

// }
// let store = argument(20,30)
// console.log(store)



// function doMath(par1, par2){
//     let addition = par1 + par2;
//     let substraction= par1 - par2;
//     let divition = addition / substraction;
//     // console.log(divition)
//     let mult = divition * substraction
//     return mult;
// }
// let result = doMath(30,20)
// console.log(result)




// even Number return
// function even (a){
//     if(a % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let evenNum = even(10)
// console.log(evenNum)



function even(a) {
    if (a % 2 === 0) {
        return true
    }
    return false
}
// let evenNum = even(10)
// let evenNum2 = even(11)
// console.log(evenNum)
// console.log(evenNum2)




// odd Number
// function even (a){
//     if(a % 2 === 1){
//         return true
//     }
//         return false
// }

// let evenNum = even(10)
// let evenNum2 = even(11)
// console.log(evenNum)
// console.log(evenNum2)





// string function
function str(str) {
    let strlen = str.length;
    // console.log(strlen)
    if (strlen % 2 === 0) {
        return true
    } else {
        return false
    }

}
let string = str("Dhake")
let strings = str("Bangladesh")
// console.log(string)
// console.log(strings)






// doduble 
function doduble(num, boolean) {
    if (boolean) {
        console.log("result dubole")
        return num * 2;
    } else {
        return num * 3
    }
}
let dublole1 = doduble(10, true)
let dublole2 = doduble(10, false)
// console.log(dublole1)
// console.log(dublole2)





// array 

function funArray(arr) {
    const arrLen = arr.length;
    // console.log(arrLen)
}
funArray([1, 2, 3, 4, 5, 6, 7, 8])



function sums(arr) {
    // console.log(arr)
    let sumRet = 0;
    for (let a of arr) {
        // console.log(a)
        sumRet += a;
        // console.log(sumRet)
    }
    return sumRet;

}

let array = [20, 40, 50]
let sum = sums(array)
console.log(sum)















// function even
function evenSum(e) {
    let sums = 0;
    for (let eve of e) {
        if (eve % 2 === 0) {
            sums+= eve
            
        }
    }
    return sums;

}
let arrayEven = [10, 11, 33, 54, 6, 90]

let evensum = evenSum(arrayEven)
console.log(evensum)