//1
function sumNums(...numbers) {
    if (numbers.length === 0) console.log (0);

  
  console.log (numbers.reduce((sum, num) => sum + num, 0));
 
}

console.log(sumNums()); 
console.log(sumNums(3, 90, 7, 400)); 
console.log(sumNums(10, -100, -10));