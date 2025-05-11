import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sartist from "./componets/img/Sartist";
import Home from "./componets/Home";
import Header from "./componets/Header";
import Ssong from "./componets/Ssong";
import Sartists from "./componets/Sartists";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="artists/:id" element={<Sartist/>} />
        <Route path="songs" element={<Ssong/>} />
        <Route path="artists" element={<Sartists/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
