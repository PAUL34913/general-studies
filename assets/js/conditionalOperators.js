/* Conditional Operators */

//Can Buy Beer

function canBuyBeer(age){
  if (age >= 18){
    return 'You can buy beer';
  } else {
    return 'You can not buy beer';
  }
}

//Get Tips Rating

function getTipsRating(amount) {
  if (amount === 0){
    return 'terrible';
  } else if (amount > 0 && amount < 11){
    return 'poor';
  } else if (amount > 10 && amount < 21){
    return 'good';
  } else if (amount > 20 && amount < 51){
    return 'great';
  } else {
    return 'excellent';
  }
}

//Calculate Taxes

function calculateTaxes(income) {
  if (income < 1001){
    return income * 0.02;
  } else if (income >1000 && income <10001){
    return income * 0.03;
  } else {
    return income * 0.05;
  }
}

//Return Largest Expression of Two

function getLargestExpressionResultOfTwo(a, b) {
  if ((a + b) > (a - b)){
    return a + b;
  } 
  if ((a + b) < (a - b)){
    return a - b;
  }
}

//Return Largest Expression of Three

function getLargestExpressionResultOfThree(a, b) {
  
  const num1 = a + b;
  const num2 = a - b;
  const num3 = a * b;

  if (num1 > num2 && num1 > num3){
    return num1;
  }
  if (num2 > num3 && num2 > num1){
    return num2;
  }
  if (num3 > num1 && num3 > num2){
    return num3;
  }
}

//Get Largest Expression

function getLargestExpressionResult (a, b){

  const num1 = a + b;
  const num2 = a - b;
  const num3 = a * b;
  const num4 = a / b;
  let largest = num1;

  if (num2 > largest){
    largest = num2;
  }
  if (num3 > largest){
    largest = num3;
  }
  if (num4 > largest){
    largest = num4;
  }

  return largest;

}