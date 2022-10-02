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

    for (i = 1; i < numText.length; i++) {

        if (Math.abs(numText[i] - numText[i-1]) > 1) {
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

isJumping(9898765);