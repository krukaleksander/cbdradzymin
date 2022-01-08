import "normalize.css";
import "./css/main.min.css";
import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import Bars from "./components/Bars";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Logo id="logoMobile" />
      <Bars />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
