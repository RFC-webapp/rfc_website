import MediaCard from "@/components/media/MediaCard";
import PaginatedContent from "@/components/media/PaginationContent";
import Selection from "@/components/media/Selection";
import TitleTag from "@/components/media/TitleTag";
import {
  DownloadIcon,
  FaithIcon,
  FinanceIcon,
  HealingIcon,
  MarriageIcon,
  SearchIcon,
} from "@/public/icons";

const books = [
  {
    image: "/images/book-1.jpg",
    title: "Understanding Spiritual Growth",
    author: "John Maxwell",
    description:
      "A practical guide to building a deeper and meaningful walk with God.",
  },
  {
    image: "/images/book-2.jpg",
    title: "Faith for Today",
    author: "Joyce Daniels",
    description:
      "Learn how to apply faith-based principles in your daily life.",
  },
  {
    image: "/images/book-3.jpg",
    title: "The Prayer of Faith",
    author: "Tunde Amosun",
    description:
      "A deep exploration of the spiritual strength found in consistent prayer.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
  {
    image: "/images/book-4.jpg",
    title: "Walking in Purpose",
    author: "Myles Munroe",
    description: "Discover your God-given purpose and learn how to fulfill it.",
  },
];

export default function page() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto pt-24 pb-12">
        <div className="px-2 md:px-0 pt-2">
          <TitleTag text="E-Library" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2 md:gap-0">
          <div className="flex flex-wrap gap-4 py-4 md:py-8 px-2 md:px-0">
            <Selection text="All books" />
            <Selection icon={<HealingIcon />} text="Healing" />
            <Selection icon={<FaithIcon />} text="Faith" />
            <Selection icon={<FinanceIcon />} text="Finance" />
            <Selection icon={<MarriageIcon />} text="Marriage & Relationship" />
          </div>

          <div className="relative w-fit md:w-[255px]">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#667085]">
              <SearchIcon />
            </div>

            <input
              type="search"
              placeholder="Search"
              className="text-[#667085] bg-[#FFFFFF] w-full h-8 px-12 py-2 rounded-xl border border-[#D0D5DD] focus:outline-none focus:ring-1 focus:ring-[#222357]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto container">
          {books.map((book, index) => (
            <MediaCard
              key={index}
              image={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
              buttons={[
                {
                  label: "Download",
                  icon: <DownloadIcon />,
                  variant: "ghost",
                  className: "bg-[#222357] text-white",
                },
              ]}
            />
          ))}
        </div>
      </div>

      <PaginatedContent />
    </div>
  );
}
