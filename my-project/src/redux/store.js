// store.js
import { configureStore } from '@reduxjs/toolkit';
// import propertyReducer from './propertySlice';
import propertySlice from './slices/propertySlice';

const store = configureStore({
  reducer: {
    property: propertySlice,
  },
});

export default store;
