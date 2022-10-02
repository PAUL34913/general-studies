/* Strings */

//Get String Length

function getStringLength(input) {
    return input.length;
  }
  
  //Is Substring
  
  function isSubstring(phrase, part) {
    if (phrase.includes(part)) {
      return true;
    } else {
      return false;
    }
  }
  
  //Count M's
  
  function countMs(text) {
    let count = 0;
  
    for (const char of text) {
      // we check if char is 'm' or 'M'
      if ('Mm'.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  //Remove Vowels
  
  function removeVowels(doc) {
  
    let value = '';
  
    for (const char of doc) {
  
      if ('AaEeIiOoUuYy'.includes(char)) {
        value = value
      } else {
        value = value += char
      }
  
    }
  
    return value;
  
  }
  
  //Make Abbreviation
  
  function makeAbbr(words) {
    let abbreviation = words[0];
  
    for (let i = 1; i < words.length; i ++) {
      if (words[i] === ' ') {
        abbreviation = abbreviation += words[i +1];
        console.log(abbreviation);
      }
    }
    
    console.log(abbreviation.toUpperCase);
    return abbreviation.toUpperCase();
    
    
  }
  
  makeAbbr('national aerospace society ahhh');
  
  //Decrypt Message
  
  function decryptMessage(message) {
   
    let result = '';
  
    for (let i = message.length -1; i >= 0; i--) {
      result += message[i];
    }
    return result;
  }
  
  //Detect Werewolf
  
  function isWerewolf(target) {
  
    let direct = '';
    let reversed = '';
  
    for (const char of target) {
  
      if (char !== ' ' && char.toLowerCase() !== char.toUpperCase()) {
  
        direct += char;
        reversed = `${char}${reversed}`
        console.log(char);
  
      }
  
    }
  
  direct = direct.toLowerCase();
  reversed = reversed.toLowerCase();
  
  console.log(direct);
  console.log(reversed);
  
  return direct === reversed;
  
  }
  
  //Get Success Rate
  
  function getSuccessRate(statistic) {
   
    let count = 0;
    let total = 0;
    let value = 0;
  
    for (const char of statistic) {
      total ++;
      if (char === '1') {
        count ++;
      } 
    } 
  
    if (statistic === '') {
      return 0;
    }
  
    console.log(count);
    console.log(total);
  
    value = Math.round((count / total) * 100);
    return value;
  }