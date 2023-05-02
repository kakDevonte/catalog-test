import { createAsyncThunk } from '@reduxjs/toolkit';
import { starAPI } from '../../api/api';
import { FilmsState, FilmType } from './types';

export const getFilms = createAsyncThunk<FilmsState>(
  'films/getFilms',
  async () => {
    const { data } = await starAPI.getFilms();
    return data;
  }
);

export const getFilmById = createAsyncThunk<FilmType, number>(
  'films/getFilmById',
  async (id) => {
    const { data } = await starAPI.getFilmById(id);
    return data;
  }
);

export const getFilmByArray = createAsyncThunk<FilmType[], string[]>(
  'films/getFilmByArray',
  async (array) => {
    const peopleArray: FilmType[] = await Promise.all(
      array.map(async (item) => {
        const { data } = await starAPI.getFilmById(Number(item));
        return data;
      })
    );

    return peopleArray;
  }
);
