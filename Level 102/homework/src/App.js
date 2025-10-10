import "./App.css";
import chickenImg from "./spider.png"; 

export default function App() {
  return (
    <div className="card">
      <div className="text-section">
        <div className="tag"> Hot Recipes</div>

        <h1>Spicy delicious chicken wings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliquip enim ad minim.
        </p>

        <div className="details">
          <div className="detail">
            <span></span> 30 Minutes
          </div>
          <div className="detail">
             Chicken
          </div>
        </div>

        <div className="author">
          <div>
            <h4>John Smith</h4>
            <p>15 March 2022</p>
          </div>
          <button>View Recipes ▶</button>
        </div>
      </div>

      <div className="image-section">
        <img src={chickenImg} alt="Chicken Wings" />
        <div className="circle">HANDPICKED RECIPES</div>
      </div>
    </div>
  );
}
