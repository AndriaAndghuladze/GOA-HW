//1
//Implement a function to calculate the sum of the numerical values in a nested list. For example :

const sumNested = arr => {
  let [a, [b, [c, [d]]]] = arr;
  
  let sum =  a + b + c + d; 
  return sum

};


//2
//Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let result = '';
  for (let i = 0; i < n; i++){
    result += s;
  }
  return result;
}


//3
//Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

function removeChar(str){
  let  arr = str.split("");
  arr.shift();
  arr.pop();
  return arr.join("");

};


//4
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  const lowerStr = str.toLowerCase();
  const uniqueChars = new Set(lowerStr);
  return uniqueChars.size === lowerStr.length;
}