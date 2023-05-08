import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import Button from './Buttons';

import styles from '../styles/Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeBook({ id: bookId }));
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.leftSide}>
        {/* Genre - Book - Author */}
        <div>
          <p className={styles.genre}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          {/* Comments - Remove - Edit */}
          <ul>
            <Button
              title="Comments"
              handleClick={() => { }}
              className="btn"
            />
            <Button
              title="Remove"
              handleClick={() => {
                handleRemove(id);
              }}
              className="btn"
            />
            <Button
              title="Edit"
              handleClick={() => { }}
              className="btn"
            />
          </ul>
        </div>
        {/* Left Part Ends Here */}
      </div>

      {/* Right Part Starts Here */}

      {/* 2nd Right Part */}
      <div className={styles.cardRight}>
        <div>
          <div>
            <p>20%</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <h3>Current Chapter</h3>
          <p>Chapter 12</p>
          <Button
            title="Update progress"
            handleClick={() => { }}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
