import LibraryCard from "@/components/media/MediaCard";

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

export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 pt-12 gap-4">
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
  );
}
