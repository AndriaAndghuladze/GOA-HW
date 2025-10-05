import mt from "./assets/photo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="left">
        <img src={mt} alt="Perfume bottle" />
      </div>

      <div className="right">
        <p className="Perfume">Perfume</p>

        <div className="text">
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by <br />
            Olivier Polge, Perfumer-Creator <br />
            for the House of CHANEL.
          </p>
        </div>

        <div className="price">
          <h1 className="h1">$149.99</h1>
          <p className="p">$169.99</p>
        </div>

        <button>
           Add to Cart
        </button>
      </div>
    </div>
  );
}
