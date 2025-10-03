//1

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  
}


//2

//Given an integral number, determine if it's a square number:
var isSquare = function(n) {
    if (n < 0) {
      return false;
    } else {
      return Number.isInteger(Math.sqrt(n));
    }
  };
  

//3

//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s) {
    let res = '';
     
     for (let i = 0; i < s.length; i++) {
       if ('aeiouAEIOU'.includes(s[i])) {
         res += '!';
       } else {
         res += s[i];
       }
     }
   
     return res;
   }
   