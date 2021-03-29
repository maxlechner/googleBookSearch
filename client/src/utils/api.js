import axios from "axios";

const API = {
  getBooksAPI: function (input) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

export default API;