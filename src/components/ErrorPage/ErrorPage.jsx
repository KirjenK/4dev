import { useNavigate } from 'react-router-dom';
import styles from './errorPage.module.css';
import Button from '../UI/Button/Button';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <h2>Ошибка доступа</h2>
      <hr />
      <p>Для доступа к этой странице вам необходимо пройти аутентификацию</p>
      <Button text="Назад" onClick={handleClick} type="button" />
    </div>
  );
}
