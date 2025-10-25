import React, { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <h1>Hello World</h1>}

      <button onClick={() => setVisible(true)}>Show</button>
      <button onClick={() => setVisible(false)}>Hide</button>
    </div>
  );
}
