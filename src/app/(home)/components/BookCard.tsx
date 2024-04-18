import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image src={book.coverImage} alt="cover-image" width={100} height={100} />
      <div>
        <h2 className="line-clamp text-lg text-primary-600">{book.title}</h2>
        <p className="font-bold text-primary-900 mt-1">{book.author.name}</p>
        <Link
          className="py-1 px-2 mt-4 inline-block rounded border border-primary-500 text-primary-500 hover:border-primary-100 hover:bg-primary-100 transition"
          href={`/book/${book._id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BookCard;
