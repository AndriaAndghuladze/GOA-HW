//1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  txt() {
    return `გამარჯობა, მე ვარ ${this.name}, ${this.age} წლის.`;
  }
}

let person1 = new Person("ანდრია", 14);

console.log(person1.txt());


//2
class Operative {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  getInfo() {
    return `${this.name}, Rank: ${this.rank}`;
  }

  static compareRanks(op1, op2) {
    if (op1.rank > op2.rank) {
      return `${op1.name}  ${op2.name}`;
    } else if (op1.rank < op2.rank) {
      return `${op2.name}  ${op1.name}`;
    } else {
      return `${op1.name} and ${op2.name} hold the same rank`;
    }
  }
}

class EliteOperative extends Operative {
  constructor(name, rank, specialty) {
    super(name, rank);
    this.specialty = specialty;
  }

  getInfo() {
    return `${this.name}, Rank: ${this.rank}, Specialty: ${this.specialty}`;
  }
}


const op1 = new Operative("Andria", 2);
const op2 = new EliteOperative("nugzari", 4, "Infiltration");

console.log(op1.getInfo());  
2

console.log(op2.getInfo());  


console.log(Operative.compareRanks(op1, op2));  

