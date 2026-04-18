import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "243XXXXXXXXX"; // 👉 remplace par ton numéro

  const message =
    "Hello, I would like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 
      bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-full 
      shadow-lg hover:shadow-green-500/40 transition-all duration-300 
      hover:scale-105"
    >
      <FaWhatsapp size={22} />

      {/* Texte (desktop seulement) */}
      <span className="hidden md:inline text-sm font-medium">
        Chat with us
      </span>
    </a>
  );
}