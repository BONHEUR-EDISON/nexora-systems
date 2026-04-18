//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Services } from "../components/Services";
//import { Footer } from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="text-white">
      
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
        {/* <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer /> */}

    </div>
  );
}
