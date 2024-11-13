import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/topMenu";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
