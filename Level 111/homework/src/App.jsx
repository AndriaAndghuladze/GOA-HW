export default function App() {

  let age = 15;
  let msg = "";

  if (age >= 18) {
    msg = "you are adult";
  } else {
    msg = "you are kid";
  }

  console.log(msg);

  let isLogged = true;


  return (
    <div>
      {msg}
      {isLogged && <h1>Welcome back user!</h1>}


    </div>
  )
}

// If statement გამოიყენება როცა გინდა პირობის მიხედვით წინასწარ შეასრულო ლოგიკა და მოამზადო შედეგი render-მდე.
// Ternary operator არის if else-ის მოკლე inline ფორმა, როცა გჭირდება ორი შესაძლო გამოსავალი UI-ში.
// && operator გამოიყენება მაშინ, როცა UI უნდა გამოიტანო მხოლოდ True შემთხვევაში, ხოლო False მდგომარეობაში საერთოდ არაფერი გამოვიდეს.