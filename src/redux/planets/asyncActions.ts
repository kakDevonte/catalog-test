import { createAsyncThunk } from '@reduxjs/toolkit';
import { starAPI } from '../../api/api';
import { PlanetsState, PlanetType } from './types';

export const getPlanets = createAsyncThunk<PlanetsState, number>(
  'planets/getPlanets',
  async (page) => {
    const { data } = await starAPI.getPlanets(page);
    return data;
  }
);

export const getPlanetById = createAsyncThunk<PlanetType, number>(
  'planets/getPlanetById',
  async (id) => {
    const { data } = await starAPI.getPlanetById(id);
    return data;
  }
);
