"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import TitleTag from "@/components/media/TitleTag";
import PaginatedContent from "@/components/media/PaginationContent";
import {
  DownloadIcon,
  FaithIcon,
  FinanceIcon,
  HealingIcon,
  MarriageIcon,
  SearchIcon,
  ShareIcon,
} from "@/public/icons";

// ─── Types ───────────────────────────────────────────────────────────────────

type Category = "all" | "healing" | "faith" | "finance" | "marriage";

interface Book {
  image: string;
  title: string;
  author: string;
  description: string;
  downloadUrl: string;        // real file path or external URL
  categories: Category[];
}

// Data - add real downloadUrl & tag each book with its categories

const books: Book[] = [
  {
    image: "/images/book-1.jpg",
    title: "Understanding Spiritual Growth",
    author: "John Maxwell",
    description: "A practical guide to building a deeper and meaningful walk with God.",
    downloadUrl: "/downloads/book-1.pdf",
    categories: ["all", "faith"],
  },
  {
    image: "/images/book-2.jpg",
    title: "Faith for Today",
    author: "Joyce Daniels",
    description: "Learn how to apply faith-based principles in your daily life.",
    downloadUrl: "/downloads/book-2.pdf",
    categories: ["all", "faith"],
  },
  {
    image: "/images/book-3.jpg",
    title: "The Prayer of Faith",
    author: "Tunde Amosun",
    description: "A deep exploration of the spiritual strength found in consistent prayer.",
    downloadUrl: "/downloads/book-3.pdf",
    categories: ["all", "faith", "healing"],
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
    downloadUrl: "/downloads/book-4.pdf",
    categories: ["all", "faith"],
  },
  {
    image: "/images/book-4.jpg",
    title: "Divine Health Secrets",
    author: "Kenneth Hagin",
    description: "Biblical foundations for walking in divine health and wholeness.",
    downloadUrl: "/downloads/book-5.pdf",
    categories: ["all", "healing"],
  },
  {
    image: "/images/book-1.jpg",
    title: "Financial Freedom God's Way",
    author: "Crown Financial",
    description: "Stewardship principles that lead to true financial freedom.",
    downloadUrl: "/downloads/book-6.pdf",
    categories: ["all", "finance"],
  },
  {
    image: "/images/book-2.jpg",
    title: "The Excellent Marriage",
    author: "Gary Chapman",
    description: "Building a lasting, Christ-centred marriage that glorifies God.",
    downloadUrl: "/downloads/book-7.pdf",
    categories: ["all", "marriage"],
  },
  {
    image: "/images/book-3.jpg",
    title: "Supernatural Healing",
    author: "Smith Wigglesworth",
    description: "Testimonies and teachings on God's healing power available today.",
    downloadUrl: "/downloads/book-8.pdf",
    categories: ["all", "healing", "faith"],
  },
  {
    image: "/images/book-4.jpg",
    title: "Money Won't Make You Rich",
    author: "Sunday Adelaja",
    description: "Rethinking wealth, work, and the kingdom economy.",
    downloadUrl: "/downloads/book-9.pdf",
    categories: ["all", "finance"],
  },
  {
    image: "/images/book-1.jpg",
    title: "Love & Respect",
    author: "Emerson Eggerichs",
    description: "The love she most desires, the respect he desperately needs.",
    downloadUrl: "/downloads/book-10.pdf",
    categories: ["all", "marriage"],
  },
];

// ─── Share modal ─────────────────────────────────────────────────────────────

function ShareModal({
  book,
  onClose,
}: {
  book: Book;
  onClose: () => void;
}) {
  const url = encodeURIComponent(
    typeof window !== "undefined"
      ? `${window.location.origin}${book.downloadUrl}`
      : ""
  );
  const text = encodeURIComponent(`Check out "${book.title}" by ${book.author}`);

  const platforms = [
    {
      name: "WhatsApp",
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: `https://wa.me/?text=${text}%20${url}`,
    },
    {
      name: "Facebook",
      color: "#1877F2",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      name: "Twitter / X",
      color: "#000000",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    },
    {
      name: "Telegram",
      color: "#26A5E4",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      href: `https://t.me/share/url?url=${url}&text=${text}`,
    },
    {
      name: "Copy Link",
      color: "#6B7280",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </svg>
      ),
      href: null, // handled separately
    },
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${book.downloadUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="font-bold text-[16px] text-[#222357]">Share this book</h3>
            <p className="text-[12px] text-gray-400 mt-0.5 line-clamp-1">{book.title}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-1 -mr-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Platform buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {platforms.map((p) =>
            p.href ? (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 group"
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                <span className="text-[13px] font-medium text-gray-700">{p.name}</span>
              </a>
            ) : (
              <button
                key={p.name}
                onClick={handleCopy}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <span style={{ color: copied ? "#00913D" : p.color }}>
                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  ) : p.icon}
                </span>
                <span className="text-[13px] font-medium text-gray-700">
                  {copied ? "Copied!" : p.name}
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Book card ────────────────────────────────────────────────────────────────

function BookCard({
  book,
  index,
  onShare,
}: {
  book: Book;
  index: number;
  onShare: (book: Book) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(book.downloadUrl);
      if (!res.ok) throw new Error("File not found");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${book.title}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // If file doesn't exist yet, open in new tab as fallback
      window.open(book.downloadUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-5 group">
      <div className="flex gap-5">
        {/* Book cover */}
        <div className="w-[38%] h-52 relative rounded-xl overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
          {!imgError ? (
            <Image
              src={book.image}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 40vw, 200px"
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#222357]/10 to-[#222357]/20 gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222357" strokeWidth="1.5" opacity="0.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
              <span className="text-[11px] text-[#222357]/50 font-medium text-center px-2">
                {book.title.slice(0, 22)}…
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="text-[14px] font-bold text-[#222357] leading-snug line-clamp-2">
              {book.title}
            </h3>
            <p className="text-[11px] text-[#F5A623] font-semibold mt-1 uppercase tracking-wide">
              by {book.author}
            </p>
            <p className="text-[12px] text-gray-500 mt-2 line-clamp-3 leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 bg-[#222357] hover:bg-[#161722] disabled:opacity-60 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {downloading ? (
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.3"/>
                  <path d="M21 12a9 9 0 00-9-9"/>
                </svg>
              ) : (
                <DownloadIcon />
              )}
              {downloading ? "Downloading…" : "Download"}
            </button>

            <button
              onClick={() => onShare(book)}
              className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200 hover:scale-110 transform p-1.5 rounded-lg hover:bg-orange-50"
              title="Share this book"
            >
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Filter pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon?: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-medium transition-all duration-200 hover:scale-105 ${
        active
          ? "bg-[#222357] text-white border-[#222357] shadow-md"
          : "bg-white text-gray-600 border-gray-200 hover:border-[#222357] hover:text-[#222357]"
      }`}
    >
      {icon && <span className={active ? "text-white" : "text-gray-400"}>{icon}</span>}
      {label}
    </button>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE = 6;

export default function ELibraryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [shareBook, setShareBook] = useState<Book | null>(null);
  const [page, setPage] = useState(1);

  const filters: { label: string; value: Category; icon?: React.ReactNode }[] = [
    { label: "All books", value: "all" },
    { label: "Healing", value: "healing", icon: <HealingIcon /> },
    { label: "Faith", value: "faith", icon: <FaithIcon /> },
    { label: "Finance", value: "finance", icon: <FinanceIcon /> },
    { label: "Marriage & Relationship", value: "marriage", icon: <MarriageIcon /> },
  ];

  const filtered = useMemo(() => {
    return books.filter((b) => {
      const matchesCategory =
        activeCategory === "all" || b.categories.includes(activeCategory);
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // Reset to page 1 when filter/search changes
  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setPage(1);
  };
  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto pt-24 pb-12 px-4 md:px-0">
        {/* Title */}
        <div className="px-2 md:px-0 pt-2 mb-2">
          <TitleTag text="E-Library" />
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2 py-2">
            {filters.map((f) => (
              <FilterPill
                key={f.value}
                label={f.label}
                icon={f.icon}
                active={activeCategory === f.value}
                onClick={() => handleCategoryChange(f.value)}
              />
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[255px] shrink-0">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search books, authors…"
              className="text-[#667085] bg-white w-full h-9 pl-9 pr-4 rounded-xl border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#222357]/30 focus:border-[#222357] transition-all duration-200 text-[13px]"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="text-[12px] text-gray-400 mb-4 px-1">
          {filtered.length} book{filtered.length !== 1 ? "s" : ""} found
          {search && ` for "${search}"`}
          {activeCategory !== "all" && ` in ${activeCategory}`}
        </p>

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {paginated.map((book, index) => (
              <BookCard
                key={`${book.title}-${index}`}
                book={book}
                index={index}
                onShare={setShareBook}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 opacity-40">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            </svg>
            <p className="text-[15px] font-medium">No books found</p>
            <p className="text-[13px] mt-1">Try a different search or category</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-4 text-[13px] text-[#222357] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-[#222357] hover:text-[#222357] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                  page === p
                    ? "bg-[#222357] text-white shadow-md"
                    : "border border-gray-200 text-gray-600 hover:border-[#222357] hover:text-[#222357]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-[#222357] hover:text-[#222357] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* Share modal */}
      {shareBook && (
        <ShareModal book={shareBook} onClose={() => setShareBook(null)} />
      )}
    </div>
  );
}