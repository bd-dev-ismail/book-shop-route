import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const booksDetails = useLoaderData();
    const {authors, image, pages} = booksDetails;
    console.log(booksDetails);
    return (
      <div className="container mx-auto">
        <div className="card card-compact w-96 bg-base-100 border-4 border-secondary lg:ml-[40rem] shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Author: {authors}</h2>
            <p>Pages: {pages}</p>
            <div className="card-actions justify-end">
              <Link to="/books">
                <button className="btn btn-secondary">Back Books</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;