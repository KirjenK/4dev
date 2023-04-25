import { useEffect, useState } from 'react';
import tasksArr from './tasksArr';
import styles from './tasksList.module.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  // Эмитируем запрос на сервер
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 1500);
      });
      setTasks(tasksArr);
      setIsLoad(false);
    };

    fetchData();
  }, []);

  console.log('tasks', tasks);

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <h3>Загрузка данных..</h3>
      ) : (
        <div className={styles.taskContainer}>
          {tasks.sort((a, b) => b.priority - a.priority).map((task) => (
            <div key={task.id} className={styles.taskWrapper}>
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
    </div>
  );
}
