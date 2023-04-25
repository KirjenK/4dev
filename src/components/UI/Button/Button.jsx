import styles from './button.module.css';

export default function Button(props) {
  const { text, onClick } = props;
  return (
    <button className={styles.clBtn} onClick={onClick} type="button">
      {text}
    </button>
  );
}
