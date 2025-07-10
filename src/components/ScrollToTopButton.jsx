import React, { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react"; // veya başka bir ikon

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
        className="fixed bottom-6 right-6 z-50 bg-coral-red text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 hover:animate-bounce animate-bounce"
        aria-label="Yukarı dön"
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
