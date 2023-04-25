import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './reducers/tasksReducer';

const reducer = combineReducers({
  tasksStore: tasksReducer,
});

export const store = configureStore({ reducer });
