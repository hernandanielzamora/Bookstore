import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus() {
      const message = 'Under construction';
      return message;
    },
  },
});

export const { checkStatus } = categoriesReducer.actions;
export default categoriesReducer.reducer;
