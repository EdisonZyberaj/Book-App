import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: books.length + 1, title, author };
    setBooks([...books, newBook]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;
