"use client";

import { useEffect, useRef, useState } from "react";
import { DownloadIcon } from "lucide-react";
import MediaCard from "../media/MediaCard";
import Link from "next/link";

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const books = [
  {
    image: "/images/book-1.jpg",
    title: "Understanding Spiritual Growth",
    author: "John Maxwell",
    description: "A practical guide to building a deeper and meaningful walk with God.",
  },
  {
    image: "/images/book-2.jpg",
    title: "Faith for Today",
    author: "Joyce Daniels",
    description: "Learn how to apply faith-based principles in your daily life.",
  },
  {
    image: "/images/book-3.jpg",
    title: "The Prayer of Faith",
    author: "Tunde Amosun",
    description: "A deep exploration of the spiritual strength found in consistent prayer.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
];

const LibraryTab = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div ref={ref}>
      <div
        className="flex justify-between items-center pb-5 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-medium">
            E-Library
          </p>
          <h3 className="font-bold text-[16px] text-[#222357] mt-0.5">
            Recommended Books
          </h3>
        </div>

        <Link
          href="/media/e-library"
          className="text-[12px] font-semibold text-[#00913D] hover:text-[#007a33] transition-colors duration-200 flex items-center gap-1 group"
        >
          GO TO E-LIBRARY
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {books.map((book, index) => (
          <MediaCard
            key={index}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
            variant="book"
            buttons={[
              {
                label: "Download",
                icon: <DownloadIcon />,
                variant: "ghost",
                className: "bg-[#222357] text-white",
              },
            ]}
            youtubeUrl=""
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryTab;