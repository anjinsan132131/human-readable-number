const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const numbersTens = [0, 1, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
  
  let res = '';

  if (number < 20) {
      res = numbers[number];
  } else if (number < 100) {
      if (number % 10 === 0) {
          res = numbersTens[(number - number % 10) / 10];
      } else {
          res = numbersTens[(number - number % 10) / 10] + ' ' + numbers[number % 10];
      }  
  } else {
      res = numbers[(number - number % 100) / 100] + ' hundred';
      if (number % 100 === 0) {
          return res;
      } 
      number = number % 100;
      if (number < 20) {
          res = res + ' ' + numbers[number];
      } else if (number < 100) {
          if (number % 10 === 0) {
              res = res + ' ' + numbersTens[(number - number % 10) / 10];
          } else {
              res = res + ' ' + numbersTens[(number - number % 10) / 10] + ' ' + numbers[number % 10];
          }
      }
  }

  return res;
}