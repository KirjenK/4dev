/* eslint-disable no-case-declarations */
import * as type from '../actions/tasksActions';

// eslint-disable-next-line default-param-last
export const tasksReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case type.TASKS_UPLOAD:
      return action.payload.sort((a, b) => b.priority - a.priority);

    case type.TASKS_FILTER:
      return state.filter((el) => el.id !== action.payload);

    case type.CHANGE_STATUS:
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, status: action.id };
        }
        return el;
      });

    case type.CHANGE_PRIORITY:
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, priority: action.id };
        }
        return el;
      });

    case type.ADD_TASK:
      return [...state, action.payload];

    case type.SORT_BY_PRIORITY:
      const sortedTasks = [...state].sort((a, b) => b.priority - a.priority);
      return sortedTasks;

    default:
      return state;
  }
};
