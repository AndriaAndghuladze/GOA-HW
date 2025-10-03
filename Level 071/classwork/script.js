//1
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let conectArr = arr1.concat(arr2)

conectArr.copyWithin(1, 9, 11)

conectArr.fill(0, 7, 9)

let lastElement = conectArr.pop();     

let firstElement = conectArr.shift();  

conectArr.unshift(10, 20);    

console.log("Modified Array:", conectArr);
console.log("First Element Removed:", firstElement);
console.log("Last Element Removed:", lastElement);