import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uId } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBooks] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBooks({ ...bookData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uId(),
      title: bookData.title,
      author: bookData.author,
      category: 'Action',
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
            id="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author..."
            id="author"
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
