//1
let div = document.getElementById('MyDiv')

div.querySelector.add('highlight')
div.querySelector.remove('highlight')
div.querySelector.toggle('highlight')


//2
let ulli = document.getElementsByClassName(ul)

ulli.querySelector.add(li)


//3
document.getElementById('myparagraph').textContent = 'new p'


//4
let divelem = document.getElementById('stylediv')

divelem.style.backgroundColor = "lightblue"
divelem.style.color = "darkeblue"


//5
let ullist = document.getElementById('list')
let newli= document.createElement('li')
newli.textContent = 'newList'

ullist.appendChild(newli)


//6
let removeul = document.getElementById('remove')

removeul.classList.remove('remove')


//7