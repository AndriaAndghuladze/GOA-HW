//1
const person = { name: "Alice", age: 30, city: "New York" };

let {name, age, city}= person

console.log(name)
console.log(age)
console.log(city)


//2
const person1 = { name: "Alice", age: 30, city: "New York" };


const { name: userName, city: userCity } = person;

console.log(userName); 
console.log(userCity); 


//3
const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

const studentName = student.name;
const mathGrade = student.grades.math;
const scienceGrade = student.grades.science;

console.log(studentName);   
console.log(mathGrade);   
console.log(scienceGrade); 