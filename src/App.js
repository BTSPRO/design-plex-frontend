import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages-and-main-component/HomePage";
import Footer from "./pages-and-main-component/Footer";
import Design from "./component/SecondPage/Design";
import Development from "./component/SecondPage/Development";
import FullBranding from "./component/SecondPage/FullBranding";

function App() {
  return (
    <div className="custom-bg">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/full-branding" element={<FullBranding />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
