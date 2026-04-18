"use client";

import { motion } from "framer-motion";
import { services } from "../../../lib/servicesData";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="bg-[#070A12] text-white min-h-screen">

      {/* HERO */}
      <section className="relative py-24 px-6 md:px-10 text-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold relative"
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto"
        >
          We design, build and scale digital systems — from software development
          to enterprise infrastructure and IT strategy.
        </motion.p>

      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0e1424]/80 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/40 transition backdrop-blur-lg"
            >

              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-400">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-semibold">
                  {service.title}
                </h2>
              </div>

              {/* DESC */}
              <p className="text-gray-400 mb-6">
                {service.shortDesc}
              </p>

              {/* PRICING */}
              <div className="text-sm text-gray-300 mb-6">
                💰 From <span className="text-blue-400 font-medium">{service.pricing.base}</span>
              </div>

              {/* BADGES */}
              {service.badges && (
                <div className="flex gap-3 mb-6 text-gray-300">
                  {service.badges}
                </div>
              )}

              {/* CTA */}
              <div className="flex items-center justify-between">

                <Link
                  to={`/services/${service.slug}`}
                  className="text-blue-400 hover:text-blue-300 text-sm transition"
                >
                  View details →
                </Link>

                <Link
                  to={`/services/${service.slug}`}
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition"
                >
                  Request
                </Link>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center border-t border-gray-800">

        <h2 className="text-3xl font-bold">
          Need a custom solution?
        </h2>

        <p className="text-gray-400 mt-3">
          We also build fully custom systems tailored to your business.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}