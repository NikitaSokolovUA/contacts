import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './userOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.items = action.payload;
    });
  },
});

export const usersReducer = usersSlice.reducer;
