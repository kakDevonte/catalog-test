import { createSlice } from '@reduxjs/toolkit';
import { PlanetsState } from './types';
import { getPlanetById, getPlanets } from './asyncActions';

const initialState: PlanetsState = {
  count: 1,
  next: null,
  previous: null,
  results: [],
  currPlanet: null,
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    clearPlanets(state) {
      state.results = [];
    },
    clearCurrPlanet(state) {
      state.currPlanet = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlanets.fulfilled, (state, action) => {
      state.next = action.payload.next;
      state.results = state.results.concat(action.payload.results);
    });
    builder.addCase(getPlanetById.fulfilled, (state, action) => {
      state.currPlanet = action.payload;
    });
  },
});

export const { clearPlanets, clearCurrPlanet } = planetsSlice.actions;
export default planetsSlice.reducer;
