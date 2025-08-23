//1
//elcome. In this kata, you are asked to square every digit of a number and concatenate them.

function squareDigits(num){
  var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
}


//2
//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}


//3
//Digital root is the recursive sum of all the digits in a number.

function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}


//4
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}


//5
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  const lowerStr = str.toLowerCase();
  const uniqueChars = new Set(lowerStr);
  return uniqueChars.size === lowerStr.length;
}