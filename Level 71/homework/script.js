//1
let numsArray = [1, 2, 3];
let strArray = ["a", "b", "c"];

let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);

combinedArray.fill("filled", 2, 5);

let lastElement = combinedArray.pop();

let firstElement = combinedArray.shift();

combinedArray.unshift(100, 200);

console.log("Modified Array:", combinedArray);
console.log("First Element Removed:", firstElement);
console.log("Last Element Removed:", lastElement);


//2
let people = [{ name: 'Alice' }, { name: 'Bob' }];
let places = [{ city: 'Paris' }, { city: 'London' }];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2);

mergedArray.fill({ city: 'New York' }, mergedArray.length - 2);

let lastElement1 = mergedArray.pop();

let firstElement2 = mergedArray.shift();

mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });

console.log("Modified Array:", mergedArray);
console.log("First Element Removed:", firstElement);
console.log("Last Element Removed:", lastElement);


//3
let mixedArray = [1, 'two', 3, 'four'];

let extendedArray = mixedArray.concat([true, false]);

extendedArray.copyWithin(0, 2, 4);

extendedArray.fill(0, 5);

let lastElement3 = extendedArray.pop();

let firstElement4 = extendedArray.shift();

extendedArray.unshift(null, undefined);

console.log("Modified Array:", extendedArray);
console.log("First Element Removed:", firstElement);
console.log("Last Element Removed:", lastElement);


//4
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];
let arr3 = [8, 9];

let mergedArray1 = arr1.concat(arr2);

mergedArray1.copyWithin(5, 0, 3);

mergedArray1.fill(0, 6);

mergedArray1.pop();

mergedArray1.shift();

mergedArray1.unshift(100, 200);

mergedArray1.splice(2, 2, ...arr3);

let slicedArray = mergedArray1.slice(-5);

let resultString = slicedArray.join(',');

console.log("Result String:", resultString);


//5
let students = ['Alice', 'Bob', 'Charlie'];
let grades = [85, 92, 78];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

function updateGrades(newValue) {
  grades.fill(newValue);
  return grades;
}


//6
let playlist = ['Song A', 'Song B', 'Song C', 'Song D'];

function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  playlist.copyWithin(playlist.length - 2, 0, 2);
  return playlist;
}

function combinePlaylists(secondPlaylist) {
  return playlist.concat(secondPlaylist);
}


//7
let cartItems = ['Apple', 'Banana', 'Orange'];
let prices = [1.2, 0.8, 1.5];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}

function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(', ');
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}


//8
let library = [
  { title: "Book One", author: "Author A", copies: 3 },
  { title: "Book Two", author: "Author B", copies: 5 },
  { title: "Book Three", author: "Author C", copies: 2 }
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function updateBookCopies(title, newCopies) {
  let index = library.findIndex(book => book.title === title);
  if (index !== -1) {
    library.splice(index, 1, { ...library[index], copies: newCopies });
  }
  return library;
}

function listBooks() {
  return library.map(book => book.title).join(', ');
}

function extractBooks(start = 0, end = 2) {
  return library.slice(start, end);
}

function modifyBooks() {
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

function resetCopies(newCopies) {
  library.forEach(book => book.copies = newCopies);
  return library;
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}




