const express = require("express");
const app = express();

// Needed to read JSON body
app.use(express.json());

// In-memory book list
let books = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" }
];

// GET: return all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST: add a new book
app.post("/books", (req, res) => {
    const newBook = req.body;

    if (!newBook.id || !newBook.title || !newBook.author) {
        return res.status(400).json({ message: "Invalid input" });
    }

    books.push(newBook);
    res.json({ message: "Book added successfully", newBook });
});

// PUT: update a book by ID
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.json({ message: "Book updated", updatedBook: books[bookIndex] });
});

// DELETE: remove a book by ID
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const beforeDelete = books.length;
    books = books.filter(b => b.id !== id);

    if (books.length === beforeDelete) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted" });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
