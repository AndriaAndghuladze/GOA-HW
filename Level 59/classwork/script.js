// #1
let n1 = Number(prompt('enter num:'))
let n2 = Number(prompt('enter num:'))
let n3 = Number(prompt('enter num:'))

let sumNum = (n1 + n2 + n3) / 3

if(sumNum >=90 ) {
    console.log('Your grade is A')
} else if(sumNum >=70 ){
    console.log('Your grade is B')
}else if(sumNum >=50){
    console.log('Your grade is C')
}else if(sumNum >=25 ){
    console.log('Your grade is D')
}else{
    console.log('ჩაიჭერი ბრატ წადი ისწავლე და მერე მოდი')
}