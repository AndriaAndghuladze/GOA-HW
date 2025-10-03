//1
let academy = {
    name: 'GOA',
    courses: 'Python, JavaScript, Web Development',
    socialLink: 'link://goa.ge',
    reviews: [
        {
            name: 'Andria',
            status: 'parent',
            review: 'Great learning environment!'
        },
        {
            name: 'Nia',
            status: 'child',
            review: 'Really fun and educational courses!'
        },
        {
            name: 'Giorgi',
            status: 'parent',
            review: 'My child loves the classes!'
        }
    ]
};

console.log(Object.keys(academy));

console.log(Object.values(academy));

let propertyToCheck = 'name';
console.log(academy.hasOwnProperty(propertyToCheck)); 

let newObject = {
    
    member: '1000+ active members'
};

console.log(newObject);

Object.freeze(academy);

console.log(Object.isFrozen(academy)); 

academy.name = 'New Name';

console.log(academy.name); 