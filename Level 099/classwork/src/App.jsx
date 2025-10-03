import mtImage from "./assets/mt.jpg"

export default function App(){
  const name = 'Andria'

  const handleClick = () =>{
    console.log('hello word')
  }
  return (
    <div>
      {name}

      <img src={mtImage} alt="mt" />

      <button onClick={handleClick}>click</button>

      hello word
    </div>
  )
}