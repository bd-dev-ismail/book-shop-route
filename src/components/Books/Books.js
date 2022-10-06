import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';

const Books = () => {
    const booksData = useLoaderData();
    const books = booksData.books;
    console.log(books);
    return (
      <div className='container mx-auto'>
        <h2 className="text-2xl py-3 underline">Developer Books</h2>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <SingleBook key={book.isbn13} book={book}></SingleBook>
          ))}
        </div>
      </div>
    );
};

export default Books;
 