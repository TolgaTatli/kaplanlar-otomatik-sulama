import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
          fixed
          sm:bottom-6 sm:right-6
          bottom-4 right-2
          z-50 bg-coral-red text-white p-4 rounded-full shadow-lg
          hover:bg-gray-800 transition duration-300
          hover:animate-bounce animate-bounce
        "
        aria-label="Yukarı dön"
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
