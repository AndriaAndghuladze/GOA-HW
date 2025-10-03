import { useState } from "react"

import mtImage from "./assets/mt.jpg"

export default function App(){
  const [count, setCount] = useState(0)

  // let count = 0

  const up = () =>{
      setCount(count + 1)
      console.log("up", count)
  }

  const down = () =>{
      setCount(count - 1)
      console.log("down", count)
  }

  const zero = () =>{
      setCount(count * 0)
      console.log("zero", count)
  }

  return (
    <div>
      <img src={mtImage} alt="mt" />
      <br/>
      hello word 
     
      <br/>
      <br/>

      <span>{count}</span>
      <br/>
      <button onClick={up}>UP</button>
      <button onClick={down}>Down</button>
      <button onClick={zero}>+0</button>

    </div>
  )
}