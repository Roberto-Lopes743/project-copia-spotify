import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sartist from "./componets/img/Sartist";
import Home from "./componets/Home";
import Header from "./componets/Header";
import Ssong from "./componets/Ssong";
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="artist/:id" element={<Sartist/>} />
        <Route path="song/:id" element={<Ssong/>} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
