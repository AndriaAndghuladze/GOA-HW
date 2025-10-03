//1
function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


//2
function gimme (triplet) {
     return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}


//3
function getDivisorsCnt(n) {
  let counter = 0;

  if (n % Math.sqrt(n) == 0) {
    counter++;
  }

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      counter += 2;
    }
  }

  return counter;
}


//4
function getAverage(marks){
 return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


//5
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
