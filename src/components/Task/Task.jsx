import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './task.module.css';
import Button from '../UI/Button/Button';

import { tasksFilter } from '../../store/actions/tasksActions';

export default function Task({ taskId, setActive }) {
  const tasks = useSelector((store) => store.tasksStore);
  const task = tasks.find((el) => el.id === taskId);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(tasksFilter(id));
    setActive(false);
    navigate('/tasks');
  };
  return (
    <div>
      <h3 className={styles.wrapper}>{task?.title}</h3>
      <div>Исполнитель: {task?.author_name}</div>
      <hr />
      <div>
        <h4>Описание задачи</h4>
        <p>{task?.description}</p>
      </div>
      <div> Состояние:</div>
      <div> Приоритет:</div>
      <Button text="Удалить" onClick={() => handleClick(task.id)} />
    </div>
  );
}
