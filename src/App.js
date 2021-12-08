import "normalize.css";
import "./css/main.min.css";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
