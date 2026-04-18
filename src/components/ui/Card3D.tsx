import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

type CardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  badges?: React.ReactNode[];
  index: number;
  slug: string;
};

export default function Card3D({
  title,
  desc,
  icon,
  badges,
  index,
  slug
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = -((y - midY) / midY) * 10;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.div
      initial={{ y: -120, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-gray-800 bg-[#0e1424] p-6 transition 
      hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="h-full w-full"
      >
        {/* ICON */}
        <div className="mb-4 text-blue-400 group-hover:scale-110 transition duration-300">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold mb-2 text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm mb-4">
          {desc}
        </p>

        {/* BADGES (OS) */}
        {badges && (
          <div className="flex gap-3 mb-4 text-gray-300">
            {badges.map((b, i) => (
              <span
                key={i}
                className="text-lg opacity-80 hover:opacity-100 transition"
              >
                {b}
              </span>
            ))}
          </div>
        )}
        {/* CTA */}
        <Link 
         to={`/services/${slug}`}
         className="text-sm text-blue-400 hover:text-blue-300 transition">
          Request Service →
        </Link>
      </div>
    </motion.div>
  );
}