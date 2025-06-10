// #1
let result = 1;

for(let i = 1; i < 10000; i++){
    if(i == 10001){
        break;
    }
    console.log(i)
}


// #2
for (let i = 1; i <= 200; i++) {
    if (i == 105) {
        break;
    } else if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}