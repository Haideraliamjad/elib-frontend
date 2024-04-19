import { Book } from "@/types";
import BookCard from "./BookCard";
const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books: Book[] = await response.json();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {books.map((book, index) => {
        return <BookCard key={index} book={book} />;
      })}
    </div>
  );
};
export default BookList;
