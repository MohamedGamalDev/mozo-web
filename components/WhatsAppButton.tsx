import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201006413142"
      target="_blank"
      className="fixed bottom-5 left-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center z-50"
    >
      <MessageCircle size={22} />
    </a>
  );
}