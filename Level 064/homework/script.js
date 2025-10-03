// #1
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error: Division by zero';
    case '**':
      return a ** b;
    case '%':
      return b !== 0 ? a % b : 'Error: Division by zero';
    default:
      return 'Error: Unsupported operator';
  }
}

console.log(calculate(5, 3, '+'));  
console.log(calculate(5, 3, '-'));  
console.log(calculate(5, 3, '*'));  
console.log(calculate(5, 3, '/'));  
console.log(calculate(5, 3, '**')); 
console.log(calculate(5, 3, '%'));  


// #2

//1.
for (let i = 1; i <= 20; i++) {
  if (i === 7 || i === 13) continue;
  console.log(i);
}

// 2.
for (let i = 1; i <= 100; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}


// #3
function sumOfSquares(a, b) {
  return a * a + b * b;
}

console.log(sumOfSquares(3, 4)); 
console.log(sumOfSquares(5, 2));


// #4
function isEven(n) {
  if (n % 2 === 0) {
    return "even".repeat(1); 
  } else {
    return "odd".repeat(1); 
  }
}


// #5
function repeatString(str, times) {
  return str.repeat(times);
}

console.log(repeatString("Hi", 3));   
console.log(repeatString("JS!", 5));


// #6
function longerWord(word1, word2) {
  if (word1.length > word2.length) {
    return word1;
  } else if (word2.length > word1.length) {
    return word2;
  } else {
    return "equal";
  }
}

console.log(longerWord("apple", "banana")); 
console.log(longerWord("cat", "dog"));      
console.log(longerWord("sun", "moon")); 


// #7
function toFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  console.log(fahrenheit);
}


//#8
function isPositive(number) {
  if (number > 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}


// #9
function double(n) {
  console.log(n * 2);
}

double(5)


// #10
function fullName(first, last) {
  console.log(first + " " + last);
}


// #11
function isAdult(age) {
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
}


// #12
function hasA(word) {
  if (word.includes('a') || word.includes('A')) {
    console.log("yes");
  } else {
    console.log("no");
  }
}


// #13
function sameLastDigit(a, b) {
  if (a % 10 === b % 10) {
    console.log("same");
  } else {
    console.log("different");
  }
}


// #14
function evenOrOdd(n) {
  console.log(n % 2 === 0 ? "even" : "odd");
}


// #15
function isShort(text) {
  console.log(text.length < 5 ? "short" : "long");
}


// #16
function numberSign(n) {
  console.log(
    n > 0 ? "positive" :
    n === 0 ? "zero" :
    "negative"
  );
}

numberSign(5);