import React, { useState } from "react";
import API from "../utils/API";
import SearchForm from "../components/Form";
import BookCard from "../components/BookCard";



const SearchBooks = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.getBooksGoo(search)
    .then(res => {
      if (res.data.items === "error") {
        throw new Error(res.data.items);
      }
      else {
        let results = res.data.items
        results = results.map(result => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
          }
          return result;
        })
        setBooks(results)
        setSearch("");
      }
    })
    .catch(err => setError(error));
  }



  const handleSavedButton = e => {
    e.preventDefault();
    let savedBooks = books.filter(book => book.id === e.target.id)
    savedBooks = savedBooks[0]
    API.saveBook(savedBooks)
      .then(console.log(savedBooks))
      .catch(err => console.log(err))
      .then(alert("Great choice! The book has been saved!"))
  };



  return (
    <div className='container fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <SearchForm
              handleFormSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='container' >
        <BookCard books={books} handleSavedButton={handleSavedButton} />
      </div>
    </div>
  );
};

export default SearchBooks;