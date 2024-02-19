// propertySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  senderUserId: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSenderUserId: (state, action) => {
      state.senderUserId = action.payload;
    },
  },
});

export const { setSenderUserId } = propertySlice.actions;
export default propertySlice.reducer;
