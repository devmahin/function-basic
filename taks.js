// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function Multiply(num1, num2, num3, num4) {
    let multiplication = num1 * num2 * num3 * num4
    return multiplication;

}
let result = Multiply(5, 5, 5, 5);
// console.log(result);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function takeNumber(num) {
    if (num % 2 === 1) {
        return num * 2;
    } else {
        return num / 2;
    }
}
// let num1 = takeNumber(10)
// let num2 = takeNumber(11)
// console.log(num1)
// console.log(num2)


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function make_avg(arr) {
    if (arr.length === 0) {
        return "please submit subject"; // If array size is 0, return 0 to avoid division by zero
    }

    let total = 0;
    for (let avg of arr) {
        total += avg
    }
    let average = total / arr.length;
    // console.log(total)
    return average
}
let array = [11, 50]
let avg = make_avg(array)
// console.log(avg)


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function count_zero(binary) {
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        // console.log(binar)
        if (binary[i] !== "0") {
            // console.log()
            count++;
        }
    }
    return count;
}
let zero_and_one = count_zero("00000111111111");
// console.log(zero_and_one)




// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(numbers){
    let result;
   if(numbers % 2 === 0){
    result = "value is even"
   }else{
    result = "value is odd"
   }
   return result;
}


console.log(

odd_even(112323441)

)
console.log(

odd_even(112323442)

)