//1
let btn = document.createElement('button');
btn.textContent = 'Click Me!'

console.log(btn)

btn.style.color = 'red'

btn.remove()


//2
let audi = document.getElementById('audi')
let bmw = document.getElementById('bmw')
let mercedes = document.getElementById('mercedes')

let img = document.querySelector("img")

function audi(){
    img.src = audi.jpeg
}

function bmw(){
    img.src = bmw.jpeg
}

function mercedes(){
    img.src = mercedes.jpeg
}