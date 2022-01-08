import "normalize.css";
import "./css/main.min.css";
import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Logo id="logoMobile" />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
