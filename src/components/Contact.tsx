"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("leads").insert([form]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } else {
      console.error(error.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-[#070A12]">

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Let’s build your next project together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT */}
        <div className="space-y-6">

          <h3 className="text-xl text-white font-semibold">
            Get in touch
          </h3>

          <p className="text-gray-400 text-sm">
            We help businesses build scalable digital solutions.
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <p>📍 Kigali, Rwanda</p>
            <p>📧 contact@nexora.com</p>
            <p>📞 +250 726 291 488</p>
          </div>

          <a
            href="https://wa.me/250726291488"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl transition"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0e1424] border border-gray-800 rounded-2xl p-6 space-y-4"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#070A12] border border-gray-700 text-white outline-none focus:border-blue-500"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#070A12] border border-gray-700 text-white outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full p-3 rounded-lg bg-[#070A12] border border-gray-700 text-white outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm text-center">
              Message sent successfully 🚀
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
}