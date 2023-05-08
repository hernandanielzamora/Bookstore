import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const bookArr = useSelector((state) => state.books);
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
};

export default Books;
