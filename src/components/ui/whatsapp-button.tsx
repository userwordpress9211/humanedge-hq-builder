import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "917350797442";
  const message = encodeURIComponent(
    "Hi, I would like to know more about HumanEdge Business Solutions' HR services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </a>
  );
}
