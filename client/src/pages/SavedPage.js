import React, { useEffect, useState } from "react";
import API from "../utils/api";

function SavedPage() {
    const [books, setBooks] = useState([]);

    useEffect(( ) => {

        API
            .getBooks()
            .then(({ data }) => {
                setBooks(data);
            });

    }, [setBooks]);

    return <h1>Save Books</h1>;

}

export default SavedPage;