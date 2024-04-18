import Banner from "./components/Banner";
import BookList from "./components/BookList";
export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books = await response.json();

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
