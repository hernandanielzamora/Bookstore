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
    dispatch(removeBook(bookId));
  };

  return (
    <div className="flex-space flex-con book-card">
      <div className={styles.leftSide}>
        {/* Genre - Book - Author */}
        <div>
          <p className={styles.genre}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          {/* Comments - Remove - Edit */}
          <ul className={styles.btnContainer}>
            <Button
              title="Comments"
              handleClick={() => { }}
              className={styles.btn}
            />
            <Button
              title="Remove"
              handleClick={() => {
                handleRemove(id);
              }}
              className={styles.btn}
            />
            <Button
              title="Edit"
              handleClick={() => { }}
              className={styles.btn}
            />
          </ul>
        </div>
        {/* Left Part Ends Here */}
      </div>

      {/* Right Part Starts Here */}

      {/* 2nd Right Part */}
      <div className="flex-con flex-space card-right">
        <div>
          <div className="flex-con flex-space">
            <div className={styles.oval} />
            <div className={styles.numbers}>
              <p className={styles.porcentageNum}>64%</p>
              <p className={styles.porcentageText}>Completed</p>
            </div>
          </div>
        </div>
        <div className={styles.currentChapter}>
          <h3 className={styles.currentTitle}>Current Chapter</h3>
          <p className={styles.chapter}>Chapter 12</p>
          <Button
            title="Update progress"
            handleClick={() => { }}
            className={styles.chapterBtn}
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
  id: PropTypes.string.isRequired,
};

export default Book;
