//1
let btn = document.querySelector('button')

function up(){
    btn.classList.add('button')
    btn.classList.remove(down)
}

function down(){
    btn.classList.add()
    btn.classList.remove(up)
}


//2
let img = document.getElementById('img')

img.addEventListener('click', function(){
    if(img.src.includes('dowload.webp')){
        img.src = 'dowload 2.webp'
    }else{
        img.src = 'dowload.webp'
    }

});