//1
function syncFunc1() {
  console.log("Hello");
}

function syncFunc2() {
  console.log("World");
}

syncFunc1();
syncFunc2();



//2
function asyncFunc1() {
  setTimeout(() => {
    console.log("First async done");
  }, 2000); 
}

function asyncFunc2() {
  setTimeout(() => {
    console.log("Second async done");
  }, 1000); 
}

asyncFunc1();
asyncFunc2();


//3
function asyncFunc1() {
  setTimeout(() => {
    console.log("First async done");
  }, 2000);
}

function asyncFunc2() {
  setTimeout(() => {
    console.log("Second async done");
  }, 1000); 
}

console.log("Start program");

asyncFunc1();
asyncFunc2();

console.log("End program");
