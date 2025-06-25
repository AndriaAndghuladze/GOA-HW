//1
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1; 
let day = date.getDate(); // 
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let milisec = date.getMilliseconds();

console.log(`${year}:${month}:${day} - ${hour}:${min}:${sec}:${milisec}`);


//2
function showAge() {
  let input = prompt("Enter birthdate (YYYY-MM-DD):");
  let birth = new Date(input);
  let today = new Date();

  let y = today.getFullYear() - birth.getFullYear();
  let m = today.getMonth() - birth.getMonth();
  let d = today.getDate() - birth.getDate();

  if (d < 0) {
    m--;
    d += 30;
  }

  if (m < 0) {
    y--;
    m += 12;
  }

  console.log(y, m, d);
}

showAge();


//3
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayNum = parseInt(prompt('Enter a number from 1 to 7:'));

if (dayNum >= 1 && dayNum <= 7) {
  alert("Day is: " + days[dayNum - 1]);
} else {
  alert("Invalid number. Please enter a number from 1 to 7.");
}


//4
function sayHi() {
    console.log('Hi');
}
setlnterval(sayHi, 1000);


//5
setInterval(function () {
    console.log(Math.random());
}, 1000)


//6
let message = prompt("Enter your message:");
let delay1 = parseInt(prompt("Enter delay in milliseconds:"));

setTimeout(function () {
    alert(message);
}, delay);let message1 = prompt("Enter your message:");
let delay = parseInt(prompt("Enter delay in milliseconds:"));

setTimeout(function () {
    alert(message);
}, delay);


//7
function sayHi() {
    console.log('Hi');
}
setlnterval(sayHi, 1000);


//8
function firstMessage() {
    console.log("Step 1: Initializing...");
}

function secondMessage() {
    console.log("Step 2: Processing...");
}

function thirdMessage() {
    console.log("Step 3: Done!");
}


setTimeout(firstMessage, 1000);       
setTimeout(secondMessage, 2000);     
setTimeout(thirdMessage, 3000);       

//9
setInterval(function () {
    let hour = new Date().getHours();

    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour < 18) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
}, 1000);
