import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './userOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      items: [],
      isLoading: false,
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.items = action.payload;
      state.users.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, state => {
      state.users.isLoading = true;
    });
  },
});

export const usersReducer = usersSlice.reducer;
