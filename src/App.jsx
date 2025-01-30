import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Library from "./pages/Library";
import StudySpace from "./pages/StudySpace";
import Hostel from "./pages/Hostel";
import Sports from "./pages/Sports";
import Parking from "./pages/Parking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/library" element={<Library />} />
        <Route path="/study-space" element={<StudySpace />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/parking" element={<Parking />} />
      </Routes>
    </Router>
  );
}

export default App;
