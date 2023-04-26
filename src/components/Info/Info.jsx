import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

export default function Info() {
  return (
    <div style={{
      marginTop: '1rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '300px',
      textAlign: 'center',
    }}
    >
      <div style={{
        marginBottom: '0.2rem',
      }}
      > Чтобы войти под другим логином нужно выйти из профиля
      </div>
      <Link to="/tasks"> <Button text="Назад" /></Link>
    </div>
  );
}
