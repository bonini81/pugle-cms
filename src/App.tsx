import "./App.css";
import logo from "./assets/header/freelance-desarrolloweb-seo.jpg";
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
    </div>
  );
}

export default App;
