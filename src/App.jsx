import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Struktur from "./pages/Struktur";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="struktur" element={<Struktur />} />
      </Route>
    </Routes>
  );
}
