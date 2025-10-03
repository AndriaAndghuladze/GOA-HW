//1
let paragraph = document.createElement('p') 
paragraph.textContent = 'Hello word'
document.body.appendChild(paragraph)


//2
let h2 = document.createElement('h2') 
h2.textContent = 'SUBHEADING'
document.body.appendChild(h2)


//3
document.body.appendChild(div)
document.body.removeChild(div)


//4
document.body.appendChild(ul)
console.log(ul)


//5
let elem = document.querySelector('h3')
let firstelem = elem.firstElementChild

console.log(firstelem)


//6