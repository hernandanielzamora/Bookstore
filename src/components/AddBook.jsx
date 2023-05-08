import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBooks] = useState({
    title: '',
    author: '',
  });

  const booksArrLen = useSelector((state) => state.books.length);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'book-title':
        setBooks({ ...bookData, title: e.target.value });
        break;
      case 'book-author':
        setBooks({ ...bookData, author: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksArrLen === 0 ? 0 : booksArrLen + 1,
      title: bookData.title,
      author: bookData.author,
    };
    dispatch(addBook(newBook));
    setBooks({ title: '', author: '' });
  };

  return (
    <>
      <div className="form-container">
        <h2>Add a new Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            id="book-title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author..."
            id="book-author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
          <button type="submit" id="add-book">Add book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
