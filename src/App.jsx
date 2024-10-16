import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HowWeWork from "./pages/HowWeWork/HowWeWork";

function App() {
  return (
    <main>
      <div className="main-wrapper">
        <NavBar></NavBar>
      </div>

      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/how-we-work" element={<HowWeWork></HowWeWork>} />
        </Routes>
      </div>

      <div className="main-wrapper">
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
