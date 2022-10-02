/* Loops */

//Print Numbers

function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }
  
  //Print Number 2
  
  function printNumbers(N) {
    for (let i = 1; i <= N; i++) {
      console.log(i);
    }
  }
  
  //Step Loop
  
  function printNumbersWithStep(N, step) {
    for (let i=1; i<=N; i+=step) {
      console.log(i);
    }
  }
  
  //Backward Loop
  
  function printNumbersBackwards(N) {
    for (let i = N; i > 0; i--)
    console.log(i);
  }
  
  //Get Drinks Number of Guests
  
  function getDrinks(numberOfGuests) {
  
    let sum = 0;
    
      if (numberOfGuests === 0){
       
        return 0;
    
      } else {
    
        for (let i = 1; i <= numberOfGuests; i++){
    
        sum += i;
    
        }
    
        return sum;
        
      }
    
    }
  
  //Get Drinks with Step
  
  function getDrinksWithStep(numberOfGuests, step) {
  
    let sum = 0;
    
      if (numberOfGuests === 0){
      
        return 0;
      
      } else {
      
        for (let i = 1; i <= numberOfGuests; i += step){
    
          sum += i;
    
        }
    
        return sum;
    
      }
    }
  
  //Calculate Profit
  
  function calculateProfit(amount, percent, period) {
  
    let sum = amount;
    let rate = amount / 100 * percent;
  
    if (sum === 0){
      return 0;
    } else {
      for (let i = 1; i <= period; i+=1){
        sum = sum + rate;
        rate = sum / 100 * percent;
      }
    }
    
    sum = sum - amount
  
    return sum;
  
  }