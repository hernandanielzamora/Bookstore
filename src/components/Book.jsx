import { PropTypes } from 'prop-types';
import Button from './Buttons';
import styles from '../styles/Book.module.css';

const Book = ({
  genre, title, author, status, chapter,
}) => {
  const buttonsArray = [
    {
      id: 1,
      title: 'Comments',
    },
    {
      id: 2,
      title: 'Remove',
    },
    {
      id: 3,
      title: 'Edit',
    },
  ];

  return (
    <div className={styles.bookCard}>
      <div className={styles.leftSide}>
        {/* Genre - Book - Author */}
        <div>
          <p className={styles.genre}>{genre}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          {/* Comments - Remove - Edit */}
          <ul>
            {buttonsArray.map((button) => (
              <Button
                key={button.id}
                title={button.title}
              />
            ))}
          </ul>
        </div>
        {/* Left Part Ends Here */}
      </div>

      {/* Right Part Starts Here */}

      {/* 2nd Right Part */}
      <div className={styles.cardRight}>
        <div>
          <div>
            <p>{status}</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <h3>Current Chapter</h3>
          <p>{chapter}</p>
          <Button
            title="Update progress"
          />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
