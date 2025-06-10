//#1

let info = {
    name: 'Andria',
    lastName: 'Andghuladze',
    age: 14,
    city: 'Tbilisi',
    fawCar: 'BMW e34',
    height: '160m',

    about: function() {
        return `My name is ${this.name}, my last name is ${this.lastName}, age ${this.age}, car ${this.fawCar}, height ${this.height}`;
    }
};

console.log(info.about());
