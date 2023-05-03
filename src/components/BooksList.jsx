import Book from './Book';

const Books = () => {
  const bookArray = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      status: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      status: '0%',
      chapter: 'Introduction',
    },
  ];

  return (
    <section className="books-container">
      <div className="book-list">
        {bookArray.map((book) => (
          <Book
            key={book.id}
            genre={book.genre}
            title={book.title}
            author={book.author}
            status={book.status}
            chapter={book.chapter}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
