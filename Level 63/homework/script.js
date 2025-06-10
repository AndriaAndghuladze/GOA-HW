// #1
for(let i = 1; i < 100; i++){
    if(i == 50){
        break;
    }
    console.log(i)
}


// #2
for(i = 1; i < 20; i++){
    if(i == 7, i == 13){
        continue;
    }
    console.log(i)
}


// #3
for (let i = 2; i <= 30; i += 2) {
  console.log(i);
  if (i % 8 === 0) {
    break;
  }
}


// #4
for(let i = 1; i < 30; i++){
    if(i % 5){
        continue
    }
    console.log(i)
}