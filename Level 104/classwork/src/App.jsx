import { useState } from "react";
import { Home } from "./component/Home";
import History from "./component/history";
import Contact from "./component/contact";


export default function App() {
  const [count, setCount] = useState(0);

  const path = window.location.pathname;

  switch (path) {
    case "/history":
      return <History />;

    case "/contacts":
      return <Contact />;

    
  }
  return (
    <div>
      <Home setCount={setCount}/>
      {count}
    </div>
  );
 

  
}
