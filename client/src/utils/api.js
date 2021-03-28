import axios from "axios";

const API = {

  // Gets the books from Google
  getBooksAPI: function (input) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

export default API;