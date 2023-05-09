import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchBooks } from '../redux/books/bookSlice';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const fetching = useRef(true);

  useEffect(() => {
    if (fetching.current) {
      fetching.current = false;
      dispatch(fetchBooks());
    }
  }, []);

  const bookArr = useSelector((state) => state.books);

  if (bookArr.length > 0) {
    return (
      <section className="books-container">
        <div className="book-list">
          {bookArr.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              category={book.category}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
      </section>
    );
  }
  return '';
};

export default Books;
