📌 Overview
This project is a REST API for managing a list of books, built using Node.js and Express.
It supports the full set of CRUD operations:
  Create a book
  Read all books
  Update a book
  Delete a book
👉 No database is used — all data is stored in memory.
🛠 Tools Used
  Node.js
  Express.js
  VS Code
  Postman (for testing)
🚀 How to Run the Project
1️⃣ Install dependencies
npm install
2️⃣ Start the server
node index.js
3️⃣ Server will run at:
http://localhost:3000

📡 API Endpoints (Books CRUD)
📘 1. GET all books
URL
GET http://localhost:3000/books
Description: Returns the list of all books stored in memory.
📗 2. POST a new book
URL
POST http://localhost:3000/books
Body (JSON)
{
  "id": 3,
  "title": "Book Title",
  "author": "Author Name"
}
Description: Adds a new book to the list.
📙 3. PUT (Update a book)
URL
PUT http://localhost:3000/books/:id
Example:
PUT http://localhost:3000/books/1
Body (JSON)
{
  "title": "Updated Title",
  "author": "Updated Author"
}
Description: Updates book details using its ID.
📕 4. DELETE a book
URL
DELETE http://localhost:3000/books/:id
Example:
DELETE http://localhost:3000/books/2
Description: Deletes a book from the list.
🧪 Postman Testing
The API was tested using Postman:
✔ GET → Fetch all books
✔ POST → Add a new book
✔ PUT → Update book details
✔ DELETE → Remove a book
