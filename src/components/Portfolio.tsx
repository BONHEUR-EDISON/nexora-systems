import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 bg-[#05070f]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Projects
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Real solutions delivered to businesses.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#0e1424] hover:border-blue-500 transition"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* CLIENT */}
              {project.client && (
                <p className="text-xs text-blue-400 mb-2">
                  {project.client}
                </p>
              )}

              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* RESULT */}
              {project.result && (
                <p className="text-xs text-green-400 mb-4">
                  ✔ {project.result}
                </p>
              )}

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* HOVER CTA */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              {project.link ? (
                <a
                  href={project.link}
                  className="px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
                >
                  View Project
                </a>
              ) : (
                <span className="text-gray-400 text-sm">
                  Private Project
                </span>
              )}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}