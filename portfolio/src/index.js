import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Techskills from "./Techskills";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Techskills' element={<Techskills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
