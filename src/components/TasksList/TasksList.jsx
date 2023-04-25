import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import tasksArr from './tasksArr';
import styles from './tasksList.module.css';
import { tasksUpload } from '../../store/actions/tasksActions';
import Modal from '../Modal/Modal';

export default function Tasks() {
  const [isLoad, setIsLoad] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [taskId, setTaskId] = useState('');

  const tasks = useSelector((store) => store.tasksStore);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // Эмитируем запрос на сервер
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 500);
      });
      dispatch(tasksUpload(tasksArr));
      setIsLoad(false);
    };

    fetchData();
  }, []);

  const handleClick = (item) => {
    console.log('item', item);
    setModalActive(true);
    setTaskId(item.id);
    navigate(`/tasks/${item.id}`);
  };

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <h3>Загрузка данных..</h3>
      ) : (
        <div className={styles.taskContainer}>
          {tasks.map((task) => (
            <div onClick={() => handleClick(task)} key={task.id} className={styles.taskWrapper}>
              <div className={styles.cirleAndTitleWrapper}>
                {task.priority === 2
                  && <div className={styles.circle2} />}
                {task.priority === 1
                  && <div className={styles.circle1} />}
                {task.priority === 0
                  && <div className={styles.circle0} />}
                <h3>{task.title}</h3>
              </div>
              <hr />
              <p>{task.author_name}</p>
            </div>
          ))}
        </div>
      )}
      {modalActive && (
        <Modal
          taskId={taskId}
          active={modalActive}
          setActive={setModalActive}
        />
      )}
    </div>
  );
}
