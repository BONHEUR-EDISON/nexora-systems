import { useParams } from "react-router-dom";
import { services } from "../../../lib/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="bg-[#070A12] text-white min-h-screen px-6 py-20">

      <h1 className="text-4xl font-bold">{service.title}</h1>

      <p className="text-gray-400 mt-4">
        {service.longDesc}
      </p>

      <div className="mt-6 text-blue-400">
  Pricing from ${service.pricing.base} to ${service.pricing.max}
</div>

      <button className="mt-8 bg-blue-600 px-5 py-3 rounded-xl">
        Request this service
      </button>

    </div>
  );
}