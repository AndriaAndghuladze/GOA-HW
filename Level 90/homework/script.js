//1
function collect(...args){
    console.log(args)
}

console.log(collect(13, 2341,3))


//2
function sumAll(...sum){
    console.log(sum)
}

console.log(sumAll(4356, 432, 6543, 321, 321))


//3
function excludeFirst(first, ...rest) {
  return rest;
}


console.log(excludeFirst(1, 2, 3, 4)); 


//4
function logExceptLast(...items) {
  items.slice(0, -1).forEach(item => console.log(item));
}


logExceptLast(1, 2, 3, 4);


//5
let arr = [1, 2, 3, 4, 5]

let [a, b, ...c] = arr

console.log(arr)


//6
user = { name: "Davit",
        age: 25,
        role: "admin", 
        active: true }

let {name, age,  ...anothet} = user

console.log(name)
console.log(age)
console.log(anothet)


