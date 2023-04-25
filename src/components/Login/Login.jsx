import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export default function Login({ setAuthKey }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const p = document.getElementById('msgToUser');
    const btn = document.getElementById('btnSumbitAuth');

    if (login === 'admin' && password === 'admin') {
      const key = Math.random().toString(36).slice(2);
      localStorage.setItem('authKey', key);

      btn.style = 'display: none';
      p.style = 'display: block';
      p.textContent = 'Успешный вход';

      setTimeout(() => {
        setAuthKey(key);
        navigate('/tasks');
      }, 1000);
    } else {
      setLogin('');
      setPassword('');
      btn.style = 'margin-bottom: 0px';
      p.textContent = 'Неверный логин или пароль';
      p.style = 'margin-top: 8px';
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Авторизация</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" value={login} onChange={handleLogin} placeholder="Логин" />
        <input type="password" value={password} onChange={handlePassword} placeholder="Пароль" />
        <button id="btnSumbitAuth" type="submit">Войти</button>
        <p style={{ display: 'none' }} id="msgToUser" />
      </form>
    </div>
  );
}
