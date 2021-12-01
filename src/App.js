import "normalize.css";
import "./css/main.min.css";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
function App() {
  return (
    <div className="App">
      <div className="top-wrapper">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

export default App;
