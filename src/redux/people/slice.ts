import { createSlice } from '@reduxjs/toolkit';
import { PeopleState } from './types';
import { getPeople, getPeopleByArray, getPeopleById } from './asyncActions';

const initialState: PeopleState = {
  count: 1,
  next: null,
  previous: null,
  results: [],
  currPeople: null,
  status: 'success',
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearPeople(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.next = action.payload.next;
      state.results = state.results.concat(action.payload.results);
    });
    builder.addCase(getPeopleByArray.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getPeopleByArray.fulfilled, (state, action) => {
      state.results = action.payload;
      state.status = 'success';
    });
    builder.addCase(getPeopleByArray.rejected, (state) => {
      state.results = [];
      state.status = 'error';
    });
    builder.addCase(getPeopleById.fulfilled, (state, action) => {
      state.results.push(action.payload);
    });
  },
});

export const { clearPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
