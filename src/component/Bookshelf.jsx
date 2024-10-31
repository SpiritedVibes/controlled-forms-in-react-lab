import { useState } from "react";

const Bookshelf = (props) => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('')

  
  const handleTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title: bookTitle, author: author }; 
    props.addBook(newBook);
    setBookTitle('');
    setAuthor('')
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bookInput">Book Title:</label>
          <input
            id="bookInput"
            type="text"
            name="book"
            onChange={handleTitleChange}
            value={bookTitle}
          />
          <label htmlFor="authorInput">Author</label>
          <input
          id="authorInput"
          type="text"
          name="author"
          onChange={handleAuthorChange}
          value={author}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {/* Displays each book in a card */}
        {props.books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
