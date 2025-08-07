import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+254726348055" 
      target="_blank"
      rel="noopener noreferrer"
      className="md:fixed md:bottom-6 md:right-6 fixed right-[50%] bottom-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <FaWhatsapp className="md:text-3xl text-xl" />
    </a>
  );
}