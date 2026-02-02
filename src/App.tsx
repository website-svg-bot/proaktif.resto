import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Hero";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Blogs from "./pages/Blogs";
import Outlets from "./pages/Outlets";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Offset because navbar is fixed */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
