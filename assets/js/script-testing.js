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