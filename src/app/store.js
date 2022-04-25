import { configureStore } from '@reduxjs/toolkit';
import contributorReducer from "../reducers/contributorReducer";

export const store = configureStore({
  reducer: {
    counter: contributorReducer,
  },
});
