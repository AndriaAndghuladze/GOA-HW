//1
let student = [
    {name: 'Ana', grade:95,},
    {name: 'Luka', grade:82,},
    {name: 'Nino', grade:68,},
    {name: 'Giorgi', grade:74,},
    {name: 'Nugzari', grade:91,},
]

let allPAs = student.every(student => student.grade >= 70)

let hasFall = student.some(student => student.grade < 65)

student.forEach(student =>{
    console.log(`studen: ${student.name}`)
})

let honorRol = []

student.forEach(student => {
    if(student.grade >= 90){
        honorRol.push(student.name)
    }
})


console.log('AllPasing:', allPAs)
console.log('has fall', hasFall)
console.log('honorrole', honorRol)