import { Book } from "@/types/index";
import BookCard from "./BookCard";
const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {books.map((book, index) => {
        return <BookCard key={index} book={book} />;
      })}
    </div>
  );
};
export default BookList;
