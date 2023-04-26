// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../img/photo.svg';
import telega from '../../img/telega.png';
import Button from '../UI/Button/Button';

export default function Header({ authKey, setAuthKey }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('authKey');
    setAuthKey(null);
    navigate('/');
  };

  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="logo" style={{ maxWidth: '300px', width: '300px' }} />
      <div className={styles.rightBox}>
        <div>Test by Kir</div>
        <a href="https://t.me/kirjen" target="blank">
          <img className={styles.telega} src={telega} alt="" style={{ maxWidth: '40px', width: '40px' }} />
        </a>
        {Boolean(authKey)
          && <Button text="Выйти" onClick={handleClick} />}

      </div>
    </header>
  );
}
