import styles from './header.module.css';
import logo from '../../img/photo.svg';
import telega from '../../img/telega.png';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="logo" style={{ maxWidth: '300px', width: '300px' }} />
      <div className={styles.rightBox}>
        <div>Test by Kir</div>
        <a href="https://t.me/kirjen" target="blank">
          <img src={telega} alt="" style={{ maxWidth: '40px', width: '40px' }} />
        </a>
      </div>
    </header>
  );
}
