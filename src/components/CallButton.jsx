import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <a
        href="tel:+905317921674"
        className="
          fixed
          sm:bottom-6 sm:left-6
          bottom-4 left-2
          z-50 bg-green-600 text-white p-4 rounded-full shadow-lg
          hover:bg-green-800 transition duration-300
          hover:animate-bounce animate-bounce
        "
        aria-label="Telefonla ara"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
    )
  );
};

export default CallButton;