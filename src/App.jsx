import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookList from "./Components/MyBookList";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
  ]);

  return (
    <Router>
      <div>
        <h1>Welcome to the Book Management App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-book">Add Book</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BookList books={books} setBooks={setBooks} />}
          />
          <Route
            path="/add-book"
            element={<AddBook books={books} setBooks={setBooks} />}
          />
          <Route
            path="/edit-book/:id"
            element={<EditBook books={books} setBooks={setBooks} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
