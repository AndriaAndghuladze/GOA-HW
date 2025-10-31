import { useState } from "react";
import "./App.css";

export default function App() {
  const [size, setSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("olive");

  return (
    <div className="product-page">
      {}
      <div className="product-gallery">
        <img src="/tshirt-front.png" alt="Front" className="main-img" />
        <div className="thumbs">
          <img src="/tshirt-front.png" alt="Front" />
          <img src="/tshirt-back.png" alt="Back" />
          <img src="/tshirt-model.png" alt="Model" />
        </div>
      </div>

      {}
      <div className="product-info">
        <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="rating">
        <span>4.5/5</span>
        </div>

        <div className="price">
          <h2>$260</h2>
          <span className="old-price">$300</span>
          <span className="discount">-40%</span>
        </div>

        <p className="desc">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        <div className="section">
          <h4>Select Colors</h4>
          <div className="colors">
            <button
              className={`color olive ${color === "olive" ? "active" : ""}`}
              onClick={() => setColor("olive")}
            ></button>
            <button
              className={`color teal ${color === "teal" ? "active" : ""}`}
              onClick={() => setColor("teal")}
            ></button>
            <button
              className={`color navy ${color === "navy" ? "active" : ""}`}
              onClick={() => setColor("navy")}
            ></button>
          </div>
        </div>

        <div className="section">
          <h4>Choose Size</h4>
          <div className="sizes">
            {["Small", "Medium", "Large", "X-Large"].map((s) => (
              <button
                key={s}
                className={`size ${size === s ? "active" : ""}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}
