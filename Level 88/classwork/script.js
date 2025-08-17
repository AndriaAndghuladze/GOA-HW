//1
let arr = [100, [200, 300, 400,] ,500]

let [a, [b, c, d,], e] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

////////////////

let x = 50
let y = 60

[x,y] = [y, x]

console.log(y)
console.log(x)


//2
let person = {
    name:'andria',
    lastName:'andghuladze'
    
}

let {name, lastName} = person

console.log(name, lastName)

//////////////

let user = {
    phonenum: 3456,
        info:{
            name: ' andria',
            lastname:'andghuladze'
        }
    
}
console.log(name, lastname)

//////////////////////

const book = { title: "haryyPoter", pages: 120 };


const { title: bookTitle, pages: totalPages } = book;

console.log(bookTitle);  
console.log(totalPages); 
