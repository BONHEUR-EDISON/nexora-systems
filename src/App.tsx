import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Services from "./pages/services";
import ServiceDetail from "./pages/services/[slug]";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
     <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        {/* 👇 liste des services */}
        <Route path="/services" element={<Services />} />

        {/* 👇 page dynamique */}
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;