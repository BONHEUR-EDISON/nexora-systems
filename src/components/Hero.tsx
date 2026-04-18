import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🖱 PARALLAX MOUSE
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#070A12]">

      {/* 🖼 BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)`
        }}
      >
        <img
          src="/bg-desk.png"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#070A12]/70" />
      </motion.div>

      {/* 🌌 GLOW */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translate(${mouse.x * 1}px, ${mouse.y * 1}px)`
        }}
      >
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-4xl flex flex-col items-center"
        style={{
          transform: `translate(${mouse.x * 0.2}px, ${mouse.y * 0.2}px)`
        }}
      >
        {/* LOGO */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 md:w-32 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Powering Your Business with{" "}
          <span className="text-blue-400 relative">
            Technology
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500/40 blur-md" />
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 text-sm md:text-lg max-w-2xl"
        >
          We build high-performance web apps, mobile solutions, network infrastructure
          and enterprise systems for ambitious businesses.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="relative px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
            Our Services
          </button>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 flex flex-col items-center text-gray-400 text-xs animate-bounce">
        <span>Scroll</span>
        <div className="w-[2px] h-6 bg-gray-500 mt-1" />
      </div>

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#070A12] to-transparent" />
    </section>
  );
}