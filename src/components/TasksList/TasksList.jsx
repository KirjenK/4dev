/* eslint-disable max-len */
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
  const [isNewTask, setIsNewTask] = useState(false);

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
    setModalActive(true);
    setTaskId(item.id);
    navigate(`/tasks/${item.id}`);
  };

  const newTaskHandler = () => {
    setModalActive(true);
    setIsNewTask(true);
  };

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <h3>Загрузка данных..</h3>
      ) : (
        <>
          <div className={styles.newTaskBox}>
            <button onClick={newTaskHandler} type="button">+ Новая задача</button>
          </div>
          <div className={styles.taskContainer}>
            <div className={styles.columnBox}>
              <h2>В очереди</h2>
              {tasks.filter((el) => el.status === 0).length === 0 ? (
                <div>
                  Нет задач в данном блоке
                </div>
              ) : (
                <>
                  {tasks.filter((el) => el.status === 0).map((task) => (
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
                </>
              )}
            </div>
            <div className={styles.columnBox}>
              <h2>В работе</h2>
              {tasks.filter((el) => el.status === 1).length === 0 ? (
                <div>
                  Нет задач в данном блоке
                </div>
              ) : (
                <>
                  {tasks.filter((el) => el.status === 1).map((task) => (
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
                </>
              )}
            </div>
            <div className={styles.columnBox}>
              <h2>Выполнено</h2>
              {tasks.filter((el) => el.status === 2).length === 0 ? (
                <div>
                  Нет задач в данном блоке
                </div>
              ) : (
                <>
                  {tasks.filter((el) => el.status === 2).map((task) => (
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
                </>
              )}
            </div>
          </div>
        </>
      )}
      {modalActive && (
        <Modal
          taskId={taskId}
          active={modalActive}
          setActive={setModalActive}
          isNewTask={isNewTask}
          setIsNewTask={setIsNewTask}
        />
      )}
    </div>
  );
}
