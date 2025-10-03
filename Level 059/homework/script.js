// #1
// let age = Number(prompt("გთხოვთ შეიყვანოთ თქვენი ასაკი:"));
// let gender = prompt("გთხოვთ შეიყვანოთ თქვენი სქესი (კაცი/ქალი):");
// let income = Number(prompt("გთხოვთ შეიყვანოთ თქვენი თვიური შემოსავალი ლარში:"));

// if (age >= 18) {
//     if (gender === "ქალი") {
//         if (income > 5000) {
//             console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
//         } else if (income > 3000 && income <= 5000) {
//             console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
//         } else {
//             console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
//         }
//     } else if (gender === "კაცი") {
//         if (income > 6000) {
//             console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
//         } else if (income > 4000 && income <= 6000) {
//             console.log("შემოსავალი სტაბილურია");
//         } else {
//             console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
//         }
//     } else {
//         console.log("სქესი არასწორადაა შეყვანილი");
//     }
// } else {
//     console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
// }


// #2
// let age = prompt('enter your age:')

// if(age <=19) {
//     console.log("Take your kindle");
// } else{
//     console.log("okay");
// }


// #3
let color = prompt("Enter color:");

if (color === "red") {
    console.log("1");
} else if (color === "green") {
    console.log("2");
} else if (color === "black") {
    console.log("3");
} else {
    console.log("unknown");
}


// #4
let num = prompt('Enter num:')

if(num % 2){
    console.log('ეს რიცხვი ლუწია')
}else{
    console.log('კენტია')
}


// #5
let temperature = prompt('Enter:')

if(temperature>=20){
    console.log('ცხელა')
}else if(temperature <=20){
    console.log('თბილა')
}else{
    console.log('ცივა')
}


// #6
let n1 = Number(prompt('enter num:'))


if(n1 >=90 ) {
    console.log('Your grade is A')
} else if(n1 >=70 ){
    console.log('Your grade is B')
}else if(n1 >=50){
    console.log('Your grade is C')
}else if(n1 >=25 ){
    console.log('Your grade is D')
}else{
    console.log('ჩაიჭერი ბრატ წადი ისწავლე და მერე მოდი')
}


