//1
let person = {
    name:'Andria',
    lastname: 'Andghuladze',
    age: '14'
};

for(let txt in person){
    console.log(`I'm ${person.name},${person.lastname}and age${person.age}`)

}


//2
let price = {
    bread: 15,
    tea: 3

};

for(sum in price){
    console.log(price.bread + price.tea)
}


//3
let arr = {
    int: 20,
    str:'arr',
    float: 4.5
};

for(int in arr){
    console.log(arr.int)
}


//4
let sum = {
    num1: 15,
    num2: 3

};

for(sum in price){
    console.log(sum.num1 + sum.num2)
}