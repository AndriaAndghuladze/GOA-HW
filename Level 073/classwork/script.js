//1
let date = new Date(year, month , day); 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let day = parseInt(prompt("Enter Day:"));
let month = parseInt(prompt("Enter Month:"));
let year = parseInt(prompt("Enter Year:"));

console.log((year, month, day));


//2
setInterval(() => {
    const time = new Date()
    const hour = String(time.getHours()).padStart(2, '0')
    const minute = String(time.getMinutes()).padStart(2, '0')
    const second = String(time.getSeconds()).padStart(2, '0')
    const clock = hour + ':' + minute + ':' + second
    document.querySelector('.board').textContent = clock
}, 1000)