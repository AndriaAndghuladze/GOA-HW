//#1
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;

  this.introduce = function() {
    console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
  };
}

const person1 = new Person("Andria", 14, "student");
person1.introduce();


//#2
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
}

const book1 = new Book("შოთა რუსთაველი", "კაცია ადამიანი", 1988);
const book2 = new Book("ვეფხის ტყაოსანი", "შოთა რუსთაველი", 1949);
const book3 = new Book("აკაკი წერეთლი", "მარიტა", 12);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());


//#3
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function(newPassword) {
    this.password = newPassword;
  };

  this.getDetails = function() {
    return {
      username: this.username,
      email: this.email
    };
  };
}

const user1 = new User("andria14", "andria@example.com", "mypassword123");

user1.changePassword("newStrongPassword!");
console.log(user1.getDetails());
