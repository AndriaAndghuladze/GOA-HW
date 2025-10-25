import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState("00:00:00");
  const [color, setColor] = useState("#1f1f1f");
  const [features, setFeatures] = useState({ time: true, heart: false });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const COLORS = ["#1f1f1f", "#d64a2e", "#6b63a6", "#8f5660"];

  const toggleFeature = (key) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container">
      <header className="header">amazon</header>

      <main className="main">
        <div className="watch-section">
          <div className="watch" style={{ backgroundColor: color }}>
            <div className="watch-time">{time}</div>
          </div>
        </div>

        <div className="info-section">
          <h1>FitBit 19 - The Smartest Watch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperioresbr adipisci culpa rem? A, tenetur veritatis
          </p>

          <div className="color-section">
            <h3>Select Color</h3>
            <div className="colors">
              {COLORS.map((c) => (
                <div
                  key={c}
                  onClick={() => setColor(c)}
                  className={`color ${color === c ? "active" : ""}`}
                  style={{ backgroundColor: c }}
                ></div>
              ))}
            </div>
          </div>

          <div className="features-section">
            <h3>Features</h3>
            <div className="features">
              <button
                onClick={() => toggleFeature("time")}
                className={features.time ? "active" : ""}
              >
                Time
              </button>
              <button
                onClick={() => toggleFeature("heart")}
                className={features.heart ? "active" : ""}
              >
                Heart Rate
              </button>
            </div>
          </div>

          <button className="buy-btn">BUY NOW</button>
        </div>
      </main>
    </div>
  );
}
