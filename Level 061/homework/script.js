// #1
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// #2
let sq = 0;

for (let i = 1; i <= 10; i++) {
    sq += i;
}

console.log(sq * sq);


// #3
let text = "Hello";

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// #4
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
