import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Campaigns from "./pages/Campaigns/Campaigns";
import Homepage from "./pages/Homepage/Homepage";



function App() {
  return <div className="font-roboto flex flex-col justify-between min-h-screen">
    <Header />
    <Router>
        <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/kampanyalar" element={<Campaigns />} />
        </Routes>
    </Router>
    <Footer />
  </div>;
}

export default App;
