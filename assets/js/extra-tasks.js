/* Extra Tasks */

//Check number is positive, even and divisible by ten

function checkNumber(number) {

    let positive = true;
    let even = true;
    let byTen = true;
    let myArray = [];
    
    if (Math.sign(number) === 1) {
        console.log('true');
        positive = true;        
    }

    if (Math.sign(number) !== 1) {
        console.log('false');
        positive = false;
        
    }
    
    if (number % 2 === 0) {
        console.log('true');
        even = true;
    }

    if (number % 2 !== 0) {
        console.log('false');
        even = false;
    }

    if (number % 10 === 0) {
        console.log('true');
        byTen = true;
    }

    if (number % 10 !== 0) {
        console.log('true');
        byTen = false;
    }

    myArray = [positive, even, byTen];
    console.log(myArray);
    return myArray;
}

checkNumber(3);

//Get Array Sum

function getArraysSum(arr1, arr2) {
    
    let sum1 = 0;
    let sum2 = 0;
    let total = 0;
    
    for (const char of arr1) {

        console.log(char);
        sum1 += char;
        console.log(sum1);

    }

    for (const char of arr2) {

        console.log(char);
        sum2 += char;
        console.log(sum2);

    }

    total = sum1 + sum2;
    console.log(total);

    return total;
}

//Combine Arrays

function combineArrays(first, second) {

    let result = [];

    for (let i = 0; i < first.length; i++) {

        result[i] = first[i] + second[i]

    } 

    console.log(result);
    
    return result;

}

combineArrays([], []);

//Split String

function splitString(str) {
  
    let arr = [];
    let str1 = '';

    console.log(arr);
    console.log(str1);

    for (let i = 0; i < str.length; i+=2) {

        if (str[i+1] === undefined) {

            str1 = str[i] + '_';
                       
        } else {

            str1 = str[i] + str[i+1]
            console.log(str1);
        }

        arr.push(str1);
        console.log(arr);
    }

    return arr;
}