import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (credentials, thunkAPI) => {
    try {
      const responce = await addDoc(collection(db, 'users'), credentials);
      const postId = await responce.id;

      console.log(postId);
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const data = [];
      const responce = await getDocs(collection(db, 'users'));

      responce.forEach(doc => {
        data.push({ id: doc.id, user: doc.data() });
      });

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
