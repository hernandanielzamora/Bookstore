import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories-container">
      <div>
        <button
          className="categories-btn"
          type="button"
          onClick={handleClick}
        >
          Check Status
        </button>
        <h1 className="categories-msg">{message}</h1>
      </div>
    </section>
  );
};

export default Categories;
