import * as type from '../actions/tasksActions';

// eslint-disable-next-line default-param-last
export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case type.TASKS_UPLOAD:
      return action.payload.sort((a, b) => b.priority - a.priority);

    case type.TASKS_FILTER:
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};
