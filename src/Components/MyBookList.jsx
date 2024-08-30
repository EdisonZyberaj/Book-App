import React from "react";
import { Link } from "react-router-dom";

function BookList({ books, setBooks }) {
  const deleteBook = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <Link to={`/edit-book/${book.id}`} className="edit">
              Edit
            </Link>
            <button onClick={() => deleteBook(book.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
