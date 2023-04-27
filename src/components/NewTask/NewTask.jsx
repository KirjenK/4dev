import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import styles from './newTask.module.css';
import uniqueAuthors from './uniqueAuthors';
import { addTask, sortByPriority } from '../../store/actions/tasksActions';

export default function NewTask({ setActive, setIsNewTask }) {
  const [authors, setAuthors] = useState(uniqueAuthors);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [errMsg, setErrorMsg] = useState(false);

  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(Number(e.target.value));
  };

  const handlePriorityChange = (e) => {
    setPriority(Number(e.target.value));
  };

  const handleCancelClick = () => {
    setActive(false);
  };

  const handleSaveClick = () => {
    if (title && description && author && status !== '' && priority !== '') {
      const date = new Date();

      const newTask = {
        id: String(Date.now()),
        status,
        priority,
        title,
        description,
        schedule: {
          creation_time: date.toISOString(),
        },
        author_name: author,
      };
      dispatch(addTask(newTask));
      dispatch(sortByPriority());
      setActive(false);
      setIsNewTask(false);
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Новая задача</h3>
      <hr />
      <form className={styles.form}>
        <div>
          <label htmlFor="title">Название:</label>
          <input value={title} onChange={handleChangeTitle} className={styles.formEl} name="title" type="text" />
        </div>
        <div>
          <label htmlFor="author_name">Исполнитель:</label>
          <select value={author} onChange={handleAuthorChange} className={styles.formEl} name="author_name">
            <option disabled value="">Выберите исполнителя</option>

            {authors.map((el) => (
              <option key={el.id} value={el.author_name}>{el.author_name}</option>
            ))}
          </select>
        </div>
        <label className={styles.description} htmlFor="description">Описание задачи:</label>
        <textarea value={description} onChange={handleDescChange} className={styles.textarea} name="description" type="text" />
        <div>
          <label htmlFor="status">Состояние:</label>
          <select value={status} onChange={handleStatusChange} className={styles.formEl} name="status">
            <option disabled value="">Выберите статус</option>
            <option value="1">В работе</option>
            <option value="0">В очереди</option>
            <option value="2">Выполнено</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority">Приоритет:</label>
          <select value={priority} onChange={handlePriorityChange} className={styles.formEl} name="priority">
            <option disabled value="">Выберите срочность</option>
            <option value="0">Не срочно</option>
            <option value="1">Средняя важность</option>
            <option value="2">Срочно</option>
          </select>
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={handleCancelClick} className={styles.btnCancel} type="button">Отмена</button>
          <Button onClick={handleSaveClick} text="Сохранить" />
        </div>
        {errMsg
          && (
            <div>
              <span>Необходимо заполнть все поля</span>
            </div>
          )}
      </form>
    </div>
  );
}
