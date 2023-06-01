import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";



function App() {
  return <div className="font-roboto">
    <Header />
    <Slider />
    <Router>
        <Routes>

        </Routes>
    </Router>
  </div>;
}

export default App;
