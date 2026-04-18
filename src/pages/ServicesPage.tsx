"use client";

import { motion } from "framer-motion";
import { services } from "../../lib/servicesData";

export default function ServicesPage() {
  return (
    <div className="bg-[#050712] text-white min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 px-6 text-center">

        {/* glow background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight relative"
        >
          Enterprise <span className="text-blue-400">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          We build high-performance systems, scalable infrastructures and modern SaaS products
          for companies that think big.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <button className="bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-xl text-sm font-medium transition shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
            Get a Free Consultation
          </button>
        </motion.div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 pb-28 max-w-6xl mx-auto space-y-10">

        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative group"
          >

            {/* gradient border effect */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative bg-[#0b1020]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-transparent transition">

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-400">
                  {service.icon}
                </div>

                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                {service.longDesc}
              </p>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-10">

                {/* BENEFITS */}
                <div>
                  <h3 className="text-white font-medium mb-4">
                    Key Benefits
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-400">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-400">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* USE CASES */}
                <div>
                  <h3 className="text-white font-medium mb-4">
                    Use Cases
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-400">
                    {service.useCases.map((u, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-purple-400">▸</span>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-end">
                <button className="bg-white text-black hover:bg-blue-500 hover:text-white px-5 py-2 rounded-lg text-sm font-medium transition">
                  Request Service
                </button>
              </div>

            </div>
          </motion.div>
        ))}

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center border-t border-white/10 relative">

        <div className="absolute inset-0 flex justify-center">
          <div className="w-[600px] h-[600px] bg-purple-500/10 blur-[140px]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold relative">
          Ready to build something exceptional?
        </h2>

        <p className="text-gray-400 mt-4 relative max-w-xl mx-auto">
          Let’s design your infrastructure, SaaS or digital product with enterprise-grade architecture.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-xl transition shadow-lg shadow-blue-500/20">
          Contact Us
        </button>

      </section>

    </div>
  );
}