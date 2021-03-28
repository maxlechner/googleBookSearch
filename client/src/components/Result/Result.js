import React from "react";
import { Card } from "react-bootstrap";
import SavedPage from "../pages/SavedPage";
import SaveBookButton from "./SaveBookButton";

function Results({ books }) {

    return (
        <Card className="my-4">

            <Card.Body>
                {books.length
                ? (
                    <div>
                        <h2>Results</h2>
                        {books.map((book) => (
                            <Card className="my-4" key={book.id}>
                                <Card.Body>
                                    <SaveBookButton book={book}></SaveBookButton>
                                    <p className="mt-3">{book.title}</p>
                                    <p>{book.description}</p>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )
                : <h2>No Results</h2>}
            </Card.Body>

        </Card>
    )
}

export default Results;