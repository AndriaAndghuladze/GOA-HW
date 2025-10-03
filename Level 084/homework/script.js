//1
let arr = [
    {name: 'andria', email:'gfd2.gfd@'},
    {name: 'nugzari', email:'nugzari@f'},

]

let formEmail = arr.map(email => email.email)
console.log(formEmail)


//2
let num = [43, 542, 6543, 5432, 1234, 3223]

let filted = num.filter(nums => nums.arr % 2)
console.log(filted)