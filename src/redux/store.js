import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
