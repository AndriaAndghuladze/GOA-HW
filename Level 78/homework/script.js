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


//2
let imgs = ['dowload.webp','dowload.webp1', 'dowload.webp3' ]

let nums = 0 

function first(){
    var slide = document.getElementById('slide')
    nums++
    if(nums >= img.length){
        nums = 0
    }
    slider.src = img[num]
}

function secod(){
    var slide = document.getElementById('slide')
    nums++
    if(nums >= imgs.length){
        nums = 1
    }
    slider.src = imgs[nums]
}