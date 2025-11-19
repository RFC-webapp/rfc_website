import LibraryCard from "./LibraryCard";

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
];

const LibraryTab = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center pb-4">
        <h3 className="font-semibold text-[14px] text-[#222357]">
          Recommended Books
        </h3>

        <h3 className="font-medium text-[12px] text-[#00913D] cursor-pointer">
          GO TO E-LIBRARY
        </h3>
      </div>

      {/* GRID — 2 x 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {books.map((book, index) => (
          <LibraryCard
            key={index}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryTab;
