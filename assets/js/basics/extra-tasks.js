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

//Scrolling Text

function scrollingText(word) {

    let arr = [word.toUpperCase()];
    let str1 = word

    console.log(arr);

    for (let i = 0; i < word.length -1; i++) {

        str1 = str1.slice(1, word.length) + str1.slice(0, 1);
        str1 =str1.toUpperCase();
        console.log(str1);

        arr.push(str1);
        console.log(arr);

    }

    return arr;

}

scrollingText('robot');

//Special Numbers

function isSpecialNumber(n) {
    
    let numText = n.toString();
    let msg = '';

    console.log('*** Eagle OS v1.0 ***');
    console.log('');
    console.log('The number you entered is: ' + numText);
    console.log('');
    console.log('The number is ' + numText.length + ' digits long.');
    console.log('');
    console.log('--------------------------------');

    for (let i = 0; i < numText.length; i++) {

        if (numText[i] > 5) {
            console.log(numText[i]);
            console.log('NOT!!');
            msg = 'NOT!!';
            return 'NOT!!';
            
        } else {
            console.log(numText[i]);
            console.log('Special!!');
            msg = 'Special!!';
        }
        
    }

    return 'Special!!';

}

isSpecialNumber(369);

//Is Tidy

function isTidy(number) {

    let numText = number.toString();

    console.log(numText);
    console.log(numText.length);

    for (let i = 1; i < numText.length; i++) {

        if (numText[i] < numText[i-1]) {
            console.log('false');
            return false;
        }

    }

    console.log('true');
    return true;

}

isTidy(12);

//Is Jumping

function isJumping(number) {

    let numText = number.toString();

    console.log('The number you have entered is: ' + numText);
    console.log('There are ' + numText.length + ' numbers in the string');

    if (numText.length < 2) {
        console.log('JUMPING');
        return 'JUMPING';
    }

    console.log('First number is: ' + numText[0]);
    console.log('');

    for (let i = 1; i < numText.length; i++) {

        if (Math.abs(numText[i] - numText[i-1]) > 1) {

            console.log('NOT JUMPING');
            return 'NOT JUMPING';
            
        } else if ((Math.abs(numText[i] - numText[i-1]) === 0)) {

            console.log('NOT JUMPING');
            return 'NOT JUMPING';

        } else {
            
            console.log('Next number is: ' + numText[i]);
            console.log('');
            
        }
    }

    console.log('JUMPING');

    return 'JUMPING';
}