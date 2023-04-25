import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Авторизация</h2>
      <hr />
      <form>
        <input type="text" value={login} onChange={handleLogin} placeholder="Логин" />
        <input type="password" value={password} onChange={handlePassword} placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
