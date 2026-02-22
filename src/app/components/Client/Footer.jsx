import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Heart,
  Shield,
  Zap,
  Users,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4 mt-6">
      <div className=" text-center text-gray-600">
        {/* &copy; {new Date().getFullYear()} Mon Projet. Tous droits réservés. */}
        <div className="text-center text-gray-600">
          <p>Besoin d'aide ? Notre équipe est disponible 24/7</p>
          <p className="mt-2">support_de_ib@example.com • +225 0759496679</p>
        </div>
      </div>

      {/* Bouton Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-slate-700 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
