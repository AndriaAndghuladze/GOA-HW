// #1
let coffe = Number(prompt('Choise a number 1 to 3:'));

switch(coffe){
    case 1:
        console.log('Your coffe is Amerrcano');
        break;

    case 2:
        console.log('Your coffe is Espresso');
        break;

    case 3:
        console.log('Your coffe is appucino');
        break;
    
}


// #2
//CodeWars
function getGrade(s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;
    
    let score = (avg >= 90) ? "A" :
                (avg >= 80) ? "B" :
                (avg >= 70) ? "C" :
                (avg >= 60) ? "D" : "F";
    
    return score;
}