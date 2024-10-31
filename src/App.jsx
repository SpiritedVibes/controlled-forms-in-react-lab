// src/App.jsx
import './App.css';
import Bookshelf from './component/Bookshelf.jsx';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf addBook={addBook} books={books} />
    </>
  );
};

export default App;
