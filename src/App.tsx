import "./App.css";
import logo from "./assets/header/freelance-desarrolloweb-seo.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const headerProps = {
    logo: {
      src: logo,
      alt: "Freelance Front End Developer",
      width: 170,
      height: 90,
    },
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <Footer />
    </div>
  );
}

export default App;
