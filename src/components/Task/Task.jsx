import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './task.module.css';
import Button from '../UI/Button/Button';
import {
  changeStatus, tasksFilter, changePriority, sortByPriority,
} from '../../store/actions/tasksActions';

export default function Task({ taskId, setActive }) {
  const tasks = useSelector((store) => store.tasksStore);
  const task = tasks.find((el) => el.id === taskId);
  const navigate = useNavigate();
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(tasksFilter(id));
    setActive(false);
    navigate('/tasks');
  };

  const handleChangeStatus = (e) => {
    const currentStatus = Number(e.target.value);
    setStatus(currentStatus);
  };

  const handleChangePriority = (e) => {
    const currentPriority = Number(e.target.value);
    setPriority(currentPriority);
  };

  const handleClickSave = () => {
    if (priority !== task.priority) {
      dispatch(changePriority(task, priority));
      dispatch(sortByPriority());
    }
    if (status !== task.status) {
      dispatch(changeStatus(task, status));
    }
    setActive(false);
    navigate('/tasks');
  };

  return (
    <div className={styles.wrapper}>
      <h3>{task?.title}</h3>
      <div>Исполнитель: {task?.author_name}</div>
      <hr />
      <div>
        <h4>Описание задачи</h4>
        <p className={styles.taskDescription}>{task?.description}</p>
      </div>
      <div className={styles.selectWrapper}>
        <span>Cостояние:</span>
        <select
          className={styles.select}
          defaultValue={String(task.status)}
          onChange={handleChangeStatus}
        >
          <option value="1">В работе</option>
          <option value="0">В очереди</option>
          <option value="2">Выполнено</option>
        </select>
      </div>
      <div className={styles.selectWrapper}>
        <span>Приоритет:</span>
        <select
          className={styles.select}
          defaultValue={String(task.priority)}
          onChange={handleChangePriority}
        >
          <option value="0">Не срочно</option>
          <option value="1">Средняя важность</option>
          <option value="2">Срочно</option>
        </select>
      </div>

      <div className={styles.btnWrapper}>
        <button className={styles.btnDelete} type="button" onClick={() => handleClickDelete(task.id)}>Удалить</button>
        <Button text="Сохранить" onClick={handleClickSave} />
        <hr />

      </div>
    </div>
  );
}
