//1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)


//2
let arr1 = ['name:Andria']
let arr2 = ['LastName:Andghuladze']

let full = arr1.concat(arr2)
console.log(full)


//3
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let length = arr4.push(11)

console.log(length)


//4
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Pop = arr5.pop();

console.log(Pop);


//5
let arr6 = ['name:Andria']
let arr7 = ['LastName:Andghuladze']

let Full = arr6.concat(arr7)
Full.push()

console.log(Full)


//6
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sumArray(arr8);
console.log(result);


//7
function getEvenIndexedElements(arr9) {
  let result = [];
  for (let i = 0; i < arr9.length; i++) {
    if (i % 2 === 0) {
      result.push(arr9[i]);
    }
  }
  return result;
}

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenIndexed = getEvenIndexedElements(arr9);
console.log(evenIndexed);


//8
function getStringLengths(arr0) {
  let lengths = [];
  for (let i = 0; i < arr0.length; i++) {
    lengths.push(arr0[i].length);
  }
  return lengths;
}

let words = ["Andria", "JavaScript", "Code", "Fun"];
let result1 = getStringLengths(words);
console.log(result1);

