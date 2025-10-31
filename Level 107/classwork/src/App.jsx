import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div classname ="main-class">

      <div>
        <Header />
        <Main />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}
