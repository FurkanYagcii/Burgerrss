import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeadersNav from "./components/HeadersNav";
import Home from "./components/Home";
import Menu from "./components/menu";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <HeadersNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
