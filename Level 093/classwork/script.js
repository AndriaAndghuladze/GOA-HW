//1
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; 
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `You borrowed "${this.title}".`;
        } else {
            return `Sorry, "${this.title}" is not available.`;
        }
    }
}


const book1 = new Book("1984", "George Orwell");

console.log(book1.borrow()); 
console.log(book1.borrow()); 


//2
let map = new Map([
  ['emzari', 'gaiozi'],
  ['nugzari', 'stangeri'],
  ['andria', 'beqa'],
  ['tavadze', 'giviai'],
  ['polika', 'gia']
]);

console.log(map.size)

for (let [key, value] of map.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

console.log(map.has('andria'));  
console.log(map.has('giorgi'));



//3
let set = new set (['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3', '3', '3', '3', ])
console.log(set)