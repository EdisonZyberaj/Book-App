import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook({ books, setBooks }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: book.id, title, author };
    setBooks(books.map((b) => (b.id === book.id ? updatedBook : b)));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditBook;
