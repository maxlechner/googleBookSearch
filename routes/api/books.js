const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);


// Matches with "/api/books/google/:input"
router.route("/:id")
  .get(bookController.findById)
  .delete(bookController.remove);

module.exports = router;