//1
function syncFunc1() {
  console.log("სინქრონული ფუნქცია 1 შესრულდა");
}

function syncFunc2() {
  console.log("სინქრონული ფუნქცია 2 შესრულდა");
}


async function asyncFunc1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("ასინქრონული ფუნქცია 1 (2 წამი) დასრულდა"), 2000);
  });
}

async function asyncFunc2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("ასინქრონული ფუნქცია 2 (1 წამი) დასრულდა"), 1000);
  });
}


 function runAll() {
  syncFunc1();
  syncFunc2();


  const p1 = asyncFunc1();
  const p2 = asyncFunc2();

  
  console.log(p2); 
  console.log(p1); 
}

runAll();
