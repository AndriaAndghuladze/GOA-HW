//1
console.log("ლომიიიიი");
console.log("ვეფხვიიიი");

function vfexvi() {
  console.log("ვეფხვიიიი");
}

function lomi() {
  console.log("ლომიიიიი");
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  })
  .catch(error => console.error(error));

console.log(vfexvi());
console.log(lomi());


//2
function asyncPromiseFunction(work99999) {
    return new Promise((resolve, reject) => {
        if (work === "")
            reject(Error("Nothing Katleti")); 
        setTimeout(function () {
            resolve(work99999); 
        }, 1000);
    })
}


asyncPromiseFunction("work 99999")
    .then((result) => {
        console.log("ემზარი"); 
    })
    .catch((err) => {
        console.log(err); 
    })


//3
  const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
        const cityName = "lomi"
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

        const myWeatherAsyncFunc = async () => {
            const data = await fetch(API)
                .then((response) => response.json())
                .then((data) => data)
                
            
            console.log(data)
        }
        myWeatherAsyncFunc()