import { createSlice } from '@reduxjs/toolkit';
import { FilmsState } from './types';
import { getFilmByArray, getFilmById, getFilms } from './asyncActions';

const initialState: FilmsState = {
  results: [],
  currFilm: null,
  status: 'success',
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    clearFilms(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilms.fulfilled, (state, action) => {
      state.results = state.results.concat(action.payload.results);
    });
    builder.addCase(getFilmById.fulfilled, (state, action) => {
      state.currFilm = action.payload;
    });
    builder.addCase(getFilmByArray.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getFilmByArray.fulfilled, (state, action) => {
      state.results = action.payload;
      state.status = 'success';
    });
    builder.addCase(getFilmByArray.rejected, (state) => {
      state.results = [];
      state.status = 'error';
    });
  },
});

export const { clearFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
