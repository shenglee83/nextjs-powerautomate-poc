import { configureStore, combineReducers } from "@reduxjs/toolkit";

import formReducer from './slice/form';

const rootReducer = combineReducers({
  form: formReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Inger the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type 
export type AppDispatch = typeof store.dispatch;