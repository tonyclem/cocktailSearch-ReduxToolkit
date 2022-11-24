import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const initialState = {
  loading: true,
  searchTerm: 'a',
  cocktails: [],
};

export const getCocktails = createAsyncThunk('cocktails/getCocktails', () => {
  try {
    const response = fetch(`${url}${initialState.searchTerm}`);
    const data = response.json();
    const { drinks } = data;
    console.log('drink', drinks);
  } catch (error) {
    console.log(error);
  }
});

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
});

export const {} = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
