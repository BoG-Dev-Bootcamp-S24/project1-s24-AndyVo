import './App.css';
import Home from "./pages/Home";
import LinesPage from "./pages/LinesPage";
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="gold" element={<LinesPage color="gold" />}/>
            <Route path="red" element={<LinesPage color="red" />}/>
            <Route path="blue" element={<LinesPage color="blue" />}/>
            <Route path="green" element={<LinesPage color="green" />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
