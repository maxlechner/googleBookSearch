import axios from "axios";

const API = {
    async getBooks( book ) {
        return {
            data: [
                {
                    id: 1,
                    authors: ["Suzanna Collins"],
                    image: "hats",
                    link: "cats",
                    title: "The Hunger Games"

                }
            ]
        }
    },
    async getBooks() {
        return axios.get( "api/books" );
    },
    async addBook( book ) {
        return axios.post( "api/books", book );
    }
};

export default API;