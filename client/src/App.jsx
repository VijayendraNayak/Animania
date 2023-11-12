import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { Homeheader } from "./components/headers/Homeheader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Homeheader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
