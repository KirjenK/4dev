export const TASKS_UPLOAD = 'TASKS_UPLOAD';
export const TASKS_FILTER = 'TASKS_FILTER';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';
export const ADD_TASK = 'ADD_TASK';
export const SORT_BY_PRIORITY = 'SORT_BY_PRIORITY';

export const tasksUpload = (tasks) => ({
  type: TASKS_UPLOAD, payload: tasks,
});

export const tasksFilter = (id) => ({
  type: TASKS_FILTER, payload: id,
});

export const changeStatus = (task, id) => ({
  type: CHANGE_STATUS, payload: task, id,
});

export const changePriority = (task, id) => ({
  type: CHANGE_PRIORITY, payload: task, id,
});

export const addTask = (task) => ({
  type: ADD_TASK, payload: task,
});

export const sortByPriority = () => ({
  type: SORT_BY_PRIORITY,
});
