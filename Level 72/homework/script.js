//1
// function year(){
//     if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }



// let year = parseInt(prompt("Enter a year:"));
// if (Year(year)) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }


//2
function pay(){
    let pearsons = ['Nina', 'Dato', 'Givi', 'Nugzari', 'Ani']

    let randomPerson = Math.floor(Math.random) * pearsons.length

    console.log(`${randomPerson} would pay`)
}

pay()


//3

let num = int(prompt('Enter Num'))

if (num % 3 === 0 && num % 5 === 0) {
    console.log('Num is FizzBuzz');
} else if (num % 3 === 0) {
    console.log('Num is Fizz');
} else if (num % 5 === 0) {
    console.log('Num is Buzz');
} else {
    console.log('Num is not Fizz or Buzz');
}



//4
let N = parseInt(prompt("შეიყვანე რამდენი შემთხვევითი რიცხვი გენერირდეს:"));
let numbers = [];
let sum = 0;

for (let i = 0; i < N; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1; // 1-დან 100-მდე შემთხვევითი რიცხვი
    numbers.push(randomNum);
    sum += randomNum;
}

let average = sum / N;

console.log("შემთხვევითი რიცხვები:", numbers);
console.log("საშუალო არითმეტიკული:", average);


