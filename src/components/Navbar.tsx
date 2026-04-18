import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled
        ? "bg-black/70 backdrop-blur-xl border-b border-gray-800 shadow-lg"
        : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-9 h-9 object-contain"
          />

          <span className="text-sm md:text-base font-bold tracking-widest">
            NEXORA <span className="text-blue-400">SYSTEMS</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-sm transition hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/30">
          Get Quote
        </button>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 text-gray-300 bg-black/90 backdrop-blur-xl border-t border-gray-800">

          <a href="#" onClick={() => setOpen(false)} className="hover:text-white transition">
            Home
          </a>

          <a href="#services" onClick={() => setOpen(false)} className="hover:text-white transition">
            Services
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white transition">
            Contact
          </a>

          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition mt-2">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}