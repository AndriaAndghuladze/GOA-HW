import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Samsung from "./pages/Samsung";
import Apple from "./pages/Apple";
import Xiaomi from "./pages/Xiaomi";
import Huawei from "./pages/Huawei";
import Personal from "./pages/Personal";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Samsung />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/xiaomi" element={<Xiaomi />} />
        <Route path="/huawei" element={<Huawei />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </div>
  );
}
