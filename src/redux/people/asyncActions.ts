import { createAsyncThunk } from '@reduxjs/toolkit';
import { starAPI } from '../../api/api';
import { PeopleState, PeopleType } from './types';

export const getPeople = createAsyncThunk<PeopleState, number>(
  'people/getPeople',
  async (page) => {
    const { data } = await starAPI.getPeople(page);
    return data;
  }
);

export const getPeopleById = createAsyncThunk<PeopleType, number>(
  'people/getPeopleById',
  async (id) => {
    const { data } = await starAPI.getPeopleById(id);
    return data;
  }
);

export const getPeopleByArray = createAsyncThunk<PeopleType[], string[]>(
  'people/getPeopleByArray',
  async (array) => {
    const peopleArray: PeopleType[] = await Promise.all(
      array.map(async (item) => {
        const { data } = await starAPI.getPeopleById(Number(item));
        return data;
      })
    );

    return peopleArray;
  }
);
