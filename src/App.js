import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages-and-main-component/HomePage";
import Footer from "./pages-and-main-component/Footer";

function App() {
  return (
    <div className="custom-bg">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
