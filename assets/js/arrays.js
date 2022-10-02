/* Array Basics */

//Create Array

function createArray(N) {

  const numbers = [];

  for (let i = 1; i <= N; i++){
    numbers.push(i);
  }
  return numbers;
}

//Make Stickers

function makeStickers(detailsCount, robotPart) {
  
    let myArray = [];
  
    if (detailsCount === 0) {
      return myArray;
    }
  
    for (let i = 1; i <= detailsCount; i++) {
      myArray.push(`${robotPart} detail #${i}`);
    }
  
    return myArray;
  
  }

  //Doubles Numbers in Array

  function doublePower(currentPowers) {

    let myArray = []; 
    let value = '';
    
      if (currentPowers === '') {
        console.log(myArray);
      } else {
          for (let i = 0; i <= currentPowers.length -1; i++) {
            value = currentPowers[i];
            console.log(value*2);
            myArray.push(value*2);
          }
          
        return (myArray);
      }
    
    }

    //Checking if numbers are sorted

    function isSorted(boxNumbers) {

      console.log(boxNumbers);
  
      if (boxNumbers.length === 0) {
          console.log('this is an empty array');
          return true;
      } else if (boxNumbers.length === 1) {
          console.log('true');
          return true;
      } else {
          for (let i = 1; i <= boxNumbers.length -1; i++) {
              if (boxNumbers[i] >= boxNumbers[i -1]) {
                  console.log(boxNumbers[i]);
                  console.log(boxNumbers[i-1]);
                  console.log('true');
              } else {
                  console.log(boxNumbers[i]);
                  console.log(boxNumbers[i-1]);
                  console.log(false);
                  return false;
              }
          }
          return true;
      }kjyl6p7-lop-7
  
  }
  
  isSorted(['1', '9', '3']);

  // Get location

  function getLocation(coordinates, commands) {
  
    let x = coordinates[0];
    let y = coordinates[1];
    let myArray = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'forward') {
            y = y + 1;
        } else if (commands[i] === 'back') {
            y = y - 1;
        } else if (commands[i] === 'right') {
            x = x + 1;
        } else if (commands[i] === 'left') {
            x = x - 1;
        }
    }

    myArray = [x, y];
    console.log(myArray);
    return myArray;

}

getLocation([2, 3], ['back', 'back', 'back', 'right']);

//Get plan (production increase)

function getPlan(startProduction, numberOfMonths, percent) {

  let goals = [];
  let currentProduction = startProduction;
  let value = 0;

  for (let i = 1; i <= numberOfMonths; i++) {
      value = Math.floor((currentProduction / 100 * percent) + currentProduction);
      goals.push(value);
      currentProduction = value;
      console.log(goals);
  }

  return goals;

}

// Get Speed Statistics

function getSpeedStatistic(testResults) {

  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;
  let average = 0;
  let myArray = [];

  if (testResults.length === 0) {

      console.log(`***Eagle OS Version 1.0 ***

User Message: Array is empty, please enter a value.`);
      return [0, 0, 0];

  } else {

      for (let i = 0; i < testResults.length; i++) {

          if (testResults[i] > max) {
              max = testResults[i];
          } else if (testResults[i] < min) {
              min = testResults[i];
          }

          sum = sum + testResults[i];
          
      }

      console.log(min);
      console.log(max);
      console.log(sum);
      average = Math.floor(sum / testResults.length);
      console.log(average);
      myArray = [min, max, average];
      console.log(myArray);
      return myArray;

  }

}

getSpeedStatistic([10, 20]);

//Compare Robots

function compareRobots(firstRobotResults, secondRobotResults) {
  
  let firstSum = 0;
  let secondSum = 0;
  let message = '';

  for (let i = 0; i < firstRobotResults.length; i++) {
      firstSum += firstRobotResults[i];
  }

  for (let i = 0; i < secondRobotResults.length; i++) {
      secondSum += secondRobotResults[i];
  }

  console.log('First robots total weight for the day: ' + firstSum);
  console.log('Second robots total weight for the day: ' + secondSum);
  console.log('');

  if (firstSum > secondSum) {
      message = 'First robot for sale!';
      console.log(message);
      return message;
  } else if (firstSum < secondSum) {
      message = 'Second robot for sale!';
      console.log(message);
      return message;
  } else {
      message = 'Both robots for sale!';
      console.log(message);
      return message;
  }


}

compareRobots([1, 3, 4], [1, 1, 4, 5]);