
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './tasks/reducer';


export const store = configureStore({
  reducer: rootReducer,
});


