"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
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

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-[#222357] hover:bg-[#222340] text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      } z-999`}
      aria-label="Back to top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
