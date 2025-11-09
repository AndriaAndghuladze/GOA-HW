import img1 from "./assets/download.jpg"
import img2 from "./assets/mt.jpg"
import img3 from "./assets/react.svg"

export default function App() {
  return (
    <div>
      <button>Click me!</button>
      <button>Click me!</button>
      <button>Click me!</button>

      <img src={img1} />
      <img src={img2}/>
      <img src={img3} />

      <p>HEllo</p>
      <p>world</p>

      <a href="https://github.com/"></a>

    </div>
  )
}