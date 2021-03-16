const router = require("express").Router();

const { Book } = require("../models");

router 
    route("/books")
    .get((req, res)=> {
        Book
            .find()
            .then(books => res.json(books))
            .catch(err => console.log(err));
    })
    
    .post( "/books", (req, res) => {

        const {
            title,
            authors,
            description,
            image,
            link
        } = req.body;

        Book
            .create({
                title,
                authors,
                description,
                image,
                link
            })
            .then(newBook => res.json(newBook))
            .catch(err => console.log(err));

    });

module.exports = router;

