export const TASKS_UPLOAD = 'TASKS_UPLOAD';
export const TASKS_FILTER = 'TASKS_FILTER';

export const tasksUpload = (tasks) => ({
  type: TASKS_UPLOAD, payload: tasks,
});

export const tasksFilter = (id) => ({
  type: TASKS_FILTER, payload: id,
});
