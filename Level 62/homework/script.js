// #1
let password = 'Group 55 is best';

function guessPassword() {
  let attempts = 3;

  while (attempts > 0) {
    let userInput = prompt('შეიყვანეთ პაროლი:');

    if (userInput === password) {
      alert('თქვენი შეყვანილი პაროლი სწორია');
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        alert(`პაროლი არასწორია. დარჩენილი ცდები: ${attempts}`);
      }
    }
  }

  alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
}

guessPassword();


// #2
let N = Number(prompt("შეიყვანეთ რიცხვი N:"));
let factorial = 1;

if (!Number.isInteger(N) || N < 0) {
  alert("ფაქტორიალი მხოლოდ დადებითი მთელი რიცხვებისთვის ითვლება");
} else {
  for (let i = 1; i <= N; i++) {
    factorial *= i;
  }
  alert(`რიცხვი ${N}-ის ფაქტორიალია: ${factorial}`);
}


// #3
let i = 100;

while (i >= 0) {
  console.log(`დარჩენილია ${i} წამი`);
  i--;
}