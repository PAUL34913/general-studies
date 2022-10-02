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

splitString('123 4');