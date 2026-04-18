"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter
} from "react-icons/fa6";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-[#05070F] text-gray-400 border-t border-gray-800 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" className="w-10 h-10" alt="logo" />
            <h2 className="text-white font-bold tracking-widest">
              NEXORA <span className="text-blue-400">SYSTEMS</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            High-performance digital systems, scalable apps and enterprise-grade architecture for modern businesses.
          </p>
        </motion.div>

        {/* NAV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm mb-3">
            Get updates on products and systems.
          </p>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4 text-xl">
            {[
              { icon: <FaXTwitter />, label: "X" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaLinkedin />, label: "LinkedIn" },
              { icon: <FaGithub />, label: "GitHub" },
              { icon: <FaFacebook />, label: "Facebook" }
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="hover:text-blue-400 hover:scale-110 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* MINI STATUS */}
          <div className="mt-6 text-xs text-gray-500">
            ⚡ System uptime: 99.99%
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © 2026 Nexora Systems — engineered for scale & performance.
      </div>
    </footer>
  );
}