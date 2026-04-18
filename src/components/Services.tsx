import Card3D from "./ui/Card3D";
import { services } from "../../lib/servicesData";

export function Services() {
 

  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#070A12]">
      
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
          We provide cutting-edge IT solutions to help your business grow,
          scale, and stay secure.
        </p>
        <a href="/services" className="hover:text-white transition">Services</a>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Card3D
            key={i}
            index={i}
            title={s.title}
            desc={s.shortDesc}
            icon={s.icon}
            badges={s.badges}
            slug={s.slug}
          />
        ))}
      </div>
    </section>
  );
}