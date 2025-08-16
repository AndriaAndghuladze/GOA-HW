//1
let img = ['dowload.webp','dowload.webp1', 'dowload.webp3' ]

let num = 0 

function first(){
    var slide = document.getElementById('slide')
    num++
    if(num >= img.length){
        num = 0
    }
    slider.src = img[num]
}

function secod(){
    var slide = document.getElementById('slide')
    num++
    if(num >= img.length){
        num = 1
    }
    slider.src = img[num]
}

function third(){
    var slide = document.getElementById('slide')
    num++
    if(num >= img.length){
        num = 2
    }
    slider.src = img[num]
}