import React, { useState, createContext } from "react";
import "./SearchForm.css";
import search_icon from "../../assets/search_icon.svg";
import search_bg from "../../assets/search_bg.jpg";
import Content from "../Content/Content";

export const SearchContext = createContext({});

const SearchForm = () => {
  const BASE_URL = "https://gutendex.com/books";

  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    fetch(`${BASE_URL}/?search=${query}`)
      .then((response) => response.json())
      .then((response) => {setData(response); setIsLoading(false);});
      
  };

  const searchData = (e) => {
    e.preventDefault();
    fetchData();

  };


  return (
    <SearchContext.Provider value={data}>
       <div
        className="search-container"
        style={{
          backgroundImage: `url(${search_bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <form className="search-form">
          <input
            placeholder="Search for books"
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit" onClick={searchData}>
            <img src={search_icon} alt="" />
          </button>
        </form>
      </div>
      {isLoading ? <p className="loading">Loading....</p> : <Content />}
    </SearchContext.Provider>
  );
};

export default SearchForm;
