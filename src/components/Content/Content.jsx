import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../SearchForm/SearchForm";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  const data = useContext(SearchContext);




  return (
    <SearchContext.Provider value={data}>
      <div className="content-wrapper">
        

         {data &&
          data.results &&
          data.results.map((book, index) => (

            <Link to={`/books/${book.id}`} key='index'>
            <div className="book" key={index}>
                {book.formats['image/jpeg'] &&
              (<img src={book.formats['image/jpeg']} alt={`${book.title} cover`} />)}
              <h4>{(book.title.length > 55) ? (`${book.title.substring(0, 50)}...`) : (book.title)}</h4>
              <p>{book.authors[0].name}</p>
              
            </div>
            </Link>
          ))}
      </div>
    </SearchContext.Provider>
  );
};

export default Content;
