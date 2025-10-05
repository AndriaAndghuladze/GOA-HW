import "./App.css";

export default function App() {
  return (
    <div className="weather-app">
      <header className="header">
        <div className="logo"> Weather Now</div>
        <button className="units-btn">Units ▾</button>
      </header>

      <h1 className="title">How’s the sky looking today?</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search for a place..." />
        <button>Search</button>
      </div>

      <div className="main-info">
        <div className="current-weather">
          <div className="location">Berlin, Germany</div>
          <div className="date">Tuesday, Aug 5, 2025</div>
          <div className="temp"> 20°</div>

          <div className="details">
            <div><span>Feels Like</span><p>18°</p></div>
            <div><span>Humidity</span><p>46%</p></div>
            <div><span>Wind</span><p>14 km/h</p></div>
            <div><span>Precipitation</span><p>0 mm</p></div>
          </div>
        </div>

        <div className="hourly">
          <h3>Hourly forecast</h3>
          <ul>
            <li><span>3 PM</span><span> 20°</span></li>
            <li><span>4 PM</span><span> 20°</span></li>
            <li><span>5 PM</span><span> 20°</span></li>
            <li><span>6 PM</span><span> 19°</span></li>
            <li><span>7 PM</span><span> 18°</span></li>
            <li><span>8 PM</span><span> 18°</span></li>
            <li><span>9 PM</span><span> 17°</span></li>
            <li><span>10 PM</span><span> 17°</span></li>
          </ul>
        </div>
      </div>

      <div className="daily">
        <h3>Daily forecast</h3>
        <div className="days">
          <div><span>Tue</span><p> 20° | 14°</p></div>
          <div><span>Wed</span><p> 21° | 15°</p></div>
          <div><span>Thu</span><p> 24° | 14°</p></div>
          <div><span>Fri</span><p> 25° | 13°</p></div>
          <div><span>Sat</span><p> 21° | 15°</p></div>
          <div><span>Sun</span><p> 25° | 16°</p></div>
          <div><span>Mon</span><p> 24° | 15°</p></div>
        </div>
      </div>
    </div>
  );
}
