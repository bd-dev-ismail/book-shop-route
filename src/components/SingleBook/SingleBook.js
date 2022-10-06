import React from 'react';

const SingleBook = ({book}) => {
    const {title, image, price, isbn13}= book;
    return (
      <div>
        <div className="card w-80 h-[35rem] bg-base-100 shadow-xxl border-4 relative ">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body text-start pt-0">
            <h2 className="card-title ">
              {title}
              <div className="badge badge-secondary">{price}</div>
            </h2>
            <p>Serial No: {isbn13}</p>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary btn-md w-full absolute bottom-0">
              Show Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleBook;