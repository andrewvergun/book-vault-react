import React, { useContext } from "react";
import { SearchContext } from "../../components/SearchForm/SearchForm";
import "./BookDetails.css";
import { useLoaderData, Link } from "react-router-dom";

const BASE_URL = "https://gutendex.com/books";
export async function bookDetailsLoader({ params }) {
  const { book_id } = params;
  const response = await fetch(`${BASE_URL}/${book_id}`);
  return response.json();
}

const BookDetails = () => {
  const book = useLoaderData();

  return (
    <>
      <div className="book-details">
        <div className="book-image">
          <img src={book.formats["image/jpeg"]} alt={`${book.title} cover`} />
        </div>
        <div className="book-info">
          {book.title.length > 0 && <h2>{book.title}</h2>}
          <br />
          {book.authors.length > 0 && book.authors[0].name && (
            <p>Authorship: {book.authors[0].name}</p>
          )}
          <br />
          {book.subjects.length > 0 && (
            <p>
              Subjects: <br />{" "}
              {book.subjects.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          )}
          <br />
          {book.formats && book.formats["text/html"] && (
            <Link to={`${book.formats["text/html"]}`}>
              <button>Read</button>
            </Link>
          )}
          <br />
          {book.formats && book.formats["application/epub+zip"] && (
            <Link to={`${book.formats["application/epub+zip"]}`}>
              <button>Download</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default BookDetails;
