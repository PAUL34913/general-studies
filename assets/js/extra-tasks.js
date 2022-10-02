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