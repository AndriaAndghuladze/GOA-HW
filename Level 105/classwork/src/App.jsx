import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";

const CustomLink = ({ children, to }) => {
  return <a href={to}>{children}</a>;
}

export default function App() {

  const path = window.location.pathname;

    const router = () => {
    switch (path) {
      case "/":
        return <home/>
      case "/home":
        return <div>home</div>
      case "/dashbaord":
        return <div>dashbaord</div>
    }
    // 404 page
    return <div>404 page not found</div>
  }


  switch (path) {
    case "/page1":
      return <Page1/>;

    case "/page2":
      return <Page2/>;

    case "/page3":
      return <Page3/>;

    case "/page4":
      return <Page4/>;
  }

  return (
    <div>
        <CustomLink to="/home">Home</CustomLink> 
        <br />
        <CustomLink to="/dashboard">Dashboard</CustomLink> 
        <br />
        <CustomLink to="/contact">Contact</CustomLink>
    </div>
  )

}
