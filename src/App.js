import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <Link to="/">
          <h1>🏨 Hotel<span>Discovery</span></h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
