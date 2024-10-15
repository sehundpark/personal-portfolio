import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { Snapshots } from "./pages/Snapshots";
import { ResumePage } from "./pages/ResumePage";
import { ThemeProvider } from "./components/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const AppContent = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/snapshots" element={<Snapshots />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
