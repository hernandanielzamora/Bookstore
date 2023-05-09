import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialArray = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: '2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: '3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cCvZytSi2EJd5lzHEjtZ/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(`${apiUrl}books`);
  if (res.data) {
    return res.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  await axios.post(`${apiUrl}books`, data);
  return data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${apiUrl}books/${id}`);
  return id;
});

const booksReducer = createSlice({
  name: 'books',
  initialState: initialArray,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchBooks.fulfilled, (state, action) => {
      const newStatus = state;
      Object.entries(action.payload).forEach((el) => {
        newStatus.push({
          id: el[0],
          title: el[1][0].title,
          author: el[1][0].author,
          category: el[1][0].category,
        });
      });
      return newStatus;
    });

    build.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    });

    build.addCase(removeBook.fulfilled, (state, action) => {
      const newStatus = state.filter((book) => book.id !== action.payload);
      return newStatus;
    });
  },
});

export default booksReducer.reducer;
