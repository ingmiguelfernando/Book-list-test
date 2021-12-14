import React, { useEffect, useState } from "react";
import IBook, { mapResponseToBookArray } from "../Interfaces/IBook";
import { getBooks } from "../api";

const BookList = () => {
  const [books, setbooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBooks()
      .then((data) => {
        const books = mapResponseToBookArray(data.data.books);
        setbooks(books);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    (loading && <div className="text-blue-200 text-xl">Loading...</div>) ||
    (books && (
      <div className="h-40 w-2/3 flex flex-wrap">
        {books.map((book) => {
          return (
            <div key={book.isbn13} className="w-1/2">
              <img className="w-10 h-10" src={book.image} alt={book.title} />
              <div className="text-secondary">{book.title}</div>
              <div className="text-primary pl-4">{book.price}</div>
            </div>
          );
        })}
      </div>
    ))
  );
};

export default BookList;
