//1
let arr = (prompt('Enter Exam result'))

for(let result of arr){
    if (result < 70){
        console.log('You dont pass the exam')
    }else{
        console.log('You pass')
    }
    
};


//2
let car = {
    brand: 'BMW',
    model: 'M3 e30',
    color: 'Black'
};

for(let txt in car){
    console.log(`Thise is ${car.brand}, model ${car.model} and color ${car.color}`)
}